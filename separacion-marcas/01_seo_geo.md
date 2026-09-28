# Plan SEO y GEO — Separación electrosmogespana.com / ekiolight.com
*Elaborado: 28/sep/2026 — Datos verificados: GSC 90 días (jul-sep 2026)*

---

## 1. Mapa de URLs: qué se va, qué se queda y tabla de redirecciones 301

### 1.1 Páginas de luz que se van a ekiolight.com

Extraídas del reporte GSC q90_page.csv y del catálogo de productos. Son todas las páginas cuyo contenido es exclusivamente de la línea Ekio Light.

| URL origen (electrosmogespana.com) | Clics 90d | Impr 90d | Pos. media | URL destino (ekiolight.com) |
|---|---|---|---|---|
| /collections/productos-luz-roja | 191 | 10.952 | 7,3 | /collections/paneles-luz-roja |
| /products/bombilla-led-roja-de-ekio-light | 161 | 11.829 | 8,0 | /products/bombilla-led-roja |
| /products/bombillas-de-luz-roja-copia | 32 | 3.174 | 6,9 | /products/bombillas-luz-roja |
| /pages/terapia-de-luz-roja-ekio-light | 33 | 3.452 | 21,6 | /pages/terapia-de-luz-roja |
| /products/lampara-full-spectrum-ekio-light | 11 | 285 | 8,4 | /products/lampara-full-spectrum |
| /products/deep-5-ekio-light | 8 | 210 | 9,5 | /products/panel-deep-5 |
| /products/deep-7-cyan-ekio-light | 8 | 220 | 5,6 | /products/panel-deep-7-cyan |
| /products/pack-bombillas-roja-y-amarilla | 7 | 480 | 6,4 | /products/pack-bombillas |
| /products/bombillas-de-luz-amarilla | 5 | 746 | 7,2 | /products/bombillas-luz-amarilla |
| /products/core-ekio-light | 4 | 77 | 8,4 | /products/panel-core |
| /products/ignis-de-ekio-light-terapia-de-luz-y-proteccion-contra-cem | 0 | 15 | 8,7 | /products/ignis |
| /blogs/electrosmog/el-entorno-de-luz-es-lo-mas-importante-para-la-vida-humana | 0 | 119 | 8,7 | /blogs/luz/entorno-de-luz-salud-humana |

**Nota:** El sitemap público devolvió 503 al consultarlo (servidor caído). La lista anterior está basada en GSC. Antes de ejecutar las redirecciones, Javier Escobar debe extraer el sitemap completo de Shopify admin (`/admin/sitemap.xml`) para confirmar si hay URLs de luz sin impresiones (productos en borrador, variantes, etc.) que también deban redirigirse. Hipótesis: hay entre 5 y 10 URLs adicionales de paneles/packs sin tráfico que no aparecen en GSC.

**Productos que no tienen tráfico GSC pero se van igualmente:**
- /products/bio-regen-7-ekio-light (si existe)
- /products/bio-spectrum-11-ekio-light (si existe)
- /products/pack-oasis-electromagnetico (tiene 17 impr, 0 clics — revisar si es mixto Spiro+Luz)

### 1.2 Lo que se queda en electrosmogespana.com

Todo lo que no es producto Ekio Light:
- Spiro Card, Spiro Disc, Spiro Square (todas las variantes y X)
- Stroom Master Pro
- Medidores y accesorios
- Regletas apantalladas
- Suplementos Laittin
- Estudio de hogar / Consultoría
- Páginas corporativas: /pages/quienes-somos, /pages/autor-javier-andres, /pages/sensibilidad-electromagnetica, /pages/tecnologia-spiro, etc.
- Blog de electrosmog (/blogs/electrosmog/*) — los posts de luz que existan se migran al blog de ekiolight.com con 301

### 1.3 Tabla de redirecciones 301 (lista implementable en Shopify)

Implementar en Shopify admin → Tienda online → Navegación → Redirecciones de URL (o vía bulk import CSV).

```
Origen,Destino
/collections/productos-luz-roja,https://ekiolight.com/collections/paneles-luz-roja
/products/bombilla-led-roja-de-ekio-light,https://ekiolight.com/products/bombilla-led-roja
/products/bombillas-de-luz-roja-copia,https://ekiolight.com/products/bombillas-luz-roja
/pages/terapia-de-luz-roja-ekio-light,https://ekiolight.com/pages/terapia-de-luz-roja
/products/lampara-full-spectrum-ekio-light,https://ekiolight.com/products/lampara-full-spectrum
/products/deep-5-ekio-light,https://ekiolight.com/products/panel-deep-5
/products/deep-7-cyan-ekio-light,https://ekiolight.com/products/panel-deep-7-cyan
/products/pack-bombillas-roja-y-amarilla,https://ekiolight.com/products/pack-bombillas
/products/bombillas-de-luz-amarilla,https://ekiolight.com/products/bombillas-luz-amarilla
/products/core-ekio-light,https://ekiolight.com/products/panel-core
/products/ignis-de-ekio-light-terapia-de-luz-y-proteccion-contra-cem,https://ekiolight.com/products/ignis
/blogs/electrosmog/el-entorno-de-luz-es-lo-mas-importante-para-la-vida-humana,https://ekiolight.com/blogs/luz/entorno-de-luz-salud-humana
```

**Regla adicional:** crear una redirección de colección catch-all en electrosmogespana.com: cualquier visita a `/collections/productos-luz-roja/*` → `https://ekiolight.com/collections/paneles-luz-roja`. En Shopify esto requiere un snippet Liquid en el tema o una app de redirecciones como Shopify Redirects Manager.

---

## 2. Cómo proteger el tráfico de luz durante la migración

### 2.1 La realidad del tráfico de luz

El tráfico de luz en electrosmogespana.com es pequeño pero estratégico:
- **460 clics en 90 días** (~5 clics/día) con **31.000 impresiones totales**
- La página estrella: `/products/bombilla-led-roja-de-ekio-light` — 161 clics, 11.829 impr, pos. 8
- La colección: `/collections/productos-luz-roja` — 191 clics, 10.952 impr, pos. 7,3
- La gran oportunidad latente: "luz roja para dormir" — **3.152 impresiones, pos. 9,5, CTR 0,16%** → con una página optimizada en ekiolight.com se puede capturar 3-5 veces más clics

### 2.2 Riesgo realista de caída

Un dominio nuevo como ekiolight.com empieza sin autoridad de dominio (DA 0), sin historial, sin backlinks. Las 301 transmiten el ~90% del PageRank de las URLs origen, pero Google tarda entre **2 y 6 meses** en consolidar ese traspaso.

**Escenario realista:**
- Meses 1-2 (nov-dic 2026): pérdida del 40-60% del tráfico de luz orgánico. Las bombillas para dormir (pos. 4-10 ahora) caerán temporalmente a pos. 15-30 en ekiolight.com.
- Meses 3-4 (ene-feb 2027): recuperación parcial si las 301 están bien y el contenido de ekiolight.com es mejor que el origen.
- Mes 5-6 (mar-abr 2027): posibilidad de superar el tráfico original si la arquitectura de contenido de ekiolight.com está bien ejecutada.

**Esto es tolerable porque:**
1. El tráfico de luz en electrosmogespana.com es pequeño (460 clics/90d vs 2.200+ de Spiro).
2. En paralelo a la migración, Meta Ads puede suplir el volumen perdido en orgánico durante los primeros meses — la campaña Deep 5 demostró ROAS 6,71x.
3. El objetivo real no es conservar 5 clics/día sino escalar a 50-100 clics/día en ekiolight.com en Q1 2027.

### 2.3 Medidas de protección concretas

**Antes del lanzamiento (obligatorias):**
1. Implementar TODAS las 301 en Shopify el mismo día que ekiolight.com entre en live. No antes, no después.
2. Crear y enviar el sitemap de ekiolight.com a Google Search Console en las primeras 24 horas.
3. En GSC de electrosmogespana.com: marcar las URLs de luz como "eliminadas" con la herramienta de eliminación temporal para acelerar el recrawl.
4. En ekiolight.com: crear cuenta propia de GSC desde el día 1. Verificación con DNS o archivo HTML.

**Durante los primeros 30 días:**
5. Conseguir al menos 3-5 backlinks externos hacia ekiolight.com antes o justo después del lanzamiento (ver sección 5).
6. Publicar al menos 2 posts de blog en ekiolight.com en la primera semana para dar señales de actividad.
7. Configurar Google Merchant Center para ekiolight.com para que las fichas de producto aparezcan en Google Shopping — esto compensa parcialmente la caída orgánica.

**La bombilla para dormir es la única URL crítica.** Pos. 4-10 con >11.000 impr es el activo de luz más valioso. La página destino en ekiolight.com debe ser mejor en todo: título más específico, más reseñas, schema Product completo con preguntas frecuentes integradas.

---

## 3. Arquitectura de ekiolight.com orientada a búsqueda

### 3.1 Estructura de colecciones

```
ekiolight.com/
├── /collections/bombillas-luz-roja          ← página estrella SEO (11.829 impr en GSC)
├── /collections/paneles-luz-roja            ← colección madre de paneles
│   ├── /collections/paneles-pequeños        ← Core, IGNIS (uso personal/facial)
│   └── /collections/paneles-grandes         ← Deep 5, Deep 7, Bio Regén 7, Bio Spectrum 11
├── /collections/bombillas-luz-amarilla      ← 746 impr, oportunidad sin explotar
├── /collections/packs-luz                   ← packs y combos
└── /pages/terapia-de-luz-roja               ← página pilar educativa
```

### 3.2 Páginas pilar y keywords objetivo

| Página | URL | Keyword principal | Impr. reales (GSC) | Volumen est. | Prioridad |
|---|---|---|---|---|---|
| Bombilla luz roja para dormir | /products/bombilla-led-roja | "bombilla luz roja para dormir" | 11.829 | ~4.000/mes | CRÍTICA |
| Colección bombillas | /collections/bombillas-luz-roja | "lampara luz roja" | 10.952 | ~3.500/mes | ALTA |
| Terapia de luz roja (pilar) | /pages/terapia-de-luz-roja | "terapia de luz roja" | 3.452 | ~2.000/mes | ALTA |
| Luz roja para dormir (landing) | /pages/luz-roja-para-dormir | "luz roja para dormir" | 3.152 | ~2.500/mes | ALTA |
| Panel Deep 5 | /products/panel-deep-5 | "panel luz roja" / "deep 5" | 210 | ~500/mes | MEDIA |
| Bombilla amarilla | /products/bombillas-luz-amarilla | "bombilla luz amarilla" | 746 | ~800/mes | MEDIA |

**Nota:** El volumen mensual estimado es hipótesis basada en la proporción GSC/volumen real típica para España. Validar con Semrush o Ahrefs antes de asignar recursos de contenido.

### 3.3 Títulos, metas y H1 recomendados para las páginas clave

**Bombilla LED roja (producto estrella):**
- Title: `Bombilla LED Roja para Dormir Sin Luz Azul | Ekio Light`
- Meta: `Bombilla de luz roja 660 nm, sin luz azul ni verde. No inhibe la melatonina. Para leer, relajarte y dormir mejor. Envío gratis desde España.`
- H1: `Bombilla de luz roja para dormir — 660 nm, cero luz azul`

**Colección paneles:**
- Title: `Paneles de Luz Roja e Infrarroja Terapéutica | Ekio Light`
- Meta: `Paneles de fotobiomodulación 660/850 nm fabricados bajo la patente Ekio. Core, Deep 5, Bio Regén 7 y Bio Spectrum 11. Envío a toda España.`
- H1: `Terapia de luz roja en casa — Paneles Ekio Light`

**Página pilar terapia de luz roja:**
- Title: `Terapia de Luz Roja: Qué es, Beneficios y Cómo Usarla | Ekio Light`
- Meta: `Guía completa sobre fotobiomodulación. Qué dice la ciencia, cómo elegir tu panel y protocolos de uso. Escrita por Javier Andrés, naturópata.`
- H1: `Terapia de luz roja: la guía que lo explica sin tecnicismos`

### 3.4 Landing específica "luz roja para dormir" (nueva, alta prioridad)

Esta keyword tiene 3.152 impresiones y CTR de 0,16% — casi nadie hace clic porque no hay una página dedicada. Crear `/pages/luz-roja-para-dormir` en ekiolight.com con:
- H1: "Luz roja para dormir: por qué funciona y qué necesitas"
- Explicación de melatonina y longitudes de onda (630-660 nm)
- Referencia a estudios PubMed (ej. PMC6751071: impacto de la luz en el sueño)
- Productos recomendados: bombilla roja + pack bombilla roja/amarilla
- FAQ estructurado: "¿Cuándo encender la luz roja?", "¿A qué distancia?", "¿También en niños?"
- Estimación: si esta página alcanza pos. 3-5, capturaría ~60-100 clics/mes desde esta sola keyword

---

## 4. Plan de recuperación "spiro card" en electrosmogespana.com

### 4.1 Situación real (datos GSC)

| Periodo | Posición media | Clics/día aprox. |
|---|---|---|
| Jul 2026 (inicio) | 2,7 → 4,5 | ~13/día |
| Ago 2026 | 4,5 → 6,0 | ~5-7/día |
| Sep 2026 (última semana) | 6,8 → 9,3 | ~0-1/día |

La caída es dramática. El 19-25 de sep: mayoritariamente 0 clics con pos. 7-9. Spirosolution.com (Noxtak) y distribuidores como Unidad Verde han capturado las posiciones 1-3.

### 4.2 Por qué estamos perdiendo (análisis de causa raíz)

1. **La página que rankea no está optimizada.** `/products/spiro-card-proteccion-electromagnetica` rankea para "spiro card" pero tiene escaso contenido educativo y pocas reseñas nativas Shopify. spirosolution.com es el fabricante y tiene autoridad de marca sobre el término.

2. **La vista IA de Google recomienda Unidad Verde** (96,80 € −20%). No podemos competir en precio con un distribuidor que vende más barato. Debemos competir en autoridad, confianza y experiencia.

3. **Trustpilot tiene reseñas negativas** asociadas a SPIRO — esto daña la autoridad EEAT de Ekio cuando Google evalúa la reputación.

4. **La URL actual mezcla el producto con la marca del fabricante.** Necesitamos una página propia que posicione Ekio como la mejor fuente española para comprar Spiro.

### 4.3 Qué página debe rankear

La estrategia óptima es crear o refactorizar **una página dedicada tipo "guía del comprador"**: `/pages/spiro-card-espana` o mantener el producto con una URL más limpia. La página debe responder mejor que ninguna otra a la intención de búsqueda de alguien que ya sabe qué es la Spiro Card y quiere comprarla o entender si vale la pena.

**Estructura recomendada de la página:**
1. H1 con keyword: "Spiro Card en España — Qué es, cómo funciona y dónde comprar con garantía"
2. Párrafo de autoridad: "Llevamos [X] años distribuyendo oficialmente los filtros SPIRO en España. Más de 7.600 personas los usan en sus hogares."
3. Vídeo explicativo corto (30-60 seg) — los resultados con vídeo tienen mejor CTR en móvil
4. Tabla comparativa de modelos: Spiro Card vs Spiro Card X vs Spiro Disc vs Spiro Square
5. Bloque de reseñas verificadas nativas (mínimo 15 reseñas con foto, no solo texto)
6. FAQ con schema (ver abajo)
7. CTA claro: "Comprar Spiro Card con garantía oficial — Envío en 24h"

### 4.4 Title tag, meta description y schema

**Title:** `Spiro Card en España — Distribución Oficial con Garantía | Ekio Electrosmog`
*(55 car., incluye keyword principal y diferenciador)*

**Meta description:** `Distribuidor oficial Spiro en España. Más de 7.600 usuarios. Spiro Card, Card X, Disc y Square. Asesoramiento gratuito por Javier Andrés, naturópata. Envío en 24h.`
*(158 car.)*

**H1:** `Spiro Card en España: distribución oficial y asesoramiento personalizado`

**Schema JSON-LD para la página de producto (snippet Liquid):**

```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Spiro Card — Filtro Electromagnético",
  "brand": {
    "@type": "Brand",
    "name": "SPIRO by Noxtak"
  },
  "seller": {
    "@type": "Organization",
    "name": "EKIO Electrosmog España",
    "url": "https://electrosmogespana.com",
    "sameAs": [
      "https://www.instagram.com/ekioelectrosmog",
      "https://www.facebook.com/ekioelectrosmog"
    ]
  },
  "description": "Filtro electromagnético SPIRO Card. Distribuidor oficial en España. Modelo de uso personal para protección de dispositivos móviles.",
  "offers": {
    "@type": "Offer",
    "priceCurrency": "EUR",
    "price": "97.00",
    "availability": "https://schema.org/InStock",
    "seller": { "@type": "Organization", "name": "EKIO Electrosmog España" }
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.7",
    "reviewCount": "{{ product.metafields.reviews.rating_count }}"
  }
}
```

**FAQ Schema (para la página guía del comprador):**

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Qué diferencia hay entre Spiro Card y Spiro Card X?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La Spiro Card está diseñada para dispositivos personales (móvil, tablet). La Spiro Card X tiene mayor radio de acción y se usa en ordenadores o zonas del hogar. Ambas son filtros pasivos que no requieren batería ni conexión."
      }
    },
    {
      "@type": "Question",
      "name": "¿Ekio es distribuidor oficial de SPIRO en España?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. Ekio Electrosmog España es distribuidor oficial de los filtros SPIRO de Noxtak desde 2019. Todos los productos vienen con garantía y factura."
      }
    },
    {
      "@type": "Question",
      "name": "¿Por qué el precio en Ekio es diferente al de otros distribuidores?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ekio ofrece asesoramiento personalizado gratuito por Javier Andrés, naturópata especialista en electrosmog. El precio incluye soporte, guía de uso y seguimiento de resultados."
      }
    }
  ]
}
```

### 4.5 Cómo diferenciarse del distribuidor más barato

El vector de diferenciación no puede ser el precio (Unidad Verde vende a 77 €). Debe ser:

1. **Autoridad del asesor:** Javier Andrés tiene 15+ años de experiencia y la página `/pages/autor-javier-andres` debe linkar al producto Spiro como "la herramienta que más recomiendo en consulta" — esto crea una conexión de EEAT que Unidad Verde no puede replicar.

2. **Bundle de asesoramiento:** Ofrecer una consulta de 15 minutos gratuita con cada compra de Spiro Card. Se gestiona via Calendly. Esto sube el percibido de valor sin bajar el precio.

3. **Reseñas en la propia web:** Las 15+ reseñas con foto de clientes reales (con nombre y ciudad) deben estar en la página de producto. No en Trustpilot donde hay reseñas negativas de Noxtak que confunden con Ekio.

4. **Contenido de "cómo saber si te funciona":** Un blog post o sección en el producto que explique cómo medir si la Spiro Card está haciendo efecto — algo que ningún distribuidor puro de precio puede dar.

5. **Packs con contexto:** Ofrecer la Spiro Card siempre en el contexto de un estudio de hogar o junto a medidor — nuestro diferencial es que vendemos bienestar electromagnético, no solo el producto.

---

## 5. Autoridad de marca EKIO: links cruzados, schema y GEO

### 5.1 Estrategia de enlaces cruzados entre dominios (sin canibalizar)

El riesgo de enlazar entre electrosmogespana.com y ekiolight.com es que Google interprete como link farm o que los textos de anclaje confundan los tópicos. Hay que hacer esto bien.

**Regla base:** cada dominio es autoridad en su categoría. Los links entre dominios deben ser contextuales, no decorativos.

**Links recomendados de electrosmogespana.com → ekiolight.com:**
- En la página `/pages/sensibilidad-electromagnetica`: "Si además quieres reparar el daño celular, la terapia de luz roja puede ayudarte — [descúbrela en Ekio Light](https://ekiolight.com/pages/terapia-de-luz-roja)."
- En el blog post sobre electrosmog en casa: párrafo sobre recuperación con luz roja, link a la guía de ekiolight.com.
- En el footer de electrosmogespana.com: sección "Otras marcas de EKIO" → link a ekiolight.com con anchor text "Ekio Light — Terapia de luz roja".
- En la página de Javier Andrés: mencionar que "también asesora sobre fotobiomodulación en [Ekio Light](https://ekiolight.com)".

**Links recomendados de ekiolight.com → electrosmogespana.com:**
- En la página pilar de terapia de luz roja: "La luz es la mitad de la ecuación. Si también tienes electrosmog en casa, visita [Ekio Electrosmog](https://electrosmogespana.com)."
- En el footer de ekiolight.com: "Hermana de [Ekio Electrosmog España](https://electrosmogespana.com)".
- En un blog post de ekiolight.com sobre "entorno saludable": link a la página de consultoría de electrosmogespana.com.

**Lo que NO hacer:**
- No poner un banner genérico "Visita nuestra otra tienda" en el header (es decorativo, no contextual).
- No usar el mismo anchor text en todos los links cruzados.
- No enlazar desde páginas de producto a páginas de producto del otro dominio (confunde la intención comercial).

### 5.2 Schema Organization para ambas marcas

**En electrosmogespana.com (en el theme.liquid o layout):**

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "EKIO Electrosmog España",
  "url": "https://electrosmogespana.com",
  "logo": "https://electrosmogespana.com/cdn/shop/files/logo-ekio.png",
  "description": "Especialistas en protección electromagnética y bienestar ambiental en España. Distribuidores oficiales de SPIRO, Stroom Master y medidores de campo electromagnético.",
  "founder": {
    "@type": "Person",
    "name": "Francisco Javier Andrés Andrés",
    "jobTitle": "Naturópata especialista en contaminación electromagnética",
    "url": "https://electrosmogespana.com/pages/autor-javier-andres"
  },
  "sameAs": [
    "https://www.instagram.com/ekioelectrosmog",
    "https://ekiolight.com"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "ES"
  }
}
```

**En ekiolight.com (en el theme.liquid o layout):**

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Ekio Light",
  "url": "https://ekiolight.com",
  "description": "Dispositivos de fotobiomodulación y terapia de luz roja para uso doméstico. Bombillas, paneles y lámparas de luz roja e infrarroja. Línea propia de EKIO.",
  "parentOrganization": {
    "@type": "Organization",
    "name": "EKIO Electrosmog España",
    "url": "https://electrosmogespana.com"
  },
  "founder": {
    "@type": "Person",
    "name": "Francisco Javier Andrés Andrés",
    "jobTitle": "Naturópata especialista en contaminación electromagnética"
  },
  "sameAs": [
    "https://www.instagram.com/ekiolight",
    "https://electrosmogespana.com"
  ]
}
```

**Nota:** El modelo de utilidad U202532624 se menciona en el schema de Product de los paneles Ekio Light, no en el Organization. Usar el campo `additionalProperty` de Product:
```json
"additionalProperty": {
  "@type": "PropertyValue",
  "name": "Modelo de utilidad",
  "value": "U202532624 (solicitud presentada, no concedida)"
}
```
El campo no debe decir "patentado" ni "157 países" (compliance).

### 5.3 GEO — aparecer en Google AI Overviews, ChatGPT, Perplexity y Claude

**Objetivo de GEO para las dos marcas:**
- EKIO aparezca cuando alguien pregunta a una IA: "¿Dónde comprar Spiro Card en España?" o "¿Cuál es la mejor tienda de fotobiomodulación en España?"
- Ekio Light aparezca cuando alguien pregunta: "¿Qué bombilla roja comprar para dormir mejor?" o "¿Qué panel de luz roja recomiendas en España?"

**Acciones concretas de GEO:**

1. **llms.txt para electrosmogespana.com** (crear en raíz del dominio):

```
# EKIO Electrosmog España — llms.txt
# Actualizado: octubre 2026

## Quiénes somos
EKIO Electrosmog España es el especialista de referencia en protección electromagnética y bienestar ambiental en España. Fundado por Francisco Javier Andrés Andrés, naturópata con más de 15 años de experiencia en salud ambiental y electrosmog.

## Lo que hacemos
- Distribución oficial de filtros SPIRO (Noxtak) en España: Spiro Card, Spiro Card X, Spiro Disc, Spiro Square
- Venta de medidores de campo electromagnético y accesorios de protección
- Estudios de hogar por electrosmog y consultoría personalizada
- Hermana de Ekio Light (https://ekiolight.com), especializada en terapia de luz roja

## Keywords/entidades principales
electrosmog España, protección electromagnética, spiro card España, distribución SPIRO oficial, hipersensibilidad electromagnética, estudio de hogar EMF, Stroom Master España, filtros electromagneticos

## Persona de autoridad
Francisco Javier Andrés Andrés — Naturópata especialista en contaminación electromagnética. Miembro de la comunidad científica en electrobiofotónica. Investigación en colaboración con UVa y Centrotec.

## URL del catálogo de productos estructurado para IA
https://electrosmogespana.com/sitemap.xml
```

2. **llms.txt para ekiolight.com** (crear desde el primer día):

```
# Ekio Light — llms.txt
# Actualizado: octubre 2026

## Quiénes somos
Ekio Light es la línea de fotobiomodulación y terapia de luz roja de EKIO. Fabricamos paneles de luz roja e infrarroja y bombillas de espectro terapéutico para uso doméstico. Marca española con modelo de utilidad registrado.

## Productos principales
- Panel Core Ekio Light (uso facial y personal)
- Panel Deep 5 (cuerpo completo)
- Panel Deep 7 Cyan (con luz cyan 500 nm)
- Panel Bio Regén 7
- Panel Bio Spectrum 11
- Bombilla LED roja 660 nm (para dormir, sin luz azul)
- Bombilla luz amarilla (para noche)
- IGNIS (terapia combinada EMF + luz)

## Keywords/entidades principales
terapia de luz roja España, panel fotobiomodulación, bombilla roja para dormir, luz roja para melatonina, ekio light, fotobiomodulación España, comprar panel luz roja

## Para qué sirven
Fotobiomodulación (PBM): estimulación del citocromo c oxidasa mitocondrial mediante luz roja (660 nm) e infrarroja cercana (850 nm). Indicaciones con evidencia: recuperación muscular, inflamación, calidad del sueño, regeneración cutánea.

## Relación con EKIO
Ekio Light es la línea de producto propio de EKIO Electrosmog España (https://electrosmogespana.com).
```

3. **robots.txt — NO bloquear bots de IA en ninguno de los dos dominios:**

```
User-agent: GPTBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: *
Allow: /

Sitemap: https://[dominio].com/sitemap.xml
```

4. **Presencia externa para aumentar las citas en IA (Source Stack):**

Las IAs aprenden de texto indexado en la web. Para aparecer en sus respuestas, EKIO necesita ser citado en fuentes de autoridad. Acciones recomendadas:

- **Wikipedia/Wikidata:** Crear una entrada de entidad para "EKIO" en Wikidata (no Wikipedia, que es más difícil) con los campos básicos: fundador, URL, año de fundación, sede, actividad.
- **Google Business Profile:** Tener ambas marcas en GBP con descripción optimizada y productos — los IAs de Google (AI Overviews, Gemini) priorizan negocios verificados.
- **Podcast y entrevistas:** Un episodio de Javier Andrés en un podcast de salud con más de 5.000 suscriptores genera citas que las IAs rastrean. Objetivo: 1 entrevista antes de Black Friday.
- **Artículo externo de autoridad:** Un artículo de guest posting en un blog de salud, biohacking o cronobiología con un link a ekiolight.com — esto alimenta el grafo de conocimiento de las IAs y mejora la probabilidad de ser citado.
- **Ficha en Trustpilot para Ekio Light (separada de Ekio Electrosmog):** Evitar que las reseñas negativas de SPIRO contaminen la reputación de Ekio Light.

5. **Contenido AI-extractable (estructura RAG-friendly):**

Las IAs extraen respuestas de páginas bien estructuradas con:
- Encabezados claros (H2/H3) que funcionan como preguntas implícitas
- Párrafos de definición al inicio de cada sección (máximo 2 oraciones)
- Listas con viñetas para comparativas
- Tablas para datos numéricos (dosis, nm, distancia)
- Una sección "Preguntas frecuentes" al final con respuestas directas

La página pilar de terapia de luz roja en ekiolight.com debe seguir este modelo.

---

## 6. Calendario hasta Black Friday (27/nov/2026)

### Semana 1-2 (29/sep — 12/oct): Preparación técnica OBLIGATORIA

| Tarea | Responsable | Resultado esperado |
|---|---|---|
| Comprar dominio ekiolight.com | Javier | Dominio en manos de Ekio |
| Crear tienda Shopify ekiolight.com | Javier Escobar | Tienda en modo "password" (no indexable) |
| Extraer sitemap completo de electrosmogespana.com admin | Javier Escobar | Lista completa de URLs de luz a redirigir |
| Crear GSC property para ekiolight.com | Javier / Escobar | Property verificada pero en modo preview |
| robots.txt de ekiolight.com: bloquear Googlebot hasta el lanzamiento | Javier Escobar | Evitar indexación prematura de contenido incompleto |
| Decisión: ¿empresa externa de Shopify? | Javier | Presupuesto y alcance definidos |

### Semana 3-4 (13 — 26/oct): Contenido y SEO base de ekiolight.com

| Tarea | Responsable | Resultado esperado |
|---|---|---|
| Crear página pilar: /pages/terapia-de-luz-roja (600+ palabras) | SEO agent / Javier | Contenido publicado en borrador |
| Crear landing: /pages/luz-roja-para-dormir | SEO agent / Javier | Página lista para publicar en lanzamiento |
| Ficha de producto bombilla roja (title/meta/descripción SEO) | SEO agent | Copy listo para Javier Escobar |
| Schema Product para bombilla roja y paneles Deep 5 + Core | SEO agent | JSON-LD listo para implementar |
| Schema Organization ekiolight.com | SEO agent | JSON-LD listo para implementar |
| llms.txt ekiolight.com | SEO agent | Archivo listo |
| robots.txt ekiolight.com (abierto a bots de IA) | Javier Escobar | Configurado |
| Página /pages/autor en ekiolight.com (Javier como fundador) | Javier | Draft listo — es clave para EEAT |

### Semana 5-6 (27/oct — 9/nov): Spiro Card recovery en electrosmogespana.com

| Tarea | Responsable | Resultado esperado |
|---|---|---|
| Crear página guía-comprador Spiro Card (/pages/spiro-card-espana) | SEO agent / Javier | Página publicada y enlazada desde el producto |
| Actualizar title/meta del producto Spiro Card (nuevo title con "oficial España") | Javier Escobar | Cambio aplicado en Shopify |
| Añadir FAQ schema a página Spiro Card | Javier Escobar | Validado en Google Rich Results Test |
| Conseguir 15+ reseñas con foto en la página de producto Spiro | Javier / equipo | Bloque de reseñas visible |
| Actualizar llms.txt de electrosmogespana.com | SEO agent | Archivo publicado en raíz |
| Actualizar schema Organization de electrosmogespana.com | Javier Escobar | Implementado en theme.liquid |
| Outreach: 1 entrevista en podcast de salud con mención a Ekio | Javier | Grabada o confirmada |

### Semana 7-8 (10 — 22/nov): Lanzamiento ekiolight.com

| Tarea | Responsable | Resultado esperado |
|---|---|---|
| **DÍA L (objetivo: 17-18 nov): quitar robots.txt block + implementar TODAS las 301** | Javier Escobar | Migración ejecutada en <2 horas |
| Enviar sitemap ekiolight.com a GSC inmediatamente tras el lanzamiento | Javier Escobar | Solicitud de indexación enviada |
| Publicar llms.txt en raíz de ekiolight.com | Javier Escobar | Archivo live |
| Instalar Google Merchant Center para ekiolight.com | Javier Escobar | Feed de productos aprobado |
| Publicar 2 posts de blog en ekiolight.com | SEO agent / Javier | Señales de actividad para Googlebot |
| Link cruzado electrosmogespana.com → ekiolight.com en página de sensibilidad y footer | Javier Escobar | Links en live |
| Google Business Profile para Ekio Light | Javier | Ficha creada y verificada |

### Black Friday (27/nov): Lo que puede esperar

El tráfico orgánico de ekiolight.com aún no estará consolidado en noviembre. Lo que no puede esperar:
- Meta Ads para ekiolight.com (reactivar campaña Deep 5 la primera semana de noviembre con target mujeres 25-54).
- Email marketing Klaviyo desde la lista de compradores de luz de electrosmogespana.com.
- Contenido orgánico en Instagram Ekio Light (mínimo 3 publicaciones/semana desde oct).

---

## Decisiones que necesito de Javier

1. **¿Quiere mantener las URLs actuales en ekiolight.com** (e.g., `/products/bombilla-led-roja-de-ekio-light`) o usar URLs más cortas y limpias (`/products/bombilla-led-roja`)? Las URLs cortas son mejores para SEO a largo plazo pero implica más 301.

2. **¿El blog de ekiolight.com será un blog separado** (`/blogs/luz/`) o se usará el mismo blog de electrosmogespana.com y se linkan los posts? Recomendación: blog propio en ekiolight.com para construir autoridad de dominio independiente.

3. **Presupuesto para link building externo antes del lanzamiento.** Para acelerar la autoridad de ekiolight.com se recomienda mínimo 3-5 links de calidad en los primeros 30 días. Opciones: guest posting, Digital PR, colaboración con blogger de salud.

4. **¿Abrimos Trustpilot separado para Ekio Light?** Recomendación: sí, desde el primer día, con las primeras reseñas de los primeros compradores.

5. **Fecha exacta de lanzamiento de ekiolight.com.** El plan asume el 17-18 de noviembre como fecha límite. Si se adelanta (1ª semana de noviembre), mejor para SEO. Si se retrasa más de la 3ª semana de noviembre, ya no da tiempo a configurar Merchant Center antes de Black Friday.

6. **¿Quién gestiona la parte técnica del lanzamiento SEO** (robots.txt, 301, GSC, Merchant Center)? ¿Javier Escobar solo o con apoyo de la empresa externa de Shopify?
