#!/usr/bin/env python3
"""Genera un resumen comparativo PRE vs POST migración WP→Shopify (23 marzo 2026)."""

import csv
import json
from collections import defaultdict
from pathlib import Path

BASE = Path(__file__).parent / "gsc-exports"
OUT = BASE / "MIGRATION_ANALYSIS.md"

PRE_FILE = BASE / "pre_migracion_query-page.csv"
POST_FILE = BASE / "post_migracion_query-page.csv"
DAILY_FILE = BASE / "evolucion_diaria.csv"
PAGES_FILE = BASE / "paginas_pre_y_post.csv"

CUTOFF = "2026-03-23"  # día de la migración


def load_csv(path):
    with open(path) as f:
        return list(csv.DictReader(f))


def aggregate_by(rows, key_field):
    """Agrupa filas por una clave (query o page) y suma clicks/impr."""
    agg = defaultdict(lambda: {"clicks": 0, "impressions": 0, "positions": []})
    for r in rows:
        k = r[key_field]
        agg[k]["clicks"] += int(r["clicks"])
        agg[k]["impressions"] += int(r["impressions"])
        if r.get("position"):
            agg[k]["positions"].append(float(r["position"]))
    out = {}
    for k, v in agg.items():
        avg_pos = sum(v["positions"]) / len(v["positions"]) if v["positions"] else 0
        ctr = (v["clicks"] / v["impressions"] * 100) if v["impressions"] else 0
        out[k] = {
            "clicks": v["clicks"],
            "impressions": v["impressions"],
            "ctr": round(ctr, 2),
            "position": round(avg_pos, 2),
        }
    return out


def totals(rows):
    c = sum(int(r["clicks"]) for r in rows)
    i = sum(int(r["impressions"]) for r in rows)
    return {
        "clicks": c,
        "impressions": i,
        "ctr": round(c / i * 100, 2) if i else 0,
    }


def main():
    pre = load_csv(PRE_FILE)
    post = load_csv(POST_FILE)
    daily = load_csv(DAILY_FILE)
    pages_all = load_csv(PAGES_FILE)

    # Totales
    pre_t = totals(pre)
    post_t = totals(post)

    pre_days = 43  # 2026-02-08 a 2026-03-22
    post_days = 44  # 2026-03-23 a 2026-05-05

    pre_daily_clicks = pre_t["clicks"] / pre_days
    post_daily_clicks = post_t["clicks"] / post_days
    pre_daily_impr = pre_t["impressions"] / pre_days
    post_daily_impr = post_t["impressions"] / post_days

    delta_clicks_pct = ((post_daily_clicks - pre_daily_clicks) / pre_daily_clicks * 100) if pre_daily_clicks else 0
    delta_impr_pct = ((post_daily_impr - pre_daily_impr) / pre_daily_impr * 100) if pre_daily_impr else 0

    # Agregación por query
    pre_q = aggregate_by(pre, "query")
    post_q = aggregate_by(post, "query")

    pre_queries = set(pre_q)
    post_queries = set(post_q)
    perdidas = pre_queries - post_queries
    nuevas = post_queries - pre_queries
    comunes = pre_queries & post_queries

    # Top queries perdidas (que tenían más impr/clicks PRE)
    top_perdidas = sorted(
        [(q, pre_q[q]) for q in perdidas],
        key=lambda x: -x[1]["impressions"],
    )[:25]

    # Top queries nuevas
    top_nuevas = sorted(
        [(q, post_q[q]) for q in nuevas],
        key=lambda x: -x[1]["impressions"],
    )[:25]

    # Queries comunes con mayor caída/subida en clicks
    deltas = []
    for q in comunes:
        d_clicks = post_q[q]["clicks"] - pre_q[q]["clicks"]
        d_impr = post_q[q]["impressions"] - pre_q[q]["impressions"]
        d_pos = post_q[q]["position"] - pre_q[q]["position"]
        deltas.append({
            "query": q,
            "pre_clicks": pre_q[q]["clicks"],
            "post_clicks": post_q[q]["clicks"],
            "delta_clicks": d_clicks,
            "pre_impr": pre_q[q]["impressions"],
            "post_impr": post_q[q]["impressions"],
            "delta_impr": d_impr,
            "pre_pos": pre_q[q]["position"],
            "post_pos": post_q[q]["position"],
            "delta_pos": round(d_pos, 2),
            "pre_ctr": pre_q[q]["ctr"],
            "post_ctr": post_q[q]["ctr"],
        })
    top_caidas = sorted(deltas, key=lambda x: x["delta_clicks"])[:20]
    top_subidas = sorted(deltas, key=lambda x: -x["delta_clicks"])[:20]

    # Páginas: separar PRE de POST mirando los CSVs (no el agregado total)
    pre_pages = aggregate_by(pre, "page")
    post_pages = aggregate_by(post, "page")
    pages_pre_set = set(pre_pages)
    pages_post_set = set(post_pages)
    pages_perdidas = sorted(
        [(p, pre_pages[p]) for p in (pages_pre_set - pages_post_set)],
        key=lambda x: -x[1]["impressions"],
    )[:25]
    pages_nuevas = sorted(
        [(p, post_pages[p]) for p in (pages_post_set - pages_pre_set)],
        key=lambda x: -x[1]["impressions"],
    )[:25]

    # Evolución diaria — separar PRE y POST y detectar día más bajo POST
    daily_sorted = sorted(daily, key=lambda r: r["date"])
    pre_days_data = [r for r in daily_sorted if r["date"] < CUTOFF]
    post_days_data = [r for r in daily_sorted if r["date"] >= CUTOFF]

    avg_pre_daily = sum(int(r["clicks"]) for r in pre_days_data) / len(pre_days_data) if pre_days_data else 0
    worst_post_day = min(post_days_data, key=lambda r: int(r["clicks"])) if post_days_data else None
    best_post_day = max(post_days_data, key=lambda r: int(r["clicks"])) if post_days_data else None

    # Construir markdown
    md = []
    md.append("# Análisis comparativo PRE vs POST migración WordPress→Shopify\n")
    md.append(f"**Fecha de migración**: {CUTOFF}\n")
    md.append(f"**Periodo PRE**: 2026-02-08 → 2026-03-22 ({pre_days} días)")
    md.append(f"**Periodo POST**: 2026-03-23 → 2026-05-05 ({post_days} días)\n")

    md.append("## 1. KPIs globales (clics/impresiones/CTR)\n")
    md.append("| Métrica | PRE | POST | Δ absoluto | Δ % diario |")
    md.append("|---|---:|---:|---:|---:|")
    md.append(
        f"| Clics totales | {pre_t['clicks']} | {post_t['clicks']} | "
        f"{post_t['clicks']-pre_t['clicks']:+d} | {delta_clicks_pct:+.1f}% |"
    )
    md.append(
        f"| Impresiones totales | {pre_t['impressions']} | {post_t['impressions']} | "
        f"{post_t['impressions']-pre_t['impressions']:+d} | {delta_impr_pct:+.1f}% |"
    )
    md.append(f"| CTR medio | {pre_t['ctr']}% | {post_t['ctr']}% | {post_t['ctr']-pre_t['ctr']:+.2f}pp | — |")
    md.append(
        f"| Clics/día | {pre_daily_clicks:.1f} | {post_daily_clicks:.1f} | — | "
        f"{delta_clicks_pct:+.1f}% |"
    )
    md.append(
        f"| Impr./día | {pre_daily_impr:.0f} | {post_daily_impr:.0f} | — | "
        f"{delta_impr_pct:+.1f}% |"
    )
    md.append("")

    md.append("## 2. Universo de queries\n")
    md.append(f"- Queries PRE: **{len(pre_queries)}**")
    md.append(f"- Queries POST: **{len(post_queries)}**")
    md.append(f"- Queries que desaparecieron: **{len(perdidas)}** ({len(perdidas)/len(pre_queries)*100:.0f}% del universo PRE)")
    md.append(f"- Queries nuevas: **{len(nuevas)}**")
    md.append(f"- Queries comunes: **{len(comunes)}**\n")

    md.append("## 3. Top 25 queries PERDIDAS (estaban PRE, no aparecen POST)\n")
    md.append("Estas son las que más impresiones tenían antes y han desaparecido:\n")
    md.append("| Query | Clics PRE | Impr. PRE | Pos. PRE |")
    md.append("|---|---:|---:|---:|")
    for q, m in top_perdidas:
        md.append(f"| {q} | {m['clicks']} | {m['impressions']} | {m['position']} |")
    md.append("")

    md.append("## 4. Top 25 queries NUEVAS (no estaban PRE, aparecen POST)\n")
    md.append("| Query | Clics POST | Impr. POST | Pos. POST |")
    md.append("|---|---:|---:|---:|")
    for q, m in top_nuevas:
        md.append(f"| {q} | {m['clicks']} | {m['impressions']} | {m['position']} |")
    md.append("")

    md.append("## 5. Top 20 CAÍDAS en queries comunes (perdieron clics)\n")
    md.append("| Query | Clics PRE→POST | Impr. PRE→POST | Pos. PRE→POST |")
    md.append("|---|---|---|---|")
    for d in top_caidas:
        md.append(
            f"| {d['query']} | {d['pre_clicks']} → {d['post_clicks']} ({d['delta_clicks']:+d}) | "
            f"{d['pre_impr']} → {d['post_impr']} ({d['delta_impr']:+d}) | "
            f"{d['pre_pos']} → {d['post_pos']} ({d['delta_pos']:+.1f}) |"
        )
    md.append("")

    md.append("## 6. Top 20 SUBIDAS en queries comunes (ganaron clics)\n")
    md.append("| Query | Clics PRE→POST | Impr. PRE→POST | Pos. PRE→POST |")
    md.append("|---|---|---|---|")
    for d in top_subidas:
        md.append(
            f"| {d['query']} | {d['pre_clicks']} → {d['post_clicks']} ({d['delta_clicks']:+d}) | "
            f"{d['pre_impr']} → {d['post_impr']} ({d['delta_impr']:+d}) | "
            f"{d['pre_pos']} → {d['post_pos']} ({d['delta_pos']:+.1f}) |"
        )
    md.append("")

    md.append("## 7. URLs PERDIDAS (rankearon PRE pero no POST)\n")
    md.append("⚠️ Estas son la prueba de fuego de los redirects 301:\n")
    md.append("| URL | Clics PRE | Impr. PRE |")
    md.append("|---|---:|---:|")
    for url, m in pages_perdidas:
        md.append(f"| {url} | {m['clicks']} | {m['impressions']} |")
    md.append("")

    md.append("## 8. URLs NUEVAS (rankean POST pero no PRE)\n")
    md.append("| URL | Clics POST | Impr. POST |")
    md.append("|---|---:|---:|")
    for url, m in pages_nuevas:
        md.append(f"| {url} | {m['clicks']} | {m['impressions']} |")
    md.append("")

    md.append("## 9. Evolución diaria de clics (señal del impacto de la migración)\n")
    if best_post_day and worst_post_day:
        md.append(f"- Media de clics/día PRE migración: **{avg_pre_daily:.1f}**")
        md.append(
            f"- Mejor día POST: {best_post_day['date']} ({best_post_day['clicks']} clics)"
        )
        md.append(
            f"- Peor día POST: {worst_post_day['date']} ({worst_post_day['clicks']} clics)"
        )
    md.append("")
    md.append("Serie completa POST migración (orden cronológico):")
    md.append("```")
    for r in post_days_data:
        bar = "█" * int(int(r["clicks"]) / 2)
        md.append(f"{r['date']}  {int(r['clicks']):3d}  {bar}")
    md.append("```")
    md.append("")
    md.append("Serie completa PRE migración (orden cronológico):")
    md.append("```")
    for r in pre_days_data:
        bar = "█" * int(int(r["clicks"]) / 2)
        md.append(f"{r['date']}  {int(r['clicks']):3d}  {bar}")
    md.append("```")

    OUT.write_text("\n".join(md))

    # Imprime resumen al stdout para feedback
    print(f"[OK] Análisis guardado en: {OUT}")
    print(f"     Clics PRE/POST diarios: {pre_daily_clicks:.1f} → {post_daily_clicks:.1f} ({delta_clicks_pct:+.1f}%)")
    print(f"     Impr. PRE/POST diarias: {pre_daily_impr:.0f} → {post_daily_impr:.0f} ({delta_impr_pct:+.1f}%)")
    print(f"     Queries perdidas: {len(perdidas)} | nuevas: {len(nuevas)} | comunes: {len(comunes)}")
    print(f"     URLs perdidas: {len([p for p in pages_pre_set if p not in pages_post_set])} | nuevas: {len([p for p in pages_post_set if p not in pages_pre_set])}")


if __name__ == "__main__":
    main()
