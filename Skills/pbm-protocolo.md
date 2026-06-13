# SKILL — pbm-protocolo (Protocolos Terapéuticos por Condición)
> Genera protocolos de uso de PBM por condición, con dosimetría, sinergias y panel Ekio recomendado.

## Cuándo usarla
"Protocolo para [condición]", "¿cómo usar el panel para…?", parametrización de uso, base para manuales de uso de los paneles.

## Antes de empezar
1. Funda la evidencia con la skill `pbm-evidencia` (no inventes dosis).
2. Consulta `references/pbm-base-cientifica.md` (ventanas/dosimetría), `references/pbm-productos.md` (panel) y `references/pbm-nexo-emf.md` (MTC + nexo CEM).
3. **Regla 5:** si el destino es público/manual → lenguaje de bienestar; "tratamiento" solo en contexto clínico interno.

## Formato de salida
```
CONDICIÓN / OBJETIVO DE BIENESTAR: [...]
Mecanismo fisiopatológico (breve): [...]
Nexo mitocondrial: [sí/no + cómo]
Nexo CEM (si aplica): [...]
Nivel de evidencia PBM: 🟢/🟡/🔴 (nº estudios)

PARÁMETROS:
  λ principal / secundaria: [Xnm / Xnm]
  Irradiancia: [X mW/cm²]   Fluencia: [X J/cm²]
  Tiempo: [X min]   Distancia panel: [X cm]   Área: [...]
  Frecuencia: [X/sem]   Duración ciclo: [X sem]
  ⚠️ Hormesis: más NO es mejor. Contraindicaciones: [...]

SINERGIAS: suplementación · nutrición · MTC · aromaterapia · fitoterapia
PANEL EKIO RECOMENDADO: Deep 5 / Bio Regén 7 / Bio Spectrum 10
REFERENCIAS: [citas con DOI + tier]
```

## Seguridad (siempre)
- Fotosensibilidad / fármacos fotosensibilizantes, embarazo, cáncer activo (cautela), epilepsia (luz pulsada), tiroides/ojos (protección), fototipo en módulos UV.
- Disclaimer de bienestar; recomendar consulta profesional cuando proceda.

## Checks
- [ ] Dosimetría con fuente y dentro de rango terapéutico.
- [ ] Tier honesto.   [ ] Contraindicaciones incluidas.   [ ] Lenguaje legal correcto.
