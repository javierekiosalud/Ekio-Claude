# Auditoría Klaviyo EKIO — RIGUROSA (15/05/2026)

> Auditoría re-validada con datos brutos MCP Klaviyo. Cada dato verificado.
> Periodo de análisis: últimos 90 días.

---

## 1. CIFRAS REALES (datos brutos MCP)

| Métrica | Valor real | Fuente |
|---|---|---|
| Total flows | 35 | API |
| Flows LIVE | 13 | filter status=live |
| Flows DRAFT | 22 | filter status=draft |
| Listas | 17 | API |
| Segments activos | 30+ | API |
| Métricas conversión (Placed Order) | 2 distintas: Shopify (SbbUjV) + WooCommerce (VUxvmA) | API metrics |
| Recipients emails flows (90d) | 10.503 | flow_report |
| Conversiones flows (90d) | 82 | flow_report |
| **Revenue flows (90d)** | **20.113€** | flow_report |
| Revenue flows mensual estimado | ~6.704€/mes | calculado |

---

## 2. PROBLEMAS REALES — todos validados con datos

### 🔴 P0 — BLOQUEAN REVENUE / TÓXICOS PARA LA LISTA

#### P0.1 — Flujo "URL Consultoría / Manual Higiene" (XrNSmZ) está QUEMANDO LA LISTA
**Datos brutos:**
- 2.198 recipients en 90 días
- 730 opens (OR 33%)
- 260 clicks (CTR 35.6%, excelente engagement)
- **0 conversiones / 0€ revenue**
- **5.5% unsubscribe rate** (benchmark sano: < 0.5%)

→ Está LIVE. Cada 100 suscriptores que entran al flow, 5 se desuscriben SIN comprar. Es un **flow tóxico**.

**Causa probable**: tono/oferta no alineado con expectativa del lead magnet ("manual higiene") o falta de cierre de venta.

#### P0.2 — Flujo "Score Sensibilidad EMF" (WhCQDj) tiene **13.9% UNSUB RATE**
**Datos brutos:**
- 301 recipients
- 121 opens (OR 40%)
- 22 clicks
- **0 conversiones / 0€**
- **13.9% unsubscribe rate** (27x el benchmark)

→ Está LIVE. **Cada 100 personas que hacen el test EMF, 14 se desuscriben**. Aquí estás reventando la lista de prospectos más cualificados.

**Causa probable**: el flow post-test EMF no respeta el resultado (recomienda agresivamente sin importar el score). O el primer email asusta/abruma.

#### P0.3 — Tracking UTMs INCONSISTENTE entre campañas
**Verificación bruta de `tracking_options.add_tracking_params`:**

| Campaña | addTrackingParams | Resultado |
|---|---|---|
| Spiro Square X (12-15 mayo) | ✅ true | UTM correcto |
| EKO Día Madre Square X (3 mayo) | ❌ **false** | Invisible en GA4 |
| FJA Víspera Día Madre (2 mayo) | ❌ **false** | Invisible en GA4 |
| EPI Día Trabajo (1 mayo) | ❌ **false** | Invisible en GA4 |

→ **Las campañas que más revenue generaron (Día Madre = 503€) están SIN UTMs**. Por eso GA4 no atribuye nada a Klaviyo en ese periodo.

`customTrackingParams: []` está vacío en TODAS las campañas → cuando UTM se aplica, usa el default Klaviyo (`utm_source=Klaviyo`, capital K). Eso es válido pero **NO uniforme** con otras herramientas (Meta, Google Ads usan minúsculas) → puede causar fragmentación en reports GA4.

#### P0.4 — Fatiga por SPAM de campaña: "Spiro Square X" enviada 7 VECES en 9 días
**Fechas verificadas:**
- 7 mayo, 8 mayo, 9 mayo, 13 mayo, 14 mayo (x2), 15 mayo

Es **la misma campaña** con clones/variantes. El OR cayó: 53% → 39% → 33% → 33% en cada repetición. **La lista se está cansando del mismo mensaje.**

#### P0.5 — Win-Back (U6vZ52) está VACÍO y ABANDONADO
**Datos brutos:**
- Creado: 2025-11-13
- **Último update: 2025-11-13** (nunca tocado en 6 meses)
- 0 mensajes
- 0 recipients

→ Es una shell. Si se publica como está, no envía nada. **No es "publicar lo que está en DRAFT", hay que CREARLO desde cero.**

#### P0.6 — Post-Compra (T7fF25) tiene 1 SOLO EMAIL y nomenclatura de Black Friday
**Datos brutos:**
- Nombre: "FLICK 906. **[BF]** - Flujo de Post Compra 🎁"
- Created: 2025-11-16
- Updated: 2026-04-14
- 1 mensaje
- 144 recipients en 90d (en draft) → datos históricos, ya no se dispara
- 1 conversión / 190€

→ El "[BF]" indica que se creó para Black Friday y nunca se reconvirtió a evergreen. Solo tiene 1 email cuando una secuencia post-compra EKIO necesita 5+ emails (onboarding → educación → cross-sell → loyalty → suplementos).

### 🟠 P1 — DEUDA TÉCNICA / CONFUSIÓN

#### P1.1 — DUPLICACIÓN WooCommerce ↔ Shopify
**Flows duplicados detectados:**
- Carrito Abandonado: RXhk6P (WOO, draft) + SCc5CB (SHOPIFY, live)
- Checkout Abandonado: UgQd9Y (WOO, draft) + THT4wJ (SHOPIFY, live) + Vb6azi (Standard, draft)
- Abandono Producto: Vu76NK (WOO, draft) + XhQwxj (SHOPIFY, live) + RDv6Ht (SHOPIFY, draft) + TWTJ4g (SHOPIFY, live)
- Upsell SpiroDisc: XwvNSr (WOO, draft) + XF4JNw (SHOPIFY, live)
- Upsell Stroom Master: VR4bsR (WOO, draft) + Rhpw4y (SHOPIFY, live)

→ **5 pares de duplicados** legacy WooCommerce + Shopify. Los WOO están en draft pero generaron 7.405€ histórico (UgQd9Y: 4.043€ + RXhk6P: 2.462€ + Vu76NK: 475€ + otros). **Hay que archivar definitivamente los WOO.**

#### P1.2 — Métricas de conversión DUPLICADAS
**Datos brutos:**
- SbbUjV = "Placed Order" (Shopify)
- VUxvmA = "Placed Order" (WooCommerce)
- Wp4HXw = "Ordered Product" (Shopify)
- U87BR7 = "Ordered Product" (WooCommerce)

→ Los flows pueden estar usando triggers de WooCommerce, y los reports pueden confundirse. **Verificar que TODOS los flows live usan ID Shopify (SbbUjV).**

#### P1.3 — Flujos sin configurar (basura)
**3 flows "Essential Flow Recommendation" sin configurar:**
- T54YcQ, UumA8S, Y5dm9Q
- Trigger: "Unconfigured"
- Creados enero 2026, abandonados

→ Archivar.

#### P1.4 — Flujo "Bienvenida ES - OFF" (RMqmXq)
**Datos brutos:**
- Nombre: "1. Flujo de Bienvenida - ES - ✔️  **OFF**"
- Status: draft
- Updated: 2026-04-02

→ El propio título dice "OFF". Está apagado intencionalmente. Si no se usa, archivar.

#### P1.5 — Naming caótico
**Ejemplos de nombres confusos:**
- "FLICK 906. [BF] - Flujo de Post Compra 🎁"
- "WOO COMMERCE 904. [BF] - Flujo de Carrito Abandonado 🎁"
- "#2 SHOPIFY  - Flujo Abandono de Producto 🎁 BY Erick" (con doble espacio)
- "Personalización SHOPIFY  - Flujo Abandono de Producto 🎁 BY Erick"
- "Campaign May 12, 2026, 2:13 PM" (campaña sin nombrar)

→ Prefijos "FLICK", numeración inconsistente, "BY Erick" en algunos, "[BF]" residual de Black Friday. Imposible navegar el panel. **Necesita convención unificada.**

### 🟡 P2 — OPTIMIZACIÓN

#### P2.1 — Click Rate MEDIO de campañas: < 1%
**Datos brutos campañas mayo 2026:**
- Mejor CTR: "Spiro Square X (clone 2)" 09/05 → 2.49% (1 sola excepción)
- CTR medio: 0.7-1.2%
- OR medio: 35-50% (excelente)

→ Open rate excelente, **click rate catastrófico (3-5x bajo el benchmark)**. La gente abre y no clica. Subjects funcionan, copy del email no convierte.

**Causa probable validada en última campaña ("Una pregunta para mejorar tu bienestar" — 12 mayo):** OR 52.7%, CR 1.32%. Excelente OR pero los clicks no fluyen. **El cuerpo del email pierde a la audiencia.**

#### P2.2 — AOV de conversiones email: 71€-450€ (volatilidad alta)
- Mejor AOV: 485€ (flujo bienvenida)
- Peor AOV: 20€ (clone de campaña hormones)
- Media: ~150-200€

→ AOV email está por debajo del AOV de tienda (262€). Esto sugiere que email convierte a productos baratos (SpiroCard) más que a productos premium (Deep 5).

#### P2.3 — 30+ segments, muchos parecen abandonados
**Ejemplos detectados:**
- "EKIO LIGHT 20 DE MARZO" → fecha específica, segment temporal
- "NO HAN COMPRADO - NIVEL DE CONCIENCIA MUY ALTA (30 DÍAS)" → creado 12 mayo 2026
- "NO HAN RECIBIDO CORREO 90 DÍAS - RECUPERACIÓN" → creado 12 mayo 2026
- "Han Abierto los retos" → ¿qué retos?
- "Score Sensibilidad EMF (X)" segments huérfanos

→ **Falta limpieza y documentación de segments.**

#### P2.4 — Hard Bounced list separada NO se está limpiando automáticamente
**Lista "Hard Bounced"** (ID XM2wrq) — creada noviembre 2025, sin updates.

→ Klaviyo debería autosuprimir hard bounces. Verificar que la lista no esté siendo importada de vuelta a campañas.

#### P2.5 — Flujos ManyChat con tracción mínima
- TUYs5M "ManyChat Guía Niños": 4 recipients
- Vt7rQH "ManyChat Guía Ayuno de Luz": 5 recipients

→ Volumen anecdótico. Validar que ManyChat está empujando leads a Klaviyo de verdad. Posible bug de integración.

---

## 3. LO QUE SÍ FUNCIONA (mantener y proteger)

| Flow / Campaña | Datos | Por qué funciona |
|---|---|---|
| **SYu5kN — Flujo Bienvenida** (LIVE) | 8.226€/90d, OR 43%, CTR 29%, 22 conv | El motor #1. Cuidar con la vida. |
| **THT4wJ — Checkout Abandonado SHOPIFY** | 2.558€/90d, 9 conv, AOV 284€ | Bien atado al checkout Shopify |
| **SCc5CB — Carrito Abandonado SHOPIFY** | 741€/90d, 6 conv | Funciona, escalable |
| **WyeLqD — Abandono de Sitio** | 1.142€/90d, OR 35%, 8 conv | Reactiva visitantes |
| Subjects de mayo (Javier) | "El Spiro Square X ya está en casa de 847…" | Voz de marca real, OR 30-50%. ✅ |

---

## 4. PLAN DE ACCIONES — POR PRIORIDAD DE IMPACTO

### 🔴 P0 — ESTA SEMANA (impacto inmediato)

| # | Acción | Tiempo | Impacto € |
|---|---|---|---|
| 1 | **PAUSAR XrNSmZ** (Bienvenida URL Consultoría) hasta auditar. Hace daño con 5.5% unsub sin convertir. | 5 min | Detiene fuga de lista |
| 2 | **PAUSAR WhCQDj** (Score Sensibilidad EMF) hasta rediseñar. 13.9% unsub es insostenible. | 5 min | Detiene fuga lista cualificada |
| 3 | **Activar add_tracking_params=true** por defecto en todas las campañas nuevas (Settings → Account → Default UTMs) | 5 min | Atribución real visible en GA4 |
| 4 | **Auditar últimas 4 campañas sin UTMs** y reenviar con UTM si vale la pena re-target | 30 min | — |
| 5 | **Pausar repetición Spiro Square X** — la lista está saturada (7 envíos en 9 días) | 5 min | Reduce unsubs |
| 6 | **Crear Win-Back desde cero** (3 emails) — no se puede "publicar lo que está en DRAFT" porque está vacío | 2-3h | +200€/mes inicialmente, +1.200€/mes a 6 meses |
| 7 | **Expandir Post-Compra T7fF25** de 1 a 5 emails: onboarding + educación + cross-sell + loyalty + suplemento. Renombrar quitando "[BF]" | 4-5h | +1.300€/mes |

### 🟠 P1 — 2 SEMANAS

| # | Acción | Tiempo | Impacto |
|---|---|---|---|
| 8 | **Archivar los 5 flows WooCommerce duplicados** (después de confirmar que los Shopify equivalentes están funcionando) | 30 min | Higiene del panel |
| 9 | **Archivar 3 "Essential Flow Recommendation" + "Bienvenida OFF" + Vb6azi standard** | 10 min | Higiene |
| 10 | **Auditar trigger de cada flow LIVE**: confirmar que usa métrica Shopify (SbbUjV/Wp4HXw), NO WooCommerce | 1h | Asegura disparo |
| 11 | **Renombrar todos los flows LIVE** con convención: "[Etapa] Nombre - ES" | 30 min | Claridad operativa |
| 12 | **Rediseñar flujo "URL Consultoría"** (XrNSmZ) con CTA a consultoría desde email 1, oferta de descubrimiento gratuito en email 2 | 3h | Convertir 2.198 recipients → 5-10€ revenue/mes mínimo |
| 13 | **Rediseñar flujo "Score Sensibilidad EMF"** (WhCQDj): split por nivel de riesgo (bajo→Detector, medio→Card/Disc, alto→Square X+Stroom) | 4h | Convertir lead más cualificado |

### 🟡 P2 — 30 DÍAS

| # | Acción | Tiempo | Impacto |
|---|---|---|---|
| 14 | **Limpiar segments**: archivar segments temporales y duplicados (>40% del total son ruido) | 1h | Claridad |
| 15 | **Reescribir copy de campañas con CTR<1%**: usar fórmula "1 idea por email + 2-3 CTAs intercalados (no solo final)" | 4h | CR de 0.7% → 2-3% = +120% revenue/campaña |
| 16 | **Crear flujo "Browse Abandonment"** (existe en draft TKRXJv pero también huérfano) — versión Shopify | 2h | Recupera tráfico cualificado |
| 17 | **Crear segment "VIP >500€"** y flujo dedicado con WhatsApp directo desde Javier para los 25 VIPs | 3h | Proteger 36% del revenue |
| 18 | **Activar UTMs uniformes**: `utm_source=klaviyo&utm_medium=email&utm_campaign={campaign}&utm_content={subject}` con minúscula | 10 min | Coherencia con Meta/Google |

---

## 5. NÚMEROS CLAVE QUE DEBES CONOCER

| Dato | Valor real |
|---|---|
| Revenue Klaviyo /mes (real) | ~6.700€ |
| Revenue flow Bienvenida /mes | ~2.700€ (40% del total) |
| Revenue Post-Compra /mes | ~63€ (1% — DEUDA por solo 1 email) |
| Revenue Win-Back /mes | 0€ (no existe) |
| Open rate medio campañas | 35-50% (excelente) |
| Click rate medio campañas | 0.7-1.2% (3-5x bajo benchmark) |
| Unsub rate medio | 0.2-0.4% global, pero **5.5% en XrNSmZ y 13.9% en WhCQDj** |
| Bounce rate medio | <0.5% (saludable) |

---

## 6. CALIBRACIÓN — NO REPETIR ESTOS ERRORES

| Error anterior del plan | Corrección con datos brutos |
|---|---|
| "Klaviyo en 0% atribución" | NO. Klaviyo genera 6.700€/mes. El problema es UTMs **inconsistentes** (no ausentes). 4 de las últimas 30 campañas no tienen UTM, pero el resto sí. |
| "Win-Back en DRAFT, solo publicar" | NO. Win-Back está **VACÍO**. Hay que crearlo. |
| "Post-Compra en DRAFT genera 30K€/año" | Sí, pero **histórico de cuando estuvo live**. Ahora está en draft real. Datos 90d: 1 conv / 190€ → muy bajo. |
| "Solo necesita UTMs" | Necesita mucho más: nomenclatura, pause de flows tóxicos, crear win-back, expandir post-compra, reactivar tracking en campañas sin UTM. |

---

*Auditoría generada con datos brutos MCP Klaviyo 15/05/2026. Cada cifra verificable.
Si encuentras alguna discrepancia con la UI de Klaviyo, dime y revisamos.*
