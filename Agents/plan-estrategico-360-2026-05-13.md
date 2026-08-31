# Plan Estratégico EKIO Ecommerce 360 — 13/05/2026

> Plan consolidado del Director Estratégico tras analizar la tienda con 4 especialistas
> (Klaviyo, SEO/GEO, Retention/LTV, CRO/Shopify) usando datos reales MCP.

---

## DIAGNÓSTICO EJECUTIVO — la verdad sin maquillaje

**Lo bueno**: tenéis tienda con tracción real (250 pedidos / 51.630€ histórico desde 23/3), AOV sólido (235-262€), Klaviyo generando 5.902€/mes (no 0% — eso era UTM rota), 25 clientes VIP (>500€) que valen el 36% del revenue total.

**Lo malo**: La PDP del producto estrella **Deep 5 NO EXISTE en Shopify** (devuelve 404). Tenéis **dos arquitecturas web rivales** (WooCommerce legacy + Shopify) indexadas en Google. **0 productos en suscripción** cuando los suplementos Laittin son recurrentes naturales. **Sharpei (alquiler) no aparece en ninguna PDP**. **Post-compra y Win-Back en DRAFT** = dinero bloqueado en la app.

**El problema NO es de demanda. Es de plumbing.** La tienda está perdiendo dinero por gaps técnicos resolubles en 30-60 días, no por falta de producto/marca/oferta.

---

## MATRIZ DE LOS 14 INDICADORES

| # | Indicador | Estado real | Gap vs objetivo | Impacto si se mejora | Prioridad |
|---|---|---|---|---|---|
| 1 | **Tasa de conversión** | < 1% estimada (6 pedidos paid/30d) | Target 4% → 4x gap | +4.500-6.800€/mes con CRO + retención abandono | 🔴 P0 |
| 2 | **Ticket medio (AOV)** | 262€ (paid 30d) / 235€ LTV medio | Target 350€ — gap moderado | Order bumps + upsell PDP → +50-80€/pedido | 🟠 P1 |
| 3 | **Recurrencia (RPR)** | 11,4% (ajustado: 7-8%) | Target 30% → 4x gap | +30-50€ LTV/cliente con loyalty + post-compra | 🔴 P0 |
| 4 | **SEO orgánico** | Score 4,4/10. Doble arquitectura indexada | Target +500 sesiones orgánicas/mes | +300-600 sesiones/mes en 90d con clusters | 🟠 P1 |
| 5 | **GEO (citation IA)** | 2/10. Invisible para ChatGPT/Perplexity | Sin llms.txt, sin Organization schema | Captación nicho EMF en motores IA | 🟡 P2 |
| 6 | **Velocidad (CWV)** | LCP estimado 2,8-3,5s (Dawn típico) | Target < 2,5s mobile | +5-15% CR con CWV en verde | 🟠 P1 |
| 7 | **UX móvil** | Menús complejos, 3 CTAs sin jerarquía | Reorganización por problema | +0,3-0,5 puntos CR tráfico frío | 🟠 P1 |
| 8 | **Checkout** | Financiación invisible en PDP, sin order bumps | Aplazame/SeQura solo en checkout final | +15-25% CR ticket alto = +600-900€/mes | 🔴 P0 |
| 9 | **Bundles** | 9 packs existentes mal diseñados (sin ahorro visible) | 3-5 bundles smart por buyer persona | Nuevos puntos entrada funnel | 🟠 P1 |
| 10 | **Upsells** | Sin upsell post-ATC, sin post-purchase upsell | ReConvert + Zipify | +300-500€/mes Card→Disc | 🔴 P0 |
| 11 | **Cross-sells** | Suplementos Laittin 4% penetración (10 ud/250 pedidos) | 30-40% target en hardware buyers | +45€ LTV/cliente con cross-sell sistemático | 🔴 P0 |
| 12 | **Email marketing (Klaviyo)** | OR 43,7% 🟢 / CR 0,77% 🔴 / 5.902€/mes | UTMs rotas + post-compra/win-back en DRAFT | +1.650-2.700€/mes solo activando lo construido | 🔴 P0 |
| 13 | **Arquitectura categorías** | Por tipo de producto (no por problema). 38 SKUs sin jerarquía clara | Menú por problema: Hogar/Oficina/Sueño/Luz | +0,3-0,5 puntos CR tráfico frío | 🟠 P1 |
| 14 | **Fichas producto (PDP)** | Deep 5 404 / FAQ duplicadas SPIRO Card / Stroom Master "Agotado" / Sin schema | Top 5 PDPs rehechas con template estándar | +2.400-3.600€/mes solo Deep 5 funcional | 🔴 P0 |

---

## LAS 3 PALANCAS CRÍTICAS (las que desbloquean más € más rápido)

### 🔴 PALANCA 1 — Reparar el plumbing de Klaviyo (esta semana)

**Por qué**: Klaviyo ya está generando **5.902€/mes** invisibles. Activar lo construido + arreglar UTMs = revenue inmediato sin crear nada nuevo.

**Acciones (todas < 4h cada una)**:
1. **Publicar flujo Post-Compra** (está en DRAFT) → +400-600€/mes
2. **Publicar flujo Win-Back** (está en DRAFT) → +300-500€/mes
3. **Añadir UTMs en campañas** (`utm_source=klaviyo&utm_medium=email&utm_campaign={name}`) → atribución real visible
4. **Reposicionar CTA en campañas**: mover botón al párrafo 3 + añadir PS con segundo CTA → CR pasa de 0,77% a 1,5-2% (+50-80% revenue/email)
5. **Crear flujo de conversión post-test EMF** segmentado por score (existe el flujo, sin CTA estructurado)

**Impacto total**: +1.650-2.700€/mes en 4 semanas.

---

### 🔴 PALANCA 2 — Activar Sharpei + Suscripciones (30 días)

**Por qué**: Tenéis **0€ en MRR recurrente** cuando el catálogo grita suscripciones (Laittin) y alquiler (Sharpei para paneles).

**Acciones**:
1. **Publicar 4 productos en alquiler Sharpei**: Deep 5 (59€/mes), Deep 7 (69€/mes), FS10 (149€/mes), Stroom Master (29€/mes). Empezar por Stroom Master (ticket más bajo, mayor demanda).
2. **Activar suscripción Pack Vitaminas 1 mes** (109€ → 98€/mes con descuento -10%). Primer mes regalo como gancho.
3. **Widget Sharpei visible en PDP Deep 5** "Desde 59€/mes" encima del botón comprar.
4. **Flujo Klaviyo cross-sell suplementos** disparado al comprar hardware EMF (10 días post-compra).
5. **Programa loyalty Smile.io** con bonus 300 puntos por activar suscripción.

**Impacto estimado a 6 meses**:
- 15-20 suscriptores Sharpei → 700-1.200€ MRR
- 30 suscriptores Vitaminas → 2.940€ MRR
- LTV medio: 235€ → 285€ (+21%)

---

### 🔴 PALANCA 3 — PDP Deep 5 desde cero + arreglar tienda top sellers (15 días)

**Por qué**: El producto que debería ser pilar **NO TIENE PDP funcional en Shopify** (devuelve 404). Una sola venta/semana = +2.400€/mes. Pack Stroom Master (top revenue) está "Agotado".

**Acciones**:
1. **Crear PDP Shopify activa del Deep 5** con URL `/products/ekio-light-deep-5` (no la URL legacy WooCommerce):
   - Headline transformacional (no técnico)
   - Precio + financiación visible + Sharpei "Desde 59€/mes"
   - Specs técnicas: irradiancia mW/cm², longitudes de onda, IEC 62471
   - 3-5 reviews textuales con foto (pedir a clientes vía Klaviyo flow)
   - FAQ 8-10 preguntas (frecuencia, distancia, contraindicaciones, garantía)
   - Tabla comparativa vs Joovv, PlatinumLED
   - Schema JSON-LD Product + Review + FAQ
2. **Pack Stroom Master**: activar "Notify me" o reponer stock urgente
3. **SPIRO Card**: limpiar FAQ duplicadas (bug actual)
4. **Badge financiación "Desde X€/mes"** en todos los productos > 200€
5. **Schema JSON-LD** en home (Organization + WebSite) + top 5 PDPs (Product + Review + FAQ)

**Impacto**: +2.400-3.600€/mes solo con Deep 5 vendiendo 1/semana.

---

## PLAN 30 / 60 / 90 DÍAS

### Sprint 1 (Días 1-30) — Reparar lo roto

| Semana | Acción | Owner | Impacto € |
|---|---|---|---|
| 1 | Publicar flujos Klaviyo Post-Compra + Win-Back + UTMs en campañas | `klaviyo-agent` | +1.000€/mes |
| 1 | Crear PDP Deep 5 funcional (URL Shopify, copy, specs, schema) | `shopify-agent` + `shopify-theme-dev-agent` | +2.400€/mes |
| 1 | Notify Me Pack Stroom Master + arreglar FAQ SPIRO Card | `shopify-agent` | +400-600€/mes |
| 2 | 301 masivo URLs legacy WooCommerce → Shopify | `seo-agent` + `shopify-theme-dev-agent` | Recupera link equity |
| 2 | Crear y publicar `llms.txt` + schema Organization | `seo-agent` | GEO base |
| 2 | Activar Sharpei Stroom Master (29€/mes) + suscripción Pack Vitaminas | `retention-agent` | +500€ MRR mes 1 |
| 3 | Widget Sharpei en PDPs Deep 5/Deep 7/FS10 con precio mensual visible | `shopify-theme-dev-agent` | +CR ticket alto |
| 3 | Order bump checkout: Vitamina C (24,70€) + Shipping Protection | `shopify-agent` | +6-8€/pedido AOV |
| 4 | Crear Bundle Durmiente (145€) + Bundle Familiar Smart (299€) con PDPs propias | `shopify-agent` | Nuevas vías entrada |
| 4 | Activar Smile.io loyalty con 4 tiers + bonus activación | `retention-agent` | +30€ LTV/cliente |

**Revenue adicional esperado fin sprint 1**: +4.500-6.800€/mes en run-rate.

---

### Sprint 2 (Días 31-60) — Escalar lo que funciona

| Semana | Acción | Owner |
|---|---|---|
| 5 | Reescritura completa top 5 PDPs con template estándar (Deep 7, BS10, BR7, SPIRO Disc, Master Pro) | `shopify-agent` |
| 5 | Schema JSON-LD Product + Review + FAQ en TODAS las PDPs (38 productos) | `shopify-theme-dev-agent` |
| 6 | Upsell post-ATC ReConvert: SPIRO Card → Disc, Detector → Card | `shopify-agent` |
| 6 | Flujo Klaviyo cross-sell hardware → suplemento (5 emails post-compra) | `klaviyo-agent` |
| 7 | Página pilar "Guía completa del Electrosmog" (2.000w) + 3 posts cluster | `seo-agent` + `content-creator-agent` |
| 7 | Reorganización menú por problema (Hogar / Oficina / Sueño / Luz Roja) | `shopify-theme-dev-agent` |
| 8 | Programa referidos en Smile.io (500 puntos/referido convertido) | `retention-agent` |
| 8 | Activar flujo NPS día 14 + solicitud review automatizada | `klaviyo-agent` |

**Revenue acumulado esperado fin sprint 2**: +8.000-12.000€/mes run-rate (vs baseline 1.574€).

---

### Sprint 3 (Días 61-90) — Profundizar nicho + automatizar

| Semana | Acción | Owner |
|---|---|---|
| 9 | Página pilar "Terapia luz roja" + 4 posts cluster | `seo-agent` + `content-creator-agent` |
| 9 | Activar API key PageSpeed Insights + auditoría CWV completa con `web-performance-agent` | `web-performance-agent` |
| 10 | Optimizaciones técnicas tema (preload hero, defer scripts, WebP) | `shopify-theme-dev-agent` |
| 10 | Activar 2 más productos Sharpei (Deep 5, Deep 7) si ROI Stroom Master confirma demanda | `retention-agent` |
| 11 | Win-back personalizado para VIPs >500€ (mensaje Javier directo) | `retention-agent` + `klaviyo-agent` |
| 11 | A/B test headlines top 3 PDPs (técnico vs transformacional) | `shopify-agent` |
| 12 | Reporte trimestral + ajuste OKRs Q3 | `ceo-orchestrator-agent` |

**Revenue acumulado esperado fin sprint 3**: +12.000-18.000€/mes run-rate.

---

## INVERSIÓN NECESARIA + ROI

### Costes adicionales mensuales

| Herramienta | Coste/mes | Justificación |
|---|---|---|
| Smile.io (Plan Free → Starter al alcanzar 200 órdenes/mes) | 0 → 49$ | Loyalty program |
| ReConvert (upsells post-ATC) | 7,99-29,99$ | Order bumps + upsell |
| Sharpei | % por suscripción | Ya está contratado |
| Microsoft Clarity | 0€ | Ya instalado |
| PageSpeed Insights API key | 0€ (cuota gratis) | Hay que crearla |
| Klaviyo | Tier actual | Sin cambio |
| **Total adicional** | **< 80€/mes** | |

### ROI esperado (proyección conservadora)

| KPI | Baseline (mayo) | Mes 3 | Mes 6 | Mes 12 |
|---|---|---|---|---|
| Pedidos paid/mes | 6 | 25-35 | 60-80 | 120-150 |
| Revenue/mes | 1.574€ | 6.500-9.000€ | 15.000-22.000€ | 35.000-50.000€ |
| AOV | 262€ | 290€ | 320€ | 350€ |
| RPR | 7-8% | 15% | 22% | 30% |
| LTV 12m | 235€ | 280€ | 350€ | 450€ |
| MRR (suscripciones+alquiler) | 0€ | 1.500€ | 4.500€ | 10.000€ |
| % revenue retención | 15% | 18% | 25% | 30% |

---

## DECISIONES QUE NECESITO DE TI (Javier)

1. **¿Migración o conservación de URLs legacy WooCommerce?** Hay que decidir si hacer 301 masivos (recomendado) o eliminar URLs antiguas. Implica revisar Google Search Console e identificar todas las URLs indexadas.

2. **¿Reposición de stock de Pack Stroom Master?** Es top revenue y está "Agotado". Decide: reponer / activar Notify Me / eliminar del catálogo.

3. **¿Aprobar inversión en Smile.io + ReConvert (< 80€/mes)?**

4. **¿Quién implementa la PDP Deep 5?** Opciones:
   - Yo creo el copy + estructura con `shopify-agent` (esta semana)
   - Estela Gil (si la contratas, su Modelo 1 podría incluirlo)
   - Tu actual theme dev / freelance

5. **¿Qué hacemos con Estela el jueves?** Mi recomendación: con esta auditoría + plan, **no necesitas su Modelo 1 (2.400-4.800€)**. Negociar Modelo 2 fractional solo si necesitas brazos ejecutores (no estrategia). Tu plan ya está hecho.

6. **¿Bloqueamos calendario semanal de ejecución?** Recomiendo cada lunes 30 min con `ceo-orchestrator-agent` para review + decisiones de la semana.

---

## OBJETIVOS OKR Q3 2026 (Jun-Sep) propuestos

- **O1 — Recuperar volumen**: 60 pedidos paid/mes (vs 6 actuales) = +10x
  - KR1: PDP Deep 5 funcional con CR > 2%
  - KR2: 3 flujos Klaviyo nuevos LIVE generando > 3.000€/mes
  - KR3: SEO orgánico +300 sesiones/mes

- **O2 — Construir el MRR**: 4.500€ MRR (suscripciones + alquiler Sharpei)
  - KR1: 20 suscriptores Pack Vitaminas
  - KR2: 15 alquileres Sharpei activos
  - KR3: % revenue retención > 22%

- **O3 — AOV 350€**
  - KR1: Order bumps en > 60% de pedidos
  - KR2: Cross-sell hardware → suplemento activado (40% penetración)
  - KR3: Bundle "Familiar Smart" representa > 10% del revenue

---

*Plan generado por el Director Estratégico Ecommerce con la consultoría de los 4 especialistas EKIO (klaviyo-agent, seo-agent, retention-agent, shopify-agent). Datos reales extraídos vía MCP Shopify y MCP Klaviyo el 13/05/2026.*
