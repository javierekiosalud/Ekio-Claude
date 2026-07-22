# 02 — Métodos de valoración

## Índice
1. Enfoque de rendimiento (DCF y derivados)
2. Enfoque de mercado (múltiplos)
3. Enfoque patrimonial
4. Métodos mixtos con fondo de comercio explícito
5. Early stage y alto crecimiento
6. Opciones reales
7. Ponderación y football field

---

## 1. Enfoque de rendimiento

### 1.1 DCF por flujos libres a la empresa (FCFF)

```
FCFF = EBIT × (1 − t) + Amortizaciones − CAPEX − ΔNOF
EV   = Σ FCFFₜ / (1 + WACC)ᵗ  +  VT / (1 + WACC)ⁿ
Equity = EV − Deuda financiera neta + activos no afectos − contingencias
```

Valor terminal:
```
Gordon:   VT = FCFFₙ × (1 + g) / (WACC − g)
Salida:   VT = EBITDAₙ × múltiplo de salida
```
Calcula **ambos** y compáralos. Si divergen mucho, alguna de las dos hipótesis es incoherente. Usa mid-year convention cuando los flujos se generen uniformemente a lo largo del año.

Coherencia del valor terminal: el CAPEX de reposición del último año explícito debe aproximarse a la amortización, y las NOF deben crecer al mismo ritmo que g. Un valor terminal calculado sobre un flujo que aún incorpora CAPEX de expansión sobrevalora sistemáticamente.

### 1.2 FCFE y APV
- **FCFE**: descontar al coste de los recursos propios (Ke). Útil en entidades financieras o cuando la estructura de capital es muy cambiante.
- **APV**: valor del negocio sin deuda más valor actual del escudo fiscal. Preferible en LBO o estructuras de capital que varían fuertemente en el horizonte.

### 1.3 Capitalización de beneficios
```
V = Beneficio normalizado sostenible / (k − g)
```
Válido solo en negocios maduros y estables. En una empresa con crecimiento fuerte o intangibles en desarrollo, subvalora de forma severa.

### 1.4 EVA / beneficio residual
```
EVA = NOPAT − (WACC × Capital invertido)
V   = Capital invertido + Σ EVAₜ descontados
```
Útil para explicar cuánto del valor procede del capital ya invertido y cuánto de la creación futura de valor. Muy pedagógico ante un consejo o un inversor.

---

## 2. Enfoque de mercado

### 2.1 Múltiplos de cotizadas comparables
Selecciona comparables por modelo de negocio y drivers de riesgo, no por CNAE. Documenta la búsqueda: universo inicial, criterios de exclusión, muestra final. Una muestra que no se puede reproducir no es defendible.

Múltiplos habituales: EV/EBITDA, EV/EBIT, EV/Ventas, EV/Capital invertido, PER, P/VC. En negocios con suscripción o comunidad: EV/ARR, EV/Ingreso recurrente, valor por cliente activo, LTV/CAC.

Ajustes obligatorios sobre el múltiplo bruto:
- Descuento por tamaño (una pyme no cotiza al múltiplo de una cotizada).
- Descuento por iliquidez.
- Ajuste por diferencias de crecimiento y margen (regresiones de múltiplo frente a crecimiento cuando la muestra lo permita).
- Coherencia deuda/equity al pasar de EV a equity.

### 2.2 Múltiplos de transacciones
Incorporan prima de control y sinergias del comprador concreto. Aplicables cuando la finalidad es la venta; a depurar cuando la finalidad es un valor de mercado puro.

### 2.3 Múltiplos de rondas de inversión
Precios en rondas primarias reflejan condiciones no económicas (preferencias de liquidación, antidilución, derechos de arrastre). El pre-money declarado de una ronda **no** es equivalente a un valor de mercado del 100% del capital ordinario. Ajusta o advierte.

---

## 3. Enfoque patrimonial

- **Valor contable** — punto de partida, casi nunca conclusión.
- **Activo neto real (ANC ajustado)** — revaloriza inmuebles, existencias, créditos dudosos, provisiones, contingencias fiscales y laborales, activos ociosos.
- **Valor sustancial** — coste de reconstruir la capacidad operativa; útil como suelo económico.
- **Valor liquidativo** — ANC ajustado menos costes de liquidación, indemnizaciones, plusvalías fiscales y descuentos por realización forzosa.

En empresas intensivas en intangibles, el enfoque patrimonial casi siempre da el suelo y por sí solo carece de sentido: por definición, no captura lo que hace valiosa a la compañía.

---

## 4. Métodos mixtos con fondo de comercio explícito

Siguen apareciendo en informes periciales y resoluciones judiciales españolas. Conócelos aunque tu conclusión se apoye en DCF.

Notación: `A` = activo neto real, `B` = beneficio normalizado, `i` = tipo sin riesgo o de rentabilidad normal del sector, `k` = tasa de actualización, `n` = número de años de goodwill, `aₙ` = valor actual de una renta unitaria de n años a la tasa k.

| Método | Fórmula | Comentario |
|---|---|---|
| Clásico | `V = A + m × B` (o `A + m × facturación`) | m entre 1,5 y 3 según sector; muy tosco |
| Simplificado UEC (renta abreviada del goodwill) | `V = A + aₙ × (B − i × A)` | El más utilizado en España; el superbeneficio se capitaliza durante n años |
| UEC completo | `V = [A + aₙ × B] / [1 + i × aₙ]` | Considera que el goodwill se financia parcialmente |
| Indirecto o alemán | `V = (A + B/i) / 2` | Media entre valor patrimonial y de rendimiento |
| Directo o anglosajón | `V = A + (B − i × A) / tₘ` | tₘ es una tasa incrementada por riesgo del goodwill |
| Compra de resultados anuales | `V = A + m × (B − i × A)` | m entre 3 y 5 años |

Las críticas técnicas a estos métodos son conocidas: n y m son arbitrarios y el resultado es hipersensible a ellos. Cuando los uses, hazlo como **contraste** y explicita el análisis de sensibilidad sobre n y sobre i.

---

## 5. Early stage y alto crecimiento

### 5.1 VC Method
```
Valor de salida  = Métrica año N × múltiplo de salida
Valor post-money = Valor de salida / (1 + TIR objetivo)^N
Valor pre-money  = post-money − inversión
% del inversor   = inversión / post-money
```
TIR objetivo típicas por fase (rangos orientativos de mercado, contrasta con datos actuales): pre-seed 60–100%, seed 50–70%, serie A 40–60%, serie B 30–50%. La TIR alta no es codicia: incorpora la mortalidad de cartera.

**Dilución real:** proyecta rondas futuras y el pool de opciones. Un fundador que negocia solo el pre-money de hoy y no la cascada de dilución está optimizando la variable equivocada.

### 5.2 First Chicago
Tres escenarios (éxito, base, fracaso), cada uno valorado por DCF o múltiplo de salida, ponderados por probabilidad. Es el método más honesto en negocios binarios (regulatorio, clínico, patente clave) y el más fácil de defender ante un inversor: obliga a discutir probabilidades, no valores.

### 5.3 Métodos cualitativos (pre-ingresos)
- **Berkus** — asigna valor por hitos: idea sólida, prototipo, equipo, relaciones estratégicas, ventas iniciales.
- **Scorecard (Payne)** — parte de la valoración media de rondas comparables en la región y ajusta por factores ponderados (equipo, tamaño de oportunidad, producto/tecnología, entorno competitivo, marketing y canal, necesidad de financiación adicional).
- **Risk Factor Summation** — media del sector ajustada al alza o a la baja por doce categorías de riesgo.

Úsalos para triangular, nunca como método único, y deja claro que producen rangos de negociación, no valores de mercado.

---

## 6. Opciones reales

Aplicable cuando existe flexibilidad estratégica con valor y alta incertidumbre: patente sin explotar, expansión geográfica condicionada, licencia con hitos, abandono de un desarrollo.

```
Opción de expansión → call sobre el valor del proyecto ampliado
Opción de abandono  → put sobre el valor de liquidación
```
Con Black-Scholes: S = valor actual de los flujos del proyecto, K = inversión requerida, σ = volatilidad de los flujos o de comparables cotizadas, T = ventana de decisión. Documenta σ con especial cuidado: es el parámetro que más discusión genera y el que más mueve el resultado.

En cartera de patentes, el enfoque de opciones evita el error de valorar a cero una patente que hoy no genera flujo pero mantiene abierta una vía de explotación.

---

## 7. Ponderación y football field

Pondera por **calidad de los inputs**, no por preferencia estética. Justifica cada peso en una frase.

Ejemplo de razonamiento defendible: en una empresa con proyecciones fundamentadas pero comparables cotizadas escasos y muy grandes, el DCF pesa 60%, los múltiplos 25% (rango amplio) y el patrimonial 15% como referencia de suelo.

Presenta el resultado como gráfico de barras horizontales (football field) con el rango de cada método, la zona de solapamiento y el valor de conclusión. La zona donde se cruzan varios métodos es el argumento más potente que tendrás en una negociación.
