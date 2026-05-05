#!/usr/bin/env python3
"""
Construye el CSV de redirects 301 para importar en Shopify Admin
basándose en las URLs que rankeaban en WordPress (PRE migración) y las
nuevas URLs que rankean en Shopify (POST migración).

Outputs:
    seo/redirects_shopify.csv       — listo para importar en Shopify
    seo/redirects_review_manual.csv — URLs sin match claro, revisar a mano
"""

import csv
import re
from collections import defaultdict
from pathlib import Path
from urllib.parse import urlparse

BASE = Path(__file__).parent
EXPORTS = BASE / "gsc-exports"
DOMAIN = "https://electrosmogespana.com"

PRE_FILE = EXPORTS / "pre_migracion_query-page.csv"
POST_FILE = EXPORTS / "post_migracion_query-page.csv"
OUT_REDIRECTS = BASE / "redirects_shopify.csv"
OUT_REVIEW = BASE / "redirects_review_manual.csv"


def to_path(url: str) -> str:
    """Devuelve el path relativo de una URL (con barra final normalizada)."""
    p = urlparse(url).path
    if not p:
        return "/"
    return p


def normalize_slug(path: str) -> str:
    """Extrae el último segmento útil de un path, sin barras ni query."""
    p = path.strip("/")
    if not p:
        return ""
    return p.split("/")[-1]


def aggregate_by_url(rows):
    """Agrupa filas por URL y suma clicks+impr."""
    agg = defaultdict(lambda: {"clicks": 0, "impressions": 0})
    for r in rows:
        url = r["page"]
        agg[url]["clicks"] += int(r["clicks"])
        agg[url]["impressions"] += int(r["impressions"])
    return agg


def load_csv(path):
    with open(path) as f:
        return list(csv.DictReader(f))


def is_wp_url(path: str) -> bool:
    """Identifica patrones típicos de URLs WordPress."""
    return any(
        path.startswith(prefix)
        for prefix in (
            "/producto/",
            "/categoria-producto/",
            "/wp-content/",
            "/wp-admin/",
            "/?p=",
            "/page/",
        )
    ) or (
        # slugs en raíz que NO son URLs Shopify típicas (estas empiezan por
        # /products/, /collections/, /pages/, /blogs/, /policies/, /account)
        path != "/"
        and not path.startswith(
            ("/products/", "/collections/", "/pages/", "/blogs/", "/policies/", "/account", "/cart")
        )
    )


def is_shopify_url(path: str) -> bool:
    return path.startswith(("/products/", "/collections/", "/pages/", "/blogs/"))


def derive_target(wp_path: str, shopify_paths: set) -> tuple[str, str]:
    """
    Dado un path WordPress, devuelve (target_path, confidence) donde
    confidence ∈ {auto, heuristic, manual}.
    """
    slug = normalize_slug(wp_path)

    # PDFs y assets de wp-content: no redirigibles
    if wp_path.startswith("/wp-content/") or wp_path.startswith("/wp-admin/"):
        return ("", "skip")

    # PATRÓN 1 — /producto/SLUG/ → /products/SLUG
    if wp_path.startswith("/producto/"):
        target = f"/products/{slug}"
        if target in shopify_paths:
            return (target, "auto")
        # Si no existe el match exacto, igual sugerimos /products/<slug> y
        # marcamos para revisión por si el slug cambió ligeramente
        candidate = next(
            (p for p in shopify_paths if p.startswith("/products/") and slug in p),
            None,
        )
        return (candidate or target, "heuristic" if candidate else "manual")

    # PATRÓN 2 — /categoria-producto/SLUG/ → /collections/SLUG
    if wp_path.startswith("/categoria-producto/"):
        target = f"/collections/{slug}"
        if target in shopify_paths:
            return (target, "auto")
        candidate = next(
            (p for p in shopify_paths if p.startswith("/collections/") and slug in p),
            None,
        )
        return (candidate or target, "heuristic" if candidate else "manual")

    # PATRÓN 3 — slug en raíz /SLUG/ → buscar match en /pages/, /blogs/electrosmog/, /products/
    if wp_path.count("/") == 2 and wp_path.endswith("/"):
        for prefix in ("/pages/", "/blogs/electrosmog/", "/products/", "/collections/"):
            target = f"{prefix}{slug}"
            if target in shopify_paths:
                return (target, "auto")
        # Sin match exacto: sugerimos /pages/<slug> (típico para landings) o /blogs/
        candidate = next(
            (p for p in shopify_paths if slug in p and p != wp_path),
            None,
        )
        if candidate:
            return (candidate, "heuristic")
        # Para posts típicos de blog (slug largo con guiones), sugerir blog
        if "-" in slug and len(slug) > 25:
            return (f"/blogs/electrosmog/{slug}", "manual")
        return (f"/pages/{slug}", "manual")

    return ("", "manual")


def main():
    pre = load_csv(PRE_FILE)
    post = load_csv(POST_FILE)

    pre_by_url = aggregate_by_url(pre)
    post_by_url = aggregate_by_url(post)

    # Conjunto de paths Shopify que YA existen (rankeando POST migración)
    shopify_paths = {to_path(u) for u in post_by_url}

    # URLs WordPress candidatas: las que aparecen en PRE con paths "antiguos",
    # más las URLs WP que SIGUEN apareciendo en POST (duplicate content vivo)
    candidates = {}
    for url, m in pre_by_url.items():
        path = to_path(url)
        if is_wp_url(path) and not is_shopify_url(path):
            candidates[path] = {
                "clicks_pre": m["clicks"],
                "impr_pre": m["impressions"],
                "clicks_post": 0,
                "impr_post": 0,
            }

    # Sumar tráfico POST de URLs WP que siguen rankeando (duplicate content)
    for url, m in post_by_url.items():
        path = to_path(url)
        if is_wp_url(path) and not is_shopify_url(path):
            if path not in candidates:
                candidates[path] = {
                    "clicks_pre": 0,
                    "impr_pre": 0,
                    "clicks_post": 0,
                    "impr_post": 0,
                }
            candidates[path]["clicks_post"] = m["clicks"]
            candidates[path]["impr_post"] = m["impressions"]

    # Generar redirects con clasificación
    auto_redirects = []
    heuristic_redirects = []
    manual_review = []

    for wp_path, m in candidates.items():
        target, confidence = derive_target(wp_path, shopify_paths)
        total_clicks = m["clicks_pre"] + m["clicks_post"]
        total_impr = m["impr_pre"] + m["impr_post"]
        row = {
            "from": wp_path,
            "to": target,
            "confidence": confidence,
            "clicks_pre": m["clicks_pre"],
            "clicks_post": m["clicks_post"],
            "impr_pre": m["impr_pre"],
            "impr_post": m["impr_post"],
            "total_traffic": total_clicks,
            "total_impressions": total_impr,
        }
        if confidence == "auto":
            auto_redirects.append(row)
        elif confidence == "heuristic":
            heuristic_redirects.append(row)
        elif confidence == "manual":
            manual_review.append(row)
        # skip → ignored

    # Ordenar por tráfico (más impresiones = más prioridad)
    sort_key = lambda r: (-r["total_impressions"], -r["total_traffic"])
    auto_redirects.sort(key=sort_key)
    heuristic_redirects.sort(key=sort_key)
    manual_review.sort(key=sort_key)

    # CSV principal — formato Shopify Admin (auto + heuristic, los seguros)
    with open(OUT_REDIRECTS, "w", newline="", encoding="utf-8") as f:
        w = csv.writer(f)
        w.writerow(["Redirect from", "Redirect to"])
        for r in auto_redirects + heuristic_redirects:
            w.writerow([r["from"], r["to"]])

    # CSV de revisión manual con contexto detallado
    with open(OUT_REVIEW, "w", newline="", encoding="utf-8") as f:
        w = csv.writer(f)
        w.writerow([
            "URL antigua (WP)",
            "Sugerencia destino",
            "Confianza",
            "Clics PRE",
            "Clics POST",
            "Impr. PRE",
            "Impr. POST",
            "Acción recomendada",
        ])
        for r in manual_review + heuristic_redirects:
            action = (
                "REVISAR: confirma URL en Shopify y edita el CSV antes de importar"
                if r["confidence"] == "manual"
                else "Probable correcto pero verificar match aproximado"
            )
            w.writerow([
                r["from"], r["to"], r["confidence"],
                r["clicks_pre"], r["clicks_post"],
                r["impr_pre"], r["impr_post"],
                action,
            ])

    # Resumen
    total_traffic_recovered = sum(r["total_impressions"] for r in auto_redirects + heuristic_redirects)
    total_traffic_pending = sum(r["total_impressions"] for r in manual_review)

    print(f"\n{'='*70}")
    print(f"  CSV REDIRECTS GENERADO")
    print(f"{'='*70}\n")
    print(f"Redirects automáticos (match exacto):     {len(auto_redirects):4d}")
    print(f"Redirects heurísticos (match aproximado): {len(heuristic_redirects):4d}")
    print(f"Para revisión manual (sin match claro):   {len(manual_review):4d}")
    print(f"  ────────────────────────────────────────")
    print(f"  TOTAL URLs procesadas:                  {len(candidates):4d}\n")
    print(f"Impresiones cubiertas por redirects: {total_traffic_recovered:>6d}")
    print(f"Impresiones pendientes de revisión:  {total_traffic_pending:>6d}")
    print(f"% cobertura automática:              {total_traffic_recovered / max(1, total_traffic_recovered+total_traffic_pending) * 100:.1f}%\n")
    print(f"Archivos generados:")
    print(f"  → {OUT_REDIRECTS.relative_to(BASE.parent)}")
    print(f"  → {OUT_REVIEW.relative_to(BASE.parent)}\n")
    print(f"Top 10 redirects por impresiones (auto+heuristic):\n")
    for r in (auto_redirects + heuristic_redirects)[:10]:
        print(f"  [{r['confidence']:9s}] {r['from']:60s} → {r['to']}  ({r['total_impressions']} impr.)")


if __name__ == "__main__":
    main()
