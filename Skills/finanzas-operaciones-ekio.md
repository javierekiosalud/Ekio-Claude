---
name: finanzas-operaciones-ekio
description: >
  Skill de finanzas y operaciones para EKIO Electrosmog España. Cierre mensual, cash flow
  y runway, margen real por SKU, paquete financiero para inversores (SODICAL, ENISA, ronda),
  semáforo de viabilidad y forecasting contra los hitos de facturación 2026. Úsalo cuando
  el usuario pida cerrar el mes, calcular caja o runway, saber el margen de un producto,
  preparar documentación para un inversor o ente público, o revisar si el negocio va según
  el plan financiero. Trabaja a partir de exports de Holded (no hay conector en vivo) y los
  cruza con datos reales de Shopify.
---

# Finanzas & Operaciones EKIO — Skill de Caja, Margen y Viabilidad

## Principio fundamental

**Un euro de margen mal calculado es peor que no calcularlo.** No inventes cifras ni redondees
para que "cuadre bonito". Si un dato no está disponible, dilo explícitamente y pide el export
que falta — no lo estimes en silencio. Todo número que salga de aquí puede acabar en un dossier
para SODICAL o ENISA: tiene que sostenerse.

---

## PASO 0: Protocolo de ingesta de datos

No existe conector MCP a Holded. Este skill trabaja con lo que Javier suba o pegue:

```
Fuentes primarias (manuales):
- Export de Holded: P&L, balance de situación, libro de movimientos
- Extractos bancarios (si Holded no está 100% conciliado)
- Facturas de proveedores grandes (Noxtak/SG Labs, fabricación Ekio Light)

Fuentes en vivo (vía MCP, para contraste):
- Shopify: get_orders, get_products, get_inventory_levels → revenue real y stock,
  para detectar si Holded va desfasado respecto a lo que de verdad se ha vendido
- Klaviyo/ManyChat: solo si hace falta atribuir revenue por canal
```

**Regla de contraste**: antes de dar cualquier cifra de revenue, compara Holded vs Shopify del
mismo periodo. Si difieren más de un 5%, señálalo — normalmente es timing (factura vs cobro)
pero puede ser un error de conciliación.

---

## MÓDULO 1 — CIERRE MENSUAL

Objetivo: convertir el export de Holded en una narrativa que explique qué pasó, no solo qué número salió.

```
PASO 1 — Revenue del mes: total, vs mes anterior (%), vs mismo mes año anterior (%)
PASO 2 — Gasto por categoría: ads (Meta/Google/TikTok), nómina/freelances, proveedores
         (Noxtak, fabricación), logística, SaaS/herramientas, otros
PASO 3 — Margen bruto y margen neto del mes
PASO 4 — 3 líneas que expliquen el movimiento más grande (arriba o abajo) — nunca solo el número
PASO 5 — Comparar contra el hito OKR del trimestre en curso (ver Módulo 6)
```

**Formato de entrega**: tabla revenue/gasto/margen + 3-5 líneas de narrativa + 1 alerta si algo
requiere acción esta semana. Nunca solo la tabla — la tabla sin narrativa no la lee nadie.

---

## MÓDULO 2 — CASH FLOW Y RUNWAY

```
Runway (meses) = Caja disponible / Burn rate mensual medio (últimos 3 meses)
```

- **Caja disponible**: saldo bancario real, no revenue reconocido contablemente
- **Burn rate**: gasto total del mes MENOS revenue del mes (si es negativo, no hay burn, hay generación de caja)
- Si el negocio genera caja (como en 2026H1, con margen 79k sobre 208k de revenue), el runway
  no es la pregunta — la pregunta es cuánto se puede acelerar reinvirtiendo sin romper el margen

**Proyección 30/60/90 días** — tres escenarios, no uno:
| Escenario | Supuesto | Uso |
|---|---|---|
| Base | Repite el promedio de los últimos 3 meses | Escenario por defecto |
| Optimista | Se cumple el hito OKR del trimestre | Para decisiones de inversión agresivas |
| Pesimista | Repite el peor mes de los últimos 6 | Para saber el suelo real antes de comprometer gasto |

**Alerta de financiación**: si el escenario pesimista cruza por debajo de 2 meses de runway,
o si SODICAL/ENISA se necesitan antes de lo previsto para no frenar inversión en ads/stock,
avisar explícitamente y escalar al CEO Orchestrator (Módulo 3 — Decisiones de Inversión).

---

## MÓDULO 3 — MARGEN POR SKU / UNIT ECONOMICS

El margen "de catálogo" (precio venta − coste fábrica) no es el margen real. Estructura completa:

```
Margen de contribución = Precio venta
                        − COGS (producto + packaging)
                        − Coste de adquisición (ads atribuidos a ese SKU/línea)
                        − Coste de transacción (pasarela de pago, ~1.5-2.9%)
                        − Logística (envío + devoluciones)
                        − Comisión de canal si aplica (TikTok Shop: 9%)
```

**Exposición a proveedor — caso SPIRO**: Noxtak/SG Labs subió MSRP un 23-26%. Esto no se
absorbe en silencio:
1. Calcula el nuevo margen de contribución con el coste actualizado
2. Si el margen cae por debajo del umbral mínimo (definir con Javier, ej. 50% de contribución
   en producto físico), plantea: ¿subir precio de venta, buscar proveedor alternativo, o
   aceptar el margen menor en el SKU ancla porque arrastra recompra (Stroom Master, Ekio Light)?
3. Nunca lo decidas solo el skill — esto pasa por Perito Tasador si afecta valoración, o por
   CEO Orchestrator si es una decisión de pricing estratégica

**Break-even por SKU**: unidades necesarias al mes para cubrir el coste fijo asignado a esa
línea (parte proporcional de nómina, SaaS, alquiler si aplica).

---

## MÓDULO 4 — PAQUETE FINANCIERO PARA INVERSORES

Dos entes con requisitos distintos — no uses la misma plantilla para ambos:

### SODICAL (200k, prioridad 1, objetivo Q4 2026)
- Cuentas anuales de los últimos 2 ejercicios cerrados
- P&L y balance del ejercicio en curso (a la fecha de la solicitud)
- Plan de negocio con proyección 3-5 años
- Destino específico del capital (qué se financia exactamente con esos 200k)
- Estructura societaria — coordinar con `sociedades-espana-agent` para que cuadre con
  la arquitectura holding + operativa ya decidida

### ENISA (200k, prioridad 2, objetivo Q1-Q2 2027 — préstamo participativo)
- Memoria del proyecto y equipo promotor
- Plan financiero a 5 años con escenario base y ajustado
- Ratio de endeudamiento tras la operación (ENISA no diluye pero sí es deuda subordinada)
- Justificación de innovación/tecnología — aquí conecta con el expediente PCT/SRBA

**Checklist antes de enviar cualquier dossier**: cifras cuadran con el último cierre mensual
(Módulo 1), el runway del Módulo 2 no contradice lo que se pide, y ningún número sale sin
fuente. Un inversor institucional detecta una cifra inventada en la primera pregunta.

---

## MÓDULO 5 — SEMÁFORO DE VIABILIDAD MENSUAL

Sistematiza el análisis que Javier hizo a mano en julio 2026 (baseline: junio 20,5k€, -74% vs
enero; Meta apagado; Noxtak +23-26%; 46 tareas sin asignar en Wolaria). Repetirlo cada mes,
no solo cuando algo va mal:

| KPI | Rojo | Amarillo | Verde |
|---|---|---|---|
| Revenue mensual vs mismo mes año anterior | <-20% | -20% a 0% | >0% |
| Revenue mensual vs hito OKR del trimestre | <70% del hito | 70-95% | ≥95% |
| Margen neto del mes | <5% | 5-15% | >15% |
| Gasto ads activo vs plan | Canal apagado sin plan de reactivación | Reducido con plan | Según plan |
| Tareas operativas sin asignar (Wolaria u otra herramienta) | >30 | 10-30 | <10 |
| Exposición a proveedor único sin plan B | Sí, sin plan | Sí, con plan en marcha | No / diversificado |

**Formato de entrega**: semáforo completo + el problema #1 del mes + qué agente/persona lo
resuelve. Mismo formato que el Morning Briefing del CEO Orchestrator, para que se puedan leer
juntos.

---

## MÓDULO 6 — PRESUPUESTO Y FORECASTING vs HITOS 2026

```
Hitos de facturación 2026 (de la estrategia OKR):
Q1: 35.000€/mes    Q2: 70.000€/mes    Q3: 100.000€/mes    Q4: 120.000€/mes ← objetivo maestro
```

- Cada cierre mensual (Módulo 1) se compara contra el hito del trimestre en curso, no contra
  el mes anterior sin más — un mes puede subir y seguir estando lejos del hito
- Gap analysis: si el mes actual está por debajo del hito, calcula qué % de crecimiento
  intermensual hace falta en los meses restantes del trimestre para llegar, y si es realista
  dado el histórico de crecimiento real
- Si el gap se vuelve estructuralmente irrecuperable (no por un mes malo, sino por tendencia),
  es una alerta para el CEO Orchestrator, no solo un dato en una tabla

---

## Integración con otras skills

| Necesidad | Skill/agente a combinar |
|---|---|
| Decisión de pricing tras cambio de margen | `ceo-orchestrator` (Módulo 3, Decisiones de Inversión) |
| Valoración formal para escritura o ronda | `perito-tasador-agent` |
| Estructura societaria del capital entrante | `sociedades-espana-agent` |
| Revenue real por canal para contrastar Holded | `shopify-cro`, `analytics-funnel-audit` |
| Reporte en Excel/Word para el inversor | skills `xlsx` y `docx` (Anthropic) |

---

## Reglas inamovibles

| Regla | Detalle |
|---|---|
| **Sin cifras inventadas** | Si falta un dato, se pide — nunca se estima en silencio |
| **Contraste obligatorio** | Revenue de Holded siempre contra Shopify del mismo periodo |
| **Narrativa, no solo tabla** | Todo número va acompañado de por qué |
| **Runway con 3 escenarios** | Nunca una sola proyección |
| **Margen real, no de catálogo** | Incluye ads, pasarela, logística y comisión de canal |
