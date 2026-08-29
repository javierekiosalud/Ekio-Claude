---
name: analytics-funnel-audit
description: >
  Protocolo de auditoría del funnel de ecommerce EKIO triangulando GA4 + Shopify
  Analytics + Klaviyo + Meta Ads + Google Ads. Define los 8 eventos GA4 críticos
  (view_item_list → view_item → add_to_cart → view_cart → begin_checkout →
  add_shipping_info → add_payment_info → purchase) + 5 eventos custom EKIO
  (consultoria_lead, whatsapp_click, sharpei_select, calculator_complete,
  pdf_download), código de implementación, cálculo de fugas por etapa, lectura
  cruzada con Shopify como verdad absoluta y reporte de "ROAS real triangulado".
  Úsalo SIEMPRE para auditar el funnel, detectar fugas, validar tracking, calcular
  attribution real vs declarada por Meta/Google Ads, o cuando se pregunte "dónde
  estamos perdiendo conversiones".
---

# Analytics Funnel Audit — Protocolo EKIO

Este skill es el **playbook del `analytics-agent`** para auditar el funnel de ecommerce
y detectar dónde fuga el dinero.

> **Filosofía**: Shopify es la **verdad absoluta** de revenue. GA4 y Meta sobre/sub-atribuyen.
> Tu trabajo: triangular para entender la realidad.

---

## LOS 8 EVENTOS GA4 CRÍTICOS

Estos son OBLIGATORIOS en cualquier ecommerce. Si alguno falta o falla → ticket P0.

### 1. `view_item_list`
**Cuándo**: usuario ve una colección o página con listado de productos.

```javascript
gtag('event', 'view_item_list', {
  item_list_id: 'collection_ekio_light',
  item_list_name: 'Colección Ekio Light',
  items: [
    {
      item_id: 'ekio-light-deep-5',
      item_name: 'Ekio Light Deep 5',
      item_category: 'Paneles',
      price: 399.00,
      currency: 'EUR',
      index: 0
    },
    // ... resto de productos visibles
  ]
});
```

**Disparar desde**: `templates/collection.json` con Liquid + JS.

---

### 2. `view_item`
**Cuándo**: usuario abre una PDP.

```javascript
gtag('event', 'view_item', {
  currency: 'EUR',
  value: 399.00,
  items: [{
    item_id: 'ekio-light-deep-5',
    item_name: 'Ekio Light Deep 5',
    item_category: 'Paneles',
    item_variant: 'Default',
    price: 399.00,
    quantity: 1
  }]
});
```

**Disparar desde**: `sections/main-product.liquid` al cargar.

---

### 3. `add_to_cart`
**Cuándo**: click en "Añadir al carrito" (éxito).

```javascript
async function trackAddToCart(item) {
  gtag('event', 'add_to_cart', {
    currency: 'EUR',
    value: item.final_price / 100,  // Shopify devuelve cents
    items: [{
      item_id: item.product_id.toString(),
      item_name: item.product_title,
      item_variant: item.variant_title,
      price: item.final_price / 100,
      quantity: item.quantity
    }]
  });
}
```

**Disparar desde**: after success de `/cart/add.js` en el JS del carrito drawer.

---

### 4. `view_cart`
**Cuándo**: usuario abre el carrito drawer o navega a `/cart`.

```javascript
gtag('event', 'view_cart', {
  currency: 'EUR',
  value: cart.total_price / 100,
  items: cart.items.map(item => ({
    item_id: item.product_id.toString(),
    item_name: item.product_title,
    quantity: item.quantity,
    price: item.final_price / 100
  }))
});
```

---

### 5. `begin_checkout`
**Cuándo**: usuario hace click en "Finalizar compra" (entra al checkout Shopify).

> ⚠️ Shopify dispara nativamente algunos eventos en el checkout vía Customer Events.
> Verificar en `/admin/settings/customer_events` que está configurado correctamente.

---

### 6. `add_shipping_info`, 7. `add_payment_info`
**Cuándo**: usuario completa shipping / payment en el checkout.

Estos eventos solo se pueden disparar desde **Customer Events** de Shopify (Web Pixel API).
Configurar desde: `/admin/settings/customer_events` → "Add custom pixel" → código del Web Pixel.

---

### 8. `purchase`
**Cuándo**: compra completada (thank-you page).

```javascript
gtag('event', 'purchase', {
  transaction_id: '{{ order.order_number }}',
  value: {{ order.total_price | money_without_currency }},
  currency: 'EUR',
  tax: {{ order.tax_price | money_without_currency }},
  shipping: {{ order.shipping_price | money_without_currency }},
  items: [
    {% for line_item in order.line_items %}
    {
      item_id: '{{ line_item.product_id }}',
      item_name: '{{ line_item.title | escape }}',
      item_variant: '{{ line_item.variant_title | escape }}',
      price: {{ line_item.final_price | money_without_currency }},
      quantity: {{ line_item.quantity }}
    }{% unless forloop.last %},{% endunless %}
    {% endfor %}
  ]
});
```

**Disparar desde**: `checkout/thank_you.liquid` o Web Pixel personalizado.

---

## EVENTOS CUSTOM EKIO

### 1. `consultoria_lead`
Cuando alguien envía el form de consultoría.

```javascript
gtag('event', 'consultoria_lead', {
  consulta_tipo: 'consultoria_360',  // o 'fbm', 'medicion-emf'
  value: 297.00,
  currency: 'EUR'
});
```

### 2. `whatsapp_click`
Click en botón WhatsApp (atribución del canal ManyChat).

```javascript
gtag('event', 'whatsapp_click', {
  source_page: window.location.pathname,
  cta_text: 'Habla con un experto'
});
```

### 3. `sharpei_select`
Cuando el usuario elige opción de alquiler vs compra.

```javascript
gtag('event', 'sharpei_select', {
  product_id: 'ekio-light-deep-5',
  modalidad: 'alquiler-12-meses',  // o 'compra-directa'
  fee_mensual: 39
});
```

### 4. `calculator_complete`
Cuando usa la calculadora EMF (engagement deep).

```javascript
gtag('event', 'calculator_complete', {
  resultado_score: 7,  // ej. score de exposición EMF calculado
  recomendacion_producto: 'spirodisc'
});
```

### 5. `pdf_download`
Descarga de guías/ebooks.

```javascript
gtag('event', 'pdf_download', {
  pdf_name: 'guia-higiene-electromagnetica',
  source_page: window.location.pathname
});
```

---

## AUDITORÍA DE TRACKING — checklist

Pasar este checklist en una **sesión real** vía Claude in Chrome:

| # | Acción | Evento esperado | ✅/❌ |
|---|---|---|---|
| 1 | Abrir home | Page view (automático) | |
| 2 | Click en colección Ekio Light | `view_item_list` | |
| 3 | Click en producto Deep 5 | `view_item` | |
| 4 | Click "Añadir al carrito" | `add_to_cart` | |
| 5 | Abrir carrito drawer | `view_cart` | |
| 6 | Click "Finalizar compra" | `begin_checkout` | |
| 7 | Completar shipping en checkout | `add_shipping_info` | |
| 8 | Completar payment | `add_payment_info` | |
| 9 | Confirmar pedido | `purchase` con transaction_id | |
| 10 | Click WhatsApp en home | `whatsapp_click` | |

**Cómo verificar**: en DevTools → Network → filtrar por `collect` (GA4 endpoint) → ver el evento. O en GA4 → Configurar → DebugView (requiere `debug_mode: true` en gtag o GA Debugger extension).

---

## CÁLCULO DE FUGAS EN EL FUNNEL

Periodo de análisis: últimos 30 días.

### Datos a recoger

| Etapa | Métrica | Fuente |
|---|---|---|
| Visitas totales | Sesiones | GA4 |
| Vieron PDP | Usuarios que dispararon `view_item` | GA4 |
| Añadieron al carrito | Usuarios que dispararon `add_to_cart` | GA4 |
| Iniciaron checkout | `begin_checkout` | GA4 |
| Compraron | Pedidos reales | **Shopify** (no GA4) |

### Tasas de conversión por etapa

```
Visitas → view_item:        view_item users / sesiones
view_item → add_to_cart:    add_to_cart users / view_item users
add_to_cart → checkout:     begin_checkout / add_to_cart
checkout → purchase:        Shopify orders / begin_checkout
```

### Benchmarks EKIO

| Tasa | 🟢 Bueno | 🟠 Mejorable | 🔴 Malo |
|---|---|---|---|
| Visita → view_item | > 45% | 30-45% | < 30% |
| view_item → add_to_cart | > 8% | 4-8% | < 4% |
| add_to_cart → checkout | > 50% | 30-50% | < 30% |
| checkout → purchase | > 65% | 45-65% | < 45% |
| **End-to-end CR** | **> 4%** | 2-4% | < 2% |

### La peor caída → tu prioridad de fix

- Si fuga grande en `view_item → add_to_cart` → CRO de PDP (delegar al `shopify-agent`)
- Si fuga grande en `add_to_cart → checkout` → fricción en carrito (delegar al `shopify-agent`)
- Si fuga grande en `checkout → purchase` → fricción en checkout (theme-dev + shopify-agent)

---

## TRIANGULACIÓN — verdad real vs lo que dicen las plataformas

### Discrepancia GA4 vs Shopify

```
GA4 purchase events: 15
Shopify orders:      18
Gap: 3 pedidos (16.7%) no trackados por GA4
```

**Causas típicas**:
- Adblockers (afecta 5-15% en España)
- Consent mode v2 — usuario rechaza cookies analytics
- Evento `purchase` no dispara (revisar Web Pixel / thank_you.liquid)
- Pedidos manuales (POS, draft orders)

**Aceptable**: gap 10-20%. Si > 30% → auditar tracking.

### Discrepancia Meta vs Shopify

```
Meta Ads dashboard: 25 conversiones atribuidas
Shopify orders con UTM Meta o referer Meta: 14
Gap: Meta over-attributes en 79%
```

**Causa**: Meta atribuye **view-through 7 días** + **click-through 1 día** por defecto.

**Cálculo "Meta over-attribution ratio"** mensual:
```
ratio = Meta declared / Shopify real
Ejemplo: 25/14 = 1.78x
```

Cuando un agente diga "ROAS Meta = 4.2x" → ROAS real = 4.2 / 1.78 = 2.36x.

### ROAS Triangulado Real EKIO

```
ROAS Meta declarado:       (revenue declarado Meta) / (spend Meta)
ROAS Shopify atribuido:    (revenue Shopify con UTM source=meta) / (spend Meta)
ROAS Real (triangulado):   min(Meta declarado, Shopify atribuido × 1.2)
```

> El 1.2 es buffer para últimos clicks que no quedan trackados.

---

## REPORTE DE FUNNEL — formato semanal

```markdown
# Funnel Report EKIO — Semana del XX/XX/2026

## Cifras semana

| Etapa | Usuarios | Tasa vs prev | Estado |
|---|---|---|---|
| Sesiones | 1,250 | +5% | 🟢 |
| view_item | 480 (38%) | -2% | 🟠 |
| add_to_cart | 38 (8%) | flat | 🟢 |
| begin_checkout | 19 (50%) | -5% | 🟢 |
| purchase Shopify | 13 (68%) | +10% | 🟢 |

End-to-end CR: 1.04% 🔴 (objetivo 4%)

## Fuga principal
Visita → view_item: 38% (debería ser > 45%)
Hipótesis: 62% de visitantes no llega a una PDP.
Acciones: Auditar home + colecciones (CTA débil, navegación confusa).
→ Delegar al `shopify-agent` módulo 1 (auditoría).

## Triangulación Meta
Meta declared revenue: 4,200€
Shopify revenue UTM=meta: 1,800€
Over-attribution ratio: 2.33x
ROAS real (triangulado): 1.9x (Meta dice 4.4x)
→ Replantear creatividades, audiencias actuales no convierten.

## Top hallazgos
1. ...
2. ...

## Próximos pasos
- [ ] Auditoría CRO home → @shopify-agent
- [ ] Re-test eventos add_shipping_info → posible falla
- [ ] Comparar UTMs Klaviyo en GA4 vs reports Klaviyo
```

---

## ANTI-PATRONES — NUNCA hacer

1. ❌ Reportar revenue de GA4 como verdad → siempre usar Shopify
2. ❌ Creer el ROAS declarado por Meta sin triangular
3. ❌ Comparar CR de "view_item users" vs "purchases" sin desambiguar usuarios vs sesiones
4. ❌ Ignorar el gap GA4-Shopify "porque siempre hay desajuste" → audita si > 20%
5. ❌ Auditar funnel sin segmentar (mobile vs desktop, fuente, dispositivo) → puede ocultar el verdadero problema
6. ❌ Reportar fugas sin proponer agente al que delegar el fix
