---
name: performance-audit-protocol
description: >
  Protocolo paso a paso para auditar la performance del Shopify de EKIO usando
  PageSpeed Insights API, CrUX, Lighthouse y Google Search Console (Core Web
  Vitals report). Incluye URLs críticas a medir, umbrales oficiales Google,
  cómo interpretar lab vs field data, diagnóstico por métrica (LCP/INP/CLS/
  TTFB/FCP/TBT), priorización por impacto y formato de informe. Úsalo SIEMPRE
  para auditorías semanales/mensuales de velocidad, snapshot post-deploy,
  diagnóstico de "la tienda va lenta", validación antes/después de un fix,
  o monitorización continua de CWV.
---

# Performance Audit Protocol — EKIO

Este skill es el **protocolo operativo** del `web-performance-agent`. Define cómo medir,
qué medir, qué umbrales aplicar, cómo interpretar y cómo reportar.

> **Filosofía**: medir es barato, asumir es caro. Antes de tocar nada, **medir**.
> Después de cualquier cambio, **re-medir** para validar.

---

## URLS CRÍTICAS EKIO — siempre medir estas

| Prioridad | URL | Por qué |
|---|---|---|
| 🔴 P0 | `/` (home) | Punto de entrada principal, impacto SEO máximo |
| 🔴 P0 | `/products/ekio-light-deep-5` | Producto top, AOV alto |
| 🔴 P0 | `/products/spirodisc` | Producto top, alta conversión |
| 🟠 P1 | `/products/stroom-master` | Funnel de entrada |
| 🟠 P1 | `/collections/ekio-light` | Colección crítica |
| 🟠 P1 | `/collections/spiro` | Colección crítica |
| 🟡 P2 | `/cart` | Vínculo directo con conversión |
| 🟡 P2 | `/pages/consultoria` | Servicio principal |
| 🟢 P3 | `/blogs/news/<top-post>` | SEO / educación |

---

## UMBRALES OFICIALES GOOGLE (2026)

| Métrica | 🟢 Bueno | 🟠 Mejorable | 🔴 Malo |
|---|---|---|---|
| LCP | ≤ 2.5s | 2.5–4.0s | > 4.0s |
| INP | ≤ 200ms | 200–500ms | > 500ms |
| CLS | ≤ 0.1 | 0.1–0.25 | > 0.25 |
| TTFB | ≤ 800ms | 800–1800ms | > 1800ms |
| FCP | ≤ 1.8s | 1.8–3.0s | > 3.0s |
| TBT (lab only) | ≤ 200ms | 200–600ms | > 600ms |

**Para que CrUX pase el "Core Web Vitals assessment"**: el **p75 (percentil 75)** de los
usuarios debe estar en zona verde para LCP, INP y CLS. Si UNO está en 🟠 o 🔴, todo el
assessment falla.

---

## OBJETIVOS EKIO (más estrictos que el mínimo)

| Página | LCP mobile | INP | CLS |
|---|---|---|---|
| Home | < 2.0s | < 150ms | < 0.05 |
| PDP top | < 2.2s | < 150ms | < 0.05 |
| Colección | < 2.3s | < 200ms | < 0.10 |
| Otros | < 2.5s | < 200ms | < 0.10 |

---

## PROTOCOLO DE AUDITORÍA — PASO A PASO

### FASE 1: Recoger datos

#### 1.1 — PageSpeed Insights API (lab + field combinado)

```
URL: https://www.googleapis.com/pagespeedonline/v5/runPagespeed
Params:
  ?url=https://electrosmogespana.com/products/ekio-light-deep-5
  &strategy=mobile  (también ejecutar strategy=desktop)
  &category=PERFORMANCE
```

Sin API key funciona para uso bajo. Con API key (Google Cloud Console, gratis) → más cuota.

**Respuesta clave a extraer**:
- `lighthouseResult.audits.largest-contentful-paint.numericValue` → LCP lab (ms)
- `lighthouseResult.audits.cumulative-layout-shift.numericValue` → CLS lab
- `lighthouseResult.audits.total-blocking-time.numericValue` → TBT lab (ms)
- `lighthouseResult.audits.interactive.numericValue` → TTI lab (ms)
- `lighthouseResult.audits.first-contentful-paint.numericValue` → FCP lab (ms)
- `lighthouseResult.audits.server-response-time.numericValue` → TTFB lab (ms)
- `lighthouseResult.categories.performance.score` → Score Lighthouse 0-1
- `loadingExperience.metrics.LARGEST_CONTENTFUL_PAINT_MS.percentile` → LCP campo (p75)
- `loadingExperience.metrics.INTERACTION_TO_NEXT_PAINT.percentile` → INP campo (p75)
- `loadingExperience.metrics.CUMULATIVE_LAYOUT_SHIFT_SCORE.percentile` → CLS campo (p75)
- `loadingExperience.overall_category` → "FAST" | "AVERAGE" | "SLOW"

#### 1.2 — Google Search Console (CrUX field data oficial)

URL: `https://search.google.com/search-console` → propiedad `https://electrosmogespana.com/`
→ Experiencia en la página → Core Web Vitals (Mobile y Desktop separados).

Aquí vemos las URLs agrupadas en "Good / Needs Improvement / Poor". Datos del informe son **los que Google usa para ranking**.

#### 1.3 — Microsoft Clarity (correlación con frustración)

Dashboard: `https://clarity.microsoft.com` → EKIO project.

- **Insights → Dead clicks** → ¿coinciden con páginas lentas? (frustración por no respuesta)
- **Insights → Rage clicks** → ¿el INP alto explica el rage?
- **Insights → Quick backs** → ¿bouncean por velocidad?

#### 1.4 — Chrome DevTools (cuando se necesita debugging profundo)

Vía Claude in Chrome:
1. Abrir la URL
2. DevTools → Lighthouse → Mobile → Performance
3. Performance tab → Record → reload → ver flame graph
4. Network tab → ordenar por size desc → identificar bloqueantes

---

### FASE 2: Construir la tabla maestra

Formato del informe (CSV/markdown):

| URL | Strategy | LCP lab | LCP field p75 | INP field p75 | CLS field p75 | TTFB lab | TBT lab | Score |
|---|---|---|---|---|---|---|---|---|
| / | mobile | 2.1s | 2.4s | 180ms | 0.08 | 540ms | 220ms | 82 |
| /products/ekio-light-deep-5 | mobile | 3.2s 🟠 | 3.8s 🟠 | 250ms 🟠 | 0.06 | 620ms | 480ms 🟠 | 64 |
| ... | | | | | | | | |

Codificar con emojis 🟢🟠🔴 por columna para escaneo rápido.

---

### FASE 3: Priorización

**Fórmula de priorización**:
```
prioridad = (severidad × tráfico_relativo) / esfuerzo_estimado

severidad:
  🔴 rojo = 3
  🟠 amarillo = 2
  🟢 verde = 0 (no se fixea)

tráfico_relativo (sesiones GA4 últimos 30 días):
  home = 1.0
  PDP top = 0.8
  colección = 0.5
  blog = 0.3

esfuerzo:
  1 = fix < 1h
  2 = 1-4h
  3 = > 4h
```

**Reglas**:
- Si LCP field p75 > 4.0s en URL P0 → **alerta inmediata**, fix esta semana
- Si CrUX assessment "Failed" en mobile → bloquear cualquier feature nueva hasta resolverlo
- Si una mejora aporta < 100ms de LCP o < 30ms de INP → bajar prioridad

---

### FASE 4: Diagnóstico por métrica

#### 4.1 — Si LCP está mal

Extraer del JSON de PageSpeed:
- `lighthouseResult.audits.largest-contentful-paint-element.details.items[0]` → el elemento LCP

Tabla de diagnóstico:

| LCP element type | Causa probable | Recomendación → theme-dev |
|---|---|---|
| `<img>` hero | Sin preload, sin fetchpriority | Receta 1 + 2 de `shopify-theme-performance` |
| `<h1>` | Fuente custom carga lenta | Receta 8 (preload fuente + font-display: swap) |
| `<video>` | Video pesado autoplay | Lazy load + poster image |
| `<div>` con background-image CSS | Imagen CSS no preload | Mover a `<img>` o preload manual |

#### 4.2 — Si INP está mal

Extraer:
- `lighthouseResult.audits.total-blocking-time.details` → tasks largas
- `lighthouseResult.audits.bootup-time.details.items` → JS por dominio

Si TBT > 600ms o INP field > 500ms:
1. Listar dominios JS de terceros (Klaviyo, Clarity, Meta Pixel, ManyChat, Reviews)
2. Identificar el peor (mayor `total` en bootup-time)
3. Receta 5 (defer scripts) y/o Receta 10 (eliminar apps críticas)

#### 4.3 — Si CLS está mal

Extraer:
- `lighthouseResult.audits.layout-shifts.details.items` → elementos que saltan

Si CLS field p75 > 0.1:
1. Listar elementos que provocan shifts
2. Receta 9 (aspect-ratio) en imágenes/embeds
3. Banners y popups → reservar espacio o posición fixed

#### 4.4 — Si TTFB está mal

TTFB > 800ms generalmente es Shopify backend, pero:
- Si solo en algunas páginas: app lenta (Liquid render bloqueante)
- Si global: posible problema temporal Shopify → re-medir 24h después

---

### FASE 5: Reportar

Estructura del reporte (Markdown):

```markdown
# Performance Audit EKIO — Semana del XX/XX/2026

## TL;DR
- 🟢 Páginas en verde: X de N
- 🟠 Páginas a mejorar: Y de N
- 🔴 Páginas críticas: Z de N
- Score Lighthouse mobile medio: NN/100

## Cambios vs semana anterior
- LCP home: X.Xs → Y.Ys (delta -ZZms)
- INP PDP top: ...
- CLS colección: ...

## Top 3 issues a resolver
1. [Severidad] URL — métrica mala — causa probable — fix recomendado → @shopify-theme-dev
2. ...
3. ...

## Tabla maestra
(la tabla de Fase 2)

## Próximos pasos
- [ ] Acción 1 → asignado a `shopify-theme-dev-agent`
- [ ] Acción 2 → asignado a `analytics-agent` (para correlación con CR)
- [ ] Re-medir el viernes
```

---

## VALIDACIÓN ANTES/DESPUÉS DE UN FIX

**Protocolo**:

1. **BEFORE**: medir 3 veces con PSI mobile, guardar mediana
2. **Esperar al deploy** del fix por `shopify-theme-dev-agent`
3. **AFTER lab**: medir inmediatamente 3 veces, guardar mediana
4. **AFTER field**: esperar 14-28 días para que CrUX recoja datos
5. **Reportar delta**:
   - Lab delta inmediato (lighthouse)
   - Field delta a 14d y a 28d

**Plantilla de delta**:
```
Fix: <descripción>
URL: <url>
BEFORE (mobile lab): LCP 3.2s | INP 220ms | CLS 0.12 | Score 64
AFTER  (mobile lab): LCP 1.9s | INP 140ms | CLS 0.04 | Score 89

Delta: LCP -1.3s ✅ | INP -80ms ✅ | CLS -0.08 ✅ | Score +25 puntos

Field data a 28d: pendiente
```

---

## MONITORIZACIÓN CONTINUA

**Cron semanal recomendado** (vía scheduled-tasks MCP):
- Lunes 8:00 → audit automático de 10 URLs P0+P1
- Comparar vs semana anterior
- Si alguna métrica empeora > 20% → alerta a CEO

**Alertas críticas** (cualquier hora):
- Score Lighthouse mobile < 50 en home → crítico
- LCP field p75 > 4.0s en URL P0 → crítico
- CLS field p75 > 0.25 → crítico
- CrUX assessment cambia de "Passing" a "Failing" → crítico

---

## ANTI-PATRONES — NUNCA hacer

1. ❌ Medir solo lab (Lighthouse) e ignorar field (CrUX) — el ranking se basa en field
2. ❌ Medir solo desktop — el 70% del tráfico EKIO es mobile
3. ❌ Comparar Lighthouse de hace 6 meses con hoy — Google actualiza el algoritmo
4. ❌ Aceptar "el score subió" sin saber qué métrica subió
5. ❌ Optimizar TBT (lab) ignorando que INP (field) sigue mal — son distintos
6. ❌ Re-medir 5 minutos después del deploy y declarar victoria — esperar 14d para field
7. ❌ Pedir fix al theme-dev sin pasarle el elemento exacto del LCP
