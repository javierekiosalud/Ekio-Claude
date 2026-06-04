# FASE 6 — Checklist de calidad final
# PCT EKIO Bienestar S.L. — Sistema SRBA
# Versión: v0.1 — 2026-06-04
# Ejecutado sobre: claim set v0.2, memoria v0.1, figuras spec v0.1,
# prior art v0.1, examiner red-team v0.1, email Patricia v1

---

## A. CLAIMS

### A.1. Defensibilidad jurisdiccional

| # | Comprobación | Estado | Evidencia |
|---|---|---|---|
| A.1.1 | Claim 1 supera Alice two-step (USPTO §101) | ✅ | Red-team v0.1 §C1 |
| A.1.2 | Claim 1 tiene carácter técnico explícito (EPO Art. 52) | ✅ | Red-team v0.1 §C1 |
| A.1.3 | Claim 1 NO contiene lenguaje de método de tratamiento (EPO Art. 53(c)) | ✅ | Verificación manual realizada |
| A.1.4 | Claim 1 tiene TSP completo (CNIPA) | ✅ | Red-team v0.1 §C1 |
| A.1.5 | Claim 16 (método) formulado como control de dispositivo, no terapia | ✅ | Memoria §15-16, claim verbatim |
| A.1.6 | Existe claim de CRM (claim 21) para cobertura US de software puro | ✅ | Claim set v0.2 C21 |
| A.1.7 | Existe claim de sistema distribuido / servidor IA (claim 22) | ✅ | Claim set v0.2 C22 |
| A.1.8 | Claim 19 (método) ya no contiene pasos sobre cuerpo humano (Art. 53(c)) | ✅ | Movido a C15 sistema en v0.2 |

### A.2. Soporte y bloqueo de prior art

| # | Comprobación | Estado | Evidencia |
|---|---|---|---|
| A.2.1 | Todas las claims dependientes tienen soporte explícito en descripción | ✅ | Memoria §6-15 |
| A.2.2 | C4 multizone reforzado contra Vielight US11633621B2 | ✅ | Claim v0.2 + memoria §3.2 (7 puntos) |
| A.2.3 | C9 RL especifica algoritmo (PPO/PG/A-C/DQN) | ✅ | Claim v0.2 §9(d) |
| A.2.4 | Memoria contiene 5 puntos distinción vs CGM closed-loop | ✅ | Memoria §8.5 |
| A.2.5 | Memoria contiene 7 puntos distinción vs Vielight | ✅ | Memoria §3.2 (i)-(vii) |
| A.2.6 | Memoria analiza Zerigo US20230218922A1 | ✅ | Memoria §3.3 |
| A.2.7 | Memoria reconoce y delimita MU U202532624 | ✅ | Memoria §3.1, §3.4 |

### A.3. Realizaciones comercialmente valiosas reivindicadas

| # | Comprobación | Estado | Claim |
|---|---|---|---|
| A.3.1 | Perfiles multi-usuario / familia reivindicados | ✅ | C14 |
| A.3.2 | UV-A / UV-B reivindicados (parte de las longitudes) | ✅ | C2 |
| A.3.3 | Aprendizaje colectivo anonimizado reivindicado | ✅ | C10 + C20 |
| A.3.4 | Fotodiodo + calibración + degradación reivindicado | ✅ | C6 |
| A.3.5 | Cronobiología circadiana reivindicada | ✅ | C12 |
| A.3.6 | Optimización multiobjetivo reivindicada | ✅ | C19 (método) |
| A.3.7 | Pasaporte Digital de Producto reivindicado | ✅ | C23 |
| A.3.8 | Mantenimiento predictivo reivindicado | ✅ | C24 |
| A.3.9 | Gestión de flota (ex-PaaS) reivindicada | ✅ | C25 |

### A.4. Reglas absolutas de redacción

| # | Comprobación | Estado |
|---|---|---|
| A.4.1 | CERO uso de "tratamiento" en claims | ✅ |
| A.4.2 | CERO uso de "terapéutico/terapia" en claims | ✅ |
| A.4.3 | CERO uso de "curación" en claims | ✅ |
| A.4.4 | CERO uso de "diagnóstico" en claims | ✅ |
| A.4.5 | CERO uso de "médico/clínico" en claims | ✅ |
| A.4.6 | CERO uso de "enfermedad/patología/síntoma" en claims | ✅ |
| A.4.7 | CERO uso de "resonancia biofotónica" en claims (sólo branding externo) | ✅ |
| A.4.8 | CERO uso de "PaaS / como servicio / suscripción" en claims | ✅ |
| A.4.9 | CERO referencias a BCI / quantum dots / Raman / genómica en claims | ✅ |

---

## B. MEMORIA DESCRIPTIVA

### B.1. Estructura

| # | Comprobación | Estado | Sección |
|---|---|---|---|
| B.1.1 | Campo de la invención presente y aséptico | ✅ | §2 |
| B.1.2 | Estado de la técnica con análisis closest prior art | ✅ | §3 |
| B.1.3 | Problema técnico que se resuelve formulado | ✅ | §4 |
| B.1.4 | Descripción general con signos de referencia consolidados | ✅ | §5 (35 signos) |
| B.1.5 | Descripción detallada por componente | ✅ | §6 |
| B.1.6 | Sección autónoma motor IA ≥ 3 páginas | ✅ | §7 |
| B.1.7 | Descripción RL con MDP completo | ✅ | §8 |
| B.1.8 | Descripción aprendizaje federado | ✅ | §9 |
| B.1.9 | Descripción cronobiología computacional | ✅ | §10 |
| B.1.10 | Descripción optimización multiobjetivo | ✅ | §11 |
| B.1.11 | Descripción sistema distribuido y gestión de flota | ✅ | §12 |
| B.1.12 | Descripción Pasaporte Digital de Producto | ✅ | §13 |
| B.1.13 | Descripción mantenimiento predictivo | ✅ | §14 |
| B.1.14 | Descripción sistema de seguridad fisiológica | ✅ | §15 |
| B.1.15 | Descripción de figuras (7 figuras descritas) | ✅ | §16 |
| B.1.16 | Realización preferente end-to-end con parámetros concretos | ✅ | §17 |
| B.1.17 | ≥ 5 ejemplos de aplicación | ✅ | §18 (5 ejemplos) |
| B.1.18 | Ventajas técnicas cuantificables | ✅ | §19 |
| B.1.19 | Aplicabilidad industrial | ✅ | §20 |
| B.1.20 | Abstract ≤ 150 palabras | ✅ | §21 |

### B.2. Citas científicas para enablement

| # | Comprobación | Estado | Cita |
|---|---|---|---|
| B.2.1 | Cita Monte Carlo tejido cutáneo | ✅ | Welch & Van Gemert 2011 |
| B.2.2 | Cita MCML | ✅ | Wang & Jacques 1995 |
| B.2.3 | Cita cronobiología wearables | ✅ | Hesse et al. 2020 |
| B.2.4 | Cita aprendizaje federado | ✅ | McMahan et al. 2017 (FedAvg) |
| B.2.5 | Cita estándares seguridad fotobiológica | ✅ | IEC 62471 / IEC 60601-2-83 |

### B.3. Etiquetado de prioridad

| # | Comprobación | Estado |
|---|---|---|
| B.3.1 | Materia [MU PRIORITY] correctamente identificada (C2, C3) | ✅ |
| B.3.2 | Materia [parcial MU] correctamente identificada (C4, C14) | ✅ |
| B.3.3 | Materia [PCT DATE] correctamente identificada (resto) | ✅ |
| B.3.4 | Memoria reconoce diferencias con MU original (sin pérdida de prioridad) | ✅ |

### B.4. Lenguaje aséptico (idem A.4 — verificación cruzada)

| # | Comprobación | Estado |
|---|---|---|
| B.4.1 | CERO palabras prohibidas en toda la memoria | ⚠️ Ver nota |
| B.4.2 | Ejemplos de aplicación sin lenguaje terapéutico | ✅ |
| B.4.3 | Nota explícita en Ejemplo 5 (dolor crónico) sobre no-diagnóstico | ✅ |

> **Nota B.4.1:** La memoria menciona el término "fotobiomodulación" o
> "PBM" en algunas referencias al sector y al estado de la técnica.
> Este término es **técnico**, no terapéutico stricto sensu, pero
> Patricia debe validar su uso en la versión final. Alternativa más
> conservadora: usar "modulación celular mediante radiación luminosa
> no ionizante" siempre. La memoria v0.1 usa esta formulación en §2
> (Campo) y mixta en §3 (Estado de la técnica). Decisión de Patricia
> requerida.

---

## C. FIGURAS

| # | Comprobación | Estado | Figura |
|---|---|---|---|
| C.1 | Fig. 1: diagrama de bloques del sistema completo | ✅ Especificada | F1 |
| C.2 | Fig. 2: diagrama de flujo del método con bucle | ✅ Especificada | F2 |
| C.3 | Fig. 3: bucle de retroalimentación bidireccional | ✅ Especificada | F3 |
| C.4 | Fig. 4: arquitectura interna del motor IA | ✅ Especificada | F4 |
| C.5 | Fig. 5: panel multiespectral con zonas + sensores | ✅ Especificada | F5 |
| C.6 | Fig. 6: arquitectura distribuida cloud | ✅ Especificada | F6 |
| C.7 | Fig. 7: Pasaporte Digital de Producto | ✅ Especificada | F7 |
| C.8 | Dibujos físicos producidos | ⏳ Pendiente | Encargo a ilustrador |
| C.9 | Cumplimiento normas USPTO 37 CFR 1.84 documentado | ✅ | Figuras spec §Instrucciones |
| C.10 | Cumplimiento normas EPO Reglas 46-49 documentado | ✅ | Figuras spec §Instrucciones |
| C.11 | Cumplimiento normas CNIPA documentado | ✅ | Figuras spec §Instrucciones |

---

## D. ESTRATEGIA PCT

### D.1. Decisiones estructurales

| # | Comprobación | Estado | Evidencia |
|---|---|---|---|
| D.1.1 | ISA objetivo: EPO (vía prioridad española) | ✅ Decidido | Brief v1.1 §2.3 |
| D.1.2 | Materia de prioridad vs materia nueva correctamente segregada | ✅ | Etiquetado en claims y memoria |
| D.1.3 | Fase nacional objetivo documentada | ✅ | ES, US, EP, CN, JP, KR, CA, UK |
| D.1.4 | Sin inconsistencias con el MU U202532624 en descripción del hardware | ✅ | Memoria §3.1 + §6.1 |
| D.1.5 | Filing target julio 2026 confirmado | ✅ Decisión D4 | Brief v1.1 §8 |
| D.1.6 | Variantes especulativas reservadas para divisional/CIP | ✅ | Memoria §17 (realización preferente) + variantes |

### D.2. Cuestiones abiertas pendientes con Patricia

| # | Cuestión | Estado | Email §  |
|---|---|---|---|
| D.2.1 | Fecha estimada publicación BOPI U202532624 | ⏳ A consultar | A.1 |
| D.2.2 | Validez de estrategia de prioridad parcial | ⏳ A consultar | B.1 |
| D.2.3 | Soporte MU para C4 "pluralidad de zonas" | ⏳ A consultar | (R1 red-team) |
| D.2.4 | Encaje técnico de PaaS reformulado | ⏳ A consultar | C.2 |
| D.2.5 | Integrar sostenibilidad en PCT principal o separar | ⏳ Confirmado | C.3 |
| D.2.6 | Retirar BCI/QDs/Raman/genómica de PCT inicial | ⏳ Confirmar | D |
| D.2.7 | Cotización FTO preventivo | ⏳ A consultar | E |
| D.2.8 | Auditoría divulgaciones EKIO necesaria | ⏳ A iniciar | F |

---

## E. LENGUAJE Y FORMA

| # | Comprobación | Estado |
|---|---|---|
| E.1 | Terminología inglesa entre paréntesis en términos técnicos clave | ✅ Parcial (HRV, SpO₂, NIRS, MDP, etc.) |
| E.2 | Versión del borrador etiquetada en cada documento | ✅ Todas v0.1 o v0.2 |
| E.3 | Resumen ≤ 150 palabras, sin lenguaje terapéutico | ✅ Memoria §21 (cumple) |
| E.4 | Sin notas editoriales ni preguntas abiertas en el texto principal | ⚠️ Hay notas internas en cursiva (deben eliminarse antes de filing) |
| E.5 | Numeración consistente entre claims, memoria y figuras | ✅ |
| E.6 | Signos de referencia consistentes (35 signos consolidados) | ✅ |

---

## F. ESTADO CONSOLIDADO DE ENTREGABLES

| Entregable | Versión | Líneas | Estado | Archivo |
|---|---|---|---|---|
| Brief del agente PCT | v1.1 | — | ✅ Cerrado | [01_brief/](01_brief/AGENTE_PATENTES_PCT_SRBA_v1.1.md) |
| Email inicial Patricia | v1 | 180 | ✅ Listo para enviar | [08_correspondencia/](08_correspondencia/email_inicial_Patricia_v1.md) |
| MU U202532624 procesado | — | — | ✅ Archivo + texto extraído | [99_docs_recibidos/](99_docs_recibidos/) |
| Red-team borrador SRBA | v1 | 184 | ✅ Cerrado | [06_examiner_redteam/](06_examiner_redteam/redteam_borrador_SRBA_v1.md) |
| Análisis prior art | v0.1 | 350 | ✅ Cerrado | [02_prior_art/](02_prior_art/PCT_EKIO_prior_art_analysis_v0.1.md) |
| Claim set | v0.2 | 615 | ✅ Cerrado (sustituye v0.1) | [03_claims/](03_claims/PCT_EKIO_claims_v0.2.md) |
| Examiner red-team claims | v0.1 | 707 | ✅ Cerrado | [06_examiner_redteam/](06_examiner_redteam/examiner_redteam_claims_v0.1.md) |
| Memoria descriptiva | v0.1 | 1247 | ✅ Cerrado | [04_memoria/](04_memoria/PCT_EKIO_memoria_v0.1.md) |
| Spec de figuras | v0.1 | — | ✅ Cerrado | [05_figuras/](05_figuras/PCT_EKIO_figuras_spec_v0.1.md) |
| Checklist final | v0.1 | (este) | ✅ Cerrado | [07_checklist/](07_checklist/) |

### F.1. Volumen total

- **Líneas Markdown:** ~ 4.500
- **Documentos:** 10 documentos principales + 7 PDFs aportados + MU + texto MU extraído
- **Cobertura temática:** estado de la técnica (sí), claims (sí), memoria descriptiva (sí), figuras (sí — sólo specs textuales), examiner red-team (sí), checklist (sí), correspondencia (sí — pendiente envío).

---

## G. ACCIONES PENDIENTES (post-cierre interno)

### G.1. Acciones del cliente (EKIO)

1. ⏳ **Revisar y aprobar** el email v1 antes de enviar.
2. ⏳ **Enviar email a Patricia García** con paquete completo adjunto.
3. ⏳ **Confirmar implementación real** del hardware reivindicado (NIRS,
   fotodiodo, NPU embarcado, comunicación BLE/MQTT). Si alguno no está
   implementado y no hay roadmap 12 meses, evaluar reformulación.
4. ⏳ **Auditoría de divulgaciones propias** entre 24/12/2025 y filing
   target (R5).
5. ⏳ **Encargar dibujos técnicos** a ilustrador profesional tras
   aprobación de Patricia (lead time 2-4 semanas).
6. ⏳ **Confirmar título PCT definitivo** con Patricia.

### G.2. Acciones de Patricia García

1. ⏳ Validar estrategia de prioridad parcial MU → PCT.
2. ⏳ Confirmar fecha estimada de publicación BOPI del MU.
3. ⏳ Validar formulación aséptica de claims y memoria.
4. ⏳ Validar reformulación del PaaS como gestión técnica de flota.
5. ⏳ Recomendar ilustrador técnico.
6. ⏳ Cotización del scope completo (PCT + fase nacional 8 jurisdicciones).
7. ⏳ Validar timing julio 2026 vs alternativas.

### G.3. Acciones del agente PCT (siguiente iteración)

1. Pendiente: integrar feedback de Patricia en claim set v0.3.
2. Pendiente: actualizar memoria con sugerencias de Patricia (v0.2).
3. Pendiente: producir versión EN para filing PCT (ISA = EPO).
4. Pendiente: actualizar checklist a v0.2 tras revisión.

---

## H. RIESGOS RESIDUALES Y MITIGACIÓN

| # | Riesgo | Probabilidad | Severidad | Estado mitigación |
|---|---|---|---|---|
| H.1 | Publicación BOPI MU antes filing | Alta (sin info Patricia) | 🔴 Crítica | Filing julio 2026 vs deadline a confirmar |
| H.2 | Vielight US11633621B2 obviousness en C4/C9 | Media | Alta | Memoria §3.2 (7 puntos) + §8.5 (5 puntos) |
| H.3 | §112/Art. 83 enablement | Baja | Alta | Memoria cubre los 8 requisitos |
| H.4 | Implementación real de NIRS/fotodiodo/NPU no confirmada | Media | Alta | Pendiente confirmación cliente |
| H.5 | Auto-anticipación por divulgaciones EKIO | Media | Alta | Auditoría pendiente |
| H.6 | CGM closed-loop como transversal | Baja | Media | Memoria §8.5 |
| H.7 | Art. 82 unidad de invención | Baja | Media | Bloques cohesivos en torno a motor IA + bucle cerrado |
| H.8 | Coste fase nacional 8 jurisdicciones | Media | Media | Cotización pendiente Patricia |

---

# I. VEREDICTO FINAL

✅ **El paquete PCT interno está listo para revisión por Patricia
García**, condicionado a:

(i) Validación legal de la estrategia de prioridad parcial y del
lenguaje aséptico;

(ii) Auditoría de divulgaciones propias EKIO previa al filing
(riesgo R5);

(iii) Confirmación de implementación real del hardware reivindicado
(NIRS, fotodiodo, NPU, BLE);

(iv) Confirmación de fecha BOPI del MU para fijar deadline operativo;

(v) Encargo de dibujos técnicos profesionales conforme a las
especificaciones de [05_figuras/](05_figuras/PCT_EKIO_figuras_spec_v0.1.md).

**Tiempo estimado hasta filing PCT:** 4-8 semanas tras envío a Patricia,
asumiendo 2 iteraciones de revisión + producción de dibujos.

**Filing target:** julio 2026 — alcanzable si Patricia confirma viabilidad
en próximos 7 días.

---

*PCT EKIO Bienestar S.L. — Fase 6 checklist v0.1 — Confidencial —
Borrador interno*
