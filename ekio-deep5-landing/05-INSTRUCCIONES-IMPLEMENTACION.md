# 05 · INSTRUCCIONES DE IMPLEMENTACIÓN — Ekio Light Deep 5

Guía paso a paso para publicar la ficha en Shopify (tema Dawn). Tiempo estimado: 45-60 min.

---

## 1. Crear los metafields (5 min)

Admin › **Configuración › Datos personalizados › Productos** → crea, namespace `ekio`:

| Key | Tipo | Valor |
|---|---|---|
| `patente` | Texto | `Modelo de Utilidad español U202532624 · PCT en tramitación` |
| `longitudes_onda` | Texto | `630 · 660 · 727 · 810 · 850 nm` |
| `irradiancia` | Texto | *(rellenar con la ficha técnica real)* |
| `garantia_anios` | Entero | `2` |
| `descripcion_seo` | Texto multilínea | *(ver `config/metafields-deep5.json`)* |
| `estudios_pubmed` | Texto | `28070154, 27874264, 24286286, 31662383, 39883205, 38378043` |

---

## 2. Subir los archivos al tema (10 min)

Admin › **Tienda online › Temas › … › Editar código**:

| Archivo del paquete | Subir a |
|---|---|
| `sections/product-deep5-hero.liquid` | `sections/` |
| `sections/product-deep5-content.liquid` | `sections/` |
| `assets/ekio-deep5.css` | `assets/` |
| `assets/ekio-deep5.js` | `assets/` |
| `snippets/ekio-schema-deep5.liquid` | `snippets/` |

> ⚠️ Trabaja sobre una **copia duplicada del tema**, no en el publicado, hasta validar.

---

## 3. Crear / configurar el producto (10 min)

1. Crea el producto **Ekio Light Deep 5** (o edita el existente).
2. Precio: **650 €**. SKU: `EKL-DEEP5`. Marca disponible / stock real.
3. Sube las imágenes de `deep5-assets/` (main, angle, use, lateral) — **convierte a WebP** y añade los alt text de `01-SEO-STRATEGY.md`.
4. Rellena los metafields `ekio.*`.
5. SEO del producto: pega el **title** (≤60) y la **meta description** (≤160) de la estrategia SEO. Slug: `ekio-light-deep-5`.

---

## 4. Montar la página (10 min)

1. Crea una **plantilla de producto** específica: `templates/product.deep5.json` (o desde el editor: "Crear plantilla" basada en product).
2. En el editor de temas, sobre esa plantilla, **elimina** las secciones por defecto que dupliquen contenido y **añade**:
   - `Deep 5 · Hero`
   - `Deep 5 · Contenido`
3. Asigna la plantilla `deep5` al producto (en la ficha de producto, panel derecho → "Plantilla de tema").
4. Guarda y previsualiza.

---

## 5. SEO técnico (10 min)

- **robots.txt:** si no existe `templates/robots.txt.liquid`, créalo permitiendo bots de IA (`GPTBot`, `ClaudeBot`, `PerplexityBot`, `Google-Extended`, `Bingbot`) y sin bloquear `/products/`.
- **llms.txt:** añade el bloque de `01-SEO-STRATEGY.md` (Paso 4) a `https://electrosmogespana.com/llms.txt`.
- **Colección `fotobiomodulacion`:** verifica que existe (la usan breadcrumb y schema). Si no, créala o ajusta la URL en los dos `.liquid` y en el snippet.
- **Canonical:** confirma que apunta a la URL limpia (sin `?variant=`).
- Valida el schema en [Rich Results Test](https://search.google.com/test/rich-results) y [Schema Validator](https://validator.schema.org).

---

## 6. QA antes de publicar (checklist)

- [ ] Precio, financiación y patente visibles sin scroll (desktop **y** móvil).
- [ ] CTA "Quiero empezar mi recuperación" añade al carrito y lleva a checkout en ≤2 clics.
- [ ] Sticky add-to-cart aparece al hacer scroll en móvil.
- [ ] Accordion FAQ abre/cierra con teclado (Tab + Enter) y lee bien en lector de pantalla.
- [ ] Espectro LED y contador "90 %" animan al entrar en vista (y respetan `prefers-reduced-motion`).
- [ ] Imágenes en WebP con alt text; LCP < 2,5 s en móvil (PageSpeed Insights).
- [ ] Rich Results detecta Product + FAQ + Breadcrumb **sin** aggregateRating.
- [ ] Specs técnicas reales completadas (no "PENDIENTE").
- [ ] Sin testimonios/rating presentados como reales mientras no existan.
- [ ] Revisar que no hay conflicto de estilos con el resto del tema (CSS está scopeado bajo `.ekio-deep5`).

---

## 7. Post-lanzamiento (palanca #1: prueba social)

1. Email a los **31 compradores de IGNIS** y **13 de Deep 7 Cyan** pidiendo su caso (vía 1 de VOZ_MARCA, Bloque 8.2).
2. Instala app de reviews (Judge.me / Loox) → el código activará rating y `aggregateRating` automáticamente cuando haya reseñas reales.
3. Sustituye las plantillas de testimonio por casos reales con nombre y ciudad.
4. Mide en GA4 + Clarity: scroll depth a FAQ, clics en CTA, abandono. Iterar H1 y CTA con A/B (ver `04-VALIDACION-CRO.md`).

---

## Resumen de archivos entregados

```
ekio-deep5-landing/
├── 00-BENCHMARK-REPORT.md
├── 01-SEO-STRATEGY.md
├── 01-SEO-keywords.csv
├── 01-schema-product.json
├── 02-COPY-COMPLETO.md
├── 03-SHOPIFY-CODE/
│   ├── sections/product-deep5-hero.liquid
│   ├── sections/product-deep5-content.liquid
│   ├── assets/ekio-deep5.css
│   ├── assets/ekio-deep5.js
│   ├── snippets/ekio-schema-deep5.liquid
│   └── config/metafields-deep5.json
├── 04-VALIDACION-CRO.md
└── 05-INSTRUCCIONES-IMPLEMENTACION.md
```
