# 04 — Tasa de descuento, primas y descuentos

## 1. WACC

```
WACC = Ke × E/(D+E) + Kd × (1 − t) × D/(D+E)
```

Usa pesos objetivo a valor de mercado y estructura de capital normativa del sector, no la contable puntual de la sociedad. Si la empresa está sobreendeudada de forma transitoria, un WACC calculado con esa estructura genera un valor artificialmente alto: es un error clásico.

## 2. Ke — coste de los recursos propios

### 2.1 CAPM ampliado (build-up)

```
Ke = Rf + β × ERP + SP + CSRP (+ CRP)
```

| Componente | Fuente y criterio |
|---|---|
| **Rf** — tipo sin riesgo | Bono soberano a 10 años de la moneda de los flujos. Si el soberano tiene riesgo de crédito relevante, usa un bono de referencia AAA de la zona y trata el riesgo país aparte. Toma media de un periodo, no el dato de un día. |
| **β** — beta | Betas desapalancadas de comparables cotizadas, reapalancadas a la estructura objetivo. Beta de la propia empresa: inservible si no cotiza. |
| **ERP** — prima de riesgo de mercado | Estimaciones publicadas periódicamente (Damodaran, Fernández, KPMG cost-of-capital study). Cita fuente y fecha. Rango habitual en la eurozona: 5,5%–7%. |
| **SP** — prima por tamaño | Empresas pequeñas exigen más retorno. Estudios de deciles de capitalización (CRSP/Kroll). Para microempresas puede superar el 5%. |
| **CSRP** — prima por riesgo específico | El componente más subjetivo y el más atacado. Desglósalo por factores. |
| **CRP** — riesgo país | Solo si los flujos proceden de mercados con riesgo soberano distinto al de la moneda de descuento. |

### 2.2 Reapalancamiento (Hamada)
```
βₐₚₐₗ = βdesapal × [1 + (1 − t) × D/E]
βdesapal = βₐₚₐₗ / [1 + (1 − t) × D/E]
```

### 2.3 Desglose de la prima por riesgo específico

No escribas "prima específica: 4%". Justifícala por factores, cada uno con su rango y su motivo:

| Factor | Rango orientativo | Cuándo aplicarlo |
|---|---|---|
| Dependencia de persona clave | 0,5% – 3% | El fundador concentra relación comercial, conocimiento técnico o marca personal |
| Concentración de clientes | 0,5% – 2,5% | Un cliente supera el 20% de la facturación |
| Concentración de proveedores | 0,5% – 2% | Proveedor o fabricante único sin alternativa validada |
| Dependencia de un canal | 0,5% – 2% | El grueso de la captación depende de una plataforma con algoritmo ajeno |
| Riesgo regulatorio | 0,5% – 3% | Producto sujeto a autorización, publicidad regulada, cambio normativo pendiente |
| Riesgo tecnológico | 0,5% – 3% | Producto sustituible, patente no concedida, competidor con tecnología superior |
| Calidad de la información financiera | 0,5% – 2% | Cuentas no auditadas, contabilidad deficiente, información de gestión inexistente |
| Historial de proyecciones | 0,5% – 2% | Desviaciones históricas grandes entre plan y real |
| Corta trayectoria | 1% – 4% | Menos de tres ejercicios completos |

Documenta el factor, el rango y el valor elegido. Una tabla así resiste un interrogatorio; un número redondo, no.

### 2.4 Contraste
Cruza el Ke resultante con las TIR objetivo del capital riesgo aplicables a la fase de la empresa. Si un negocio en fase temprana sale con un Ke del 12%, el modelo está mal calibrado por mucho que el CAPM lo respalde formalmente.

## 3. Kd — coste de la deuda
Tipo efectivo de la financiación nueva a la fecha de valoración, no el histórico de préstamos antiguos. Si la empresa no tiene deuda bancaria, estima por rating sintético (cobertura de intereses) y diferencial de mercado. Considera que el escudo fiscal solo tiene valor si hay base imponible positiva: en empresas con bases imponibles negativas acumuladas, el ahorro fiscal se difiere y debe modelarse aparte.

## 4. Descuentos y primas sobre el valor

Orden de aplicación: primero se ajusta por control, después por liquidez. Invertir el orden altera el resultado.

### 4.1 Prima de control / descuento por falta de control (DLOC)
```
DLOC = 1 − 1/(1 + prima de control)
```
Prima de control observada en transacciones: habitualmente 20%–40%. Un DCF sobre flujos normalizados con retribuciones a mercado ya produce un valor de control; para llegar a un valor minoritario hay que descontar.

Grada el descuento según los derechos reales del paquete: capacidad de bloqueo estatutario, pactos de socios, derechos de arrastre y acompañamiento, política de dividendos, mayorías reforzadas. Un 30% con derecho de veto sobre operaciones relevantes no es un minoritario puro.

### 4.2 Descuento por iliquidez (DLOM)
Fuentes de evidencia:
- Estudios de acciones restringidas (restricted stock studies): históricamente 20%–35%.
- Estudios pre-OPV: rangos superiores y muy criticados por sesgo de selección.
- Modelos de opciones: Chaffe (put protectora), Longstaff (opción look-back), Finnerty (put de precio medio). Ventaja: la volatilidad y el plazo de restricción son parámetros observables y discutibles, lo que hace el descuento defendible.

Modula por: existencia de mercado real para las participaciones, restricciones estatutarias a la transmisión, política de dividendos, tamaño, endeudamiento y horizonte previsible de salida.

**Atención a la finalidad:** en valoraciones para separación o exclusión de socios, la aplicabilidad de descuentos por minoría e iliquidez es discutida y depende del criterio judicial aplicable. Plantea el valor con y sin descuentos, y expón el argumento de ambas posiciones en lugar de decidir unilateralmente.

### 4.3 Otros ajustes
- **Descuento por persona clave** — alternativa al ajuste vía CSRP; no apliques los dos a la vez.
- **Descuento por cartera / activos no afectos** — si la sociedad tiene inmuebles u otros activos ajenos a la explotación, valóralos por separado y súmalos, sin arrastrarlos a los múltiplos.
- **Prima por sinergias** — solo bajo estándar de valor de inversión, cuantificada e identificado el comprador.
- **Contingencias** — fiscales, laborales, litigios, propiedad industrial: se cuantifican por importe estimado y probabilidad, y se restan del equity value. No se metan en la tasa de descuento; mezclarlas ahí las hace invisibles.

## 5. Coherencia final

- Flujos nominales → tasa nominal. Flujos reales → tasa real. Nunca cruces.
- Flujos después de impuestos → tasa después de impuestos.
- Flujos a la empresa (FCFF) → WACC. Flujos al accionista (FCFE) → Ke.
- Moneda de los flujos = moneda de la Rf y de la prima de riesgo.
- Si aplicas un escenario pesimista en los flujos, no vuelvas a castigar en la tasa: el riesgo se cuenta una vez.
