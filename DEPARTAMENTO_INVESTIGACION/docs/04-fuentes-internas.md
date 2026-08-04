# Fuentes internas y herramientas de búsqueda

Lo heredan los diez agentes. Define **qué puede consultar** el departamento y, sobre todo,
**qué peso tiene cada cosa** en la valoración de evidencia.

---

## La regla que ordena todo este documento

> **Ninguna fuente interna es evidencia. Todas son localizadores.**

NotebookLM, las referencias de `Skills/`, el material del libro, el expediente PCT y los
informes previos de Ekio sirven para **encontrar** literatura, recuperar contexto y saber qué
se ha dicho ya. **No sustituyen a la fuente primaria y no otorgan nivel de evidencia.**

Una afirmación que solo puede rastrearse hasta un documento interno de Ekio es, por
definición, **[E]** y lleva `[FUENTE DEL FABRICANTE]`. Para subir de nivel hay que llegar al
paper: autor, año, revista, n, diseño, DOI/PMID. Ver `00-nucleo-evidencia.md`.

Esto no es burocracia. Es el único cortafuegos contra el circuito cerrado: Ekio publica un
contenido → ese contenido entra en un notebook → un agente lo cita → se convierte en fuente →
se publica de nuevo, ahora "respaldado". Al cabo de dos vueltas nadie recuerda que el origen
era la propia empresa.

---

## 1. NotebookLM — corpus interno de Javier

25 notebooks con papers y documentación ya procesada. Respuestas de Gemini ancladas
exclusivamente en los documentos subidos, lo que reduce mucho la invención — pero **la
respuesta de Gemini no es una cita**.

### Uso

Skill `notebooklm`. Todo se ejecuta desde el directorio de la skill y **siempre** con el
wrapper `run.py`:

```bash
cd ~/.claude/skills/notebooklm
python scripts/run.py auth_manager.py status
python scripts/run.py notebook_manager.py list
python scripts/run.py notebook_manager.py search --query "emf"
python scripts/run.py ask_question.py --question "..." --notebook-url "https://notebooklm.google.com/notebook/..."
```

### Estado de la sesión — comprobado 2026-08-04: **caducada**

La última autenticación es del **2026-04-24**. Verificada el 2026-08-04, una consulta real
falla: Google redirige a la pantalla de acceso y la navegación nunca completa
(`Timeout 10000ms exceeded`). **Hoy el corpus no responde.**

Reconexión — la ejecuta **Javier en persona**, porque abre un navegador visible y exige
introducir sus credenciales de Google. Ningún agente debe hacer ese login:

```bash
cd ~/.claude/skills/notebooklm
python scripts/run.py auth_manager.py setup
```

Mientras la sesión esté caída, **no bloquees la investigación**: trabaja con literatura externa
y deja constancia en el informe de que el corpus interno no se ha podido consultar. Es una
limitación de cobertura, no una excusa para bajar el estándar.

### Cómo elegir notebook

Los nombres del catálogo están corruptos (`Opening notebook 2c3578b0`…): al darlos de alta se
guardó la salida de consola en lugar del título. **No te fíes del campo `name`.** Selecciona
por la etiqueta `topics`, que sí es correcta:

| Etiqueta | Notebooks | Para qué agente |
|---|---|---|
| `emf` | 8 | `emf-salud`, `sensibilidad-emf` |
| `electrosmog` | 4 | `emf-salud`, `spiro` |
| `ekio`, `contenido` | 15 | material de marca — ver aviso abajo |

**Aviso sobre `ekio` / `contenido`:** son notebooks de material propio de Ekio, no de
literatura independiente. Todo lo que salga de ahí es `[FUENTE DEL FABRICANTE]` de forma
permanente y sirve para saber *qué ha dicho Ekio*, nunca para acreditar *que sea cierto*.

### Qué preguntar y qué hacer con la respuesta

Pregunta **por localización**, no por conclusión:

- ✅ *"¿Qué estudios sobre X aparecen en estas fuentes? Dame autores, año y revista."*
- ❌ *"¿Es cierto que X mejora Y?"* — te devolverá una síntesis sin trazabilidad utilizable.

Después, **verifica cada referencia en la fuente primaria** antes de usarla. Si NotebookLM
menciona un estudio que no consigues localizar en PubMed, Europe PMC o Crossref, **no existe a
efectos de este departamento**: no se cita.

### Cuándo NO usarlo

Cuando la pregunta es sobre el estado actual de la evidencia. El corpus es una foto del día en
que se subió; no incorpora lo publicado después. Para "estado de la cuestión", literatura
externa primero, NotebookLM como complemento.

---

## 2. Literatura externa — búsqueda primaria

**No hay MCP de PubMed configurado en este entorno.** Si algún agente o skill del ecosistema
dice usarlo, está describiendo una capacidad que hoy no existe. Usa `WebSearch` y `WebFetch`
contra:

| Fuente | Para qué |
|---|---|
| `pubmed.ncbi.nlm.nih.gov` | Búsqueda primaria, PMID |
| `europepmc.org` | Texto completo abierto, exportación de citas |
| `cochranelibrary.com` | Revisiones sistemáticas — el nivel [A] real |
| `clinicaltrials.gov`, EudraCT | Ensayos registrados y, sobre todo, **ensayos con resultados no publicados** |
| `who.int`, `icnirp.org` | Posición de agencia en EMF |
| `efsa.europa.eu` | Declaraciones de salud autorizadas — indispensable para el agente 08 |
| `aemps.gob.es` | Plantas con consideración de medicamento, producto sanitario |

Registra siempre DOI o PMID. Sin identificador estable, la cita no cumple la regla de los tres
segundos de `02-formato-salida.md`.

---

## 3. Investigaciones de Ekio ya en marcha

Material propio del repositorio. **Contexto, nunca evidencia.** Consúltalo para no
contradecir lo ya publicado y para detectar afirmaciones que haya que auditar.

| Ruta | Qué es | A quién le sirve |
|---|---|---|
| `Skills/references/pbm-base-cientifica.md` | Base científica PBM ya compilada | `fotobiomodulacion`, `luz-aplicada` |
| `Skills/references/pbm-nexo-emf.md` | Nexo CEM↔PBM y tabla órgano↔λ↔horario MTC | `fotobiomodulacion`, `sintesis-mtc` |
| `Skills/references/pbm-investigadores.md` | Quién es quién en PBM | `fotobiomodulacion`, `luz-aplicada` |
| `Skills/references/spiro-producto-estrella.md` | Argumentario SPIRO | `spiro` — **material comercial, trátalo como tal** |
| `Skills/references/ciencia-ekio-temas.md` | Temario científico de marca | Heruca (agenda) |
| `LIBRO_ELECTROBIOFOTONICA/` | Libro en curso (guión maestro, capítulos, base científica de recetas) | Todos — **es canal público con nombre y apellidos** |
| `PCT/02_prior_art/` | Estado de la técnica del modelo de utilidad | `fotobiomodulacion`, `spiro` |
| `PCT/06_examiner_redteam/` | Ataques anticipados de examinador | Heruca — es el mejor escéptico interno que ya existe |
| `ekio-light-protocolos/` | Protocolos por indicación (facial, dolor) | `luz-aplicada` — verifica que cada protocolo tenga respaldo |
| `app-estudio-emf/` | Concepto de estudio EMF domiciliario | `emf-salud` |

### Dos avisos que valen más que la tabla

**El libro es el activo de mayor riesgo.** `LIBRO_ELECTROBIOFOTONICA/` va firmado y circula
durante años sin posibilidad de corregir la edición impresa. Cualquier afirmación que vaya al
libro pasa por el circuito completo — agente vertical → Heruca → registro — sin atajos.

**El PCT tiene un patrón de escritura opuesto al de este departamento.** Un documento de
patente afirma con firmeza para sostener una reivindicación. Aquí se afirma con la fuerza que
permite la evidencia. **Nunca importes lenguaje del PCT a un informe de investigación** — es
la vía más rápida a una deriva de nivel (`03-control-de-deriva.md`).

---

## 4. Frontera con el resto del ecosistema Ekio

Existen otros agentes en `~/.claude/agents/` con solape temático, sobre todo
**`fbm-elite-agent`** (fotobiomodulación) y **`ekio-comunicacion-agent`**.

Reparto, que no es negociable porque implementa la separación de poderes del `CLAUDE.md`:

| | Departamento de Investigación | Resto del ecosistema |
|---|---|---|
| Produce | Evidencia y su nivel | Contenido y decisiones comerciales |
| Formato | `02-formato-salida.md`, tres capas | Libre |
| Valida | Heruca | Javier |

El agente `fotobiomodulacion` de este departamento **establece qué sostiene la evidencia**.
`fbm-elite-agent` **escribe con ello**. Quien redacta no valida y quien valida no redacta: si
el mismo agente hace las dos cosas, el veto de Heruca no vale nada.

Cuando un agente de contenido necesite respaldo científico para una pieza pública, el camino
correcto es pedirlo al departamento y esperar el registro de la afirmación, no buscarlo por su
cuenta.

---

## 5. Etiquetas obligatorias de procedencia

Además de las de `00-nucleo-evidencia.md`, en todo informe:

- `[NOTEBOOKLM, SIN VERIFICAR]` — referencia salida del corpus que aún no has confirmado en
  fuente primaria. **No puede sobrevivir a la validación de Heruca**: o se verifica, o cae.
- `[MATERIAL INTERNO EKIO]` — procede de `Skills/`, del libro o del PCT.
- `[SIN MCP PUBMED — BÚSQUEDA WEB]` — la búsqueda se hizo por web y puede no ser exhaustiva.
  Relevante cuando afirmes que *"no hay estudios sobre X"*: sin búsqueda sistemática, esa
  afirmación es más débil de lo que parece.
