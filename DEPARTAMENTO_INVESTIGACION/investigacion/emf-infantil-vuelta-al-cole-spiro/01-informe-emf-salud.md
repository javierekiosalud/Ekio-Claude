# Dosimetría EMF pediátrica vs. adulta (RF banda WiFi/móvil y ELF)

- **Agente**: emf-salud
- **Fecha**: 2026-08-04
- **Encargo**: Campaña Meta Ads "vuelta al cole" (SPIRO, público padres) — dosimetría pediátrica vs. adulta y auditoría de la afirmación orgánica ya publicada "el cerebro de tu hijo absorbe más radiación que el tuyo"
- **Estado**: Aprobado con correcciones (ver Validación de Heruca)

**Nota de cobertura**: No hay MCP de PubMed en este entorno. Búsqueda con `WebSearch`/`WebFetch` contra PubMed, Europe PMC, ICNIRP, WHO, SCENIHR, IARC `[SIN MCP PUBMED — BÚSQUEDA WEB]`. NotebookLM caído (sesión expirada desde 2026-04-24, verificado 2026-08-04): no consultado, limitación de cobertura declarada, no relajación del estándar.

---

## CAPA 1 — Comprensión

### Hallazgo

Existe evidencia dosimétrica sólida de que la energía de radiofrecuencia se distribuye de forma distinta en la cabeza de un niño que en la de un adulto (mayor absorción local en subregiones concretas del cerebro y en médula ósea), pero para la métrica que usan los reguladores para certificar la seguridad de un dispositivo (SAR de cabeza entera, promediado 1g/10g) **no hay diferencia consistente** entre niño y adulto; y no existe evidencia epidemiológica de que la exposición ambiental real (WiFi, móvil, tablet) esté causando daño medible en niños.

### Nivel de evidencia por mecanismo

| Mecanismo | Nivel | Veredicto |
|---|---|---|
| SAR craneal — subregiones (corteza, hipocampo, médula ósea) | [D] | Mayor absorción local documentada y replicada (Christ 2010, Wiart 2011) |
| SAR craneal — cabeza entera (métrica regulatoria) | [D] | Sin diferencia consistente niño/adulto (Bit-Babik 2005, Wiart 2011) |
| Grosor craneal / conductividad tisular | [D] | Hecho anatómico establecido, sin controversia |
| SNC en desarrollo = más vulnerable | [E] | Hipótesis de plausibilidad (taller OMS 2004), no hallazgo |
| Ventana de exposición acumulada de por vida | [E] | Inferencia lógica no verificable aún (latencia de cáncer > años de despliegue tecnológico masivo) |
| Límite regulatorio diferenciado por edad | — | No existe en ninguna agencia mayor (ICNIRP, OMS, SCENIHR) |
| Daño epidemiológico en niños (tumores, cognición, comportamiento) | [C] con dirección hacia ausencia de asociación; [inadecuada] en cognición/comportamiento | Estudios de mayor calidad (CEFALO, MOBI-Kids) son resultado nulo; revisión sistemática (Bodewein 2022) declara evidencia insuficiente, no evidencia de daño |

### Base empírica

- **Bit-Babik et al. 2005**, *Radiat Res* 163(5):580-90, PMID 15850420 — SAR local pico y profundidad de penetración "aproximadamente iguales" en todos los modelos de cabeza bajo condiciones idénticas.
- **Christ A, Gosselin MC, Christopoulou M, Kühn S, Kuster N. 2010**, "Age-dependent tissue-specific exposure of cell phone users." *Phys Med Biol* 55(7):1767-83. doi:10.1088/0031-9155/55/7/001. **PMID: 20208098** (verificado por Heruca en PubMed). Campos inducidos localmente en niños hasta >3 dB mayores en corteza/hipocampo/hipotálamo/ojo; >10 dB en médula ósea (mayor conductividad tisular). Confirma explícitamente: sin diferencia por edad en SAR de cabeza entera.
- **Wiart J, Hadjem A, Varsier N, Conil E. 2011**, "Numerical dosimetry dedicated to children RF exposure." *Prog Biophys Mol Biol* 107(3):421-7. doi:10.1016/j.pbiomolbio.2011.10.002. PMID: 22005525. Seis modelos de cabeza infantil MRI-realistas. Hallazgo clave citable literalmente: *"el cumplimiento de los niveles de referencia de ICNIRP no garantiza el cumplimiento de las restricciones básicas"* en algunos escenarios pediátricos.
- **Martínez-Búrdalo M et al.**, *Phys Med Biol*, PMID 15083675 — SAR pico absoluto baja con el tamaño de cabeza, pero el porcentaje de energía incidente que llega al cerebro aumenta con cabezas más pequeñas (dos magnitudes distintas).
- **Kheifets L, Repacholi M, Saunders R, van Deventer E. 2005**, "The sensitivity of children to electromagnetic fields." *Pediatrics* 116(2):e303-13. doi:10.1542/peds.2004-2541. PMID: 16061584. Producto de un taller OMS (Estambul 2004): agenda de investigación, no prueba de daño. Pide explícitamente "más investigación".
- **Bodewein L, Dechent D, Graefrath D, Kraus T, Krause T, Driessen S. 2022**, "Systematic review of the physiological and health-related effects of RF-EMF exposure from wireless communication devices on children and adolescents." *PLoS ONE* 17(6):e0268641. doi:10.1371/journal.pone.0268641. **PMID: 35648738** (verificado por Heruca). 53 estudios, metodología OHAT/GRADE. Certeza de evidencia "baja a inadecuada" en síntomas subjetivos, cognición, comportamiento; "inadecuada" en desarrollo infantil y otros desenlaces (incl. cáncer). Conclusión textual: el cuerpo de evidencia **no permite conclusión definitiva** en ningún sentido.
- **Salford LG et al. 2003**, *Environ Health Perspect* 111(7):881-3, PMID 12782486 — daño neuronal en rata tras exposición GSM. `[NO REPLICADO]` en estudio posterior con protocolo idéntico.
- **Aydin D et al. 2011** (CEFALO), *J Natl Cancer Inst*, PMID 21795665 — 352 casos/646 controles, 7-19 años, 4 países nórdicos+Suiza. Sin aumento de riesgo. Validación del propio grupo mostró sesgo de recuerdo del 163% en controles.
- **Castaño-Vinyals G et al. 2022** (MOBI-Kids), *Environ Int*, PMID 34974237 (verificado por Heruca). 899 casos/1.910 controles, 10-24 años, 14 países. Sin evidencia de asociación causal.
- **Frei P et al. 2011** (cohorte danesa), *BMJ* 343:d6387, PMID 22016439. Sin aumento de riesgo — pero cohorte de entrada adulta (≥30 años), relevancia pediátrica indirecta.
- **ICNIRP 2020**, "Guidelines for limiting exposure to EMF (100 kHz-300 GHz)." *Health Phys* 118(5):483-524. Sin restricción básica ni nivel de referencia distinto por edad; margen de seguridad general (~factor 50) declarado suficiente para toda la población.
- **IARC 2011**, clasificación RF-EMF Grupo 2B ("posiblemente carcinógeno"), por evidencia limitada de glioma/neurinoma del acústico en usuarios intensivos adultos. Reevaluación recomendada como prioridad alta en el programa de monografías 2025-2029 (abril 2024) — **no concluida**, resultado no antes de 2027-2029.
- **Karipidis K et al. 2024**, *Environ Int* 191:108983 — revisión sistemática encargada por la OMS: certeza moderada de que el uso de móvil probablemente no aumenta el riesgo de tumores cerebrales, incluidos los pediátricos. Contestada por ICBE-EMF `[POSICIÓN DECLARADA]` por presunto sesgo metodológico — presentar ambos lados.

### Limitaciones y evidencia contraria — qué NO sostiene la evidencia

- La métrica regulatoria (SAR cabeza entera) no muestra exceso infantil.
- La plausibilidad mecanicista (Kheifets 2005) tiene 20 años y sigue siendo, por sus propios términos, una razón para investigar, no un hallazgo.
- La revisión más rigurosa (Bodewein 2022) encuentra evidencia insuficiente en **todos** los desenlaces relevantes — no dice "sin efecto", dice "no hay datos suficientes para decidir".
- El único estudio animal con daño neuronal positivo (Salford) no se ha replicado.
- Los tres estudios pediátricos de mayor calidad y tamaño (CEFALO, MOBI-Kids, y la cohorte danesa como referencia indirecta) son resultados nulos.
- El argumento de "ventana de exposición acumulada" no es verificable ni refutable a corto plazo — la tecnología de uso masivo tiene menos años de despliegue que el período de latencia esperable de un tumor sólido.
- Ninguna agencia mayor fija un límite diferenciado por edad; presentar esto como "vacío regulatorio" ignora que es una decisión de diseño publicada y defendida, no un olvido — aunque persiste la tensión técnica documentada por Wiart (2011).

### Qué diría un escéptico bien informado

1. "El propio estudio que citaríais para 'más absorción' (Christ 2010) dice explícitamente que no hay diferencia por edad en el SAR de cabeza entera — la métrica que usa la regulación para certificar que un dispositivo es seguro."
2. "La revisión sistemática más completa que existe sobre niños (Bodewein 2022, 53 estudios) no encuentra evidencia suficiente ni para afirmar riesgo ni para descartarlo — usarla para justificar un mensaje de alarma es tan indefendible como usarla para decir que está demostrado que es seguro."
3. "Los tres estudios pediátricos mejor diseñados (CEFALO, MOBI-Kids, cohorte danesa) no encuentran lo que el anuncio insinuaría. Citar 'incertidumbre' para justificar alarma cuando la evidencia disponible apunta consistentemente a ausencia de asociación invierte la carga de la prueba."

### Estado de la cuestión

Consenso técnico estrecho (SAR de cabeza entera equivalente) conviviendo con matiz real y replicado (SAR local en subregiones, mayor en niños). Campo epidemiológico abierto por falta de estudios de calidad suficiente y por insuficiente tiempo de latencia transcurrido — no por señal de daño. Lo que resolvería la duda: cohortes prospectivas con dosimetría individual real y seguimiento de décadas, hoy inexistentes a la escala necesaria.

---

## Auditoría de deriva — contenido orgánico ya publicado

### "Por qué el cerebro de tu hijo absorbe más radiación que el tuyo"

**Veredicto: no sostenible tal como está formulada.** Generaliza un hallazgo real pero parcial (subregiones concretas, no "el cerebro" en bloque) a una afirmación de hecho sobre todo el órgano. Un pediatra o revisor técnico la rebatiría citando el mismo estudio (Christ 2010) que se usaría para defenderla, porque ese estudio dice literalmente lo contrario para SAR de cabeza entera.

### "Sus cerebros se están formando. Su exposición hoy importa más que la tuya."

**Veredicto: no sostenible como afirmación de hecho.** Mezcla una hipótesis de plausibilidad ([E], Kheifets 2005, presentada por sus propios autores como razón para investigar) con una implicación causal de daño acumulado que la revisión más rigurosa disponible (Bodewein 2022) no respalda en ningún desenlace estudiado. Es exactamente la mezcla que `docs/00-nucleo-evidencia.md` prohíbe: demostrar plausibilidad (1) y comunicar daño (3).

**Recomendación operativa:** ambas frases requieren corrección — no por ser inventadas, tienen origen en literatura real, sino por generalizar hallazgos de subregión/hipótesis mecanicista a afirmaciones de hecho. Ver registro, AF-004 y AF-005.

---

## CAPA 2 — Divulgación

### Explicación en lenguaje llano

Cuando un niño usa un móvil o está en un aula con WiFi, la energía no se distribuye por su cabeza igual que en un adulto: el cráneo infantil es más fino, el dispositivo suele quedar más cerca de ciertos tejidos, y algunos tejidos internos (como la médula ósea) conducen mejor la electricidad a esa edad. En algunas zonas muy concretas del cerebro la energía puede penetrar de forma distinta. Pero cuando se mide lo que de verdad usan los reguladores para aprobar un teléfono — la energía absorbida en el conjunto de la cabeza — esa diferencia prácticamente desaparece.

### Analogía (y su punto de ruptura)

Verter la misma cantidad de agua sobre dos esponjas de tamaño distinto: la pequeña se moja de forma distinta por dentro, aunque el total absorbido sea parecido. Punto de ruptura: el agua no tiene "zonas peligrosas" — el cerebro sí podría tenerlas en teoría, y eso es precisamente lo que la ciencia todavía no sabe.

### El dato que se recuerda

Ningún organismo regulador —ni la OMS, ni la Comisión Europea, ni ICNIRP— fija hoy un límite de radiofrecuencia distinto para niños. No por omisión: hay un taller de la OMS dedicado a esto desde 2004. Es una decisión defendida, conviviendo con voces técnicas serias que señalan que ese margen no está pensado escenario por escenario para la anatomía infantil.

### La salvedad, integrada

"Los niños absorben, por su anatomía, una fracción algo distinta de la señal de radiofrecuencia en algunas zonas del cerebro que un adulto ante la misma exposición — esto es un dato físico documentado, no una prueba de que esa señal les esté haciendo daño; eso todavía no se ha demostrado ni en un sentido ni en el otro."

### Canal admisible

Ver cierre por canal en la síntesis de Heruca (`00-sintesis-heruca.md`).

---

## CAPA 3 — Trazabilidad

1. Bit-Babik G, Guy AW, Chou CK, Faraone A, Kanda M, Gessner A, Wang J, Fujiwara O. *Radiat Res.* 2005;163(5):580-90. doi:10.1667/RR3353. PMID: 15850420.
2. Christ A, Gosselin MC, Christopoulou M, Kühn S, Kuster N. *Phys Med Biol.* 2010;55(7):1767-83. doi:10.1088/0031-9155/55/7/001. **PMID: 20208098.**
3. Wiart J, Hadjem A, Varsier N, Conil E. *Prog Biophys Mol Biol.* 2011;107(3):421-7. doi:10.1016/j.pbiomolbio.2011.10.002. PMID: 22005525.
4. Martínez-Búrdalo M et al. *Phys Med Biol.* 2004. PMID: 15083675.
5. Kheifets L, Repacholi M, Saunders R, van Deventer E. *Pediatrics.* 2005;116(2):e303-13. doi:10.1542/peds.2004-2541. PMID: 16061584.
6. Bodewein L et al. *PLoS ONE.* 2022;17(6):e0268641. doi:10.1371/journal.pone.0268641. **PMID: 35648738.**
7. Salford LG, Brun AE, Eberhardt JL, Malmgren L, Persson BR. *Environ Health Perspect.* 2003;111(7):881-3. PMID: 12782486. `[NO REPLICADO]`
8. Aydin D et al. (CEFALO) *J Natl Cancer Inst.* 2011. PMID: 21795665.
9. Castaño-Vinyals G et al. (MOBI-Kids) *Environ Int.* 2022;160. PMID: 34974237.
10. Frei P et al. *BMJ.* 2011;343:d6387. PMID: 22016439.
11. Karipidis K et al. *Environ Int.* 2024;191:108983.
12. ICBE-EMF. "Scientific Flaws of the WHO Review on Cell Phone Radiation Cancer Risk." icbe-emf.org, 2024-2025. `[POSICIÓN DECLARADA]`
13. IARC. Press Release nº208, 31 mayo 2011. iarc.who.int.
14. IARC Advisory Group, reevaluación RF prioridad alta, programa 2025-2029, abril 2024.
15. SCENIHR. "Opinion on Potential health effects of exposure to EMF." Comisión Europea, 27 enero 2015.
16. ICNIRP. *Health Phys.* 2020;118(5):483-524.

---

## Cierre por canal

1. **Lo que dice la ciencia**: hay una diferencia física documentada y replicada en cómo se distribuye la RF en la cabeza infantil (subregiones concretas), sin diferencia consistente en la métrica regulatoria de cabeza entera; no hay evidencia de que la exposición escolar real cause daño medible en niños; el campo epidemiológico está abierto por falta de datos de calidad, no por señal de daño.
2. **Lo que puede decir Ekio de sus productos**: nada de este informe por sí solo autoriza una afirmación de eficacia de SPIRO — este informe es solo la base dosimétrica del contexto, no evidencia sobre el producto (ver informe spiro).
3. **Lo que solo cabe en divulgación no vinculada a producto**: la explicación completa de la dosimetría pediátrica, con la salvedad integrada, en libro/blog/charla — nunca como titular aislado ni con CTA de compra.

---

## Validación de Heruca

- **Fecha**: 2026-08-04
- **Resultado**: Aprobado con correcciones
- **Correcciones**: (1) PMID de Bodewein et al. 2022 no se citó explícitamente en el informe original del agente — verificado y añadido: 35648738. (2) Todos los PMID de mayor peso (Christ 2010, Divan 2008, MOBI-Kids 2022) verificados por Heruca directamente en PubMed antes de dar de alta ninguna afirmación en el registro — coinciden con lo reportado por el agente. (3) Se exige en el cierre por canal que la formulación pediátrica nunca se abrevie al titular orgánico ya publicado ("el cerebro de tu hijo absorbe más radiación") sin la salvedad completa.
- **Afirmaciones dadas de alta en el registro**: AF-001, AF-002, AF-004 (corrección), AF-005 (corrección).
