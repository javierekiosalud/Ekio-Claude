# Control de deriva

## El fallo que hay que evitar

Sin revisores externos, nadie detiene esta cadena:

```
Informe:     "evidencia preliminar, principalmente mecanicista"   [D]
Libro:       "los estudios apuntan a que..."                      [C]
Post:        "los estudios demuestran que..."                     [B]
Escenario:   "está demostrado que..."                             [A]
```

Ocurre de buena fe: seis meses leyendo tu propio material degradado. Es el riesgo principal de
una investigación sin revisión por pares.

## Regla

**Ninguna versión posterior de una afirmación puede ser más fuerte que la original.**

Heruca compara toda pieza nueva contra el registro. Si el nivel de lenguaje sube sin que haya
subido el nivel de evidencia, se rechaza.

## Registro de afirmaciones

Toda afirmación aprobada entra en `registro/afirmaciones.md` con:

| Campo | Contenido |
|---|---|
| ID | Identificador estable |
| Afirmación | Redacción exacta aprobada |
| Nivel | [A]–[E] |
| Fuente | Referencia con DOI/PMID |
| Canal | Dónde puede usarse |
| Fecha alta | Cuándo se aprobó |
| Revisión | Fecha de próxima revisión |
| Estado | Vigente / Debilitada / Retirada |
| Piezas | Dónde se ha usado (para poder corregirlas si cae) |

Cuando una evidencia cambia, la columna *Piezas* dice exactamente qué contenido hay que
actualizar. Sin ella, un hallazgo revocado sigue vivo en el blog durante años.

## Auditoría trimestral

Heruca revisa todo lo publicado buscando:
- afirmaciones que se han endurecido con las repeticiones
- matices que se han caído por el camino
- evidencia que ha envejecido o ha sido contradicha
- afirmaciones que han cambiado de canal sin revalidación
