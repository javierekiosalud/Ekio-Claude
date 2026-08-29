---
name: shopify-theme-architecture
description: >
  Patrones de arquitectura de tema Shopify para EKIO. Cómo estructurar Liquid,
  sections + blocks con schema bien diseñado, JSON templates, metafields
  dinámicos en el front (PDP, colecciones, páginas), Theme App Extensions,
  refactorización de secciones largas en bloques reusables, patrones de carrito
  AJAX, integración con Shopify Markets multidioma, y convenciones EKIO de
  naming/estructura. Úsalo SIEMPRE que haya que crear una sección nueva,
  refactorizar Liquid existente, exponer metafields en el front, diseñar un
  template JSON personalizado, o decidir si una funcionalidad va como sección,
  block o snippet.
---

# Shopify Theme Architecture — Patrones EKIO

Este skill define **cómo se estructura el código del tema Shopify** de EKIO. Es la base sobre
la que el `shopify-theme-dev-agent` toma decisiones de arquitectura.

> **Principio guía**: el tema debe ser **editable por Javier desde el admin de Shopify** sin
> tocar código en el 90% de los cambios. Si Javier necesita un developer para cambiar el copy
> de un banner, hemos diseñado mal el schema.

---

## DECISIÓN 1: ¿Section, Block o Snippet?

| Caso | Usar | Por qué |
|---|---|---|
| Elemento aparece en una sola página (PDP, home) | **Section** | Configurable desde editor |
| Elemento se repite N veces dentro de una section | **Block** | Editor permite añadir/quitar/reordenar |
| Código reutilizable sin UI (icon set, helpers) | **Snippet** | Solo se llama desde otros .liquid |
| Funcionalidad transversal (header, footer) | **Section group** | Online Store 2.0 |

**Ejemplo real EKIO**:
- "Banner de testimonios" → Section
- Cada testimonio individual → Block dentro de esa Section
- SVG del logo SPIRO → Snippet

---

## ESTRUCTURA DE SECTIONS EKIO

### Esqueleto base de una section

```liquid
{%- comment -%}
  Section: <nombre-descriptivo>
  Uso: <dónde se aplica>
  Última modificación: <fecha>
{%- endcomment -%}

{%- liquid
  assign heading = section.settings.heading | default: 'Título por defecto'
  assign bg_color = section.settings.bg_color | default: '#ffffff'
  assign padding_top = section.settings.padding_top | default: 60
  assign padding_bottom = section.settings.padding_bottom | default: 60
-%}

<section
  class="ekio-section ekio-section--{{ section.id }}"
  style="background-color: {{ bg_color }}; padding-top: {{ padding_top }}px; padding-bottom: {{ padding_bottom }}px;"
  aria-label="{{ heading | escape }}"
>
  <div class="ekio-section__container">
    {%- if heading != blank -%}
      <h2 class="ekio-section__heading">{{ heading }}</h2>
    {%- endif -%}

    {%- if section.blocks.size > 0 -%}
      <div class="ekio-section__blocks">
        {%- for block in section.blocks -%}
          {%- case block.type -%}
            {%- when 'testimonial' -%}
              {%- render 'block-testimonial', block: block -%}
            {%- when 'feature' -%}
              {%- render 'block-feature', block: block -%}
          {%- endcase -%}
        {%- endfor -%}
      </div>
    {%- endif -%}
  </div>
</section>

{% schema %}
{
  "name": "EKIO — <nombre>",
  "tag": "section",
  "class": "ekio-section",
  "settings": [
    {
      "type": "header",
      "content": "Contenido"
    },
    {
      "type": "text",
      "id": "heading",
      "label": "Título",
      "default": "Título de la sección",
      "info": "Aparece como <h2>. Déjalo vacío para ocultar."
    },
    {
      "type": "header",
      "content": "Estilo"
    },
    {
      "type": "color",
      "id": "bg_color",
      "label": "Color de fondo",
      "default": "#ffffff"
    },
    {
      "type": "range",
      "id": "padding_top",
      "label": "Padding superior",
      "min": 0,
      "max": 120,
      "step": 10,
      "unit": "px",
      "default": 60
    },
    {
      "type": "range",
      "id": "padding_bottom",
      "label": "Padding inferior",
      "min": 0,
      "max": 120,
      "step": 10,
      "unit": "px",
      "default": 60
    }
  ],
  "blocks": [
    {
      "type": "testimonial",
      "name": "Testimonio",
      "limit": 12,
      "settings": [
        { "type": "text", "id": "author", "label": "Nombre" },
        { "type": "textarea", "id": "quote", "label": "Testimonio" },
        { "type": "image_picker", "id": "avatar", "label": "Avatar" }
      ]
    }
  ],
  "presets": [
    {
      "name": "EKIO — <nombre>",
      "category": "EKIO"
    }
  ]
}
{% endschema %}
```

### Convenciones EKIO de schema

| Regla | Por qué |
|---|---|
| Prefijo "EKIO — " en `name` y `presets` | Aparecen agrupados en el editor |
| `category: "EKIO"` en presets | Crea una categoría custom |
| `header` settings para agrupar visualmente | UX clara para Javier |
| `info` en settings no obvios | Explicación in-context |
| `default` siempre con valor sensato | Funciona out-of-the-box |
| `class: "ekio-section"` | Permite estilos globales |
| `tag: "section"` | HTML semántico |
| `limit` en blocks repetibles | Evitar abusos |

---

## METAFIELDS DINÁMICOS EN EL FRONT

EKIO debe usar metafields para datos que NO son texto libre sino estructurados.

### Casos EKIO típicos

| Producto | Metafield | Type | Uso |
|---|---|---|---|
| Ekio Light Deep 5 | `ekio.irradiance` | number_integer | "Irradiancia: {value} mW/cm²" |
| Ekio Light Deep 5 | `ekio.wavelengths` | list.text | Lista de longitudes de onda |
| Ekio Light Deep 5 | `ekio.session_minutes` | number_integer | Duración recomendada de sesión |
| Ekio Light * | `ekio.iec_certificate` | file_reference | PDF de la certificación IEC 62471 |
| SPIRO * | `ekio.tech_type` | single_line_text | "SPIRO Card", "SPIRO Disc", etc. |
| Todos | `ekio.faq` | json | Array de {question, answer} para FAQ schema |
| Todos | `ekio.scientific_studies` | list.url | URLs a estudios PubMed |
| Todos | `ekio.alquiler_disponible` | boolean | Mostrar/ocultar widget Sharpei |

### Cómo exponer metafields en PDP

```liquid
{%- if product.metafields.ekio.irradiance.value -%}
  <div class="product-spec">
    <span class="product-spec__label">Irradiancia</span>
    <span class="product-spec__value">{{ product.metafields.ekio.irradiance.value }} mW/cm²</span>
  </div>
{%- endif -%}

{%- if product.metafields.ekio.wavelengths.value.size > 0 -%}
  <ul class="product-wavelengths">
    {%- for wl in product.metafields.ekio.wavelengths.value -%}
      <li>{{ wl }}</li>
    {%- endfor -%}
  </ul>
{%- endif -%}

{%- if product.metafields.ekio.faq.value -%}
  {%- assign faq = product.metafields.ekio.faq.value -%}
  <div class="product-faq" itemscope itemtype="https://schema.org/FAQPage">
    {%- for item in faq -%}
      <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
        <summary itemprop="name">{{ item.question }}</summary>
        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
          <p itemprop="text">{{ item.answer }}</p>
        </div>
      </details>
    {%- endfor -%}
  </div>
{%- endif -%}
```

> El `seo-agent` se encarga del JSON-LD schema; tú expones los datos en el HTML semántico
> para que sea crawlable + accesible.

---

## JSON TEMPLATES — cuándo y cómo

Online Store 2.0 permite tener **múltiples templates JSON** por tipo de página.

### Casos de uso EKIO

| Template | Uso |
|---|---|
| `product.json` (default) | PDP estándar |
| `product.ekio-light.json` | PDP específica para paneles (con calculadora, widget Sharpei) |
| `product.spiro.json` | PDP específica para productos SPIRO |
| `product.consultoria.json` | PDP de servicios (sin add to cart típico, con form) |
| `page.landing.json` | Páginas de landing con secciones modulares |

### Asignar template a un producto

Desde admin: Producto → Theme template → Seleccionar el template específico.

---

## CARRITO Y CHECKOUT — patrones EKIO

### Carrito AJAX (drawer)

EKIO debe tener carrito drawer (no redirect a /cart). Patrón con `fetch`:

```javascript
async function addToCart(variantId, quantity = 1, properties = {}) {
  const formData = {
    items: [{
      id: variantId,
      quantity: quantity,
      properties: properties  // ej. {Sharpei: 'alquiler-12-meses'}
    }]
  };

  try {
    const response = await fetch('/cart/add.js', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });

    if (!response.ok) throw new Error('Add to cart failed');

    const item = await response.json();

    // Disparar evento GA4
    if (window.gtag) {
      gtag('event', 'add_to_cart', {
        currency: 'EUR',
        value: item.final_price / 100,
        items: [{ item_id: item.product_id, item_name: item.product_title }]
      });
    }

    // Actualizar drawer
    await refreshCartDrawer();
    openCartDrawer();
  } catch (error) {
    console.error('Cart error:', error);
  }
}
```

### Properties para alquiler Sharpei

Cuando el cliente elige alquiler, marcar la línea con `properties`:

```liquid
<form action="/cart/add" method="post">
  <input type="hidden" name="id" value="{{ variant.id }}">
  <input type="hidden" name="properties[modalidad]" value="alquiler-12-meses">
  <input type="hidden" name="properties[fee_mensual]" value="39">
  <button type="submit">Empezar alquiler</button>
</form>
```

---

## SHOPIFY MARKETS (multidioma / multidivisa)

Si EKIO expande a Francia, Alemania, etc. → usar Markets, no apps de terceros.

```liquid
{%- comment -%} Cambiar moneda y idioma según mercado {%- endcomment -%}
{{ product.price | money }}  {# Renderiza en la divisa del market activo #}

{%- comment -%} Hreflang automático {%- endcomment -%}
{% render 'hreflang-tags' %}

{%- comment -%} Locale picker {%- endcomment -%}
{%- form 'localization' -%}
  <select name="locale_code">
    {%- for locale in localization.available_languages -%}
      <option value="{{ locale.iso_code }}" {% if locale.iso_code == localization.language.iso_code %}selected{% endif %}>
        {{ locale.endonym_name }}
      </option>
    {%- endfor -%}
  </select>
{%- endform -%}
```

---

## CONVENCIONES DE NAMING EKIO

| Tipo | Patrón | Ejemplo |
|---|---|---|
| Section name | `ekio-<nombre-kebab>.liquid` | `ekio-hero-pdp.liquid` |
| Snippet | `<accion>-<elemento>.liquid` | `render-product-badges.liquid` |
| Block snippet | `block-<tipo>.liquid` | `block-testimonial.liquid` |
| CSS class | `.ekio-<componente>__<elemento>--<modificador>` (BEM) | `.ekio-card__title--large` |
| Asset JS | `ekio-<feature>.js` | `ekio-cart-drawer.js` |
| Metafield namespace | `ekio.*` | `ekio.irradiance` |

---

## REFACTORIZACIÓN DE SECTIONS LARGAS

**Síntoma**: una section tiene > 300 líneas, schema con > 20 settings, difícil de mantener.

**Refactor pattern**:

1. Identificar elementos repetibles → moverlos a `blocks`
2. Identificar HTML reusable → extraerlo a snippets (`{% render 'block-x' %}`)
3. Agrupar settings con `type: "header"` en el schema
4. Mover JS embebido a `assets/section-name.js` con `{{ 'section-name.js' | asset_url | script_tag }}`
5. Mover CSS embebido a `assets/section-name.css`

**Antes** (mal):
```liquid
<section>
  {% for item in section.settings.items %}  {# items hardcoded en settings #}
    <div>
      <img src="{{ item.image }}">
      <h3>{{ item.title }}</h3>
    </div>
  {% endfor %}
</section>
```

**Después** (bien):
```liquid
<section>
  {% for block in section.blocks %}
    {% render 'block-feature', block: block %}
  {% endfor %}
</section>
```

---

## CHECKLIST DE QA AL CREAR/MODIFICAR UNA SECTION

- [ ] Schema tiene `name` con prefijo "EKIO — "
- [ ] Schema tiene `presets` con `category: "EKIO"`
- [ ] Cada setting tiene `default` sensato
- [ ] Settings no obvios tienen `info`
- [ ] Imágenes tienen `width`/`height` y `loading="lazy"` (excepto hero)
- [ ] Schema válido (JSON parseable)
- [ ] Funciona en mobile, tablet, desktop
- [ ] Sin errores en consola
- [ ] No rompe el editor de Shopify
- [ ] Si tiene JS: defer/async, no bloquea render
- [ ] Si tiene blocks: hay `limit` razonable
- [ ] Accesibilidad: heading hierarchy correcta, alt texts, aria-labels
- [ ] Performance: probada con Lighthouse (no degrada CWV)

---

## ANTI-PATRONES — NUNCA hacer

1. ❌ Hard-codear copy en Liquid sin pasar por schema
2. ❌ Crear section con > 30 settings → refactor en blocks
3. ❌ Hard-codear URLs de imágenes (`<img src="/assets/foo.jpg">`) → usar `image_picker` setting o metafield
4. ❌ Editar `theme.liquid` para añadir scripts de apps → usar Theme App Extensions
5. ❌ Duplicar HTML en 3 secciones → extraer snippet
6. ❌ Hacer `{% include %}` (deprecado) → usar `{% render %}`
7. ❌ Lógica de negocio compleja en Liquid → muévela a JS
8. ❌ Crear sections sin `preset` → no aparecen en el editor
