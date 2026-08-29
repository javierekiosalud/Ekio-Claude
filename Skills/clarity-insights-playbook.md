---
name: clarity-insights-playbook
description: >
  Playbook operativo para extraer insights de Microsoft Clarity (heatmaps,
  session recordings, Smart Events) y traducirlos en tickets de CRO o de tema.
  Define la rutina semanal de revisión, los 7 patrones críticos a buscar
  (rage clicks, dead clicks, excessive scrolling, quick backs, JS errors,
  scroll depth bajo, abandono por zona), cómo segmentar mobile vs desktop,
  cómo correlacionar con CWV y cómo formatear los hallazgos para que el
  shopify-agent (CRO) o shopify-theme-dev-agent (técnico) ejecuten el fix.
  Úsalo SIEMPRE que se mencione Clarity, heatmaps, session recordings,
  comportamiento de usuario, frustración, abandono, "dónde la gente se queda
  atascada" o "qué hace la gente en la tienda".
---

# Clarity Insights Playbook — EKIO

EKIO ya tiene Microsoft Clarity instalado. Este skill define **cómo explotarlo**
sistemáticamente cada semana para convertir comportamiento de usuario en mejoras.

> **Clarity es gratis, ilimitado, RGPD-compliant y no afecta CWV**.
> Es la herramienta más infravalorada del stack EKIO. Úsala religiosamente.

---

## ACCESO Y CONFIGURACIÓN

- **URL**: https://clarity.microsoft.com
- **Project**: EKIO Electrosmog España
- **Datos retenidos**: últimos 30 días por defecto
- **Smart Events activos**: validar que están configurados (rage click, dead click, quick back, excessive scrolling, JS error)

---

## LOS 7 PATRONES CRÍTICOS A BUSCAR CADA SEMANA

### 1. Rage Clicks
**Qué es**: usuario hace múltiples clicks rápidos en el mismo elemento → frustración por no respuesta.

**Dónde buscar**:
- Dashboard → Insights → Rage clicks
- Filtrar por página (home, PDP top, checkout)

**Causas típicas en Shopify**:
- Botón "Añadir al carrito" que tarda > 1s en responder
- Imagen que parece clicable pero no lo es
- Botón con `:hover` confuso (parece deshabilitado)
- Form de newsletter con CAPTCHA invisible que falla

**Cómo traducir en ticket**:
```
URL: /products/ekio-light-deep-5
Elemento: button.add-to-cart
Issue: 12% de sesiones tienen rage clicks aquí
Hipótesis: el botón no da feedback visual al hacer click (loading state ausente)
Fix recomendado: añadir spinner inline + disabled state mientras se procesa
→ Delegar a: @shopify-theme-dev-agent
```

---

### 2. Dead Clicks
**Qué es**: usuario hace click pero no pasa nada porque el elemento no es interactivo.

**Causas típicas**:
- Imagen de producto que el usuario cree que abre lightbox/zoom
- Badge "Garantía 30 días" que parece link pero no lo es
- Icono de "info" sin tooltip
- Texto subrayado que no es link

**Cómo traducir en ticket**:
```
URL: /products/spirodisc
Elemento: img.product-badge--scientific
Issue: 8% de sesiones click en este badge
Hipótesis: el usuario espera ver más info al hacer click
Fix recomendado: convertir badge en link a sección "Ciencia detrás" o tooltip on click
→ Delegar a: @shopify-agent (CRO) + @shopify-theme-dev-agent (implementación)
```

---

### 3. Excessive Scrolling
**Qué es**: usuario scrollea mucho (subir-bajar) → busca algo que no encuentra.

**Causas típicas**:
- CTA principal "Comprar" no está visible above-the-fold en mobile
- Precio/AOV está enterrado → usuario sube y baja para encontrarlo
- FAQ en lugar inesperado de la PDP

**Cómo traducir**:
```
URL: /products/ekio-light-deep-5
Issue: 18% de sesiones tienen excessive scrolling
Heatmap muestra: alta atención zona precio + alta atención zona "tecnología"
Hipótesis: usuario quiere comparar precio vs valor pero los datos están separados
Fix recomendado: añadir bloque sticky de precio + CTA en mobile, o mostrar value props inmediatamente al precio
→ Delegar a: @shopify-agent (CRO)
```

---

### 4. Quick Backs
**Qué es**: usuario entra a una página y vuelve atrás en < 5 segundos → bounce real.

**Causas típicas**:
- Página lenta (LCP alto) → cruzar con `performance-audit-protocol`
- Headline débil (no engancha)
- Imagen hero genérica
- Mobile design roto

**Acción cross-skill**:
1. Filtrar quick backs en Clarity por URL
2. Cruzar con CWV de esa URL (CrUX o PageSpeed Insights)
3. Si LCP > 3s → fix técnico (delegar a `web-performance-agent`)
4. Si LCP < 2.5s → fix CRO (headline, hero, copy → delegar a `shopify-agent`)

---

### 5. JS Errors
**Qué es**: errores JavaScript en consola que afectan a usuarios reales.

**Cómo buscar**:
- Dashboard → Insights → JavaScript errors
- Filtrar por % de sesiones afectadas (> 1% es crítico)

**Acción**:
1. Identificar el error (mensaje + stack trace)
2. Ver session recording de una sesión afectada → entender el contexto
3. Si afecta funcionalidad crítica (carrito, checkout) → ticket P0 al `shopify-theme-dev-agent`

---

### 6. Scroll Depth bajo
**Qué es**: % de usuarios que NO llega a cierto punto de la página.

**Métrica clave**: en PDP, qué % llega al CTA "Comprar" final.

```
PDP Ekio Light Deep 5:
  100% empieza arriba
  72% llega al precio
  48% llega a la sección "Ciencia"
  28% llega al CTA inferior
  12% llega al FAQ

→ Si menos del 50% llega al CTA inferior, el CTA debería estar también arriba
   o como sticky en mobile.
```

**Acción**:
1. Identificar la zona de la página donde scroll cae > 30%
2. Esa zona tiene un problema (contenido aburrido, copy débil, gap visual)
3. Ticket al `shopify-agent` para rediseño de esa zona

---

### 7. Abandono por zona
**Qué es**: en qué punto del scroll los usuarios "abandonan" (cierran o vuelven atrás).

**Útil para**:
- Detectar secciones que matan la conversión
- Identificar "fold de abandono" — ej. después de ver el precio, X% se va

**Acción**:
1. Si abandono justo después del precio → trabajar **value stack** (delegar al `shopify-agent`)
2. Si abandono después de FAQ → faltan objeciones o respuestas son flojas
3. Si abandono en sección de garantías → revisar copy de garantía

---

## RUTINA SEMANAL DE CLARITY (cada lunes, 30 min)

```markdown
# Clarity Weekly Review — Semana del XX/XX/2026

## 1. Top issues automáticos (Clarity Insights)
- Rage clicks: top 3 páginas + elementos
- Dead clicks: top 3 páginas + elementos
- JS errors: lista de errores con > 1% impacto
- Quick backs: top 3 páginas con peor tasa

## 2. Heatmaps a revisar (5 URLs P0)
- Home → click map + scroll map
- PDP top (Ekio Light Deep 5) → click + scroll + attention
- PDP top 2 (SpiroDisc)
- Colección Ekio Light
- /pages/consultoria

## 3. Session recordings a ver (mínimo 5)
Filtros:
- Mobile + duración > 3min + sin compra → ¿qué hicieron y por qué se fueron?
- Filtros: añadieron al carrito pero no compraron → ¿qué bloqueó?
- Filtros: páginas con JS error → ver impacto real

## 4. Hallazgos → tickets
| Hallazgo | URL | % impacto | Fix recomendado | Agente delegado |
|---|---|---|---|---|
| ... | ... | ... | ... | @shopify-agent |
| ... | ... | ... | ... | @shopify-theme-dev-agent |

## 5. Validación tickets previos
Tickets de la semana pasada: ¿se resolvieron? ¿el comportamiento mejoró?
```

---

## SEGMENTACIÓN — siempre comparar

**Comparaciones obligatorias**:
- Mobile vs Desktop
- Tráfico orgánico vs paid vs direct vs email
- Nuevo usuario vs returning
- Convertido (compró) vs no convertido

**Cómo segmentar en Clarity**:
- Filters → Device → Mobile / Desktop / Tablet
- Filters → Source → Direct / Organic / Paid / Email / Social
- Filters → Smart Events → Has purchase / No purchase

**Insight clave**: si rage clicks ocurren solo en mobile → fix mobile-specific.

---

## CORRELACIÓN CON CWV (CON `web-performance-agent`)

Patrón: una página con CWV malo a menudo tiene rage clicks y quick backs.

**Workflow combinado**:
1. `web-performance-agent` reporta: "LCP de /products/X subió a 3.8s"
2. `analytics-agent` (este skill) verifica en Clarity: ¿hay quick backs o rage clicks en esa URL?
3. Si SÍ → confirma que la velocidad está matando conversión → P0
4. Si NO → el problema es percepción, no velocidad → CRO

---

## CORRELACIÓN CON FUNNEL (con `analytics-funnel-audit`)

Patrón: una etapa con caída fuerte en el funnel → ver session recordings de esa etapa.

**Workflow**:
1. Funnel audit detecta: "fuga en add_to_cart → begin_checkout (solo 28%)"
2. En Clarity: filtrar sesiones que disparon `add_to_cart` pero no `begin_checkout`
3. Ver 5 recordings → identificar el patrón (¿se asustan del shipping? ¿el carrito drawer falla?)
4. Ticket con hipótesis verificada

---

## INTEGRACIÓN CON GOOGLE ADS / META ADS

Filtrar Clarity por **landing page** y **source = paid**:
- ¿El tráfico de paid es de calidad? (bounce rate, scroll depth, tiempo en página)
- ¿Hay rage clicks en CTAs de landings de paid?
- ¿La página de landing está alineada con el ad? (mensaje coherente)

Si una campaña tiene **CTR bueno pero CR mala** → ver recordings de esa campaña en Clarity.

---

## ANTI-PATRONES — NUNCA hacer

1. ❌ Ver session recordings al azar sin filtrar → pierdes tiempo
2. ❌ Sacar conclusiones de 1 session recording → patrón requiere N ≥ 5
3. ❌ Reportar "hay rage clicks" sin URL + elemento + % impacto
4. ❌ Implementar fix sin verificar después si bajó el rage click
5. ❌ Ignorar JS errors con < 1% impacto → si afectan al carrito sí importan
6. ❌ Mirar Clarity sin cruzar con GA4 + Shopify → datos sin contexto
7. ❌ No segmentar mobile vs desktop → ocultas el verdadero problema
