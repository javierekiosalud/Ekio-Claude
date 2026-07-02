# Análisis de Viabilidad H2 2026 — EKIO Electrosmog España

> Consolidación del baseline del **2/jul/2026** + completado con **Shopify Analytics**.
> Última actualización: 2026-07-02. Fuente de revenue/pedidos: sesión de análisis 2/jul. Fuente de canal/device: connector de pedidos `shopify-ekio` (live). Sesiones/conversión: **pendiente de autorizar connector Shopify Analytics** (ver Apéndice A).

---

## 1. Resumen ejecutivo

EKIO entra en H2 2026 con una **caída de revenue del -74% enero→junio** y **Meta Ads apagado**. El negocio depende hoy de un mono-producto (SPIRO/Noxtak, ~85-90% del revenue), con Ekio Light sin tracción de venta y un proveedor (Noxtak) que **subió MSRP +23-26% en junio**, comprimiendo margen a ~33-37%. La palanca de crecimiento (7 proyectos Wolaria) está **planificada pero sin ejecutar** (46 tareas sin asignar).

**Veredicto:** viabilidad condicionada. El H2 no se sostiene con la inercia actual; requiere reactivar demanda pagada con ROAS controlado y ejecutar al menos reactivación (email/WhatsApp) + CRO antes de septiembre.

---

## 2. Revenue H1 2026 (baseline verificado)

| Mes | Revenue | Pedidos | AOV aprox. |
|-----|--------:|--------:|-----------:|
| Enero | 78,5k€ | 354 | ~222€ |
| Febrero | 39,4k€ | — | ~235€ |
| Marzo | 34,2k€ | — | ~235€ |
| Abril | 17,2k€ | — | ~235€ |
| Mayo | 39,9k€ | — | ~235€ |
| **Junio** | **20,5k€** | **78** | **~263€** |
| **H1 total** | **~229,6k€** | — | **~235€** |

- **Caída enero→junio: -74%**. Vs H1 2025: **-20/-25%**.
- **Mix producto:** ~85-90% SPIRO/Noxtak. Ekio Light casi no vende (may-jun: Deep 5 = 0 uds, Deep 7 = 2, Ignis = 4; Bombillas Sosiego ~48 uds pero <900€).

---

## 3. Completado con Shopify Analytics — atribución de canal (junio)

Reconstruido desde `landing_site` / `user_agent` de pedidos reales de junio (connector de pedidos live). Muestra confirmada:

| Señal | Evidencia (pedido real) | Lectura |
|-------|-------------------------|---------|
| **Google Shopping de pago sigue activo** | #8119 SPIRO Square 147€ · `gclid` + `utm_campaign=2373` · desktop · cupón `ekio10` | Aunque Meta está apagado, **Google Ads Shopping sigue generando pedidos de pago**. Es el canal pagado que sostiene junio. |
| **Orgánico/directo a ficha** | #8126 STROOM MASTER PRO 220€ · `/products/...?_ss=r` · mobile · sin descuento | Demanda orgánica de marca/producto a **AOV alto sin descuento** → margen limpio. |
| **AOV mono-producto ~150-220€** | SPIRO Square 147€, Stroom Master Pro 220€ | Confirma dependencia de ticket alto SPIRO; sin cross-sell visible. |
| **Cupón `ekio10` en uso** | -10% aplicado en pedido de pago | Descuento activo comprimiendo margen ya ajustado (33-37%). |

> ⚠️ **Limitación:** el connector de pedidos devuelve ~2 pedidos por llamada (límite de tamaño). El mix de canal **cuantitativo mes a mes** (% de revenue por Google / orgánico / directo / email) requiere el connector Shopify Analytics o un export CSV de pedidos. Ver Apéndice A y B.

---

## 4. Canales de marketing (baseline)

- **Meta Ads:** SIN campañas activas a 2/jul. Gasto junio ~365€ (vs ~1.250€/mes abr-may). ROAS blended 90d 3,35x; campaña Deep 5 6,75x; campaña fríos L1 0,19x (quemando dinero).
- **Google Ads:** activo (confirmado por pedidos con `gclid` en junio). Canal pagado que sostiene el residual de ventas.
- **Klaviyo (email + WhatsApp):** 58,3k€ atribuido H1 = **25% del revenue**. Open 40-55% pero **click medio <1%**. Campañas alcanzan solo 4-6,4k de los "12.000" contactos. Flujos abandono+bienvenida ~10k€/90d; flujos Score = 0€ (sin explotar).

---

## 5. Márgenes y proveedor

- Noxtak subió precios junio 2026: Card MSRP 39→48€ (+23%), Disc 107→134,5€ (+26%). PVP subidos en paralelo (Card 77→97€).
- **Margen bruto tras IVA+RE ≈ 33-37%** sobre el mono-producto. Cupones (`ekio10`) reducen aún más.

---

## 6. Ejecución (ClickUp / Wolaria)

7 proyectos abiertos (A reactivación, B bundles, C CRO, D B2B, F data room, G inversores): **46 tareas sin asignar y sin fechas**. Palanca de crecimiento no activada.

---

## 7. Escenarios H2 2026

Partiendo de run-rate junio (20,5k€/mes) proyectado a 6 meses:

| Escenario | Supuestos | Revenue H2 |
|-----------|-----------|-----------:|
| **Inercia (nada cambia)** | Meta off, sin reactivación, run-rate junio con decaída estacional | ~90-110k€ |
| **Base (mínimo ejecutable)** | Reactivar Google + email/WhatsApp (proyecto A) + CRO ficha SPIRO (C) | ~150-180k€ |
| **Objetivo (con Meta ROAS>3)** | + Meta reactivado solo en campañas rentables (Deep 5 6,75x), bundles (B) | ~200-240k€ |

**Prioridad de palancas por impacto/esfuerzo:**
1. **Reactivación Klaviyo** (proyecto A) — 12.000 contactos con solo 4-6k alcanzados; flujos Score a 0€. Coste marginal, revenue rápido.
2. **CRO ficha SPIRO** (proyecto C) — todo el tráfico pagado aterriza aquí; subir CR mueve todo el funnel.
3. **Google Shopping** — ya convierte; escalar presupuesto con tROAS.
4. **Meta selectivo** — solo campañas con ROAS>3 (Deep 5). NO reactivar fríos L1 (0,19x).

---

## Apéndice A — Funnel de sesiones/conversión (PENDIENTE de autorizar connector)

El connector **Shopify Analytics** (`run-analytics-query`) requiere autorización OAuth (no ejecutable en sesión no interactiva). Para desbloquear: `/mcp` en sesión interactiva de Claude Code, o ajustes de conectores en claude.ai. Queries listas para ejecutar:

```sql
-- Funnel mensual H1: sesiones → carrito → checkout → conversión
FROM sessions
SHOW sessions, sessions_with_cart_additions, sessions_that_reached_checkout,
     sessions_that_completed_checkout, conversion_rate
TIMESERIES month SINCE 2026-01-01 UNTIL 2026-06-30

-- Conversión por dispositivo (mobile vs desktop)
FROM sessions SHOW sessions, conversion_rate
GROUP BY session_device_type SINCE 2026-01-01 UNTIL 2026-06-30 ORDER BY sessions DESC

-- Revenue y pedidos por fuente de tráfico
FROM sales SHOW orders, total_sales
GROUP BY order_referrer_source, order_referrer_name SINCE 2026-01-01 UNTIL 2026-06-30

-- Nuevos vs recurrentes
FROM sales SHOW customers, returning_customers, returning_customer_rate
TIMESERIES month SINCE 2026-01-01 UNTIL 2026-06-30

-- Sesiones por fuente (dónde cae el tráfico al apagar Meta)
FROM sessions SHOW sessions GROUP BY referrer_source
SINCE 2026-01-01 UNTIL 2026-06-30 ORDER BY sessions DESC
```

**Preguntas que responderá el funnel:** ¿la caída de junio es de tráfico (menos sesiones) o de conversión (mismo tráfico, peor CR)? ¿Cuánto tráfico dependía de Meta? ¿CR mobile vs desktop justifica priorizar CRO mobile?

## Apéndice B — Alternativa sin connector

Export CSV desde Shopify Admin → Analytics → Reports → *Sessions by referrer* y *Conversion over time* (H1 2026), o *Orders export*. Con el CSV ejecuto el skill `shopify-analytics-ekio:analizar-conversion` para el funnel completo.
