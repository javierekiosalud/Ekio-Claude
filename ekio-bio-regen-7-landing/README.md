# PDP Bio Regen 7 — Paquete completo

Ficha de producto (PDP) del **Bio Regen 7 — Panel de fotobiomodulación para regeneración celular** de Ekio Light, construida con el mismo formato que la PDP de Bio Spectrum 11 y Deep 5.

**Precio:** 970 € · incluye el **Ekio Light System Bio Regen 7** (panel + bombilla roja + bombilla ámbar + Vitamina C + Vitamina B50 + Guía de Uso Interactiva + App Ekio Coach).

Ensamblado a partir de 4 capas de trabajo especializado:
- **Contenido** → copy narrativo y persuasivo
- **Shopify / CRO** → estructura de conversión, buy box, comparativa, objeciones
- **SEO** → keywords, meta, headings, enlazado on-page (Google)
- **GEO** → JSON-LD, frases citables, Q&A y llms.txt (ChatGPT, Claude, Gemini, Perplexity, AI Overviews)

Fuente única de verdad: `Content/landings/landing-bio-regen-7.md` (landing ya validada con specs, precio y kit del sistema).

## Cómo usar este paquete
1. Empieza por **`02-COPY-COMPLETO.md`** — es el documento maestro con los bloques de la PDP.
2. **`01-SEO-STRATEGY.md`** + **`01-SEO-keywords.csv`** — metadatos y on-page para Google.
3. **`01-schema-product.json`** — pegar en el `<head>` (Product + FAQPage + BreadcrumbList).
4. **`03-GEO-CITABILIDAD.md`** — frases citables, Q&A IA, entrada llms.txt, comparativa, E-E-A-T.
5. **`05-INSTRUCCIONES-IMPLEMENTACION.md`** — datos de Shopify, orden de bloques y checklist de publicación.
6. **`index.html`** — versión visual navegable con animación del panel, buy box, sticky bar y bloques CRO.

## Estado
Copy y estructura listos. El producto **no** está creado en Shopify. Pendiente: ficha técnica real (irradiancia, dimensiones, peso), imágenes reales y testimonios verificados.

## Diferencia con Bio Spectrum 11
El Bio Regen 7 **no** tiene circuitos independientes: sus 7 longitudes de onda (485–940 nm) + 1 COB (660+850 nm) se activan como un único bloque de LEDs, más el COB central como zona aparte. Por eso el panel interactivo del `index.html` usa un selector simplificado (Cian / Rojo-NIR / IR profundo / COB) a modo **ilustrativo de qué longitud hace qué**, no como control real de circuitos por separado — evitar dar a entender lo contrario en la implementación final.

## Cambios de la 2ª revisión (Javier, jul-2026)
- Se retiró el claim "elimina el dolor" del H1 y de todo el copy — mensaje demasiado fuerte para un dispositivo de bienestar. Sustituido por lenguaje más suave ("acelera tu recuperación", "acompañamiento del dolor").
- La longitud de 485 nm pasa de llamarse "Azul" a **"Cian"**, con la función principal reencuadrada como regulador del ritmo circadiano durante el día (mecanismo: melanopsina, células ganglionares retinianas — misma cita PubMed que en Bio Spectrum 11, Mawad & Van Gelder 2008). La acción antibacteriana queda como beneficio secundario.
- Se añadió el **Stack** (no vendemos un panel, vendemos un método): App Ekio Coach (177€→Gratis), Guía de Uso Interactiva Ekio System (49€→Gratis), Bombilla roja de Ekio Light (25€→Gratis), Vitamina C + B50 de Laittin (49,60€→Gratis) — 300,60 € de valor real incluido sin coste en los 970 €.
