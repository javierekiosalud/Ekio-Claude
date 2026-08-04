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
```
