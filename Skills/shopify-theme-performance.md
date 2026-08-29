---
name: shopify-theme-performance
description: >
  Playbook de optimización de performance del tema Shopify para EKIO. Recetas
  concretas para reducir LCP, INP, CLS, TTFB y FCP a nivel código del tema:
  preload de hero image, fetchpriority, lazy loading, srcset+sizes, critical CSS,
  defer/async de scripts de terceros (Klaviyo, ManyChat, Reviews), eliminación
  de render-blocking, optimización de fuentes (font-display swap, subset, preload),
  reserva de espacio para evitar CLS, code splitting. Úsalo SIEMPRE que haya que
  ejecutar fixes técnicos de Core Web Vitals en el tema, optimizar imágenes,
  reducir JS de terceros, mejorar puntuación Lighthouse, o cuando se hable de
  "la tienda va lenta" a nivel código (no a nivel medición — para medir, usar
  performance-audit-protocol).
---

# Shopify Theme Performance — Recetas de optimización

Este skill es el **playbook práctico** para ejecutar fixes de performance en el tema Shopify
de EKIO. Cada receta tiene: causa, código Liquid/HTML/CSS listo para pegar, e impacto esperado.

> **Regla de oro**: medir antes (con `performance-audit-protocol`), ejecutar fix, medir después.
> Si el delta es < 100ms en LCP o < 30ms en INP, el fix no merece la pena mantenerlo.

---

## ÍNDICE DE RECETAS

| # | Receta | Métrica que mejora | Impacto típico |
|---|---|---|---|
| 1 | Preload + fetchpriority hero image | LCP | -400 a -1200ms |
| 2 | Srcset responsive + sizes correctos | LCP mobile | -300 a -800ms |
| 3 | WebP con fallback automático Shopify | LCP, peso total | -30% peso |
| 4 | Lazy loading agresivo below-the-fold | FCP, TBT | -200 a -500ms |
| 5 | Defer scripts de terceros (Klaviyo, ManyChat, Reviews) | INP, TBT | -100 a -400ms |
| 6 | Async non-critical CSS | FCP, LCP | -200 a -600ms |
| 7 | Critical CSS inline | FCP | -150 a -400ms |
| 8 | Preload fuente crítica + font-display swap | LCP, CLS | -100 a -300ms |
| 9 | Reservar espacio con aspect-ratio | CLS | -0.05 a -0.20 |
| 10 | Eliminar apps con impacto crítico | INP, TBT | Variable |
| 11 | Code splitting con módulos ES6 | INP | -50 a -200ms |
| 12 | Theme App Extensions vs script injection | INP, TBT | Variable |

---

## RECETA 1: Preload + fetchpriority en hero image

**Causa típica**: la imagen hero de PDP/home es el LCP element y carga tarde porque está dentro de `<img>` normal sin priorización.

**Fix en Liquid** (en `<head>` antes que cualquier CSS):

```liquid
{% if template contains 'product' %}
  {% assign hero = product.featured_image %}
  <link rel="preload"
        as="image"
        href="{{ hero | image_url: width: 1200, format: 'webp' }}"
        imagesrcset="{{ hero | image_url: width: 600, format: 'webp' }} 600w,
                     {{ hero | image_url: width: 1200, format: 'webp' }} 1200w,
                     {{ hero | image_url: width: 1800, format: 'webp' }} 1800w"
        imagesizes="(max-width: 768px) 100vw, 50vw"
        fetchpriority="high">
{% endif %}
```

**Fix en el `<img>` correspondiente** (el del hero, NO en imágenes below-the-fold):

```liquid
<img src="{{ product.featured_image | image_url: width: 1200, format: 'webp' }}"
     srcset="..."
     sizes="(max-width: 768px) 100vw, 50vw"
     width="1200" height="1200"
     fetchpriority="high"
     loading="eager"
     decoding="async"
     alt="{{ product.featured_image.alt | escape }}">
```

**Impacto típico**: LCP mobile -800ms en PDP.

**Trampa**: NUNCA poner `fetchpriority="high"` en más de 1 imagen por página, pierde efecto.

---

## RECETA 2: Srcset responsive correcto

**Causa típica**: la misma imagen 1800px se sirve a mobile, gasta ancho de banda y retrasa LCP.

**Fix**:

```liquid
{%- assign img = section.settings.image -%}
<img src="{{ img | image_url: width: 800 }}"
     srcset="{{ img | image_url: width: 400 }} 400w,
             {{ img | image_url: width: 600 }} 600w,
             {{ img | image_url: width: 800 }} 800w,
             {{ img | image_url: width: 1200 }} 1200w,
             {{ img | image_url: width: 1800 }} 1800w"
     sizes="(max-width: 480px) 100vw,
            (max-width: 768px) 90vw,
            (max-width: 1200px) 50vw,
            800px"
     width="{{ img.width }}"
     height="{{ img.height }}"
     alt="{{ img.alt | escape }}"
     loading="lazy"
     decoding="async">
```

**Regla**: el `width` × `height` debe ser real para que el navegador reserve espacio → evita CLS.

---

## RECETA 3: WebP/AVIF nativo Shopify

Shopify sirve WebP automáticamente cuando usas el filtro `image_url` con parámetro `format`:

```liquid
{{ image | image_url: width: 1200, format: 'webp' }}
{{ image | image_url: width: 1200, format: 'avif' }}  {# Más nuevo, mejor compresión #}
```

**Mejor patrón** (picture element con fallback):

```liquid
<picture>
  <source type="image/avif"
          srcset="{{ image | image_url: width: 800, format: 'avif' }} 800w,
                  {{ image | image_url: width: 1200, format: 'avif' }} 1200w"
          sizes="(max-width: 768px) 100vw, 50vw">
  <source type="image/webp"
          srcset="{{ image | image_url: width: 800, format: 'webp' }} 800w,
                  {{ image | image_url: width: 1200, format: 'webp' }} 1200w"
          sizes="(max-width: 768px) 100vw, 50vw">
  <img src="{{ image | image_url: width: 800 }}"
       width="{{ image.width }}" height="{{ image.height }}"
       alt="{{ image.alt | escape }}"
       loading="lazy" decoding="async">
</picture>
```

---

## RECETA 4: Lazy loading correcto

**Regla**: `loading="lazy"` en TODO lo que no sea hero. `loading="eager"` solo en hero.

```liquid
{%- for block in section.blocks -%}
  {%- if forloop.first -%}
    <img loading="eager" fetchpriority="high" ...>
  {%- else -%}
    <img loading="lazy" decoding="async" ...>
  {%- endif -%}
{%- endfor -%}
```

**Para iframes** (YouTube, Vimeo, mapas):
```html
<iframe loading="lazy" ...></iframe>
```

**Truco YouTube facade** (300x más rápido que iframe nativo):
```html
<lite-youtube videoid="VIDEO_ID" style="background-image: url('https://i.ytimg.com/vi/VIDEO_ID/maxresdefault.jpg');"></lite-youtube>
<script type="module" src="https://cdn.jsdelivr.net/npm/lite-youtube-embed@0.3.2/src/lite-yt-embed.js" defer></script>
```

---

## RECETA 5: Defer scripts de terceros

**Causa típica**: Klaviyo, ManyChat, chat widget, reviews app cargan en `<head>` síncronos y bloquean el render.

**Fix global** (en `theme.liquid`, dentro de `<head>` final):

```liquid
{%- comment -%} Scripts de terceros — todos defer/async {%- endcomment -%}

{# Klaviyo — onsite tracking #}
<script defer src="https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=YOUR_ID"></script>

{# Microsoft Clarity #}
<script defer>
  (function(c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
  })(window, document, "clarity", "script", "CLARITY_ID");
</script>

{# Meta Pixel — usar fbq con setTimeout para no bloquear #}
<script>
  setTimeout(function() {
    !function(f,b,e,v,n,t,s){...}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', 'PIXEL_ID');
    fbq('track', 'PageView');
  }, 1500);
</script>
```

**Trampa**: GA4 / gtag SÍ debe cargar pronto (pero con `async`) para tracking correcto:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
```

---

## RECETA 6: CSS no crítico async

Cargar CSS no crítico sin bloquear el render:

```liquid
<link rel="preload"
      href="{{ 'non-critical.css' | asset_url }}"
      as="style"
      onload="this.onload=null;this.rel='stylesheet'">
<noscript>
  <link rel="stylesheet" href="{{ 'non-critical.css' | asset_url }}">
</noscript>
```

---

## RECETA 7: Critical CSS inline

Para el CSS above-the-fold (hero, header, primer fold):

```liquid
<style>
  {%- comment -%} Critical CSS inline — solo above-the-fold {%- endcomment -%}
  header { ... }
  .hero { ... }
  .product-hero { ... }
</style>
```

**Cómo generar**: usar `criticalcss.com` o `penthouse` (CLI). Regenerar cuando cambies el theme.

---

## RECETA 8: Fuentes optimizadas

```liquid
{# Preload fuente crítica (la del h1/hero) #}
<link rel="preload"
      href="{{ 'fonts/inter-bold.woff2' | asset_url }}"
      as="font"
      type="font/woff2"
      crossorigin>

<style>
  @font-face {
    font-family: 'Inter';
    src: url('{{ 'fonts/inter-bold.woff2' | asset_url }}') format('woff2');
    font-weight: 700;
    font-display: swap;  /* CRÍTICO — evita FOIT */
    size-adjust: 100%;
  }
</style>
```

**Regla**: subset las fuentes (solo latin si no necesitas cirílico/griego) → reduces 60-70% el peso.

---

## RECETA 9: Reservar espacio para evitar CLS

**Causa típica**: banner de cookies, popup de newsletter, badges, embeds que aparecen y empujan el contenido.

**Fix con aspect-ratio**:

```css
.hero-image-container {
  aspect-ratio: 16 / 9;
  width: 100%;
}

.video-embed {
  aspect-ratio: 16 / 9;
}

.product-card-image {
  aspect-ratio: 1 / 1;
}
```

**Fix para banner cookies que aparece**:

```css
.cookie-banner {
  min-height: 80px;  /* Reservar siempre, aunque empiece oculto */
}
```

**Para popups que no deben afectar CLS**: usar `position: fixed`, no flow normal.

---

## RECETA 10: Auditoría de apps con impacto crítico

**Apps que típicamente rompen performance en Shopify**:

| App / Tipo | Síntoma | Acción |
|---|---|---|
| Sliders (Splide, Swiper desde app) | TBT +300ms | Reemplazar con CSS-only carousel |
| Reviews (Loox, Judge.me) | INP +200ms | Lazy load del widget |
| Chat widgets (Tidio, Crisp) | LCP +500ms | Cargar con `setTimeout(2000)` |
| Currency switchers | TBT +150ms | Usar Shopify Markets nativo |
| Wishlist apps (Smart Wishlist) | TBT +100ms | Construir con localStorage + Liquid |
| Recently viewed | TBT +80ms | Construir con sessionStorage |
| Upsell popups | CLS +0.15 | Posicionar fixed |
| Multi-currency / multi-language apps | TBT +200ms | Migrar a Markets |

**Checklist auditoría apps**:
1. Listar apps activas (`/admin/apps`)
2. Por cada app: medir CWV antes y después de desactivarla
3. Si delta > 200ms en LCP o INP → candidato a eliminar
4. Buscar alternativa nativa Liquid o app block (no global injection)

---

## RECETA 11: Code splitting con módulos ES6

```html
<script type="module">
  // Solo carga si el usuario hace scroll
  let loaded = false;
  window.addEventListener('scroll', async () => {
    if (loaded || window.scrollY < 400) return;
    loaded = true;
    const { initProductCarousel } = await import('{{ "carousel.js" | asset_url }}');
    initProductCarousel();
  }, { passive: true, once: false });
</script>
```

---

## RECETA 12: Theme App Extensions

Si una app que necesitas (ej. reviews) ofrece **Theme App Extension** o **App Block**:
- ✅ Úsalo: solo carga JS en las páginas donde está colocado
- ❌ No uses la "global injection" tradicional

En el editor de Shopify: Sections → App blocks → Añadir el bloque solo donde haga falta.

---

## CHECKLIST POST-DEPLOY (siempre)

Después de cualquier cambio de performance:

- [ ] Lighthouse mobile en home + PDP top → score ≥ 75
- [ ] Lighthouse desktop → score ≥ 90
- [ ] LCP mobile < 2.5s en CrUX en 7-14 días
- [ ] INP mobile < 200ms
- [ ] CLS < 0.1
- [ ] Sin errores en consola
- [ ] Visual QA en mobile real (no solo DevTools)
- [ ] Tracking sigue funcionando (GA4, Meta Pixel, Klaviyo)
- [ ] Carrito y checkout completables

---

## ANTI-PATRONES — NUNCA hacer

1. ❌ Editar el theme publicado directamente → siempre duplicar
2. ❌ Quitar `loading="lazy"` para acelerar la carga (rompe LCP)
3. ❌ Eliminar `width`/`height` de `<img>` (rompe CLS)
4. ❌ Usar `display: none` para "ocultar" cosas → el navegador igual descarga
5. ❌ Cargar 5 fuentes diferentes "por estética" → 1-2 max
6. ❌ Inline imágenes base64 grandes (> 5KB) en CSS
7. ❌ Usar jQuery para algo que vanilla JS resuelve en 5 líneas
8. ❌ Hacer requests AJAX en `DOMContentLoaded` que se pueden hacer al hover/click
