# PCT EKIO — Claim Set v0.3 (CONSOLIDADO)
# Sistema SRBA — título técnico aséptico
# Versión: v0.3 — 2026-07-12 — borrador interno para revisión de Patricia García
# Reemplaza: v0.2. Integra 3 líneas de mejora en un único set coherente.

---

## CHANGELOG v0.2 → v0.3

Este set integra en un solo documento las tres líneas de trabajo que estaban
dispersas (v0.2 base + memo app-panel + memo rangos), más una corrección de
forma detectada al revisar el Claim 1.

| # | Cambio | Origen | Etiqueta |
|---|---|---|---|
| 1 | **Fix antecedent basis:** el Claim 1(a) ahora **introduce las "zonas de emisión"** que el 1(ii) ya usaba sin declarar. Igual en el Claim de método. | Revisión de forma (§112(b) US / Art. 84 EPC) | [FIX] |
| 2 | **Clúster app-panel APP-1…APP-7** integrado como claims de sistema, situados en posición prominente tras el Claim 1. | `PRIORIDAD_APP_PANEL_v0.1.md` (encargo La Fábrica de Inventos) | [NUEVO-APP] |
| 3 | **Rangos de onda:** añadidas dependientes de banda amplia y sub-rango (ex-C2bis/C3bis/C3ter), preservando C2/C3 puntuales con prioridad MU. | `PCT_EKIO_claims_v0.3_rangos_propuesta.md` | [NUEVO-RANGO] |
| 4 | **Método:** el paso de transmisión/recepción ahora **nombra la app** como actor del downlink/uplink. | Encargo app-panel | [FIX] |

> **LEYENDA DE MARCADORES**
> `[FIX]` corrección de forma, sin decisión pendiente.
> `[MU PRIORITY]` prioridad 24/12/2025 — **no tocar** (soporte literal del MU).
> `[NUEVO-APP]` reivindicación nueva del clúster app-panel.
> `[NUEVO-RANGO]` reivindicación nueva de rangos de onda.
> `[PROPUESTA]` sujeta a validación de Patricia (materia añadida, prior art o coste).

---

## Título de la PCT (sin cambio)

**ES:** "Sistema y método de control adaptativo de un dispositivo de emisión
luminosa multiespectral basado en realimentación fisiológica y aprendizaje
continuo"

**EN:** "System and method for adaptive control of a multispectral
light-emitting device based on physiological feedback and continuous learning"

---

# BLOQUE A — SISTEMA (Claims 1-25)

## Claim 1 — Sistema (independiente principal) [FIX — HÍBRIDO]
**Ancho: 8/10**

Sistema de control adaptativo de un dispositivo de emisión luminosa multiespectral,
**caracterizado por que comprende:**

(a) un panel de emisión multiespectral que comprende una pluralidad de diodos
emisores de luz (LEDs) configurados para emitir radiación electromagnética en al
menos dos longitudes de onda distintas en el rango de 295 nm a 1100 nm, **estando
dicho panel dividido en una pluralidad de zonas de emisión controlables
independientemente entre sí**;

(b) un módulo de comunicación inalámbrica configurado para intercambiar datos con
al menos un dispositivo electrónico externo;

(c) una unidad de procesamiento que comprende un procesador y una memoria
no transitoria;

(d) dicha memoria almacenando una base de datos histórica longitudinal del
usuario y un motor de inteligencia artificial;

donde dicho motor de inteligencia artificial está configurado para:

(i) recibir un perfil de usuario y un primer conjunto de datos biométricos del
usuario procedentes del dispositivo electrónico externo a través del módulo de
comunicación inalámbrica;

(ii) generar un protocolo de emisión inicial que define al menos una longitud
de onda, una intensidad y una duración para cada zona de emisión del panel
multiespectral;

(iii) registrar en dicha memoria, al finalizar cada sesión de emisión, un
conjunto de parámetros efectivos de la sesión y al menos un segundo conjunto
de datos biométricos posteriores a la sesión;

(iv) actualizar dicha base de datos histórica longitudinal del usuario con
dichos parámetros efectivos y dicho segundo conjunto de datos biométricos;

(v) generar automáticamente un protocolo de emisión actualizado para una
sesión posterior, en función del estado actual de la base de datos histórica
longitudinal,

creando así un bucle cerrado de retroalimentación sesión a sesión entre la
respuesta fisiológica del usuario y los parámetros del panel de emisión
multiespectral.

> **FIX:** la única modificación es el inciso en negrita del apartado (a). Da
> soporte (antecedent basis) a "cada zona de emisión" del (ii), que en v0.2
> aparecía sin haber sido introducida. No añade materia técnica nueva: las zonas
> ya eran obligatorias de facto.

---

## Claim 2 — Puente bidireccional app-panel [NUEVO-APP — PRIORIDAD 1]
**Ancho: 7/10**

Sistema según la reivindicación 1, que comprende además una aplicación de
software ejecutándose en el dispositivo electrónico externo, configurada para,
en cooperación con el módulo de comunicación inalámbrica:

(a) transmitir al panel de emisión multiespectral los parámetros del protocolo
de emisión generado por el motor de inteligencia artificial, incluyendo la
longitud de onda, la intensidad, la frecuencia de pulso y la duración asignadas
a cada zona de emisión;

(b) recibir del panel, al finalizar cada sesión, el conjunto de parámetros
efectivos registrados por el panel y las señales de una matriz de sensores no
invasivos del dispositivo;

(c) sincronizar dichos parámetros efectivos y dichas señales con la base de
datos histórica longitudinal;

constituyendo así la aplicación de software el medio de cierre del bucle de
retroalimentación sesión a sesión entre la respuesta fisiológica del usuario
registrada por el panel y los parámetros de emisión de una sesión posterior.

> Anclaje SiMD: la app se reivindica siempre como medio de intercambio de datos
> con el panel físico, nunca como software abstracto. Ver `PRIORIDAD_APP_PANEL_v0.1.md`.

---

## Claim 3 — Fusión wearable → app → panel [NUEVO-APP — PRIORIDAD 2]
**Ancho: 6/10**

Sistema según la reivindicación 2, en el que la aplicación de software está
configurada además para sincronizarse con al menos un dispositivo vestible
externo a través de una interfaz de programación de aplicaciones de una
plataforma de salud, normalizar los datos biométricos heterogéneos recibidos de
dicho dispositivo vestible, e inyectar dichos datos normalizados como entradas
del motor de inteligencia artificial que determina los parámetros del protocolo
de emisión transmitido al panel.

---

## Claim 4 — Explicabilidad del protocolo (XAI) [NUEVO-APP — PRIORIDAD 3]
**Ancho: 6/10**

Sistema según la reivindicación 2, en el que la aplicación de software está
configurada para presentar, a través de una interfaz gráfica, el protocolo de
emisión actualizado junto con al menos un indicador de las variables
fisiológicas o de las señales de sensor que han determinado una modificación de
al menos un parámetro de emisión de una zona del panel respecto de una sesión
anterior.

---

## Claim 5 — Longitudes de onda puntuales [MU PRIORITY] — ex-C2, sin cambio
**Ancho: 3/10**

Sistema según la reivindicación 1, en el que el panel de emisión multiespectral
comprende LEDs configurados para emitir en longitudes de onda seleccionadas del
grupo que consiste en 295, 385, 405, 485, 630, 670, 727, 850, 935 y 1050 nm.

---

## Claim 6 — Bandas terapéuticas amplias [NUEVO-RANGO] [PROPUESTA]
**Ancho: 5/10**

Sistema según la reivindicación 1, en el que el panel de emisión multiespectral
comprende LEDs configurados para emitir en al menos dos bandas de longitud de
onda seleccionadas del grupo que consiste en:

(a) una banda ultravioleta-B de 280 a 320 nm;
(b) una banda ultravioleta-A de 320 a 400 nm;
(c) una banda violeta-azul de 400 a 495 nm;
(d) una banda roja de 620 a 700 nm;
(e) una banda infrarroja cercana corta de 700 a 780 nm;
(f) una banda infrarroja cercana media de 780 a 880 nm;
(g) una banda infrarroja cercana larga de 880 a 1100 nm.

> **[PROPUESTA — validar Patricia]** Los cortes de banda (280/320/400/495/620/
> 700/780/880/1100) están **pendientes de validación científica** (encargo al
> agente FBM-Elite con evidencia PubMed) y **legal** (¿materia añadida vs MU, o
> "generalización razonable" que herede la fecha MU?). Riesgo prior art: la banda
> UV-B (a) solapa con Zerigo US20230218922A1 (300-320 nm) y las bandas NIR (f)(g)
> con Vielight US11633621B2 (dominio cerebral). Defensa por combinación con C1.

---

## Claim 7 — Módulo LED central puntual [MU PRIORITY] — ex-C3, sin cambio
**Ancho: 4/10**

Sistema según la reivindicación 1, que comprende además un módulo LED central
de alta densidad y potencia integrado en el panel de emisión multiespectral,
que comprende al menos cinco longitudes de onda distintas seleccionadas del
grupo que consiste en 670, 727, 850, 935 y 1050 nm, y donde el módulo LED
central es controlable independientemente del resto de LEDs del panel
multiespectral.

---

## Claim 8 — Sub-rangos del módulo central [NUEVO-RANGO] [PROPUESTA]
**Ancho: 5/10**

Sistema según la reivindicación 1, que comprende además un módulo LED central
de alta densidad y potencia, integrado en el panel de emisión multiespectral,
configurado para emitir en al menos tres bandas de longitud de onda
seleccionadas del grupo que consiste en:

(a) 650 a 690 nm; (b) 700 a 740 nm; (c) 800 a 860 nm;
(d) 900 a 960 nm; (e) 1000 a 1080 nm;

y donde el módulo LED central es controlable independientemente del resto de
LEDs del panel multiespectral.

> **[PROPUESTA]** Sub-rangos de ±15-20 nm para absorber tolerancias industriales
> de LED de potencia y bloquear el diseño-alrededor. Confirmar ancho con
> evidencia de fabricantes (Cristian).

---

## Claim 9 — Pico NIR 810 nm [NUEVO-RANGO] [PROPUESTA]
**Ancho: 3/10**

Sistema según la reivindicación 1, en el que el panel de emisión multiespectral
comprende además al menos un LED configurado para emitir en el rango de 795 a
825 nm.

> **[PROPUESTA]** 810 nm es longitud de referencia en PBM (no está en el MU →
> siempre [PCT DATE]). Solapa con Vielight (NIR 780-1400 cerebral); novedad por
> combinación con C1. Decidir con Patricia si banda autónoma o subsumida en C6(f).

---

## Claim 10 — Control multizona dinámico [parcial MU] — ex-C4, sin cambio
**Ancho: 6/10**

Sistema según la reivindicación 1, en el que las zonas de emisión del panel son
controlables independientemente entre sí en al menos intensidad luminosa,
frecuencia de pulso y duración mediante valores continuos, y donde el motor de
inteligencia artificial está configurado para asignar dinámicamente valores
distintos y continuos de cada uno de dichos parámetros a zonas distintas dentro
de una misma sesión, conformando un patrón espaciotemporal de emisión adaptado
en función del estado actual de la base de datos histórica longitudinal.

> Defensa contra Vielight US11633621B2 (6 zonas binarias on/off): control
> continuo de tres parámetros asignados dinámicamente por el motor IA.

---

## Claim 11 — Sensores NIRS + termopila [PCT DATE] — ex-C5, sin cambio
**Ancho: 6/10**

Sistema según la reivindicación 1, que comprende además una matriz de sensores
no invasivos integrada en el dispositivo, que comprende al menos:

(a) un sensor de espectroscopia de infrarrojo cercano (NIRS) configurado para
medir en tiempo real la saturación de oxígeno tisular (StO₂) del usuario
durante la sesión;

(b) un sensor de temperatura sin contacto basado en termopila infrarroja,
configurado para medir la temperatura superficial del tejido expuesto;

y donde el motor de inteligencia artificial está configurado para recibir y
procesar las medidas de dicha matriz de sensores como entradas adicionales del
proceso de actualización del protocolo.

---

## Claim 12 — Fotodiodo + calibración automática [PCT DATE] — ex-C6, sin cambio
**Ancho: 5/10**

Sistema según la reivindicación 1, que comprende además un fotodiodo de
referencia y un módulo de calibración automática, donde el módulo de
calibración automática está configurado para:

(a) medir periódicamente, mediante dicho fotodiodo, la irradiancia efectiva
emitida por al menos un LED del panel;

(b) detectar una degradación de la potencia de emisión de dicho LED a partir
de una comparación con un valor de referencia almacenado en la memoria;

(c) ajustar automáticamente la corriente de excitación de dicho LED para
mantener la irradiancia efectiva dentro de un margen predefinido respecto al
valor de referencia, durante toda la vida útil del dispositivo.

---

## Claim 13 — Modelo multiescala del usuario [PCT DATE] — ex-C7, sin cambio
**Ancho: 7/10**

Sistema según la reivindicación 1, en el que el motor de inteligencia
artificial comprende un modelo computacional multiescala del usuario que
incluye al menos:

(a) una capa fisiológica configurada para modelar el estado biométrico del
usuario a partir de datos recibidos de uno o más dispositivos vestibles
externos;

(b) una capa tisular configurada para simular la propagación de fotones en
el tejido cutáneo del usuario en función de parámetros morfológicos del
usuario.

---

## Claim 14 — Capa tisular Monte Carlo [PCT DATE] — ex-C8
**Ancho: 4/10**

Sistema según la **reivindicación 13**, en el que la capa tisular implementa una
simulación de Monte Carlo configurada para estimar la absorción y dispersión
de fotones en una pluralidad de capas del tejido cutáneo en función del tipo
de piel del usuario en la escala de Fitzpatrick, contenido de melanina, grosor
de la epidermis y contenido de hemoglobina, y donde el motor de inteligencia
artificial está configurado para optimizar los parámetros del protocolo de
emisión para maximizar la irradiancia efectiva sobre un cromóforo objetivo
predeterminado en una capa tisular predeterminada.

---

## Claim 15 — Motor RL como MDP [PCT DATE] — ex-C9
**Ancho: 7/10**

Sistema según la reivindicación 1, en el que el motor de inteligencia
artificial implementa un algoritmo de aprendizaje por refuerzo formulado como
un proceso de decisión de Markov, donde:

(a) el espacio de estados está definido por al menos un vector de
características del modelo multiescala según la **reivindicación 13** y al menos
un subconjunto de la base de datos histórica longitudinal;

(b) el espacio de acciones comprende los parámetros configurables del panel
de emisión multiespectral, incluyendo longitud de onda, intensidad luminosa,
frecuencia de pulso y patrón espacial de emisión por zona;

(c) la función de recompensa se calcula a partir de al menos un indicador
de mejora fisiológica del usuario medido por la matriz de sensores no
invasivos según la **reivindicación 11** y/o por dispositivos vestibles externos;

(d) el algoritmo de aprendizaje por refuerzo se selecciona del grupo que
consiste en optimización proximal de política (Proximal Policy Optimization,
PPO), métodos de gradiente de política, arquitecturas actor-crítico y
aprendizaje Q profundo (Deep Q-Network, DQN);

(e) la política aprendida es actualizada al finalizar cada sesión de emisión
completada por el usuario, en función de la información incorporada a la base
de datos histórica longitudinal según el paso (iii) de la reivindicación 1.

---

## Claim 16 — Aprendizaje federado [PCT DATE] — ex-C10
**Ancho: 8/10**

Sistema según la **reivindicación 15**, en el que el motor de inteligencia
artificial está configurado además para participar en un proceso de
aprendizaje federado, en el que:

(a) los gradientes de un modelo local entrenado en la unidad de procesamiento
del sistema se transmiten anonimizados a un servidor remoto a través del
módulo de comunicación inalámbrica;

(b) el servidor remoto agrega los gradientes de una pluralidad de sistemas
para entrenar un modelo global;

(c) el servidor remoto transmite periódicamente parámetros actualizados del
modelo global al sistema, los cuales se incorporan al modelo local;

sin que en ningún momento se transmitan los datos personales del usuario al
servidor remoto.

---

## Claim 17 — NPU Edge AI [PCT DATE] — ex-C11, sin cambio
**Ancho: 4/10**

Sistema según la reivindicación 1, en el que la unidad de procesamiento
comprende además un procesador neuronal (NPU) configurado para ejecutar al
menos un subconjunto del motor de inteligencia artificial localmente en el
dispositivo, permitiendo la operación del sistema sin conexión a una red de
comunicaciones externa.

---

## Claim 18 — Cronobiología computacional [PCT DATE] — ex-C12, sin cambio
**Ancho: 5/10**

Sistema según la reivindicación 1, en el que el motor de inteligencia
artificial comprende un módulo de cronobiología computacional configurado
para:

(a) estimar una fase circadiana actual del usuario a partir de patrones
temporales de datos biométricos recibidos de uno o más dispositivos vestibles
externos, comprendiendo dichos datos al menos temperatura corporal periférica,
patrón de actividad física, frecuencia cardiaca y duración y arquitectura del
sueño;

(b) ajustar al menos un parámetro del protocolo de emisión actualizado en
función de la fase circadiana estimada.

---

## Claim 19 — Integración wearables por API [PCT DATE] — ex-C13, sin cambio
**Ancho: 4/10**

Sistema según la reivindicación 1, en el que el módulo de comunicación
inalámbrica está configurado para intercambiar datos con al menos un
dispositivo vestible externo seleccionado del grupo que consiste en un reloj
inteligente, un anillo inteligente, una banda de actividad física y un
monitor continuo de glucosa, a través de al menos una interfaz de programación
de aplicaciones (API) seleccionada del grupo que consiste en Apple HealthKit,
Google Health Connect y API de Oura, recibiendo datos biométricos que
comprenden al menos variabilidad de la frecuencia cardiaca (HRV), saturación
de oxígeno en sangre (SpO₂), fases del sueño y nivel de actividad física.

---

## Claim 20 — Perfiles multi-usuario [parcial MU] — ex-C14, sin cambio
**Ancho: 5/10**

Sistema según la reivindicación 1, en el que la memoria está configurada para
almacenar y gestionar una pluralidad de perfiles de usuario individuales bajo
una misma cuenta del dispositivo, cada perfil manteniendo su propia base de
datos histórica longitudinal y su propio protocolo de emisión actualizado,
y donde el motor de inteligencia artificial está configurado para conmutar
entre perfiles a partir de una entrada de selección recibida a través de
una interfaz de usuario o del módulo de comunicación inalámbrica.

---

## Claim 21 — Selección de objetivo que reconfigura el panel [NUEVO-APP — PRIORIDAD 4]
**Ancho: 6/10**

Sistema según la reivindicación 2, en el que la aplicación de software está
configurada para recibir una selección de objetivo de sesión de entre una
pluralidad de objetivos predefinidos, y donde el motor de inteligencia
artificial está configurado para generar, en función del objetivo seleccionado
y del estado de la base de datos histórica longitudinal, un patrón
espaciotemporal de emisión distinto para el panel para cada objetivo
seleccionado.

---

## Claim 22 — Cuestionario post-sesión como recompensa [NUEVO-APP — PRIORIDAD 5]
**Ancho: 5/10**

Sistema según la reivindicación 2, en el que la aplicación de software está
configurada para recoger, tras cada sesión, un conjunto de indicadores
subjetivos del usuario y asociarlos, en la base de datos histórica
longitudinal, con el conjunto de parámetros efectivos registrados por el panel
para dicha sesión, de modo que dichos indicadores subjetivos constituyen una
entrada adicional de la función de recompensa del motor de inteligencia
artificial según la reivindicación 15.

---

## Claim 23 — Seguridad fisiológica anti-eritema [PCT DATE] — ex-C15
**Ancho: 5/10**

Sistema según cualquiera de las **reivindicaciones 1 a 22**, configurado además
para, durante una sesión de emisión:

(a) recibir señales de al menos un sensor no invasivo integrado en el
dispositivo, dichas señales siendo indicativas de al menos una variable
seleccionada del grupo que consiste en temperatura superficial del tejido
expuesto a la emisión, saturación de oxígeno tisular y nivel de irradiancia
incidente sobre el tejido;

(b) comparar dicha señal con al menos un umbral de seguridad predefinido
almacenado en la memoria;

(c) reducir automáticamente la potencia de emisión del panel multiespectral
o detener la sesión cuando dicha señal exceda dicho umbral.

---

## Claim 24 — Recomendación de timing y bienestar sincronizada [NUEVO-APP — PRIORIDAD 6]
**Ancho: 4/10**

Sistema según la reivindicación 2, en el que la aplicación de software está
configurada para generar y presentar al usuario al menos una recomendación de
instante de realización de una sesión, calculada por el módulo de
cronobiología computacional según la reivindicación 18 en función de una fase
circadiana estimada del usuario, sincronizada con el protocolo de emisión
programado para el panel.

---

## Claim 25 — Aviso de mantenimiento del panel en la app [NUEVO-APP — PRIORIDAD 6]
**Ancho: 4/10**

Sistema según la reivindicación 2, en el que la aplicación de software está
configurada para recibir del servidor remoto y presentar al usuario al menos
un aviso de mantenimiento predictivo del panel generado a partir de datos de
degradación de los emisores detectados por el módulo de calibración automática
según la reivindicación 12.

---

# BLOQUE B — MÉTODO (Claims 26-30)

## Claim 26 — Método (independiente) [FIX] — ex-C16
**Ancho: 8/10**

Método de control adaptativo de un dispositivo de emisión luminosa
multiespectral, ejecutado por un sistema computarizado que comprende un
procesador y una memoria, que comprende los pasos de:

(a) recibir un perfil de usuario y almacenarlo en la memoria;

(b) recibir un primer conjunto de datos biométricos del usuario procedentes
de al menos un dispositivo vestible externo;

(c) generar, por un motor de inteligencia artificial almacenado en la
memoria y ejecutado por el procesador, un primer protocolo de emisión que
define al menos una longitud de onda, una intensidad y una duración para
cada zona de emisión de **un panel multiespectral dividido en una pluralidad
de zonas de emisión controlables independientemente entre sí**;

(d) transmitir, **mediante una aplicación de software ejecutándose en un
dispositivo electrónico externo**, los parámetros del primer protocolo de
emisión al panel multiespectral para su ejecución durante una sesión;

(e) recibir, **mediante dicha aplicación de software**, y almacenar en la
memoria, al finalizar la sesión, un conjunto de parámetros efectivos
registrados por el panel multiespectral y un segundo conjunto de datos
biométricos del usuario posteriores a la sesión;

(f) actualizar una base de datos histórica longitudinal del usuario
almacenada en la memoria con dicho conjunto de parámetros efectivos y dicho
segundo conjunto de datos biométricos;

(g) generar automáticamente, por el motor de inteligencia artificial, un
protocolo de emisión actualizado para una sesión posterior en función del
estado actual de la base de datos histórica longitudinal.

> **FIX:** (i) el paso (c) ahora introduce el panel con sus zonas (antecedent
> basis); (ii) los pasos (d) y (e) nombran la app como actor del downlink/uplink,
> extendiendo el ancla app-panel al bloque de método.

---

## Claim 27 — Cold-start [PCT DATE] — ex-C17
**Ancho: 5/10**

Método según la **reivindicación 26**, en el que el paso (c) comprende:

(c1) determinar si la base de datos histórica longitudinal contiene
información previa del usuario;

(c2) en caso negativo, aplicar un modelo de población almacenado en la
memoria al perfil de usuario recibido en el paso (a) para inferir un
conjunto de parámetros iniciales de emisión, y almacenar en la memoria al
menos un identificador del modelo de población utilizado;

(c3) en caso afirmativo, generar el primer protocolo de emisión a partir de
la información previa del usuario y del perfil de usuario.

---

## Claim 28 — Adherencia [PCT DATE] — ex-C18
**Ancho: 5/10**

Método según la **reivindicación 26**, que comprende además los pasos de:

(h) detectar, a partir del estado actual de la base de datos histórica
longitudinal, una baja adherencia del usuario al protocolo, definida como
una frecuencia de sesiones registradas inferior a un umbral configurable;

(i) generar y transmitir, a través de un módulo de comunicación inalámbrica
del sistema, al menos una notificación a un dispositivo electrónico
asociado al usuario, dicha notificación incluyendo al menos una sugerencia
personalizada generada por el motor de inteligencia artificial a partir del
perfil del usuario y la base de datos histórica longitudinal.

---

## Claim 29 — Optimización multiobjetivo [PCT DATE] — ex-C19
**Ancho: 6/10**

Método según la **reivindicación 26**, en el que el paso (g) comprende ejecutar
una optimización multiobjetivo de los parámetros del protocolo, donde la
función objetivo combina al menos:

(i) un indicador de eficacia fisiológica medido a partir del segundo
conjunto de datos biométricos almacenado en la base de datos histórica
longitudinal;

(ii) un indicador de consumo energético del panel multiespectral durante la
sesión;

ponderados según al menos un coeficiente configurable a través de una
interfaz de usuario.

---

## Claim 30 — Aprendizaje federado en método [PCT DATE] — ex-C20
**Ancho: 7/10**

Método según la **reivindicación 26**, que comprende además el paso de:

(h) transmitir, mediante un proceso de aprendizaje federado, gradientes de
un modelo local entrenado durante el paso (g) a un servidor remoto,
donde el servidor remoto agrega gradientes recibidos de una pluralidad de
sistemas computarizados ejecutando el mismo método para entrenar un modelo
global, y donde no se transmiten al servidor remoto los datos personales
del usuario.

---

# BLOQUE C — CRM Y SISTEMA DISTRIBUIDO (Claims 31-32)

## Claim 31 — CRM [PCT DATE] — ex-C21
**Ancho: 8/10**

Medio no transitorio legible por ordenador que almacena instrucciones que,
al ser ejecutadas por un procesador de un sistema computarizado, hacen que
el sistema computarizado realice el método según cualquiera de las
**reivindicaciones 26 a 30**.

---

## Claim 32 — Sistema distribuido [PCT DATE] — ex-C22
**Ancho: 8/10**

Sistema distribuido para el control adaptativo de una pluralidad de
dispositivos de emisión luminosa multiespectral, que comprende:

(a) la pluralidad de dispositivos, cada uno de ellos siendo un sistema
según la **reivindicación 1**;

(b) un servidor remoto comunicado con cada uno de dichos dispositivos a
través de una red de comunicaciones, configurado para alojar al menos un
componente del motor de inteligencia artificial y al menos una porción de
la base de datos histórica longitudinal de cada usuario;

(c) donde el servidor remoto está configurado para:

(i) recibir de cada dispositivo, al finalizar cada sesión, un conjunto
de parámetros efectivos y un segundo conjunto de datos biométricos;

(ii) generar, para cada usuario, un protocolo de emisión actualizado;

(iii) transmitir el protocolo de emisión actualizado al dispositivo
correspondiente para su ejecución en la siguiente sesión.

---

# BLOQUE D — SOSTENIBILIDAD Y GESTIÓN DE FLOTA (Claims 33-35)

## Claim 33 — Pasaporte Digital de Producto [PCT DATE] — ex-C23
**Ancho: 6/10**

Sistema según la **reivindicación 32**, en el que el servidor remoto está
configurado además para generar y mantener un Pasaporte Digital de Producto
asociado a cada dispositivo de la pluralidad, donde dicho Pasaporte Digital
de Producto almacena al menos:

(a) datos de composición de materiales del dispositivo;
(b) un valor estimado de huella de carbono del ciclo de vida del dispositivo;
(c) un historial de uso operativo del dispositivo;
(d) un historial de intervenciones de mantenimiento sobre el dispositivo;
(e) un índice de reparabilidad calculado a partir de los datos anteriores.

---

## Claim 34 — Mantenimiento predictivo [PCT DATE] — ex-C24
**Ancho: 6/10**

Sistema según la **reivindicación 33**, en el que el servidor remoto está
configurado además para ejecutar un algoritmo de mantenimiento predictivo
que comprende:

(a) recibir periódicamente, de cada dispositivo, datos de degradación de
los emisores luminosos detectados por el módulo de calibración automática
según la **reivindicación 12**;

(b) estimar, a partir de un modelo de degradación entrenado sobre datos
históricos de una pluralidad de dispositivos, un instante futuro estimado
de fallo o de salida del rango de irradiancia tolerable de al menos un
componente del dispositivo;

(c) generar y transmitir, anticipadamente a dicho instante estimado, al
menos una orden de intervención de mantenimiento sobre el dispositivo.

---

## Claim 35 — Gestión remota de flota (ex-PaaS) [PCT DATE] — ex-C25
**Ancho: 8/10**

Sistema según la **reivindicación 32**, configurado además para la gestión
técnica remota de una flota de dispositivos de emisión luminosa
multiespectral, que comprende:

(a) un módulo de telemetría configurado para recibir periódicamente, de
cada dispositivo de la flota, datos de uso operativo, datos de degradación
de componentes y datos de eventos del dispositivo;

(b) un módulo de actualización over-the-air configurado para transmitir,
a cada dispositivo de la flota, actualizaciones de los parámetros del
protocolo de emisión y actualizaciones del firmware de la unidad de
procesamiento del dispositivo;

(c) un módulo de gestión del ciclo de vida configurado para coordinar,
basándose en los datos recibidos por el módulo de telemetría y en el
Pasaporte Digital de Producto según la **reivindicación 33**, procesos
automatizados seleccionados del grupo que consiste en mantenimiento,
recuperación, remanufactura y reciclaje de los dispositivos de la flota.

---

# MAPEO v0.2 → v0.3

| v0.2 | v0.3 | Cambio |
|---|---|---|
| C1 | **C1** | [FIX] zonas en apartado (a) |
| — | **C2** | [NUEVO-APP] puente bidireccional app-panel |
| — | **C3** | [NUEVO-APP] fusión wearable→app→panel |
| — | **C4** | [NUEVO-APP] explicabilidad (XAI) |
| C2 | **C5** | [MU PRIORITY] sin cambio |
| — | **C6** | [NUEVO-RANGO][PROPUESTA] bandas amplias |
| C3 | **C7** | [MU PRIORITY] sin cambio |
| — | **C8** | [NUEVO-RANGO][PROPUESTA] sub-rangos módulo central |
| — | **C9** | [NUEVO-RANGO][PROPUESTA] 810 nm |
| C4 | **C10** | sin cambio (refs internas OK) |
| C5 | **C11** | sin cambio |
| C6 | **C12** | sin cambio |
| C7 | **C13** | sin cambio |
| C8 | **C14** | ref actualizada C7→C13 |
| C9 | **C15** | refs actualizadas C7→C13, C5→C11 |
| C10 | **C16** | ref actualizada C9→C15 |
| C11 | **C17** | sin cambio |
| C12 | **C18** | sin cambio |
| C13 | **C19** | sin cambio |
| C14 | **C20** | sin cambio |
| — | **C21** | [NUEVO-APP] selección objetivo |
| — | **C22** | [NUEVO-APP] cuestionario post-sesión |
| C15 | **C23** | rango ampliado "1 a 14"→"1 a 22" |
| — | **C24** | [NUEVO-APP] timing/bienestar |
| — | **C25** | [NUEVO-APP] aviso mantenimiento |
| C16 | **C26** | [FIX] zonas + app en (c)(d)(e) |
| C17 | **C27** | ref C16→C26 |
| C18 | **C28** | ref C16→C26 |
| C19 | **C29** | ref C16→C26 |
| C20 | **C30** | ref C16→C26 |
| C21 | **C31** | ref "16 a 20"→"26 a 30" |
| C22 | **C32** | ref C1 (sin cambio) |
| C23 | **C33** | ref C22→C32 |
| C24 | **C34** | refs C23→C33, C6→C12 |
| C25 | **C35** | refs C22→C32, C23→C33 |

---

# ESTADÍSTICAS v0.3

| Métrica | v0.2 | v0.3 |
|---|---|---|
| Total claims | 25 | **35** |
| Independientes | 4 (C1, C16, C21, C22) | 4 (C1, C26, C31, C32) |
| Bloque A (sistema) | 15 | **25** |
| Bloque B (método) | 5 | 5 |
| Bloque C (CRM+distr) | 2 | 2 |
| Bloque D (sostenibilidad) | 3 | 3 |
| Claims app-panel [NUEVO-APP] | 0 | **7** (C2,C3,C4,C21,C22,C24,C25) |
| Claims rango [NUEVO-RANGO] | 0 | **3** (C6,C8,C9) |
| [MU PRIORITY] | 2 | 2 (C5,C7) |

> **⚠️ AVISO DE COSTE — decisión para Patricia:** 35 claims cruza con holgura el
> umbral de tasas por reivindicación excedente de EPO (desde la 16ª) y de otras
> oficinas. Antes de fase nacional conviene decidir con Patricia qué consolidar:
> (i) fusionar C6/C8/C9 de rangos en menos claims Markush; (ii) fusionar
> APP-6/APP-7 (prioridad 6) o pasarlas a la memoria como realizaciones; (iii)
> mantener las 35 solo si el valor defensivo lo justifica. Para el filing PCT
> inicial no hay límite duro, pero conviene entrar ya optimizado.

---

# CUESTIONES ABIERTAS PARA PATRICIA (consolidadas)

## Sobre el clúster app-panel (C2-C4, C21-C22, C24-C25)
1. ¿Confirma el anclaje SiMD (app siempre atada al panel) como suficiente para
   superar Alice §101 y Art. 52 EPC?
2. ¿Prefiere alguna de las APP como dependiente de C1 en lugar de C2, o la
   cadena C2→(C3,C4,C21,C22,C24,C25) es correcta?

## Sobre los rangos (C6, C8, C9)
3. ¿Dejar C5 y C7 puntuales con prioridad MU + añadir C6/C8/C9 con rango [PCT
   DATE] es la vía correcta para no perder la fecha 24/12/2025?
4. ¿Los cortes de banda son defendibles, o los ajustamos? (validación PubMed
   pendiente del agente FBM-Elite).
5. ¿810 nm como claim autónomo (C9) o subsumido en la banda 780-880 de C6(f)?
6. ¿Consolidamos C6/C8/C9 en Markush para controlar el recuento de claims?

## Transversales
7. ¿Recuento de 35 claims aceptable para el filing PCT, o consolidamos antes?
8. Todas las cuestiones A-E del email inicial siguen vigentes (BOPI, ISA,
   prioridad, sostenibilidad, FTO).

---

*PCT EKIO Bienestar S.L. — Claim Set v0.3 consolidado — Confidencial — Borrador interno*
