# BIBLIOTECA CIENTÍFICA DE PROTOCOLOS DE FOTOBIOMODULACIÓN — EKIO LIGHT
## Documento 00 · Marco Técnico Compartido

> **Uso interno — Ekio Bienestar S.L. (Valladolid).** Material informativo y de bienestar. No constituye consejo médico ni sustituye la valoración clínica individualizada. Los paneles Ekio Light se comercializan como dispositivos de bienestar, **no** como producto sanitario con indicación terapéutica aprobada. Toda afirmación se gradúa por nivel de evidencia (ver leyenda).

Este documento centraliza lo que se repite en todos los módulos (catálogo de equipos, longitudes de onda, dosimetría, seguridad, marco electrobiofotónico y formato), para no duplicarlo en cada protocolo. **Cada módulo posterior remite aquí.**

---

## 1. CATÁLOGO EKIO LIGHT Y MAPEO DE BANCOS LED

> ⚠️ **Origen de los datos.** Longitudes de onda y configuración LED tomadas de las fichas públicas de electrosmogespana.com (colección *Productos Luz Roja*) + confirmación del cliente sobre el control independiente de bancos y la presencia de **727 nm**. La **irradiancia (mW/cm²), las dimensiones y el área de cobertura NO están publicadas** → pendientes de ficha técnica / medición con radiómetro (ver §3).

| Nombre comercial (prompt) | Nombre en tienda | Precio | Bancos LED encendibles por separado | Longitudes de onda |
|---|---|---|---|---|
| **Deep 5** | Luz Roja Deep 5 | 600 € | Rojo · Infrarrojo | 630 · 660 · **727** · 810 · 830 · 850 · 940 nm |
| **Bio Regén 7** | Deep 7 Cyan | 650 € | Rojo · Infrarrojo · Cian · COB | 480 (cian) · 630 · 660 · **727** · 810 · 830 · 850 · 940 nm · COB |
| **Bio Spectrum 10** | Full Spectrum 10 | 2.500 € | Rojo · Infrarrojo · Cian · UV/violeta (espectro completo) · COB | UV/violeta · 480 · 630 · 660 · **727** · 810 · 830 · 850 · 940 nm · COB |

**Datos técnicos confirmados (Deep 7 / Bio Regén 7 — extrapolables a la gama):**
- **70 LEDs de doble chip de 5 W.**
- **Atenuación (dimming) regulable 20 %–100 %.**
- **Pulsación configurable 1 – 10.000 Hz** (modo continuo = 100 % sin pulso).

**Lectura estratégica del control por bancos** (clave de toda la biblioteca): permite **dosificar por cromóforo y profundidad**. Encender solo rojo (630/660) para piel/superficie; solo IR (810–940) para tejido profundo, articulación, transcraneal; cian (480) para acción circadiana/antimicrobiana superficial; UV/violeta (solo Bio Spectrum, con extrema cautela) para usos muy puntuales; **COB** (chip-on-board de alta densidad) para máxima potencia/área en sesiones de cuerpo o grupos musculares grandes.

---

## 2. MAPA MAESTRO LONGITUD DE ONDA → CROMÓFORO → MECANISMO → EVIDENCIA

| λ (nm) | Color | Cromóforo / diana | Penetración aprox. | Mecanismo principal | Evidencia |
|---|---|---|---|---|---|
| **UV/violeta** | Ultravioleta–violeta | Porfirinas, ADN, vit. D cutánea | Muy superficial (<0,5 mm) | Acción antimicrobiana/queratolítica; síntesis vit. D. **Alto riesgo fototóxico** | 🟡/🔴 (uso muy restringido) |
| **480** | Cian | Melanopsina (ipRGC), flavinas, bilirrubina | Superficial | Señal circadiana (alerta diurna), efecto sobre microbiota cutánea | 🟡 |
| **630** | Rojo | Citocromo c oxidasa (CCO), unidad CuA | 1–2 mm (dermis) | ↑ATP, colágeno/elastina, antiinflamatorio cutáneo | 🟢 (piel) |
| **660** | Rojo profundo | CCO (CuA/CuB) | 2–3 mm | ↑ATP, fibroblastos, cicatrización, folículo piloso | 🟢 |
| **727** | Far-red / NIR cercano | CCO + agua estructurada intracelular | 3–4 mm | ↑cadena respiratoria, antiinflamatorio sistémico, regulación circadiana; penetración profunda con menor calentamiento | 🟡 (emergente, mecanismo sólido) |
| **810** | NIR | CCO (banda de absorción óptima) | ~4–5 cm | Transcraneal, nervio, músculo profundo; ↑ATP, BDNF, flujo cerebral | 🟢 (NIR cerebro/músculo) |
| **830** | NIR | CCO + agua | ~4–5 cm | Cicatrización profunda, antiinflamatorio, recuperación muscular | 🟢 |
| **850** | NIR | CCO + agua | ~4–6 cm | Músculo, articulación, microcirculación, recuperación deportiva | 🟢 |
| **940** | NIR lejano | Agua principalmente | Térmico/profundo | Vasodilatación térmica, confort articular; baja absorción CCO | 🟡 |
| **COB** | Banda ancha | Mezcla (rojo+NIR de alta densidad) | Variable | Alta potencia/área para cuerpo completo y grandes grupos | 🟡 (depende de espectro real) |

**Mecanismo molecular común (núcleo PBM):** la luz roja/NIR es absorbida por la **citocromo c oxidasa (Complejo IV mitocondrial)** → disociación del óxido nítrico inhibitorio → ↑ flujo de electrones → **↑ síntesis de ATP** + ráfaga modulada de **especies reactivas de oxígeno (ROS) de señalización** → activación de factores de transcripción (NF-κB, Nrf2) → respuesta antiinflamatoria, antioxidante y de reparación. Evidencia: revisiones de Hamblin y cols.; base mecanística 🟢 robusta, eficacia clínica variable por indicación.

> **Sobre el 727 nm:** el cliente confirma su presencia en la gama. La banda far-red tiene **mecanismo plausible** (absorción CCO + efectos sobre agua intracelular y cronobiología) pero **menos ensayos clínicos dedicados** que 660/810/830/850. Donde el 727 sea protagonista, el protocolo se marca como **"Base Racional"**.

### Leyenda de evidencia
- 🟢 **Sólida** — metaanálisis / múltiples ECA concordantes.
- 🟡 **Moderada / emergente** — ECA aislados, estudios pequeños, fuerte plausibilidad mecanística.
- 🔴 **Preliminar / Base Racional** — sin ECA específicos; protocolo derivado de mecanismos conocidos. Se etiqueta explícitamente.

---

## 3. DOSIMETRÍA: CÓMO LEER LOS PARÁMETROS (CRÍTICO)

Toda la biblioteca expresa la **dosis objetivo en J/cm²** (energía por superficie), porque es el parámetro biológicamente relevante e independiente del equipo. El **tiempo de sesión depende de la irradiancia real (mW/cm²)** de cada panel a la distancia de uso, dato hoy **no publicado**.

### Fórmula única de conversión

```
Tiempo (segundos) = Dosis objetivo (J/cm²) × 1000 ÷ Irradiancia (mW/cm²)

   equivalente:  Dosis (J/cm²) = Irradiancia (mW/cm²) × Tiempo (s) ÷ 1000
```

### Tabla de calibración (rellenar al medir / recibir ficha)

Mide la irradiancia con radiómetro PBM (p. ej. a 15 cm y a 30 cm, banco a banco) y completa:

| Banco | Irradiancia @15 cm | Irradiancia @30 cm |
|---|---|---|
| Rojo (630/660) | ____ mW/cm² | ____ mW/cm² |
| IR (810–940) | ____ mW/cm² | ____ mW/cm² |
| Cian (480) | ____ mW/cm² | ____ mW/cm² |
| COB | ____ mW/cm² | ____ mW/cm² |

### Convención de "tiempo provisional" en esta biblioteca

Cuando un protocolo da un tiempo en minutos, asume una **irradiancia de referencia provisional de 100 mW/cm² a 15 cm** (valor típico de paneles de doble chip 5 W de gama media; **SUPUESTO a recalibrar**). Con esa referencia:

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

**Protección ocular:** no mirar directamente a los LED. Gafas opacas en sesiones faciales y transcraneales. El UV/violeta del Bio Spectrum exige protección reforzada y exposición mínima.

**Pulsación y epilepsia fotosensible:** el modo pulsado (1–10.000 Hz) puede ser un desencadenante en personas con **epilepsia fotosensible**; usar continuo o evitar destellos visibles en este perfil.

**Calor:** los NIR largos (940) y el COB generan calor; vigilar distancia y sensación térmica, especialmente sobre zonas con sensibilidad alterada (neuropatía).

**Contraindicaciones/precauciones transversales:**
- **Fármacos fotosensibilizantes** (algunos antibióticos, retinoides, hipérico, amiodarona, ciertos diuréticos) → riesgo fototóxico.
- **Embarazo:** evitar irradiación directa sobre abdomen/zona lumbar baja.
- **Cáncer activo / lesiones sospechosas:** no irradiar sobre la zona sin valoración oncológica (la PBM puede modular proliferación celular; el dolor oncológico de soporte solo bajo supervisión).
- **Tiroides:** cautela e individualización al irradiar cuello anterior.
- **Fotosensibilidad cutánea, lupus, melasma activo:** valorar; el calor/luz puede agravar pigmentación.
- **Tatuajes oscuros:** absorben más → posible calentamiento local.

---

## 5. CONTEXTO ELECTROBIOFOTÓNICO (núcleo diferencial Ekio — base compartida)

La tesis Ekio: la **contaminación electromagnética no ionizante (electrosmog)** introduce "ruido" en el entorno bioelectromagnético que puede **aumentar el estrés oxidativo, alterar el calcio intracelular (canales VGCC) y perturbar la melatonina/ritmo circadiano**, condiciones que **solapan con las dianas de la PBM**. Por eso Ekio plantea trabajar las dos palancas a la vez: **reducir la carga EMF no coherente + restaurar la función mitocondrial con luz**.

> Marco conceptual propio ("electrobiofotónica"). La relación EMF↔salud a niveles no térmicos es **objeto de debate científico** (evidencia 🟡/🔴 según endpoint). Se presenta como principio de precaución y mejora del entorno, no como hecho clínico cerrado.

**A. Diagnóstico EMF previo** (recomendado antes de cualquier protocolo): medición profesional del entorno (RF de WiFi/5G/Bluetooth, baja frecuencia de cableado/aparatos, campos del dormitorio y zona de tratamiento).

**B. Higiene EM por entorno:** hogar (router lejos del dormitorio y apagado de noche, modo avión, cableado ordenado), centro deportivo (RF y maquinaria), oficina/teletrabajo (pantallas, WiFi, cableado bajo mesa), aula (routers de alta potencia, tablets, PDI).

**C. Tecnología SPIRO (Noxtak)** — *Scalar Phi Induced Radiation Oscillator*: tecnología que, según el fabricante, **polariza/armoniza el espectro no ionizante** neutralizando efectos biológicos sin eliminar la señal. Selección por entorno:
- **Spiro Card** → personal (bolsillo, sobre el cuerpo, en sesión PBM).
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

### Índice de módulos
- **00 · Marco Técnico** (este documento)
- **01 · Cuidado facial y estética médica** ✅ Fase 1
- **02 · Adelgazamiento, composición corporal y drenaje linfático**
- **03 · Manejo del dolor** ✅ Fase 1
- 04 · Insomnio y sueño · 05 · Fatiga · 06 · Menopausia · 07 · Andropausia · 08 · Rendimiento deportivo · 09 · Rendimiento cognitivo · 10 · Inmunología/inflamación · 11 · Salud mental
- **Anexos:** tabla comparativa · onboarding 4 semanas · checklist higiene EM · hoja de ruta 30 contenidos
