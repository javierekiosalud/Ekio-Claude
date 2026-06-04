# MEMORIA DESCRIPTIVA — PCT EKIO Bienestar S.L.
# Sistema y método de control adaptativo de un dispositivo de emisión
# luminosa multiespectral basado en realimentación fisiológica y aprendizaje
# continuo

**Solicitante:** EKIO Bienestar S.L. (Valladolid, España)
**Inventor:** Francisco Javier Andrés Andrés
**Prioridad reivindicada:** ES U202532624, depositado 24/12/2025 en OEPM
**Agente PI:** Patricia García — La Fábrica de Inventos S.L. (Burgos)
**Versión:** v0.1 — 2026-06-04 — borrador interno

---

# 1. TÍTULO DE LA INVENCIÓN

**Sistema y método de control adaptativo de un dispositivo de emisión
luminosa multiespectral basado en realimentación fisiológica y aprendizaje
continuo.**

---

# 2. CAMPO DE LA INVENCIÓN

La presente invención se enmarca en el campo de los sistemas de control
adaptativo de dispositivos de emisión electromagnética en el espectro
visible, infrarrojo cercano y ultravioleta cercano, integrados con
arquitecturas informáticas distribuidas y motores de inteligencia
artificial para la personalización individual de los parámetros de
emisión en función de datos biométricos del usuario.

---

# 3. ESTADO DE LA TÉCNICA

## 3.1. Estado del arte general en dispositivos de emisión luminosa
## multiespectral

Los dispositivos de emisión luminosa multiespectral basados en diodos
emisores de luz (LEDs) son conocidos en el sector de los aparatos de
necesidades corrientes de la vida y, en particular, dentro del subcampo
de los aparatos para la modulación celular mediante radiación luminosa
no ionizante (fotobiomodulación o PBM, por sus siglas en inglés).

Dispositivos representativos incluyen paneles de LEDs de marcas
comerciales como Joovv, Inc. (US11253719B2; US10478635B1), PlatinumLED
Therapy Lights, Mito Red Light, Celluma, Red Light Rising, y TheraLight
LLC (US11865356B1), entre otras. Estos dispositivos emiten habitualmente
en una combinación de longitudes de onda dominantes en el rojo visible
(en torno a 630-700 nm) y en el infrarrojo cercano (en torno a 810-1050
nm), con irradiancias típicas en el rango de 50 a 200 mW/cm² a 15 cm
del panel. Las soluciones comerciales actuales operan con parámetros
estáticos o protocolos preconfigurados seleccionables manualmente por
el usuario o por un operador.

Adicionalmente, los dispositivos de fototerapia ultravioleta (UV)
operan en longitudes de onda específicas en el rango UV-B narrowband
(en torno a 310-313 nm) para aplicaciones dermatológicas conocidas.
Sistemas representativos incluyen los descritos por Zerigo Health Inc
(US20230218922A1), Solarc Systems, Phothera (Daavlin) y Kernel Medical.
Estos sistemas operan habitualmente bajo prescripción médica y con
parámetros conditionalmente fijos definidos por un profesional
sanitario.

El modelo de utilidad español U202532624 del mismo solicitante, del cual
la presente invención reivindica prioridad parcial, describe un
dispositivo de iluminación multiespectral que comprende un panel
multiespectral con LEDs discretos emitiendo en longitudes de onda
seleccionadas entre 295, 385, 405, 485, 630, 670, 727, 850, 935 y 1050
nm, y un módulo LED central de alta densidad y potencia. Dicho modelo
de utilidad protege el hardware del dispositivo de emisión pero no
divulga ningún sistema de control adaptativo basado en inteligencia
artificial ni mecanismos de realimentación fisiológica.

## 3.2. Análisis del closest prior art — Vielight US11633621B2

La publicación US11633621B2 (Lew Lim, asignada a Vielight Inc), de fecha
de publicación 25/04/2023, divulga un sistema de fotobiomodulación
cerebral con módulos de aplicación transcraneal e intranasal, gobernado
por un sistema informático que selecciona parámetros de emisión a partir
de un diagnóstico electroencefalográfico (EEG) inicial del usuario.

Las diferencias técnicas sustanciales entre dicho sistema y la presente
invención son las siguientes:

(i) **Dominio anatómico:** US11633621B2 opera exclusivamente sobre el
sistema nervioso central, mediante penetración transcraneal e
intranasal. La presente invención opera sobre el tejido cutáneo y
sistémico de cuerpo completo. Los cromóforos diana, las profundidades
de penetración óptica relevantes y los protocolos de emisión son
sustancialmente distintos.

(ii) **Modalidad de realimentación:** US11633621B2 utiliza una medición
diagnóstica EEG inicial, sin actualización continua de los parámetros.
La presente invención utiliza una realimentación continua y multinivel
basada en sensores ópticos no invasivos integrados (espectroscopia de
infrarrojo cercano, NIRS, y termopila) y en dispositivos vestibles
externos del usuario.

(iii) **Tipo de adaptación:** US11633621B2 selecciona los parámetros
una sola vez tras el diagnóstico inicial. La presente invención
actualiza el protocolo de emisión sesión a sesión mediante un motor de
inteligencia artificial basado en aprendizaje por refuerzo.

(iv) **Control espacial:** US11633621B2 divulga seis unidades
irradiadoras transcraneales activables/desactivables de forma binaria
(on/off) para targeting de regiones cerebrales anatómicas predefinidas
(dmPFC, PCC, PCu, DLPC, cerebelo/troncoencéfalo). La presente
invención divulga un panel multiespectral dividido en una pluralidad
de zonas controladas independientemente en intensidad luminosa,
frecuencia de pulso y duración mediante valores continuos, con
asignación dinámica por el motor de inteligencia artificial.

(v) **Aprendizaje colectivo:** US11633621B2 no divulga aprendizaje
federado ni mecanismo equivalente de aprendizaje colectivo
anonimizado. La presente invención divulga un sistema de aprendizaje
federado para entrenamiento colaborativo del modelo de inteligencia
artificial sin transmisión de datos personales.

(vi) **Integración con ecosistema de salud digital:** US11633621B2 no
divulga integración con dispositivos vestibles comerciales. La presente
invención integra dispositivos vestibles a través de interfaces de
programación de aplicaciones estandarizadas (Apple HealthKit, Google
Health Connect, API de Oura).

(vii) **Dominio de aplicación:** US11633621B2 se dirige a aplicaciones
neurológicas medicalmente reguladas (Alzheimer, demencia, Parkinson,
depresión, PTSD, ADHD, TBI). La presente invención se dirige al control
técnico de un dispositivo de emisión luminosa para sesiones de
fotobiomodulación de propósito general no diagnóstico.

## 3.3. Análisis de Zerigo Health US20230218922A1

La publicación US20230218922A1 (Zerigo Health Inc, anteriormente Clarify
Medical) divulga un sistema de control de fototerapia en el que un
profesional sanitario establece parámetros condicionales para el
dispositivo, un servidor central almacena registros del paciente y los
protocolos prescritos, y un dispositivo móvil del paciente habilita la
operación del dispositivo dentro de los parámetros prescritos. El sistema
incluye análisis fotográfico post-sesión del eritema cutáneo para
recomendaciones de ajuste de dosis posteriores.

Las diferencias técnicas sustanciales entre dicho sistema y la presente
invención son:

(i) **Realimentación:** US20230218922A1 utiliza análisis fotográfico
post-sesión del eritema visible. La presente invención utiliza
sensores fisiológicos directos en tiempo real (NIRS, termopila,
fotodiodo) y datos biométricos continuos de dispositivos vestibles.

(ii) **Adaptación:** US20230218922A1 modifica los parámetros mediante
reglas configuradas por el profesional sanitario. La presente
invención modifica los parámetros mediante un motor de inteligencia
artificial adaptativo basado en aprendizaje por refuerzo.

(iii) **Prescripción médica:** US20230218922A1 requiere prescripción
médica y modula la operación del dispositivo en función de parámetros
condicionales establecidos por un profesional sanitario. La presente
invención no requiere prescripción ni intervención de un profesional
sanitario.

(iv) **Aprendizaje federado y aprendizaje colectivo:** US20230218922A1
no los divulga.

(v) **Dominio espectral:** US20230218922A1 opera en UV-B narrowband
(300-320 nm). La presente invención opera en un rango espectral
multiespectral más amplio (295-1100 nm).

## 3.4. Limitaciones reconocidas del estado de la técnica

Las soluciones conocidas presentan al menos las siguientes limitaciones
técnicas que la presente invención supera:

(a) Operación con protocolos estáticos o pre-configurados que no se
adaptan a la variabilidad individual del usuario ni a su evolución
fisiológica longitudinal.

(b) Ausencia de bucle cerrado entre la respuesta fisiológica medida
y la actualización automática del protocolo de emisión sesión a
sesión.

(c) Aislamiento del dispositivo respecto al ecosistema maduro de
salud digital (dispositivos vestibles, plataformas de salud
estandarizadas).

(d) Imposibilidad técnica de aprovechar la experiencia colectiva
agregada de una pluralidad de usuarios sin comprometer la
privacidad individual de los datos de salud.

(e) Ausencia de calibración automática del dispositivo a lo largo
de su vida útil, lo que conduce a una progresiva pérdida de
precisión de la dosis efectiva por degradación de los emisores
luminosos.

(f) Ausencia de mecanismos técnicos de gestión remota de la flota
de dispositivos que permitan actualización segura de protocolos
y mantenimiento predictivo.

---

# 4. PROBLEMA TÉCNICO QUE SE RESUELVE

A partir del estado de la técnica descrito, la presente invención
resuelve el siguiente problema técnico objetivo:

> *Cómo proporcionar un sistema de emisión luminosa multiespectral
> que adapte automáticamente, sesión a sesión y a lo largo del tiempo,
> los parámetros del protocolo de emisión a la respuesta fisiológica
> individual del usuario, integrando datos de dispositivos vestibles
> externos y de sensores fisiológicos no invasivos integrados en el
> dispositivo, mejorando la optimización de dosis y la adherencia al
> protocolo, sin requerir intervención manual de un profesional
> sanitario ni comprometiendo la privacidad de los datos de salud del
> usuario.*

Adicionalmente, la presente invención resuelve los siguientes
problemas técnicos derivados:

- Mantenimiento de irradiancia efectiva constante a lo largo de la
  vida útil del dispositivo mediante calibración automática con
  fotodiodo de referencia.
- Optimización conjunta de la eficacia fisiológica del protocolo
  y del consumo energético del dispositivo (optimización
  multiobjetivo).
- Gestión técnica remota de una flota de dispositivos mediante
  telemetría, mantenimiento predictivo basado en patrón de
  degradación de componentes y actualización over-the-air de
  protocolos.

---

# 5. DESCRIPCIÓN GENERAL DE LA INVENCIÓN

## 5.1. Visión de conjunto

La invención proporciona un sistema (100) de control adaptativo de un
dispositivo de emisión luminosa multiespectral, que comprende un
dispositivo de emisión (110), un servidor remoto (170), uno o más
dispositivos electrónicos externos (150, 160) asociados al usuario, y
una arquitectura de comunicaciones que conecta los anteriores.

El dispositivo de emisión (110) incluye un panel de emisión
multiespectral (112), una matriz de sensores no invasivos (130), una
unidad de procesamiento embebida (120) con memoria (124), un módulo de
calibración automática (140) con fotodiodo (138), y un módulo de
comunicación inalámbrica (126).

El servidor remoto (170) aloja al menos una porción de un motor de
inteligencia artificial (172) y una base de datos histórica
longitudinal del usuario (174), e implementa un mecanismo de
aprendizaje federado (176) que agrega gradientes de modelos locales
sin recibir datos personales del usuario.

El dispositivo electrónico externo (150) es típicamente un teléfono
inteligente o tableta que ejecuta una aplicación móvil de interfaz de
usuario, y se sincroniza opcionalmente con uno o más dispositivos
vestibles (160) del usuario a través de interfaces de programación de
aplicaciones estandarizadas.

El motor de inteligencia artificial (172) genera y actualiza,
sesión a sesión, un protocolo de emisión personalizado para cada
usuario, configurando los parámetros del panel de emisión (112) en
función del estado actual de la base de datos histórica longitudinal,
de los datos recibidos de los dispositivos vestibles (160) y de las
medidas registradas por la matriz de sensores (130) durante cada
sesión.

## 5.2. Signos de referencia consolidados

| Signo | Componente |
|---|---|
| 100 | Sistema completo |
| 110 | Dispositivo de emisión |
| 112 | Panel de emisión multiespectral |
| 113 | Zona de emisión del panel (individualizada) |
| 114 | LED del panel multiespectral |
| 116 | Módulo LED central de alta densidad |
| 120 | Unidad de procesamiento embebida |
| 122 | Procesador |
| 123 | Procesador neuronal (NPU) |
| 124 | Memoria no transitoria |
| 126 | Módulo de comunicación inalámbrica (BLE/WiFi) |
| 128 | Interfaz de control digital + pantalla OLED |
| 130 | Matriz de sensores no invasivos |
| 132 | Sensor NIRS |
| 134 | Sensor de temperatura por termopila |
| 138 | Fotodiodo de referencia |
| 140 | Módulo de calibración automática |
| 150 | Dispositivo electrónico externo (smartphone, tablet) |
| 152 | Aplicación móvil / PWA |
| 160 | Dispositivo vestible externo (reloj, anillo, banda) |
| 162 | API de plataforma de salud (HealthKit, Google Health, Oura) |
| 170 | Servidor remoto / backend cloud |
| 172 | Motor de inteligencia artificial (porción cloud) |
| 174 | Base de datos histórica longitudinal |
| 176 | Módulo de aprendizaje federado |
| 178 | Módulo de gestión de flota |
| 180 | Pasaporte Digital de Producto (PDP) |
| 200 | Bucle cerrado sesión-a-sesión |

---

# 6. DESCRIPCIÓN DETALLADA DE LOS COMPONENTES

## 6.1. Panel de emisión multiespectral (112)

El panel de emisión multiespectral (112) comprende una pluralidad de
diodos emisores de luz (LEDs) discretos (114), configurados para emitir
radiación electromagnética en al menos dos longitudes de onda distintas
en el rango de 295 nm a 1100 nm. En realizaciones preferentes, los LEDs
(114) están seleccionados para emitir en longitudes de onda específicas
en el grupo que consiste en 295, 385, 405, 485, 630, 670, 727, 850, 935
y 1050 nm. Dichas longitudes de onda cubren el espectro relevante para
la fotobiomodulación, incluyendo UV-B (295), UV-A (385), violeta (405),
cian (485), rojo (630, 670), rojo profundo (727), infrarrojo cercano
(850, 935) e infrarrojo profundo (1050).

El panel multiespectral está dividido en una pluralidad de zonas de
emisión (113) controlables independientemente entre sí en intensidad
luminosa, frecuencia de pulso y duración, mediante valores continuos
asignados dinámicamente por el motor de inteligencia artificial. En
realizaciones preferentes, el número de zonas es al menos 4 y
preferentemente entre 6 y 16 zonas dispuestas en una matriz
bidimensional.

Adicionalmente, el panel multiespectral integra un módulo LED central
de alta densidad y potencia (116), que comprende al menos cinco
longitudes de onda distintas seleccionadas entre 670, 727, 850, 935 y
1050 nm, controlable independientemente del resto del panel.

El conjunto está alojado en una carcasa rígida de aluminio anodizado
que proporciona soporte estructural, protección de los componentes
internos y disipación térmica. Los LEDs están cubiertos por difusores
ópticos y ópticas de polimetilmetacrilato (PMMA) para homogeneizar la
distribución espacial de la luz emitida.

## 6.2. Matriz de sensores no invasivos (130)

La matriz de sensores no invasivos (130) está integrada en el
dispositivo (110) y comprende al menos:

(a) un sensor de espectroscopia de infrarrojo cercano (132), que utiliza
múltiples longitudes de onda en el rango de 700 a 900 nm para cuantificar
en tiempo real las concentraciones relativas de oxihemoglobina (HbO₂) y
desoxihemoglobina (HHb) en el tejido cutáneo expuesto, permitiendo
estimar la saturación de oxígeno tisular (StO₂);

(b) un sensor de temperatura sin contacto (134) basado en termopila
infrarroja, configurado para monitorizar la temperatura superficial del
tejido en al menos una región expuesta al panel de emisión.

En realizaciones preferentes, la matriz incluye además:

(c) sensores de proximidad time-of-flight (ToF) para estimar la
distancia entre el panel de emisión y la superficie del tejido del
usuario, permitiendo al motor de inteligencia artificial compensar
las variaciones de irradiancia incidente debidas a la geometría
del usuario;

(d) un sensor de humedad y temperatura ambiental para parametrizar
las condiciones del entorno de uso.

## 6.3. Módulo de calibración automática (140) y fotodiodo (138)

El módulo de calibración automática (140) comprende un fotodiodo de
referencia (138) ópticamente acoplado a una porción representativa
del panel de emisión multiespectral, una unidad de muestreo digital
y un controlador de calibración ejecutado por el procesador (122).

El módulo de calibración (140) está configurado para:

(a) ejecutar periódicamente, en respuesta a un disparador temporal o
de inicio de sesión, una secuencia de calibración en la que cada
LED (114) o grupo de LEDs es excitado individualmente a corriente
nominal durante un intervalo predefinido;

(b) registrar mediante el fotodiodo (138) la irradiancia efectiva
medida durante dicho intervalo;

(c) comparar la irradiancia efectiva medida con un valor de
referencia almacenado en la memoria (124) en un momento de
calibración inicial;

(d) calcular un factor de degradación individual para cada LED;

(e) ajustar la corriente de excitación nominal de cada LED durante
las sesiones de emisión posteriores aplicando dicho factor, para
mantener una irradiancia efectiva sustancialmente constante a lo
largo de la vida útil del dispositivo;

(f) transmitir periódicamente, a través del módulo de comunicación
inalámbrica (126), el conjunto de factores de degradación al
servidor remoto (170) para su procesamiento por el algoritmo de
mantenimiento predictivo (ver sección 14).

## 6.4. Unidad de procesamiento embebida (120)

La unidad de procesamiento (120) comprende un procesador de
arquitectura general (122) y, en realizaciones preferentes, un
procesador neuronal dedicado (123) (NPU — Neural Processing Unit). El
procesador neuronal (123) está configurado para ejecutar localmente al
menos un subconjunto del motor de inteligencia artificial (172),
permitiendo la operación del sistema sin conexión a una red de
comunicaciones externa (Edge AI).

Ejemplos no limitativos de procesadores neuronales adecuados incluyen
Apple Neural Engine, Qualcomm Hexagon NPU, Google Edge TPU, NVIDIA
Jetson y arquitecturas equivalentes capaces de ejecutar redes
neuronales optimizadas para inferencia en dispositivos embebidos.

La memoria (124) comprende al menos una región no volátil para el
almacenamiento del motor de inteligencia artificial (172) y de la base
de datos histórica longitudinal (174), y una región volátil para la
ejecución del motor de inteligencia artificial durante la sesión.

La unidad de procesamiento (120) gestiona la interfaz de control digital
y pantalla OLED (128) del dispositivo y todas las comunicaciones con el
panel de emisión (112), la matriz de sensores (130), el módulo de
calibración (140) y el módulo de comunicación inalámbrica (126).

## 6.5. Módulo de comunicación inalámbrica (126)

El módulo de comunicación inalámbrica (126) soporta al menos dos
protocolos de comunicación seleccionados del grupo que consiste en
Bluetooth Low Energy (BLE, 4.2 o 5.0), Wi-Fi (802.11ac o superior) y
MQTT sobre TLS. En realizaciones preferentes, el dispositivo está
configurado para descubrir e intercambiar datos automáticamente con el
dispositivo electrónico externo (150) y, a través de éste, con
dispositivos vestibles (160) y con el servidor remoto (170).

---

# 7. DESCRIPCIÓN DEL MOTOR DE INTELIGENCIA ARTIFICIAL (172)

> **Sección crítica para Art. 83 EPC / §112 USPTO.**

El motor de inteligencia artificial (172) es el componente lógico central
del sistema. Su función es generar, mantener y actualizar el protocolo
de emisión personalizado de cada usuario en función del estado actual
de la base de datos histórica longitudinal (174) y de los datos
biométricos disponibles.

## 7.1. Arquitectura general

El motor de inteligencia artificial (172) tiene una arquitectura híbrida
distribuida en dos planos:

(i) **Plano local (Edge):** un subconjunto del motor se ejecuta en la
unidad de procesamiento (120) del dispositivo, en el procesador neuronal
(123). En este plano se realizan las inferencias en tiempo real durante
la sesión (selección del siguiente conjunto de parámetros), la
adquisición de datos de sensores y la pre-agregación de información
para transmisión.

(ii) **Plano cloud (servidor remoto 170):** el plano cloud aloja el
modelo global completo, la base de datos histórica longitudinal (174),
el módulo de aprendizaje federado (176) y los recursos de cómputo
necesarios para entrenamientos pesados, simulaciones Monte Carlo de la
capa tisular y agregación de gradientes de múltiples dispositivos.

El motor está compuesto por al menos cuatro subsistemas
interconectados: el modelo multiescala del usuario, el algoritmo de
aprendizaje por refuerzo (ver sección 8), el módulo de aprendizaje
federado (ver sección 9) y el módulo de cronobiología computacional
(ver sección 10).

## 7.2. Modelo multiescala del usuario

El modelo multiescala del usuario es una representación computacional
del estado biológico y fisiológico del usuario en cuatro capas
jerárquicas:

(a) **Capa macroscópica:** modela la geometría del usuario respecto al
panel de emisión: distancia, ángulo, postura, superficie expuesta. Se
alimenta de los sensores de proximidad ToF y, opcionalmente, de una
cámara de profundidad.

(b) **Capa fisiológica:** modela el estado biométrico general del
usuario: variabilidad de la frecuencia cardiaca (HRV), saturación de
oxígeno en sangre (SpO₂), patrón de actividad física, fases del sueño,
temperatura corporal periférica, nivel de estrés inferido. Se alimenta
de los datos recibidos de los dispositivos vestibles (160) a través de
las APIs (162) de plataformas de salud (Apple HealthKit, Google Health
Connect, Oura).

(c) **Capa tisular:** simula la propagación de fotones en el tejido
cutáneo expuesto mediante un modelo de simulación de Monte Carlo,
parametrizado por el tipo de piel del usuario en la escala de
Fitzpatrick, el contenido de melanina estimado, el grosor de la
epidermis y el contenido de hemoglobina. Estima la dosis efectiva
de energía que alcanza cada capa del tejido (epidermis, dermis,
hipodermis) y cada cromóforo objetivo predeterminado, en función de la
longitud de onda y de la intensidad aplicada. La implementación de la
simulación Monte Carlo se basa en metodología ampliamente conocida,
descrita por ejemplo en Welch & Van Gemert (2011) "Optical-Thermal
Response of Laser-Irradiated Tissue" y Wang & Jacques (1995) "MCML —
Monte Carlo Modeling of Light Transport in Multi-Layered Tissues".

(d) **Capa celular y opcional genético-circadiana:** modela la
respuesta celular a longitudes de onda específicas en función de la
fase circadiana estimada del usuario (ver sección 10). En realizaciones
opcionales, esta capa puede incorporar datos genómicos del usuario
recibidos a través de un servicio externo de genotipado con
consentimiento explícito conforme al Reglamento General de Protección
de Datos.

## 7.3. Variables de entrada del motor

Las variables de entrada del motor de inteligencia artificial son:

(i) Perfil de usuario: edad, género, tipo de piel Fitzpatrick, objetivo
de uso, historial médico relevante autoinformado.

(ii) Datos biométricos en tiempo cuasi-real del dispositivo vestible:
HRV, SpO₂, frecuencia cardiaca, temperatura corporal, actividad física,
fases del sueño.

(iii) Datos fisiológicos medidos por la matriz de sensores (130) durante
la sesión: StO₂, temperatura cutánea, distancia al panel.

(iv) Estado actual de la base de datos histórica longitudinal (174):
historial de sesiones previas, parámetros efectivos, respuestas
fisiológicas medidas, adherencia.

(v) Variables ambientales: hora del día, temperatura ambiente, humedad.

(vi) Estado de calibración: factores de degradación de cada LED.

## 7.4. Variables de salida del motor

Las variables de salida son los parámetros del protocolo de emisión:

(i) Para cada zona (113) del panel multiespectral:
- conjunto de longitudes de onda activas;
- intensidad luminosa por longitud de onda (mW/cm²);
- frecuencia de pulso (Hz);
- ciclo de trabajo (%);
- duración (segundos).

(ii) Para el módulo LED central (116):
- intensidad luminosa por longitud de onda;
- frecuencia de pulso;
- duración.

(iii) Duración total de la sesión.

(iv) Recomendación opcional de timing circadiano (hora de inicio
recomendada de la sesión siguiente).

## 7.5. Función objetivo del motor

La función objetivo combina al menos dos componentes:

(i) Una componente de eficacia fisiológica, evaluada a partir de los
indicadores fisiológicos medidos en el segundo conjunto de datos
biométricos posteriores a la sesión, en relación con el objetivo de
uso del usuario.

(ii) Una componente de consumo energético, evaluada a partir del
producto integral de la potencia consumida durante la sesión.

(iii) Una componente de adherencia, evaluada a partir de la
regularidad de las sesiones registradas.

(iv) Una componente de seguridad, evaluada a partir de la conformidad
de las variables fisiológicas (temperatura, StO₂) con los umbrales
predefinidos.

El motor está configurado para maximizar una combinación lineal
ponderada de estas componentes, donde los pesos son configurables a
través de la interfaz de usuario.

## 7.6. Ciclo de actualización

El motor de inteligencia artificial (172) ejecuta los siguientes ciclos:

(a) **Ciclo intra-sesión (segundos a minutos):** el motor lee datos de
la matriz de sensores (130), evalúa señales de seguridad (ver sección
15) y, en realizaciones avanzadas, puede ajustar parámetros del panel
durante la sesión.

(b) **Ciclo sesión a sesión (horas a días):** al finalizar cada sesión,
el motor actualiza la base de datos histórica longitudinal (174) y
genera el protocolo actualizado para la sesión siguiente, mediante el
algoritmo de aprendizaje por refuerzo (ver sección 8).

(c) **Ciclo de aprendizaje federado (semanas a meses):** el plano
cloud agrega gradientes de modelos locales de una pluralidad de
dispositivos y transmite parámetros actualizados del modelo global
(ver sección 9).

---

# 8. ALGORITMO DE APRENDIZAJE POR REFUERZO (RL)

> **Sección crítica para defensa de la no-obviedad frente a CGM closed-loop.**

## 8.1. Formulación como Proceso de Decisión de Markov

El motor de inteligencia artificial implementa un algoritmo de
aprendizaje por refuerzo formulado como un Proceso de Decisión de Markov
(MDP) con los siguientes elementos:

**Estado s_t:** vector que comprende:
- características del modelo multiescala (capa fisiológica, capa
  tisular, capa celular/circadiana);
- ventana temporal reciente de la base de datos histórica longitudinal;
- estimación de fase circadiana actual;
- objetivo de uso seleccionado;
- estado de calibración del dispositivo.

**Acción a_t:** vector que comprende los parámetros del protocolo de
emisión definidos en la sección 7.4.

**Transición s_t → s_{t+1}:** está determinada por la respuesta
fisiológica del usuario a la acción aplicada, modelada parcialmente
por la capa tisular Monte Carlo y observada por los sensores (130) y
los dispositivos vestibles (160) tras la sesión.

**Recompensa r_t:** se calcula a partir de la función objetivo descrita
en la sección 7.5, evaluada sobre el cambio del estado fisiológico tras
la sesión, ponderada por la adherencia y la seguridad.

**Política π:** función parametrizada (en realizaciones preferentes,
una red neuronal profunda) que mapea estados a acciones, optimizada
para maximizar la recompensa acumulada esperada.

## 8.2. Algoritmos de aprendizaje por refuerzo aplicables

El motor está configurado para implementar uno o varios algoritmos del
grupo que consiste en:

(a) **Proximal Policy Optimization (PPO):** algoritmo de gradiente de
política con restricción de actualización (clipped surrogate objective)
que proporciona estabilidad en entornos con espacios de acción
continuos y dimensionales como los del SRBA. Adecuado para la
arquitectura híbrida Edge-cloud porque permite actualización por
mini-lotes.

(b) **Métodos de gradiente de política (Policy Gradient):**
arquitecturas REINFORCE con baseline para problemas con espacios de
acción continuos.

(c) **Arquitecturas actor-crítico (Actor-Critic):** Soft Actor-Critic
(SAC) y Deep Deterministic Policy Gradient (DDPG) para optimización
con exploración eficiente.

(d) **Deep Q-Network (DQN) discretizado:** aplicable a una versión
discretizada del espacio de acciones, útil para realizaciones
simplificadas con menor capacidad de cómputo embebida.

En la realización preferente, el algoritmo seleccionado es PPO, por
su balance entre estabilidad de entrenamiento, eficiencia de muestra y
compatibilidad con la arquitectura híbrida Edge-cloud.

## 8.3. Restricciones de seguridad del agente RL

El agente RL opera bajo las siguientes restricciones de seguridad
hardcoded, no aprendibles:

- Límite máximo de potencia por LED y por zona, conforme a estándares
  de seguridad fotobiológica IEC 62471.
- Límite máximo de exposición acumulada para LEDs UV (UV-B y UV-A).
- Detención automática ante temperatura cutánea o StO₂ fuera de
  rango (ver sección 15).
- Validación de cualquier acción propuesta contra una tabla de
  parámetros permitidos antes de la transmisión al panel.

## 8.4. Inicialización del agente — cold-start

Cuando un usuario nuevo se incorpora al sistema y la base de datos
histórica longitudinal aún no contiene información sobre el usuario,
el motor aplica un protocolo de cold-start:

(a) se aplica un modelo de población al perfil de usuario para
inferir un conjunto de parámetros iniciales razonables, partiendo del
modelo global agregado del aprendizaje federado;

(b) se almacena en la memoria un identificador del modelo de
población utilizado, para trazabilidad;

(c) tras varias sesiones registradas (típicamente entre 3 y 10), el
agente comienza a divergir del modelo de población y a explorar
acciones personalizadas para el usuario específico.

## 8.5. Diferencias técnicas frente al aprendizaje por refuerzo en
## sistemas de bucle cerrado para CGM (closed-loop insulin delivery)

Para defender la no-obviedad del Claim 9 frente al estado del arte
en aprendizaje por refuerzo aplicado a otros sistemas biomédicos de
bucle cerrado (notablemente, dosificación automatizada de insulina con
monitorización continua de glucosa, CGM), se documentan las siguientes
diferencias técnicas sustanciales:

(i) **Naturaleza física de las variables de control:** en CGM las
acciones son volúmenes y timings de bolo de insulina (variables
hidráulicas inyectadas en el cuerpo); en SRBA las acciones son
parámetros ópticos de un dispositivo de emisión externa (longitud de
onda, intensidad, frecuencia, patrón espacial). No existe analogía
directa entre ambos espacios de acción.

(ii) **Naturaleza del estado:** en CGM el estado es la glucemia
continua y el modelo farmacocinético de insulina activa; en SRBA el
estado es un modelo multiescala con capa tisular Monte Carlo, datos
biométricos sistémicos y fase circadiana. Las dinámicas modeladas son
biológicamente distintas.

(iii) **Función de recompensa:** en CGM la recompensa es
"time-in-range" de glucemia; en SRBA es una combinación de
biomarcadores ópticos tisulares, indicadores sistémicos y consumo
energético. Las funciones objetivo no son transferibles.

(iv) **Ventanas temporales:** en CGM el ciclo de acción-respuesta es
de minutos; en SRBA el ciclo es de horas a días entre sesiones. La
estructura temporal del MDP es radicalmente distinta.

(v) **Restricciones de seguridad:** en CGM la restricción dominante
es la hipoglucemia severa; en SRBA son los umbrales fotobiológicos
(IEC 62471), temperatura cutánea, exposición UV acumulada. Los
mecanismos de protección no son intercambiables.

Por lo anterior, la aplicación de aprendizaje por refuerzo al control
adaptativo del SRBA constituye una invención técnica no obvia para el
experto en la materia, incluso conociendo el estado de la técnica en
CGM closed-loop.

---

# 9. APRENDIZAJE FEDERADO

## 9.1. Arquitectura

El módulo de aprendizaje federado (176) reside en el servidor remoto
(170). Su función es entrenar un modelo global del motor de inteligencia
artificial agregando contribuciones (gradientes) de múltiples
dispositivos (110) sin recibir datos personales de los usuarios.

La arquitectura sigue el esquema FedAvg estandarizado (McMahan et al.,
"Communication-Efficient Learning of Deep Networks from Decentralized
Data", AISTATS 2017), con las siguientes adaptaciones:

(a) Cada dispositivo entrena localmente su modelo durante un número
predefinido de épocas locales, utilizando exclusivamente los datos
locales del usuario.

(b) Cada dispositivo calcula la diferencia de pesos entre el modelo
local entrenado y el último modelo global recibido, y la transmite al
servidor remoto a través del módulo de comunicación (126).

(c) El servidor remoto agrega ponderadamente las diferencias de pesos
recibidas (típicamente ponderando por el número de muestras locales
de cada dispositivo).

(d) El servidor remoto publica un modelo global actualizado, que es
distribuido a todos los dispositivos en el siguiente ciclo.

## 9.2. Agregación segura

En realizaciones preferentes, la agregación se realiza mediante un
protocolo de agregación segura (secure aggregation) basado en
cifrado homomórfico o en suma con máscaras pseudoaleatorias compartidas,
de modo que el servidor remoto no puede observar las contribuciones
individuales de cada dispositivo, solo su suma agregada.

## 9.3. Privacidad y cumplimiento normativo

Esta arquitectura garantiza que los datos personales del usuario
(perfil, datos biométricos, base de datos histórica longitudinal) nunca
abandonan el dispositivo (110) o el dispositivo electrónico externo
(150). El servidor remoto (170) sólo recibe gradientes anonimizados y
agregados.

Esto permite el cumplimiento del Reglamento General de Protección de
Datos (RGPD, 2016/679), de la regulación HIPAA (EE.UU.) para datos
sanitarios, y de regulaciones equivalentes en otras jurisdicciones,
sin obstaculizar la mejora colaborativa del modelo global.

---

# 10. MÓDULO DE CRONOBIOLOGÍA COMPUTACIONAL

El módulo de cronobiología computacional es un componente del motor de
inteligencia artificial encargado de estimar la fase circadiana actual
del usuario a partir de los datos biométricos del dispositivo vestible
(160), y de sincronizar los parámetros del protocolo de emisión con
dicha fase.

El módulo procesa al menos los siguientes datos temporales del
dispositivo vestible:

(a) temperatura corporal periférica (ventana mínima del ritmo
circadiano);
(b) patrón de actividad física e inactividad;
(c) frecuencia cardiaca (frecuencia mínima durante el sueño);
(d) duración y arquitectura del sueño (REM, NREM, mid-sleep point);
(e) saturación de oxígeno durante el sueño.

A partir de estos datos, el módulo aplica un modelo machine learning
entrenado para estimar la fase circadiana en hora circadiana personal
del usuario (Dim Light Melatonin Onset, DLMO, o equivalente),
siguiendo metodología descrita por ejemplo en Hesse, A.B. et al.
(2020) "Detection of Circadian Rhythm Disruption with Wearables".

El motor de inteligencia artificial utiliza la fase circadiana
estimada para:

(i) recomendar la hora óptima de la siguiente sesión, en función del
objetivo de uso seleccionado;

(ii) ajustar los parámetros del protocolo (típicamente, intensidades
de longitudes de onda específicas) a las características de respuesta
circadiana del tejido cutáneo y del sistema nervioso, conocidas para
modular la expresión de genes reloj y la secreción de melatonina.

---

# 11. OPTIMIZACIÓN MULTIOBJETIVO EFICACIA-CONSUMO

El motor de inteligencia artificial está configurado para resolver un
problema de optimización multiobjetivo en el que se combinan al menos
dos funciones objetivo en conflicto: la eficacia fisiológica del
protocolo y el consumo energético del dispositivo durante la sesión.

La función objetivo combinada se formaliza como:

F(a) = α · E(a) − β · C(a) + γ · A(a) − δ · S(a)

donde:
- a = vector de parámetros del protocolo (acción RL);
- E(a) = indicador de eficacia fisiológica esperada;
- C(a) = consumo energético estimado de la sesión;
- A(a) = bonus de adherencia (penalizando protocolos de duración
  excesiva que reducen adherencia);
- S(a) = penalización de riesgo de seguridad;
- α, β, γ, δ = coeficientes configurables a través de la interfaz
  de usuario.

Los coeficientes por defecto se establecen para favorecer eficacia y
seguridad, pero el usuario puede priorizar el componente energético
(modo "eco") para reducir el consumo eléctrico del dispositivo a costa
de protocolos potencialmente más largos o de menor intensidad.

En realizaciones avanzadas, el motor resuelve el problema mediante
optimización en frente de Pareto y propone al usuario una selección
entre varias soluciones óptimas en el sentido de Pareto.

---

# 12. SISTEMA DISTRIBUIDO Y GESTIÓN DE FLOTA

El servidor remoto (170) está configurado para gestionar técnicamente
una flota de dispositivos de emisión (110) registrados, mediante los
siguientes módulos:

## 12.1. Módulo de telemetría

Recibe periódicamente, de cada dispositivo de la flota, los siguientes
datos:
- datos de uso operativo (sesiones completadas, parámetros efectivos,
  duraciones);
- datos de degradación de componentes detectados por el módulo de
  calibración (140);
- datos de eventos del dispositivo (errores, calibraciones, conexiones,
  desconexiones);
- agregados anonimizados de adherencia y satisfacción del usuario.

## 12.2. Módulo de actualización over-the-air (OTA)

Transmite a cada dispositivo de la flota, de forma segura mediante
canales encriptados (TLS), actualizaciones del firmware de la unidad
de procesamiento (120), parámetros actualizados del modelo global tras
ciclos de aprendizaje federado, y nuevos protocolos de emisión.

## 12.3. Módulo de gestión del ciclo de vida (178)

Coordina los procesos automatizados de mantenimiento, recuperación,
remanufactura y reciclaje de los dispositivos de la flota, basándose
en los datos del módulo de telemetría y del Pasaporte Digital de
Producto.

---

# 13. PASAPORTE DIGITAL DE PRODUCTO (180)

El servidor remoto (170) genera y mantiene, para cada dispositivo de
la flota, un Pasaporte Digital de Producto (180) que almacena:

(a) datos de composición de materiales (porcentajes de metales, plásticos,
componentes electrónicos);

(b) huella de carbono estimada del ciclo de vida (kg CO₂eq), calculada
mediante Análisis de Ciclo de Vida (ISO 14040/14044) de los procesos
de fabricación, transporte, uso y final de vida;

(c) historial de uso operativo: número total de sesiones, horas de
operación, kWh consumidos;

(d) historial de intervenciones de mantenimiento sobre el dispositivo:
calibraciones, reparaciones, sustituciones de componentes;

(e) índice de reparabilidad calculado a partir de la disponibilidad de
piezas, la facilidad de desmontaje (puntuación según escala normalizada)
y la documentación técnica disponible.

El Pasaporte Digital de Producto es accesible al usuario final mediante
identificador único (por ejemplo, código QR) en el dispositivo. Esta
arquitectura técnica cumple con el Reglamento (UE) sobre Ecodiseño para
Productos Sostenibles (ESPR) y prepara al dispositivo para su
incorporación en flujos de economía circular.

---

# 14. MANTENIMIENTO PREDICTIVO

El servidor remoto (170) ejecuta un algoritmo de mantenimiento
predictivo que opera sobre los datos de telemetría agregados:

(a) recibe periódicamente, de cada dispositivo, los factores de
degradación de cada LED medidos por el módulo de calibración (140);

(b) entrena un modelo de regresión temporal sobre los datos históricos
de degradación de una pluralidad de dispositivos comparables, para
estimar la curva esperada de degradación de cada LED en función del
tiempo, las horas de uso y las condiciones operativas;

(c) estima, para cada dispositivo, un instante futuro estimado en el
que la degradación de al menos un LED excederá el umbral de irradiancia
tolerable (típicamente, irradiancia efectiva inferior al 70% del valor
inicial);

(d) genera y transmite, con la antelación suficiente, una orden de
intervención de mantenimiento sobre el dispositivo, que puede ser una
sustitución del LED degradado, una recalibración global, o una
indicación al usuario para que solicite servicio técnico.

Esta arquitectura permite extender la vida útil efectiva del
dispositivo, reducir las paradas no planificadas y optimizar la
gestión de inventario de piezas de repuesto en el operador de la
flota.

---

# 15. SISTEMA DE SEGURIDAD FISIOLÓGICA

El sistema (100) implementa un mecanismo de seguridad fisiológica
ejecutado por la unidad de procesamiento (120) durante cada sesión de
emisión:

(a) recibe continuamente señales de la matriz de sensores no invasivos
(130) indicativas de al menos una variable seleccionada del grupo que
consiste en temperatura superficial del tejido expuesto, saturación de
oxígeno tisular y nivel de irradiancia incidente;

(b) compara dicha señal con al menos un umbral de seguridad
predefinido almacenado en la memoria (124), conforme a estándares
fotobiológicos (IEC 62471, IEC 60601-2-83);

(c) reduce automáticamente la potencia de emisión del panel
multiespectral o detiene la sesión cuando dicha señal excede dicho
umbral.

Este mecanismo opera independientemente del motor de inteligencia
artificial y constituye una salvaguarda hardcoded no aprendible que
garantiza la operación dentro de los límites de seguridad fotobiológica
en toda circunstancia.

---

# 16. DESCRIPCIÓN DE LAS FIGURAS

(Las figuras se proporcionan a título ilustrativo y no limitativo.)

**FIGURA 1:** Diagrama de bloques del sistema (100), mostrando el
dispositivo de emisión (110), el dispositivo electrónico externo (150),
los dispositivos vestibles (160) y el servidor remoto (170), con sus
respectivas interconexiones.

**FIGURA 2:** Diagrama de flujo del método (200) de control adaptativo
con los siete pasos (a)-(g), correspondientes a la reivindicación 16.

**FIGURA 3:** Diagrama del bucle cerrado de retroalimentación
sesión-a-sesión, mostrando la transición entre sesión actual y sesión
siguiente con incorporación de datos a la base de datos histórica
longitudinal (174) y generación del protocolo actualizado.

**FIGURA 4:** Diagrama de bloques de la arquitectura interna del motor
de inteligencia artificial (172) con sus cuatro subsistemas: modelo
multiescala, algoritmo RL, módulo cronobiología, módulo aprendizaje
federado.

**FIGURA 5:** Diagrama del panel de emisión multiespectral (112)
mostrando la disposición de las zonas (113) y del módulo LED central
(116), y la disposición de los LEDs (114) por longitud de onda.

**FIGURA 6:** Diagrama de la arquitectura distribuida cloud, mostrando
una pluralidad de dispositivos (110) conectados al servidor remoto
(170) que aloja el modelo global, el módulo de aprendizaje federado
(176) y el módulo de gestión de flota (178).

**FIGURA 7:** Diagrama del Pasaporte Digital de Producto (180) con
sus cinco categorías de datos.

---

# 17. REALIZACIÓN PREFERENTE END-TO-END

A continuación se describe una realización preferente del sistema:

El dispositivo de emisión (110) tiene una superficie de emisión de
aproximadamente 60 cm × 40 cm, dividida en 12 zonas (113) de
aproximadamente 200 cm² cada una. Cada zona integra LEDs (114) de las
diez longitudes de onda principales (295, 385, 405, 485, 630, 670, 727,
850, 935, 1050 nm), con potencias máximas configurables individualmente
en el rango de 0 a 60 mW/cm² por LED. El módulo LED central (116) integra
LEDs de alta potencia en cinco longitudes (670, 727, 850, 935, 1050 nm)
con potencia máxima 150 mW/cm² a 15 cm.

La matriz de sensores no invasivos (130) integra cuatro sensores NIRS
(132) distribuidos en las cuatro esquinas del panel, dos termopilas (134)
en la parte superior e inferior, dos sensores ToF (proximidad), y un
sensor de humedad y temperatura ambiental.

El módulo de calibración (140) opera con un fotodiodo (138) de respuesta
plana en el rango 200-1100 nm, muestreando individualmente cada LED en
una secuencia de 30 segundos al inicio de cada sesión.

La unidad de procesamiento (120) integra un procesador ARM Cortex-A78
a 2 GHz, un procesador neuronal Edge TPU equivalente capaz de 4 TOPS,
8 GB de memoria volátil LPDDR4 y 64 GB de memoria no volátil eMMC.

El módulo de comunicación (126) soporta BLE 5.0 y WiFi 802.11ac, con
una pila MQTT sobre TLS 1.3 para comunicación con el servidor remoto.

El servidor remoto (170) es un cluster en nube que ejecuta el modelo
global del motor IA, una base de datos PostgreSQL para los registros
longitudinales y un servicio FedAvg con agregación segura
(secure aggregation Diffie-Hellman + AES-GCM).

El usuario interactúa con el dispositivo a través de la aplicación
móvil (152) en iOS o Android, que se sincroniza con un Apple Watch o
un Oura Ring (160) a través de HealthKit o la API de Oura (162).

---

# 18. EJEMPLOS DE APLICACIÓN

## 18.1. Ejemplo 1 — Perfil deportista, recuperación muscular post-ejercicio

Perfil del usuario: 32 años, masculino, Fitzpatrick III, objetivo
"recuperación muscular post-ejercicio".

Datos de entrada del wearable tras un entrenamiento intenso: HRV 35 ms
(reducida), frecuencia cardiaca en reposo 72 bpm (elevada), temperatura
corporal +0,4 °C respecto a baseline, sueño previo 7 h 12 min.

Datos de sensores integrados al iniciar la sesión: StO₂ inicial 67%
en zona cuádriceps, temperatura cutánea 33,1 °C, distancia panel-piel
18 cm.

Protocolo generado por el motor (sesión 1, modelo de población
cold-start): 12 minutos, predominio de 660 nm (rojo) e 850 nm (NIR) a
50 mW/cm² distribuidos en las zonas correspondientes a cuádriceps y
gemelos, módulo LED central activado a 100 mW/cm² en 850 nm.

Datos post-sesión: StO₂ final 78% (+11% en zonas tratadas),
temperatura cutánea 34,8 °C (dentro del umbral seguro), HRV 24 h
posteriores 48 ms (recuperación).

Actualización del motor: tras la sesión, el agente RL incorpora a la
base de datos longitudinal la respuesta de oxigenación y refuerza la
política de uso de 660+850 nm a esta dosis para este perfil. En la
sesión siguiente, propone parámetros muy similares.

## 18.2. Ejemplo 2 — Perfil mejora del sueño, sesión vespertina

Perfil del usuario: 45 años, femenino, Fitzpatrick II, objetivo
"mejora del sueño".

Datos de entrada del wearable: fragmentación de sueño 32%, latencia
de inicio 38 min, mid-sleep point 03:12, cronotipo intermedio.

Estimación de fase circadiana: usuario en fase vespertina, hora
óptima de sesión calculada por el módulo de cronobiología:
20:00-21:00.

Protocolo generado: 18 minutos, predominio de 630 nm e infrarrojo
(850-935 nm), evitando las longitudes UV-A/UV-B (que activarían
respuesta de alerta circadiana), módulo LED central a baja
intensidad.

Recomendación complementaria: la aplicación móvil sugiere realizar
la sesión a las 20:30.

## 18.3. Ejemplo 3 — Perfil rendimiento cognitivo / estudiante,
## sesión matutina

Perfil del usuario: 21 años, masculino, Fitzpatrick IV, objetivo
"rendimiento cognitivo y energía matutina".

Datos de entrada del wearable: temperatura corporal mínima reciente
04:35 (mid-sleep point), HRV 65 ms (alto), patrón de actividad
sedentaria por exámenes.

Estimación de fase circadiana: usuario en madrugada-amanecer
fisiológico (mid-sleep ya pasado).

Protocolo generado: 8 minutos, énfasis en longitudes 385 nm (UV-A
suave) y 485 nm (cian) — conocidas por estimulación de la melanopsina
y activación de la alerta circadiana — además de 630 y 670 nm.

Recomendación de timing: realizar a primera hora de la mañana, antes
de las 09:00.

## 18.4. Ejemplo 4 — Perfil familiar / multi-usuario

El dispositivo (110) está configurado para tres perfiles de usuario
bajo una misma cuenta: padre (45, Fitzpatrick III), madre (43,
Fitzpatrick II) y adolescente (16, Fitzpatrick III).

Cada perfil mantiene su propia base de datos histórica longitudinal y
su propio protocolo personalizado. La aplicación móvil (152) permite
la selección de perfil al inicio de cada sesión mediante reconocimiento
biométrico (huella o cara) o selección manual.

El modelo de población cold-start es distinto para cada perfil en
función de edad, género y objetivo declarado. El motor agrega los
datos del perfil seleccionado a la sesión correspondiente sin mezclar
información entre perfiles.

Los protocolos son visiblemente distintos: el padre recibe protocolos
similares al Ejemplo 1; el adolescente recibe protocolos más cortos y
de menor intensidad ajustados por la edad; la madre recibe protocolos
similares al Ejemplo 2.

## 18.5. Ejemplo 5 — Perfil dolor crónico / recuperación

Perfil del usuario: 58 años, femenina, Fitzpatrick II, objetivo
"manejo del dolor lumbar crónico no específico" (notas: el sistema
no diagnostica ni reivindica eficacia médica; protocolos de bienestar
generales).

Datos de entrada del wearable: actividad reducida, calidad de sueño
fragmentada, HRV variable, temperatura periférica diurna +0,3 °C.

Datos de sensores: StO₂ inicial 64% en zona lumbar (baja), temperatura
cutánea 32,4 °C.

Protocolo generado: 25 minutos, sesión focalizada en zonas lumbares
del panel mediante asignación dinámica del motor IA, predominio de
850 nm (NIR profundo) a 70 mW/cm², complementado con 670 nm a 50
mW/cm² y módulo LED central a 100 mW/cm² en 935 nm.

A lo largo de seis semanas de uso regular (sesiones 4 veces por
semana), el motor RL ajusta progresivamente los parámetros buscando
una mejora del StO₂ post-sesión sostenida. Los datos de adherencia y
las recomendaciones de bienestar integral (cronoterapia, sugerencias
de actividad física complementaria) refuerzan el protocolo.

---

# 19. VENTAJAS TÉCNICAS DE LA INVENCIÓN SOBRE EL ESTADO DE LA TÉCNICA

La presente invención proporciona las siguientes mejoras técnicas
medibles sobre el estado de la técnica:

(a) **Optimización individualizada continua de la dosis efectiva** —
gracias al modelo multiescala del usuario con capa tisular Monte
Carlo, el sistema maximiza la energía que alcanza el cromóforo
objetivo en cada usuario individual, en lugar de aplicar protocolos
de "talla única".

(b) **Adherencia mejorada** — la detección automática de baja
adherencia con notificaciones personalizadas generadas por el motor
IA reduce el abandono del protocolo.

(c) **Vida útil extendida del dispositivo** — gracias a la
calibración automática con fotodiodo de referencia y compensación de
degradación, el dispositivo mantiene la irradiancia efectiva
sustancialmente constante a lo largo de su vida operativa.

(d) **Reducción de consumo energético** — gracias a la optimización
multiobjetivo eficacia-consumo, el dispositivo opera con la potencia
mínima necesaria para alcanzar el efecto deseado, reduciendo el
consumo eléctrico en porcentajes significativos.

(e) **Privacidad por diseño** — gracias al aprendizaje federado, el
sistema mejora colectivamente sin transmitir datos personales de
salud al servidor remoto.

(f) **Mantenimiento predictivo** — el sistema anticipa fallos de
componentes optoelectrónicos, reduciendo paradas no planificadas y
optimizando la gestión de piezas de repuesto.

(g) **Integración nativa con ecosistema de salud digital** — el
sistema se sincroniza directamente con los dispositivos vestibles y
plataformas de salud predominantes en el mercado, evitando el
aislamiento típico de los dispositivos de fotobiomodulación
existentes.

(h) **Gestión técnica circular** — el Pasaporte Digital de Producto y
la arquitectura de gestión de flota habilitan flujos de mantenimiento,
recuperación, remanufactura y reciclaje, conformes con el Reglamento
(UE) ESPR.

---

# 20. APLICABILIDAD INDUSTRIAL

La presente invención es susceptible de aplicación industrial en el
sector de los aparatos de iluminación con aplicaciones en el bienestar,
en la fabricación de dispositivos electrónicos de consumo, y en el
sector de la salud digital. EKIO Bienestar S.L. ya cuenta con
fabricación piloto en España del dispositivo de emisión multiespectral
descrito en el modelo de utilidad U202532624. La presente invención
amplía las posibilidades de personalización y de gestión técnica del
dispositivo hardware, sin requerir reconfiguración fundamental de la
cadena de fabricación.

---

# 21. RESUMEN DE LA INVENCIÓN

> Esta sección de la memoria corresponde al ABSTRACT del PCT,
> reproducido íntegro abajo en castellano y al final de la memoria en
> inglés. Máximo 150 palabras.

**Abstract (español):**

Se proporciona un sistema (100) y un método de control adaptativo de
un dispositivo de emisión luminosa multiespectral (110) que comprende
un panel multiespectral con LEDs en el rango 295-1100 nm, una matriz
de sensores no invasivos (130) que mide oxigenación tisular y
temperatura cutánea, un módulo de calibración automática con
fotodiodo (140), una unidad de procesamiento (120) y un módulo de
comunicación inalámbrica (126). Un motor de inteligencia artificial
(172) que implementa aprendizaje por refuerzo y aprendizaje federado
genera y actualiza, sesión a sesión, un protocolo de emisión
personalizado mediante un bucle cerrado bidireccional entre los datos
fisiológicos del usuario (recibidos de dispositivos vestibles
externos) y los parámetros del panel. El sistema incluye gestión
remota de flota con Pasaporte Digital de Producto y mantenimiento
predictivo basado en la degradación de los LEDs.

---

*PCT EKIO Bienestar S.L. — Memoria descriptiva v0.1 — Confidencial —*
*Borrador interno para revisión por Patricia García, La Fábrica de*
*Inventos S.L., antes de filing PCT (julio 2026 target).*
