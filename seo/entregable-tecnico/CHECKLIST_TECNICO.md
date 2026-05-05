# Checklist de ejecución — Migración SEO EKIO

Para tener al lado mientras ejecutas. Usa la versión completa `INSTRUCCIONES_TECNICO.pdf` como referencia detallada.

---

## Pre-requisitos

- [ ] Acceso a Shopify Admin
- [ ] Acceso a Google Search Console
- [ ] Terminal con `curl`

---

## TAREA 1 — Importar redirects automáticos

- [ ] Abrir `redirects_shopify.csv`
- [ ] Shopify Admin → Online Store → Navigation → URL Redirects → Import
- [ ] Subir CSV → Confirmar
- [ ] Verificar que se importaron las 53 filas sin errores

**Si hay errores:** anotar URLs con error → tratarlas como manuales en Tarea 3.

---

## TAREA 2 — Verificar redirects con curl

Ejecutar y verificar que cada uno devuelve `HTTP 301`:

- [ ] `curl -sI https://electrosmogespana.com/producto/spiro-card/`
- [ ] `curl -sI https://electrosmogespana.com/tecnologia-spiro/`
- [ ] `curl -sI https://electrosmogespana.com/categoria-producto/spiro-filtros-electromagneticos/`
- [ ] `curl -sI https://electrosmogespana.com/terapia-de-luz-roja-ekio-light/`
- [ ] `curl -sI https://electrosmogespana.com/producto/detector-de-radiacion-electromagnetica/`

---

## TAREA 3 — Procesar revisión manual

- [ ] Abrir `redirects_review_manual.csv`
- [ ] Verificar que cada "Sugerencia destino" existe en Shopify
- [ ] Corregir destinos incorrectos
- [ ] Marcar como "PENDIENTE DE CREAR" las que no tienen equivalente
- [ ] Casos especiales:
   - [ ] `/politica-de-devoluciones/` → cambiar a `/policies/refund-policy`
   - [ ] `/politica-de-privacidad/` → cambiar a `/policies/privacy-policy`
   - [ ] `/tienda/` → probable `/collections/all`
- [ ] Crear nuevo CSV `redirects_manual_revisado.csv` (solo "Redirect from" y "Redirect to")
- [ ] Importar el nuevo CSV en Shopify Admin

**URLs prioritarias a no fallar:**

- [ ] `/producto/card-disc/` (1.089 impresiones)
- [ ] `/tienda/` (929 impresiones)
- [ ] `/producto/pack-proteccion-personal/` (400 impresiones)
- [ ] `/producto/consultoria-online-360/` (393 impresiones)
- [ ] `/politica-de-devoluciones/` (289 impresiones)
- [ ] `/producto/pack-stroom-master/` (283 impresiones)
- [ ] `/consultoria-naturopatia/` (258 impresiones)
- [ ] `/producto/ignis-de-ekio-light/` (240 impresiones)

---

## TAREA 4 — Sitemap GSC limpio

- [ ] GSC → Sitemaps
- [ ] Confirmar que está `https://electrosmogespana.com/sitemap.xml` con status "Correcto"
- [ ] Eliminar cualquier sitemap residual de WordPress (`wp-sitemap.xml`, `sitemap_index.xml`, etc.)

---

## TAREA 5 — Reindexación top 10 URLs en GSC

GSC → Inspección de URL → pegar y "Solicitar indexación":

- [ ] `https://electrosmogespana.com/products/spiro-card`
- [ ] `https://electrosmogespana.com/products/spiro-card-proteccion-electromagnetica`
- [ ] `https://electrosmogespana.com/products/spiro-disc-ultra`
- [ ] `https://electrosmogespana.com/products/spiro-card-x`
- [ ] `https://electrosmogespana.com/collections/spiro-filtros-electromagneticos`
- [ ] `https://electrosmogespana.com/pages/tecnologia-spiro`
- [ ] `https://electrosmogespana.com/pages/terapia-de-luz-roja-ekio-light`
- [ ] `https://electrosmogespana.com/collections/productos-pack-kits-spiro`
- [ ] `https://electrosmogespana.com/products/spiro-disc-x`
- [ ] `https://electrosmogespana.com/products/spiro-square-x`

---

## TAREA 6 — Schema Product JSON-LD (OPCIONAL)

**Solo si tienes experiencia con Liquid de Shopify.**

- [ ] Crear `snippets/product-jsonld.liquid` (código en INSTRUCCIONES_TECNICO.pdf)
- [ ] Incluir `{% render 'product-jsonld' %}` en `sections/main-product.liquid`
- [ ] Validar en https://search.google.com/test/rich-results sin errores

---

## Reporte de cierre al cliente

- [ ] Enviar email de cierre con resumen de tareas (plantilla en `INSTRUCCIONES_TECNICO.pdf` sección 5)
- [ ] Adjuntar capturas de:
   - [ ] Shopify Admin URL Redirects (mostrar las 53+ filas importadas)
   - [ ] GSC Sitemaps (mostrar sitemap correcto)
   - [ ] Resultados de los `curl` de Tarea 2

---

## Recordatorios

**NO** tocar:
- [ ] robots.txt manualmente
- [ ] Sitemap de Shopify (es automático)
- [ ] Redirects existentes que ya funcionaban antes de empezar

**SÍ** documentar:
- [ ] Cualquier URL bloqueada con detalle de qué dice Shopify
- [ ] URLs destino "PENDIENTE DE CREAR" para que el cliente las cree
