# Auditoría SEO post-migración WordPress → Shopify
**Dominio:** electrosmogespana.com
**Fecha de migración:** 23 marzo 2026
**Fecha de auditoría:** 5 mayo 2026
**Periodo analizado:** 8 febrero – 5 mayo 2026 (87 días)

---

## TL;DR ejecutivo

> 🚨 **Caída de tráfico orgánico del 48%** tras la migración. Causa raíz identificada: **redirects 301 incompletos** entre las URLs WordPress (`/producto/`, `/categoria-producto/`) y las nuevas URLs Shopify (`/products/`, `/collections/`). Duplicate content activo. Recuperable en 4-6 semanas con 4 acciones técnicas concretas.

| Métrica | PRE (43 días) | POST (44 días) | Δ |
|---|---:|---:|---:|
| Clics totales | 472 | 249 | **−48%** |
| Impresiones totales | 49.078 | 27.162 | **−46%** |
| CTR medio | 0,96% | 0,92% | −0,04 pp |
| Queries activas | 699 | 481 | −31% |
| Queries desaparecidas | — | — | **352 (50%)** |
| URLs indexadas | ~124 | 204 | +80 nuevas / −9 perdidas |

**El CTR es estable** (0,96 → 0,92). No es problema de marca ni de titles. Es **pérdida de superficie indexada**.

---

## Día exacto del impacto

La caída NO fue inmediata. Patrón típico de crawl budget:

- **Días 0-4 (23-27 marzo):** valores normales (Googlebot sirvió cache)
- **Día +5 (28 marzo):** primera caída visible
- **Día +10 (2 abril):** caída sostenida confirmada
- **Posición media:** 8-9 → 10-13 (las nuevas URLs Shopify rankean en posiciones más bajas que sus predecesoras WP)

---

## Top 5 queries más dañadas

| # | Query | Caída clics | % | Diagnóstico |
|---|---|---:|---:|---|
| 1 | spiro card | 112 → 29 | −74% | Producto estrella, URL cambió sin redirect consolidado |
| 2 | spiro disc ultra precio | 28 → 2 | −93% | URL de producto cambió |
| 3 | ekio light | 9 → 0 | −100% | Página/landing desaparecida |
| 4 | tarjeta spiro card | 9 → 1 | −89% | Mismo producto, URL nueva sin autoridad |
| 5 | spiro card opiniones | 8 → 1 | −88% | Pérdida de autoridad |

**Patrón:** todas son queries transaccionales fondo-de-embudo (las que más dinero generan).

**Notable bueno:** `ekio electrosmog` mejoró posición de 27 → 2 (homepage Shopify bien configurada).

---

## URLs perdidas: diagnóstico

7 de 9 URLs perdidas son URLs WordPress (`/producto/`, `/categoria-producto/`, slug en raíz) que **tienen equivalente en Shopify pero sin redirect 301**. El blog SÍ se migró a `/blogs/electrosmog/`.

**Mapping de redirects faltantes detectado** (lista no exhaustiva):

```
/producto/spiro-card/                              → /products/spiro-card
/producto/spiro-disc-ultra/                         → /products/spiro-disc-ultra
/producto/spiro-card-x/                             → /products/spiro-card-x
/producto/spiro-disc-x/                             → /products/spiro-disc-x
/producto/spiro-square-x/                           → /products/spiro-square-x
/producto/pack-black-friday-deep-5-ignis/           → /products/pack-black-friday-deep-5-ignis
/producto/regleta-apantallada-danell-d-6700/        → /products/regleta-apantallada-danell-d-6700
/producto/vitamina-d3k2-electro-premium-de-laittin/ → /products/vitamina-d3k2-electro-premium-de-laittin
/producto/suscripcion-para-viviendas-de-4-habit.../ → /products/suscripcion-para-viviendas-de-4-habit...

/categoria-producto/spiro-filtros-electromagneticos/ → /collections/spiro-filtros-electromagneticos
/categoria-producto/productos-pack-kits-spiro/        → /collections/productos-pack-kits-spiro
/categoria-producto/productos-luz-roja/               → /collections/productos-luz-roja
/categoria-producto/suplementos-laittin/              → /collections/suplementos-laittin

/autor-javier-andres/                               → /pages/autor-javier-andres
/premios/                                           → /pages/premios
/tecnologia-spiro/                                  → /pages/tecnologia-spiro
/terapia-de-luz-roja-ekio-light/                    → /pages/terapia-de-luz-roja-ekio-light

(posts del blog WordPress en raíz)
/casos-practicos-para-reducir-la-contaminacion-electromagnetica-en-casa/
                                                    → /blogs/electrosmog/casos-practicos-...
```

---

## Causas, en orden de impacto

| # | Causa | Impacto | Evidencia |
|---|---|---|---|
| 1 | **Redirects 301 incompletos** | CRÍTICO | URLs `/producto/` siguen sirviendo 200, no 301 |
| 2 | **Duplicate content WP + Shopify activo** | ALTO | Misma query rankea en `/producto/spiro-card/` Y `/products/spiro-card` simultáneamente |
| 3 | **Pérdida de autoridad acumulada** | ALTO | Sin redirect, las URLs nuevas arrancan desde cero |
| 4 | **Pérdida de schemas JSON-LD Product** | MEDIO | Posibles Rich Results perdidos |
| 5 | **Fragmentación blog (`/post/` vs `/blogs/electrosmog/post/`)** | MEDIO | Mismo post en 2 URLs activas |
| 6 | **Sitemap sin actualizar** | MEDIO | Verificar que GSC solo tenga el sitemap Shopify |
| 7 | **Velocidad / CWV** | BAJO | CTR estable descarta degradación UX |

---

## Plan de acción priorizado (4-6 semanas)

### 🔥 ESTA SEMANA (impacto alto, esfuerzo bajo-medio)

#### Acción 1 — Implementar redirects 301 masivos en Shopify
- **Dónde:** Shopify Admin → Online Store → Navigation → URL Redirects
- **Cómo:** Importar CSV con todos los pares URL antigua → URL nueva (lista completa arriba)
- **Verificar:** `curl -sI https://electrosmogespana.com/producto/spiro-card/` debe devolver `301` + `Location: /products/spiro-card`
- **Impacto:** recuperar 30-50% de clics perdidos en 4-6 semanas

#### Acción 2 — Eliminar duplicate content
- **Dónde:** GSC → Cobertura → Páginas indexadas → buscar `/producto/`
- **Cómo:** confirmar que tras los redirects las URLs WP ya no devuelven 200
- **Herramienta:** Screaming Frog del dominio para detectar status 200 con `/producto/`

#### Acción 3 — Forzar reindexación en GSC
- **Dónde:** GSC → Inspección de URL
- **Top 10 URLs prioritarias** (todas Shopify, pegar una a una y "Solicitar indexación"):
  1. `/products/spiro-card`
  2. `/products/spiro-card-proteccion-electromagnetica`
  3. `/products/spiro-disc-ultra`
  4. `/products/spiro-card-x`
  5. `/collections/spiro-filtros-electromagneticos`
  6. `/pages/tecnologia-spiro`
  7. `/pages/terapia-de-luz-roja-ekio-light`
  8. `/collections/productos-pack-kits-spiro`
  9. `/products/spiro-disc-x`
  10. `/products/spiro-square-x`

#### Acción 5 — Sitemap limpio en GSC
- **Verificar:** GSC → Sitemaps → solo `https://electrosmogespana.com/sitemap.xml` (Shopify), sin sitemaps WordPress antiguos

---

### 🔧 PRÓXIMAS 2 SEMANAS

#### Acción 4 — Schema Product JSON-LD en theme Shopify
- Generar snippet Liquid dinámico (`product.json-ld.liquid`)
- Incluir: `name`, `description`, `offers.price`, `offers.availability`, `brand`, `mpn` (patente U202532624), `aggregateRating`
- Validar: [https://search.google.com/test/rich-results](https://search.google.com/test/rich-results)

#### Acción 6 — Canonical URLs en supervivientes WordPress
- Si quedan URLs WP con tráfico mientras procesa el redirect, asegurar canonical apuntando a URL Shopify

---

### 🏗️ PRÓXIMO MES

#### Acción 7 — Reconstruir contenido informacional perdido
Queries informacionales desaparecidas (necesitan post o página):
- `electro hipersensibilidad` (55 impr.)
- `que es electrohipersensibilidad` (54 impr.)
- `ekio spiro` (217 impr.)

Usar `seo-content` skill para crear posts en `/blogs/electrosmog/` que recuperen esas queries.

---

## Seguimiento semanal — KPIs

| KPI | Recuperado ✅ | Alarma 🚨 |
|---|---|---|
| Clics/día (media 7d) | > 11 | < 5 a partir de semana 4 |
| Impresiones/día (media 7d) | > 900 | < 400 a partir de semana 4 |
| Posición media | < 10,0 | > 13,0 en semana 6 |
| Queries activas | > 600 | < 400 en semana 4 |
| URLs `/products/` indexadas | todas las top 10 | alguna en "404 no encontrada" |

### Cadencia
- **Semana 1 (hasta 12/5):** verificar redirects con `curl`, confirmar reindexación de top 10
- **Semana 2 (hasta 19/5):** primera señal de recuperación de posiciones en `spiro card`
- **Semana 3 (hasta 26/5):** clics deben empezar a subir
- **Semana 4-6 (hasta 15/6):** evaluación final. Si a 6 semanas no recuperamos 70% (≥8 clics/día), escalar a auditoría técnica con Screaming Frog

### Definiciones
- **Migración salvada:** clics/día > 10 (90% línea base) + posición media < 10,5 + queries activas > 580
- **Hay que escalar:** semana 4 con clics/día < 6 sostenido O `spiro card` con posición > 25 en semana 6

---

## Generado con

Datos brutos: `seo/gsc-exports/`
- `pre_migracion_query-page.csv` (1.560 filas)
- `post_migracion_query-page.csv` (1.770 filas)
- `evolucion_diaria.csv` (85 días)
- `paginas_pre_y_post.csv` (204 URLs)
- `MIGRATION_ANALYSIS.md` (resumen estadístico previo)

Pipeline: `seo/gsc_fetch.py` (vía Google Search Console API).
