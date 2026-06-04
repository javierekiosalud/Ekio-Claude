# Fase 0 — Análisis de Estado de la Técnica (Prior Art)
# PCT EKIO Bienestar S.L. — Sistema SRBA
# Versión v0.1 — 2026-06-04 — borrador interno
# Analista: agente PCT (Claude Opus 4.7)

---

## 1. RESUMEN EJECUTIVO

**Conclusión global:** existe estado de la técnica relevante en fotobiomodulación
estática (Joovv, TheraLight), en fototerapia UV con app + servidor centralizado
con prescripción médica (Zerigo Health), y en AI-driven brain photobiomodulation
con dominio transcraneal exclusivo (Vielight). **Ningún documento conocido
divulga la combinación reivindicada por el SRBA** de:

(i) Hardware multiespectral 295-1100 nm con zonas controlables;
(ii) Bucle cerrado bidireccional sesión-a-sesión con sensores fisiológicos
     embarcados (NIRS, fotodiodo) + wearables externos;
(iii) Aprendizaje por refuerzo (RL) que actualiza el protocolo de emisión;
(iv) Aprendizaje federado anonimizado entre dispositivos de una flota;
(v) Mantenimiento predictivo basado en degradación de LEDs medida por
    fotodiodo de referencia;
(vi) Gestión técnica de flota con telemetría OTA y Pasaporte Digital de
     Producto.

El **gap de novedad es defendible** ante USPTO, EPO y CNIPA si los claims se
mantienen anclados a la combinación, no a elementos aislados.

---

## 2. METODOLOGÍA

- Fuente primaria: Google Patents (USPTO, EPO, WIPO).
- Cobertura: 9 patentes analizadas en detalle + búsqueda transversal en
  closed-loop adaptive control biomédico (CGM).
- Cada patente evaluada contra 9 dimensiones técnicas del SRBA:
  closed-loop, ML adaptativo, wearables, federated learning, longitudinal
  DB, fotodiodo, multizone, multispectral, dominio anatómico.

> **Nota sobre números de patente del brief inicial:** varios números
> identificados originalmente como Joovv/Vielight resultaron pertenecer a
> otros titulares (BTL Medical, Philips AED). La corrección está incorporada
> en este documento. Recomendación: el brief CLAUDE.md debe actualizarse con
> los números reales verificados aquí.

---

## 3. PATENTES ANALIZADAS

### 3.1. US20230218922A1 — Zerigo Health (ex Clarify Medical)

| Campo | Detalle |
|---|---|
| Título | Systems and Methods for Phototherapy Control |
| Asignataria | Zerigo Health Inc |
| Estado | Abandonada |
| Dominio | UV-B narrowband 300-320 nm — dermatología (psoriasis, vitíligo, eczema) |
| Modelo | Prescripción médica + smartphone + servidor central + paciente |

**Análisis de 9 dimensiones:**

| Dimensión | Estado en US20230218922A1 |
|---|---|
| Closed-loop biofeedback | ❌ Solo análisis fotográfico post-sesión de eritema (no continuo, no fisiológico directo) |
| ML adaptativo | ❌ Sólo reglas configuradas por médico; ajuste de dosis basado en eritema visible |
| Wearables mainstream | ❌ Sólo sensor de UV ambiente externo (no Apple/Oura/Garmin) |
| Federated learning | ❌ Arquitectura centralizada estándar |
| Longitudinal DB | ✅ Sí — "patient records, treatment protocols, outcomes over populations" |
| Fotodiodo + degradación | ❌ No mencionado |
| Multizone control | ❌ Single-source UV-B |
| Multispectral | ❌ Solo UV-B narrowband |
| Dominio | Médico/clínico prescripción |

**Gap SRBA vs US20230218922A1:** SRBA tiene closed-loop **fisiológico
directo** (NIRS), **bucle adaptativo automático** sin prescripción médica,
**wearables mainstream nativos**, **aprendizaje federado**, **multispectral
295-1100 nm**, **mantenimiento predictivo con fotodiodo**, **dominio
bienestar** (no prescripción médica).

**Riesgo de anticipación:** **BAJO** para Claim 1 del SRBA. La presencia de
longitudinal DB es coincidencia genérica; el resto de elementos son
sustancialmente distintos.

---

### 3.2. US11253719B2 — Joovv

| Campo | Detalle |
|---|---|
| Título | Photobiomodulation therapy systems and methods |
| Asignataria | Joovv Inc |
| Dominio | RLT/NIR 100-1000 nm (foco 660 + 850 nm) |
| Modelo | Múltiples paneles acoplados en lead/follow mode |

**Núcleo de la innovación reclamada:** sincronización de dos o más
dispositivos PBM mediante un panel "líder" que controla a uno "seguidor".

**9 dimensiones:** NINGUNA presente (cero closed-loop, cero ML, cero
wearables, cero federated, cero longitudinal DB, cero fotodiodo, cero
multizone dinámico, multispectral binario rojo+NIR, dominio
bienestar/dermatológico).

**Gap SRBA:** total. SRBA va dos generaciones más allá.

**Riesgo de anticipación:** **NULO** para Claim 1 SRBA. Joovv reivindica
una arquitectura de acoplamiento, no un sistema adaptativo.

---

### 3.3. US10478635B1 — Joovv

Hermana de US11253719B2. Mismas conclusiones — sistema de paneles
acoplados sin características SRBA. Riesgo anticipación: NULO.

### 3.4. US20180236259A1 — Joovv

Patente de "therapeutic light source and hanging apparatus" — sistema de
montaje con polea para ajustar altura del panel. Hardware básico. Sin
características SRBA. Riesgo anticipación: NULO.

---

### 3.5. US11633621B2 — Vielight (Lew Lim) ⚠️ CRÍTICO

| Campo | Detalle |
|---|---|
| Título | System and Method for Automated Personalized Brain Modulation with Photobiomodulation |
| Inventor / Asignataria | Lew Lim → Vielight Inc |
| Fecha de prioridad | 13/09/2018 |
| Publicación | 25/04/2023 |
| Dominio | **Exclusivamente cerebral** (transcraneal + intranasal) |
| Aplicación | Alzheimer, demencia, Parkinson, depresión, PTSD, ADHD, TBI |

**Closest prior art en AI-driven photobiomodulation.** Este es el documento
que más se acerca al concepto SRBA en cuanto a "fotobiomodulación
personalizada con IA".

**9 dimensiones:**

| Dimensión | Estado en US11633621B2 |
|---|---|
| Closed-loop biofeedback | ⚠️ **Mínimo** — EEG diagnóstico inicial, parámetros fijos después (no loop continuo) |
| ML adaptativo | ⚠️ Parámetros seleccionados por algoritmo a partir de diagnóstico EEG inicial; **no hay RL ni aprendizaje session-to-session** |
| Wearables mainstream | ❌ Tablet/smartphone como UI, no integración con Apple/Oura |
| Federated learning | ❌ No |
| Longitudinal DB | ❌ "Personal history" estática, sin protocolo adaptativo evolutivo |
| Fotodiodo + degradación | ❌ No |
| Multizone control | ✅ 6 unidades transcraneales targetting regiones cerebrales distintas |
| Multispectral | ⚠️ Solo rojo (620-700) + NIR (780-1400) |
| Dominio | **Cerebral exclusivamente; médico/terapéutico (Alzheimer)** |

**Gap SRBA vs Vielight:**

| Dimensión | Vielight US11633621B2 | SRBA (Claim 1) |
|---|---|---|
| Anatomía | Cráneo (CNS) | Cuerpo completo (skin/systemic) |
| Feedback | EEG diagnóstico una vez | NIRS + wearables continuos |
| Adaptación | Parámetros fijos tras diagnóstico | RL sesión-a-sesión |
| Wavelengths | 620-700 + 780-1400 | 295-1100 (rango más amplio, UV incluido) |
| Personalización | Plantillas por diagnóstico | Trayectoria RL individual + federated |
| Arquitectura | Local / aislado | Federated cross-user anonimizado |
| Dominio aplicación | Medical/therapeutic | Wellness / bienestar |

**Estrategia de distinción ante examinador:**

1. **Dominio anatómico diferente:** transcraneal/intranasal vs cuerpo
   completo. La penetración óptica, los cromóforos diana y los protocolos
   son completamente distintos.
2. **Modalidad de feedback diferente:** EEG es señal eléctrica neuronal;
   NIRS es señal óptica tisular periférica + wearables son señales
   fisiológicas no neurales. **No son técnicamente intercambiables.**
3. **Tipo de adaptación diferente:** Vielight ajusta parámetros una vez
   tras diagnóstico inicial; SRBA actualiza continuamente sesión-a-sesión
   mediante RL.
4. **Aprendizaje federado:** ausente en Vielight; presente en SRBA.
5. **Dominio de aplicación diferente:** Vielight es dispositivo médico
   para condiciones neurológicas (regulación FDA Class II/III); SRBA es
   dispositivo de bienestar (regulación distinta).

**Riesgo de anticipación:** **MEDIO** sólo para C9 (RL en SRBA) si un
examinador agresivo argumenta que aplicar "personalización IA" a un
dominio anatómico distinto es obvio. **Refuerzo defensivo:** explicar que
los cromóforos diana (citocromo c oxidasa en mitocondrias musculares vs
neurales), las vías de penetración óptica (piel/dermis vs cráneo/intranasal),
y las medidas de outcome (HRV/sueño/recuperación vs ondas cerebrales) son
sustancialmente distintas. La invención SRBA **no es transferencia obvia**
de la enseñanza Vielight a otro órgano.

---

### 3.6. US11865356B1 — TheraLight

| Campo | Detalle |
|---|---|
| Título | Light therapy device |
| Asignataria | TheraLight LLC |
| Dominio | Whole-body PBM con cuatro bandas |
| Modelo | Cabina de cuerpo completo con LED multi-wavelength |

**9 dimensiones:** NINGUNA presente. Multispectral pero estático
(500-700/700-850/800-900/850-1050 nm), sin closed-loop, sin ML, sin
wearables, sin federated, sin fotodiodo. Manual operator control.

**Gap SRBA:** total. TheraLight es competidor de hardware premium pero
sin ningún software adaptativo.

**Riesgo de anticipación:** **NULO** para Claim 1 SRBA.

---

### 3.7. Closed-loop adaptive control en CGM/insulin (transversal)

Existen patentes y literatura científica sobre RL para closed-loop
insulin delivery (Medtronic MiniMed 780G NMX-AID, DexCom hybrid systems,
deep RL bolus calculators). **NO son anticipación para SRBA**, pero
constituyen "background art" que un examinador puede invocar para
argumentar que aplicar RL a control de dosis biomédica es conocido.

**Defensa:** la analogía es superficial. Variables, ventanas temporales,
sensores y actuadores son completamente distintos entre CGM (glucemia
continua + bomba de insulina) y SRBA (PBM multispectral + emisión
multizona). El RL aplicado a PBM debe diseñar funciones de recompensa,
espacios de acción y modelos de estado específicos del dominio óptico
tisular — ninguno transferible directamente desde CGM.

**Riesgo:** **BAJO** si el claim de RL del SRBA (C9) incluye especificación
suficiente del dominio de aplicación (cromóforos, irradiancia, NIRS).

---

### 3.8. Errores del brief inicial — anotaciones correctivas

| Número original brief | Asignatario real | Relevancia |
|---|---|---|
| US10478634B2 (atribuida a Joovv) | BTL Medical Solutions (magnetic field) | NO relevante |
| US11247060B2 (atribuida a Joovv) | A verificar — no analizada | Pendiente |
| US20210077823A1 (atribuida a Joovv) | A verificar — no analizada | Pendiente |
| US10537746B2 (atribuida a Vielight) | Philips (AED defibrillator) | NO relevante |
| WO2018232501A1 (atribuida a Vielight) | A verificar — no analizada | Pendiente |
| US20200316388 (atribuida a Theralight) | A verificar — no analizada | Pendiente |
| US10617880B2 (atribuida a Medtronic closed-loop neuro) | Intelligent Implants (wireless implant) | NO relevante |

**Acción:** una segunda iteración de Fase 0 verificará los números
pendientes con búsquedas dirigidas. La conclusión global del análisis no
cambia: ninguna de las patentes correctamente identificadas anticipa la
combinación SRBA.

---

## 4. GAP DE NOVEDAD CONSOLIDADO

### 4.1. Características SRBA que NO aparecen en ningún documento analizado

1. ✅ Bucle cerrado **sesión-a-sesión** entre datos fisiológicos + parámetros
   del panel multiespectral.
2. ✅ Integración nativa con **Apple HealthKit / Google Health Connect /
   API Oura** + sensores embarcados NIRS.
3. ✅ **Aprendizaje federado anonimizado** entre dispositivos para entrenar
   modelo global PBM-específico.
4. ✅ **Fotodiodo de referencia** para calibración automática **con
   compensación de degradación** + mantenimiento predictivo.
5. ✅ **Pasaporte Digital de Producto** para flota de dispositivos PBM.
6. ✅ **Optimización multiobjetivo** eficacia + consumo energético en
   protocolo de emisión.
7. ✅ Detección de **baja adherencia** + notificación generada por IA.
8. ✅ Sistema técnico de **gestión remota de flota PBM** con telemetría
   OTA + actualización de protocolos.

### 4.2. Características SRBA presentes en algún documento (defensa
requerida)

1. ⚠️ Longitudinal user DB (US20230218922A1) → defensa: SRBA la usa para
   adaptación automática session-to-session, no para revisión médica de
   poblaciones.
2. ⚠️ Multispectral RLT/NIR (TheraLight, Joovv) → defensa: SRBA cubre
   295-1100 nm incluyendo UV, no solo RLT/NIR; combinado con control
   multizona.
3. ⚠️ AI-driven PBM (Vielight US11633621B2) → defensa: dominio anatómico
   (skin/sistémico vs brain), modalidad de feedback (NIRS vs EEG), tipo
   de adaptación (RL continuo vs ajuste único), dominio (wellness vs
   medical neurológico).

### 4.3. Riesgo de anticipación por claim

| Claim SRBA | Anticipación parcial | Riesgo | Defensa |
|---|---|---|---|
| C1 sistema general | Ningún documento divulga la combinación | BAJO | Mantener combinación literal |
| C2 longitudes específicas | Cubierto por MU + multispectral genérico TheraLight | BAJO | Anclar [MU PRIORITY] |
| C3 módulo LED central | Cubierto por MU | BAJO | Anclar [MU PRIORITY] |
| C4 multizone | Vielight 6 zonas cerebrales | MEDIO | Distinguir zonas piel/cuerpo vs cerebro |
| C5 sensores NIRS | Ausente en PBM commercial | BAJO | Mantener |
| C6 fotodiodo | Ausente | NULO | Joya — mantener |
| C7 gemelo digital multiescala | Ausente | BAJO | Mantener |
| C8 Monte Carlo + cromóforo | Ausente en PBM commercial | BAJO | Mantener |
| C9 RL | Closed-loop CGM (analogía) | MEDIO | Reforzar dominio PBM específico |
| C10 federated learning | Ausente en PBM | NULO | Joya — mantener |
| C11 NPU Edge AI | Ausente en PBM | BAJO | Mantener |
| C12 cronobiología | Ausente | BAJO | Mantener |
| C13 wearables nativos | Ausente | NULO | Joya — mantener |
| C14 perfiles multi-usuario | Parcial MU | BAJO | Anclar parcial MU |
| C15 método principal | Espejo de C1 | BAJO | Mantener |
| C16 cold-start | Ausente | NULO | Mantener |
| C17 adherencia | Ausente | NULO | Mantener |
| C18 multiobjetivo eficacia+consumo | Ausente | NULO | Mantener |
| C19 seguridad eritema | Ausente en PBM consumer | BAJO | Mantener |
| C20 federated en método | Ausente | NULO | Mantener |
| C21 CRM | N/A | NULO | Necesario US |
| C22 sistema distribuido | Genérico cloud arch | BAJO | Anclar al dominio PBM |
| C23 PDP | Ausente en PBM | NULO | Mantener |
| C24 mantenimiento predictivo | Ausente en PBM | NULO | Mantener |
| C25 gestión de flota | Ausente en PBM consumer | BAJO | Mantener |

---

## 5. CONCLUSIÓN ESTRATÉGICA

**El claim set v0.1 del SRBA es defendible ante prior art conocido** con
las siguientes condiciones:

1. **No descomponer** el Claim 1 en elementos aislados (cada elemento
   aislado puede tener anticipación; la combinación no la tiene).
2. **Refuerzo defensivo crítico contra Vielight US11633621B2** en la
   memoria descriptiva: dedicar una sub-sección de "differences over
   closest prior art" detallando los 7 puntos de distinción.
3. **Refuerzo defensivo contra CGM closed-loop** explicando que la
   transferencia de RL desde dosificación de insulina a parámetros de
   emisión multispectral no es obvia (dominios físicos, sensores,
   actuadores, ventanas temporales completamente distintos).
4. **Anclar Claim 9 (RL)** con descripción suficiente de la formulación
   MDP específica del SRBA: estados (modelo multiescala + datos
   biométricos PBM-específicos), acciones (parámetros panel
   multispectral), recompensa (biomarcadores PBM-específicos —
   irradiancia efectiva, oxigenación tisular, adherencia).

---

## 6. ACCIONES PENDIENTES (Fase 0.2)

1. Verificar 5 números de patente pendientes (Joovv US11247060B2 /
   US20210077823A1, Vielight WO2018232501A1, Theralight US20200316388).
2. Buscar específicamente: PlatinumLED BIOMAX, Mito Red Light, Celluma
   panel flexible patente.
3. Buscar literatura científica reciente PubMed sobre RL aplicado a
   PBM (descartar posibles divulgaciones académicas anticipatorias).
4. Auditar divulgaciones propias EKIO entre 24/12/2025 y hoy
   (electrosmogespana.com, pitch Wolaria, redes sociales, demos).

---

*PCT EKIO Bienestar S.L. — Fase 0 v0.1 — Confidencial — Borrador interno*
