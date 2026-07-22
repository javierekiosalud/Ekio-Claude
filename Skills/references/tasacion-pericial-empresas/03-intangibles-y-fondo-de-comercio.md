# 03 — Intangibles y fondo de comercio

## Índice
1. Identificación e inventario de intangibles
2. Selección del método por tipo de intangible
3. Relief-from-Royalty
4. MEEM y contributory asset charges
5. With-and-Without
6. Enfoque de coste
7. Vida útil remanente y atrición
8. TAB — beneficio fiscal de la amortización
9. Reconciliación WARA / WACC
10. Fondo de comercio: naturaleza, cálculo y deterioro
11. Intangibles atípicos: comunidad, datos, contenido, autoridad de marca personal
12. Errores que hunden un informe

---

## 1. Identificación e inventario

Un intangible se reconoce por separado del fondo de comercio si cumple **uno** de estos dos criterios (NIIF 3 / NRV 19ª PGC):

- **Criterio contractual-legal**: nace de un contrato o de un derecho legal, con independencia de si es transferible (patentes, marcas registradas, licencias, contratos de suministro, franquicias, concesiones).
- **Criterio de separabilidad**: es susceptible de ser separado de la entidad y vendido, cedido, licenciado o intercambiado, individualmente o junto con un contrato o activo relacionado (listas de clientes no contractuales, know-how, bases de datos).

### Inventario tipo por categorías

| Categoría | Ejemplos |
|---|---|
| Marketing | Marcas, nombres comerciales, dominios, imagen comercial, pactos de no competencia |
| Cliente | Listas de clientes, cartera contractual, pedidos en firme, relaciones no contractuales, comunidad y base de suscriptores |
| Contractual | Licencias, franquicias, autorizaciones y registros sanitarios, contratos de distribución, arrendamientos ventajosos, contratos laborales clave |
| Tecnológico | Patentes, modelos de utilidad, software, secretos industriales, diseños, fórmulas, protocolos y algoritmos propietarios |
| Artístico | Contenido audiovisual, obras editoriales, material formativo |

**No son intangibles reconocibles por separado** (van al fondo de comercio): la plantilla ensamblada, la cuota de mercado como tal, la reputación genérica, las sinergias esperadas y el potencial de nuevos clientes futuros. Reconocerlos separadamente es uno de los errores más comunes y más fáciles de detectar por un auditor.

**Comprobación jurídica previa e imprescindible.** Antes de valorar cualquier intangible, verifica la titularidad: marcas registradas y en vigor a nombre de la sociedad valorada, patentes y modelos de utilidad concedidos o en tramitación con su estado real, cesiones de derechos de autor y de código firmadas por empleados y freelance, contratos de distribución vigentes con su plazo y sus cláusulas de terminación. Un intangible cuya titularidad no está limpia no se valora igual: o se descuenta por riesgo jurídico, o se valora condicionado. Esta comprobación se documenta en el informe.

---

## 2. Selección del método

| Intangible | Método principal | Alternativa |
|---|---|---|
| Marca / nombre comercial | Relief-from-Royalty | MEEM si la marca es el activo primario del negocio |
| Tecnología patentada | Relief-from-Royalty | MEEM; opciones reales si no está explotada |
| Software desarrollado internamente | Coste de reposición depreciado | RFR si hay mercado de licencias comparable |
| Relaciones con clientes | MEEM | Distributor method para carteras secundarias |
| Cartera contractual | MEEM sobre los contratos vigentes y sus renovaciones probables | Valor actual del margen contratado |
| Pacto de no competencia | With-and-Without ponderado por probabilidad de competencia efectiva | — |
| Licencia o autorización regulatoria | With-and-Without o coste y tiempo de obtención | Greenfield |
| Base de datos / comunidad | MEEM sobre el margen atribuible | Coste de reposición como suelo |
| Plantilla ensamblada | Coste de reposición (solo como CAC, no como activo separado) | — |

**Regla del activo primario:** en cada negocio hay un intangible que es el motor del flujo. Ese se valora con MEEM (que absorbe el exceso de rendimiento) y el resto con métodos que no compitan por el mismo flujo. Aplicar MEEM a dos intangibles del mismo negocio duplica valor.

---

## 3. Relief-from-Royalty (RFR)

Lógica: el valor del intangible equivale al valor actual de los royalties que la empresa se ahorra por ser propietaria en lugar de licenciataria.

```
Royalty bruto ahorradoₜ = Ingresos atribuiblesₜ × tasa de royalty
Flujo netoₜ  = Royalty bruto × (1 − t) − gastos de mantenimiento del intangible
Valor        = Σ Flujo netoₜ / (1 + k)ᵗ  + valor terminal (si vida indefinida)  + TAB
```

**Determinación de la tasa de royalty** — el punto más atacable del método. Tres vías, y lo ideal es cruzar al menos dos:

1. **Comparables de mercado**: contratos de licencia del sector (bases tipo RoyaltyRange, ktMINE, RoyaltySource, licencias publicadas en filings). Documenta sector, geografía, exclusividad, base de cálculo (ventas netas o brutas), mínimos garantizados y duración.
2. **Regla del 25% (Goldscheider)**: la licenciataria cedería en torno a un cuarto del beneficio operativo derivado del intangible. Superada como norma automática en jurisprudencia estadounidense, pero sigue siendo un contraste de racionalidad útil: si tu tasa de royalty implica ceder el 80% del margen, algo falla.
3. **Análisis de reparto de beneficios (profit split)**: parte del margen operativo atribuible al intangible y reparte entre licenciante y licenciataria según funciones, activos y riesgos asumidos.

Filtros de coherencia: la tasa de royalty no puede exceder el margen operativo del negocio; el royalty aplicado a los ingresos que realmente soporta la marca (no a toda la facturación si hay líneas de marca blanca o distribución de terceros); y coherencia con lo que la empresa cobra o paga en licencias reales, si existen.

**Tasa de descuento (k):** WACC del negocio más una prima por el riesgo específico del intangible. Una marca consolidada con ingresos estables descuenta cerca del WACC; una tecnología en desarrollo, muy por encima.

---

## 4. MEEM — Multi-Period Excess Earnings Method

Lógica: aísla los flujos atribuibles al intangible y descuenta de ellos la retribución de todos los demás activos que contribuyen a generarlos (*contributory asset charges*, CAC). Lo que sobra es el exceso de beneficio del intangible.

```
Ingresos atribuibles al intangible (con curva de atrición)
− Costes y gastos directos
= EBIT atribuible
− Impuestos
= NOPAT atribuible
− CAC de capital circulante
− CAC de inmovilizado material
− CAC de plantilla ensamblada
− CAC de marca y otros intangibles contributivos
= Exceso de beneficio
× Factor de descuento
= Valor actual  → + TAB → Valor del intangible
```

### Cálculo de los CAC

| Activo contributivo | Base | Cargo |
|---|---|---|
| Capital circulante | NOF medias | Tipo a corto plazo, coste de la deuda |
| Inmovilizado material | Valor razonable | Retorno exigido al activo + recuperación vía amortización |
| Plantilla ensamblada | Coste de reposición (reclutamiento + formación + pérdida de productividad) | Retorno sobre ese coste |
| Marca / tecnología contributiva | Valor razonable calculado por RFR | Retorno exigido a ese intangible |

Los CAC pueden expresarse como cargo de retorno únicamente (activos cuya reposición ya está en el CAPEX proyectado) o como retorno más recuperación. Sé consistente y explícalo.

### Curva de atrición de la cartera de clientes

El error más frecuente es aplicar una tasa de atrición plana. Usa la información real:
- Analiza la cohorte histórica: qué porcentaje de clientes de cada año sigue comprando.
- Ajusta una curva de supervivencia (exponencial simple, o curvas tipo Iowa si hay datos suficientes).
- La vida útil remanente es el periodo hasta que la cohorte existente se agota, no la vida del negocio.

**Crítico:** el MEEM valora la cartera **existente** a la fecha de valoración. Los clientes futuros que aún no existen no forman parte de ese intangible: forman parte del fondo de comercio. Proyectar crecimiento de clientes dentro del MEEM es doble contabilización directa.

---

## 5. With-and-Without

Se valora la diferencia entre dos escenarios: la empresa con el intangible y la empresa sin él.

```
Valor = VA(flujos con el intangible) − VA(flujos sin el intangible)
```

Para pactos de no competencia, pondera por la probabilidad real de que el firmante compitiera y por su capacidad efectiva de hacer daño:

```
Valor = [VA(con pacto) − VA(sin pacto)] × P(competiría) × P(tendría éxito compitiendo)
```

Es el método natural para autorizaciones regulatorias, exclusivas territoriales y ventajas de barrera de entrada.

---

## 6. Enfoque de coste

```
Coste de reposición depreciado = Coste de reproducir el activo hoy
                                 − Obsolescencia funcional
                                 − Obsolescencia económica
                                 + Coste de oportunidad del tiempo de desarrollo
                                 + Beneficio razonable del desarrollador
                                 + TAB
```

Aplicable a software interno, plantilla ensamblada y bases de datos. Su límite conceptual es evidente: mide lo que costaría rehacerlo, no lo que genera. Es un **suelo**, y solo se usa como método principal cuando no hay flujos aislables.

---

## 7. Vida útil remanente

| Intangible | Referencia de vida útil |
|---|---|
| Marca consolidada con inversión de mantenimiento | Indefinida (contable: 10 años bajo PGC salvo prueba en contrario) |
| Patente | Vida legal remanente, acotada por la vida económica y por el riesgo de sustitución tecnológica |
| Modelo de utilidad | Vida legal remanente (más corta que la patente) |
| Tecnología no patentada | Ciclo de obsolescencia observado en el sector |
| Software | 3–7 años según ritmo de reescritura |
| Relaciones con clientes | Derivada de la curva de atrición real |
| Contratos | Plazo vigente más renovaciones con probabilidad demostrada |

Justifica la vida útil con datos, no con convención. En el informe, la vida útil es tan discutible como la tasa de descuento y merece el mismo espacio.

---

## 8. TAB — Tax Amortization Benefit

Un comprador hipotético que adquiriera el intangible por separado podría amortizarlo fiscalmente. Ese ahorro forma parte del valor razonable del activo bajo la premisa de participante de mercado.

```
TAB factor = 1 / [1 − (t/n) × aₙ,ₖ]
```
donde `t` es el tipo impositivo, `n` los años de amortización fiscal admitida y `aₙ,ₖ` el valor actual de una renta unitaria de n años a la tasa k.

Aplica el TAB cuando el estándar sea valor razonable con premisa de participante de mercado (PPA, deterioro). **No lo apliques** cuando valores para una parte concreta que no obtendría ese beneficio, o cuando la operación se estructure como compraventa de participaciones sin step-up fiscal de la base. Explica siempre la decisión: aplicar TAB indebidamente infla el valor entre un 15% y un 25%.

---

## 9. Reconciliación WARA / WACC

Es el control de calidad que separa un PPA riguroso de una suma de hojas de cálculo.

```
WARA = Σ (Valor razonable del activo ᵢ / Valor total de los activos) × Tasa de retorno exigida al activo ᵢ
```

Se incluyen todos los activos: circulante, inmovilizado material, cada intangible identificado y el fondo de comercio.

**La WARA debe aproximarse al WACC del negocio** (diferencia razonable: hasta unos 100 puntos básicos). Si no converge:
- WARA muy por debajo del WACC → los intangibles están sobrevalorados o las tasas asignadas son demasiado bajas.
- WARA muy por encima → los intangibles están infravalorados o el fondo de comercio residual es implausiblemente grande.

Jerarquía habitual de tasas: circulante < inmovilizado < WACC < marca ≈ cartera de clientes < tecnología < fondo de comercio < I+D en curso. El fondo de comercio es el activo más arriesgado y debe llevar la tasa más alta entre los reconocidos.

Incluye la tabla de reconciliación en el informe. Un auditor la pedirá, y su presencia comunica solvencia técnica antes de que nadie lea los números.

---

## 10. Fondo de comercio

### 10.1 Qué es
```
Fondo de comercio = Contraprestación transferida
                  + Participaciones no dominantes (si procede)
                  + Valor razonable de participaciones previas
                  − Valor razonable de los activos identificables netos adquiridos
```

Es un **residuo**, no un activo valorado directamente. Económicamente recoge: sinergias esperadas, plantilla ensamblada, cuota de mercado, capacidad de captar clientes futuros, valor de la organización como sistema, y la parte de valor que no se ha sabido o podido identificar.

Si el residuo sale desproporcionadamente grande, la conclusión correcta no suele ser "esta empresa tiene mucho goodwill", sino "no he identificado bien los intangibles" o "se ha pagado de más". Ambas cosas se dicen en el informe.

Si sale negativo (compra en condiciones muy ventajosas), revisa primero los valores razonables asignados antes de reconocer un ingreso en resultados: la norma exige esa reconsideración.

### 10.2 Fondo de comercio personal frente a empresarial
Distinción decisiva en divorcios, jubilaciones de socios profesionales y valoración de empresas dependientes del fundador.

- **Personal**: reside en la reputación, la red de contactos y la habilidad de una persona concreta. No es transferible, salvo que se ate mediante pacto de permanencia y no competencia.
- **Empresarial**: reside en la organización, los procesos, la marca y los sistemas, y sobrevive a la salida del fundador.

Indicadores de dependencia personal: concentración de la relación comercial en una persona, marca personal más reconocida que la corporativa, ausencia de segundo nivel directivo, procesos no documentados. Cuando la dependencia es alta, se cuantifica con un **descuento por persona clave** (habitualmente entre el 10% y el 25% del valor, justificado caso a caso) o mediante un escenario de salida del fundador en el propio modelo, que es la vía más defendible.

### 10.3 Deterioro
Bajo NIIF (NIC 36), test anual obligatorio y ante indicios:
```
Valor recuperable = máx(Valor razonable − costes de venta ; Valor en uso)
Deterioro = Valor contable de la UGE − Valor recuperable
```
Reglas prácticas: define la UGE al nivel más bajo que genere entradas de efectivo independientes y al que se supervise el goodwill internamente; el valor en uso se calcula sobre el activo en su estado actual, excluyendo reestructuraciones futuras no comprometidas y mejoras de rendimiento aún no realizadas; el deterioro del fondo de comercio no revierte nunca.

Bajo PGC español, el fondo de comercio se amortiza en su vida útil, con presunción de 10 años salvo prueba en contrario, y el deterioro tampoco revierte. Verifica el marco contable aplicable antes de pronunciarte.

---

## 11. Intangibles atípicos

Empresas D2C, de comunidad y de contenido concentran valor en activos que las guías clásicas no listan. Se valoran igual, pero exigen construir la base de ingresos atribuibles con cuidado.

**Base de datos de contactos y comunidad.** Valor = margen recurrente atribuible a la base existente, con curva de atrición real (bajas, tasa de apertura decreciente, desactivación) y separando siempre la base actual del crecimiento futuro. Contrastes: coste de reposición (CPL medio × contactos activos, ajustado por calidad) como suelo, y valor por contacto activo en transacciones comparables. Nunca valores contactos inactivos al mismo precio que compradores recurrentes: segmenta por comportamiento (RFM) y aplica un margen distinto a cada segmento.

**Audiencia en redes sociales.** No es propiedad de la empresa: es un activo alquilado a una plataforma, sujeto a cambios de algoritmo y a cierre de cuenta. Se valora con un descuento significativo por riesgo de plataforma y se documenta la migración de esa audiencia a canales propios como mitigante.

**Contenido y autoridad editorial.** Se valora por el tráfico orgánico y las conversiones que sostiene, con coste de reposición del corpus como suelo.

**Datos propietarios y algoritmos entrenados.** Enfoque de coste como suelo, MEEM si se puede aislar la mejora de conversión, márgen o eficiencia que producen. Comprueba la base legal del tratamiento de datos: un activo de datos sin base jurídica sólida es un pasivo contingente disfrazado de intangible.

**Certificaciones y registros sanitarios.** With-and-Without sobre el tiempo y el coste de obtención, más el valor de la barrera de entrada durante ese periodo.

---

## 12. Errores que hunden un informe

1. **Doble contabilización** — valorar la marca por RFR y además la cartera de clientes por MEEM sin cargar la marca como activo contributivo.
2. **Clientes futuros dentro del MEEM** — la cartera existente es lo que se valora; el crecimiento es goodwill.
3. **Misma tasa de descuento para todos los intangibles** — el riesgo de una marca consolidada y el de una tecnología preclínica no son iguales, y la WARA lo delatará.
4. **TAB aplicado sin analizar si la operación permite el step-up fiscal.**
5. **Royalty aplicado sobre toda la facturación** cuando parte de los ingresos no depende de la marca.
6. **Vida útil por convención** ("5 años") sin análisis de atrición ni de vida legal.
7. **Ignorar los gastos de mantenimiento** de la marca (publicidad) o de la patente (tasas de renovación, defensa jurídica).
8. **Omitir la comprobación de titularidad** de marcas, patentes y código.
9. **No reconciliar WARA con WACC** — la ausencia de esta tabla es la primera señal de un PPA hecho sin método.
10. **Vender el fondo de comercio como si fuera un activo valorado** — es un residuo, y presentarlo de otro modo destruye la credibilidad del resto del informe.
