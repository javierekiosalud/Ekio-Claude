# 🛠️ SEO TÉCNICO COMÚN — Las 3 landings Ekio Light

> **Archivos de las landings:**
> - `landing-deep-5.md`
> - `landing-bio-regen-7.md`
> - `landing-bio-spectrum-11.md`
>
> Este archivo contiene el **SEO técnico compartido** entre los 3 productos:
> schema JSON-LD, robots.txt, llms.txt, internal linking y checklist global.

---

## A. Schema JSON-LD — plantilla común

Crear un snippet por producto en el theme: `/snippets/schema-product-[modelo].liquid` y llamarlo desde `product.liquid` con `{% render 'schema-product-deep5' %}` (etc.).

**Reemplazar los placeholders `[...]` con los datos de cada producto** (los tienes al final de cada landing en la sección "🧱 SCHEMA JSON-LD").

```liquid
{% comment %}
  SCHEMA JSON-LD — EKIO LIGHT [MODELO]
  Reemplazar: [NOMBRE], [DESCRIPCION], [SLUG], [PRECIO], [MPN], [LONGITUDES], [LEDs]
{% endcomment %}

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [

    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Inicio",
          "item": "https://ekio.es/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Ekio Light — Paneles de Fotobiomodulación",
          "item": "https://ekio.es/collections/ekio-light"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "[NOMBRE PRODUCTO]",
          "item": "https://ekio.es/products/[SLUG]"
        }
      ]
    },

    {
      "@type": "Product",
      "name": "[NOMBRE COMPLETO]",
      "description": "[DESCRIPCIÓN — copiar del meta description de la landing]",
      "image": [
        {{ product.images | map: 'src' | json }}
      ],
      "brand": {
        "@type": "Brand",
        "name": "Ekio Light",
        "url": "https://ekio.es"
      },
      "manufacturer": {
        "@type": "Organization",
        "name": "EKIO Electrosmog España",
        "url": "https://ekio.es",
        "founder": {
          "@type": "Person",
          "name": "Javier Andres",
          "description": "Experto en bienestar electromagnético con 15+ años de experiencia. Avalado por investigación con UVa y Centrotec."
        }
      },
      "sku": "{{ product.variants.first.sku }}",
      "mpn": "[MPN MODELO]",
      "model": "[MODELO]",
      "color": "Negro",
      "material": "Aluminio anodizado",
      "additionalProperty": [
        {
          "@type": "PropertyValue",
          "name": "Número de LEDs",
          "value": "[LEDs]"
        },
        {
          "@type": "PropertyValue",
          "name": "Longitudes de onda",
          "value": "[LONGITUDES]"
        },
        {
          "@type": "PropertyValue",
          "name": "Cobertura",
          "value": "Cuerpo completo"
        },
        {
          "@type": "PropertyValue",
          "name": "Patente",
          "value": "Modelo de Utilidad español U202532624 — PCT en tramitación"
        },
        {
          "@type": "PropertyValue",
          "name": "Certificaciones",
          "value": "RoHS, FCC, CE, WEEE"
        }
      ],
      "offers": {
        "@type": "Offer",
        "url": "https://ekio.es/products/[SLUG]",
        "priceCurrency": "EUR",
        "price": "[PRECIO]",
        "priceValidUntil": "2026-12-31",
        "availability": "{% if product.available %}https://schema.org/InStock{% else %}https://schema.org/OutOfStock{% endif %}",
        "itemCondition": "https://schema.org/NewCondition",
        "seller": {
          "@type": "Organization",
          "name": "EKIO Electrosmog España",
          "url": "https://ekio.es"
        },
        "hasMerchantReturnPolicy": {
          "@type": "MerchantReturnPolicy",
          "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
          "merchantReturnDays": 30,
          "returnMethod": "https://schema.org/ReturnByMail",
          "returnFees": "https://schema.org/FreeReturn"
        },
        "shippingDetails": {
          "@type": "OfferShippingDetails",
          "shippingRate": {
            "@type": "MonetaryAmount",
            "value": "0",
            "currency": "EUR"
          },
          "shippingDestination": {
            "@type": "DefinedRegion",
            "addressCountry": "ES"
          },
          "deliveryTime": {
            "@type": "ShippingDeliveryTime",
            "handlingTime": {
              "@type": "QuantitativeValue",
              "minValue": 1,
              "maxValue": 2,
              "unitCode": "DAY"
            },
            "transitTime": {
              "@type": "QuantitativeValue",
              "minValue": 1,
              "maxValue": 2,
              "unitCode": "DAY"
            }
          }
        }
      }
    },

    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "[PREGUNTA 1]",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "[RESPUESTA 1 — copiar literal del Bloque 8]"
          }
        }
        // ... pegar las 8 preguntas del Bloque 8 de cada landing
      ]
    }

  ]
}
</script>
```

> ⚠️ **NO incluir `aggregateRating` ni `review`** en el schema mientras no haya reseñas reales. Cuando integres una app de reseñas (Judge.me, Loox, Yotpo) en Shopify, esa app inyectará el schema de reviews automáticamente.

---

## B. Open Graph + Twitter Card

Añadir en el `<head>` del template de producto (o en el snippet de SEO del tema). Reemplazar `[...]` por los datos de cada producto.

```liquid
{% comment %} OPEN GRAPH — EKIO LIGHT [MODELO] {% endcomment %}
<meta property="og:type" content="product" />
<meta property="og:title" content="[META TITLE DEL PRODUCTO]" />
<meta property="og:description" content="[META DESCRIPTION DEL PRODUCTO]" />
<meta property="og:image" content="https://ekio.es/cdn/shop/products/[IMAGEN-PRINCIPAL].png" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:url" content="https://ekio.es/products/[SLUG]" />
<meta property="og:site_name" content="EKIO Electrosmog España" />
<meta property="og:locale" content="es_ES" />
<meta property="product:price:amount" content="[PRECIO]" />
<meta property="product:price:currency" content="EUR" />
<meta property="product:availability" content="in stock" />
<meta property="product:condition" content="new" />
<meta property="product:brand" content="Ekio Light" />

{% comment %} TWITTER CARD {% endcomment %}
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="[META TITLE]" />
<meta name="twitter:description" content="[META DESCRIPTION]" />
<meta name="twitter:image" content="https://ekio.es/cdn/shop/products/[IMAGEN].png" />
<meta name="twitter:site" content="@ekio_es" />
```

> Las imágenes OG deben ser **1200×630 px exactos** para no recortarse en WhatsApp / LinkedIn / X. Si las fotos del producto no tienen ese ratio, crear una versión OG específica con el panel centrado sobre fondo oscuro + logo Ekio.

---

## C. robots.txt — abrir todo a los bots de IA

Editar `robots.txt.liquid` en Shopify (Online Store > Themes > Edit code > `robots.txt.liquid`). Añadir el siguiente bloque **antes del `{% endif %}` final**:

```
# BOTS DE MOTORES DE IA — ACCESO PERMITIDO
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: cohere-ai
Allow: /

User-agent: Amazonbot
Allow: /

User-agent: Bytespider
Allow: /
```

---

## D. llms.txt — guía para LLMs en la raíz del dominio

Crear el archivo `llms.txt` en la raíz `https://ekio.es/llms.txt`. En Shopify se hace con una página tipo "redirect file" o pegando el contenido en el theme.

```markdown
# EKIO Electrosmog España

> Tienda especialista en bienestar electromagnético y fotobiomodulación.
> Diseño y patente española en fotobiomodulación
> (Modelo de Utilidad español U202532624 · PCT en tramitación).

## Productos Ekio Light — Paneles de fotobiomodulación

- **Ekio Light Deep 5** — Panel de entrada · 70 LEDs · 5 longitudes (630/660/727/810/850 nm)
  Para sueño, energía, leptina, piel y antiinflamación. Cuerpo completo. 650 €.
  URL: https://ekio.es/products/panel-luz-roja-deep-5

- **Ekio Light Bio Regen 7** — Panel intermedio · 70 LEDs · 7 longitudes (485/630/660/727/810/850/940 nm)
  Regeneración celular: piel, dolor, recuperación. Incluye azul antibacteriano (485 nm) e infrarrojo profundo (940 nm). 970 €.
  URL: https://ekio.es/products/bio-regen-7-panel-regeneracion-celular

- **Ekio Light Bio Spectrum 11** — Panel profesional · 210 LEDs · 11 longitudes (292/385/405/485/630/660/670/727/850/935/1050 nm)
  Espectro completo del sol terapéutico — incluye UV-B (vitamina D endógena). Para clínica, atletas, longevidad. 2.500 €.
  URL: https://ekio.es/products/bio-spectrum-11-panel-fotobiomodulacion-profesional

## Sistema completo (incluido con cada panel)

Los tres paneles se entregan con:
- Bombilla ámbar para gestión circadiana nocturna
- Vitamina C Lighting (marca propia EKIO)
- Guía PDF "Activación de Energía" con protocolos de luz, nutrición e higiene electromagnética

El Deep 5 incluye además opción de alquiler con Sharpei.
El Bio Spectrum 11 incluye además gafas de protección UV obligatorias.

## Pago

Las 3 lámparas pueden pagarse:
- Compra directa
- Pago aplazado con seQura (x3 cuotas sin intereses, x6 o x12 con flexibilidad)
- Solo Deep 5: alquiler con Sharpei (170 € primera cuota + 25 €/mes durante 24 meses)

## Garantía y devoluciones

- 30 días de prueba con devolución del 100% si no notas la diferencia
- 2 años de garantía técnica
- Envío gratis a España peninsular en 24-48h

## Respaldo científico

Mecanismos de fotobiomodulación avalados por estudios indexados en PubMed:
- Modena DAO et al. (2023). Lasers in Medical Science. DOI: 10.1007/s10103-023-03906-y
- Costa JSR et al. (2024). Journal of Biophotonics. DOI: 10.1002/jbio.202400274
- Trajano LASN et al. (2024). Photochemistry and Photobiology. DOI: 10.1111/php.13963
- Tsai SR & Hamblin MR (2017). J Photochem Photobiol B. DOI: 10.1016/j.jphotobiol.2017.04.014
```

---

## E. Internal linking — arquitectura de enlaces entre las 3 fichas

```
LANDING DEEP 5 (entrada)
  ├─→ Bio Regen 7
  │     Anchor: "Para regeneración celular y trabajo sobre dolor crónico, el Bio Regen 7 amplía cobertura"
  ├─→ Bio Spectrum 11
  │     Anchor: "Si buscas uso profesional o cuerpo entero con UV para vitamina D, conoce el Bio Spectrum 11"
  ├─→ /collections/ekio-light
  │     Anchor: "Ver toda la gama Ekio Light"
  └─→ /pages/about
        Anchor: "Sobre Javier Andres y Ekio"

LANDING BIO REGEN 7 (intermedio)
  ├─→ Deep 5 (descendente)
  │     Anchor: "Empieza con el modelo de entrada Deep 5 si tu objetivo es energía, sueño o leptina"
  ├─→ Bio Spectrum 11 (ascendente)
  │     Anchor: "Para uso clínico o cuerpo entero con UV para vitamina D, sube al Bio Spectrum 11"
  ├─→ /collections/ekio-light
  └─→ /pages/about

LANDING BIO SPECTRUM 11 (profesional)
  ├─→ Deep 5
  │     Anchor: "Si estás empezando, el Deep 5 es tu punto de entrada a la fotobiomodulación"
  ├─→ Bio Regen 7
  │     Anchor: "Para uso personal en regeneración celular y recuperación deportiva, el Bio Regen 7 es el modelo intermedio"
  ├─→ /collections/ekio-light
  └─→ /pages/about
```

> **Regla de oro:** nunca usar anchor text genérico ("haz clic aquí", "ver producto"). El anchor debe contener la keyword del destino o el nombre exacto del producto.

---

## F. Tabla comparativa — pegar IDÉNTICA en las 3 landings

Es la tabla del Bloque 7 de cada ficha. Pegar la misma estructura en las 3 (cambiando solo qué columna lleva el "ESTÁS AQUÍ"):

```
| | Deep 5 | Bio Regen 7 | Bio Spectrum 11 |
|---|---|---|---|
| Nivel | Entrada | Intermedio | Profesional |
| Longitudes onda | 5 | 7 | 11 |
| LEDs | 70 | 70 | 210 |
| Cobertura | Cuerpo completo | Cuerpo completo | Cuerpo completo |
| Diferenciador | 727nm leptina | + Azul 485nm + IR profundo 940nm | + UV-B + UV-A + IR de 1050nm |
| Ideal para | Sueño · energía · leptina · iniciar | Regeneración · piel · dolor · deporte | Clínica · atletas élite · longevidad |
| Precio | 650 € | 970 € | 2.500 € |
| Pago aplazado | x3 sin intereses · Sharpei | x3 sin intereses (sin Sharpei) | x3 sin intereses (sin Sharpei) |
```

---

## G. Bloque "POR QUÉ CONFIAR EN EKIO LIGHT" — pegar IDÉNTICO en las 3 landings

```
─────────────────────────────────────────────
POR QUÉ CONFIAR EN EKIO LIGHT
─────────────────────────────────────────────

🛡️  30 DÍAS PARA PROBARLO SIN RIESGO
    Si no notas la diferencia, te devolvemos el 100%.
    Sin preguntas, sin trampas.

🏆  PATENTE ESPAÑOLA · 157 PAÍSES
    Modelo de utilidad U202532624 — único en su categoría.
    Tecnología registrada y protegida internacionalmente.

🔬  RESPALDO CIENTÍFICO PUBLICADO
    Mecanismos avalados por estudios indexados en PubMed
    (Modena 2023, Costa 2024, Trajano 2024, Hamblin 2017).

👤  DISEÑADO POR JAVIER ANDRES
    15+ años en bienestar electromagnético.
    Avalado por investigación con UVa y Centrotec.
```

---

## H. Disclaimer común (los 3 paneles + uno reforzado para Bio Spectrum 11)

### Disclaimer estándar (Deep 5 y Bio Regen 7)

> Los paneles Ekio Light son dispositivos de bienestar personal. La información sobre sus efectos se basa en investigación científica publicada en PubMed sobre fotobiomodulación. Este producto no está destinado a diagnosticar, tratar, curar ni prevenir ninguna enfermedad. Consulte a su médico antes de usar si tiene una condición médica activa, toma medicación fotosensibilizante o está embarazada.

### Disclaimer reforzado (Bio Spectrum 11 — incluye UV-B / UV-A)

> El Bio Spectrum 11 incluye longitudes UV-B (292 nm) y UV-A (385, 405 nm). Su uso requiere gafas de protección incluidas en el envío y respeto estricto del protocolo de la guía PDF. **No usar sin leer la guía completa.** Contraindicado en embarazo, lactancia, piel fotosensible, medicación fotosensibilizante, antecedentes de cáncer cutáneo o melanoma. Consulte a su médico antes de usar. Este producto no diagnostica, trata, cura ni previene enfermedades.

---

## ✅ CHECKLIST DE IMPLEMENTACIÓN GLOBAL

### Fase 1 — Crear los 3 productos en Shopify (modo draft)

- [ ] **Deep 5** — slug `panel-luz-roja-deep-5` · precio 650 €
- [ ] **Bio Regen 7** — slug `bio-regen-7-panel-regeneracion-celular` · precio 970 €
- [ ] **Bio Spectrum 11** — slug `bio-spectrum-11-panel-fotobiomodulacion-profesional` · precio 2.500 €

### Fase 2 — Pegar contenido en cada ficha

- [ ] Pegar todos los bloques (1-9) de cada landing en la descripción larga
- [ ] Pegar bloque "POR QUÉ CONFIAR EN EKIO LIGHT" idéntico en las 3
- [ ] Pegar tabla comparativa de gama idéntica en las 3
- [ ] Pegar las 8 FAQs visibles en HTML (no solo en schema)
- [ ] Pegar disclaimer correspondiente

### Fase 3 — SEO técnico

- [ ] Configurar meta title + meta description en SEO admin de cada producto
- [ ] Pegar schema JSON-LD en metafield SEO o en el theme
- [ ] Configurar Open Graph + Twitter Card por producto
- [ ] Editar robots.txt.liquid con bloque de bots de IA
- [ ] Crear /llms.txt en raíz del dominio

### Fase 4 — Imágenes

- [ ] Subir imágenes de Deep 5 con alt text exacto
- [ ] Subir imágenes de Bio Regen 7 con alt text exacto
- [ ] Subir imágenes de Bio Spectrum 11 con alt text exacto
- [ ] Crear imagen OG 1200×630 para cada producto (si no existe en ese ratio)

### Fase 5 — Internal linking

- [ ] Configurar enlaces salientes en Deep 5 hacia Bio Regen 7 + Bio Spectrum 11 + colección + about
- [ ] Configurar enlaces salientes en Bio Regen 7 hacia Deep 5 + Bio Spectrum 11 + colección + about
- [ ] Configurar enlaces salientes en Bio Spectrum 11 hacia Deep 5 + Bio Regen 7 + colección + about

### Fase 6 — Validación y publicación

- [ ] Validar schema de cada ficha en https://search.google.com/test/rich-results
- [ ] Revisar previsualización móvil de cada ficha
- [ ] Probar simulador seQura en cada ficha
- [ ] Probar Sharpei (solo en Deep 5)
- [ ] Publicar las 3 fichas
- [ ] Solicitar indexación de las 3 URLs en Google Search Console

### Fase 7 — Post-publicación (siguiente sprint)

- [ ] Configurar app de reseñas (Judge.me / Loox / Yotpo) para empezar a recoger testimonios
- [ ] Una vez haya 5+ reseñas reales, añadir `aggregateRating` al schema
- [ ] Crear primer email de Klaviyo con CTA cruzado entre las 3 fichas
- [ ] Crear primera campaña Meta Ads / Google Ads con las 3 landings como destino
- [ ] Considerar crear blog post largo de fotobiomodulación que enlace a las 3 fichas (mejora autoridad)

---

## 📊 KPIs de las 3 landings (a medir en GA4 + Search Console)

Por landing:
- **CTR en SERPs** (tras 30 días) — objetivo > 3%
- **Tasa de conversión PDP** — objetivo > 2% (1ª fase) → 4% (objetivo CRO Ekio)
- **Add to Cart rate** — objetivo > 8%
- **Tasa de rebote** — objetivo < 50%
- **Tiempo en página** — objetivo > 90s
- **Posición media en Google** — tracking de las 5 keywords principales por producto

---

## 📚 Estudios PubMed citados (para referencia interna)

1. **Modena DAO et al. (2023).** *Photobiomodulation therapy with light-emitting diode in stimulating adipose tissue mitochondria.* Lasers in Medical Science. https://doi.org/10.1007/s10103-023-03906-y
2. **Costa JSR et al. (2024).** *Photobiomodulation Enhances the Effect of Strength Training on Insulin Resistance Regardless of Exercise Volume in Mice Fed a High-Fat Diet.* Journal of Biophotonics. https://doi.org/10.1002/jbio.202400274
3. **Trajano LASN et al. (2024).** *Does photobiomodulation alter mitochondrial dynamics?* Photochemistry and Photobiology. https://doi.org/10.1111/php.13963
4. **Tsai SR & Hamblin MR (2017).** *Biological effects and medical applications of infrared radiation.* Journal of Photochemistry and Photobiology B: Biology. https://doi.org/10.1016/j.jphotobiol.2017.04.014
