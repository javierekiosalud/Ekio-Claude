# PCT EKIO — Propuesta v0.3: Reivindicación por RANGOS de longitud de onda
# MEMO INTERNO — Borrador para revisión (Javier → Patricia García)
# Versión: v0.3-propuesta — 2026-07-12
# NO reemplaza a v0.2 (que sigue vigente como claim set base).
# Este documento es una PROPUESTA DE MODIFICACIÓN sobre v0.2.

---

## 0. RESUMEN EN UNA FRASE

Javier propone dejar de reivindicar longitudes de onda como valores PUNTUALES
(ej. "670 nm") y pasar a reivindicar RANGOS (ej. "banda roja terapéutica
620-700 nm"), porque un rango cubre variantes comerciales, tolerancias
industriales de LED (±10-20 nm típicas) y bloquea el "diseño-alrededor" de un
competidor que fabrique a 665 o 675 nm.

**Problema crítico que ordena toda la propuesta:** las reivindicaciones que
hoy están etiquetadas como **[MU PRIORITY]** (C2 y C3) están soportadas por
el MU U202532624 con VALORES PUNTUALES literales. Cambiarlas a rangos
**hace perder la fecha de prioridad de 24/12/2025** para esa reivindicación,
porque el rango es "materia añadida" respecto al MU. Solución que se propone
más abajo: **conservar C2 y C3 tal como están (con fecha MU) y AÑADIR nuevas
dependientes con rangos que reivindiquen [PCT DATE]** (fecha PCT julio 2026).

---

## 1. ARQUITECTURA DE LA PROPUESTA (regla general)

Práctica estándar en redacción de patentes de dispositivos ópticos:

1. **Independiente amplia** — rango muy ancho (ya lo tenemos en C1: 295-1100 nm).
2. **Dependientes intermedias** — bandas terapéuticas completas (rojo, NIR, azul,
   violeta/UV-A, UV-B, MIR corto). Ancho ~50-100 nm.
3. **Dependientes estrechas** — sub-rangos de ±10-20 nm alrededor de picos
   validados por literatura de PBM (660, 670, 810, 830, 850, 940, 1064 nm).
4. **Dependientes puntuales [MU PRIORITY]** — se MANTIENEN los valores
   literales del MU para preservar la fecha 24/12/2025.

Esto da la "pirámide" de robustez frente a impugnación: si un examinador
tumba la independiente por prior art, se cae al escalón siguiente sin perder
protección total.

---

## 2. MAPEO CLAIM POR CLAIM — valores puntuales actuales → rangos propuestos

### 2.1. Claim 1 (independiente) — YA ES UN RANGO

Texto actual: *"al menos dos longitudes de onda distintas en el rango de
**295 nm a 1100 nm**"*.

Recomendación: **sin cambio**. El rango 295-1100 nm ya cubre desde UV-B corto
hasta NIR-2. Un examinador podría tumbarlo por prior art (Vielight cubre
620-700 + 780-1400), pero eso se ataca por combinación (bucle cerrado + IA +
sensores), no por estrechar el rango en la independiente.

Riesgo si se estrechara: perder cobertura sobre variantes futuras del panel
(línea "Bio Spectrum" con UV-A/B, gama de entrada 13-LED todavía en
naming).

---

### 2.2. Claim 2 [MU PRIORITY] — el nudo del problema

Texto actual: *"LEDs configurados para emitir en longitudes de onda
seleccionadas del grupo que consiste en 295, 385, 405, 485, 630, 670, 727,
850, 935 y 1050 nm"*.

- **NO tocar C2.** Cambiar los valores puntuales por rangos = añadir materia
  no soportada por el MU = **pérdida de prioridad 24/12/2025**. Es una regla
  dura de la CUP (Convenio de la Unión de París). Confirmarlo con Patricia.
- **En su lugar, añadir nueva dependiente C2bis [PCT DATE]:**

  > **Claim 2bis [PCT DATE] — PROPUESTA — Ancho: 5/10**
  >
  > Sistema según la reivindicación 1, en el que el panel de emisión
  > multiespectral comprende LEDs configurados para emitir en al menos dos
  > bandas de longitud de onda seleccionadas del grupo que consiste en:
  >
  > (a) una banda ultravioleta-B de 280 a 320 nm;
  > (b) una banda ultravioleta-A de 320 a 400 nm;
  > (c) una banda violeta-azul de 400 a 495 nm;
  > (d) una banda roja terapéutica de 620 a 700 nm;
  > (e) una banda infrarroja cercana corta de 700 a 780 nm;
  > (f) una banda infrarroja cercana media de 780 a 880 nm;
  > (g) una banda infrarroja cercana larga de 880 a 1100 nm.

**Justificación del ancho de cada banda (PROPUESTA, sin verificar aún contra
PubMed — VALIDACIÓN PENDIENTE):**

| Banda | Rango propuesto | Justificación provisional | Valores MU cubiertos |
|---|---|---|---|
| UV-B | 280-320 | Banda estándar UV-B; Zerigo cubre 300-320 (riesgo, ver §4) | 295 |
| UV-A | 320-400 | Banda estándar UV-A cosmética/dermatológica | 385 |
| Violeta-azul | 400-495 | Cubre violeta (405 nm, antibacterial) y azul circadiano | 405, 485 |
| Rojo terapéutico | 620-700 | Banda clásica PBM; pico citocromo c oxidasa ~660 | 630, 670 |
| NIR corto | 700-780 | Ventana "muerta" entre rojo y NIR-1; cubre 727 nm del MU | 727 |
| NIR medio | 780-880 | Banda PBM profunda; picos 810/830/850 nm | 850 |
| NIR largo | 880-1100 | Penetración máxima; 935, 1050 nm del MU + margen a 1100 | 935, 1050 |

⚠️ **RIESGO PubMed — a validar por FBM-Elite agent y por Patricia:** los
límites exactos de cada "banda terapéutica" no son universales en la
literatura. Distintos meta-análisis usan cortes distintos. Antes de fijar
estos números, revisar Hamblin/Karu/de Freitas para justificar los cortes
620/700/780/880 con citas.

---

### 2.3. Claim 3 [MU PRIORITY] — módulo central de alta potencia

Texto actual: *"al menos cinco longitudes de onda distintas seleccionadas del
grupo que consiste en 670, 727, 850, 935 y 1050 nm"*.

- **NO tocar C3** — mismo motivo que C2, es soporte literal del MU claim 8
  y toca la fecha de prioridad.
- **Añadir C3bis [PCT DATE]:**

  > **Claim 3bis [PCT DATE] — PROPUESTA — Ancho: 5/10**
  >
  > Sistema según la reivindicación 1, que comprende además un módulo LED
  > central de alta densidad y potencia, integrado en el panel de emisión
  > multiespectral, configurado para emitir en al menos tres bandas de
  > longitud de onda seleccionadas del grupo que consiste en:
  >
  > (a) 650-690 nm; (b) 700-740 nm; (c) 800-860 nm;
  > (d) 900-960 nm; (e) 1000-1080 nm;
  >
  > y donde el módulo LED central es controlable independientemente del
  > resto de LEDs del panel multiespectral.

Estos sub-rangos de ±15-20 nm son la "capa 3" de la pirámide: absorben
tolerancias de fabricación (un lote de LEDs 850 nm sale típicamente entre
840 y 860 nm) y bloquean el diseño-alrededor a 675 nm.

---

### 2.4. Nueva dependiente C3ter — pico 810 nm (petición explícita de Javier)

Javier ha pedido añadir 810 nm (banda NIR clásica que NO está en el MU).
Como no está en el MU, es siempre [PCT DATE]. Propuesta:

> **Claim 3ter [PCT DATE] — PROPUESTA — Ancho: 3/10**
>
> Sistema según la reivindicación 1, en el que el panel de emisión
> multiespectral comprende además al menos un LED configurado para emitir en
> el rango de 795 a 825 nm.

Justificación: 810 nm es la longitud de onda de referencia en toda la
literatura de PBM transcraneal (Vielight, Naeser, Chao) y de gran parte de
la PBM sistémica. Añadirla cierra una brecha del MU y refuerza la posición
en NIR medio.

⚠️ **Riesgo Vielight:** Vielight US11633621B2 reclama NIR 780-1400 nm en
contexto cerebral. 810 nm cae dentro. El diferenciador es la combinación
(panel corporal + bucle cerrado + IA + zonas continuas), NO la longitud de
onda aislada. Validar con Patricia que la formulación como *dependiente*
que hereda TODOS los elementos de C1 mantiene la novedad combinatoria.

---

### 2.5. Claim 9 [PCT DATE] — acción del RL sobre "longitud de onda"

Texto actual: *"el espacio de acciones comprende los parámetros configurables
[...] incluyendo longitud de onda, intensidad luminosa, frecuencia de pulso y
patrón espacial de emisión por zona"*.

Recomendación: **sin cambio, pero clarificar en memoria**. Aquí "longitud de
onda" es genérica (el RL selecciona qué LED activar); no hay valor puntual
que cambiar. No es un problema.

---

### 2.6. Resto de claims (C4-C8, C10-C25)

**No usan valores puntuales de nm.** Se mantienen sin cambio respecto a v0.2.

---

## 3. RESUMEN DEL DELTA v0.2 → v0.3

| Acción | Claim | Estado | Fecha reclamada |
|---|---|---|---|
| Sin cambio | C1 | rango 295-1100 nm | Híbrido (MU/PCT) |
| **MANTENER** | C2 | valores puntuales MU | **MU 24/12/2025** — no tocar |
| **MANTENER** | C3 | valores puntuales MU | **MU 24/12/2025** — no tocar |
| **AÑADIR** | C2bis | bandas terapéuticas amplias | PCT julio 2026 |
| **AÑADIR** | C3bis | sub-rangos ±15-20 nm módulo central | PCT julio 2026 |
| **AÑADIR** | C3ter | pico 810 nm (795-825) | PCT julio 2026 |
| Sin cambio | C4-C25 | — | — |

**Total tras la propuesta:** 25 + 3 = **28 reivindicaciones**. Verificar con
Patricia si conviene consolidar en menos claims (algunas oficinas cobran
tasas por claim > 15, p.ej. EPO desde el 16º).

---

## 4. RIESGOS Y CONFLICTOS CON PRIOR ART YA IDENTIFICADO

Cruzados con `02_prior_art/PCT_EKIO_prior_art_analysis_v0.1.md`:

| Riesgo | Fuente prior art | Rango afectado en propuesta | Mitigación |
|---|---|---|---|
| **UV-B 280-320 solapa con Zerigo** | US20230218922A1 (Zerigo 300-320 nm) | C2bis(a) | Zerigo está limitada a dermatología por prescripción médica; el diferenciador es la combinación con C1 (bucle cerrado + IA + sensores). Aun así, considerar estrechar a 290-315 o eliminar la banda UV-B de C2bis si Patricia lo estima. |
| **Rojo 620-700 solapa con Vielight** | US11633621B2 (Vielight rojo 620-700 nm) | C2bis(d) | Vielight es EXCLUSIVAMENTE cerebral (transcraneal + intranasal). SRBA es corporal. Diferenciación por dominio anatómico + arquitectura zonal + closed-loop continuo (C4 v0.2). |
| **NIR 780-1400 solapa con Vielight** | US11633621B2 | C2bis(f), C2bis(g), C3ter (810 nm) | Mismo argumento. Vielight cerebral / SRBA corporal. **Este es el punto donde más se necesita el análisis de Patricia** — si el examinador tumba la novedad de la longitud de onda como característica aislada, la defensa debe apoyarse en la combinación reivindicada por C1. |
| **Rojo+NIR 660+850 solapa con Joovv** | US11253719B2 | C2bis(d) y C2bis(f) | Joovv no tiene NINGUNA característica adaptativa, solo acoplamiento de paneles. Riesgo nulo si se defiende la combinación. |

**Riesgo transversal:** un rango demasiado ancho (ej. 700-780 nm banda "NIR
corto") puede chocar con literatura de PBM genérica en dominio público
anterior a 24/12/2025. Los rangos amplios se defienden SIEMPRE por la
combinación con C1, no como característica aislada.

---

## 5. IMPACTO EN LA JERARQUÍA DE DEPENDENCIAS

Todas las nuevas C2bis, C3bis, C3ter dependen de C1 (independiente). No
tocan la cadena de dependencias del bloque método (C16-C20), ni bloque C
(CRM/distribuido), ni bloque D (sostenibilidad).

Requisitos EPO/USPTO típicos que se cumplen:
- Dependencias claras y ordenadas (Rule 43(4) EPC).
- Cada dependiente añade una característica técnica limitativa concreta.
- Sub-rangos coherentes con la banda madre (C3bis dentro de C2bis).

---

## 6. PREGUNTAS PARA PATRICIA GARCÍA (validación legal pendiente)

Estas son las decisiones que Patricia debe cerrar antes de que este memo se
promueva a v0.3 oficial:

1. **Prioridad y materia añadida.** Confirmar que dejar C2 y C3 intactas
   (con sus valores puntuales del MU) y AÑADIR nuevas dependientes con
   rangos [PCT DATE] es la vía correcta para no perder la fecha 24/12/2025
   sobre los valores puntuales. ¿Se puede legítimamente reclamar en la misma
   PCT dos fechas de prioridad distintas para distintas dependientes?
2. **Ancho de los rangos.** ¿Los cortes 280/320/400/495/620/700/780/880/1100
   son defendibles? ¿Prefiere Patricia cortes más finos (ej. rojo 630-680) o
   más gruesos (ej. rojo 600-720) según su experiencia con OEPM/EPO?
3. **Riesgo Vielight en NIR.** ¿La combinación con C1 (bucle cerrado + IA +
   sensores) es suficiente para preservar novedad ante Vielight
   US11633621B2 aunque el rango 780-880 nm se solape? ¿O conviene estrechar
   deliberadamente para evitar objeción de novedad y usar la combinación
   solo como defensa de actividad inventiva?
4. **Número total de claims.** ¿Consolidamos las 3 nuevas dependientes en 1
   sola con lista Markush ampliada, para no cruzar el umbral de tasas EPO
   (>15 claims)? Ventaja: menos coste. Desventaja: menos escalones de
   pirámide defensiva.
5. **Sub-rangos ±15-20 nm en C3bis.** ¿Son ese ancho suficiente para
   absorber tolerancias industriales estándar de LEDs de potencia? Confirmar
   con la evidencia técnica de fabricantes que Cristian pueda aportar.
6. **810 nm — banda propia o dentro de NIR-medio.** ¿Añadimos C3ter como
   dependiente autónoma o basta con que 810 esté cubierto por el rango
   780-880 de C2bis(f)?
7. **Materia añadida vs MU en Europa.** En algunos casos EPO acepta
   "generalización razonable" del contenido de la prioridad si el experto
   habría derivado directamente el rango de los valores puntuales. ¿Aplica
   aquí? Si aplicara, C2bis podría heredar la fecha del MU y ganar
   robustez.

---

## 7. ESTADO DEL DOCUMENTO

- **v0.2 sigue siendo el claim set base.** No se ha modificado.
- **v0.3-propuesta** = este documento, propuesta de delta.
- **Próximo paso:** Javier revisa → env a Patricia García (La Fábrica de
  Inventos) → Patricia devuelve OK/cambios → se emite v0.3 oficial.
- **Validaciones técnicas pendientes:** cortes de banda contra literatura
  PBM (encargo natural para el agente `fbm-elite-agent`, con evidencia
  PubMed y semáforo 🟢🟡🔴).

---

*PCT EKIO Bienestar S.L. — Propuesta v0.3 rangos — Confidencial — Borrador
interno para revisión de Patricia García*
