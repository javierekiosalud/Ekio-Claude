# 04 · AUDITORÍA DE CONSISTENCIA + METADATOS KDP

> **Guía de Higiene Electromagnética — El recetario de la energía perdida**
> Elaborado por `libro-kdp-agent`, 26 julio 2026.
> Audita `00_GUION_MAESTRO.md` (v3), `01_CONCEPTO_RECETARIO.md`, `02_BASE_CIENTIFICA_RECETAS.md`, `03_PETICION_FICHA_TECNICA_FABRICA.md`.
> **Nota de honestidad:** en la parte de Amazon no hay ni un dato de ventas, ranking ni volumen de búsqueda inventado. Donde no se puede saber con certeza, está dicho.

---

# RESUMEN EJECUTIVO — LOS 8 QUE HAY QUE ARREGLAR YA

| # | Hallazgo | Gravedad |
|---|---|---|
| 1 | **`01_CONCEPTO_RECETARIO.md` está derogado en un 40 %** y sigue leyéndose como fuente. Contiene el título antiguo, tres propuestas de título ya cerradas, la estructura de 104 págs, 18 recetas con otros nombres y otra numeración | 🔴 Bloqueante |
| 2 | **Colisión de numeración de recetas entre `01` y `02`.** "Receta 7" en `02` = los niños; "receta 7" en el guión v3 = la cabeza clara. Un redactor se va a equivocar | 🔴 Bloqueante |
| 3 | **Restos de dosis dentro de bloques que prohíben las dosis.** `02` § 0.1 dice "no se publica ninguna cifra" y tres líneas después publica la fórmula de conversión "para el libro". `01` mecanismo 2 dice "recuadro con la dosis exacta" | 🔴 Bloqueante |
| 4 | **El presupuesto de páginas no cuadra.** 19 recetas × 2 = 38 págs deja **cero** espacio para portadillas de sección; y "capítulos de 8–12 págs" es incompatible con 6 capítulos en 34 págs | 🟠 Alta |
| 5 | **Objetivo de palabras sobreestimado en ~4.000.** ~24.000 palabras no caben en 102 págs ilustradas | 🟠 Alta |
| 6 | **La Dra. Elena no tiene sitio físico en la ficha de receta.** "Ciencia en 60 segundos" no existe en ninguna plantilla | 🟠 Alta |
| 7 | **Cuatro recetas se solapan sobre la noche** y dos sobre el router. Repetición garantizada si no se delimita ahora | 🟠 Alta |
| 8 | **Nadie ha definido el mecanismo de captación.** El libro es la herramienta de embudo hacia electrosmogespana.com y no hay ni un QR, ni una landing, ni un lead magnet en ningún documento | 🟠 Alta |

---

# PARTE 1 — AUDITORÍA DE CONSISTENCIA

## 1.1 Restos del título antiguo

| Fichero | Línea aprox. | Qué dice | Qué debe decir |
|---|---|---|---|
| `01` | 2 | `## Electrobiofotónica en formato libro de cocina` | `## El recetario en formato libro de cocina` |
| `01` | § 7 completa | Tres propuestas A/B/C de título, con recomendación de "Electrobiofotónica: El recetario de la energía perdida" | **Borrar la sección** y sustituirla por una línea: "Título cerrado 26/jul. Ver `00_GUION_MAESTRO.md` § 0." Dejar el histórico solo enturbia |
| `01` | § 6 y § 13 | "Título/subtítulo definitivo (ver § 7)" / "Javier valida cuál de los 3 títulos resuena" | Marcar `[x]` cerrado |
| `02` | 2 | "Libro *Electrobiofotónica* — esqueleto científico…" | "Libro *Guía de Higiene Electromagnética*…" |
| `02` | 433 | **"*Electrobiofotónica* es el título del libro."** | "*Electrobiofotónica* es el **método** que el libro enseña. Aparece en el aperitivo y en la contraportada, **nunca en la portada**" |
| `03` | 4 y 9 | "libro *Electrobiofotónica*" | Título nuevo |

**Nota sobre la carpeta:** `LIBRO_ELECTROBIOFOTONICA/` puede quedarse como nombre interno de proyecto. Renombrarla rompe rutas en cuatro documentos y en dos agentes por cero beneficio. Añadir una línea en `00` que lo aclare y listo.

**Ojo — el cambio de título mejora la posición legal, pero no la elimina.** Sacar el término de la portada baja la exposición; la declaración en el aperitivo **sigue siendo obligatoria** porque el término aparece en la contraportada, en el capítulo de la Despensa y en el marketing. El párrafo de declaración no se toca.

## 1.2 Restos de dosis, minutos y distancias (decisión derogada)

Estos son los peores, porque están **dentro de los bloques que prohíben las dosis** y un redactor de buena fe los va a tomar como instrucción.

| Fichero | Qué dice | Acción |
|---|---|---|
| `02` § 0.1, líneas 43-50 | *"Lo que sí podemos publicar: 1. La dosis diana en J/cm². 2. La fórmula de conversión. 3. Rangos de tiempo orientativos"* + **"Fórmula de bolsillo para el libro"** | 🔴 Retitular: **"Fórmula de bolsillo para el MANUAL"**. Y borrar la lista de tres puntos: ya no se publica ninguna de las tres |
| `01` § 10, mecanismo 2 | *"**Tipo:** recuadro visual en cada receta con la dosis exacta"* — y dos líneas después dice lo contrario | 🔴 "recuadro con el **principio** de dosis, sin ninguna cifra" |
| `01` § 8, R08 subtítulo | *"Regeneración de piel, **heridas, cicatrices**: infrarrojo cercano **a distancia de mano**"* | 🔴 Doble infracción: patologías + instrucción de distancia. Borrar el subtítulo entero |
| `01` § 8, R09 subtítulo | *"**Protocolo completo**: cuerpo + casa + luz + hora"* | 🟠 "Protocolo" es vocabulario derogado. → *"Todo junto: el cuerpo, la casa, la luz y la hora"* |
| `01` § 3, plantilla | `1 Ekio Light Core` en la lista de ingredientes, sin icono de balda | 🟡 Añadir 🏺 y actualizar la plantilla a la de v3 |

### Regla que falta y hay que escribir en `00`
Nadie ha distinguido las dos clases de cifra, y sin la distinción el libro se queda mudo o se pasa de la raya:

> **SÍ llevan cifra:** el sol (minutos al aire libre), la oscuridad, la distancia a un router o a un móvil, la hora de apagado, los días del reto. Son hábitos y física elemental.
> **NO llevan cifra jamás:** cualquier cosa referida a un panel Ekio Light — minutos de sesión, centímetros de distancia, J/cm², sesiones por semana, longitud de sesión por zona.

Sin esta regla escrita, la primera receta que se redacte volverá a meter minutos de panel.

**Precisión científica asociada:** `01` y `00` dicen "10 min de sol al amanecer". `02` § Receta 4-A dice **"10–30 min de luz exterior en la primera hora tras despertar"**. No es lo mismo: quien se levanta a las once no tiene amanecer. Unificar a *"de diez a treinta minutos de luz exterior en la primera hora del día, sea la hora que sea"*. Además esto abre limpiamente la puerta al argumento comercial honesto (turnos, invierno, ciudad) sin forzarlo.

## 1.3 Restos del Bio Spectrum 11 donde no toca

El libro está limpio en lo grueso: la decisión está bien reflejada en los tres documentos. Quedan cuatro trazas finas, todas por la vía del **935 nm**, que es una longitud exclusiva del Bio Spectrum 11:

| Fichero | Traza | Acción |
|---|---|---|
| `02` línea 161 (tabla de alérgenos 🎨) | *"el IR profundo **940/935 nm** es calórico"* | Dejar solo **940 nm** en todo lo que viaje al libro. El 935 solo existe en el panel excluido |
| `02` línea 235 (Receta 3, alérgenos) | *"melasma: contraindicado el IR profundo **940/935 nm**"* | Ídem |
| `03` § 10 | *"el infrarrojo profundo de **940/935 nm** es calórico"* | Es doc de producto, puede quedarse — pero marcar que el 935 no va al libro |
| `02` Receta 5, línea 286 | *"El **Bio Spectrum 11** no lo lleva"* | Correcto como corrección interna de mapeo. **Marcar explícitamente "no publicable"** para que no se cuele como dato curioso |

**Y una que no es traza sino riesgo abierto:** `03` dice, con razón, que sacar el Bio Spectrum 11 del libro **no resuelve nada del frente de producto** (IEC 62471, expediente técnico). Eso está bien recogido y no es asunto editorial, pero conviene que `00` lo diga en una línea, porque la lectura rápida de "Bio Spectrum fuera ✅" invita a creer que el problema se cerró.

## 1.4 Contradicciones estructurales entre documentos

| Punto | `00` v3 | `01` | Veredicto |
|---|---|---|---|
| Estructura | Despensa 34 / Recetario 38 / **≈102** | Despensa 30 / Recetario 44 / **≈104** | Gana v3. Borrar § 4 de `01` |
| Nº de recetas | **19** | **18** ("LOS 18 NOMBRES"), y § 4 insinúa 20 | Gana v3 en autoridad, pero ver § 1.6: **18 es el número correcto** |
| Nº de mecanismos | "LOS **4** MECANISMOS" | § 2 "LOS **6** MECANISMOS" y § 10 "LOS **8** MECANISMOS" | Tres recuentos distintos. Fijar: **4 obligatorios + 4 complementarios**, una sola lista, en `00` |
| Capítulos de Despensa | 6, con títulos nuevos ("Eres un ser eléctrico y luminoso", "Balda 1", "Balda 2"…) | 5+intro, con otros títulos ("Los tres ingredientes", "El etiquetado que nadie lee: tipos de CEM"…) y **"La cata" como capítulo D5**, cuando en v3 La Cata es una parte propia | Gana la lista de v3. **Pero recuperar los subtítulos culinarios de `01`**, que v3 perdió y son buenos: *"La carta del restaurante que nadie te había dado"*, *"Saber lo que hay en el bote antes de abrirlo"*, *"Lo que tenía el brasero de la mesa camilla y no tiene el radiador"* |
| Campo de cabecera de ficha | **"Para cuántos"** | **"Para quién"** | "Para cuántos". Es un mecanismo con nombre propio (`01` § 10, mecanismo 7) |
| Spiro Card | "1 Spiro Card · 1 Ekio Light" | "1 Spiro Card (**por persona con móvil**)" | Gana `01`. La regla "una por persona con móvil" está en la memoria del proyecto y v3 la ha perdido |

### Referencias cruzadas rotas en `01`
- § 10 mecanismo 5 (Maridaje) remite a *"R01 (El caldo del sueño reparador)"* — **esa receta ya no existe**; se fusionó en "El sueño de los justos".
- § 12 (arco narrativo) usa los tramos **R01-R05 / R06-R10 / R11-R16 / R17-R18**. Con 18-19 recetas y otro orden, los cuatro tramos son falsos.
- § 4 lista *"La receta del mayor"* como receta propia; en v3 no existe (la absorbe "El puchero del abuelo escéptico"). Decidir formalmente: **no existe**.
- § 4 lista *"La receta del deportista"* (recuperación post-entreno = Receta 8 de `02`). **En v3 no tiene destino.** Ver § 1.7.

**Acción de fondo:** renumerar una sola vez, en `00`, como **R01…R18**, y prohibir que cualquier otro documento numere recetas. `02` pasa a numerar sus ocho bloques científicos como **O1…O8** ("objetivos"), no como "Recetas 1-8". Esto resuelve el hallazgo 🔴 nº 2 de un golpe.

## 1.5 Presupuesto de páginas — la cuenta de verdad

### El problema de aritmética
```
19 recetas × 2 págs = 38 págs   ← justo el presupuesto de v3
+ 4 portadillas de sección       = 42 págs   ← +4 sin sitio
```
Y hay un problema de imprenta encima: **cada receta es una doble página** (ficha a la izquierda, ilustración a la derecha) y por tanto **debe empezar en página par**. Una portadilla de sección de 1 página rompe la paridad de todas las recetas siguientes. Portadillas de sección → 2 págs o ninguna.

### Solución recomendada (cuadra exacto, y además es mejor concepto)
- **18 recetas** × 2 págs = **36 págs**
- **+ 2 págs de apertura del Recetario: "LA CARTA"** — la doble página que lista las 18 recetas por sección, como la carta de un restaurante. Sustituye a las cuatro portadillas, mantiene la paridad y es exactamente lo que el lector de un libro de cocina busca al abrirlo.
- **Total 38 págs.** Se respeta el presupuesto de v3 sin tocar nada más.

### Presupuesto total y lo que falta contar
```
EL APERITIVO ....................   6
LA DESPENSA .....................  34
LA CATA .........................  10
EL RECETARIO (LA CARTA + 18) ....  38
EL MENÚ DEL MES .................   8
LA SOBREMESA + apéndices ........   6
                                  ───
cuerpo del libro                   102 ✓
+ preliminares (portadilla, créditos
  y disclaimer legal, índice 2 pp,
  dedicatoria)  ..................   6
                                  ───
PÁGINAS REALES DE IMPRENTA         108
```
**Los preliminares no estaban contados en ningún documento.** El libro que se sube a KDP tiene **108 páginas**, no 100. No es un problema: 108 da un lomo con presencia (~6 mm en B/N crema), sostiene mejor el precio y sigue en el tramo barato de impresión. Pero hay que decidirlo ahora porque **el ancho del lomo depende del número final de páginas** y el diseño de portada se hace con esa cifra.

### Contradicción de densidad: "capítulos de 8–12 págs" es imposible
La guía de estilo exige capítulos de 8–12 págs. La Despensa tiene **6 capítulos en 34 págs = 5,7 págs/capítulo**. Mínimo exigido: 48 págs. Incompatible.

**Veredicto:** la regla de 8–12 págs venía de la estructura antigua de 10 capítulos y está derogada de hecho. Sustituirla por:
> **Capítulos de La Despensa: 5–6 págs.** Capítulos de La Cata y El Menú del Mes: libres. Recetas: 2 págs exactas, sin excepción.

Además: la regla nueva es **mejor** para este libro. Un capítulo de 5 páginas en un recetario se lee de pie en la cocina; uno de 12 no.

### Conteo de palabras — el objetivo está inflado en ~4.000
A 250 palabras/página, 102 págs darían 25.500 palabras. Pero un libro ilustrado no tiene 102 páginas de texto:

| Bloque | Págs | Págs con texto real | Palabras estimadas |
|---|---|---|---|
| Aperitivo | 6 | 5 | 1.250 |
| La Despensa | 34 | 30 (4 láminas a página completa) | 7.500 |
| La Cata | 10 | 7 (plantilla de mapa de calor ocupa 2-3) | 1.750 |
| El Recetario | 38 | 18 fichas densas (≈340 pal.) + 18 págs de ilustración con pie (≈70 pal.) + LA CARTA | 7.600 |
| El Menú del Mes | 8 | 8, pero son checklists | 1.200 |
| La Sobremesa + apéndices | 6 | 6 (FAQ, glosario, bibliografía) | 1.400 |
| | | | **≈ 20.700** |

**Fijar el objetivo en 20.000–21.000 palabras.** Si se escriben 24.000, el libro sale a **~118 páginas** y hay que rehacer el presupuesto. Es una diferencia de 16 páginas: no es un detalle de estilo, es el lomo, el coste de impresión y el precio mínimo.

## 1.6 Solapes que van a producir repetición

Cuatro recetas tocan la noche y dos el router. Si no se delimita ahora **por escrito en `00`**, se escribirán tres veces las mismas cuatro frases sobre el wifi del dormitorio.

| Recetas que chocan | Delimitación obligatoria |
|---|---|
| R01 El apagón de las nueve · R12 El sofrito del salón | R01 = **el gesto diario**: qué se apaga y a qué hora. R12 = **la configuración permanente**: dónde está el router, cómo se cablea, qué se desenchufa para siempre. R01 es una rutina; R12 es una tarde de trabajo que se hace una vez |
| R02 La cena a oscuras · R03 La sobremesa sin pantallas | **Fusionar.** Son la misma escena — la mesa después de cenar. Una sola receta: *"La cena a oscuras y la sobremesa que la sigue"*. Esto libera el hueco que necesita R-nueva (§ 1.7) |
| R06 El sueño de los justos · R11 La mise en place del dormitorio | R11 = **el cuarto como objeto físico**: qué hay, qué se saca, dónde está la cama. R06 = **la receta maestra** que no repite nada y remite: cuerpo + casa + luz + hora, con maridaje explícito a R01, R02 y R11. R06 es el índice del libro disfrazado de receta, y así debe escribirse |
| R16 Los niños · R17 El adolescente | R16 = **cuarto y decisiones que toman los padres**, cero negociación (el niño no negocia). R17 = **negociación**, cero imposición. Si R17 impone, deja de funcionar |

## 1.7 Recetas cuya premisa ya no funciona sin protocolos

### "La receta de la fuerza" (R09) — **sobrevive, pero hay que reencuadrarla**

Nació de `02` O2 (pre-ejercicio), que es el bloque **mejor sustentado** del capítulo científico. Sin dosis, ¿qué queda? Más de lo que parece:

- El hallazgo contraintuitivo **"antes, no después"** no necesita ni una cifra, y es el mejor golpe de credibilidad del libro entero: va contra el uso intuitivo y contra lo que vende la competencia.
- Hábito puro: a qué hora entrenas respecto a la luz del día; por qué entrenar a las once de la noche con focos y pantallas te cuesta el sueño de esa noche; el calentamiento como ritual.
- Truco de la abuela obvio: la gente del campo no calentaba con luz, calentaba trabajando; y no entrenaba de noche porque no había luz.

**Veredicto: se queda. Cambia de nombre y de subtítulo.**
- ❌ `01`: *"La receta de la fuerza: guiso de recuperación muscular"* / *"Lo que hacen los que entrenan en serio y la ciencia ya no puede ignorar"* — el subtítulo es vendedor y sobreafirma ("la ciencia ya no puede ignorar" es exactamente lo que un libro con semáforo no puede decir de algo que es 🟡).
- ✅ **"El guiso del que entrena"** — *"Antes, no después: el detalle que casi todo el mundo hace al revés"*.
- ✅ **Y absorbe la Receta 8 de `02` (recuperación post-entreno)**, que en v3 se había quedado huérfana. Una sola receta, dos momentos, y el momento honesto gana. Así no se pierde el mejor "matiz incómodo" del capítulo científico.

### "El alivio lento: guiso de domingo" (R10) — **la más problemática del libro**

Nació de `02` O6, que el propio documento etiqueta como *"la receta con la MEJOR evidencia y el PEOR encaje legal"* y *"ALERTA LEGAL MÁXIMA — el mayor riesgo del libro"*. Sin dosis **y** sin poder nombrar patología (artrosis, cervicalgia, dolor crónico están todos en la lista 🔴), lo que queda de accionable es casi nada: "confort articular" y "si te duele, ve al médico". Eso no es una receta, es un disclaimer de dos páginas.

**Veredicto: no sobrevive en su forma actual. Dos salidas, y recomiendo la primera.**

**Opción A (recomendada) — reformular hacia el hábito, no hacia el síntoma.**
> **"El guiso de las cervicales de pantalla"** — *"Ocho horas mirando abajo. La receta no es una lámpara: es levantarse"*

Deja de ser una receta de dolor y pasa a ser una receta de **postura, horas de pantalla, calor y movimiento**. Todo hábito, todo gratis, todo verificable. El truco de la abuela se escribe solo (el paño caliente, la manta eléctrica, levantarse a poner la lavadora cada media hora — que es literalmente por qué las abuelas no tenían cervicales de oficina). La luz entra como ingrediente de la balda 3, sin protagonismo y sin cifras. Y la línea obligatoria de `02` — *"un dolor que persiste, se intensifica o te despierta por la noche necesita un diagnóstico médico, no una lámpara"* — cabe entera y suena a honestidad, no a letra pequeña.

Con esto el riesgo legal baja de máximo a bajo **y la receta gana**, porque lo que de verdad le pasa al lector no es que tenga artrosis: es que lleva ocho horas con el cuello a treinta grados.

**Opción B (si el revisor legal veta incluso A) — sustituir por una receta que el libro no tiene.**
> **"El caldo del turno de noche"** — *"Para quien trabaja cuando el resto duerme"*

100 % hábito, evidencia circadiana sólida (Brainard 2001 🟢), sin una sola patología nombrada, y es **el mejor argumento comercial honesto que existe para un panel**: "no sustituye al sol; te da lumbre cuando no hay sol" es literalmente cierto para quien sale del trabajo a las siete de la mañana. Enfermeras, hostelería, seguridad, fábrica: un público grande, mal atendido y que compra.

**Mi recomendación de conjunto:** aplicar A **y** meter B en el hueco que libera la fusión R02+R03. El recetario queda con las dos mejores recetas nuevas del proyecto sin salirse de 18.

### Regla de semáforo que falta y es la que evita el accidente
`01` R10 lleva *"Con evidencia 🟢"*. Eso es exactamente el error que `02` advierte: la evidencia 🟢 está en **artrosis de rodilla tratada con láser calibrado en consulta**, no en lo que el lector va a hacer en su salón con un panel LED.

> **Regla, a escribir en `00`:** el semáforo califica **lo que el lector va a hacer**, no la literatura en abstracto. Si la evidencia buena es clínica y con láser, y la receta es doméstica y con LED, el semáforo de la receta es **🟡**, y el 🟢 se cita aparte y etiquetado como contexto científico.

Sin esta regla el libro pondrá 🟢 en la receta con más riesgo legal del proyecto.

## 1.8 Veredicto sobre los dos nombres marcados

### "La papilla del adolescente digital" → **fuera, y también "El menú del adolescente"**

Es condescendiente y no de forma discutible: **"papilla" es literalmente comida de bebé**, aplicada a alguien de quince años, en un libro cuya propia guía de estilo exige que Leo sea irónico *"sin resultar condescendiente con los jóvenes"*. El nombre incumple una regla explícita del proyecto. Y "adolescente digital" es lengua de suplemento dominical: etiqueta a una persona por el aparato que usa, que es exactamente lo que el chaval detecta y rechaza.

"El menú del adolescente" (propuesta v3) **es correcto pero plano** — no dice nada. Y hay un problema más fino: el libro entero está construido sobre *negociar* con Leo (`01` § 12: "la resistencia juvenil. Negocia todo"). Un "menú" es algo que se le pone delante. Un menú no se negocia.

> ✅ **Veredicto: "El pacto del adolescente"** — *"Lo que Leo no quiere oír y lo que sí está dispuesto a negociar"*

"Pacto" respeta al chaval, describe con exactitud lo que la receta hace, y encaja con el arco (Leo cede por accidente al final). Si Javier quiere jugar seguro con el registro culinario: **"La mesa del adolescente"** funciona y no infantiliza. **"El menú del adolescente" queda como tercera opción, no como primera.**

### "La matanza del wifi" + icono de hacha → **fuera, por dos razones y no una**

1. **Contradice la tesis del libro, no solo el tono.** El encuadre central de v3 es: *"estos ingredientes no son veneno. Son ingredientes fuertes — como la sal. Nadie tira la sal de la cocina."* Una matanza con hacha es exactamente tirar la sal. El libro pasaría 34 páginas explicando que el wifi es sal y luego titularía una receta con un hacha clavada en el router. El lector no perdona esa clase de incoherencia: la registra como que una de las dos cosas es marketing.
2. **Nadie mata su wifi.** Si una receta pide algo que el lector sabe que no va a hacer, no pierde esa receta: pierde la credibilidad de la siguiente.

> ✅ **Veredicto: "El repaso de la despensa"** (propuesta v3) — *"Una vez al año se revisa lo que hay. Se tira lo caducado y se ordena el resto"*
> **Icono:** despensa abierta con una lista y un lápiz. Sin hacha, sin señal de wifi tachada, sin nada roto.

**Pero el guiño de la matanza del cerdo era bueno y no hay que perderlo — hay que bajarlo de nivel.** Funciona perfectamente **dentro del texto**, donde es una anécdota y no una instrucción:

> *"En mi pueblo, una vez al año se hacía la matanza. Se juntaba la familia, se revisaba la despensa entera y se decidía qué duraba el invierno y qué no. Esto es lo mismo, pero con enchufes."*

Ahí el guiño festivo cumple su función (comunidad, ritual anual, sin dramatismo) sin comprometer ni el título, ni el icono, ni la tesis. Y hay que actualizar el mecanismo 8 de `01` § 10, que hoy sigue describiendo la matanza como título y como icono.

## 1.9 Nombres de receta — coherencia del sistema

Tres de los diecinueve nombres de v3 usan la fórmula perezosa **"La receta de…"** mientras el resto son objetos o actos de cocina. En un recetario eso se nota en el índice, que es lo primero que se ve.

| Actual | Propuesta | Por qué |
|---|---|---|
| El paseo del amanecer | **El desayuno de luz** | El libro **ya tiene** el mecanismo escrito: v3 balda 1 dice de la luz azul *"sirve para el desayuno, no para la cena"*. El nombre cierra el círculo con una metáfora que el lector ya ha leído. Además evita el error de "amanecer" (§ 1.2: es la primera hora tras despertar, no el amanecer) |
| La receta de la cabeza clara | **El consomé de la cabeza clara** | Un consomé es, por definición, un caldo **claro**. El juego se paga solo |
| La receta de la fuerza | **El guiso del que entrena** | Ver § 1.7 |
| La receta de los niños | **El plato de los niños** | Registro culinario, y hace pareja con "El puchero del abuelo". "Papilla" o "puré" repetirían el error de § 1.8 |

Y confirmar la resolución de v3 de **eliminar "El caldo del sueño reparador"** (`01` R01), que duplicaba "El sueño de los justos" y además repetía "caldo" con "El caldo de la energía vital". Bien resuelto.

### Subtítulos de `01` que hay que reescribir por tono o por legal
| Subtítulo | Problema |
|---|---|
| *"El despacho en casa: trabajar sin **autointoxicarse**"* | "Intoxicarse" implica veneno. Contradice la tesis. → *"El check de los que trabajan solos y quieren seguir enteros a las siete"* |
| *"Avión, hotel, coche, **5G intenso**"* | **Sacar "5G" de todo el libro y de las keywords.** Atrae exactamente al público que destruye la autoridad de marca que EKIO necesita para la ronda. → *"Avión, hotel, coche y habitación ajena"* |
| *"cómo **sazones** el ambiente"* | Errata: "sazonas" |
| *"y la ciencia ya no puede ignorar"* | Sobreafirmación sobre algo que es 🟡 |

## 1.10 Personajes — lo que no está fijado y va a derivar

Este es el trabajo callado del guardián de consistencia: nada de esto es un error todavía, pero **todo esto se va a inventar de forma distinta en cada sesión** si no se cierra ahora.

| Personaje | Estado | Decisión que hay que tomar |
|---|---|---|
| **Marta** | 42 años en los dos documentos ✅ | Sin definir su relación con Tomás. **Fijar: hija de Tomás.** Si es suegro, el tono de las escenas cambia por completo |
| **Leo** | "adolescente", **sin edad** | **Fijar 15 años**, y por una razón editorial de peso: la postura de Ekio en `02` O7 es *"no recomendamos paneles en menores de 16 años sin supervisión sanitaria"*. Con Leo a 15, esa postura se puede **dramatizar**: Leo pide usar el panel y se le dice **no**. Es la escena más creíble que puede tener este libro — la marca diciendo "aquí no" sobre su propio producto, delante del lector. A 17 años, la escena desaparece |
| **Abuelo Tomás** | "ochenta años" en el subtítulo de `01` R17 | **Fijar 79.** Y cuadra con Marta a 42 (padre a los 37) |
| **Dra. Elena** | 🔴 **Asignada a "Ciencia en 60 segundos", que NO EXISTE en ninguna plantilla de ficha.** Ni en `00` § 5 ni en `01` § 3 | **Su sitio es 🚦 EVIDENCIA.** Una frase suya firma el semáforo de cada receta. Resuelve el hueco, ahorra un campo en una ficha ya cargada, y cumple su función declarada ("una frase suya pesa más que tres párrafos") |
| **"El truco de la abuela"** | Protagonizado por el **abuelo** Tomás. Chirría y parece error | **Declararlo, y queda mejor:** Tomás cita siempre a **su madre**. El truco es de la abuela de Tomás. Es lo mismo que hace el mecanismo *"Lo que decía mi madre"* — de hecho son el mismo dispositivo y hay que unificarlos en `00`, no describirlos por separado |
| **Spiro y Fotón** | Iconos de margen sin diálogo ✅ | Consistente en los dos documentos. Ningún problema |

## 1.11 Dos cosas que faltan por completo

### El puente entre el wifi y la luz
El libro mete en el mismo volumen los 50 Hz de las paredes y la luz visible. `02` dice, con razón, que **ese es el mejor activo del libro**: *"la luz azul de noche está probada, es literalmente radiación electromagnética, y conecta las dos mitades del libro. Es el mejor puente que tienes. Úsalo como columna vertebral."*

**Y no hay ningún capítulo que lo haga.** "La lumbre perdida" habla de la falta de luz, no del puente. Sin ese puente, el lector no entiende por qué su router y su lámpara están en el mismo libro, y el libro parece dos libros pegados.

**Acción:** el puente cierra el capítulo 1 de La Despensa ("Eres un ser eléctrico y luminoso") y se apoya en una **lámina a doble página: EL ESPECTRO** — de los 50 Hz de la pared al azul de la pantalla, todo en la misma línea, con el lector marcado en medio. Es la lámina más importante del libro y no estaba prevista.

### Las 7 láminas no existen
"7 láminas" se menciona en el encargo y en los siguientes pasos de v3, pero **ninguna de las cuatro fuentes las lista**. El brief de ilustración no se puede hacer sin la lista, y las láminas ocupan 4-7 páginas del presupuesto. Propuesta de arranque para que el `direccion-arte-agent` tenga de dónde tirar:

1. **El espectro** (doble página) — de 50 Hz a la luz azul, con el lector en medio.
2. **Las tres baldas** — la despensa abierta, con los ingredientes de las tres baldas colocados.
3. **La casa en corte** — planta o sección con los focos de la balda 1 señalados, sin colores de alarma.
4. **El punto de sal** — la curva bifásica dibujada como un salero, **sin ejes numerados**.
5. **La lumbre y el panel** — mesa camilla con brasero a la izquierda, panel a la derecha, misma luz.
6. **El dormitorio, zona cero** — antes y después.
7. **El mapa de calor de tu casa** — la plantilla, en versión ejemplo rellenada.

### El embudo — el libro es herramienta de captación y no tiene ni un punto de captura
Ninguno de los cuatro documentos define **cómo el lector llega a electrosmogespana.com**. Para un libro cuya función declarada es lead magnet y autoridad de marca para la ronda, esto es el hallazgo más caro de la auditoría.

**Mínimo imprescindible, a decidir antes de maquetar:**
- **QR en La Cata** → descarga del mapa de calor imprimible en tamaño A4. Nadie escribe en un libro de 15×23 cm ni lo fotocopia: la plantilla impresa **necesita** su versión descargable, y ese es el punto de captura más natural que va a tener el libro. Email a cambio de plantilla.
- **QR en El Menú del Mes** → el checklist de 30 días descargable + recordatorios por email durante el reto. Cuatro semanas de contacto con un lector que está ejecutando: es el mejor lead que EKIO puede conseguir.
- **Apéndice "Recursos"** → una página, no un catálogo. Enlace a la web, a la consultoría y a los manuales de producto (que es **donde vive la dosimetría** — y decirlo en el libro cierra elegantemente el hueco que deja no publicar protocolos: *"los tiempos y las distancias están en el manual de cada equipo, que es su sitio"*).
- **Una landing dedicada** del tipo `electrosmogespana.com/libro`, no la home.

## 1.12 Decisión pendiente que bloquea el diseño de la ficha

`00` principio 4 exige **disclaimer al pie de cada receta**. El disclaimer completo de `02` son ~65 palabras. × 18 recetas = **1.170 palabras, casi 5 páginas de texto legal repetido**, dentro de fichas de 2 páginas que ya llevan seis recuadros.

**Recomendación (práctica habitual en no ficción de salud):**
- Disclaimer **completo** en la página de créditos, destacado.
- **Una línea** al pie de cada ficha: *"Divulgación sobre bienestar. No sustituye consejo médico. Ver p. 4."*
- Disclaimer **completo repetido** solo en las cuatro de mayor riesgo: **la belleza, las cervicales, los niños y el que entrena**.

Hay que decidirlo **antes** de maquetar la plantilla, porque cambia el reparto de la página.

## 1.13 Checklist de cierre — qué editar en cada fichero

**`00_GUION_MAESTRO.md`** (queda como única fuente de verdad)
- [ ] 18 recetas, renumeradas R01-R18, con LA CARTA como apertura de 2 págs
- [ ] Fusionar R02+R03; aplicar los cambios de nombre de § 1.9; aplicar los veredictos de § 1.8
- [ ] Reencuadrar R09 y R10 según § 1.7; añadir "El caldo del turno de noche"
- [ ] Corregir la regla de extensión: capítulos de Despensa **5–6 págs**, no 8–12
- [ ] Objetivo de palabras: **20.000–21.000**. Páginas de imprenta: **108**
- [ ] Añadir la **regla de las dos clases de cifra** (§ 1.2)
- [ ] Añadir la **regla de semáforo** (§ 1.7): califica lo que el lector hace
- [ ] Fijar edades y parentesco (§ 1.10); mover a la Dra. Elena al campo 🚦 EVIDENCIA
- [ ] Unificar "El truco de la abuela" y "Lo que decía mi madre" en un solo mecanismo declarado
- [ ] Recuperar "1 Spiro Card **por persona con móvil**"
- [ ] Fijar la firma **"Buen provecho" solo al cierre de las 6 partes** (6 veces). Al pie de 18 recetas + 6 capítulos + 6 partes serían 30 veces y deja de ser una firma
- [ ] Añadir la delimitación de solapes de § 1.6 y la lista de las 7 láminas de § 1.11
- [ ] Añadir la decisión de embudo (§ 1.11) y la de disclaimer (§ 1.12)
- [ ] Una línea: sacar el Bio Spectrum 11 del libro **no cierra** el frente IEC 62471 del producto

**`01_CONCEPTO_RECETARIO.md`** → **degradarlo a documento de VOZ Y MECANISMOS**
- [ ] Cabecera: *"Documento de voz, tono y mecanismos. La estructura y los nombres viven en `00`."*
- [ ] **Borrar** § 4 (estructura), § 7 (títulos A/B/C) y § 8 (los 18 nombres). Duplican `00` y ya están derogados
- [ ] Conservar y pulir lo bueno, que es mucho: § 11 (voz, intacta — es el mejor texto del proyecto), § 10 (mecanismos, con las correcciones de tono), los subtítulos culinarios de § 9
- [ ] Arreglar mecanismo 2 ("dosis exacta"), mecanismo 8 ("la matanza"), y el campo "Para quién" → "Para cuántos"
- [ ] Arreglar las referencias cruzadas rotas de § 10-mecanismo-5 y § 12

**`02_BASE_CIENTIFICA_RECETAS.md`**
- [ ] Renumerar sus 8 bloques como **O1-O8**, nunca "Receta N"
- [ ] Retitular la fórmula: **"para el MANUAL"**. Borrar la lista de tres puntos de § 0.1
- [ ] Purgar el **935 nm** de todo lo que viaje al libro
- [ ] Actualizar la nota de línea 433: electrobiofotónica ya no es el título
- [ ] Marcar "no publicable" la mención del Bio Spectrum 11 en O5

**`03_PETICION_FICHA_TECNICA_FABRICA.md`**
- [ ] Solo el título del libro en las líneas 4 y 9. El resto del documento está bien y su prioridad de producto sigue viva

---

# PARTE 2 — METADATOS AMAZON KDP

> **Advertencia de método, y va en serio:** no tengo acceso a datos de ventas, BSR, densidad de competencia ni volumen de búsqueda de Amazon.es, y no los voy a estimar. Todo lo que sigue es **razonamiento cualitativo** sobre estructura de catálogo, comportamiento de comprador y mecánica de KDP. Los nombres exactos de las categorías **cambian** y hay que verlos en el desplegable de KDP en el momento de subir. Lo que se puede afirmar con certeza son las **reglas de la plataforma** (tramos de regalía, exclusividad, límites de caracteres): eso sí está abajo y es fiable.

## 2.1 Las 3 categorías

**La lógica, primero.** Un "#1 en su categoría" no se gana escribiendo mejor: se gana **eligiendo un estante pequeño donde tu libro sea el único de su especie**. La regla práctica es tres categorías con tres funciones distintas:

- **Una de volumen** — donde está el comprador, aunque no se gane el nº 1. Trae ventas.
- **Una de nicho ganable** — estante estrecho donde este libro no tiene rival directo en español. Trae la insignia naranja de "nº 1 en ventas", que es lo que se pega en la landing, en el email y en el deck de la ronda.
- **Una de intención de compra** — donde el comprador llega con el problema, no con el tema.

**Recomendación:**

| # | Función | Categoría (verificar el nombre exacto en KDP) |
|---|---|---|
| **1** | Nicho ganable | **Libros › Ciencias, tecnología y medicina › Medio ambiente › Contaminación** (BISAC: *NATURE / Environmental Conservation & Protection / Pollution*) |
| **2** | Volumen | **Libros › Salud, familia y desarrollo personal › Salud y bienestar › Terapias y medicina alternativa** |
| **3** | Intención de compra | **Libros › Salud, familia y desarrollo personal › Salud y bienestar › Sueño y trastornos del sueño** |

**Por qué la 1 es la apuesta.** "Contaminación" en español está poblada de manuales universitarios de ingeniería ambiental y de libros de divulgación climática. Un libro práctico, de consumo, sobre contaminación **dentro de casa** no compite con ninguno de ellos: comparte estante y no comparte comprador. Es donde la insignia es realista. *(No puedo confirmarte cuántos títulos hay ni con qué BSR — eso se comprueba en cinco minutos mirando el top 100 del nodo antes de subir, y merece la pena hacerlo.)*

**Por qué la 2 y no "Medicina".** "Terapias alternativas" es donde este comprador ya compra. Y hay una razón defensiva de peso para **no** entrar en ningún nodo clínico ("Medicina", "Enfermedades", "Fisioterapia"): esas categorías atraen a compradores profesionales que juzgan el libro con criterio clínico y lo reseñan con dureza, y son las que más escrutinio de claims reciben. Un libro con semáforo de evidencia y sin claims médicos no gana nada ahí y puede perder bastante.

**Por qué la 3.** El comprador no busca "higiene electromagnética": busca **dormir**. Estar en la categoría del problema es lo que convierte al curioso en comprador. Y conviene aclararlo porque parece incoherente con toda la política legal del proyecto: **una categoría no es un claim.** Elegir el estante "Sueño" no promete tratar el insomnio; la descripción sigue sin poder prometer nada, y no lo hace.

**Suplente, si al mirar el catálogo la 1 resulta estar más poblada de lo esperado:** **Casa y jardín › Hogar sostenible / Casa ecológica**. El ángulo "casa sana" está muy poco atendido en español y encaja con el 80 % del contenido real del libro.

**Tres cosas de mecánica que hay que saber:**
1. **Kindle y tapa blanda se categorizan por separado.** Son dos fichas. Aprovéchalo: el nodo ganable puede ser distinto en cada formato.
2. Si la categoría que quieres no aparece en el desplegable, **se pide a soporte KDP** citando el BISAC. Tarda unos días y funciona.
3. Las categorías **se cambian cuando quieras**. Si a los dos meses el nodo elegido no rinde, se rota. Nada de esto es irreversible.

## 2.2 Las 7 keywords de backend

**Criterios aplicados:** frases, no palabras; lenguaje de comprador, no de experto; nada que ya esté en título o subtítulo (*guía, higiene, electromagnética, recetario, energía, perdida*) porque esos términos ya están indexados y repetirlos desperdicia el campo; ninguna marca ajena (**Noxtak y Spiro quedan fuera — es marca de tercero y es infracción de los términos de KDP**); y ni una mención de 5G, por la razón de § 1.9.

```
1  electrosmog en el hogar
2  dormir mejor de forma natural sin pastillas
3  wifi router y movil en el dormitorio
4  fotobiomodulacion luz roja e infrarroja
5  ritmo circadiano y luz natural al despertar
6  casa saludable y libre de toxicos
7  biohacking para principiantes en español
```

**Notas de uso:**
- **Sin acentos en las keywords de backend.** Amazon los normaliza, pero la versión sin tilde cubre las dos formas de teclear y no cuesta nada.
- **Candidata de recambio para la 7:** `hipersensibilidad electromagnetica`. Es un término que este comprador **sí busca** y con mucha intención. La descarto de la lista base por criterio de posicionamiento: es un término contestado clínicamente y atrae a un lector que espera del libro una validación que el libro —correctamente— no le va a dar, con riesgo de reseña decepcionada. Si Javier prefiere captar ese tráfico, se cambia por la 7 y se acepta el trade-off consciente.
- **Otra candidata:** `medir campos electricos en casa`, que apunta al lector de La Cata, que es el más cualificado de todos (quiere medir → va a comprar equipo). Buena para probar contra la 6.
- **Las keywords se pueden cambiar siempre.** La reindexación no es inmediata: cuenta con **varios días**, no con horas. Cámbialas de tres en tres como máximo, o no sabrás qué movió qué.

## 2.3 Blurb de contraportada

*En la voz de § 11 de `01`. Gancho en las dos primeras líneas. Ni un claim médico. Con la declaración del método, que es obligatoria. Cierra con la firma.*

---

**Tu bisabuela hacía higiene electromagnética y no lo sabía.**

Veía el amanecer, pasaba la tarde junto a la lumbre y dormía a oscuras de verdad. Nosotros hemos roto esas tres cosas en dos generaciones. Y luego le echamos la culpa al estrés.

Este libro es un recetario. No de comida: de casa. Dieciocho recetas para bajar el ruido eléctrico de tu hogar y devolverle a tu cuerpo la luz que perdió por el camino, empezando esta noche y con lo que ya tienes.

Dentro encontrarás:

**La despensa** — los ingredientes invisibles de tu casa, uno a uno y sin alarmismo. El wifi no es veneno. Es sal.
**La cata** — cómo medir tu propia casa antes de comprar nada.
**Las recetas** — el dormitorio, el salón, los niños, el adolescente que negocia y el abuelo que no se cree nada.
**El menú del mes** — treinta días, cuatro semanas, una lista que se tacha.

Cada receta cierra con *el truco de la abuela*: el atajo que no cuesta nada. Y cada afirmación lleva su semáforo, para que sepas siempre qué está probado, qué es prometedor y qué es solo una hipótesis contada con honestidad.

**Electrobiofotónica** es el nombre que propongo para lo que hay dentro: la relación entre los campos que nos rodean, la luz que nos falta y la biología que está en medio. No es una ley de la física. Es una forma de ordenar la cocina.

Este libro no te va a curar nada. Te va a enseñar a cocinar mejor con lo que tienes.

**Buen provecho.**

*Francisco Javier Andrés · EKIO*

---

**Notas de producción de la contraportada:**
- Son ~250 palabras. En 15,24 × 22,86 cm caben con holgura **si** el diseño reserva el tercio inferior derecho para el código de barras del ISBN. Si el ilustrador quiere más aire, la lista de cuatro partes se puede recortar a dos líneas — pero **la declaración de electrobiofotónica no se toca**: es la línea que sostiene legalmente el término en todo el libro.
- La frase *"Este libro no te va a curar nada"* hace tres trabajos a la vez: fija el tono, desarma al escéptico y es la mejor cobertura legal posible en una contraportada. No suavizarla.

## 2.4 Descripción de la ficha de Amazon

*HTML admitido por KDP: `<b> <i> <em> <u> <br> <p> <h4> <h5> <h6> <ul> <li> <ol>`. Límite 4.000 caracteres. Solo las dos primeras líneas se ven sin pulsar "Leer más": todo el peso va ahí.*

```html
<h4>Tu bisabuela hacía higiene electromagnética y no lo sabía.</h4>
<p>Veía el amanecer, pasaba la tarde junto a la lumbre y dormía a oscuras de verdad. Nosotros hemos roto esas tres cosas en dos generaciones. Y luego le echamos la culpa al estrés.</p>

<p>Sabemos más palabras que nunca —electrosmog, ritmo circadiano, fotobiomodulación— y dormimos peor. Este libro no añade otra palabra. Añade <b>dieciocho recetas</b>.</p>

<p>Porque no es un manual técnico: es un <b>recetario de casa</b>. Cada receta ocupa dos páginas, se lee de pie en la cocina y se puede empezar esta noche.</p>

<h4>Qué vas a encontrar</h4>
<ul>
<li><b>La despensa.</b> Los ingredientes invisibles de tu hogar, uno a uno: el router, el móvil, la luz azul, la electricidad de las paredes, la toma de tierra, el inversor solar. Sin alarmismo. El wifi no es veneno: es sal. El problema nunca es que exista, sino la cantidad, la distancia y la hora.</li>
<li><b>La cata.</b> Cómo medir tu propia casa <i>antes</i> de comprar nada, con el mapa de calor del hogar y el dormitorio como zona cero.</li>
<li><b>Las dieciocho recetas.</b> El apagón de las nueve. La cena a oscuras. El desayuno de luz. El sueño de los justos. El sofrito del salón. El plato de los niños. El pacto del adolescente. El puchero del abuelo escéptico.</li>
<li><b>El menú del mes.</b> Treinta días repartidos en cuatro semanas, con una lista que se tacha.</li>
</ul>

<h4>Por qué este libro es distinto</h4>
<p><b>Ocho de cada diez cosas que te pide son gratis.</b> Y está dicho en el libro, con iconos, receta a receta. Cada una cierra con <i>el truco de la abuela</i>: el atajo que no cuesta un euro y que la generación de nuestros abuelos hacía sin llamarlo bienestar.</p>

<p><b>Cada afirmación lleva su semáforo de evidencia:</b> verde para lo establecido, ámbar para lo prometedor, rojo para lo que solo es una hipótesis. Cuando la ciencia no da para más, el libro lo dice. Especialmente en el capítulo de los niños, donde la respuesta a una de las preguntas es, literalmente, <i>no</i>.</p>

<p><b>Electrobiofotónica</b> es el término que el autor propone para nombrar la relación entre los campos que nos rodean, la luz que nos falta y la biología que está en medio. Se declara en la primera página como lo que es: un marco para ordenar las ideas, no una ley de la física.</p>

<h4>Para quién es</h4>
<p>Para quien llega a las seis de la tarde y ya no le queda nada. Para quien duerme siete horas y se levanta como si hubiera dormido cuatro. Para padres que no saben dónde poner el router. Para quien vive en una ciudad y pasa el invierno sin ver el sol. No hace falta saber nada de física. Ni comprar nada.</p>

<p><i>Francisco Javier Andrés lleva más de una década midiendo casas y hablando de esto con familias reales. Este es el libro que le habría gustado dejar encima de la mesa al salir de cada una de ellas.</i></p>

<p><b>Divulgación sobre bienestar. No sustituye el consejo médico, el diagnóstico ni el tratamiento. Consulta a tu profesional de la salud antes de incorporar cualquier rutina nueva.</b></p>

<p>Buen provecho.</p>
```

**Tres avisos sobre la descripción:**
- Ajustar la línea de biografía a lo que sea **literalmente cierto**. Está redactada para que suene a persona y no a curriculum, pero es un dato verificable y tiene que cuadrar.
- El disclaimer al final de la descripción **no es adorno**: Amazon retira fichas de libros de salud con promesas de resultado, y tener el descargo visible en la propia ficha reduce ese riesgo a casi cero.
- Ni un porcentaje, ni un "en 30 días conseguirás", ni un testimonio. La promesa del libro es **enseñar**, no curar, y la ficha tiene que sonar igual que el libro.

## 2.5 Producción: trim size, papel y color

### Recomendación
> **15,24 × 22,86 cm (6"×9") · tinta NEGRA · papel CREMA · sin sangrado**

### El razonamiento, que es todo económico
El libro lleva ~7 láminas más un sistema de iconos. La tentación es imprimirlo en color. **Los números lo desaconsejan con contundencia.** Órdenes de magnitud aproximados para 108 páginas en Amazon.es *(hay que confirmar el euro exacto en la calculadora de KDP antes de fijar precio — las tarifas cambian y no me las voy a inventar)*:

| Opción | Coste de impresión aprox. | Precio mínimo que obliga | Consecuencia |
|---|---|---|---|
| **B/N, crema** | **~2 €** | ~4 € | Puedes vender a 12,95 € con margen sano. **Viable como lead magnet** |
| Color estándar | ~6-7 € | ~11-12 € | Fuerza un PVP de 16-19 € |
| Color premium | ~12-14 € | ~20-22 € | Fuerza un PVP de 26-30 €. Inviable |

**Un precio de 19 € mata la función del libro.** El libro no está aquí para ganar dinero con el libro: está para entrar en casas, generar autoridad y llevar tráfico a electrosmogespana.com. Cada euro de PVP por encima de 13 € es un lector menos en el embudo. El color cuesta **cuatro veces** más de impresión y aporta cero al 80 % del contenido, que es texto y listas.

**La consecuencia de diseño hay que asumirla hoy, no en maquetación:** las 7 láminas y todos los iconos se diseñan **para una sola tinta desde el primer boceto** — línea, trama, grises. No se diseña en color y se convierte después: eso siempre sale mal, y sale especialmente mal en la lámina del espectro y en la curva del punto de sal. Es una instrucción directa para el `direccion-arte-agent`, y le va bien: un recetario ilustrado a una tinta tiene un aire de libro de cocina de toda la vida que el color cuatricromía no da.

**Crema y no blanco.** Menos fatiga en lectura larga, y estéticamente es el papel de los libros de cocina de siempre — refuerza el concepto gratis. El blanco solo gana si hubiera fotografías o degradados finos, y no las hay.

**Sin sangrado.** Si una sola lámina va a sangre, **todo el PDF** hay que montarlo con sangrado, lo que estrecha la caja de texto y multiplica las probabilidades de un rechazo en la revisión de KDP. Con ilustración de línea no se gana nada sangrando. Todo dentro de márgenes.

**Márgenes.** Para 108 páginas el mínimo de KDP en interior es holgado, pero la ficha de receta es un diseño de caja y necesita aire: **interior 19 mm, exterior 13 mm, superior e inferior 15 mm**. Y la regla de oro de la maquetación de este libro: **cada receta arranca en página par**, para que la ficha y su ilustración se vean juntas al abrir. Eso obliga a que el bloque anterior termine en impar. Hay que llevarlo controlado desde la primera página, no arreglarlo al final.

### Kindle — la decisión que se suele estropear
La ficha de receta es un diseño encajonado. La tentación es hacer un **Kindle de maquetación fija** (o peor: meter cada ficha como imagen). **No.**
- La maquetación fija no se reflowa, se lee mal en móvil —donde está la mayoría de los lectores de Kindle— y es ilegible en pantallas pequeñas.
- Cada ficha como imagen es **texto no indexable**: pierdes búsqueda interna, pierdes accesibilidad y, si algún día entras en KU, pierdes páginas leídas.

**Hacer un Kindle reflowable** y reconstruir la ficha como una secuencia de encabezados y listas (`<h3>` para el nombre, `<h4>` para cada bloque, listas para ingredientes y elaboración). Se pierde el encanto de la caja y se gana un libro que se puede leer. En papel manda el diseño; en digital manda que funcione.

## 2.6 Precio y KDP Select

### Precio
| Formato | Lanzamiento | Estable | Razonamiento |
|---|---|---|---|
| **Tapa blanda** | **11,95 €** | **12,95 €** | Con ~2 € de impresión y el 60 % de regalía que Amazon paga en tapa blanda, a 12,95 € quedan ~5,7 € por copia. Precio de libro práctico, no de manual caro, y da margen para descontarlo sin perder dinero |
| **Kindle** | **2,99 €** (2 primeras semanas) | **5,99 €** | El tramo del **70 % de regalía va de 2,99 a 9,99 €**: hay que quedarse dentro, sin excepción. Fuera del tramo la regalía cae al 35 % y no hay nada que lo compense |
| **PDF en electrosmogespana.com** | — | **9,90 €**, o **gratis a cambio del email** | Ver abajo: aquí está el verdadero valor para EKIO |

### KDP Select / Kindle Unlimited: **no**

Y la razón no es de rendimiento, es de **regla de plataforma**, así que conviene entenderla bien:

**La exclusividad de KDP Select cubre el libro en formato digital, en cualquier sitio y en cualquier formato digital.** Vender el mismo contenido como PDF en electrosmogespana.com **incumple** esa exclusividad. No es una zona gris. Son dos estrategias incompatibles y hay que elegir una.

**La elección correcta, para este libro, es el PDF propio.** Lo que KU paga son páginas leídas de un libro de ~108 páginas: céntimos. Lo que da el PDF en la propia web es **el email, el cliente y el dato de atribución** — y este libro existe precisamente para conseguir eso. El valor de un lector de este libro para EKIO no está en su regalía: está en que mide su casa, compra un Spiro, pide una consultoría y entra en la lista. Cambiar eso por páginas leídas es cambiar un cliente por una moneda.

La tapa blanda **no se ve afectada** por Select en ningún caso, así que no hay nada que sacrificar ahí.

*Alternativa si Javier quiere el empujón de visibilidad de KU:* 90 días en Select desde el lanzamiento, con el PDF guardado y publicado el día 91. Funciona, y es una decisión defendible — pero regala el mejor trimestre de captación, que es justo el del lanzamiento, cuando hay tráfico.

### ISBN: **propio, de la Agencia española**

| | KDP gratuito | ISBN propio (Agencia del ISBN) |
|---|---|---|
| Coste | 0 € | Tasa por ISBN *(no confirmo la cifra actual — consultar en la Agencia; es una cantidad modesta)* |
| Editor que aparece | "Independently published" | **EKIO / Ekio BioTech** |
| Vender en la propia web | Con ISBN de KDP, **no** | **Sí** |
| Librerías y distribución española | No | **Sí** |
| Obligación añadida | Ninguna | **Depósito Legal**: al ser editor, es una obligación legal real en España |

**Recomendación: ISBN propio**, y por tres razones que van más allá del libro:
1. **Vender en la propia web con ISBN propio es el objetivo declarado.** Con el gratuito de KDP no se puede.
2. **"Editado por EKIO" es un activo para la ronda.** "Independently published" en la ficha de Amazon dice "autopublicado"; el sello propio dice "esta empresa publica". En un deck de inversión no es lo mismo, y cuesta una tasa administrativa.
3. Abre librerías y distribuidor español, que hoy no interesa pero en doce meses puede interesar. Un ISBN de KDP cierra esa puerta para siempre en esa edición.

**Detalles prácticos:**
- **Un ISBN por formato.** Papel y epub llevan ISBN distinto. El PDF vendido en la propia web puede llevar el suyo o no llevarlo; con sello propio, dárselo queda mejor y cuesta lo mismo.
- **Kindle no necesita ISBN**: le basta su ASIN. Si vas a tener sello propio, dale ISBN igualmente por coherencia de catálogo.
- **Asume el Depósito Legal.** Es la contrapartida de ser editor y hay que hacerlo bien desde el primer título.

## 2.7 Lanzamiento — lo mínimo, y una advertencia

- **A+ Content** es gratis en KDP y casi nadie lo usa en español. Con las 7 láminas ya dibujadas, tres módulos visuales (las tres baldas, una ficha de receta de muestra, la lámina del espectro) sale casi solo. Es el mejor uso de una hora de trabajo en toda la ficha.
- **Author Central**: foto, biografía y botón de seguir al autor. El botón notifica a esos seguidores en cada lanzamiento futuro: es una lista de correo que Amazon te regala.
- **La lista propia primero.** El único activo de lanzamiento fiable que tiene EKIO es su base de Klaviyo. Precio de salida bajo + aviso a la lista + subida a las dos semanas.
- ⚠️ **Reseñas: ni compradas, ni incentivadas, ni pedidas a cambio de nada.** Viola los términos de Amazon y el castigo es la retirada de la ficha, que es el peor resultado posible para un libro que sostiene la autoridad de una marca en plena ronda. Se piden reseñas honestas a lectores reales, sin contrapartida, y se acepta que lleguen despacio.
- **QR dentro del libro** según § 1.11. Es lo que convierte 108 páginas de papel en un canal de captación, y es la única razón por la que este libro le sale rentable a EKIO aunque no venda una sola copia con margen.

---

## SIGUIENTES PASOS, EN ORDEN

1. **Javier decide sobre 8 puntos** (§ 1.7 R10 opción A o B · § 1.8 los dos nombres · 18 recetas y LA CARTA · disclaimer corto o largo · edad de Leo · ISBN propio · KDP Select no · B/N crema).
2. **Editar los cuatro ficheros** según el checklist de § 1.13. `00` queda como única fuente de verdad; `01` se degrada a documento de voz.
3. **Renumerar R01-R18 en `00` y O1-O8 en `02`** — antes de escribir una sola línea de receta.
4. **Escribir la receta piloto.** Recomiendo **"El desayuno de luz"**: es la de mejor evidencia 🟢, la más barata, sin producto, y si la ficha funciona ahí funciona en todas.
5. **Brief de las 7 láminas** al `direccion-arte-agent`, con la instrucción de **una sola tinta** desde el primer boceto.
6. **Revisión legal externa** del recetario completo antes de subir. No opcional: hay dos recetas (la belleza y las cervicales) donde la frontera entre cosmético/deportivo y sanitario se pisa con el pie entero.

---

*Documento de trabajo. `00_GUION_MAESTRO.md` sigue siendo la fuente de verdad; este fichero recoge los hallazgos y las decisiones propuestas hasta que se integren allí.*

**Buen provecho.**
