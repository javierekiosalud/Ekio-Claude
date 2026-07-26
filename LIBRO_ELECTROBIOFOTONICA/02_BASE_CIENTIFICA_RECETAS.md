# BASE CIENTÍFICA DE LAS RECETAS
## Libro *Electrobiofotónica* — esqueleto científico, dosis, evidencia y auditoría legal

> Elaborado por el agente FBM-Elite, 26 julio 2026. Todas las referencias verificadas contra PubMed/revista original.
> **Nota:** el MCP de PubMed no estaba disponible; verificación vía búsqueda web contra fuente primaria. Ninguna cita es inventada. **Revisión final de citas obligatoria antes de imprimir.**

---

## 🔒 CÓMO SE USA ESTE DOCUMENTO (26/jul/2026)

**Este documento es REFERENCIA INTERNA. Su contenido numérico NO se publica en el libro.**

Javier ha decidido que el libro **no lleve protocolos concretos de uso de los paneles**:
- ✅ **Al libro sí pasa:** las longitudes de onda de cada panel, para qué sirve cada tipo de luz en general, el semáforo de evidencia, la respuesta bifásica como *concepto* ("más no es mejor"), los alérgenos/contraindicaciones, y toda la auditoría legal de lenguaje.
- ❌ **Al libro NO pasa:** ninguna tabla de dosis, minutos, distancias, J/cm², mW/cm² ni frecuencia semanal.

**Dónde sí sirve todo esto:** manuales de producto, formación interna, fichas técnicas y landings. No lo tires — cambia de destino.

---

## ⛔ DECISIÓN EDITORIAL — 26/jul/2026

**El Bio Spectrum 11 queda FUERA del libro.** Javier lo decide tras la revisión regulatoria del UV-B a 292 nm.

- El libro cubre **Core, Deep 5 y Bio Regén 7**. Nada más.
- **Ni receta, ni mención, ni recuadro de UV, ni vitamina D.**
- Consecuencia positiva: desaparece el mayor riesgo regulatorio del proyecto editorial, y el alérgeno ☀️ deja de ser necesario.
- ⚠️ **Ojo:** esto resuelve el libro, **no el producto**. El Bio Spectrum 11 sigue vendiéndose, y para venderlo sigue haciendo falta el IEC 62471 y el expediente técnico. Ese frente queda abierto por separado.

---

# 0. TRES BLOQUEANTES QUE CONDICIONAN TODO EL CAPÍTULO

## 0.1 🔴 BLOQUEANTE DE DOSIS — solo el Core tiene irradiancia documentada

| Panel | λ confirmadas | Irradiancia | ¿Podemos dar J/cm²? |
|---|---|---|---|
| **Core** (13 LEDs) | 660 + 850 nm | **>150 mW/cm² en contacto** (manual fabricante 6-jul) | ⚠️ Casi — ver 0.2 |
| **Deep 5** (70 LEDs) | 630/660/**727**/810/850 | ❌ sin ficha | **NO** |
| **Bio Regén 7** (70 LEDs) | 485/630/660/727/810/850/940 | ❌ sin ficha | **NO** |
| ~~**Bio Spectrum 11**~~ **(FUERA DEL LIBRO)** | 292/385/405/485/630/660/670/727/850/935/1050 | ❌ sin ficha | **No aplica — no aparece en el libro** |

**Consecuencia editorial:** no podemos escribir "X minutos = Y J/cm²" para Deep 5 ni Bio Regén 7. Lo que sí podemos publicar:
1. La **dosis diana en J/cm²** (viene de la literatura, no de nuestro producto).
2. La **fórmula de conversión** para que el lector la aplique con la ficha de su equipo.
3. **Rangos de tiempo orientativos** etiquetados como "según la irradiancia de tu equipo".

> **Fórmula de bolsillo para el libro:**
> **minutos = (J/cm² deseados × 1.000) ÷ (mW/cm² del equipo × 60)**
> Ejemplo: 10 J/cm² con equipo de 50 mW/cm² → (10×1000)÷(50×60) = **3,3 minutos**.

## 0.2 ⚠️ HALLAZGO CRÍTICO — el Core puede sobredosificar con su propio temporizador

Con **150 mW/cm² en contacto**:

| Dosis diana | Tiempo a 150 mW/cm² |
|---|---|
| 5 J/cm² (piel) | **33 segundos** |
| 10 J/cm² | **1 min 7 s** |
| 20 J/cm² | **2 min 13 s** |
| 30 J/cm² (músculo/articulación) | **3 min 20 s** |
| 60 J/cm² (techo del rango) | **6 min 40 s** |

El Core tiene **temporizador de 5–30 min**. A 30 min en contacto entregaría **~270 J/cm²**, muy por encima de la ventana útil (1–60 J/cm²). **No es un defecto: es la lección de la respuesta bifásica.** Pero hay que decirlo en el manual: *"en contacto, sesiones cortas; el temporizador largo está pensado para uso a distancia o zona amplia"*.

**Acción:** el ">150 mW/cm²" es un suelo, no una medida. Pedir a fábrica **valor medido a 0 / 5 / 15 / 30 cm**.

## 0.3 ⚠️ CORRECCIÓN DE MAPEO PRODUCTO↔OBJETIVO

`Skills/references/pbm-productos.md` asigna **"rendimiento cognitivo"** al Bio Spectrum. **El Bio Spectrum 11 NO lleva 810 nm** — la longitud con más literatura transcraneal. Los que sí la llevan son **Deep 5 y Bio Regén 7**.

- Corregir el mapeo en la referencia y en las landings.
- El Bio Spectrum 11 sí lleva **670 nm** (la λ de Jeffery/UCL), pero es protocolo **retiniano** y en libro de consumo **no podemos invitar a mirar el panel**.
- `pbm-productos.md` dice "Bio Spectrum **10**"; las specs reales son **11 longitudes**.
- Discrepancia de precio Core: memoria 147 €, landing 140 €. Unificar.

---

# A. LA RESPUESTA BIFÁSICA — "el punto de sal"

## A.1 La ciencia correcta

La PBM no funciona como un fármaco ("más dosis, más efecto"). Sigue una curva en **U invertida** (**Arndt-Schulz**):

```
efecto
  ▲
  │           ╭───╮        ← ventana óptima
  │        ╭──╯   ╰──╮
  │     ╭──╯         ╰──╮
──┼──╭──╯               ╰────►  dosis (J/cm²)
  │ ╱                       ╰── zona de INHIBICIÓN
  0
  poca luz = nada    óptimo    exceso = frena
```

**Mecanismo:** la luz roja/NIR actúa sobre la citocromo c oxidasa (Complejo IV) desplazando el óxido nítrico que la inhibe → sube el potencial de membrana mitocondrial → sube el ATP y aparece un pulso de ROS de bajo nivel que actúa como **señal** (mitohormesis). En dosis correcta esa señal enciende programas reparadores (Nrf2). Pasada la dosis, el mismo ROS deja de ser señal y pasa a ser **daño**. 🟢

**Hay dos ejes bifásicos, no uno:**
- **Fluencia total (J/cm²)** — la "cantidad".
- **Irradiancia (mW/cm²)** — la "intensidad". La misma dosis entregada muy rápido y fuerte puede dar peor resultado que suave y despacio.

**Referencia madre:** Huang YY, Chen ACH, Carroll JD, Hamblin MR. *Biphasic dose response in low level light therapy.* **Dose Response. 2009;7(4):358–383.** Actualizada en Huang YY et al., *Dose Response.* 2011;9(4):602–618. 🟢 **ESTABLECIDO**

## A.2 ¿La analogía del "punto de sal" es fiel? — SÍ, con un matiz

| Aspecto | Analogía culinaria | ¿Fiel? |
|---|---|---|
| Poca sal = plato soso | Poca luz = ningún efecto | ✅ |
| Sal justa = plato perfecto | Dosis óptima = máximo efecto | ✅ |
| Sal de más = plato incomible | Sobredosis = inhibición | ✅ |
| Cada plato pide su punto | Cada tejido pide su dosis (piel ≠ articulación) | ✅ muy útil |

**Matiz honesto obligatorio:** con la sal, pasarse **arruina** el plato. Con la luz, pasarse **no es tóxico ni peligroso** en rangos domésticos — simplemente **desperdicias la sesión**. No queremos miedo; queremos que entienda que **más tiempo no compra más resultado**.

**"Ni crudo ni pasado" es aún más precisa** para el eje *intensidad*: un filete a fuego brutal se quema fuera y queda crudo dentro. Es la metáfora exacta de irradiancia alta y corta vs. moderada y sostenida.

> **Recomendación: usar las dos.** "Punto de sal" para la cantidad (J/cm²), "ni crudo ni pasado" para la intensidad (mW/cm²).

**Frase publicable:**
> *"En luz, como en cocina, el error de principiante no es quedarse corto: es pasarse. Duplicar el tiempo no duplica el resultado — lo cancela."*

---

# B. EL NEXO CEM ↔ LUZ — qué es 🟢, 🟡 y 🔴

| Eslabón | Tier | Estado real |
|---|---|---|
| 1. Luz roja/NIR activa la CcO y aumenta ATP | 🟢 | Consolidado (Karu, Hamblin) |
| 2. Luz roja/NIR activa vías antioxidantes (Nrf2, SOD) | 🟢 | Consolidado celular y preclínico |
| 3. RF de baja intensidad induce estrés oxidativo | 🟡 | Yakymenko 2016, *Electromagn Biol Med* 35(2):186–202 — 93 de 100 estudios reportan efectos oxidativos. **Mayoría in vitro/animal.** Controvertido en reguladores |
| 4. Luz azul artificial nocturna suprime melatonina | 🟢 | Muy sólido. Brainard 2001, pico ~460 nm |
| 5. CEM afectan melatonina vía pineal en humanos | 🟡 | Señal presente, resultados inconsistentes |
| 6. "Reducir CEM + reponer luz roja restaura la mitocondria dañada por electrosmog" | 🔴 | **Ningún ensayo ha probado esta secuencia en humanos.** Inferencia mecanística |
| 7. Biofotones (Popp) / agua EZ (Pollack) / "electrobiofotónica" como mecanismo | 🔴 | Marcos teóricos. Valen como **narrativa**, jamás como fisiología afirmada |
| 8. SPIRO "armoniza/repolariza" los CEM | 🔴 | **Sin literatura independiente revisada por pares.** Solo como *"lo que el fabricante describe"* |

## La forma HONESTA de contar el nexo

**❌ NO se puede escribir:**
> *"El electrosmog daña tus mitocondrias y la luz roja las repara."*

**✅ SÍ se puede escribir:**
> *"Hay dos cosas que sabemos bien por separado. Una: la luz roja e infrarroja actúa sobre la mitocondria y estimula sus defensas antioxidantes — eso está bien establecido. Dos: existe un cuerpo creciente de estudios, casi todos en células y animales, que asocia la exposición crónica a radiofrecuencias con estrés oxidativo; sigue siendo materia de debate. Que reducir lo segundo y añadir lo primero se sumen en beneficio para ti es una hipótesis razonable, no un hecho probado. La contamos como lo que es."*

**Esa honestidad es el posicionamiento. Ningún competidor la escribe.**

**El eslabón 🟢 que sí puedes usar sin reservas es el circadiano:** luz azul de pantallas de noche → supresión de melatonina → peor sueño. Está probado, es literalmente radiación electromagnética, y conecta las dos mitades del libro. **Es el mejor puente que tienes. Úsalo como columna vertebral.**

---

# PLANTILLA "ALÉRGENOS" (8 iconos reutilizables)

| Icono | Alérgeno | Aplica |
|---|---|---|
| 👁️ | **Ojos** | No mirar los LEDs. El NIR (810/850/940 nm) es **invisible**: no dispara el reflejo de parpadeo. Gafas siempre |
| 💊 | **Fotosensibilidad por medicación** | Isotretinoína, doxiciclina/tetraciclinas, fluoroquinolonas, amiodarona, hidroclorotiazida, hipérico, retinoides tópicos, psoralenos |
| 🤰 | **Embarazo** | No irradiar abdomen ni lumbar baja. Faltan datos |
| 🩺 | **Consulta médica obligatoria** | Cáncer (no irradiar lesiones), lupus, porfiria, epilepsia fotosensible (modos pulsados), patología tiroidea (no irradiar cuello), inmunosupresión |
| 🌡️ | **Calor / lesión aguda** | Fiebre, infección activa, inflamación aguda <48 h, quemadura solar reciente |
| 🎨 | **Piel y pigmento** | Tatuajes (calientan), melasma y rosácea (el IR profundo 940/935 nm es calórico y puede empeorarlos), lesiones atípicas → dermatólogo |
| 🧒 | **Menores** | Ver Receta 7. **No por defecto** |
| ~~☀️~~ | ~~**UV — solo Bio Spectrum 11**~~ | **ELIMINADO del libro (26/jul):** el Bio Spectrum 11 queda fuera. Este alérgeno sigue siendo válido para el **manual y la ficha del producto**, pero ya no aparece en el libro |

---

# LAS 8 RECETAS

## 🥄 RECETA 1 — ENERGÍA VITAL / FATIGA

| | |
|---|---|
| **λ** | **660 + 850 nm.** El 660 es el pico rojo de absorción de la CcO; el 850 penetra a músculo profundo. La pareja más estudiada de la PBM |
| **Zona** | Superficie amplia: torso anterior/posterior, muslos. Lógica: **masa mitocondrial total irradiada** |
| **Dosis diana** | **10–20 J/cm²** por zona |
| **Distancia** | 20–40 cm |
| **Tiempo** | ⚠️ Según ficha. A 40 mW/cm² → 4–8 min por cara |
| **Frecuencia** | 3–5/semana, bloques de 4–8 semanas |
| **Momento** | **Mañana (7:00–10:00).** Razón honesta: **no** porque el rojo sincronice el reloj (eso lo hace la luz azul-cian vía melanopsina), sino porque alinea el hábito con salir al exterior, que es la intervención circadiana potente |
| **Panel** | **Deep 5**. El Core **no** encaja: 13 LEDs no cubren área sistémica |

**SEMÁFORO: 🟡 EMERGENTE.** De los ocho, **el objetivo con evidencia clínica más floja** — precisamente el que más se vende. 🟢 el mecanismo; **no** hay ensayos grandes en población sana con "energía" como desenlace primario.
- Huang 2009 (mecanismo y ventana de dosis).
- Reducción de fatiga con PBM cuerpo completo: certeza moderada **en fibromialgia** (*Behavioral Sciences* 2023) — **población clínica, no extrapolable a "cansancio de oficina"**.

**🚨 LEGAL:** "fatiga crónica", "astenia" son entidades clínicas. Usar: **"sensación de energía", "vitalidad"**. Encuadrar la luz como el 20 %: sueño, sol real y movimiento son el 80 %.

**ALÉRGENOS:** 👁️ 💊 🤰 🩺

---

## 🏋️ RECETA 2 — FUERZA Y RENDIMIENTO FÍSICO

| | |
|---|---|
| **λ** | **660 + 850 nm** (+810 si el equipo lo lleva) |
| **Zona** | El grupo muscular a trabajar. Receta **local y dirigida** |
| **Dosis diana** | **20–60 J por punto/zona** |
| **Distancia** | 5–20 cm |
| **Tiempo** | ⚠️ Según ficha. Típicamente 3–8 min por grupo |
| **Frecuencia** | Antes de cada sesión de fuerza (2–4/semana) |
| **Momento** | 🔑 **PRE-ejercicio, 5–15 min antes.** El dato clave y contraintuitivo: **la evidencia es más fuerte ANTES que después** |
| **Panel** | **Deep 5**. **Core** válido para zonas pequeñas y es el único portátil al gimnasio |

**SEMÁFORO: 🟡 EMERGENTE ALTO** — probablemente **el mejor sustentado de los ocho** junto con el dolor.
- Vanin AA, Verhagen E, Barboza SD, Costa LOP, Leal-Junior ECP. *Photobiomodulation therapy for the improvement of muscular performance and reduction of muscular fatigue…* **Lasers Med Sci. 2018;33(1):181–214.**
- **Ensayos negativos a citar por honestidad:** judocas, triple ciego, sin atenuación de fatiga ni daño muscular (*Front Physiol.* 2019;10:811). Efecto **real pero dependiente de protocolo**.

**🚨 LEGAL:** terreno libre — "rendimiento deportivo" no es claim sanitario. No prometer magnitudes ("+20 % de fuerza").

**ALÉRGENOS:** 👁️ 🌡️ 🎨

---

## ✨ RECETA 3 — BELLEZA Y PIEL (ANTIEDAD, COLÁGENO)

| | |
|---|---|
| **λ** | **630–660 nm** (fibroblastos dérmicos, colágeno I y III) + **830–850 nm** (dermis profunda). El **485 nm** del Bio Regén 7 es antibacteriano vía porfirinas, para tendencia acneica — **no** para colágeno |
| **Zona** | Cara, cuello, escote |
| **Dosis diana** | **3–10 J/cm².** ⚠️ **El tejido de dosis MÁS BAJA de todas las recetas.** Donde más se peca por exceso |
| **Distancia** | 15–30 cm. **Nunca en contacto en la cara** |
| **Irradiancia** | Moderada, 20–60 mW/cm². Aquí "ni crudo ni pasado" es literal |
| **Tiempo** | ⚠️ Según ficha. A 40 mW/cm² → 1,5–4 min. **No 20 minutos** |
| **Frecuencia** | 3–5/semana durante **8–12 semanas**. Antes de 6–8 semanas no hay nada que ver. Decirlo evita devoluciones |
| **Momento** | Indiferente circadianamente. Ventaja: de noche, en la rutina facial — el rojo tiene **el menor impacto melanópico**, no interfiere con el sueño |
| **Panel** | **Bio Regén 7** (el panel diseñado para esto). **Core** para zona puntual, a distancia |

**SEMÁFORO: 🟢 ESTABLECIDO** (para "aspecto de la piel"; 🟡 para magnitud)
- Wunsch A, Matuschka K. *A Controlled Trial to Determine the Efficacy of Red and Near-Infrared Light Treatment in Patient Satisfaction, Reduction of Fine Lines, Wrinkles, Skin Roughness, and Intradermal Collagen Density Increase.* **Photomed Laser Surg. 2014;32(2):93–100.** n=136, 30 sesiones, colágeno por ecografía y rugosidad por perfilometría. El mejor estudio del nicho.
- **Hallazgo útil:** el espectro policromático **no** superó al rojo solo. Contra "más longitudes siempre es mejor" — obliga a justificar la gama por **cobertura y versatilidad**, no por "más es mejor".

**🚨 LEGAL:** "arrugas", "rugosidad", "luminosidad", "firmeza", "densidad de colágeno" → **cosmética, permitido**. "Acné", "rosácea", "psoriasis", "cicatrices" → **patología, prohibido**. Reformular: *"pieles con tendencia a imperfecciones"*.

**ALÉRGENOS:** 👁️ (gafas SIEMPRE) 💊 (isotretinoína = exclusión) 🎨 (**melasma: contraindicado el IR profundo 940/935 nm**) 🩺

---

## 🌙 RECETA 4 — SUEÑO REPARADOR

**Se estructura al revés: 80 % higiene de luz, 20 % panel.** Única forma honesta de escribirla.

### Parte A — Higiene lumínica (🟢 el verdadero motor)

| Acción | Cuándo | Por qué |
|---|---|---|
| **10–30 min de luz exterior** sin gafas de sol | Primera hora tras despertar | Ancla el reloj vía melanopsina. La más potente y **gratis** |
| **Bajar luz azul-cian** (460–490 nm) | Desde 2–3 h antes de dormir | Supresión de melatonina bien documentada |
| **Luz cálida/ámbar de baja altura** | Última hora | Menor carga melanópica |
| **Dormitorio a oscuras y sin pantallas** | Toda la noche | Conecta con zona cero + Spiro |

**Referencia:** Brainard GC et al. *Action Spectrum for Melatonin Regulation in Humans.* **J Neurosci. 2001;21(16):6405–6412.**

### Parte B — El panel (🟡 evidencia fina)

| | |
|---|---|
| **λ** | **660 nm** dominante: menor eficacia melanópica del espectro visible → señal sin castigar la melatonina |
| **Zona** | Cuerpo, no cara ni ojos |
| **Dosis** | 10–30 J/cm², intensidad baja |
| **Distancia** | 40–60 cm (deliberadamente lejos: queremos irradiancia baja) |
| **Tiempo** | ⚠️ Según ficha. Referencia del único ensayo: **30 min** |
| **Momento** | **60–90 min antes de acostarse**, con luz ambiente baja |
| **Panel** | **Deep 5** |

**SEMÁFORO: 🟡 — UN solo ensayo pequeño**
- Zhao J, Tian Y, Nie J, Xu J, Liu D. *Red light and the sleep quality and endurance performance of Chinese female basketball players.* **J Athl Train. 2012;47(6):673–678.** n=20, 658 nm cuerpo completo, 30 min/noche, 30 J/cm², 14 días → melatonina 38,8 vs 23,8 pg/mL y mejora de PSQI.
- **Honestidad obligatoria:** n=20, atletas jóvenes, un solo estudio, sin replicación. **No es base para prometer nada.**

**🚨 LEGAL — LA MÁS IMPORTANTE:** "insomnio" es diagnóstico. **Prohibido.** Usar: *"descanso", "calidad del sueño percibida", "rutina de noche", "conciliar mejor"*. No atribuir el efecto al panel: atribuirlo al **conjunto de hábitos** (que además es lo cierto).

**ALÉRGENOS:** 👁️ 🩺

---

## 🧠 RECETA 5 — CLARIDAD MENTAL / NIEBLA MENTAL

| | |
|---|---|
| **λ** | **810 nm.** Mejor compromiso entre absorción por la CcO y penetración a través de cuero cabelludo y hueso craneal |
| **Zona** | Frente (corteza prefrontal). **Frontal, no ocular** |
| **Dosis diana** | ~10–15 J/cm² en cuero cabelludo (solo ~2–3 % llega a corteza) |
| **Distancia** | 5–15 cm |
| **Tiempo** | ⚠️ Según ficha. Literatura: **8–12 min** |
| **Momento** | **Mañana o primeras horas de tarde.** No de noche: puede resultar activante |
| **Panel** | ⚠️ **CORRECCIÓN: Deep 5 o Bio Regén 7** — únicos con **810 nm**. El **Bio Spectrum 11 no lo lleva** |

**SEMÁFORO: 🟡** (mecanismo 🟢, desenlaces cognitivos 🟡, "niebla mental" como entidad 🔴)
- Barrett DW, Gonzalez-Lima F. *Transcranial infrared laser stimulation produces beneficial cognitive and emotional effects in humans.* **Neuroscience. 2013;230:13–23.**
- Blanco NJ, Maddox WT, Gonzalez-Lima F. *Improving executive function using transcranial infrared laser stimulation.* **J Neuropsychol. 2017;11(1):14–25.**
- Salehpour F et al. *Brain Photobiomodulation Therapy: a Narrative Review.* **Mol Neurobiol. 2018;55(8):6601–6636.**
- ⚠️ **Contexto crítico:** estos ensayos usan **láser calibrado con dosimetría medida**, no un panel LED doméstico a distancia libre. La extrapolación es razonable pero **no es equivalencia**. Decirlo.

**🚫 EL 670 nm — NO CONVERTIRLO EN RECETA OCULAR**
*(Nota 26/jul: con el Bio Spectrum 11 fuera, ningún panel del libro lleva 670 nm. El recuadro puede quedarse como divulgación pura, sin vínculo con producto — de hecho queda más limpio y más creíble.)*
Shinhmar & Jeffery (UCL), *Optically Improved Mitochondrial Function Redeems Aged Human Visual Decline*, **J Gerontol A Biol Sci Med Sci. 2020;75(9):e49–e52**. Fascinante y 🟡 legítimo, **pero es mirada directa con dosimetría de laboratorio**.
- ✅ Contarlo como **ciencia interesante** en recuadro de divulgación.
- ❌ **No dar instrucciones para replicarlo en casa.** La literatura de RLRL en miopía infantil documenta descensos de densidad de conos, lesiones tipo drusa y un caso de pérdida de agudeza visual (reversible), y análisis que concluyen que algunos instrumentos comerciales **exceden los límites de seguridad fotobiológica**.

**🚨 LEGAL:** "niebla mental" aceptable como coloquial. **Prohibido:** depresión, TBI, Alzheimer, Parkinson, TDAH, deterioro cognitivo.

**ALÉRGENOS:** 👁️ (gafas obligatorias) 🩺 (epilepsia fotosensible → **evitar modos pulsados**; el Core tiene modo pulsado 10 Hz) 💊 🤰

---

## 🦵 RECETA 6 — DOLOR ARTICULAR Y MUSCULAR

**⚠️ La receta con la MEJOR evidencia y el PEOR encaje legal.**

| | |
|---|---|
| **λ** | **810 + 850 nm** (articulación y músculo profundo) + **660 nm** (superficial y periarticular) |
| **Zona** | Articulación o vientre muscular concreto |
| **Dosis diana** | **10–30 J/cm²** en LED de área. En láser puntual: **4–8 J por punto a 785–860 nm** |
| **Distancia** | 5–15 cm, o en contacto con el Core (**recordar 0.2: en contacto, 3–4 min, no 20**) |
| **Frecuencia** | Diaria o alterna 2–4 semanas; mantenimiento 2–3/semana |
| **Panel** | **Deep 5** (zona amplia). **Core** es aquí su mejor caso de uso: portátil, en contacto |

**SEMÁFORO: 🟢 ESTABLECIDO — pero en indicación CLÍNICA, no de consumo**
- Stausholm MB et al. *Efficacy of low-level laser therapy on pain and disability in knee osteoarthritis…* **BMJ Open. 2019;9(10):e031142.** 22 ensayos, n=1.063. Dosis-respuesta clara.
- Chow RT, Johnson MI, Lopes-Martins RA, Bjordal JM. *Efficacy of low-level laser therapy in the management of neck pain.* **Lancet. 2009;374(9705):1897–1908.** (Con la salvedad de crítica metodológica publicada.)

**🚨🚨 ALERTA LEGAL MÁXIMA — EL MAYOR RIESGO DEL LIBRO**
La evidencia buena está en **artrosis de rodilla** y **cervicalgia**: **enfermedades**. Los paneles **no tienen marcado CE como producto sanitario** para esas indicaciones.

| ❌ PROHIBIDO | ✅ REFORMULACIÓN SEGURA |
|---|---|
| "Alivia la artrosis de rodilla" | "Apoyo al **confort articular** en el día a día" |
| "Trata el dolor cervical" | "Para esas **cervicales cargadas** tras horas de pantalla" |
| "Reduce el dolor un 30 %" | "Muchos usuarios describen **mayor sensación de alivio y movilidad**" |
| "Tratamiento para el dolor crónico" | "**Rutina de cuidado** para molestias musculares cotidianas" |
| Citar Stausholm como prueba del producto | Citarlo como **contexto científico de la PBM en general**, con nota de que son protocolos clínicos con láser |

**Línea obligatoria:** *"Un dolor que persiste, se intensifica o te despierta por la noche necesita un diagnóstico médico, no una lámpara. La luz no sustituye a nadie."*

**ALÉRGENOS:** 👁️ 🌡️ 🩺 🤰 🎨

---

## 🧒 RECETA 7 — ENTORNO DE LOS NIÑOS

**Esta receta NO tiene protocolo de panel. Y ese es su mensaje.**
Es la que más credibilidad te va a dar: la única marca que dice "aquí no" es la que se cree cuando dice "aquí sí".

### Parte A — Higiene electromagnética (la prioridad real)

| Acción | Nivel |
|---|---|
| Router fuera del dormitorio infantil; apagado nocturno | 🟢 |
| Móvil/tablet no en la cama, ni bajo la almohada, ni cargando en la mesilla | 🟢 |
| Distancia > uso: la exposición cae con el cuadrado de la distancia | 🟢 física básica |
| Manos libres / altavoz en llamadas | 🟢 |
| Sin pantallas 1–2 h antes de dormir | 🟢 (Brainard 2001) |
| Modo avión en dispositivos usados como reproductor o despertador | 🟢 |

**Encuadre honesto:** la IARC clasificó los campos de RF como **posible carcinógeno (Grupo 2B, 2011)**. Significa "no descartado", **no** "demostrado". Los niños tienen cráneo más fino, tejido más conductivo y una vida de exposición por delante. Justifica **precaución, no alarma**.

### Parte B — Luz natural (el sustituto real del panel) 🟢

| | |
|---|---|
| **Prescripción** | **≥ 2 horas al aire libre al día**, especialmente por la mañana |
| **Evidencia** | He M, Xiang F, Zeng Y, et al. *Effect of Time Spent Outdoors at School on the Development of Myopia Among Children in China: A Randomized Clinical Trial.* **JAMA. 2015;314(11):1142–1148.** Aleatorizado por clústeres, 12 colegios, 3 años |
| **Por qué es oro** | **Ensayo aleatorizado, en niños, desenlace duro, gratis y sin producto.** El claim 🟢 más fuerte del capítulo — y no vende nada. Eso lo hace **enormemente creíble** |

### Parte C — Fotobiomodulación en menores: **NO por defecto**

> **Postura de Ekio, textual para el libro:**
> *"No recomendamos el uso de paneles de fotobiomodulación en menores de 16 años sin la indicación y supervisión de un profesional sanitario. No es que la luz roja sea peligrosa: es que no existen datos suficientes en población infantil para que nadie —nosotros incluidos— pueda darte una dosis con la confianza que tú te mereces. Y cuando no sabemos, lo decimos."*

**Base honesta:**
- Existe uso pediátrico legítimo de PBM, **pero siempre clínico y supervisado** (mucositis oral por quimio, parálisis cerebral espástica, ensayos en TEA con sham).
- **No hay consenso de parámetros en pediatría.** Las revisiones lo dicen explícitamente.
- Señal de alarma que cierra el argumento: en los dispositivos RLRL para miopía se han documentado **descensos de densidad de conos, lesiones tipo drusa, un caso de pérdida de agudeza visual (reversible)**, y análisis independientes concluyen que **algunos instrumentos comerciales superan los límites de seguridad fotobiológica**. Es decir: **luz roja + niños + dispositivo doméstico sin dosimetría = el escenario exacto donde ya han aparecido problemas.**

**Panel recomendado:** **ninguno como recomendación general.** El producto de esta receta es el **Spiro** (con lenguaje de fabricante) y **la puerta de casa abierta hacia la calle**.

**🚨 LEGAL:** ni una palabra sobre TDAH, autismo, miopía como "tratable", rendimiento escolar o ansiedad infantil. He 2015 se usa como **argumento a favor del aire libre**, jamás como "la luz previene la miopía y nuestro panel da luz".

**ALÉRGENOS:** 🧒 👁️ (los niños no obedecen "no mires la lámpara" — razón adicional de peso)

---

## 🧊 RECETA 8 — RECUPERACIÓN DEPORTIVA POST-ENTRENO

| | |
|---|---|
| **λ** | **850 nm** dominante + **660 nm** |
| **Dosis diana** | **20–60 J por zona** |
| **Distancia** | 10–20 cm |
| **Momento** | **0–6 h post-esfuerzo**, ventana de instalación de la respuesta inflamatoria y DOMS |
| **Panel** | **Deep 5** |

**SEMÁFORO: 🟡 — con matiz incómodo que hay que publicar**
- Vanin 2018 (misma meta-análisis que Receta 2). **La evidencia es más consistente PRE-ejercicio que POST.**
- Ensayos negativos post-esfuerzo (*Front Physiol.* 2019;10:811).

**Consejo editorial:** caja de honestidad → *"Si tuvieras que elegir un solo momento, la ciencia dice: antes, no después."* Va **contra** el uso intuitivo y contra lo que vende la competencia. Ese detalle hace que el lector confíe en el resto del libro.

**🚨 LEGAL:** evitar "acelera la reparación de fibras", "reduce el daño muscular X %", "previene lesiones".

**ALÉRGENOS:** 👁️ 🌡️ 🎨

---

# AUDITORÍA LEGAL — SEMÁFORO DE PUBLICABILIDAD

## 🟢 SEGURO TAL CUAL
- Mecanismo: luz roja/NIR → CcO → ATP → vías antioxidantes.
- Respuesta bifásica y curva de Arndt-Schulz (Huang 2009).
- Espectro de acción de melatonina y luz azul nocturna (Brainard 2001).
- Tiempo al aire libre y miopía infantil (He 2015, JAMA).
- Colágeno, rugosidad y aspecto de la piel (Wunsch 2014) — encuadre **cosmético**.
- Rendimiento muscular pre-ejercicio (Vanin 2018) — encuadre **deportivo**.
- Higiene electromagnética por distancia, tiempo y apagado.
- Vocabulario de **bienestar, apoyo, confort, optimización, rutina, sensación de**.

## 🟡 SOLO REFORMULADO
| Crudo | Reformulación obligatoria |
|---|---|
| PBM reduce dolor en artrosis | "Confort articular en el día a día" + nota de estudios clínicos con láser |
| PBM mejora el sueño | "Rutina de noche" + atribuir al conjunto de hábitos |
| PBM mejora la cognición | "Claridad mental" + declarar que los ensayos usan láser calibrado |
| El electrosmog daña las mitocondrias | "Existe un cuerpo creciente de estudios, mayoritariamente preclínicos, que asocia…" |
| 670 nm mejora la visión envejecida | Recuadro divulgativo **sin instrucciones de uso** |
| ~~Bio Spectrum 11 y vitamina D (UV-B)~~ | ✅ **RESUELTO 26/jul: el Bio Spectrum 11 no aparece en el libro.** Ni receta, ni mención, ni UV |

## 🔴 ELIMINAR — no publicable con ISBN
- Cualquier verbo de **curar, tratar, prevenir, revertir** aplicado a enfermedad.
- Nombres de patologías como objetivo: insomnio, artrosis, depresión, Alzheimer, TDAH, autismo, fibromialgia, síndrome de fatiga crónica, acné, rosácea, psoriasis, miopía.
- **SPIRO con mecanismo físico afirmado** ("repolariza el espín", "armoniza la frecuencia"). Solo cabe: *"según su fabricante, Noxtak, el dispositivo…"*
- **Biofotones, agua EZ y "electrobiofotónica"** presentados como mecanismo.
  ⚠️ **Nota delicada:** *Electrobiofotónica* es el **título del libro**. Debe funcionar como **concepto-marco declarado desde la primera página** ("un término que proponemos para nombrar la relación entre campos, biología y luz"), **no** como fenómeno físico documentado. **Si no lo declaras en la intro, todo el libro queda expuesto.**
- Porcentajes o magnitudes de mejora atribuidos a los paneles Ekio.
- Cualquier dosis en J/cm² para Deep 5 o Bio Regén 7 hasta tener ficha.

## Disclaimer obligatorio (pie de cada receta)
> *Este libro es divulgación sobre bienestar. No sustituye consejo médico, diagnóstico ni tratamiento. Los dispositivos mencionados no son productos sanitarios y no están destinados a diagnosticar, tratar, curar ni prevenir ninguna enfermedad. Consulta a tu profesional de la salud antes de incorporar cualquier rutina, especialmente si estás embarazada, tomas medicación o tienes una condición médica.*

---

# BLOQUEANTES Y SIGUIENTES PASOS

| # | Acción | Prioridad |
|---|---|---|
| 1 | **Pedir a fábrica irradiancia medida (mW/cm²) a 0/5/15/30 cm** de **Deep 5 y Bio Regén 7**. Sin esto ninguna receta lleva minutos. (La del Bio Spectrum 11 sigue haciendo falta **para venderlo**, pero ya no bloquea el libro) | 🔴 Bloqueante |
| 2 | Convertir el ">150 mW/cm²" del Core en **valor medido**, y revisar el manual: en contacto la dosis útil se alcanza en 1–4 min, no en 5–30 | 🔴 Bloqueante |
| 3 | Corregir mapeo **"cognición → Bio Spectrum"** en `Skills/references/pbm-productos.md` y landings: el 810 nm está en **Deep 5 y Bio Regén 7** | 🟠 Alta |
| 4 | `pbm-productos.md` dice "Bio Spectrum **10**"; las specs reales son **11 longitudes** | 🟠 Alta |
| 5 | Unificar precio Core: memoria 147 € vs landing 140 € | 🟡 Media |
| 6 | ✅ **RESUELTO 26/jul — Javier saca el Bio Spectrum 11 del libro.** El libro cubre Core, Deep 5 y Bio Regén 7 | ✅ Cerrado |
| 7 | Revisión legal externa del capítulo de recetas antes de subir a KDP | 🟠 Alta |

---

# FUENTES

- Huang et al. 2009 — Biphasic dose response in LLLT — https://pubmed.ncbi.nlm.nih.gov/20011653/
- Huang et al. 2011 — Biphasic dose response, an update — https://pmc.ncbi.nlm.nih.gov/articles/PMC3315174/
- Shinhmar/Jeffery 2020 — 670 nm and aged human visual decline — https://pubmed.ncbi.nlm.nih.gov/32596723/
- Vanin et al. 2018 — PBM, muscular performance and fatigue, meta-analysis
- Front Physiol 2019 — negative trial, judo athletes — https://www.frontiersin.org/journals/physiology/articles/10.3389/fphys.2019.00811/full
- Wunsch & Matuschka 2014 — red/NIR skin trial — https://journals.sagepub.com/doi/10.1089/pho.2013.3616
- Stausholm et al. 2019 — LLLT knee osteoarthritis, BMJ Open
- Chow et al. 2009 — LLLT neck pain, The Lancet — https://pubmed.ncbi.nlm.nih.gov/19913903/
- Barrett & Gonzalez-Lima 2013 — transcranial IR laser stimulation — https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3953713/
- Blanco et al. 2017 — executive function, tPBM
- Salehpour et al. 2018 — Brain Photobiomodulation Therapy review — https://pubmed.ncbi.nlm.nih.gov/29327206/
- Zhao et al. 2012 — Red light, sleep quality, endurance — https://pubmed.ncbi.nlm.nih.gov/23182016/
- Brainard et al. 2001 — Action spectrum for melatonin regulation — https://www.jneurosci.org/content/21/16/6405
- He et al. 2015 — Time outdoors and myopia, JAMA — https://jamanetwork.com/journals/jama/fullarticle/2441261
- Red Light Instruments for Myopia Exceed Safety Limits — https://pmc.ncbi.nlm.nih.gov/articles/PMC10922340/
- Safety of repeated low-level red-light therapy for myopia: systematic review
- tPBM in children 2–6 with ASD — randomized sham-controlled trial — https://pmc.ncbi.nlm.nih.gov/articles/PMC11086174/
- Yakymenko et al. 2016 — Oxidative mechanisms of low-intensity RF radiation
- Whole-Body PBM for Fibromyalgia: A Feasibility Trial (2023)
