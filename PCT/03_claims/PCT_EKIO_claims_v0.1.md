# PCT EKIO — Claim Set v0.1
# 25 reivindicaciones para PCT sobre MU U202532624
# Sistema SRBA (Sistema de Resonancia Biofotónica Adaptativa) — título técnico aséptico
# Versión: v0.1 — 2026-06-04 — borrador interno, NO enviado a Patricia

---

## Título propuesto de la PCT

**ES:** "Sistema y método de control adaptativo de un dispositivo de emisión
luminosa multiespectral basado en realimentación fisiológica y aprendizaje continuo"

**EN (para ISA EPO):** "System and method for adaptive control of a multispectral
light-emitting device based on physiological feedback and continuous learning"

**ZH (para CNIPA fase nacional):** 基于生理反馈和持续学习的多光谱光发射设备
自适应控制系统及方法 (sujeto a revisión por traductor oficial CNIPA en fase
nacional)

> Razón del título técnico aséptico: cero términos médicos/terapéuticos
> (Art. 53(c) EPC, exclusiones CNIPA). "Resonancia biofotónica" queda como
> marca/branding externo, no aparece en claims ni memoria técnica.

---

## Convenciones de etiquetado

- **[MU PRIORITY]** — característica soportada literalmente en MU U202532624,
  reivindica fecha de prioridad **24/12/2025**.
- **[parcial MU]** — característica parcialmente soportada en MU; necesita
  validación de Patricia sobre alcance del soporte.
- **[PCT DATE]** — característica nueva; reivindica fecha de filing PCT (julio
  2026 objetivo).

**Claim width meter** (1 = muy específico / 10 = muy amplio): indica el ancho
de cobertura defensiva de cada reivindicación.

---

# BLOQUE A — SISTEMA

## Claim 1 — Sistema (independiente principal) [HÍBRIDO]
**Ancho: 8/10**

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

> **Defensibilidad jurisdiccional:**
> - **USPTO §101 (Alice):** supera. Sistema físico (panel + módulo
>   comunicación + procesador + memoria) + idea técnica (bucle cerrado
>   adaptativo). Anclaje hardware suficiente para Prong 2 + integración
>   práctica.
> - **EPO Art. 52:** carácter técnico claro — sistema físico, efecto técnico
>   medible (adaptación automática de parámetros).
> - **EPO Art. 53(c):** sin lenguaje terapéutico, ni paso ejecutado sobre el
>   cuerpo humano con efecto curativo. Supera.
> - **EPO Art. 56:** objective technical problem = "cómo adaptar
>   automáticamente parámetros de un dispositivo de emisión luminosa
>   multiespectral a la respuesta fisiológica individual del usuario a lo
>   largo del tiempo". Solución no obvia frente al closest prior art
>   (US20230218922A1 — Phototherapy Control — no divulga bucle cerrado
>   adaptativo sesión a sesión con base de datos longitudinal).
> - **CNIPA TSP:** Technical Problem + Technical Solution (panel + IA +
>   bucle) + Technical Effect (adaptación automática). Pasa.

---

## Claim 2 [MU PRIORITY]
**Ancho: 3/10**

Sistema según la reivindicación 1, en el que el panel de emisión multiespectral
comprende LEDs configurados para emitir en longitudes de onda seleccionadas del
grupo que consiste en 295, 385, 405, 485, 630, 670, 727, 850, 935 y 1050 nm.

> Soporte literal en MU U202532624 § "El módulo LED puede tener las siguientes
> longitudes de onda".

---

## Claim 3 [MU PRIORITY]
**Ancho: 4/10**

Sistema según la reivindicación 1, que comprende además un módulo LED central
de alta densidad y potencia integrado en el panel de emisión multiespectral,
que comprende al menos cinco longitudes de onda distintas seleccionadas del
grupo que consiste en 670, 727, 850, 935 y 1050 nm, y donde el módulo LED
central es controlable independientemente del resto de LEDs del panel
multiespectral.

> Soporte literal en MU claim 8.

---

## Claim 4 [parcial MU — verificar dibujos]
**Ancho: 5/10**

Sistema según la reivindicación 1, en el que el panel de emisión multiespectral
está dividido en una pluralidad de zonas de emisión controlables
independientemente entre sí en al menos intensidad luminosa, frecuencia de
pulso y duración, y donde el motor de inteligencia artificial está configurado
para asignar parámetros de emisión distintos a zonas distintas dentro de una
misma sesión.

> Soporte parcial en MU ("control independiente del panel y del módulo
> central"); ampliación PCT a múltiples zonas. **Patricia debe confirmar si
> los dibujos del MU soportan la pluralidad de zonas o sólo dos.**

---

## Claim 5 [PCT DATE]
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

> Nota: Raman y autofluorescencia retirados (decisión 2026-06-04). NIRS y
> termopila son sensores de coste viable e implementables.

---

## Claim 6 [PCT DATE] — CLAIM CLAVE
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

> "Joya técnica" del borrador SRBA original (claim 14). Excelente
> defensibilidad Alice — mejora técnica cuantificable y concreta.

---

## Claim 7 [PCT DATE]
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

## Claim 8 [PCT DATE]
**Ancho: 4/10**

Sistema según la reivindicación 7, en el que la capa tisular implementa una
simulación de Monte Carlo configurada para estimar la absorción y dispersión
de fotones en una pluralidad de capas del tejido cutáneo en función del tipo
de piel del usuario en la escala de Fitzpatrick, contenido de melanina, grosor
de la epidermis y contenido de hemoglobina, y donde el motor de inteligencia
artificial está configurado para optimizar los parámetros del protocolo de
emisión para maximizar la irradiancia efectiva sobre un cromóforo objetivo
predeterminado en una capa tisular predeterminada.

> Excelente "technical effect" para EPO Art. 56 y Alice §101. Cromóforo
> objetivo (p.ej. citocromo c oxidasa) es elemento técnico medible.

---

## Claim 9 [PCT DATE]
**Ancho: 6/10**

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
invasivos según la reivindicación 5 y/o por dispositivos vestibles externos.

---

## Claim 10 [PCT DATE] — CLAIM CLAVE
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

> Excelente para Alice (technical solution to RGPD/HIPAA problem) y como
> diferenciador frente a competidores actuales. Blindaje RGPD explícito.

---

## Claim 11 [PCT DATE]
**Ancho: 4/10**

Sistema según la reivindicación 1, en el que la unidad de procesamiento
comprende además un procesador neuronal (NPU) configurado para ejecutar al
menos un subconjunto del motor de inteligencia artificial localmente en el
dispositivo, permitiendo la operación del sistema sin conexión a una red de
comunicaciones externa.

---

## Claim 12 [PCT DATE]
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

## Claim 13 [PCT DATE]
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

## Claim 14 [parcial MU]
**Ancho: 5/10**

Sistema según la reivindicación 1, en el que la memoria está configurada para
almacenar y gestionar una pluralidad de perfiles de usuario individuales bajo
una misma cuenta del dispositivo, cada perfil manteniendo su propia base de
datos histórica longitudinal y su propio protocolo de emisión actualizado,
y donde el motor de inteligencia artificial está configurado para conmutar
entre perfiles a partir de una entrada de selección recibida a través de
una interfaz de usuario o del módulo de comunicación inalámbrica.

> Soporte parcial en MU ("perfiles de usuario individualizados"). El concepto
> multi-usuario / familiar es ampliación PCT.

---

# BLOQUE B — MÉTODO

## Claim 15 — Método (independiente) [PCT DATE]
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

> **Formulación deliberadamente NO terapéutica.** Todos los pasos se
> ejecutan por el sistema computarizado sobre parámetros del panel y datos
> del usuario; ningún paso interactúa directamente con el cuerpo del
> usuario con efecto curativo. Supera Art. 53(c) EPC.

---

## Claim 16 — Cold-start [PCT DATE]
**Ancho: 5/10**

Método según la reivindicación 15, en el que el paso (c) comprende:

(c1) determinar si la base de datos histórica longitudinal contiene
información previa del usuario;

(c2) en caso negativo, aplicar un modelo de población almacenado en la
memoria al perfil de usuario recibido en el paso (a) para inferir un
conjunto de parámetros iniciales de emisión, y almacenar en la memoria al
menos un identificador del modelo de población utilizado;

(c3) en caso afirmativo, generar el primer protocolo de emisión a partir de
la información previa del usuario y del perfil de usuario.

---

## Claim 17 — Adherencia [PCT DATE]
**Ancho: 5/10**

Método según la reivindicación 15, que comprende además los pasos de:

(h) detectar, a partir del estado actual de la base de datos histórica
longitudinal, una baja adherencia del usuario al protocolo, definida como
una frecuencia de sesiones registradas inferior a un umbral configurable;

(i) generar y transmitir, a través de un módulo de comunicación inalámbrica
del sistema, al menos una notificación a un dispositivo electrónico
asociado al usuario, dicha notificación incluyendo al menos una sugerencia
personalizada generada por el motor de inteligencia artificial a partir del
perfil del usuario y la base de datos histórica longitudinal.

---

## Claim 18 — Optimización multiobjetivo [PCT DATE]
**Ancho: 6/10**

Método según la reivindicación 15, en el que el paso (g) comprende ejecutar
una optimización multiobjetivo de los parámetros del protocolo, donde la
función objetivo combina al menos:

(i) un indicador de eficacia fisiológica medido a partir del segundo
conjunto de datos biométricos almacenado en la base de datos histórica
longitudinal;

(ii) un indicador de consumo energético del panel multiespectral durante la
sesión;

ponderados según al menos un coeficiente configurable a través de una
interfaz de usuario.

> Reformulación del claim 24 de sostenibilidad. Anclaje técnico fuerte
> anti-Alice — la optimización energética es mejora técnica concreta.

---

## Claim 19 — Seguridad fisiológica [PCT DATE]
**Ancho: 5/10**

Método según la reivindicación 15, que comprende además, durante la sesión,
los pasos de:

(h) monitorizar continuamente al menos una variable fisiológica del usuario
seleccionada del grupo que consiste en temperatura superficial del tejido y
saturación de oxígeno tisular, mediante al menos un sensor no invasivo
integrado en el dispositivo;

(i) comparar dicha variable con al menos un umbral de seguridad
predefinido almacenado en la memoria;

(j) reducir automáticamente la potencia de emisión del panel multiespectral
o detener la sesión cuando dicha variable exceda dicho umbral.

> **Riesgo:** los pasos (h)-(j) podrían interpretarse como pasos
> ejecutados sobre el cuerpo humano. Reformulación clave: el método
> reivindica el control del dispositivo, no la intervención sobre el
> usuario. Si Patricia identifica riesgo Art. 53(c), reformular como
> claim de sistema configurado para [...] (no como método).

---

## Claim 20 — Aprendizaje federado en método [PCT DATE]
**Ancho: 7/10**

Método según la reivindicación 15, que comprende además el paso de:

(h) transmitir, mediante un proceso de aprendizaje federado, gradientes de
un modelo local entrenado durante el paso (g) a un servidor remoto,
donde el servidor remoto agrega gradientes recibidos de una pluralidad de
sistemas computarizados ejecutando el mismo método para entrenar un modelo
global, y donde no se transmiten al servidor remoto los datos personales
del usuario.

---

# BLOQUE C — CRM Y SISTEMA DISTRIBUIDO

## Claim 21 — CRM [PCT DATE]
**Ancho: 8/10**

Medio no transitorio legible por ordenador que almacena instrucciones que,
al ser ejecutadas por un procesador de un sistema computarizado, hacen que
el sistema computarizado realice el método según cualquiera de las
reivindicaciones 15 a 20.

> Necesario para cobertura US — protege el software puro. Sin este claim,
> un competidor podría distribuir el software sin el hardware y evitar
> infracción de los claims de sistema.

---

## Claim 22 — Sistema distribuido [PCT DATE]
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

> Protege la arquitectura cloud-centric. Imprescindible si el motor IA
> se ejecuta principalmente en cloud (no Edge).

---

# BLOQUE D — SOSTENIBILIDAD Y GESTIÓN DE FLOTA

## Claim 23 — Pasaporte Digital de Producto [PCT DATE]
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

> Anclaje técnico, no modelo de negocio. Cumple ESPR UE. Patentable como
> sistema técnico de gestión de datos del ciclo de vida.

---

## Claim 24 — Mantenimiento predictivo [PCT DATE]
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

> Excelente synergia con C6. Refuerza el concepto inventivo
> anti-Alice — mejora técnica cuantificable.

---

## Claim 25 — Gestión remota de flota (ex-PaaS) [PCT DATE]
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

> Reformulación crítica del ex-Claim 27 (PaaS). Esta versión es
> defensible: sistema técnico de gestión, no modelo de negocio.
> Cero referencias a suscripción, propiedad, pago, servicio.

---

# RESUMEN ESTADÍSTICO DEL CLAIM SET

| Métrica | Valor |
|---|---|
| Reivindicaciones totales | 25 |
| Reivindicaciones independientes | 4 (C1, C15, C21, C22) |
| Reivindicaciones [MU PRIORITY] | 2 (C2, C3) |
| Reivindicaciones [parcial MU] | 2 (C4, C14) |
| Reivindicaciones [PCT DATE] | 21 |
| Promedio claim width | 5.8 / 10 |
| Bloques | A (sistema 1-14), B (método 15-20), C (CRM+distribuido 21-22), D (sostenibilidad 23-25) |

---

# VARIANTES RESERVADAS PARA DIVISIONAL / CIP POSTERIOR

A mencionar en la descripción como "realizaciones contempladas para futuras
variantes del sistema", **sin reivindicarlas en esta PCT**:

1. Matriz de micro-LEDs basados en puntos cuánticos (QDs) con sintonización
   eléctrica de longitud de onda.
2. Integración con dispositivo de electroencefalografía portátil (BCI) para
   neuro-biofeedback en bucle cerrado.
3. Espectroscopia Raman para análisis de composición molecular del tejido
   en tiempo real.
4. Capa celular/genética del modelo multiescala con datos genómicos del
   usuario.
5. Imagen fotoacústica miniaturizada.

**Estrategia:** cuando exista implementación real (12-36 meses) → presentar
**divisional / continuation-in-part** anclada a la PCT madre. Preserva la
fecha de prioridad de los claims actuales y añade lo nuevo con su propia
fecha.

---

# RIESGOS Y ACCIONES PENDIENTES

| # | Riesgo | Acción |
|---|---|---|
| R1 | C4 "pluralidad de zonas" puede no estar soportado por dibujos MU | Patricia debe verificar dibujos MU para confirmar [parcial MU] |
| R2 | C19 (seguridad anti-eritema) podría interpretarse como ejecutado sobre cuerpo humano (Art. 53(c)) | Patricia debe validar formulación o convertir en claim de sistema |
| R3 | "Resonancia biofotónica" usada como marca externa pero no en claims | OK, mantener separación claims técnicos vs branding |
| R4 | Prior art US20230218922A1 no analizado todavía | **Fase 0** a ejecutar inmediatamente |
| R5 | Auditoría de divulgaciones propias EKIO entre 24/12/2025 y filing | Pendiente — riesgo de auto-anticipación |
| R6 | Validación de implementación real de NIRS, fotodiodo, NPU Edge | Patricia debe confirmar evidencia técnica |

---

# PRÓXIMOS PASOS

1. **Fase 0 prior art:** descargar y analizar US20230218922A1 + 7 familias
   identificadas → `02_prior_art/PCT_EKIO_prior_art_analysis_v0.1.md`.
2. **Auditoría EKIO divulgaciones propias** entre 24/12/2025 y filing
   target julio 2026.
3. **Reunión con Patricia García** sobre el email v1 + claim set v0.1.
4. **Fase 2 examiner red-team formal** sobre el claim set v0.1 (test Alice
   completo + EPO problem-solution + CNIPA TSP por cada claim
   independiente).
5. **Fase 3 memoria descriptiva** con todas las secciones obligatorias.

---

*PCT EKIO Bienestar S.L. — Claims v0.1 — Confidencial — Borrador interno*
*Para revisión por Patricia García, La Fábrica de Inventos S.L., antes de
filing*
