# BRIEF DE IMPLEMENTACIÓN SHOPIFY — Rediseño web + gama Ekio Light
**Fecha**: 6 julio 2026 · **Preparado para**: Cristian (+ theme dev si se externaliza)
**Fuentes**: maquetas navegables en `mockup-home/` (abrir con doble clic) + documentos de copy en `Content/`

| Página | Maqueta | Copy |
|---|---|---|
| Home | home-v2.html | COPY_HOME_NUEVA_2026-07.md |
| Colección SPIRO | coleccion-spiro-v2.html | COPY_COLECCION_SPIRO_2026-07.md |
| PDP Spiro Card | pdp-spiro-card-v2.html | COPY_PDP_SPIRO_CARD_2026-07.md |
| La Ciencia | la-ciencia-v2.html | COPY_LA_CIENCIA_2026-07.md |
| Hub Luz Roja | terapia-luz-roja-v2.html | COPY_TERAPIA_LUZ_ROJA_2026-07.md |
| PDPs Ekio Light | — | landings/landing-deep-5.md, landing-bio-regen-7.md, landing-bio-spectrum-11.md (+Core pendiente de redactar) |

**⚠️ REGLA DE GARANTÍAS (no mezclar jamás)**: filtros SPIRO = 90 días con devolución del dinero · **Ekio Light = devolución de 30 días**. La barra de anuncios y los badges deben mostrar la que corresponde a cada página/producto. Si el tema solo permite una barra global, el mensaje debe decir "90 días de garantía en filtros SPIRO".

---

## FASE 0 — FIXES DE MINUTOS (hoy mismo, sin dependencias, sin código)

| # | Fix | Dónde en Shopify | Dato que lo justifica |
|---|---|---|---|
| 0.1 | Title colección: "**Filbros**" → `Filtros Electromagnéticos SPIRO® — Protección EMF \| EKIO` | Tienda online → Colecciones → Filtros Spiro → SEO del buscador | Página 1 de Google con errata: 2.071 imp → 14 clics |
| 0.2 | Meta colección: `Filtros electromagnéticos SPIRO® premiados: protección EMF para hogar y oficina desde 97 €. 90 días de garantía, envío gratis 24/48h y pago en 12 meses.` | Ídem | Meta actual es relleno |
| 0.3 | Redirección directa: `/producto/spiro-card/` → `/products/spiro-card-proteccion-electromagnetica` (hoy da 2 saltos) | Tienda online → Navegación → Redirecciones de URL → buscar y editar | Cadena diluye autoridad; "spiro card" partida en 3 URLs |
| 0.4 | Errata PDP Card: "Esta es la **opnión** de nuestros clientes" → unificar con el otro H2 de testimonios | Productos → Spiro Card → descripción | Errata visible |
| 0.5 | Home: "Desde solo **77 euros**" → "desde 97 €" (o quitar el banner) | Tienda online → Temas → Personalizar → home | Precio falso desde subida Noxtak |
| 0.6 | Title PDP Card: `SPIRO® Card — Filtro EMF para tu móvil · 97 € \| EKIO` + meta del doc | Productos → Spiro Card → SEO | CTR clúster 1,6% |
| 0.7 | Corregir stock PACK SPIRO SUEÑO (está en **−2**) | Productos → inventario | Stock negativo con producto activo |

---

## FASE 1 — PRODUCTOS: GAMA EKIO LIGHT NUEVA (bloquea la Fase 2 del hub)

**Regla de oro**: al cambiar el handle (URL) de un producto, Shopify pregunta si crear la redirección — **marcar SIEMPRE "crear redirección de URL"**. Verificar después en Navegación → Redirecciones.

| # | Acción | Detalle |
|---|---|---|
| 1.1 | **Deep 7 Cyan → Bio Regén 7** | Renombrar título a "Panel Ekio Light Bio Regén 7", handle nuevo según landing (`landing-bio-regen-7.md`), precio 970 €, pegar la landing completa en la PDP. 301 automática de `/products/deep-7-cyan-ekio-light` ✓ |
| 1.2 | **Full Spectrum 10 → Bio Spectrum 11** | Título "Panel Ekio Light Bio Spectrum 11 — Espectro Completo Profesional", handle `bio-spectrum-11-panel-fotobiomodulacion-profesional`, 2.500 €, pegar `landing-bio-spectrum-11.md`. Ángulo biohacking en title/tags. 301 de `/products/lampara-full-spectrum-ekio-light` ✓ |
| 1.3 | **IGNIS → Core** | Renombrar a "Ekio Light Core — Terapia de Luz Roja Local y Portátil", precio **140 €**, specs: 13 LEDs, 660+850 nm, sin COB, terapia local/portátil. 301 de `/products/ignis...` ✓. **Landing lista: `landings/landing-core.md`** (quedan specs físicas por confirmar: alimentación, peso, irradiancia, timer). Pedir a Judge.me migrar las reseñas del IGNIS al producto renombrado |
| 1.4 | **Deep 5** | Se mantiene (650 €). Pegar `landing-deep-5.md` en la PDP (incluye la comparativa de gama — actualizarla con Core y COBs según COPY_TERAPIA_LUZ_ROJA) |
| 1.5 | Variantes **B2B** (Deep 5 B2B, Deep 7 B2B, Full Spectrum B2B) | ⚠️ DECISIÓN JAVIER: ¿se renombran igual, se ocultan del canal online o se quedan como están? |
| 1.6 | **Colección productos-luz-roja** | Orden escalera: Core → Deep 5 → Bio Regén 7 → Bio Spectrum 11 → bombillas → pack bombillas. Quitar cualquier producto no-luz. Título/meta de colección: usar patrón del hub |
| 1.7 | **Colección Filtros Spiro** | Sacar del grid: Deep 5/Bio Regén 7/Bio Spectrum 11 (paneles). El Stroom Master SE QUEDA (complemento, decisión 6-jul). Orden: Card → Card X → Square → Disc → Square X → Disc X → Disc Ultra → Stroom Master |
| 1.8 | Metadatos de todos los productos Ekio Light | Tags, tipo de producto y garantía **30 días** en la ficha (no heredar los 90 de SPIRO) |

---

## FASE 2 — PÁGINAS (las 5 maquetas → tema)

**Cómo trabajar**: cada maqueta es la especificación visual y de copy 1:1. Los elementos con **etiqueta ámbar punteada** son placeholders (fotos, cifra N de reseñas) — no publicar sin sustituirlos o quitarlos. Implementar como secciones del tema (Personalizar) o metafields; si el tema no da para algo (selector de cantidad con precio dinámico, bottom-sheet), es tarea de theme dev (Liquid/JS).

| # | Página | Tareas clave | Dificultad |
|---|---|---|---|
| 2.1 | **Home** | Hero nuevo (foto clicable + 2 CTAs + estrellas), sección top sellers comprable, puertas reescritas, reseñas Judge.me (activar widget — el JS ya carga), prensa, garantía 90d+4 badges, historia, lead magnet Klaviyo, FAQ, CTA final. **Eliminar**: vídeo autoplay, embed Instagram, banner 77 €, 5 badges, secciones duplicadas | Media (secciones estándar) |
| 2.2 | **Colección SPIRO** | Franja confianza bajo H1, banner test, tabla comparativa 8 filas (sección custom HTML), bloque garantía, 2 FAQs nuevas | Media |
| 2.3 | **PDP Spiro Card** | Selector cantidad guiado + hint Pack Familia (JS), bloque "¿Para qué sirve?", H2 "Opiniones de la SPIRO Card en España", beneficios enlazados a La Ciencia, comparativa Card/Card X, sticky CTA móvil | Media-alta (JS) |
| 2.4 | **La Ciencia** (página NUEVA `/pages/la-ciencia`) | Hero + cifras, 3 pasos, 4 tablas de estudios con los 13 PDF enlazados a spirosolution.com/noxtak.com, premios, sección Joaquín Machado (pedir foto+bio a Noxtak), sección Stroom Master, "lo que no hace", FAQ | Baja (página de contenido) |
| 2.5 | **Hub Luz Roja** (`/pages/terapia-de-luz-roja-ekio-light` — **misma URL, no cambiar handle**) | Reemplazar contenido: hero, gama 4 tarjetas, comparativa 7 filas con COB, sección bombillas, definicional fotobiomodulación, 4 puertas por objetivo, "el único panel que no te contamina", FAQ. Barra de anuncio con devolución 30 días | Media |
| 2.6 | **Menú principal** | HOME fuera · TIENDA · **LA CIENCIA** (sustituye a FILTROS) · TERAPIA DE LUZ ROJA · **¿QUÉ SPIRO NECESITO?** (→ test) · CONTACTO | 10 min |
| 2.7 | **Barra de anuncios rotativa** | 3 mensajes (garantía/envío/seQura). Garantía scoped: "90 días en filtros SPIRO" si es global | Baja |

---

## FASE 3 — SEO TÉCNICO

| # | Tarea | Detalle |
|---|---|---|
| 3.1 | **301 anti-canibalización**: `/pages/filtros-electromagneticos` → colección SPIRO | ANTES: rescatar párrafos únicos útiles de esa página (3.515 palabras) hacia la descripción de la colección. Después: Navegación → Redirecciones de URL |
| 3.2 | Blog "descubre los beneficios de los filtros spiro" | Añadir enlace a la colección con anchor "filtros electromagnéticos SPIRO"; reorientar a long-tail informacional |
| 3.3 | **JSON-LD**: copiar de las maquetas (cada una lo lleva en el `<head>`, validado) | Organization+WebSite (layout global — completar sameAs con URLs reales de RRSS y logo), FAQPage por página, ItemList, Product con aggregateRating REAL de Judge.me, Person (Joaquín Machado) en La Ciencia. Vía secciones custom o `theme.liquid` |
| 3.4 | **llms.txt** | Borrador en COPY_HOME_NUEVA (actualizar URL de La Ciencia y gama Ekio Light). ⚠️ Shopify no sirve archivos .txt en raíz salvo robots: opciones — (a) app tipo "llms.txt generator", (b) redirección `/llms.txt` → asset del tema, (c) página `/pages/llms` + redirect. Elegir con theme dev |
| 3.5 | **robots.txt** | Verificar que NO bloquea GPTBot, ClaudeBot, PerplexityBot, Google-Extended (editar `robots.txt.liquid` solo si hace falta) |
| 3.6 | **GSC post-lanzamiento** | Solicitar indexación de: home, colección SPIRO, PDP Card, La Ciencia, hub Luz Roja y las 4 PDPs Ekio Light. Vigilar 2-4 semanas la consolidación de "spiro card" y "filtros electromagneticos" |

---

## FASE 4 — CAPTURA DE LEADS (Klaviyo + popup)

| # | Tarea | Detalle |
|---|---|---|
| 4.1 | Popup TEST en home | Bottom-sheet móvil, disparo 8s / 35% scroll / exit-intent, supresión 30 días, no a suscriptores ni tráfico email. Copy en COPY_HOME (apartado popup) |
| 4.2 | Quiz puente | Mientras la app recomendadora no esté: quiz 5 preguntas en Klaviyo forms/Typeform con la lógica del doc (nº personas con móvil, m², router, teletrabajo, inversor solar) + gate de email antes del resultado |
| 4.3 | Exit-intent GUÍA en colección + GUÍA en blog/La Ciencia | Cascada por intención documentada en COPY_HOME. Nada de popups en PDP/carrito/checkout |
| 4.4 | Klaviyo: 2 listas + 2 flujos | "Test SPIRO" → flujo recomendación (3-4 emails por resultado) · "Guía Higiene EM" → nurture hacia el test. Supresión global de popups al capturar email. Coordinar con Isabela |
| 4.5 | ManyChat keyword TEST | Paridad con el quiz web (mismo embudo desde Reels) |

---

## ASSETS PENDIENTES (para poder publicar sin placeholders)

| Asset | Quién |
|---|---|
| Foto hero home (salón español, SPIRO Card en primer plano, atardecer) + galería PDP Card (5 fotos según doc) | Fotógrafo/diseñador |
| Foto persona usando panel Ekio Light (hero hub) + fotos 4 productos gama | Fotógrafo |
| Cifra real de reseñas y rating de Judge.me (sustituir todos los "[N]") | Cristian (1 min) |
| Foto de prensa + bio oficial de Joaquín Machado · años exactos de los 3 premios | Pedir a Noxtak |
| Specs visuales Core para su landing (redacto la landing cuando confirméis que procede) | Javier → yo |
| Confirmar fórmula legal "distribuidor oficial/exclusivo" de Noxtak para schema y La Ciencia | Javier/Noxtak |

## ORDEN RECOMENDADO Y QA

1. **Semana 1**: Fase 0 completa (1 hora) + Fase 1 (productos y redirecciones — coordinar con fotos)
2. **Semana 2**: Fase 2 (páginas) en tema DUPLICADO (Temas → Duplicar → trabajar en copia → Preview → Publicar)
3. **Semana 2-3**: Fases 3 y 4
4. **QA antes de publicar**: probar las 301 antiguas una a una (curl o navegador) · validar JSON-LD en validator.schema.org · Lighthouse móvil de home y colección (el LCP debe MEJORAR al quitar vídeo+IG embed) · popup: comprobar supresión y que no sale en checkout · garantías correctas por página (90 SPIRO / 30 Ekio Light) · test de compra completo móvil

## KPIs A 30 DÍAS DEL LANZAMIENTO

- CTR GSC colección SPIRO: 0,7% → 3%+ · clúster "spiro card": 1,6% → 4%
- CTR clúster luz roja: 0,7% → 3%
- Scroll >20% en home: 27% → 45%+ · CTR home→colección: 23% → 35%
- AOV pedidos con Spiro Card: 1,0 → 1,6 uds
- Leads/mes capturados (test+guía): baseline 0 → medir
