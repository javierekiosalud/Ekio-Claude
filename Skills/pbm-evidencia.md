# SKILL — pbm-evidencia (Motor de Investigación Científica)
> Skill por defecto del `fbm-elite-agent` cuando hay que FUNDAMENTAR algo. Alimenta a todas las demás skills con evidencia citada y tier.

## Cuándo usarla
Tabla de evidencia sobre una λ/condición, ficha técnica de longitud de onda, estado del arte, verificación de un claim, o "¿qué dice la ciencia sobre…?".

## Herramientas (en este orden)
1. **PubMed MCP** — `search_articles` (términos MeSH) → `get_article_metadata` / `get_full_text_article` para los más relevantes. Prioriza 2020–2026, meta-análisis y RCT.
2. **NotebookLM** (skill `notebooklm`) — corpus interno de Ekio para anclar en fuentes propias.
3. **WebSearch/WebFetch** — preprints (bioRxiv/medRxiv) y novedades.
Referencias base: `references/pbm-base-cientifica.md`, `references/pbm-investigadores.md`.

## Proceso
1. Define la pregunta y los términos MeSH precisos.
2. Busca (PubMed → web). Recoge: autor, año, revista, tipo de estudio, n, hallazgo, dosimetría.
3. Asigna **tier** a cada hallazgo: 🟢 meta/RCT múltiple/consenso · 🟡 RCT aislado/piloto/cohorte/preclínico fuerte · 🔴 hipótesis/in vitro aislado/teórico.
4. Sintetiza. Nunca subas de tier una evidencia para que "suene mejor".

## Formato de salida — TABLA DE EVIDENCIA
```
PREGUNTA: [...]
λ / condición: [...]

| Estudio (Autor, Año, Revista) | Tipo (n) | Hallazgo | Dosimetría | Tier |
|---|---|---|---|---|
| ... | RCT (n=42) | ... | 810nm, 30 J/cm², ... | 🟡 |

SÍNTESIS: [2-4 frases honestas: qué está demostrado, qué es prometedor, qué falta]
NIVEL GLOBAL: 🟢/🟡/🔴
GAPS / controversias: [...]
APLICACIÓN EKIO: [producto + cómo comunicarlo dentro de Regla 5]
NEXO CEM (si aplica): [...]
```

Para ficha por longitud de onda usa el formato de `references/pbm-base-cientifica.md` §5.

## Checks de calidad
- [ ] ¿Toda afirmación tiene fuente o está marcada como teórica?
- [ ] ¿Cada hallazgo tiene tier correcto y no inflado?
- [ ] ¿Dosimetría incluida cuando existe?
- [ ] ¿Distingo "demostrado" de "en estudio"?
- [ ] ¿Cierro con aplicación Ekio + lenguaje legal correcto?
