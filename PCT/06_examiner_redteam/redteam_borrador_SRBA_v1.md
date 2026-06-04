# Red-team del borrador SRBA (22 claims, 16 pp)
# Documento fuente: Borrador_SRBA.pdf (febrero 2026)
# Análisis: 2026-06-04

## Veredicto general

**Estructura sólida; reescritura profunda obligatoria antes del filing PCT.**
22 claims actuales → 25 claims propuestos (redistribuidos en 4 bloques A/B/C/D).
6 claims eliminados por riesgo Art. 83 / §112 (BCI, QDs, Raman, genómicos).
9 claims nuevos añadidos (multizona convencional, cold-start, adherencia,
seguridad, distribuido, sostenibilidad técnica).

---

## A. Análisis claim por claim del borrador SRBA actual

### A.1. MANTENER (con ajuste de lenguaje aséptico)

| # | Claim borrador | Diagnóstico | Acción |
|---|---|---|---|
| C1 | Sistema MEFA+sensores+IA+bucle cerrado | Sólido pero título terapéutico | Reescribir título y reformular sin "fototerapia" |
| C2 | Gemelo digital multiescala | Técnico, Alice-defensible | Mantener |
| C3 | Capa tisular Monte Carlo | Excelente | Mantener prominente |
| C6 | Motor RL como MDP | Bien formulado, supera Alice | Mantener |
| C7 | Aprendizaje federado | Excelente, blindaje RGPD/HIPAA | Mantener prominente |
| C11 | APIs HealthKit/Google Health/Oura | Concreto y técnico | Mantener |
| C12 | HRV / SpO2 / sueño | Concreto | Mantener |
| C13 | NPU Edge AI | Hardware específico, anti-Alice | Mantener |
| C14 | Fotodiodo + calibración + degradación LEDs | **Joya del borrador** | Promover a dependiente directo de C1 |
| C15 | Método principal | Sólido | Reescribir lenguaje aséptico |
| C16 | RL con función de recompensa | Bien | Mantener |
| C17 | Cronobiología (fase circadiana) | OK, anclar mejor anti-Alice | Mantener |
| C20 | Aprendizaje federado en método | OK paralelo a C7 | Mantener |
| C21 | Monte Carlo + cromóforo objetivo | Excelente technical effect | Mantener |
| C22 | CRM | Necesario US | Reformular método interno |

### A.2. ELIMINAR (riesgo alto)

| # | Claim borrador | Riesgo | Acción |
|---|---|---|---|
| TÍTULO | "fototerapia personalizada" | Art. 53(c) EPC | Reescribir título completo |
| C4 | Capa celular/genética + genómica | Sin implementación + GDPR | Convertir en opcional o eliminar |
| C5 (parcial) | Espectroscopia Raman | Sensor caro, no implementado, Art. 83 | Eliminar Raman; mantener NIRS + autofluorescencia |
| C8 | Micro-LEDs QD | Decisión D2 — sin implementación | ELIMINAR. Variante futura en descripción |
| C9 | Patrones espaciotemporales QD | Idem C8 | ELIMINAR. Reformular como multizona convencional |
| C10 | BCI + EEG | Decisión D2 — sin implementación | ELIMINAR. Divisional posterior |
| C18 | Direccionamiento individual QD | Idem | ELIMINAR |
| C19 | Método EEG + tPBM | Idem + lenguaje terapéutico | ELIMINAR |
| C26 (ESG) | QR para PDP | Trivial, prior art masivo | Eliminar como claim; mantener descripción |
| C27 (ESG) | PaaS — "los usuarios no adquieren propiedad" | Modelo de negocio puro Art. 52(2)(c) EPC | REESCRIBIR como sistema técnico de gestión remota |

### A.3. CLAIMS NUEVOS A AÑADIR

1. Control multizona del panel (LEDs convencionales, no QD).
2. Cold-start: método de generación de primer protocolo desde perfil inicial.
3. Detección de baja adherencia + notificación activa.
4. Gamificación de adherencia.
5. Perfiles multi-usuario / familiar en mismo dispositivo.
6. Sistema distribuido cliente-servidor (cloud puro, coverage US).
7. Notificaciones de seguridad anti-eritema / sobreexposición.
8. Optimización multiobjetivo (eficacia + consumo energético).
9. Mantenimiento predictivo basado en patrón de degradación.

---

## B. Tabla de mapeo borrador SRBA → claim set propuesto v0

| Claim borrador | → | Claim propuesto v0 | Etiqueta |
|---|---|---|---|
| C1 | → | C1 (reescrito) | híbrido |
| (nuevo) | → | C2 (panel 295-1050 nm) | [MU PRIORITY] |
| (nuevo) | → | C3 (módulo LED central) | [MU PRIORITY] |
| (nuevo) | → | C4 (control multizona) | [revisar MU] |
| C5 (parcial) | → | C5 (sensores NIRS+autoflu+temp) | [PCT] |
| C14 | → | C6 (fotodiodo + calibración) | [PCT] |
| C2 | → | C7 (gemelo digital) | [PCT] |
| C3 / C21 | → | C8 (Monte Carlo + cromóforo) | [PCT] |
| C6 / C16 | → | C9 (motor RL MDP) | [PCT] |
| C7 / C20 | → | C10 (aprendizaje federado) | [PCT] |
| C13 | → | C11 (NPU Edge AI) | [PCT] |
| C17 | → | C12 (cronobiología) | [PCT] |
| C11 / C12 | → | C13 (wearables + APIs) | [PCT] |
| (nuevo) | → | C14 (perfiles multi-usuario) | [parcial MU] |
| C15 | → | C15 (método principal) | [PCT] |
| (nuevo) | → | C16 (cold-start) | [PCT] |
| (nuevo) | → | C17 (adherencia + notif) | [PCT] |
| C24 (ESG) | → | C18 (optimización multiobjetivo) | [PCT] |
| (nuevo) | → | C19 (seguridad anti-eritema) | [PCT] |
| C7 / C20 | → | C20 (método aprendizaje federado) | [PCT] |
| C22 | → | C21 (CRM) | [PCT] |
| (nuevo) | → | C22 (sistema distribuido cloud) | [PCT] |
| C23+C25 (ESG) | → | C23 (sistema con PDP) | [PCT] |
| C23 (ESG) | → | C24 (mantenimiento predictivo) | [PCT] |
| C27 (PaaS reescrito) | → | C25 (gestión remota de flota) | [PCT] |

---

## C. Eliminaciones definitivas — gestión de los pilares 4 y 5

- **Pilar 4 (MEFA QD):** la descripción del SRBA defiende el QD como "innovación
  central". En la PCT, la **realización preferente principal será la MEFA basada
  en LEDs convencionales con control multizona dinámico** (parcialmente soportada
  por el MU). La realización con QDs queda como "variante futura contemplada", sin
  reivindicarla. Cuando exista implementación QD real → divisional / CIP.

- **Pilar 5 (BCI):** se elimina por completo del set PCT. Mención breve en
  descripción como "extensión futura del sistema mediante integración opcional
  con dispositivos externos de electroencefalografía portátil". Cuando exista
  implementación → divisional / CIP.

---

## D. Prior art crítico a investigar en Fase 0

Identificado en el informe de patentabilidad de software:
- **US20230218922A1** "Phototherapy Control" — Gamelin & Gross 2023, abandonada
  pero estado de la técnica destructor. **Closest prior art realista** que debe
  ser analizado claim por claim.

A complementar:
- Joovv: US10478634B2, US11247060B2, US20210077823A1
- PlatinumLED BIOMAX (identificar familia)
- Vielight: WO2018232501A1, US10537746B2
- Celluma (panel flexible patentado, identificar nº)
- Theralight: US20200316388
- Closed-loop neuro Medtronic: US10617880B2
- Jurisprudencia Alice: Cardionet v Infobionic

---

## E. Próximo paso

Producir `03_claims/PCT_EKIO_claims_v0.1.md` con las 25 reivindicaciones
redactadas según esta reestructuración, etiquetadas [MU PRIORITY] / [PCT DATE ONLY]
y con "claim width meter" 1-10 para cada una.
