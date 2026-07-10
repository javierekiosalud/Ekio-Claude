# PRIORIDAD ESTRATÉGICA — LA APP EN RELACIÓN CON EL PANEL
# PCT EKIO / SRBA — Análisis exhaustivo y reordenación de reivindicaciones
# Versión: v0.1 — 2026-06-05
# Encargo: La Fábrica de Inventos — "priorizar todo lo relacionado con la app y el panel"

---

# 0. VEREDICTO EN UNA FRASE

La Fábrica de Inventos tiene razón: en el claim set v0.2 la app aparece sólo como un
**"dispositivo electrónico externo (150)" pasivo**, mencionada de pasada, sin ninguna
reivindicación que la haga protagonista. Es el mayor hueco estratégico del expediente,
porque la app es (i) el **puente técnico que ancla el software al hardware** —lo que salva
el test de Alice—, (ii) el **foso comercial y de recurrencia** del negocio, y (iii) lo único
que un competidor puede copiar de inmediato. Hay que elevarla a **primer plano**, pero
siempre **atada al panel** (SiMD, nunca SaMD suelto).

---

# 1. POR QUÉ LA APP ES LA PRIORIDAD CORRECTA (lógica estratégica)

1. **El hardware ya está protegido por el MU U202532624.** El valor añadido de esta PCT
   es la **capa de software**. Dentro de esa capa, la app es la parte tangible, ya
   construible y demostrable hoy — a diferencia de los QDs o el BCI, que son
   especulativos y se retiran a divisional.

2. **Ancla anti-Alice (SiMD > SaMD).** El propio informe de patentabilidad de software
   (Manus AI, 10/02/2026) lo dice literalmente: *"El SiMD, al estar integrado en un
   aparato físico, generalmente tiene un camino más claro hacia la patentabilidad, ya que
   las reivindicaciones pueden ligarse a la máquina particular. El SaMD enfrenta un
   escrutinio más riguroso."* La app, cuando se reivindica como el **medio concreto de
   intercambio de datos con el panel** (transmite parámetros ↓, recibe parámetros
   efectivos y lecturas de sensor ↑), deja de ser "idea abstracta" y pasa a ser una mejora
   técnica de una máquina concreta.

3. **Diferenciación frente al prior art más cercano.** Zerigo Health (US20230218922A1,
   abandonada) **ya tenía app de paciente + servidor + prescripción médica**. Si no
   reivindicamos la interacción app-panel a un nivel técnico **más específico** que Zerigo,
   dejamos abierta la puerta a una objeción de novedad/obviedad y un problema de
   libertad de operación. La diferencia está en el "cómo": Zerigo hace análisis fotográfico
   post-sesión del eritema; el SRBA hace **transmisión bidireccional en tiempo real de
   parámetros efectivos + lecturas de sensores fisiológicos directos (NIRS)**.

4. **Foso comercial.** La app es donde vive la recurrencia (suscripción, PaaS técnico), el
   lock-in de datos longitudinales y la experiencia de usuario. Es exactamente lo que un
   inversor Wolaria valora y lo que un competidor querría clonar.

---

# 2. DIAGNÓSTICO — DÓNDE ESTÁ HOY LA APP EN EL CLAIM SET v0.2

| Ubicación actual | Qué dice sobre la app | Fuerza |
|---|---|---|
| Claim 1 (i) | "recibir un perfil y datos biométricos procedentes del dispositivo electrónico externo" | Pasiva — la app es sólo el origen del dato |
| Claim 13 | integración wearables vía API (HealthKit/Google Health/Oura) | No nombra la app como actor |
| Claim 14 | conmutación de perfil "a través de una interfaz de usuario" | Mención lateral |
| Claim 18 (método) | notificación "a un dispositivo electrónico asociado al usuario" | Pasiva |
| Claim 19 (método) | coeficiente configurable "a través de una interfaz de usuario" | Lateral |
| Memoria §5.1, signo 152 | "Aplicación móvil / PWA" descrita, pero sin claim propio | **Soportada pero no reivindicada** |

**Conclusión:** la app está **descrita en la memoria** (bien) pero **no reivindicada como
protagonista** (mal). Todo lo que se describe y no se reivindica queda regalado al dominio
público. Hay que cerrar esa brecha con un clúster de claims app-panel.

---

# 3. CATÁLOGO EXHAUSTIVO — QUÉ HACE LA APP EN RELACIÓN CON EL PANEL

23 funciones extraídas de toda la documentación (memoria v0.1, borrador SRBA, informe de
software, claim set v0.2), agrupadas en 6 categorías por dirección del flujo de datos.

## A. DESCENDENTE (App → Panel): configuración y control

| # | Función | Fuente |
|---|---|---|
| A1 | Recoge el **perfil inicial** y los **objetivos** del usuario → dispara la generación del protocolo que configura λ, intensidad, frecuencia y duración por zona del panel | Memoria §5.1; borrador §5.7 paso 210 |
| A2 | **Transmite al panel** los parámetros del protocolo vía BLE/WiFi (es el puente de comunicación) | Memoria §5.1; claim 16(d) |
| A3 | Permite **seleccionar el objetivo de sesión** (recuperación / sueño / energía matutina / antienvejecimiento) → cada objetivo mapea a una **configuración distinta del panel** | Borrador §5.7 paso 210 |
| A4 | Permite **selección/conmutación de perfil multi-usuario** (biométrico o manual) → carga el protocolo del perfil en el panel | Memoria §18.4; claim 14 |
| A5 | **Inicia y detiene** la sesión del panel | Borrador §5.7 paso 210 |
| A6 | Ajusta **coeficientes de la función objetivo** (eficacia vs consumo) → modula cómo se configura el panel | Memoria §834; claim 19 |
| A7 | Recomienda **timing de sesión (cronoterapia)** → cuándo activar el panel | Memoria §18.2, §18.3 |

## B. ASCENDENTE (Panel → App): registro y captura

| # | Función | Fuente |
|---|---|---|
| B1 | Recibe del panel, al finalizar cada sesión, los **parámetros efectivos** registrados (irradiancia real, duración efectiva, zonas activas) | Claim 1(iii); claim 16(e) |
| B2 | Recibe las **lecturas de la matriz de sensores** del panel (NIRS StO₂, termopila, fotodiodo) | Memoria §5.3; claim 5 |
| B3 | **Sincroniza** esos datos con la base de datos histórica longitudinal (local + cloud) | Memoria §5.1 |
| B4 | Recoge el **cuestionario post-sesión** (indicadores subjetivos) y lo asocia a la sesión del panel | Brief técnico SRBA (memoria de bienestar) |

## C. LATERAL (Wearables ↔ App ↔ Panel): fusión de datos de salud

| # | Función | Fuente |
|---|---|---|
| C1 | **Sincroniza con wearables** (Apple HealthKit, Google Health Connect, Oura API): HRV, SpO₂, sueño, temperatura, actividad, glucosa | Memoria §5.1, claim 13; borrador §5.1 |
| C2 | **Normaliza y estructura** datos heterogéneos y los inyecta al motor que configura el panel | Borrador §5.1; informe software "integración holística" |
| C3 | Es el **punto de fusión** del dato del wearable con el dato del panel para cerrar el bucle | Memoria §200 |

## D. VISUALIZACIÓN / FEEDBACK / ADHERENCIA (App ↔ Usuario)

| # | Función | Fuente |
|---|---|---|
| D1 | Muestra el **protocolo actualizado** (qué hará el panel en la siguiente sesión y **por qué** — explicabilidad / XAI) | Brief técnico; memoria §5.1 |
| D2 | Muestra **métricas de evolución** (tendencia StO₂, adherencia, progreso) | Memoria §5.1 |
| D3 | Detecta **baja adherencia** y emite **notificaciones personalizadas generadas por IA** | Claim 18; memoria §19(b) |
| D4 | **Gamifica la adherencia** (logros, puntuación) | Brief técnico |
| D5 | Muestra **recomendaciones de bienestar integral** (nutrición, cronoterapia, higiene EM) **sincronizadas con el protocolo del panel** | Memoria §18.5; brief técnico |

## E. SEGURIDAD (App/panel en bucle cerrado)

| # | Función | Fuente |
|---|---|---|
| E1 | El sistema **reduce potencia o detiene el panel** si los sensores exceden un umbral (eritema, temperatura) | Claim 15; borrador §5.7 paso 250 |

## F. GESTIÓN DE FLOTA / OTA / MANTENIMIENTO (App/Cloud → Panel)

| # | Función | Fuente |
|---|---|---|
| F1 | Recibe **avisos de mantenimiento predictivo** (degradación LED) del panel | Claim 24; memoria §19(f) |
| F2 | Transmite **actualizaciones OTA** de protocolos y firmware al panel | Claim 25 |
| F3 | Muestra el **Pasaporte Digital de Producto** del panel | Claim 23 |

---

# 4. PRIORIZACIÓN — 6 NIVELES (defensibilidad jurídica × valor comercial)

Criterio de orden: primero lo que **más blinda el Claim 1 frente a Alice** y **más difícil
es de rodear** por un competidor, sin salirse del anclaje SiMD.

### 🥇 PRIORIDAD 1 — El puente bidireccional app↔panel (NÚCLEO)
Funciones A2 + B1 + B2 + B3. La app como medio concreto que **(↓) transmite los
parámetros del protocolo al panel** y **(↑) recibe los parámetros efectivos y las lecturas
de sensores** al finalizar cada sesión, sincronizándolos con la base longitudinal.
- **Por qué la nº1:** es el ancla SiMD más fuerte (liga el software a la máquina concreta),
  es lo que cierra el bucle, y diferencia de Zerigo (foto post-sesión) por transmisión
  bidireccional de parámetros efectivos + sensores fisiológicos directos.
- **Acción:** nuevo claim dependiente de C1, colocado inmediatamente después de C1 → **nuevo C1-bis**.

### 🥈 PRIORIDAD 2 — Fusión wearable→app→panel
Funciones C1 + C2 + C3. La app sincroniza el wearable, normaliza datos heterogéneos y
los **inyecta al motor que configura el panel**.
- **Por qué la nº2:** el informe de software marca "integración holística de datos" como
  una de las 5 áreas patentables; ningún competidor lo tiene nativo. Refuerza el technical
  effect.
- **Acción:** nuevo claim dependiente + reforzar claim 13 para nombrar la app como actor.

### 🥉 PRIORIDAD 3 — Explicabilidad del protocolo (XAI) en la app
Función D1. La app presenta el protocolo actualizado **junto con la razón** (qué variable
fisiológica / qué lectura de sensor motivó qué cambio de parámetro en qué zona del panel).
- **Por qué la nº3:** es una feature técnica real de UI, difícil de encontrar en prior art,
  y comercialmente pegajosa (confianza del usuario). Añade carácter técnico.
- **Acción:** nuevo claim dependiente.

### PRIORIDAD 4 — Selección de objetivo/perfil que reconfigura el panel
Funciones A3 + A4. Selección de objetivo ("recuperación"/"sueño"/…) y conmutación de
perfil multi-usuario que **cargan configuraciones distintas del panel**.
- **Acción:** nuevo claim de objetivo + reforzar claim 14 (perfiles) nombrando la app.

### PRIORIDAD 5 — Cuestionario post-sesión como entrada de recompensa
Función B4. La app recoge indicadores subjetivos y los **asocia a la sesión del panel**
como entrada de la función de recompensa del motor RL.
- **Acción:** nuevo claim dependiente (conecta la app con el corazón del RL).

### PRIORIDAD 6 — Adherencia + notificaciones IA + gamificación + bienestar
Funciones D2 + D3 + D4 + D5 + A6 + A7.
- **Advertencia Alice:** gamificación y notificaciones puras rozan "métodos de organizar
  actividad humana" (riesgo Alice / Art. 52 EPC). Mantener **siempre atadas al dato del
  panel** (adherencia = frecuencia de sesiones del panel; recomendación = sincronizada
  con el protocolo del panel). Ya están parcialmente en claims 18-19.
- **Acción:** mantener como dependientes de método, valor comercial > valor defensivo.

---

# 5. REIVINDICACIONES PROPUESTAS (redacción aséptica, lista para Patricia)

> Numeración provisional "APP-n"; Patricia decidirá la inserción final. Todas ancladas al
> panel (SiMD). Cero lenguaje terapéutico.

## APP-1 [PRIORIDAD 1] — Puente bidireccional app-panel
Sistema según la reivindicación 1, que comprende además una aplicación de software
ejecutándose en el dispositivo electrónico externo, configurada para, en cooperación con
el módulo de comunicación inalámbrica:
(a) transmitir al panel de emisión multiespectral los parámetros del protocolo de emisión
generado por el motor de inteligencia artificial, incluyendo la longitud de onda, la
intensidad, la frecuencia de pulso y la duración asignadas a cada zona de emisión;
(b) recibir del panel, al finalizar cada sesión, el conjunto de parámetros efectivos
registrados por el panel y las señales de la matriz de sensores no invasivos;
(c) sincronizar dichos parámetros efectivos y dichas señales con la base de datos histórica
longitudinal;
constituyendo así la aplicación de software el medio de cierre del bucle de retroalimentación
sesión a sesión entre la respuesta fisiológica del usuario registrada por el panel y los
parámetros de emisión de una sesión posterior.

## APP-2 [PRIORIDAD 2] — Fusión wearable→app→panel
Sistema según la reivindicación APP-1, en el que la aplicación de software está configurada
además para sincronizarse con al menos un dispositivo vestible externo a través de una
interfaz de programación de aplicaciones de una plataforma de salud, normalizar los datos
biométricos heterogéneos recibidos de dicho dispositivo vestible, e inyectar dichos datos
normalizados como entradas del motor de inteligencia artificial que determina los parámetros
del protocolo de emisión transmitido al panel.

## APP-3 [PRIORIDAD 3] — Explicabilidad del protocolo (XAI)
Sistema según la reivindicación APP-1, en el que la aplicación de software está configurada
para presentar, a través de una interfaz gráfica, el protocolo de emisión actualizado junto
con al menos un indicador de las variables fisiológicas o de las señales de sensor que han
determinado una modificación de al menos un parámetro de emisión de una zona del panel
respecto de una sesión anterior.

## APP-4 [PRIORIDAD 4] — Selección de objetivo que reconfigura el panel
Sistema según la reivindicación APP-1, en el que la aplicación de software está configurada
para recibir una selección de objetivo de sesión de entre una pluralidad de objetivos
predefinidos, y donde el motor de inteligencia artificial está configurado para generar, en
función del objetivo seleccionado y del estado de la base de datos histórica longitudinal, un
patrón espaciotemporal de emisión distinto para el panel para cada objetivo seleccionado.

## APP-5 [PRIORIDAD 5] — Cuestionario post-sesión como recompensa
Sistema según la reivindicación APP-1, en el que la aplicación de software está configurada
para recoger, tras cada sesión, un conjunto de indicadores subjetivos del usuario y
asociarlos, en la base de datos histórica longitudinal, con el conjunto de parámetros
efectivos registrados por el panel para dicha sesión, de modo que dichos indicadores
subjetivos constituyen una entrada adicional de la función de recompensa del motor de
inteligencia artificial.

## APP-6 [PRIORIDAD 6] — Recomendación de timing y bienestar sincronizada
Sistema según la reivindicación APP-1, en el que la aplicación de software está configurada
para generar y presentar al usuario al menos una recomendación de instante de realización
de una sesión, calculada por un módulo de cronobiología computacional en función de una
fase circadiana estimada del usuario, sincronizada con el protocolo de emisión programado
para el panel.

## APP-7 [PRIORIDAD 6] — Aviso de mantenimiento del panel en la app
Sistema según la reivindicación APP-1, en el que la aplicación de software está configurada
para recibir del servidor remoto y presentar al usuario al menos un aviso de mantenimiento
predictivo del panel generado a partir de datos de degradación de los emisores detectados
por el módulo de calibración automática.

## Refuerzo del método (Claim 16) — nombrar la app como actor
En el paso (d) del Claim 16 sustituir "transmitir los parámetros… al panel" por "transmitir,
mediante una aplicación de software ejecutándose en un dispositivo electrónico externo, los
parámetros del primer protocolo de emisión al panel multiespectral"; y análogamente en el
paso (e) para la recepción. Esto extiende el ancla app-panel también al bloque de método.

---

# 6. RIESGO ALICE — CÓMO MANTENER LA APP DEL LADO PATENTABLE

| Regla | Cómo se cumple aquí |
|---|---|
| **Nunca reivindicar la app en abstracto** ("una app que personaliza") | Todas las APP-n cuelgan de C1 e incluyen el panel físico + el módulo de comunicación + los sensores. SiMD, no SaMD. |
| **Especificar el "cómo" técnico** (Cardionet v. Infobionic) | APP-1 detalla el intercambio concreto de parámetros y señales; APP-2 la normalización e inyección al motor. |
| **Mejora técnica medible** | Cierre del bucle con parámetros efectivos reales del panel (vs foto post-sesión de Zerigo); reducción de dosis por fusión de datos. |
| **Evitar "organizar actividad humana"** | Gamificación/notificaciones (Prioridad 6) siempre atadas a la frecuencia de sesiones del panel y al protocolo, no como esquema social genérico. |

---

# 7. PRÓXIMOS PASOS

1. **Integrar APP-1…APP-7 en el claim set → generar v0.3** (25 → ~32 claims). Reubicar
   APP-1 justo tras C1 para señalar prioridad estructural.
2. **Reforzar la memoria §5.1** con una subsección autónoma "La aplicación de software como
   medio de cierre del bucle" que dé soporte Art. 83/§112 a las nuevas APP-n.
3. **Añadir una figura nueva** (Fig. 7): diagrama de secuencia app↔panel↔sensores↔cloud
   (downlink de protocolo / uplink de parámetros efectivos y sensores).
4. **Enviar a Patricia** este documento como anexo al email inicial, señalando que el
   encargo de La Fábrica de Inventos (priorizar app-panel) queda cubierto con el clúster
   APP-1…APP-7 y el refuerzo de método.

---

*PCT EKIO Bienestar S.L. — Prioridad App-Panel v0.1 — Confidencial — Borrador interno*
