# FASE 2 — Examiner Red-Team del Claim Set v0.1
# Adversarial review claim por claim
# PCT EKIO Bienestar S.L. — Sistema SRBA
# Versión: v0.1 — 2026-06-04

---

## METODOLOGÍA

Cada claim se evalúa contra 5 tests:

1. **USPTO §101 (Alice/Mayo two-step):**
   - 2A.1: ¿Está dirigido a idea abstracta (matemática, proceso mental, organización de actividad humana)?
   - 2A.2: ¿Integra la idea abstracta en aplicación práctica?
   - 2B: ¿"Significativamente más" que la idea abstracta?

2. **EPO Art. 52 — Carácter técnico:** ¿La invención produce un efecto técnico que va más allá de la interacción normal programa-ordenador?

3. **EPO Art. 53(c) — Prohibición métodos terapéuticos:** ¿Algún paso se ejecuta sobre el cuerpo humano con efecto curativo/diagnóstico?

4. **EPO Art. 56 — Paso inventivo (problem-solution):** Closest prior art + objective technical problem + non-obviousness.

5. **EPO Art. 83 / USPTO §112 — Enablement / Suficiencia:** ¿El skilled person puede reproducir sin experimentación undue?

6. **CNIPA TSP framework:** Technical Problem + Technical Solution + Technical Effect.

**Veredicto:** ✅ PASS / 🟡 MODIFY / 🔴 REWRITE.

---

# BLOQUE A — SISTEMA

## C1 — Sistema independiente principal

### Alice §101

| Prong | Análisis | Resultado |
|---|---|---|
| 2A.1 | ¿Dirigido a idea abstracta? El núcleo es "generación adaptativa de protocolo basada en datos históricos". Sin contexto, esto **podría** caer en "método matemático" o "proceso mental". | ⚠️ Riesgo bajo si se interpreta literal |
| 2A.2 | ¿Aplicación práctica? **Sí.** Hardware específico (panel multiespectral + módulo comunicación + procesador + memoria) + transmisión de protocolo a panel físico para emisión real de radiación EM. El bucle no es abstracto: produce emisión luminosa medible. | ✅ Supera |
| 2B | ¿Significativamente más? Sí — la combinación bucle cerrado sesión-a-sesión sobre dispositivo físico de emisión multiespectral no es genérica. | ✅ Supera |

**Veredicto Alice:** ✅ PASS.

### EPO Art. 52 — Carácter técnico

Cada elemento contribuye al carácter técnico:
- Panel multiespectral (a): técnico (hardware).
- Módulo comunicación inalámbrica (b): técnico.
- Unidad procesamiento + memoria (c): técnico.
- Motor IA configurado para generar/actualizar protocolo (d): técnico **si y sólo si** el protocolo causa un efecto técnico (emisión luminosa adaptativa). **Sí lo causa.**

✅ PASS.

### EPO Art. 53(c) — Métodos terapéuticos

Ningún paso del claim 1 se ejecuta sobre el cuerpo humano. Todos los
pasos los ejecuta el sistema computarizado o los componentes del
dispositivo:
- (i) recibir datos: en el sistema.
- (ii) generar protocolo: en el motor IA.
- (iii) registrar parámetros: en la memoria.
- (iv) actualizar BD: en la memoria.
- (v) generar protocolo actualizado: en el motor IA.

La emisión luminosa del panel sobre un usuario NO es un paso reivindicado
del método (este es claim de SISTEMA — el sistema **está configurado para**
hacer X, no realiza la emisión sobre el cuerpo como paso del claim).

✅ PASS.

### EPO Art. 56 — Paso inventivo

- **Closest prior art:** Vielight US11633621B2 (AI-driven brain PBM) +
  Zerigo Health US20230218922A1 (phototherapy control + central server +
  longitudinal DB).
- **Objective technical problem:** "Cómo proporcionar un sistema de
  emisión luminosa multiespectral que adapte automáticamente sesión a
  sesión los parámetros del protocolo de emisión a la respuesta
  fisiológica individual del usuario, integrando datos de dispositivos
  vestibles externos y sensores fisiológicos, sin requerir prescripción
  médica ni reconfiguración manual."
- **Non-obviousness:** Vielight enseña ajuste único tras diagnóstico EEG;
  Zerigo enseña actualización mediada por médico. Ninguno enseña el
  bucle automático sesión-a-sesión basado en datos longitudinales +
  wearables + sensores fisiológicos en tiempo real. La combinación es
  no obvia.

✅ PASS.

### EPO Art. 83 / §112 — Enablement

Requisitos a cumplir en la memoria descriptiva:
- Tipo de motor IA: especificar arquitectura (LSTM/Transformer/ensemble) → ✅ a desarrollar en memoria.
- Variables de entrada/salida: ya listadas en C7-C13.
- Función de actualización: ya en C9 (RL MDP).
- Ciclo de reentrenamiento: a desarrollar en memoria.

⚠️ MODIFY requirement: la memoria descriptiva (Fase 3) DEBE incluir una
sub-sección autónoma "Descripción del motor IA" con detalle suficiente
de implementación. Sin ella, riesgo Art. 83 alto.

### CNIPA TSP

- **Technical Problem:** Adaptación automática de parámetros de emisión
  multispectral a respuesta fisiológica individual a lo largo del tiempo.
- **Technical Solution:** Panel multispectral + memoria + motor IA + bucle
  cerrado sesión-a-sesión.
- **Technical Effect:** Optimización individualizada y continua de la
  irradiancia, frecuencia, duración por usuario.

✅ PASS.

### Veredicto C1: ✅ PASS — con requisito de enablement en memoria descriptiva.

---

## C2 — Longitudes específicas 295-1050 nm [MU PRIORITY]

- Alice: dependiente de C1 — hereda pass.
- Art. 52: técnico (especificación física).
- Art. 53(c): n/a.
- Art. 56: anclado a MU prioridad → no se evalúa novedad (la novedad
  global del Claim 1 cubre).
- Art. 83: enablement trivial (longitudes específicas estándar OEM).
- CNIPA TSP: heredado.

✅ PASS.

---

## C3 — Módulo LED central [MU PRIORITY]

Idem C2. ✅ PASS.

---

## C4 — Multizone control [parcial MU]

### Alice §101: ✅ PASS (técnico evidente).

### Art. 52: ✅ Técnico.

### Art. 53(c): ✅ N/A (claim de sistema, no método).

### Art. 56: ⚠️ RIESGO MEDIO

Vielight US11633621B2 divulga 6 unidades transcraneales con control
selectivo on/off. Un examinador puede argumentar que aplicar multizone
control a un panel de cuerpo es transferencia obvia.

**Defensa:** Vielight enseña activación/desactivación selectiva binaria
de zonas predefinidas para targeting de regiones cerebrales anatómicas
(dmPFC, PCC, etc.). C4 reivindica control independiente continuo en al
menos **intensidad luminosa, frecuencia de pulso y duración** por zona,
con asignación dinámica por el motor IA — no on/off selectivo
predefinido. Diferencia técnica suficiente.

### Art. 83 / §112

⚠️ El hardware multizone del SRBA debe estar implementado o ser
implementable trivialmente. Patricia debe confirmar que los dibujos
del MU o la realización actual EKIO soportan la pluralidad de zonas.
Si los dibujos del MU sólo muestran panel+módulo central (2 zonas), la
"pluralidad" de C4 cae en [PCT DATE], no [parcial MU].

### CNIPA TSP: ✅ PASS.

### Veredicto C4: 🟡 MODIFY

**Acción:**
- Reformular: "...una pluralidad de zonas controlables independientemente
  entre sí en **al menos** intensidad luminosa, frecuencia de pulso y
  duración, donde el motor de inteligencia artificial está configurado
  para asignar **valores continuos y distintos** de cada parámetro a
  zonas distintas dentro de una misma sesión, conformando un patrón
  espaciotemporal de emisión." → blinda diferencia con Vielight.
- Confirmar con Patricia el soporte MU de "pluralidad de zonas"; si no
  está, eliminar etiqueta [parcial MU] y dejar [PCT DATE].

---

## C5 — Sensores NIRS + temperatura

- Alice: ✅ PASS (hardware específico).
- Art. 52: ✅ Técnico.
- Art. 53(c): ⚠️ La medición sobre tejido podría leerse como paso
  diagnóstico. PERO el claim es de SISTEMA (comprende sensores), no
  método. **Pasa.**
- Art. 56: ✅ NIRS no aparece en prior art PBM analizado.
- Art. 83: ✅ NIRS comerciales miniaturizados disponibles.
- CNIPA TSP: ✅ PASS.

### Veredicto C5: ✅ PASS.

---

## C6 — Fotodiodo + calibración automática + degradación LEDs

**Joya técnica.**

- Alice: ✅ PASS — mejora técnica cuantificable (mantenimiento de
  irradiancia constante a lo largo de la vida útil del dispositivo).
- Art. 52: ✅ Técnico (hardware + algoritmo de control).
- Art. 53(c): ✅ N/A.
- Art. 56: ✅ Ausente en prior art PBM.
- Art. 83: ✅ Implementación directa con fotodiodo estándar + look-up
  table de degradación.
- CNIPA TSP: ✅ Excelente — PSE limpio.

### Veredicto C6: ✅ PASS — Promover en memoria como claim insignia.

---

## C7 — Gemelo digital multiescala

- Alice: ⚠️ "Modelo computacional multiescala" podría leerse como
  abstracción matemática. PERO se ancla a sistema físico (C1) y produce
  efecto técnico (alimentar al RL). **Pasa Prong 2A.2 y 2B.**
- Art. 52: ✅ Técnico (modelo computacional con I/O técnicos).
- Art. 53(c): ✅ N/A.
- Art. 56: ✅ Ausente en prior art PBM.
- Art. 83: ⚠️ La capa fisiológica + tisular deben describirse con
  suficiente detalle en memoria. La descripción actual del borrador SRBA
  cubre razonablemente esto.
- CNIPA TSP: ✅ PASS si memoria desarrolla.

### Veredicto C7: ✅ PASS — con requisito de detalle en memoria.

---

## C8 — Monte Carlo + cromóforo objetivo

- Alice: ✅ PASS — algoritmo concreto (Monte Carlo) + efecto técnico
  medible (irradiancia efectiva sobre cromóforo).
- Art. 52: ✅ Técnico.
- Art. 53(c): ✅ N/A.
- Art. 56: ✅ Monte Carlo aplicado a Fitzpatrick + melanina + epidermis +
  hemoglobina no aparece en prior art PBM commercial.
- Art. 83: ⚠️ Skilled person debe poder implementar Monte Carlo sobre
  tejido cutáneo. **Citar en memoria** literatura conocida (Welch &
  Van Gemert, Wang & Jacques tissue optics) como soporte de enablement.
- CNIPA TSP: ✅ PASS.

### Veredicto C8: ✅ PASS — con requisito de citas científicas en memoria.

---

## C9 — RL como MDP

### Alice §101

- 2A.1: ¿Dirigido a idea abstracta? RL como tal es proceso matemático →
  **sí, dirigido a abstracción matemática**.
- 2A.2: ¿Aplicación práctica? **Sí.** Estados (vector del modelo
  multiescala), acciones (parámetros del panel — hardware), recompensa
  (biomarcadores de sensores físicos). El RL está anclado a entradas y
  salidas físicas.
- 2B: ¿Significativamente más? **Sí.** No es RL genérico; es RL
  específico del dominio PBM con definiciones concretas de estado,
  acción, recompensa.

✅ PASS.

### Art. 56 — RIESGO MEDIO

Closest prior art transversal: CGM closed-loop (Medtronic NMX-AID, deep
RL bolus calculators).

**Argumento del examinador:** "aplicar RL a control de dosis biomédica
es conocido; aplicarlo a parámetros de emisión luminosa es transferencia
obvia".

**Defensa preventiva (a incluir en memoria, sección sobre el motor IA):**

1. **Espacio de estados específico PBM:** modelo multiescala con capa
   tisular Monte Carlo + datos NIRS específicos del dominio óptico.
   En CGM, el estado es glucemia + insulina activa — variables
   completamente distintas.
2. **Espacio de acciones específico PBM:** longitudes de onda,
   intensidad, frecuencia de pulso, patrón espacial por zona. En CGM,
   las acciones son volúmenes/timing de bolo de insulina. No son
   intercambiables.
3. **Función de recompensa específica PBM:** biomarcadores de respuesta
   tisular (oxigenación, irradiancia efectiva sobre cromóforo). En CGM,
   recompensa es "time in range" de glucemia. Funciones objetivo
   completamente distintas.
4. **Ventana temporal específica PBM:** sesión = minutos; ciclo de
   actualización = días/semanas. En CGM, ciclo es minutos. La dinámica
   biológica modelada es radicalmente distinta.
5. **Restricciones de seguridad específicas PBM:** umbrales de eritema,
   temperatura cutánea, exposición UV acumulada. En CGM, son hipoglucemia
   severa. No transferibles.

### Art. 83 / §112 — IMPORTANTE

Para PASS de enablement, la memoria debe especificar:
- Tipo de algoritmo RL: Q-learning / Policy Gradient / Actor-Critic /
  Proximal Policy Optimization (PPO) — declarar al menos uno.
- Función de recompensa: fórmula concreta o ejemplo.
- Política inicial: cómo se inicializa (cold-start, ver C16).
- Frecuencia de actualización de la política.
- Riesgo si no se especifica: rechazo §112 por "claiming the result
  without describing how to achieve it".

### Veredicto C9: 🟡 MODIFY

**Acción:**
- Especificar en el claim al menos "**proximal policy optimization** u
  otro algoritmo de policy gradient" como ejemplo (o dejar abierto pero
  detallar en memoria).
- Memoria debe dedicar al menos 2 páginas al diseño del MDP específico.
- Incluir 5 puntos de distinción frente a CGM closed-loop en memoria.

---

## C10 — Federated Learning

- Alice: ✅ PASS — technical solution to RGPD/privacy problem.
- Art. 52: ✅ Técnico.
- Art. 53(c): ✅ N/A.
- Art. 56: ✅ FL aplicado a PBM ausente.
- Art. 83: ⚠️ Memoria debe describir mecanismo de agregación segura
  (FedAvg, secure aggregation), encriptación de gradientes, frecuencia
  de sync, mecanismo de validación. Riesgo si no.
- CNIPA TSP: ✅ Excelente.

### Veredicto C10: ✅ PASS — con requisito de descripción FL en memoria.

---

## C11 — NPU Edge AI

- Alice: ✅ Hardware específico.
- Art. 52: ✅ Técnico.
- Art. 53(c): ✅ N/A.
- Art. 56: ✅ NPU para PBM ausente en prior art.
- Art. 83: ✅ NPU comerciales conocidos (Apple Neural Engine, Qualcomm
  Hexagon, Google Edge TPU). Memoria debe citar al menos uno.
- CNIPA TSP: ✅ PASS.

### Veredicto C11: ✅ PASS.

---

## C12 — Cronobiología computacional

- Alice: ⚠️ "Estimar fase circadiana" podría leerse como proceso mental
  o método matemático. PERO ancla a datos de wearables y produce efecto
  técnico (ajuste de parámetro del protocolo).
- Art. 52: ✅ Técnico.
- Art. 53(c): ✅ N/A.
- Art. 56: ✅ Cronobiología aplicada a PBM ausente en prior art.
- Art. 83: ⚠️ Memoria debe describir el algoritmo de estimación de fase
  circadiana (mínimo de temperatura corporal periférica, mid-sleep
  point, etc.). Citar Hesse et al. 2020 como soporte de enablement
  (mencionado en el borrador SRBA).
- CNIPA TSP: ✅ PASS.

### Veredicto C12: ✅ PASS — con requisito de algoritmo en memoria.

---

## C13 — Wearables nativos + APIs

- Alice: ✅ Hardware/software específico + APIs concretas.
- Art. 52: ✅ Técnico.
- Art. 53(c): ✅ N/A.
- Art. 56: ✅ Integración nativa con HealthKit/GHC/Oura para PBM ausente
  en prior art.
- Art. 83: ✅ APIs públicas y documentadas.
- CNIPA TSP: ✅ PASS.

### Veredicto C13: ✅ PASS.

---

## C14 — Perfiles multi-usuario

- Alice: ✅ Estructura de datos técnica.
- Art. 52: ✅ Técnico.
- Art. 53(c): ✅ N/A.
- Art. 56: ⚠️ Perfiles multi-usuario en dispositivos genéricos es
  conocido. La novedad está en mantener bases de datos histórico
  longitudinales separadas con protocolos adaptados independientes —
  no trivial.
- Art. 83: ✅ Implementación directa.
- CNIPA TSP: ✅ PASS.

### Veredicto C14: ✅ PASS — anclar bien al sistema completo SRBA.

---

# BLOQUE B — MÉTODO

## C15 — Método independiente

### Alice §101: ✅ PASS — método ejecutado por sistema computarizado, no
mero proceso mental. Anclado a hardware (panel multispectral).

### Art. 52: ✅ Técnico.

### Art. 53(c) — REVISIÓN CRÍTICA

Cada paso evaluado:
- (a) recibir perfil + almacenar → ejecutado por sistema. ✅
- (b) recibir datos biométricos → ejecutado por sistema. ✅
- (c) generar protocolo → ejecutado por motor IA. ✅
- (d) **transmitir parámetros del protocolo al panel** → ejecutado por
  sistema. ✅. Cuidado: si se redactara como "controlar el panel para
  emitir luz sobre el usuario", sería límite. La versión actual
  "transmitir parámetros... para su ejecución durante una sesión" es
  segura porque el actor es el sistema computarizado, no el panel
  intervención sobre el cuerpo.
- (e) recibir + almacenar parámetros efectivos + datos biométricos
  posteriores → ejecutado por sistema. ✅
- (f) actualizar BD → ejecutado por sistema. ✅
- (g) generar protocolo actualizado → ejecutado por motor IA. ✅

✅ PASS. Sin pasos sobre el cuerpo humano.

### Art. 56: ✅ Espejo de C1 — mismo argumento de no-obviedad.

### Art. 83: idem C1 — memoria debe desarrollar el motor IA.

### CNIPA TSP: ✅ PASS.

### Veredicto C15: ✅ PASS.

---

## C16 — Cold-start

- Alice: ✅ PASS — método técnico concreto.
- Art. 52: ✅ Técnico.
- Art. 53(c): ✅ N/A.
- Art. 56: ✅ Generación de primer protocolo con modelo de población
  + identificador del modelo es defensivo y no obvio.
- Art. 83: ✅ Implementación directa.
- CNIPA TSP: ✅ PASS.

### Veredicto C16: ✅ PASS.

---

## C17 — Adherencia + notificación

- Alice: ✅ PASS — anclado a sistema + datos.
- Art. 52: ✅ Técnico.
- Art. 53(c): ✅ N/A.
- Art. 56: ✅ Detección adherencia + notificación generada por IA
  específica de PBM ausente.
- Art. 83: ✅ Implementación directa.
- CNIPA TSP: ✅ PASS.

### Veredicto C17: ✅ PASS.

---

## C18 — Optimización multiobjetivo eficacia+consumo

- Alice: ✅ PASS — mejora técnica concreta (consumo energético).
- Art. 52: ✅ Técnico.
- Art. 53(c): ✅ N/A.
- Art. 56: ✅ Multiobjetivo eficacia+consumo en PBM ausente.
- Art. 83: ⚠️ Memoria debe describir la función objetivo, los
  indicadores específicos, y el algoritmo de optimización (Pareto front,
  weighted sum, etc.).
- CNIPA TSP: ✅ PASS.

### Veredicto C18: ✅ PASS — con requisito de memoria.

---

## C19 — Seguridad anti-eritema [REVISIÓN CRÍTICA Art. 53(c)]

### Pasos evaluados

- (h) monitorizar variable fisiológica del usuario mediante sensor → 
  esto **está en el límite**. Un examinador EPO podría argumentar que
  monitorizar temperatura cutánea o StO₂ del usuario es un paso
  diagnóstico ejecutado sobre el cuerpo humano (Art. 53(c)).
- (i) comparar variable con umbral → ejecutado por sistema. ✅
- (j) reducir potencia o detener sesión → ejecutado sobre el dispositivo,
  no sobre el cuerpo. ✅

### Riesgo

🟡 RIESGO MEDIO Art. 53(c). El paso (h) puede leerse como medida
diagnóstica sobre el usuario.

### Estrategia de reformulación

Convertir C19 en un **claim de SISTEMA** (no de método):

> "Sistema según cualquiera de las reivindicaciones 1 a 14, configurado
> además para, durante una sesión: (h) recibir señales de al menos un
> sensor no invasivo integrado en el dispositivo, indicativas de una
> variable seleccionada del grupo que consiste en temperatura
> superficial del tejido expuesto y saturación de oxígeno tisular; (i)
> comparar la señal con un umbral de seguridad almacenado en la memoria;
> (j) reducir automáticamente la potencia de emisión del panel
> multispectral o detener la sesión cuando la señal exceda el umbral."

Esta versión es claim de sistema **configurado para** — el sistema
está configurado, no se ejecuta un método sobre el cuerpo.

### Veredicto C19: 🟡 MODIFY → mover a Bloque A (sistema), eliminar de
Bloque B (método). Renombrar como C14b o similar en v0.2.

---

## C20 — Federated en método

- Alice: ✅ PASS (espejo de C10).
- Art. 52: ✅ Técnico.
- Art. 53(c): ✅ N/A.
- Art. 56: ✅ PASS.
- Art. 83: ⚠️ Memoria debe describir mecanismo FL.
- CNIPA TSP: ✅ PASS.

### Veredicto C20: ✅ PASS.

---

# BLOQUE C — CRM y DISTRIBUIDO

## C21 — CRM

- Alice: ✅ PASS — necesario para coverage US, formulación estándar.
- Art. 52: ✅ Técnico.
- Art. 53(c): ✅ N/A.
- Art. 56: heredado del método 15.
- Art. 83: heredado.
- CNIPA TSP: ✅ PASS.

### Veredicto C21: ✅ PASS.

---

## C22 — Sistema distribuido cloud

- Alice: ✅ Hardware servidor + comunicación + motor IA.
- Art. 52: ✅ Técnico.
- Art. 53(c): ✅ N/A.
- Art. 56: ⚠️ Cloud architecture genérica para PBM podría argumentarse
  como obvia. **Defensa:** la novedad está en la combinación con C1 y
  C9-C10 (motor IA + federated learning).
- Art. 83: ✅ Implementación directa.
- CNIPA TSP: ✅ PASS.

### Veredicto C22: ✅ PASS — anclar siempre como sistema según C1+C9+C10.

---

# BLOQUE D — SOSTENIBILIDAD

## C23 — Pasaporte Digital de Producto

- Alice: ✅ PASS — estructura de datos técnica + arquitectura servidor.
- Art. 52: ✅ Técnico.
- Art. 53(c): ✅ N/A.
- Art. 56: ✅ PDP para PBM ausente.
- Art. 83: ✅ Implementación directa.
- CNIPA TSP: ✅ PASS.

### Veredicto C23: ✅ PASS.

---

## C24 — Mantenimiento predictivo

- Alice: ✅ PASS — algoritmo concreto + mejora técnica medible.
- Art. 52: ✅ Técnico.
- Art. 53(c): ✅ N/A.
- Art. 56: ✅ Mantenimiento predictivo PBM ausente. Sinergia con C6.
- Art. 83: ⚠️ Memoria debe describir el "modelo de degradación" (regresión
  lineal sobre histórico de fotodiodo, o modelo más sofisticado).
- CNIPA TSP: ✅ PASS.

### Veredicto C24: ✅ PASS — con requisito de memoria.

---

## C25 — Gestión remota de flota (ex-PaaS)

- Alice: ✅ PASS — sistema técnico de gestión, no modelo de negocio.
- Art. 52: ✅ Técnico (telemetría + OTA + gestión ciclo de vida).
- Art. 53(c): ✅ N/A.
- Art. 56: ✅ Gestión de flota PBM ausente.
- Art. 83: ✅ Implementación directa.
- CNIPA TSP: ✅ PASS.

**Validación clave:** cero referencias a "suscripción", "propiedad",
"servicio", "pago". El claim describe arquitectura técnica de gestión
remota. **PASS en EPO Art. 52(2)(c), CNIPA exclusión método de
negocio y Alice Bilski.**

### Veredicto C25: ✅ PASS.

---

# RESUMEN DEL RED-TEAM

| Claim | Veredicto | Acción |
|---|---|---|
| C1 | ✅ PASS | Memoria: dedicar sección autónoma a motor IA |
| C2 | ✅ PASS | — |
| C3 | ✅ PASS | — |
| C4 | 🟡 MODIFY | Reforzar redacción + confirmar soporte MU |
| C5 | ✅ PASS | — |
| C6 | ✅ PASS | Promover en memoria como insignia |
| C7 | ✅ PASS | Memoria: desarrollar capas |
| C8 | ✅ PASS | Memoria: citas científicas Monte Carlo |
| C9 | 🟡 MODIFY | Especificar algoritmo RL + 5 puntos vs CGM |
| C10 | ✅ PASS | Memoria: mecanismo FL detallado |
| C11 | ✅ PASS | Memoria: citar NPUs comerciales |
| C12 | ✅ PASS | Memoria: algoritmo cronobiología |
| C13 | ✅ PASS | — |
| C14 | ✅ PASS | — |
| C15 | ✅ PASS | Memoria: motor IA |
| C16 | ✅ PASS | — |
| C17 | ✅ PASS | — |
| C18 | ✅ PASS | Memoria: función objetivo |
| C19 | 🟡 MODIFY | **Mover a Bloque A** (claim de sistema, no método) |
| C20 | ✅ PASS | Memoria: FL |
| C21 | ✅ PASS | — |
| C22 | ✅ PASS | — |
| C23 | ✅ PASS | — |
| C24 | ✅ PASS | Memoria: modelo de degradación |
| C25 | ✅ PASS | — |

**Estadísticas:**
- ✅ PASS: 22/25 (88%)
- 🟡 MODIFY: 3/25 (C4, C9, C19)
- 🔴 REWRITE: 0/25

**Acción global:** las 3 modificaciones son menores y no afectan a la
estructura del claim set. Pueden integrarse en v0.2 sin re-arquitectura.

---

# REQUISITOS DE MEMORIA DESCRIPTIVA (Fase 3)

El red-team identifica que **la memoria descriptiva (Fase 3) debe cubrir
exhaustivamente** los siguientes 8 puntos para que el claim set pase
Art. 83 EPC / §112 US:

1. **Sección "Descripción del motor IA":** tipo de modelo (LSTM /
   Transformer / ensemble), variables de I/O, función objetivo, ciclo
   de reentrenamiento, frecuencia de actualización. ≥ 3 páginas.

2. **Sección "Diseño del MDP del RL":** estados, acciones, recompensa,
   política inicial (cold-start), algoritmo (PPO o equivalente),
   restricciones de seguridad. ≥ 2 páginas. **5 puntos de distinción vs
   CGM closed-loop.**

3. **Sección "Mecanismo de aprendizaje federado":** agregación segura
   (FedAvg/secure aggregation), frecuencia de sync, validación,
   encriptación de gradientes. ≥ 1 página.

4. **Sección "Modelo multiescala":** detalle de capa fisiológica + capa
   tisular con citas científicas (Welch & Van Gemert, Wang & Jacques
   para Monte Carlo).

5. **Sección "Algoritmo de cronobiología":** estimación de fase
   circadiana (mid-sleep point, mínimo de temperatura periférica) con
   cita Hesse et al. 2020.

6. **Sección "Calibración automática":** fotodiodo de referencia + modelo
   de degradación + lookup tables + frecuencia de calibración.

7. **Sección "Optimización multiobjetivo":** función objetivo combinada
   con indicadores específicos + algoritmo (Pareto / weighted sum).

8. **Sección "Differences over closest prior art":** análisis explícito
   frente a Vielight US11633621B2 (7 puntos) y Zerigo US20230218922A1
   (gap de novedad).

---

# RIESGO PROCESAL CONSOLIDADO

| Riesgo | Probabilidad | Severidad | Mitigación |
|---|---|---|---|
| Vielight obviousness en C4/C9 | Media | Alta | 7 puntos de distinción en memoria |
| §112 enablement en motor IA | Baja-Media | Alta | Cumplir 8 requisitos de memoria |
| Art. 53(c) en C19 | Media | Media | Reformular como claim de sistema |
| Auto-anticipación por publicación BOPI MU | Alta (timing) | Crítica | Filing antes de julio 2026 |
| CGM RL transversal obviousness | Baja | Media | 5 puntos vs CGM en memoria |
| Unidad de invención Art. 82 PCT | Baja | Media | Mantener cohesión motor IA + bucle cerrado |

---

# PRÓXIMO PASO

Producir **Claim Set v0.2** integrando las 3 modificaciones:
- C4 reforzado con redacción defensiva vs Vielight multizone.
- C9 con especificación de algoritmo RL.
- C19 movido a Bloque A como claim de sistema configurado para
  seguridad anti-eritema.

Después: **Fase 3 — memoria descriptiva** cubriendo los 8 requisitos.

---

*PCT EKIO Bienestar S.L. — Fase 2 v0.1 — Confidencial — Borrador interno*
