# ¿Modificar el MU U202532624 o dejarlo y trabajar los rangos en el PCT?
# Memo interno para Javier — a validar por Patricia García (La Fábrica de Inventos)
# Fecha: 2026-07-12
# Estatus: análisis jurídico preliminar. **NO es dictamen legal.** Decisión final = Patricia.

---

## 0. CONCLUSIÓN EN UNA LÍNEA

**NO es viable "modificar" el MU U202532624 para meter rangos amplios en C2/C3.** La Ley 24/2015 prohíbe ampliar el objeto de la solicitud tras presentarla (art. 48.5, aplicable a MU vía art. 137), y el texto original del MU **no contiene ningún rango numérico** que soporte esa ampliación — solo valores puntuales y nombres de bandas cualitativas. La ruta correcta es la ya propuesta en `PCT_EKIO_claims_v0.3_rangos_propuesta.md`: **conservar el MU intacto, mantener C2/C3 [MU PRIORITY] con sus valores puntuales, y añadir en el PCT las dependientes nuevas C2bis/C3bis/C3ter con rangos, reivindicando fecha PCT (julio 2026).**

---

## 1. ESTADO ACTUAL DEL EXPEDIENTE U202532624

- **Fecha de presentación:** 24/12/2025 (justificante OEPM, 12:14 CET).
- **Fase esperable a día de hoy (12/07/2026, +6,5 meses):** examen formal completado y solicitud publicada en el **BOPI** (los MU se publican tras superar examen formal, típicamente 4-6 meses desde la solicitud). Si ya está publicada, el **período de oposiciones (2 meses)** está corriendo o ya cerrado.
- **Ventanas de modificación disponibles según Ley 24/2015 (a confirmar por Patricia con el expediente en la mano):**
  - **Antes de publicación:** modificaciones voluntarias con más libertad.
  - **Durante oposiciones:** el solicitante puede modificar reivindicaciones para responder a las oposiciones (art. 141 remite al régimen de patentes; art. 44 sobre modificaciones).
  - **Tras oposiciones y concesión:** solo se puede LIMITAR (art. 105), nunca ampliar.
- **Regla dura y transversal a todas las ventanas — art. 48.5 Ley 24/2015 (equivalente al art. 123(2) CPE):** *"la solicitud no podrá modificarse de modo que su objeto exceda del contenido de la solicitud tal como fue presentada"*. Es **added matter**. Ampliar cae aquí. Estrechar no cae aquí.

---

## 2. ¿HAY SOPORTE EN LA MEMORIA DESCRIPTIVA PARA RANGOS?

He leído el texto completo de `MU_U202532624_texto_extraido.txt` buscando cualquier cosa que soporte una ampliación a rangos (párrafos 327-621 aproximadamente).

**Lo que SÍ dice la memoria:**
- Valores puntuales exactos, repetidos dos veces (pág 13 y 14): *"295, 385, 405, 485, 630, 670, 727, 850, 935 y 1050 nm"*.
- Preámbulo permisivo: *"El módulo LED **puede** tener las siguientes longitudes de onda, o una **combinación** de ellas"* — permite subconjuntos, no rangos.
- Nombres de bandas cualitativas: *"UVB, UVA, violeta, cian, rojo, rojo profundo, infrarrojo cercano, infrarrojo, infrarrojo profundo e infrarrojo lejano"* (pág 13 y 15, memoria y realización preferente).
- Módulo central: *"al menos cinco longitudes de onda distintas, **tales como** 670, 727, 850, 935 y 1050 nm"* (pág 16, línea 583). El *"tales como"* es lenguaje abierto.

**Lo que NO dice la memoria (crítico):**
- Ningún rango numérico (nada tipo "620-700 nm", "780-880 nm").
- Ninguna tolerancia (nada de "±10 nm", "±5%", "aproximadamente").
- Ninguna equivalencia banda-cualitativa ↔ rango-numérico ("rojo profundo" no queda definido como "660-720 nm" ni similar).
- Ninguna referencia al pico **810 nm** que Javier quiere reivindicar ahora — 810 nm no aparece en el MU en absoluto.

**Conclusión sobre soporte:** la memoria del MU soporta (a) los 10 valores puntuales, (b) subconjuntos de esos valores, y (c) bandas descritas por su nombre cualitativo. **NO soporta rangos numéricos definidos.** Cualquier añadido tipo "620-700 nm" es materia nueva → viola art. 48.5.

**Punto de esperanza (a validar por Patricia):** el "tales como" del módulo central podría interpretarse como que la lista no es cerrada, y las bandas cualitativas ("rojo profundo", "infrarrojo cercano") podrían dar soporte a reivindicaciones LIMITADORAS por bandas cualitativas — pero incluso ahí, definir los cortes numéricos de cada banda ya sería materia añadida.

---

## 3. COMPARATIVA DE LAS 3 RUTAS

### Ruta A — Modificar el MU actual para meter rangos

- **Viabilidad jurídica:** ❌ **NO viable para AMPLIAR** (art. 48.5 Ley 24/2015). Meter "620-700 nm" donde el MU dice "630, 670" es materia añadida y se rechaza en trámite o se anula en oposición.
- **¿Se podría LIMITAR?** Sí, pero limitar es lo contrario de lo que Javier quiere: estrechar (ej. "670 ± 5 nm") sería válido pero reduciría cobertura. No sirve para el objetivo.
- **¿Y sustituir puntuales por bandas cualitativas del MU?** Frontera gris. La memoria nombra "rojo", "rojo profundo", "NIR"; una reivindicación tipo "en la banda del rojo profundo, según se describe en la memoria" podría defenderse por soporte literal DEL NOMBRE, pero los cortes numéricos concretos siguen siendo materia añadida. Patricia debe juzgarlo.
- **Riesgo de prioridad:** aunque la modificación se admitiese formalmente, en un futuro litigio o en el PCT que reivindique la prioridad del MU, la parte ampliada se caería a la fecha PCT — de facto, mismo resultado que la Ruta C, con más ruido procesal.
- **Coste/tiempo:** medio-alto. Escrito de modificación, contestación de OEPM, riesgo de objeción.

### Ruta B — Presentar un MU NUEVO con los rangos

- **Viabilidad jurídica:** ✅ Se puede presentar. Es un expediente independiente.
- **Fecha de prioridad:** la del nuevo MU (agosto/septiembre 2026 según cuándo se presente). **NO hereda la del 24/12/2025.**
- **Problema mayor — autodivulgación:** el primer MU ya está publicado en BOPI (o a punto de publicarse). **El propio MU U202532624 es prior art contra el segundo MU** en todo lo que ya divulgó. Un examinador (o un tercero en oposición) usaría el MU-1 para tumbar la novedad del MU-2 en la parte común (dispositivo con panel + módulo central + valores 295-1050 nm). Solo lo verdaderamente nuevo del MU-2 (los rangos como característica añadida, 810 nm, etc.) sobreviviría, y encima con fecha peor.
- **Beneficio marginal vs Ruta C:** casi ninguno. Añade tasas, otro trámite y otro punto de fricción sin dar cobertura material que el PCT no dé mejor.
- **Cuándo tendría sentido:** solo si el PCT no se pudiera presentar en julio 2026 y hubiese que ganar tiempo con un segundo MU puente. No es el caso.

### Ruta C — Dejar el MU intacto, llevar los rangos al PCT (memo v0.3 ya existente)

- **Viabilidad jurídica:** ✅ Limpia. C2/C3 conservan valores puntuales con fecha 24/12/2025 (prioridad MU). Nuevas C2bis/C3bis/C3ter con rangos y 810 nm entran con fecha PCT (~julio 2026).
- **Dos fechas de prioridad en la misma PCT:** admisible. La CUP y el PCT reconocen prioridades múltiples y parciales (art. 4F CUP; regla PCT sobre priority claims). Cada reivindicación se examina con la fecha que legítimamente le corresponde según su soporte.
- **Riesgo:** los rangos nuevos entran con fecha julio 2026 y deben ser NOVEDOSOS a esa fecha. Vielight 620-700 y 780-1400 son prior art anterior. La defensa es la COMBINACIÓN con C1 (bucle cerrado + IA + sensores), no la longitud de onda aislada. Este análisis ya está desarrollado en `PCT_EKIO_claims_v0.3_rangos_propuesta.md` §4.
- **Coste:** el del PCT ya planificado + posible tasa por claims >15 en EPO (consolidable en un solo claim Markush).

---

## 4. RECOMENDACIÓN

**Ruta C.** Motivos, en orden de peso:

1. **La ruta A está bloqueada por ley** (art. 48.5 Ley 24/2015). No es opinión, es una regla dura de added matter. El texto del MU no da soporte para rangos.
2. **La ruta B se autoinfligiría prior art** con el propio MU-1 ya publicado, y perdería la fecha 24/12/2025 para todo. Coste sin beneficio.
3. **La ruta C es la que ya prevé la práctica estándar de PCT:** el MU vale para lo que vale (fijar prioridad de valores puntuales); el PCT es donde se construye la pirámide defensiva completa con rangos, bandas y 810 nm.
4. **Preserva 100% de la fecha 24/12/2025 para lo que ya está reivindicado** en C2/C3 del claim set v0.2. No se pierde nada.
5. **No añade fricción procesal** en la OEPM sobre un expediente MU que interesa que se conceda limpio y rápido (soporte de la fecha de prioridad para el PCT).

---

## 5. NO SE PROPONE TEXTO DE MODIFICACIÓN DEL MU

Como la conclusión es que la Ruta A NO es viable para el objetivo perseguido (ampliar a rangos), **no se redacta texto de modificación del MU**. Cualquier modificación seria del MU en esta fase debería tener otro objetivo (p.ej. corregir un error material, o LIMITAR a petición de la OEPM), no ampliar.

Si Patricia considera que hay margen para introducir en el MU una reivindicación LIMITADORA por bandas cualitativas (usando exactamente los nombres del párrafo original: *"UVB, UVA, violeta, cian, rojo, rojo profundo, infrarrojo cercano, infrarrojo, infrarrojo profundo e infrarrojo lejano"*) sin definir cortes numéricos, ese es un ejercicio que **ella** debe redactar con su criterio profesional — el soporte literal es el nombre de la banda, no un rango. No lo redactamos aquí para no inducir una modificación ampliatoria.

---

## 6. PREGUNTAS PARA PATRICIA GARCÍA

1. **Estado real del expediente U202532624** en OEPM hoy: ¿publicado en BOPI? ¿oposiciones abiertas o cerradas? ¿alguna comunicación oficial pendiente?
2. **Confirmación de art. 48.5:** ¿coincide con nuestro análisis de que meter rangos numéricos donde el MU tiene valores puntuales es materia añadida y por tanto inadmisible?
3. **Bandas cualitativas del MU** (rojo, rojo profundo, NIR, IR, IR profundo, IR lejano): ¿considera que dan soporte literal en el MU a una reivindicación por BANDAS (sin cortes numéricos) que se pudiera meter todavía por vía de LIMITACIÓN? ¿O es una vía demasiado arriesgada de added matter también?
4. **Prioridades múltiples en el PCT:** confirmar que se puede reivindicar prioridad del MU 24/12/2025 solo para los claims con soporte literal (C1 parcial, C2, C3, C4 parcial, C14 parcial de v0.2), y fecha PCT para el resto — incluidas las nuevas C2bis/C3bis/C3ter.
5. **Publicación del MU y su efecto sobre la novedad del PCT:** la publicación del MU en BOPI ¿podría afectar a la novedad de las dependientes del PCT que NO reivindiquen prioridad del MU? Estrictamente no debería (mismo solicitante + reivindicación de prioridad válida para el material solapado), pero conviene confirmar.
6. **810 nm:** ¿lo tratamos como nueva característica solo del PCT (dependiente C3ter) o merece un segundo MU específico? Nuestro análisis dice PCT; validar.

---

## 7. RESUMEN EJECUTIVO PARA JAVIER

- El MU **no se toca**. Cumple su función: fijar la fecha 24/12/2025 sobre los valores puntuales y sobre el concepto general de "panel multiespectral + módulo central + control independiente".
- Los rangos y el pico 810 nm **entran en el PCT** como dependientes nuevas con fecha propia (~julio 2026), tal como ya está redactado en `PCT_EKIO_claims_v0.3_rangos_propuesta.md`.
- No merece la pena presentar un segundo MU: no aporta cobertura, cuesta tasas y se autoinflige prior art.
- Este análisis va a Patricia con las 6 preguntas del §6. Si Patricia confirma, el memo v0.3 pasa a ser la ruta oficial de trabajo para el PCT.

---

*Confidencial — Borrador interno Ekio BioTech / EKIO Bienestar S.L. — Redactado por el agente PCT (Claude) para revisión de Javier y validación de Patricia García, La Fábrica de Inventos S.L.*
