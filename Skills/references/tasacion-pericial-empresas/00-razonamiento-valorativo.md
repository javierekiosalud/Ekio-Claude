# 00 — Razonamiento valorativo

> El valor no se calcula: se argumenta. El modelo es la forma disciplinada de escribir un argumento, no su sustituto. Si eres capaz de construir el Excel pero no de defender en tres frases por qué esta empresa vale lo que dices, no tienes una valoración: tienes una hoja de cálculo.

Esta referencia es el núcleo del oficio. Léela antes que ninguna otra, y vuelve a ella cuando el modelo empiece a producir números que no sabes explicar.

## Índice
1. Qué es realmente una valoración
2. Diagnóstico del negocio antes del modelo
3. Narrativa y números
4. El árbol de interrogación
5. Pensar en distribuciones, no en puntos
6. Visión exterior y clases de referencia
7. Razonar sobre intangibles y fondo de comercio
8. Patologías del valorador
9. Cuándo desconfiar del propio modelo
10. Ejemplo de razonamiento completo

---

## 1. Qué es realmente una valoración

Una valoración es **una afirmación sobre el futuro, condicionada a un punto de vista, expresada en unidades monetarias**. Tres consecuencias que ordenan todo el trabajo:

**Es una afirmación sobre el futuro.** Por tanto es falsable y estará equivocada. El objetivo no es acertar el número, sino que el razonamiento sea correcto dada la información disponible a la fecha de valoración. Un perito juzgado por el resultado y no por el proceso es un perito mal juzgado — pero el proceso tiene que estar escrito para poder juzgarlo.

**Está condicionada a un punto de vista.** No existe "el valor" de una empresa. Existe el valor para un comprador financiero, para un comprador industrial con sinergias, para un socio que se separa, para Hacienda. La misma empresa vale distinto según quién pregunte y por qué. Antes de valorar, sabe *desde dónde* estás mirando.

**Se expresa en dinero.** Y el dinero da una falsa sensación de objetividad. Un rango de 1,4 a 2,1 millones comunica honestamente la incertidumbre. "1.847.362 €" comunica una precisión que no existe y que, en cuanto alguien lo advierta, destruirá tu credibilidad sobre todo lo demás.

### La pregunta que ordena todo el encargo

Antes de pedir una sola cuenta anual, responde: **¿qué decisión se va a tomar con este número, y quién la toma?**

- Un fundador que negocia una ronda necesita entender qué hipótesis defiende su precio y cuál es su suelo de negociación. No necesita un dictamen; necesita munición y un límite.
- Un juez que reparte entre socios enfrentados necesita un criterio motivado que resista la contradicción del perito contrario. La sofisticación técnica importa menos que la trazabilidad.
- Un auditor necesita coherencia con el marco contable y con lo que hizo el año pasado.
- Un comprador necesita saber qué está pagando de más y qué riesgos asume.

El mismo modelo sirve para los cuatro. El informe, no.

---

## 2. Diagnóstico del negocio antes del modelo

Antes de proyectar, entiende. Un modelo construido sobre un diagnóstico erróneo es preciso y falso a la vez, que es la peor combinación posible.

### 2.1 ¿De dónde sale el dinero, realmente?

No la respuesta de la web corporativa: la mecánica. ¿Qué tiene que ocurrir, uno por uno, para que entre un euro? ¿Quién paga, cuánto, con qué frecuencia, por qué a esta empresa y no a otra, y qué pasaría si mañana subiera el precio un 10%?

Reconstruye la cadena completa: **atención → interés → conversión → margen → repetición**. En cada eslabón pregunta quién controla la variable. Si el eslabón crítico lo controla un tercero (una plataforma, un distribuidor, un regulador, un fabricante único), acabas de encontrar el riesgo principal del negocio, y probablemente no esté en las proyecciones.

### 2.2 ¿Hay ventaja competitiva y cuánto dura?

El DCF asume implícitamente que los retornos sobre el capital se mantienen por encima del coste del capital durante todo el horizonte. Esa es la hipótesis más agresiva de cualquier modelo y casi nunca se discute. Discútela.

| Fuente de ventaja | Pregunta que la pone a prueba |
|---|---|
| Marca | ¿El cliente paga más por lo mismo? Compara precio medio contra alternativas funcionalmente equivalentes. Si no hay prima de precio, no hay marca: hay logotipo. |
| Costes de cambio | ¿Qué pierde el cliente al irse? Si la respuesta es "nada", el churn futuro será peor que el histórico. |
| Efectos de red | ¿El producto mejora para el usuario N cuando entra el N+1? Casi nunca es cierto, y casi siempre se afirma. |
| Escala | ¿El coste unitario baja con el volumen y el competidor no puede replicarlo? |
| Propiedad industrial | ¿La patente impide realmente entrar, o solo impide copiar literalmente? Un competidor rodeando la reivindicación no infringe. |
| Regulación | ¿La barrera protege o solo retrasa? ¿Y cuánto queda de vigencia? |

La conclusión de este análisis se traduce en dos números concretos del modelo: **cuántos años sostienes márgenes superiores al sector** y **cuál es el ROIC de convergencia a perpetuidad**. Si no puedes justificar ambos con lo anterior, la g perpetua es un deseo.

### 2.3 ¿En qué punto del ciclo está?

| Fase | Dónde está el valor | Método que manda | Error típico |
|---|---|---|---|
| Idea / prototipo | Opcionalidad | Escenarios, opciones reales, cualitativos | DCF con precisión falsa |
| Tracción temprana | Unit economics y su repetibilidad | Escenarios, cohortes, VC method | Extrapolar la mejor cohorte |
| Escalado | Capacidad de reinvertir con retorno | DCF con CAPEX y circulante bien modelados | Olvidar que crecer consume caja |
| Madurez | Flujo sostenible y barrera | DCF y múltiplos | Proyectar el crecimiento pasado |
| Declive | Activos y opción de liquidación | Patrimonial, liquidativo | Negar el declive en las hipótesis |

La incoherencia más frecuente en el mercado: aplicar herramientas de madurez a empresas en tracción temprana, o al revés, justificar una valoración de madurez con la narrativa de una empresa en escalado.

### 2.4 Unit economics: el test que no miente

En negocios recurrentes o de repetición, un solo bloque de datos revela si el crecimiento crea o destruye valor:

```
Margen de contribución por cliente
CAC por canal (no medio: por canal)
Periodo de recuperación del CAC
Retención por cohorte
LTV / CAC
```

Si el LTV/CAC es sólido y el payback corto, crecer crea valor y hay que financiarlo: el modelo debe reflejar reinversión agresiva. Si el payback es largo, cada cliente nuevo destruye caja y el crecimiento proyectado es una máquina de quemar dinero disfrazada de plan. **Esto se ve en las cohortes, no en la cuenta de resultados**, porque la cuenta de resultados mezcla el margen de los clientes antiguos con el coste de captar los nuevos.

---

## 3. Narrativa y números

Toda valoración contiene una historia. Los modelos que fallan son los que tienen la historia escondida en supuestos que nadie hizo explícitos.

### 3.1 El ciclo

```
Historia → Comprobación (posible / plausible / probable) → Traducción a drivers → Valor → Contraste → Revisión de la historia
```

**Escribe primero la historia, en un párrafo, sin números.** Qué es esta empresa, a quién sirve, por qué gana, contra quién compite, qué tiene que salir bien y qué la mataría. Si no puedes escribirlo, no entiendes el negocio lo suficiente como para valorarlo.

**Somete la historia a tres filtros, en orden:**
- *¿Es posible?* Casi todo lo es. Filtro débil.
- *¿Es plausible?* ¿Hay evidencia de que algo así ocurra en este sector? Aquí muere la mayoría de las historias de fundador.
- *¿Es probable?* ¿Con qué frecuencia ocurre en la clase de referencia? Aquí muere casi todo lo demás.

**Traduce cada elemento de la historia a un driver concreto:**

| Elemento de la historia | Driver del modelo |
|---|---|
| Mercado y penetración alcanzable | Ingresos y crecimiento |
| Ventaja competitiva y poder de precio | Margen operativo |
| Intensidad de capital del crecimiento | CAPEX y circulante |
| Durabilidad de la ventaja | Años de exceso de retorno y g |
| Fragilidad del negocio | Tasa de descuento y escenarios |

**Regla de coherencia narrativa:** cada hipótesis numérica debe corresponder a una frase de la historia, y cada frase relevante de la historia debe aparecer en algún número. Un modelo con un margen creciente que no se apoya en ninguna ventaja explicada es un modelo con una mentira dentro.

### 3.2 Ataque a la propia historia

Antes de aceptarla, haz el ejercicio contrario. Escribe la historia del fracaso: ¿cuál es el camino más corto para que esta empresa valga cero en tres años? Si ese camino es corto y transitable, el rango tiene que ser mucho más ancho y la prima de riesgo mayor, digan lo que digan los comparables.

---

## 4. El árbol de interrogación

El instrumento de trabajo del perito no es el Excel: son las preguntas. Cuatro técnicas que funcionan en cualquier encargo.

### 4.1 Inversión — "¿Qué tendría que ser cierto?"

En lugar de preguntar "¿cuánto vale?", pregunta "para que valga X, ¿qué tiene que pasar?". Despeja el modelo hacia atrás desde el precio propuesto y obtén las hipótesis implícitas. Después contrástalas con la realidad.

Ejemplo de razonamiento: un pre-money de 1,7 M€ con una facturación de 500 K€ implica un múltiplo de 3,4x ventas. Para que un inversor obtenga su retorno objetivo del 50% anual en cinco años, la empresa tendría que valer unos 13 M€ a la salida. A un múltiplo de salida razonable en el sector, eso son entre 4 y 6 M€ de facturación, es decir multiplicar por diez en cinco años, esto es, un 58% anual compuesto. **La pregunta ya no es si 1,7 M€ es mucho o poco: es si existe un plan creíble para multiplicar por diez, y qué capacidad instalada, equipo y capital hacen falta para ello.** Así se convierte una discusión de precio en una discusión de sustancia, que es donde el perito aporta valor y donde el fundador gana o pierde la negociación.

### 4.2 Los cinco porqués sobre cada hipótesis crítica

"El crecimiento será del 30%." ¿Por qué? "Porque crecimos así el año pasado." ¿Por qué crecisteis así? "Porque duplicamos la inversión en publicidad." ¿Y podéis volver a duplicarla? "No, no hay caja." Entonces el 30% no está sostenido. Tres preguntas han bastado para localizar el punto donde el plan se rompe.

### 4.3 Pre-mortem

Sitúate tres años después, el negocio ha fracasado, y escribe la crónica de por qué. Este ejercicio destapa riesgos que la pregunta directa "¿qué riesgos veis?" nunca destapa, porque elimina la resistencia psicológica a admitir la posibilidad del fracaso.

### 4.4 Búsqueda de lo ausente

Lo que más informa suele ser lo que no está: la métrica que no te enseñan, el ejercicio que falta en la serie, el cliente del que nadie habla, el contrato que "está en trámite" desde hace un año. Cuando pidas información, anota qué llega tarde o incompleto. **La resistencia a entregar un dato es un dato.**

---

## 5. Pensar en distribuciones, no en puntos

Un valor puntual es una distribución de la que solo se ha comunicado un estadístico, y encima sin decir cuál.

**Construye escenarios antes que sensibilidades.** La sensibilidad mueve una variable dejando fijas las demás, lo cual es irreal: si el crecimiento se hunde, el margen también se resiente. El escenario mueve el conjunto de forma coherente con una historia.

Tres escenarios mínimos, cada uno con su narrativa completa y su probabilidad explícita:

| Escenario | Qué historia lo define | Probabilidad |
|---|---|---|
| Adverso | Falla el eslabón crítico identificado en el diagnóstico | |
| Base | Continuidad razonable, sin heroísmos | |
| Favorable | Se materializa la ventaja competitiva descrita | |

El valor esperado es la media ponderada, pero **el rango informa más que la media**. Y si la distribución es muy asimétrica — típico en empresas con una patente, un registro sanitario pendiente o un contrato único —, la media es engañosa y hay que decirlo expresamente: el valor esperado es un número que el negocio nunca valdrá.

**Contra la falsa precisión:** redondea la conclusión al nivel de precisión que el análisis soporta. Si has estimado la prima de riesgo específico a ojo dentro de un rango de dos puntos, tu valor no tiene tres cifras significativas.

---

## 6. Visión exterior y clases de referencia

El error sistemático más caro en valoración de empresas pequeñas y en crecimiento es construir el caso solo desde dentro: el plan, el equipo, el producto, todo lo que hace única a esta empresa. La visión exterior pregunta otra cosa: **¿qué le ocurrió a las empresas que se parecían a esta?**

Antes de aceptar una proyección, busca la clase de referencia y su tasa base:
- ¿Qué porcentaje de empresas de este sector y tamaño alcanza la facturación proyectada en el plazo previsto?
- ¿Cuál es la desviación histórica media entre plan y real en esta empresa? (El dato más predictivo que existe, y casi nadie lo pide.)
- ¿Cuánto tardaron los competidores en llegar a ese hito?

Cuando la visión interior y la exterior discrepan mucho, la carga de la prueba recae sobre la interior: hay que explicar qué hace a esta empresa distinta de su clase, y hacerlo con evidencia, no con convicción. La convicción del fundador es un dato sobre el fundador, no sobre el mercado.

---

## 7. Razonar sobre intangibles y fondo de comercio

Aquí es donde el juicio pesa más que la técnica, porque los métodos de la referencia 03 producen un número para cualquier input que les des.

### 7.1 La prueba del exceso de retorno

Un intangible tiene valor si, y solo si, **genera un retorno superior al que obtendría el mismo capital sin él**. No basta con que exista, esté registrado y haya costado dinero.

Contraste práctico: ¿esta empresa obtiene márgenes o precios superiores a un competidor equivalente sin ese intangible? Si no hay diferencia observable, el intangible puede ser un coste hundido, no un activo. Muchas carteras de patentes valen menos de lo que costaron, y decirlo es parte del trabajo.

### 7.2 Duración, que es donde se juega el valor

En un método de rendimiento, el valor de un intangible depende más de **cuánto dura** que de cuánto genera hoy. Y la duración es una hipótesis, no un dato. Razona sobre ella con evidencia: renovación real de la cartera, ciclo tecnológico observado en el sector, vigencia legal, comportamiento histórico de las cohortes.

### 7.3 El fondo de comercio como confesión

Un fondo de comercio grande admite tres lecturas, y elegir cuál es la correcta es un acto de juicio, no de cálculo:

1. **Hay valor organizativo real** no identificable por separado: sinergias, equipo, sistemas, capacidad de captación. Se sostiene si el ROIC supera de forma persistente al del sector.
2. **No se han identificado bien los intangibles.** Se detecta porque la WARA no reconcilia con el WACC y porque en el inventario faltan activos que el negocio evidentemente tiene.
3. **Se ha pagado de más.** Se detecta comparando el precio con el valor autónomo y comprobando que las sinergias que lo justificaban no eran específicas del comprador o no eran alcanzables.

Un perito con criterio dice cuál de las tres es. Un perito sin criterio deja el residuo y pasa de página.

### 7.4 Marca, comunidad y audiencia: el error de propiedad

Antes de valorar un activo de atención, pregunta quién es su dueño. Una lista de correo con consentimiento es un activo de la empresa. Una audiencia en una red social es un activo alquilado a una plataforma que puede cambiar el algoritmo, restringir el alcance o cerrar la cuenta sin previo aviso, y cuyo valor depende además de una persona concreta que puede irse. Se pueden valorar los tres, pero con tasas de descuento y horizontes muy distintos, y esa diferencia hay que argumentarla, no aplicarla como convención.

---

## 8. Patologías del valorador

Los sesgos no se corrigen conociéndolos; se corrigen con procedimiento. Junto a cada uno, el antídoto operativo.

| Patología | Cómo se manifiesta | Antídoto |
|---|---|---|
| **Anclaje** | El primer número mencionado (precio pedido, ronda anterior) condiciona todo el trabajo | Construye el modelo antes de conocer la cifra objetivo, si es posible. Si ya la conoces, haz explícito el anclaje en el informe y aplica el ejercicio de inversión del §4.1 |
| **Sesgo del pagador** | El informe tiende a favorecer a quien lo encarga, sin mala fe consciente | Redacta una sección con el mejor argumento de la parte contraria antes de concluir |
| **Confirmación** | Se buscan datos que apoyan la tesis inicial | Define los criterios de selección de comparables *antes* de ver sus múltiplos |
| **Supervivencia en comparables** | Solo se comparan cotizadas, que son las que sobrevivieron y crecieron | Amplía con transacciones de empresas medianas y con la tasa base de fracaso del sector |
| **Precisión ilusoria** | Cinco decimales en la beta, tres en la conclusión | Redondea a la precisión que sostiene el input más débil de la cadena |
| **Complejidad defensiva** | Se añaden capas de sofisticación para blindar el informe frente a la crítica | Un modelo que no puedes explicar en cinco minutos a un no financiero es un modelo que no entiendes |
| **Enamoramiento del modelo** | Al aparecer un dato incómodo, se ajusta una hipótesis para "arreglar" el resultado | Deja rastro escrito de cada cambio de hipótesis y de su motivo |
| **Extrapolación** | La mejor cohorte o el mejor trimestre se convierten en la tendencia | Usa la serie completa, incluidos los periodos malos, y explica los outliers |

---

## 9. Cuándo desconfiar del propio modelo

Señales de que el razonamiento se ha roto aunque la hoja de cálculo funcione:

- No puedes explicar en una frase por qué el valor cambia cuando cambias una hipótesis.
- El valor es extremadamente sensible a un parámetro que has estimado con poco fundamento.
- El resultado coincide sospechosamente con lo que esperaba quien te contrató.
- El valor terminal es casi todo el valor: estás valorando el año seis en adelante, sobre el que no sabes prácticamente nada.
- La empresa vale mucho más que empresas parecidas y no sabes decir en qué se diferencia.
- Has cambiado hipótesis hasta que el número "salió bien".
- No sabes qué evidencia te haría cambiar de opinión. Si ninguna te haría cambiar, no estás valorando: estás justificando.

Cuando aparezcan dos o más de estas señales, para el cálculo y vuelve al §2.

---

## 10. Ejemplo de razonamiento completo

*Encargo:* una empresa de dispositivos de consumo con componente sanitario factura 800 K€, crece al 40% anual, vende en directo al consumidor a través de un canal social, tiene un modelo de utilidad concedido y una base de 12.000 contactos. Los socios piden 4 M€.

**Diagnóstico.** El motor de ingresos es la captación en una red social, convertida por contenido del fundador y cerrada por venta consultiva. El eslabón crítico no es el producto: es la atención, y quien la controla es la plataforma y la persona. El margen bruto es alto, lo cual sugiere poder de precio; hay que comprobar si es marca o si es simplemente ausencia de competidor comparable, que es una situación mucho más frágil.

**Ventaja competitiva.** El modelo de utilidad protege una configuración, no la categoría: un competidor con otro diseño entra sin infringir. La barrera real, si existe, es la autoridad del fundador y la base de clientes satisfechos. Eso es una ventaja **transferible solo parcialmente**, lo que empuja hacia arriba la prima por persona clave y hacia abajo el horizonte de exceso de retorno.

**Historia.** "Empresa que ha demostrado que un nicho paga precios altos por una solución que casi nadie ofrece, y que puede escalar si sustituye la captación dependiente del fundador por un sistema de adquisición pagada y una red de prescriptores."

**Filtros.** ¿Posible? Sí. ¿Plausible? Sí, hay precedentes sectoriales. ¿Probable? Aquí está el nudo: la transición de captación orgánica personal a adquisición pagada es exactamente donde fracasan la mayoría de las marcas D2C de nicho, porque el CAC pagado suele ser múltiplos del orgánico y el margen no siempre lo soporta. **Esa transición es el punto donde se decide si la empresa vale 2 o 6 millones.**

**Traducción.** La historia obliga a modelar explícitamente el CAC pagado y su efecto sobre el margen, no a proyectar el crecimiento pasado con márgenes constantes. Escenario adverso: el CAC pagado no funciona, el crecimiento cae al ritmo del canal orgánico. Escenario favorable: funciona a un CAC con payback inferior a seis meses y el crecimiento se financia solo.

**Inversión.** Para justificar 4 M€ con 800 K€ de facturación (5x ventas), un inversor que exija 50% anual necesita una salida en torno a 30 M€ en cinco años, es decir del orden de 10-15 M€ de facturación. Eso significa multiplicar por quince. La pregunta deja de ser el precio: es si existe evidencia, aunque sea de una sola campaña piloto, de que la adquisición pagada funciona a escala.

**Conclusión de razonamiento.** El rango será ancho y asimétrico. La conversación útil con el cliente no es "vale X", sino: *el precio que pides es defendible únicamente en el escenario en el que la adquisición pagada funcione; hoy no hay evidencia suficiente de eso; una campaña piloto de tres meses con datos limpios de CAC y payback vale más para tu valoración que cualquier ajuste que yo pueda hacer en el modelo.*

Eso es lo que distingue a un perito que razona de una calculadora: **saber decir qué información, aún no existente, movería el valor más que todo el análisis disponible.**
