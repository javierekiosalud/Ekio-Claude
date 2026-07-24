# BIBLIOTECA CIENTÍFICA DE PROTOCOLOS DE FOTOBIOMODULACIÓN — EKIO LIGHT
## Documento 00 · Marco Técnico Compartido

> **Uso interno — Ekio Bienestar S.L. (Valladolid).** Material informativo y de bienestar. No constituye consejo médico ni sustituye la valoración clínica individualizada. Los paneles Ekio Light se comercializan como dispositivos de bienestar, **no** como producto sanitario con indicación terapéutica aprobada. Toda afirmación se gradúa por nivel de evidencia (ver leyenda).

Este documento centraliza lo que se repite en todos los módulos (catálogo de equipos, longitudes de onda, dosimetría, seguridad, marco electrobiofotónico y formato), para no duplicarlo en cada protocolo. **Cada módulo posterior remite aquí.**

> 🔄 **Sincronizado el 24-jul-2026** con los paquetes de landing autoritativos (`ekio-core-landing/`, `ekio-deep5-landing/`, `ekio-bio-regen-7-landing/`, `ekio-bio-spectrum-11-landing/`, cada uno con `02-COPY-COMPLETO.md` como fuente de verdad, actualizados el 15-jul-2026). Las cuestiones que esa sincronización **no** pudo resolver están abiertas en **§7** y requieren decisión de Javier antes de tocar los protocolos.

---

## 1. CATÁLOGO EKIO LIGHT Y MAPEO DE BANCOS LED

> **Origen de los datos.** Precios, longitudes de onda, recuento de LED y circuitos tomados de los cuatro paquetes de landing (15-jul-2026). La **irradiancia (mW/cm²), la potencia total, las dimensiones y el área de cobertura de los tres paneles siguen sin publicar** — las propias landings las marcan como pendientes de ficha técnica de fabricación. El único dato de irradiancia publicado en toda la gama es el del Core (ver §3).

| Nombre comercial | Precio | LEDs | Bancos / circuitos encendibles por separado | Longitudes de onda |
|---|---|---|---|---|
| **Core** | **147 €** (antes 175 €) | 13 de chip dual, sin COB | Rojo · NIR · Combinado (3 modos) | 660 · 850 nm |
| **Deep 5** | **650 €** | 5 módulos de alta potencia | Rojo · Infrarrojo | 630 · 660 · **727** · 810 · 850 nm |
| **Bio Regén 7** | **970 €** | 70 + 1 COB (660+850) | Rojo · Infrarrojo · Cian · COB | 485 (cian) · 630 · 660 · **727** · 810 · 850 · 940 nm · COB |
| **Bio Spectrum 11** 🏆 | **2.500 €** | 210 perimetrales + módulo COB central | **4 circuitos independientes:** Azul · Rojo · Infrarrojo · COB | 292 (UV-B) · 385 (UV-A) · 405 (violeta) · 485 (cian) · 630 · 660 · 670 · **727** · 850 · 935 · 1050 nm · COB |

### Notas de catálogo

**Core** (`ekio-light-core-terapia-luz-roja-portatil`) — dispositivo portátil de terapia **local**, no panel. 13 LEDs de chip dual (rojo + NIR en cada LED), batería recargable con carga USB-C, 162 × 90 × 45 mm, vida útil >20.000 h. Tres modos: solo rojo (660) / solo NIR (850) / combinado, **más modo pulsado a 10 Hz**. Devolución 30 días. **No** lleva mención del Modelo de Utilidad (no aplica a este dispositivo).

**Deep 5** (`panel-luz-roja-deep-5`) — panel de iniciación, 5 longitudes, **sin COB**. Sesión de referencia en ficha: 10–20 min por zona.

**Bio Regén 7** (`bio-regen-7-panel-regeneracion-celular`) — modelo técnico *EKLO LIGHT 70*. Añade sobre el Deep 5 el **cian 485 nm** y el **infrarrojo profundo 940 nm**, más el módulo COB. AC 100-240 V · 0,5-1,5 A · RoHS, FCC, CE, WEEE · EMF bajo (transformador externo) · diseñado en España.

**Bio Spectrum 11** 🏆 (`bio-spectrum-11-panel-fotobiomodulacion-profesional`) — **buque insignia**. Único de la gama con **UV-B real (292 nm)** y con infrarrojo a **1050 nm**. Sus 11 longitudes se agrupan en **4 circuitos independientes**, cada uno con intensidad y frecuencia de pulso ajustables por separado:

| Circuito | Longitudes | Nota |
|---|---|---|
| **Azul** | 292 · 385 · 405 · 485 | Van soldadas al mismo bloque: **no se puede aislar solo el UV-B**, solo regular intensidad y pulso del bloque completo. Gafas UV obligatorias (incluidas en el precio). |
| **Rojo** | 630 · 660 · 670 · 727 | Independiente del Azul y del COB. |
| **Infrarrojo** | 850 · 935 · 1050 | Independiente del Rojo. Combinación habitual para sesión nocturna con ojos cerrados. |
| **COB** | 660 + 850 | Módulo central de alta densidad, circuitería propia. **No** forma parte de los 210 LEDs perimetrales. |

Protegido por el **Modelo de Utilidad español Nº U202532624** (PCT en tramitación).

> ⚠️ **Cautela legal (decisión Javier 15-jul-2026):** el claim del MU en todo el sistema debe ser exactamente *"Modelo de Utilidad español Nº U202532624"*, sin la coletilla "protegida/registrada en 157 países". El PCT aún no está presentado, así que afirmar protección internacional concedida es un claim falso. Se puede decir "PCT en tramitación".

**Lectura estratégica del control por bancos** (clave de toda la biblioteca): permite **dosificar por cromóforo y profundidad**. Encender solo rojo (630/660/670) para piel y superficie; solo IR (810–1050) para tejido profundo, articulación y uso transcraneal; cian (485) para acción circadiana diurna; UV/violeta (solo Bio Spectrum 11, con extrema cautela) para vitamina D y usos muy puntuales; **COB** para máxima densidad de dosis sobre una zona concreta mientras el resto del panel da cobertura general.

---

## 2. MAPA MAESTRO LONGITUD DE ONDA → CROMÓFORO → MECANISMO → EVIDENCIA

| λ (nm) | Color | Cromóforo / diana | Penetración | Mecanismo principal | Paneles | Evidencia |
|---|---|---|---|---|---|---|
| **292** | UV-B | 7-dehidrocolesterol | <0,1 mm | Síntesis endógena de vitamina D (previtamina D3). **Único riesgo fototóxico real de la gama** | BS11 | 🟡 (uso restringido) |
| **385** | UV-A | Porfirinas, fluoróforos cutáneos | 0,2–0,4 mm | Acné severo; luz de diagnóstico fluorescente | BS11 | 🟡 |
| **405** | Violeta | Porfirinas de *C. acnes* | 0,3–0,5 mm | Antibacteriano profundo; estimula proteoglicanos | BS11 | 🟡 |
| **485** | Cian | Melanopsina (ipRGC), flavinas | Superficial (piel y retina) | **Señal circadiana diurna** (función principal); acción secundaria sobre flora cutánea | BR7 · BS11 | 🟡 |
| **630** | Rojo visible | Citocromo c oxidasa (CCO), unidad CuA | 3–5 mm | ↑ATP, colágeno tipo I y III, antiinflamatorio cutáneo | D5 · BR7 · BS11 | 🟢 (piel) |
| **660** | Rojo terapéutico | CCO (CuA/CuB) | 5–10 mm | ↑ATP, fibroblastos, cicatrización, folículo piloso | Core · D5 · BR7 · BS11 | 🟢 |
| **670** | Rojo profundo | CCO, incluida la mitocondria retiniana | 5–10 mm | Mitocondria de la retina; línea metabólica (pico de glucosa) | BS11 | 🟡 |
| **727** | Far-red / NIR cercano | CCO + agua estructurada intracelular | Subcutáneo / tejido adiposo | ↑cadena respiratoria; **mitocondria del adipocito y regulación de leptina**; antiinflamatorio sistémico | D5 · BR7 · BS11 | 🟡 (emergente, mecanismo sólido) |
| **810** | NIR | CCO (banda de absorción óptima) | 15–30 mm | Transcraneal, nervio, músculo; ↑ATP, BDNF, flujo cerebral. Banda clásica del protocolo capilar | D5 · BR7 | 🟢 |
| **850** | NIR | CCO + agua | 30–50 mm | Vasodilatación, óxido nítrico, microcirculación, recuperación | Core · D5 · BR7 · BS11 | 🟢 |
| **935 / 940** | NIR profundo | Principalmente agua | 50–70 mm | Tejido conectivo, tendón, fascia, articulación. Genera calor perceptible | 940: BR7 · 935: BS11 | 🟡 |
| **1050** | NIR lejano | Agua y estructuras profundas | Hueso y nervio profundo | Máxima penetración de la gama | BS11 | 🟡 |
| **COB** | Banda ancha | Mezcla 660 + 850 de alta densidad | Variable | **Dosis concentrada** sobre una zona mientras el resto del panel cubre en general | BR7 · BS11 | 🟡 |

> **Cifras de penetración armonizadas** con las publicadas en las fichas de producto (15-jul-2026). Son orientativas: dependen de fototipo, hidratación, grosor tisular e irradiancia real. Versiones anteriores de este documento usaban cifras más conservadoras para el rojo y más generosas para el NIR; se ha adoptado lo publicado para que protocolo y landing digan lo mismo.

**Mecanismo molecular común (núcleo PBM):** la luz roja/NIR es absorbida por la **citocromo c oxidasa (Complejo IV mitocondrial)** → disociación del óxido nítrico inhibitorio → ↑ flujo de electrones → **↑ síntesis de ATP** + ráfaga modulada de **especies reactivas de oxígeno (ROS) de señalización** → activación de factores de transcripción (NF-κB, Nrf2) → respuesta antiinflamatoria, antioxidante y de reparación. Evidencia: revisiones de Hamblin y cols.; base mecanística 🟢 robusta, eficacia clínica variable por indicación.

> **Sobre el 727 nm:** presente en Deep 5, Bio Regén 7 y Bio Spectrum 11. La banda far-red tiene **mecanismo plausible** (absorción CCO + efectos sobre agua intracelular, tejido adiposo y cronobiología) pero **menos ensayos clínicos dedicados** que 660/810/850. Donde el 727 sea protagonista, el protocolo se marca como **"Base Racional"**.

> **Sobre el 830 nm:** ⚠️ **ninguna ficha de producto actual lista esta longitud.** Aparece en versiones anteriores de esta biblioteca y sigue citada en los módulos 01 y 03 marcada con `*`. Ver **§7 · P1** antes de usarla en contenido publicable.

### Leyenda de evidencia
- 🟢 **Sólida** — metaanálisis / múltiples ECA concordantes.
- 🟡 **Moderada / emergente** — ECA aislados, estudios pequeños, fuerte plausibilidad mecanística.
- 🔴 **Preliminar / Base Racional** — sin ECA específicos; protocolo derivado de mecanismos conocidos. Se etiqueta explícitamente.

---

## 3. DOSIMETRÍA: CÓMO LEER LOS PARÁMETROS (CRÍTICO)

Toda la biblioteca expresa la **dosis objetivo en J/cm²** (energía por superficie), porque es el parámetro biológicamente relevante e independiente del equipo. El **tiempo de sesión depende de la irradiancia real (mW/cm²)** de cada panel a la distancia de uso.

### Fórmula única de conversión

```
Tiempo (segundos) = Dosis objetivo (J/cm²) × 1000 ÷ Irradiancia (mW/cm²)

   equivalente:  Dosis (J/cm²) = Irradiancia (mW/cm²) × Tiempo (s) ÷ 1000
```

### Estado real de la calibración

| Equipo | Irradiancia publicada | Estado |
|---|---|---|
| **Core** | **>150 mW/cm² en contacto directo** | ✅ Único dato publicado de la gama. **No sirve para calcular a 15–30 cm**: la irradiancia cae con el cuadrado de la distancia. |
| Deep 5 | — | ❌ Sin publicar. La landing lo marca como pendiente de ficha técnica. |
| Bio Regén 7 | — | ❌ Sin publicar. Ídem. |
| Bio Spectrum 11 | — | ❌ Sin publicar. Ídem. |

### Tabla de calibración (rellenar al medir)

Mide con radiómetro PBM, banco a banco y a dos distancias:

| Panel · Banco | Irradiancia @15 cm | Irradiancia @30 cm |
|---|---|---|
| Deep 5 · Rojo (630/660) | ____ mW/cm² | ____ mW/cm² |
| Deep 5 · IR (810/850) | ____ mW/cm² | ____ mW/cm² |
| Bio Regén 7 · Rojo | ____ mW/cm² | ____ mW/cm² |
| Bio Regén 7 · IR (810–940) | ____ mW/cm² | ____ mW/cm² |
| Bio Regén 7 · Cian (485) | ____ mW/cm² | ____ mW/cm² |
| Bio Regén 7 · COB | ____ mW/cm² | ____ mW/cm² |
| Bio Spectrum 11 · Azul (292–485) | ____ mW/cm² | ____ mW/cm² |
| Bio Spectrum 11 · Rojo (630–727) | ____ mW/cm² | ____ mW/cm² |
| Bio Spectrum 11 · IR (850–1050) | ____ mW/cm² | ____ mW/cm² |
| Bio Spectrum 11 · COB | ____ mW/cm² | ____ mW/cm² |

### Convención de "tiempo provisional" en esta biblioteca

Cuando un protocolo da un tiempo en minutos, asume una **irradiancia de referencia provisional de 100 mW/cm² a 15 cm** (**SUPUESTO no verificado**, ver §7 · P3). Con esa referencia:

| Dosis objetivo | Tiempo @100 mW/cm² (provisional) |
|---|---|
| 4 J/cm² | ~40 s |
| 6 J/cm² | ~60 s |
| 10 J/cm² | ~1 min 40 s |
| 20 J/cm² | ~3 min 20 s |
| 30 J/cm² | ~5 min |
| 60 J/cm² | ~10 min |

> 🔧 **Recalibración:** cuando tengas la irradiancia real, divide. Si tu panel da 200 mW/cm², los tiempos se **reducen a la mitad**; si da 50, se **duplican**. La dosis J/cm² manda; el tiempo es la variable.

**Ventana terapéutica y bifásica (ley de Arndt-Schulz):** "más no es mejor". Dosis bajas-medias estimulan; dosis muy altas inhiben. Rangos orientativos por objetivo:
- **Superficie/piel/estética:** 3–10 J/cm²
- **Músculo/recuperación/dolor:** 10–60 J/cm² (según profundidad)
- **Transcraneal:** 10–60 J/cm² en cuero cabelludo (fracción mínima llega a corteza)
- **Articulación profunda:** 20–60 J/cm²

---

## 4. SEGURIDAD GENERAL (aplica a todos los módulos)

**Protección ocular:** no mirar directamente a los LED. Gafas opacas en sesiones faciales y transcraneales.

**Circuito UV del Bio Spectrum 11 — régimen propio.** Es la única parte de la gama con riesgo fototóxico real:
- **Gafas de protección UV obligatorias**, incluidas en el precio del panel.
- Protocolo corto: la ficha de producto habla de **2–3 min, intensidad baja, temporada sin sol**.
- **No apto** para piel fotosensible, embarazo, lactancia, medicación fotosensibilizante ni antecedentes de cáncer cutáneo o melanoma.
- UV-B, UV-A, violeta y cian **comparten circuito**: no se pueden encender por separado, solo regular intensidad y pulso del bloque.

**Pulsación y epilepsia fotosensible:** el modo pulsado puede ser un desencadenante en personas con **epilepsia fotosensible**; usar continuo o evitar destellos visibles en este perfil.

**Calor:** los NIR largos (935/940, 1050) y el COB generan calor; vigilar distancia y sensación térmica, especialmente sobre zonas con sensibilidad alterada (neuropatía).

**Contraindicaciones/precauciones transversales:**
- **Fármacos fotosensibilizantes** (algunos antibióticos, retinoides, hipérico, amiodarona, ciertos diuréticos) → riesgo fototóxico.
- **Embarazo:** evitar irradiación directa sobre abdomen/zona lumbar baja.
- **Cáncer activo / lesiones sospechosas:** no irradiar sobre la zona sin valoración oncológica (la PBM puede modular proliferación celular; el dolor oncológico de soporte solo bajo supervisión).
- **Tiroides:** cautela e individualización al irradiar cuello anterior.
- **Fotosensibilidad cutánea, lupus, melasma activo:** valorar; el calor/luz puede agravar pigmentación.
- **Tatuajes oscuros:** absorben más → posible calentamiento local.

**Garantía de gama:** devolución 30 días (Garantía Tranquilidad Ekio) + 2 años de garantía técnica de hardware en los paneles. **No** son los 90 días de SPIRO.

---

## 5. CONTEXTO ELECTROBIOFOTÓNICO (núcleo diferencial Ekio — base compartida)

La tesis Ekio: la **contaminación electromagnética no ionizante (electrosmog)** introduce "ruido" en el entorno bioelectromagnético que puede **aumentar el estrés oxidativo, alterar el calcio intracelular (canales VGCC) y perturbar la melatonina/ritmo circadiano**, condiciones que **solapan con las dianas de la PBM**. Por eso Ekio plantea trabajar las dos palancas a la vez: **reducir la carga EMF no coherente + restaurar la función mitocondrial con luz**.

> Marco conceptual propio ("electrobiofotónica"). La relación EMF↔salud a niveles no térmicos es **objeto de debate científico** (evidencia 🟡/🔴 según endpoint). Se presenta como principio de precaución y mejora del entorno, no como hecho clínico cerrado.

**A. Diagnóstico EMF previo** (recomendado antes de cualquier protocolo): medición profesional del entorno (RF de WiFi/5G/Bluetooth, baja frecuencia de cableado/aparatos, campos del dormitorio y zona de tratamiento).

**B. Higiene EM por entorno:** hogar (router lejos del dormitorio y apagado de noche, modo avión, cableado ordenado), centro deportivo (RF y maquinaria), oficina/teletrabajo (pantallas, WiFi, cableado bajo mesa), aula (routers de alta potencia, tablets, PDI).

**C. Tecnología SPIRO (Noxtak)** — *Scalar Phi Induced Radiation Oscillator*: tecnología que, según el fabricante, **polariza/armoniza el espectro no ionizante** neutralizando efectos biológicos sin eliminar la señal. Selección por entorno:
- **Spiro Card** → personal (bolsillo, sobre el cuerpo, en sesión PBM). **Base de toda recomendación: 1 por persona con móvil.**
- **SpiroDisc** → dispositivo individual (móvil, router, portátil).
- **SpiroHome** → cobertura de vivienda.
- **SpiroDefense** → entornos de alta carga (oficina, centro deportivo, aula).

> Posicionamiento honesto: SPIRO es **coadyuvante de entorno**, evidencia independiente 🟡/🔴; el argumento Ekio es de **coherencia del entorno**, no de cura.

---

## 6. FORMATO DE CADA PROTOCOLO

```
## [Nombre del protocolo]
### 🧬 Mecanismo de acción        (molecular/celular + tipo de evidencia)
### 🎯 Objetivo terapéutico        (qué se espera + plazo realista)
### ⚙️ Parámetros técnicos          (modelo · banco/λ · dosis J/cm² · tiempo provisional · distancia · modo · zona)
### 📅 Estructura del protocolo     (inducción / consolidación / mantenimiento)
### ⛔ Contraindicaciones           (específicas, además de §4)
### 🌐 Contexto electrobiofotónico  (EMF en esta condición + Spiro)
### 🌿 MTC y nutrición              (perspectiva + suplementación coadyuvante)
### 📱 Potencial de contenido       (Reel / Carrusel / Newsletter)
```

---

## 7. PREGUNTAS ABIERTAS — REQUIEREN DECISIÓN DE JAVIER

> Estas seis cuestiones **no se han resuelto** en la sincronización del 24-jul-2026 porque hacerlo unilateralmente cambiaría recomendaciones clínicas o claims de producto. Los módulos 01 y 03 llevan marcadores `*` y `†` en los puntos afectados.

### P1 · ¿Existe realmente el 830 nm en algún panel? `*`
**Situación:** ninguna de las cuatro fichas actuales lista 830 nm. Versiones anteriores de este marco lo atribuían al Deep 5 y al Bio Regén 7, y los módulos lo siguen recomendando en varios protocolos: **01** §1.1 (rejuvenecimiento: "660 + 830"), §1.4 (post-procedimiento) y §1.7 (mantenimiento facial); **03** cabecera, §3.2 (dolor crónico), §3.4 (neuropatías), §3.5 (cefalea) y §3.7 (CIPN).
**Opciones:** (a) el 830 existe y falta en las fichas → corregir las landings; (b) no existe → sustituir por **850 nm** en todos los protocolos, que es la banda contigua con la misma función de reparación profunda.
**Impacto si no se decide:** los protocolos recomiendan una longitud que el cliente no puede encender.

### P2 · El Bio Spectrum 11 no emite 810 nm `†`
**Situación:** confirmado en su ficha — el circuito Rojo es 630/660/670/727 y el Infrarrojo 850/935/1050. No hay 810 en ningún circuito. Pero el 810 es la banda clásica del **protocolo capilar** (660 + 810, módulo 01 §1.5) y aparece en los protocolos de dolor **03** §3.1, §3.2, §3.3, §3.4, §3.5 y §3.6.
**Consecuencia:** el buque insignia de 2.500 € **no cubre el protocolo de densidad capilar tal como está escrito**, y el Deep 5 de 650 € sí. Comercialmente es incómodo de sostener.
**Opciones:** (a) el 810 existe en el BS11 y falta en la ficha → corregir landing; (b) no existe → reescribir esos protocolos para el BS11 con 850, y decidir qué se responde cuando un cliente pregunte por el pelo.

### P3 · Los tiempos de toda la biblioteca siguen sin base medida
**Situación:** cada minuto publicado en los módulos 01 y 03 asume 100 mW/cm² a 15 cm, un supuesto sin verificar. Las tres landings de panel marcan la irradiancia como "pendiente antes de publicar" y siguen así nueve días después. El único dato real de la gama es el del Core (>150 mW/cm² **en contacto**, que no se puede extrapolar a distancia de panel).
**Qué desbloquea medirlo:** los tiempos dejan de ser orientativos, las fichas se pueden dar por completas en Shopify y el argumento "irradiancia real a la distancia de uso" —que el propio copy del Deep 5 usa como diferenciador frente a paneles baratos— pasa a ser demostrable.
**Coste:** un radiómetro PBM y una tarde midiendo banco a banco a 15 y 30 cm.

### P4 · ¿Cuántos COB tiene el Bio Spectrum 11? *(discrepancia nueva)*
**Situación:** su propia ficha dice **un** módulo COB central ("210 perimetrales + módulo COB central", "el cuarto circuito es el COB"). Pero la tabla comparativa de la landing del **Core** dice "210 + **2 COB**".
**Adoptado aquí:** 1 COB, por ser el dato de la ficha del propio producto. **Pendiente:** corregir la tabla del Core, o corregir la ficha del BS11 si son dos.

### P5 · Atenuación 20–100 % y pulsación 1–10.000 Hz *(discrepancia nueva)*
**Situación:** versiones anteriores de este marco afirmaban dimming regulable 20–100 % y pulsación configurable de 1 a 10.000 Hz para la gama. **Ninguna ficha publica esas cifras.** El Bio Spectrum 11 dice "intensidad y frecuencia de pulso ajustables por circuito" sin dar rango; el Core solo tiene pulsado fijo a 10 Hz.
**Acción tomada:** las cifras se han retirado de §1 hasta confirmarlas. **Pendiente:** verificar con fabricación y, si son ciertas, publicarlas — son un argumento de venta fuerte.

### P6 · Recuento de LED del Deep 5 *(discrepancia nueva)*
**Situación:** su ficha habla de "5 módulos de alta potencia" y no da número de LED. La tabla comparativa del Core y este marco decían 70. **Pendiente:** confirmar y unificar.

---

### Índice de módulos
- **00 · Marco Técnico** (este documento)
- **01 · Cuidado facial y estética médica** ✅ Fase 1
- **02 · Adelgazamiento, composición corporal y drenaje linfático**
- **03 · Manejo del dolor** ✅ Fase 1
- 04 · Insomnio y sueño · 05 · Fatiga · 06 · Menopausia · 07 · Andropausia · 08 · Rendimiento deportivo · 09 · Rendimiento cognitivo · 10 · Inmunología/inflamación · 11 · Salud mental
- **Anexos:** tabla comparativa · onboarding 4 semanas · checklist higiene EM · hoja de ruta 30 contenidos

### Material derivado que depende de este marco
- `Content/guia-fbm-belleza/index.html` — guía interactiva de fotobiomodulación en belleza (24-jul-2026). Construida directamente sobre las landings, ya usa 485/935/1050 y **no** menciona el 830. Si P1 o P2 se resuelven, revisarla.
