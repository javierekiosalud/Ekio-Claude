# App "Estudio EMF del Hogar" — Documento de concepto

**Fecha:** 4 julio 2026
**Estado:** MVP funcional en `app-estudio-emf/index.html` (prototipo navegable, sin backend)

---

## 1. Qué es

Una herramienta de autoevaluación guiada (3 minutos) con la que cualquier persona estudia la
contaminación electromagnética de su vivienda — focos internos (WiFi, móviles, DECT, domótica),
entorno y comunidad (antenas, redes vecinas, alta tensión), habitantes (niños, embarazo,
electrosensibles) y hábitos — y recibe:

1. **Puntuación 0-100** con semáforo de exposición (baja / moderada / alta / muy alta)
2. **Desglose por áreas** (vivienda, habitantes, dormitorio, focos internos, entorno, hábitos)
3. **Plan gratuito de higiene electromagnética** personalizado según sus respuestas
4. **Recomendación SPIRO** ajustada a su carga y perfil (con precios reales de la tienda)
5. **Recomendación Ekio Light** como capa de bienestar (fotobiomodulación)
6. **Captura de email** para enviar el informe PDF → entra en Klaviyo

## 2. Por qué encaja en el negocio

- **Lead magnet interactivo**: mucho más potente que un PDF estático — el usuario invierte
  3 minutos y recibe algo personalizado. Tasa de conversión a email esperada muy superior
  a la guía descargable actual.
- **Cualificación automática**: la puntuación y los flags (niños, antena cercana, insomnio,
  smart home…) segmentan al lead ANTES de entrar en Klaviyo → flows distintos por severidad
  y perfil.
- **Recomendador de producto**: resuelve la duda nº 1 del cliente ("¿qué Spiro necesito yo?")
  y justifica el ticket alto (Disc X 597€, Disc Ultra 929€, Pack Oasis 825€) con un
  diagnóstico previo, no con una página de producto fría.
- **Puente Spiro ↔ Ekio Light**: introduce los paneles a una audiencia que llegó por
  electrosmog (cross-sell natural: "protege + recupera").
- **Puerta a la consultoría**: puntuaciones muy altas empujan a la medición profesional
  presencial.

## 3. Motor de puntuación (v1)

- Cada respuesta suma puntos de carga (0-14). Total normalizado sobre 120 → escala 0-100.
- **Umbrales:** <25 baja · 25-44 moderada · 45-64 alta · ≥65 muy alta.
- **Flags cualitativos** que disparan recomendaciones específicas:
  `ninos`, `embarazo`, `sensible`, `sueno`, `fatiga`, `movil_mesilla`, `router_dorm`,
  `wifi24`, `mesh`, `dect`, `smarthome`, `antena_cerca`, `alta_tension`, `movil_intensivo`,
  `movil_cuerpo`, `ninos_pantallas`, `babymonitor`, `muchas_redes`, `transformador`.
- Los pesos son una primera calibración editorial. **Pendiente:** revisarlos con Javier
  (criterio técnico Noxtak/SPIRO) y con datos reales de consultorías.

## 4. Lógica de recomendación (v1)

**Reglas base (siempre, en todos los niveles):**

1. **1 SPIRO Card (97€) por cada persona de la casa con móvil propio.** Primera posición del
   stack, destacada, con cantidad y precio total (N × 97€). El cuestionario pregunta
   expresamente cuántas personas tienen móvil.
2. **Electricidad sucia en toda evaluación** (Paso 7 del cuestionario): estado de la toma de
   tierra (lo básico — sin tierra la contaminación eléctrica no tiene salida), antigüedad de
   la instalación, nº de aparatos enchufados a la vez y, lo más importante, **placas solares
   con inversor** (el inversor es el mayor generador de electricidad sucia de la vivienda).
3. **Si hay inversor solar → Pack Protección Stroom Master (655€)**: filtros para derivar a
   tierra la electricidad sucia antes de que se propague por la instalación. Es la pieza nº 2
   del stack en ese caso.
4. **Si no hay inversor → casi siempre Stroom Master Pro (220€) en el dormitorio principal.**

El informe presenta un **Stack priorizado** (orden de compra 1..N) con total, y técnicas de
venta: anclaje de precio (€/día durante un año), compra por fases ("empieza por el nº 1 y el
nº 2"), social proof suave ("el más elegido"), coste de la inacción en niveles altos, y CTA
a consultoría con medición profesional en exposición muy alta. El Socket Tester (21€) actúa
como producto de entrada de bajo compromiso cuando la tierra está sin comprobar.

**Mapa de estancias:** el cuestionario pregunta nº de dormitorios, estancias de la casa
(salón, cocina, despacho, garaje, cuarto de lavadora, bajo cubierta) y cómo se reparten los
dormitorios entre los habitantes (ej.: 3 habitaciones = principal + niños compartiendo +
despacho). El informe incluye una sección "Tu casa, estancia por estancia" con la
recomendación específica de cada una.

| Escenario detectado | Recomendación (se suma a Cards + Stroom) | Alternativa |
|---|---|---|
| Placas solares con inversor | Pack Protección Stroom Master (655€) + Medidor Electricidad Sucia (216€) para verificar | — |
| Sin inversor | Stroom Master Pro (220€) dormitorio principal | — |
| Tierra sin comprobar / enchufes sin tierra | + Ekio Socket Tester (21€) | electricista |
| Despacho / teletrabajo (o dormitorio-despacho) | + Regleta Apantallada Danell D-6700 (93€) | Pack Oficina (470€) |
| Antena <100 m o score ≥65 | SPIRO Disc Ultra (929€) | Pack Oasis (825€) |
| Smart home / mesh / score 45-64 | SPIRO Disc X (597€) | Square X (257€) |
| Score 25-44 | SPIRO Square X (257€) | — |
| Score <25 | SPIRO Square (147€) | — |
| Niños en casa | + Pack Infantil (420€) | |
| Móvil intensivo pegado al cuerpo | + Card X (167€) como upgrade de la Card | |
| Problemas de sueño | + Pack Spiro Sueño | |
| Fatiga o mal descanso | Ekio Light Deep 5 (650€) | |
| Resto | IGNIS (120€) como entrada a fotobiomodulación | |

Informe de ejemplo generado: `INFORME_EJEMPLO_ESTUDIO_EMF.pdf` (caso: adosada + inversor
solar + 2 niños → stack de 7 piezas, 2.966€, anclado a 8,13€/día).

## 5. Compliance

- Disclaimer visible: herramienta orientativa, no medición profesional ni diagnóstico médico.
- Pregunta de síntomas enmarcada como "molestias" para priorizar zonas, nunca como diagnóstico.
- Productos presentados como bienestar, sin claims terapéuticos (coherente con el criterio
  del semáforo de evidencia del agente FBM).

## 6. Roadmap propuesto

**Fase 1 — MVP embebido (1-2 semanas)**
- Pulir copy y pesos con Javier.
- Subir como página en Shopify (`/pages/estudio-emf`) o subdominio (`estudio.electrosmogespana.com`).
- Conectar el formulario final a Klaviyo (lista "Estudio EMF" + propiedades: score, nivel, flags).
- Flow Klaviyo: email 1 con informe/guía → secuencia según severidad.
- Enlaces de producto apuntando a las URLs reales con UTM (`utm_source=estudio-emf`).

**Fase 2 — Informe PDF + estancia por estancia (1 mes)**
- Generación del informe PDF personalizado (server-side o make.com).
- Modo "habitación por habitación" (dormitorio principal, habitación niños, salón, oficina)
  con plano simplificado y semáforo por estancia.
- Gatillo ManyChat: keyword ESTUDIO en Instagram → link a la app.

**Fase 3 — App instalable (PWA) (2-3 meses)**
- PWA con seguimiento: el usuario aplica el plan y re-evalúa a los 30 días (re-engagement).
- Integración de mediciones reales opcionales (el usuario introduce lecturas de un medidor).
- Historial + recordatorios de hábitos (modo avión, WiFi nocturno).
- Protocolo Ekio Light integrado (temporizadores de sesión por panel, como los protocolos
  ya escritos en `ekio-light-protocolos/`).

**Fase 4 — Comunidad/edificio**
- Estudio colaborativo de comunidad de vecinos (agregación anónima por código postal).
- Mapa de densidad de redes/antenas por zona (datos públicos de antenas del Ministerio).

## 7. Métricas de éxito

- Tasa de finalización del cuestionario (objetivo >60%)
- Tasa email capturado / estudio terminado (objetivo >40%)
- CVR estudio → compra 30 días (medir con UTM + Klaviyo)
- AOV de compradores vía estudio vs. media tienda (hipótesis: superior, por recomendación de ticket alto)

## 8. Decisiones abiertas para Javier

1. **Dónde vive la Fase 1:** página Shopify vs. subdominio. (Recomendado: página Shopify — cero
   infraestructura, píxeles ya instalados, SEO en el dominio principal.)
2. Validar **pesos del scoring** y los umbrales de recomendación de producto.
3. ¿Incluir la **consultoría presencial** como CTA explícito en nivel "muy alto"?
4. Nombre público: "Estudio EMF del Hogar", "Test de Electrosmog", "Diagnóstico EKIO"…
