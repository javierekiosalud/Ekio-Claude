# PCT EKIO — Claim Set v0.2
# 25 reivindicaciones para PCT sobre MU U202532624
# Sistema SRBA — título técnico aséptico
# Versión: v0.2 — 2026-06-04 — borrador interno
# Reemplaza: v0.1 (mantenido como histórico)

---

## CHANGELOG v0.1 → v0.2

Integración de las 3 modificaciones identificadas en
`06_examiner_redteam/examiner_redteam_claims_v0.1.md`:

| Cambio | Razón |
|---|---|
| **C4 reforzado:** añadido "valores continuos", "dinámicamente", "patrón espaciotemporal adaptado". | Defensa contra Vielight US11633621B2 (6 zonas binarias on/off) → diferenciación técnica más clara. |
| **C9 (renumerado C9):** añadido subpárrafo (d) especificando algoritmo RL (PPO/policy gradient/actor-critic/DQN) y subpárrafo (e) actualización post-sesión. | Requisito Art. 83 EPC / §112 US enablement. Especificación de implementación. |
| **C19 movido a Bloque A:** ya no es método, es sistema "configurado para" detectar variables fisiológicas + reducir potencia. Renumerado **C15** en Bloque A. | Defensa contra Art. 53(c) EPC — los pasos de monitorización ya no son pasos del método ejecutados sobre cuerpo humano; son configuración del sistema. |
| **Bloque B renumerado:** de C15-C20 a C16-C20 (5 claims). C20 (federated en método) mantiene su posición lógica. | Consecuencia del movimiento de C19. |
| **Total claims:** 25 (sin cambio). |

---

## Título de la PCT (sin cambio respecto a v0.1)

**ES:** "Sistema y método de control adaptativo de un dispositivo de emisión
luminosa multiespectral basado en realimentación fisiológica y aprendizaje
continuo"

**EN:** "System and method for adaptive control of a multispectral
light-emitting device based on physiological feedback and continuous learning"

---

# BLOQUE A — SISTEMA (Claims 1-15)

## Claim 1 — Sistema (independiente principal) [HÍBRIDO]
**Ancho: 8/10 — sin cambio**

Sistema de control adaptativo de un dispositivo de emisión luminosa multiespectral,
**caracterizado por que comprende:**

(a) un panel de emisión multiespectral que comprende una pluralidad de diodos
emisores de luz (LEDs) configurados para emitir radiación electromagnética en al
menos dos longitudes de onda distintas en el rango de 295 nm a 1100 nm;

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

---

## Claim 2 [MU PRIORITY] — sin cambio
**Ancho: 3/10**

Sistema según la reivindicación 1, en el que el panel de emisión multiespectral
comprende LEDs configurados para emitir en longitudes de onda seleccionadas del
grupo que consiste en 295, 385, 405, 485, 630, 670, 727, 850, 935 y 1050 nm.

---

## Claim 3 [MU PRIORITY] — sin cambio
**Ancho: 4/10**

Sistema según la reivindicación 1, que comprende además un módulo LED central
de alta densidad y potencia integrado en el panel de emisión multiespectral,
que comprende al menos cinco longitudes de onda distintas seleccionadas del
grupo que consiste en 670, 727, 850, 935 y 1050 nm, y donde el módulo LED
central es controlable independientemente del resto de LEDs del panel
multiespectral.

---

## Claim 4 [parcial MU — verificar dibujos] ⬆️ REFORZADO
**Ancho: 6/10 (era 5/10)**

Sistema según la reivindicación 1, en el que el panel de emisión multiespectral
está dividido en una pluralidad de zonas de emisión controlables
independientemente entre sí en **al menos intensidad luminosa, frecuencia de
pulso y duración mediante valores continuos**, y donde el motor de inteligencia
artificial está configurado para **asignar dinámicamente valores distintos y
continuos de cada uno de dichos parámetros a zonas distintas dentro de una
misma sesión, conformando un patrón espaciotemporal de emisión adaptado en
función del estado actual de la base de datos histórica longitudinal**.

> **Defensa contra Vielight US11633621B2:** Vielight enseña activación/desactivación
> selectiva binaria (on/off) de 6 zonas predefinidas para targeting de regiones
> cerebrales. C4 reivindica control continuo de tres parámetros (intensidad,
> frecuencia, duración) en una pluralidad de zonas, asignados dinámicamente por
> el motor IA en función del estado actual del usuario, conformando un patrón
> espaciotemporal. Es una invención técnica sustancialmente distinta.

---

## Claim 5 [PCT DATE] — sin cambio
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

## Claim 6 [PCT DATE] — sin cambio (joya técnica)
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

## Claim 7 [PCT DATE] — sin cambio
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

## Claim 8 [PCT DATE] — sin cambio
**Ancho: 4/10**

Sistema según la reivindicación 7, en el que la capa tisular implementa una
simulación de Monte Carlo configurada para estimar la absorción y dispersión
de fotones en una pluralidad de capas del tejido cutáneo en función del tipo
de piel del usuario en la escala de Fitzpatrick, contenido de melanina, grosor
de la epidermis y contenido de hemoglobina, y donde el motor de inteligencia
artificial está configurado para optimizar los parámetros del protocolo de
emisión para maximizar la irradiancia efectiva sobre un cromóforo objetivo
predeterminado en una capa tisular predeterminada.

---

## Claim 9 [PCT DATE] ⬆️ AMPLIADO (PPO + actualización post-sesión)
**Ancho: 7/10 (era 6/10)**

Sistema según la reivindicación 1, en el que el motor de inteligencia
artificial implementa un algoritmo de aprendizaje por refuerzo formulado como
un proceso de decisión de Markov, donde:

(a) el espacio de estados está definido por al menos un vector de
características del modelo multiescala según la reivindicación 7 y al menos
un subconjunto de la base de datos histórica longitudinal;

(b) el espacio de acciones comprende los parámetros configurables del panel
de emisión multiespectral, incluyendo longitud de onda, intensidad luminosa,
frecuencia de pulso y patrón espacial de emisión por zona;

(c) la función de recompensa se calcula a partir de al menos un indicador
de mejora fisiológica del usuario medido por la matriz de sensores no
invasivos según la reivindicación 5 y/o por dispositivos vestibles externos;

**(d) el algoritmo de aprendizaje por refuerzo se selecciona del grupo que
consiste en optimización proximal de política (Proximal Policy Optimization,
PPO), métodos de gradiente de política (policy gradient methods),
arquitecturas actor-crítico (actor-critic) y aprendizaje Q profundo (Deep
Q-Network, DQN);**

**(e) la política aprendida es actualizada al finalizar cada sesión de
emisión completada por el usuario, en función de la información incorporada a
la base de datos histórica longitudinal según el paso (iii) de la
reivindicación 1.**

> **Defensa contra CGM closed-loop:** la formulación del MDP del SRBA es
> específica del dominio óptico tisular — espacios de estado, acciones,
> recompensa, ventanas temporales, restricciones de seguridad son
> sustancialmente distintos de los aplicables a dosificación de insulina
> en CGM. La memoria descriptiva detallará los 5 puntos de distinción.

---

## Claim 10 [PCT DATE] — sin cambio (joya técnica)
**Ancho: 8/10**

Sistema según la reivindicación 9, en el que el motor de inteligencia
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

## Claim 11 [PCT DATE] — sin cambio
**Ancho: 4/10**

Sistema según la reivindicación 1, en el que la unidad de procesamiento
comprende además un procesador neuronal (NPU) configurado para ejecutar al
menos un subconjunto del motor de inteligencia artificial localmente en el
dispositivo, permitiendo la operación del sistema sin conexión a una red de
comunicaciones externa.

---

## Claim 12 [PCT DATE] — sin cambio
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

## Claim 13 [PCT DATE] — sin cambio
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

## Claim 14 [parcial MU] — sin cambio
**Ancho: 5/10**

Sistema según la reivindicación 1, en el que la memoria está configurada para
almacenar y gestionar una pluralidad de perfiles de usuario individuales bajo
una misma cuenta del dispositivo, cada perfil manteniendo su propia base de
datos histórica longitudinal y su propio protocolo de emisión actualizado,
y donde el motor de inteligencia artificial está configurado para conmutar
entre perfiles a partir de una entrada de selección recibida a través de
una interfaz de usuario o del módulo de comunicación inalámbrica.

---

## Claim 15 [PCT DATE] 🆕 MOVIDO desde Bloque B
**Ancho: 5/10**

Sistema según cualquiera de las reivindicaciones 1 a 14, configurado además
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

> **Reformulación crítica respecto a v0.1 (era C19 método):** ahora es claim
> de SISTEMA configurado para — el sistema lleva a cabo las acciones (recibir
> señales, comparar con umbral, reducir potencia) sobre **el dispositivo**,
> no sobre el cuerpo humano. Pasa Art. 53(c) EPC.

---

# BLOQUE B — MÉTODO (Claims 16-20)

## Claim 16 — Método (independiente) [PCT DATE] — era C15
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
cada zona de emisión de un panel multiespectral;

(d) transmitir los parámetros del primer protocolo de emisión al panel
multiespectral para su ejecución durante una sesión;

(e) recibir y almacenar en la memoria, al finalizar la sesión, un conjunto
de parámetros efectivos registrados por el panel multiespectral y un
segundo conjunto de datos biométricos del usuario posteriores a la sesión;

(f) actualizar una base de datos histórica longitudinal del usuario
almacenada en la memoria con dicho conjunto de parámetros efectivos y dicho
segundo conjunto de datos biométricos;

(g) generar automáticamente, por el motor de inteligencia artificial, un
protocolo de emisión actualizado para una sesión posterior en función del
estado actual de la base de datos histórica longitudinal.

---

## Claim 17 — Cold-start [PCT DATE] — era C16
**Ancho: 5/10**

Método según la reivindicación 16, en el que el paso (c) comprende:

(c1) determinar si la base de datos histórica longitudinal contiene
información previa del usuario;

(c2) en caso negativo, aplicar un modelo de población almacenado en la
memoria al perfil de usuario recibido en el paso (a) para inferir un
conjunto de parámetros iniciales de emisión, y almacenar en la memoria al
menos un identificador del modelo de población utilizado;

(c3) en caso afirmativo, generar el primer protocolo de emisión a partir de
la información previa del usuario y del perfil de usuario.

---

## Claim 18 — Adherencia [PCT DATE] — era C17
**Ancho: 5/10**

Método según la reivindicación 16, que comprende además los pasos de:

(h) detectar, a partir del estado actual de la base de datos histórica
longitudinal, una baja adherencia del usuario al protocolo, definida como
una frecuencia de sesiones registradas inferior a un umbral configurable;

(i) generar y transmitir, a través de un módulo de comunicación inalámbrica
del sistema, al menos una notificación a un dispositivo electrónico
asociado al usuario, dicha notificación incluyendo al menos una sugerencia
personalizada generada por el motor de inteligencia artificial a partir del
perfil del usuario y la base de datos histórica longitudinal.

---

## Claim 19 — Optimización multiobjetivo [PCT DATE] — era C18
**Ancho: 6/10**

Método según la reivindicación 16, en el que el paso (g) comprende ejecutar
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

## Claim 20 — Aprendizaje federado en método [PCT DATE] — sin cambio
**Ancho: 7/10**

Método según la reivindicación 16, que comprende además el paso de:

(h) transmitir, mediante un proceso de aprendizaje federado, gradientes de
un modelo local entrenado durante el paso (g) a un servidor remoto,
donde el servidor remoto agrega gradientes recibidos de una pluralidad de
sistemas computarizados ejecutando el mismo método para entrenar un modelo
global, y donde no se transmiten al servidor remoto los datos personales
del usuario.

> Nota: el ex-C19 (seguridad) ya está en Bloque A como nuevo C15.

---

# BLOQUE C — CRM Y SISTEMA DISTRIBUIDO

## Claim 21 — CRM [PCT DATE] — sin cambio
**Ancho: 8/10**

Medio no transitorio legible por ordenador que almacena instrucciones que,
al ser ejecutadas por un procesador de un sistema computarizado, hacen que
el sistema computarizado realice el método según cualquiera de las
reivindicaciones 16 a 20.

---

## Claim 22 — Sistema distribuido [PCT DATE] — sin cambio
**Ancho: 8/10**

Sistema distribuido para el control adaptativo de una pluralidad de
dispositivos de emisión luminosa multiespectral, que comprende:

(a) la pluralidad de dispositivos, cada uno de ellos siendo un sistema
según la reivindicación 1;

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

# BLOQUE D — SOSTENIBILIDAD Y GESTIÓN DE FLOTA

## Claim 23 — Pasaporte Digital de Producto [PCT DATE] — sin cambio
**Ancho: 6/10**

Sistema según la reivindicación 22, en el que el servidor remoto está
configurado además para generar y mantener un Pasaporte Digital de Producto
asociado a cada dispositivo de la pluralidad, donde dicho Pasaporte Digital
de Producto almacena al menos:

(a) datos de composición de materiales del dispositivo;

(b) un valor estimado de huella de carbono del ciclo de vida del
dispositivo;

(c) un historial de uso operativo del dispositivo;

(d) un historial de intervenciones de mantenimiento sobre el dispositivo;

(e) un índice de reparabilidad calculado a partir de los datos anteriores.

---

## Claim 24 — Mantenimiento predictivo [PCT DATE] — sin cambio
**Ancho: 6/10**

Sistema según la reivindicación 23, en el que el servidor remoto está
configurado además para ejecutar un algoritmo de mantenimiento predictivo
que comprende:

(a) recibir periódicamente, de cada dispositivo, datos de degradación de
los emisores luminosos detectados por el módulo de calibración automática
según la reivindicación 6;

(b) estimar, a partir de un modelo de degradación entrenado sobre datos
históricos de una pluralidad de dispositivos, un instante futuro estimado
de fallo o de salida del rango de irradiancia tolerable de al menos un
componente del dispositivo;

(c) generar y transmitir, anticipadamente a dicho instante estimado, al
menos una orden de intervención de mantenimiento sobre el dispositivo.

---

## Claim 25 — Gestión remota de flota (ex-PaaS) [PCT DATE] — sin cambio
**Ancho: 8/10**

Sistema según la reivindicación 22, configurado además para la gestión
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
Pasaporte Digital de Producto según la reivindicación 23, procesos
automatizados seleccionados del grupo que consiste en mantenimiento,
recuperación, remanufactura y reciclaje de los dispositivos de la flota.

---

# ESTADÍSTICAS v0.2

| Métrica | Valor v0.1 | Valor v0.2 |
|---|---|---|
| Total claims | 25 | 25 |
| Indep. claims | 4 (C1, C15, C21, C22) | 4 (C1, C16, C21, C22) |
| Bloque A (sistema) | 14 | **15** (+1 por C15 movido) |
| Bloque B (método) | 6 | **5** (-1 por C19 movido) |
| Bloque C (CRM+distr) | 2 | 2 |
| Bloque D (sostenibilidad) | 3 | 3 |
| [MU PRIORITY] | 2 | 2 |
| [parcial MU] | 2 | 2 |
| [PCT DATE] | 21 | 21 |
| Promedio claim width | 5.8/10 | 5.9/10 |

---

# RESUMEN DE CAMBIOS POR CLAIM (mapping v0.1 → v0.2)

| v0.1 | → | v0.2 | Cambio |
|---|---|---|---|
| C1-C3 | → | C1-C3 | Sin cambio |
| C4 | → | C4 | **Reforzado** (valores continuos, dinámicamente, patrón espaciotemporal) |
| C5-C8 | → | C5-C8 | Sin cambio |
| C9 | → | C9 | **Ampliado** (subpárrafos (d) PPO/PG/A-C/DQN y (e) actualización post-sesión) |
| C10-C14 | → | C10-C14 | Sin cambio |
| (C19 método) | → | **C15** | **Movido a Bloque A** como claim de sistema configurado para |
| C15-C18 | → | C16-C19 | Renumerados |
| C20 | → | C20 | Sin cambio |
| C21-C25 | → | C21-C25 | Sin cambio |

---

# DEFENSIBILIDAD JURISDICCIONAL CONSOLIDADA v0.2

Tras la integración de las 3 modificaciones, **el 100% de los claims pasan
los 5 tests del examiner red-team** (USPTO Alice + EPO Art.52 + EPO Art.53(c)
+ EPO Art.56 + EPO Art.83/§112 + CNIPA TSP), condicionado a que la **memoria
descriptiva (Fase 3) cubra los 8 requisitos de enablement** identificados en
`06_examiner_redteam/examiner_redteam_claims_v0.1.md`.

---

# PRÓXIMO PASO

**Fase 3 — Redacción de la memoria descriptiva completa** cubriendo:

1. Campo de la invención (1 párrafo aséptico).
2. Estado de la técnica (3-4 páginas con análisis de Vielight US11633621B2 y
   Zerigo US20230218922A1).
3. Problema técnico que se resuelve (1 párrafo por problema → solución).
4. Descripción general (con signos de referencia consistentes).
5. **Descripción del motor IA — sección autónoma crítica** (≥3 páginas).
6. Diseño del MDP del RL + 5 puntos distinción vs CGM (≥2 páginas).
7. Mecanismo de aprendizaje federado (≥1 página).
8. Modelo multiescala con citas científicas (Welch & Van Gemert, Wang & Jacques).
9. Algoritmo de cronobiología (Hesse et al. 2020).
10. Calibración automática + modelo de degradación.
11. Optimización multiobjetivo.
12. Realización preferente end-to-end con parámetros concretos.
13. 5 ejemplos de aplicación (deportista, sueño, rendimiento cognitivo,
    familia, dolor crónico).
14. Descripción de figuras (Fig. 1-5 mínimo).
15. Differences over closest prior art (Vielight 7 puntos + Zerigo).

---

*PCT EKIO Bienestar S.L. — Claim Set v0.2 — Confidencial — Borrador interno*
