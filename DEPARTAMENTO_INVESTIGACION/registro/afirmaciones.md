# Registro de afirmaciones

Documento vivo. Mantenido por **Heruca**. Ver `docs/03-control-de-deriva.md`.

Toda afirmación que llega a canal público entra aquí. Cuando alguien cuestione a Ekio, la
respuesta ya está escrita. Cuando una evidencia cambie, la columna *Piezas* dice exactamente
qué contenido hay que actualizar.

## Estados

- **Vigente** — la evidencia sigue sosteniéndola
- **Debilitada** — ha aparecido evidencia contraria; revisar antes de reutilizar
- **Retirada** — no puede volver a usarse; corregir las piezas donde aparece

---

## Plantilla

```
### AF-000
- **Afirmación**: [redacción exacta aprobada]
- **Nivel**: [A-E]
- **Fuente**: [autor, año, revista, DOI/PMID]
- **Canal**: [libro / conferencia / blog / ficha de producto]
- **Alta**: [AAAA-MM-DD]
- **Revisión**: [AAAA-MM-DD]
- **Estado**: Vigente
- **Piezas**: [dónde se ha usado]
- **Notas**: [salvedades, versión más débil admisible]
```

---

## Desacuerdos registrados

Cuando Javier sobrescribe un veto de Heruca, se anota aquí con fecha y motivo. No es un
reproche: es la trazabilidad que hace que el veto tenga valor.

```
### DIS-000
- **Fecha**:
- **Afirmación en disputa**:
- **Posición de Heruca**:
- **Decisión de Javier**:
- **Motivo**:
```

```
### DIS-001
- **Fecha**: 2026-09-27
- **Afirmación en disputa**: uso en marketing (campaña de email de la semana siguiente,
  producto SPIRO para vehículos) de los dos whitepapers de J. Joaquín Machado L. ("Vehículos
  Modernos y Cuerpo Humano", Partes 1 y 2, joaquinmachado.com, abr/jul 2026) con sus cifras
  literales: "neutralización del 61,95% de la actividad electromagnética caótica" (medida por
  bioelectrografía GDV/BioWell, no por instrumento físico estándar de RF/campo), el "Índice
  AQN" (métrica propia de Machado, sin validación independiente, calibrada con un solo
  vehículo) y la tabla derivada de "Potencia SPIRO"/kit recomendado por 22 modelos de coche
  (ninguno medido instrumentalmente salvo el Tesla Model Y).
- **Posición de Heruca (análisis de Claude, sin convocar a los agentes del departamento)**:
  nivel [E] — fuente 100% del fabricante (Machado es cofundador/inventor de SPIRO); publicado
  en revista de bajísimo factor de impacto (Journal of Applied Biotechnology and
  Bioengineering); método de resultado (bioelectrografía) sin aceptación en biofísica
  convencional, ya catalogado como "generador de hipótesis internas, nunca evidencia" en
  `investigacion/emf-infantil-vuelta-al-cole-spiro/02-informe-spiro.md`; el "Índice AQN" y las
  22 tablas por modelo son inferencia arquitectónica no verificada, el propio documento lo
  admite explícitamente. Choca con el veto cautelar ya abierto en HD-001 sobre lenguaje de
  "reducción" en material SPIRO.
- **Decisión de Javier**: usar el contenido tal cual, con sus cifras y el Índice AQN, para la
  campaña de email de la semana del 28 sep-4 oct sobre SPIRO y vehículos.
- **Motivo**: decisión comercial de Javier: quiere aprovechar el material del propio
  inventor/socio tecnológico tal como está publicado. No se registró justificación adicional
  más allá de la decisión de uso.
```

---

## Hallazgos de auditoría (control de deriva)

```
### HD-001
- **Fecha**: 2026-08-04
- **Detectado por**: Heruca, a raíz del encargo "campaña vuelta al cole SPIRO"
- **Hallazgo**: la web del fabricante (noxtak.com/research) reivindica que un test SAR
  independiente (laboratorio MORLAB) demuestra que SPIRO "reduces the amount of radiation
  absorbed by the human body by reducing emission peaks from mobile devices" — en tensión
  directa con la regla ya vigente en el sistema de anuncios de adultos ("SPIRO no baja la
  lectura del medidor", `Content/ADS_SPIRO_COMPLETO_2026-07.md`).
- **Verificado**: Heruca confirmó el texto literal en la web vía WebFetch (2026-08-04). El PDF
  original del informe MORLAB no ha sido auditado por el departamento.
- **Acción**: veto cautelar sobre cualquier lenguaje de "reducción" de radiación/SAR en toda
  pieza SPIRO (adulta o infantil) hasta que se audite el documento original. Ver informe
  `investigacion/emf-infantil-vuelta-al-cole-spiro/02-informe-spiro.md`.
- **Estado**: abierto — requiere decisión de Javier/Heruca tras leer el PDF original.
```

### HD-002
- **Fecha**: 2026-09-28
- **Detectado por**: Heruca, encargo "guía de claims Ekio Light" (`separacion-marcas/06_claims_ekio_light.md`)
- **Hallazgo**: (a) las fichas de bombillas citan tres PMID erróneos (11756518, 10192353 —cáncer de
  recto—, 10818142) atribuidos a Brainard, Czeisler y Provencio; el Brainard correcto es PMID 11487664.
  (b) La ficha Deep 5 usa Figueiro 2012 (PMID 22988459; luz ambiental ocular de 60 lux a 633 nm) para
  sostener "727 nm regula la leptina", y Álvarez-Martínez 2025 (PMID 39883205) para el sueño,
  ocultando que esa revisión concluye que no hay beneficio en recuperación. (c) "157 países/PCT/
  patentado", "12.000 clientes", "190 mW/cm²" y "0 µT" sin documento; MU mostrado en el Core.
  (d) Origen parcial en `Skills/references/pbm-productos.md` y `pbm-nexo-emf.md`.
- **Acción**: veto a su migración a ekiolight.com; corrección inmediata de citas en la tienda actual;
  propuesta de corrección de las referencias del fbm-elite, pendiente de autorización de Javier.
- **Estado**: abierto

---

## Afirmaciones

```
### AF-001
- **Afirmación**: "Por su anatomía (cráneo más fino, mayor contenido de agua y conductividad
  tisular), la energía de radiofrecuencia se distribuye de forma distinta en la cabeza de un
  niño que en la de un adulto, con mayor absorción local en algunas subregiones (corteza,
  hipocampo, médula ósea); para la métrica reguladora estándar de exposición (SAR de cabeza
  entera) no se ha encontrado diferencia consistente entre niño y adulto."
- **Nivel**: [D]
- **Fuente**: Christ A et al. 2010, Phys Med Biol 55(7):1767-83, PMID 20208098; Wiart J et al.
  2011, Prog Biophys Mol Biol 107(3):421-7, PMID 22005525; Bit-Babik G et al. 2005, Radiat Res
  163(5):580-90, PMID 15850420
- **Canal**: divulgación (blog/libro/charla) con la salvedad integrada en la misma frase, nunca
  como titular aislado. Admisible en anuncio de pago solo en la formulación completa aprobada,
  nunca abreviada a "el cerebro de tu hijo absorbe más radiación"
- **Alta**: 2026-08-04
- **Revisión**: 2027-02-04 (o antes si se publica la reevaluación IARC 2025-2029)
- **Estado**: Vigente
- **Piezas**: pendiente de uso en campaña "vuelta al cole" SPIRO (contextos auriculares/móvil)
- **Notas**: nunca generalizar de "subregión" a "el cerebro"; nunca inferir daño sin la
  salvedad de que no hay evidencia de efecto sobre la salud a niveles ambientales

### AF-002
- **Afirmación**: "Ningún organismo regulador mayor (OMS/ICNIRP, Comisión Europea/SCENIHR)
  fija hoy un límite de exposición a radiofrecuencia diferenciado para niños; su posición es
  que el margen de seguridad general ya cubre a toda la población, aunque la propia literatura
  técnica señala que el cumplimiento de los niveles de referencia no garantiza automáticamente
  el cumplimiento de las restricciones básicas en todos los escenarios pediátricos."
- **Nivel**: posición regulatoria documentada (no aplica escala A-E directamente)
- **Fuente**: ICNIRP 2020, Health Phys 118(5):483-524; Wiart et al. 2011, PMID 22005525;
  SCENIHR 2015 (Comisión Europea)
- **Canal**: libro, blog, charla. En anuncio de pago solo como frase completa, nunca recortada
  a "los límites no protegen a los niños"
- **Alta**: 2026-08-04
- **Revisión**: 2027-02-04
- **Estado**: Vigente
- **Piezas**: —
- **Notas**: —

### AF-003
- **Afirmación**: "SPIRO es una tecnología con propiedades físicas caracterizadas en
  laboratorio por el fabricante (Noxtak); no existen ensayos clínicos independientes que
  evalúen su efecto biológico en niños ni en adultos."
- **Nivel**: [E] `[FUENTE DEL FABRICANTE]`
- **Fuente**: Skills/references/spiro-producto-estrella.md; noxtak.com/research
- **Canal**: única formulación admisible en ficha de producto / anuncio de pago para describir
  el mecanismo. Prohibido cualquier lenguaje que implique eficacia biológica, resultado de
  salud o reducción de exposición
- **Alta**: 2026-08-04
- **Revisión**: cuando se resuelva la agenda de investigación propuesta (ver informe spiro)
- **Estado**: Vigente
- **Piezas**: base de todo el sistema de anuncios SPIRO (adultos e infantil)
- **Notas**: ver HD-001 — hallazgo de deriva potencial sobre lenguaje de "reducción" en material
  del propio fabricante, sin resolver

### AF-004
- **Afirmación**: "Por qué el cerebro de tu hijo absorbe más radiación que el tuyo" (título/
  hook en `ESTRATEGIA_CAPTACION_ORGANICA_INSTAGRAM_2026.md`, líneas 162, 311, 477)
- **Nivel**: la evidencia real solo sostiene la versión matizada de AF-001, no esta redacción
- **Fuente**: ver AF-001
- **Canal**: contenido orgánico ya publicado, nunca pasó por este departamento
- **Alta**: 2026-08-04 (fecha de detección)
- **Revisión**: —
- **Estado**: Debilitada — requiere corrección
- **Piezas**: `ESTRATEGIA_CAPTACION_ORGANICA_INSTAGRAM_2026.md` (guía "Niños y Pantallas", reel
  homónimo, secuencia ManyChat E2)
- **Notas**: corregir a la formulación de AF-001 completa antes de producir piezas nuevas de la
  misma serie que aún no se hayan grabado/publicado

### AF-005
- **Afirmación**: "Sus cerebros se están formando. Su exposición hoy importa más que la tuya."
  (subtítulo, misma fuente que AF-004)
- **Nivel**: [E] como hipótesis explícitamente atribuida, nunca como afirmación de hecho
- **Fuente**: Kheifets et al. 2005, Pediatrics, PMID 16061584 (plausibilidad, no hallazgo);
  contraevidencia: Bodewein et al. 2022, PLoS ONE, PMID 35648738 (evidencia "inadecuada" en
  todos los desenlaces)
- **Canal**: libro/blog en formulación de hipótesis con atribución explícita; nunca en anuncio
  de pago ni como titular sin atribución
- **Alta**: 2026-08-04
- **Revisión**: —
- **Estado**: Debilitada — requiere corrección
- **Piezas**: mismo material que AF-004
- **Notas**: mezcla plausibilidad biológica (1) con daño acumulado comunicado (3) — exactamente
  lo que docs/00-nucleo-evidencia.md prohíbe

### AF-006
- **Afirmación**: "Doble protección" / "protección reforzada" / "blindaje completo" para el
  Pack Infantil (SpiroCard X + SpiroDisc, 420€)
- **Nivel**: no aplica — sin dosis-respuesta que sustente un gradiente de eficacia
- **Fuente**: —
- **Canal**: prohibido en todos los canales vinculados a producto
- **Alta**: 2026-08-04
- **Revisión**: —
- **Estado**: Retirada (vetada antes de producción)
- **Piezas**: pendiente — vetada antes de escribir guiones del Pack Infantil
- **Notas**: formulación correcta: "Dos productos para dos contextos distintos"

### AF-007
- **Afirmación**: "La luz de noche, sobre todo la azul, es la que más frena la melatonina; la luz roja
  apenas activa ese sensor del ojo."
- **Nivel**: [B] (estudios de laboratorio en humanos sobre el espectro de acción)
- **Fuente**: Brainard GC et al. 2001, J Neurosci 21(16):6405-12, PMID 11487664
- **Canal**: ficha, anuncio y blog. En ficha y anuncio, sin "100%" ni promesa de dormir mejor
- **Alta**: 2026-09-28 · **Revisión**: 2027-03-28 · **Estado**: Vigente
- **Piezas**: fichas de bombillas Ekio Light (tras la corrección)
- **Notas**: "mejora el sueño" con bombilla roja NO está sostenido; no hay ensayo con bombillas domésticas

### AF-008
- **Afirmación**: "La luz roja e infrarroja aplicada localmente sobre el músculo se ha estudiado en
  deportistas como apoyo a la recuperación; la luz de cuerpo entero no ha mostrado ese beneficio."
- **Nivel**: [A]/[B] para la aplicación local con láser/LED de contacto; contraevidencia [A] para cuerpo entero
- **Fuente**: Ferraresi C et al. 2016, J Biophotonics, PMID 27874264; Álvarez-Martínez M 2025, Lasers Med Sci, PMID 39883205
- **Canal**: blog completo. En ficha y anuncio solo "apoyo a tu rutina después de entrenar", sin prometer resultado
- **Alta**: 2026-09-28 · **Revisión**: 2027-03-28 · **Estado**: Vigente
- **Piezas**: —
- **Notas**: ningún panel Ekio Light probado; sin irradiancia medida no hay equivalencia de dosis

### AF-009
- **Afirmación**: "En un ensayo con 136 personas y 30 sesiones, la luz roja mejoró el aspecto de la
  piel y la densidad de colágeno medida por ecografía frente a un grupo control (con otro aparato)."
- **Nivel**: [B] (un único ensayo controlado)
- **Fuente**: Wunsch A, Matuschka K 2014, Photomed Laser Surg 32(2):93-100, PMID 24286286
- **Canal**: blog y ficha, con la cita. En anuncio: "ritual de piel con luz roja", sin resultado ni antes/después
- **Alta**: 2026-09-28 · **Revisión**: 2027-03-28 · **Estado**: Vigente
- **Piezas**: —
- **Notas**: el espectro amplio no superó a la luz roja sola, así que no se puede usar para "más
  longitudes = mejor". Pendiente de consulta legal sobre el Anexo XVI del MDR

### AF-010
- **Afirmación**: "La luz roja e infrarroja actúa sobre las mitocondrias de las células, según estudios de laboratorio."
- **Nivel**: [D]
- **Fuente**: de Freitas LF, Hamblin MR 2016, IEEE J Sel Top Quantum Electron, PMID 28070154
- **Canal**: blog y ficha con "de laboratorio". Prohibido en anuncio como beneficio de energía o cansancio
- **Alta**: 2026-09-28 · **Revisión**: 2027-03-28 · **Estado**: Vigente
- **Piezas**: —
- **Notas**: nunca traducir a "más energía" o "menos cansancio" (sin evidencia en humanos con panel)

### AF-011
- **Afirmación**: "727 nm regula la leptina / el metabolismo / el sobrepeso"; "+40% ATP en 20
  minutos"; "el 850 nm estimula la melatonina subcelular"; "protección contra CEM" (IGNIS)
- **Nivel**: sin soporte (cita mal atribuida o sin fuente) / [E]
- **Fuente**: ver HD-002
- **Canal**: prohibido en todos los canales vinculados a producto
- **Alta**: 2026-09-28 · **Estado**: Retirada
- **Piezas**: fichas Deep 5, BR7 e IGNIS en electrosmogespana.com
- **Notas**: no migrar a ekiolight.com

### AF-012
- **Afirmación**: "Reduce el dolor articular" (sobre la base de Stausholm 2019)
- **Nivel**: [A] para láser 785-860 nm a 4-8 J en artrosis de rodilla; no transferible a paneles LED de Ekio
- **Fuente**: Stausholm MB et al. 2019, BMJ Open, PMID 31662383
- **Canal**: solo divulgación (blog/libro) sin vincular a producto. Prohibido en ficha y anuncio:
  declarar alivio del dolor convierte el aparato en producto sanitario (MDR) y es un claim de enfermedad (RD 1907/1996)
- **Alta**: 2026-09-28 · **Estado**: Vigente (solo divulgación)
- **Piezas**: ficha Deep 5 (hay que retirarla), título del Core
- **Notas**: el tratamiento no está en las guías principales de artrosis de rodilla
```
