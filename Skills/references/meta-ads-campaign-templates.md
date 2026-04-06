# Meta Ads Campaign Templates — EKIO Electrosmog España

## TEMPLATE 1 — LANZAMIENTO DE PRODUCTO

### Para usar cuando: nuevo producto, nueva temporada, nuevo pack
### Duración: 4 semanas
### Presupuesto mínimo recomendado: 1.000€

```
═══════════════════════════════════════════════════════════
SEMANA 1 — AWARENESS (10% del presupuesto)
═══════════════════════════════════════════════════════════
Objetivo: Construir audiencia para retargeting

CAMPAÑA: AW_[PRODUCTO]_[MES]
  Objetivo: Video Views o Engagement
  Audiencia: Broad (España, 28-60)

  CREATIVOS (2):
  1. Vídeo 30s — Javier presentando el producto (sin venta directa)
  2. Carrusel educativo — problema que resuelve el producto

  COPY:
  "Descubre [beneficio principal de producto].
  [Dato científico respaldado].
  → Más información en ekio.es"

  MÉTRICA OBJETIVO: CPM < €10, Video View Rate > 20%

═══════════════════════════════════════════════════════════
SEMANA 2-3 — CONVERSIÓN (75% del presupuesto)
═══════════════════════════════════════════════════════════
Objetivo: Compras directas del nuevo producto

CAMPAÑA: ASC_[PRODUCTO]_[MES]
  Tipo: Advantage+ Shopping
  Objetivo: Conversión (Purchase)
  Budget: CBO — 70% de inversión semanal

  CREATIVOS (5-8):
  1. Vídeo 30s — Hook insomnio/síntoma + solución
  2. Vídeo 30s — Hook dato científico + demo producto
  3. Estática — Precio + beneficio principal
  4. Estática — Testimonio real + precio
  5. Carrusel — 5 beneficios del producto
  (si hay, añadir: vídeo Javier, carrusel comparativa)

  COPY PRINCIPAL:
  "[Hook: dato/síntoma sorprendente]
  [Problema: agitar el dolor en 1-2 frases]
  [Solución: qué hace el producto, cómo]
  [Prueba: testimonio o dato de clientes]
  [CTA: → ekio.es/[producto] | Desde [precio]/mes con Sharpei]
  💬 Comenta [KEYWORD] para más información"

CAMPAÑA: TEST_[PRODUCTO]_[MES]
  Tipo: Manual, ABO
  Objetivo: Conversión
  Budget: ABO — 15% de inversión semanal (igual por ad set)

  Ad Sets:
  → Test Hook A (síntoma: insomnio)
  → Test Hook B (síntoma: niños/familias)
  → Test Hook C (dato científico)
  → Test Formato (estática vs vídeo)

═══════════════════════════════════════════════════════════
SEMANA 4 — CIERRE + RETARGETING (15% del presupuesto)
═══════════════════════════════════════════════════════════
Objetivo: Convertir interesados que no compraron

CAMPAÑA: RET_[PRODUCTO]_[MES]
  Tipo: Manual, CBO

  Ad Set 1 — Tier 1 (ATC/IC últimos 7d):
  Creativo: "¿Sigues pensando en [producto]? Sigue aquí."
  Copy: Urgencia legítima + alquiler Sharpei + garantía

  Ad Set 2 — Tier 2 (VC 14d + Engagement):
  Creativo: Testimonios + beneficios específicos
  Copy: Resolver las objeciones más frecuentes

  Ad Set 3 — Viewers semana 1 (viewers del vídeo de awareness):
  Creativo: Oferta directa + CTA de compra
  Copy: "Ya conoces [producto]. Es el momento de probarlo."
```

---

## TEMPLATE 2 — EVERGREEN SPIRO (Campaña permanente)

### Para usar cuando: campaña always-on de productos SPIRO
### Estructura optimizada para ASC con producto ancla SpiroDisc

```
═══════════════════════════════════════════════════════════
ESTRUCTURA PERMANENTE (revisar cada 2 semanas)
═══════════════════════════════════════════════════════════

CAMPAÑA PRINCIPAL: ASC_SPIRO_Evergreen
  Tipo: Advantage+ Shopping
  Objetivo: Purchase
  Budget: Ajustar según ROAS (ver reglas de scaling)
  Existing customer cap: 25%

  AUDIENCE DESCRIPTION (copiar literal):
  "Adultos en España de 28-65 años con interés en salud natural,
  bienestar y calidad del sueño. Personas con problemas de insomnio,
  fatiga crónica o niebla mental que buscan causas no convencionales.
  Padres y madres preocupados por la exposición de sus hijos al WiFi
  y la tecnología. Profesionales que trabajan desde casa con múltiples
  dispositivos. Personas sensibles al medioambiente y la tecnología.
  Interesados en naturopatía, medicina integrativa, bienestar holístico,
  EMF, electrosmog, contaminación electromagnética, higiene digital.
  Compradores de productos premium de salud y bienestar (100-500€)."

  CREATIVOS ACTIVOS (rotar, mínimo 8):

  SIEMPRE TENER ACTIVOS:
  ✅ Vídeo Javier — ángulo insomnio (30s)
  ✅ Vídeo Javier — ángulo niños/familias (45s)
  ✅ Estática SpiroDisc — dato impactante
  ✅ Carrusel — "5 señales de electrosmog"
  ✅ Vídeo/Estática — testimonio real

  ROTAR CADA 3-4 SEMANAS:
  🔄 Hook nuevo para el vídeo de Javier
  🔄 Nuevo ángulo (biohacking, home office, viajes)
  🔄 Nueva estática estacional
  🔄 Nuevos testimonios capturados

CAMPAÑA RETARGETING: RET_SPIRO_Evergreen
  Tipo: Manual, CBO
  Budget: 20-25% del presupuesto total SPIRO

  Ad Set 1 — Tier 1 (ATC/IC 7d):
  Copy: "Tu SpiroDisc sigue aquí. Envío gratis + 30 días de garantía."

  Ad Set 2 — Tier 2 (VC 14d):
  Copy: "¿Sabes en qué se diferencia SPIRO de todo lo demás?
  No bloquea. Filtra. [Explica diferencia en 3 frases]"

  Ad Set 3 — Email list Klaviyo (segmento leads sin compra):
  Copy: Educativo — "Antes de decidir, responde esto..."

═══════════════════════════════════════════════════════════
REGLAS DE MANTENIMIENTO EVERGREEN
═══════════════════════════════════════════════════════════
Cada semana:
  → Revisar frecuencia (si >3, añadir creativos nuevos)
  → Revisar CTR de cada creativo (kill si CTR <0.7% y CPA >2x)
  → Añadir 2-3 creativos nuevos del testing

Cada 2 semanas:
  → Auditoría rápida (capas 1, 3, 7 del Módulo 1)
  → Revisar EMQ en Events Manager
  → Actualizar audience description si hay nuevo producto

Cada mes:
  → Auditoría completa (Módulo 1 completo)
  → Revisar distribución de presupuesto
  → Retiro de creativos fatigados
  → Nuevo batch de testing (Módulo 4)
```

---

## TEMPLATE 3 — RETARGETING AVANZADO POR INTENT

### Para usar cuando: presupuesto > 1.500€/mes, tráfico suficiente para segmentar

```
═══════════════════════════════════════════════════════════
CONFIGURACIÓN DE AUDIENCIAS PERSONALIZADAS
═══════════════════════════════════════════════════════════

Crear estas Custom Audiences en Meta (actualizan automáticamente):

CA-01: [Pixel] ATC + IC — Últimos 7 días
CA-02: [Pixel] ViewContent — Últimos 14 días (excl. CA-01)
CA-03: [Pixel] ViewContent — 15-30 días (excl. CA-01, CA-02)
CA-04: [IG] Engagement — Últimos 30 días
CA-05: [FB] Engagement — Últimos 30 días
CA-06: [Klaviyo] Leads sin compra — Lista sincronizada
CA-07: [Klaviyo] Compradores — para exclusiones
CA-08: [Pixel] Purchase — Últimos 30 días (para exclusiones)

═══════════════════════════════════════════════════════════
CAMPAÑA: RET_IntentTiers_[MES]
  Tipo: Manual Sales, CBO
  Objetivo: Conversión (Purchase)

═══════════════════════════════════════════════════════════

AD SET T1 — CALIENTE (50% del presupuesto retargeting)
  Audiencia: CA-01 (ATC + IC 7d)
  Excluir: CA-07 + CA-08
  Presupuesto: 50% del total retargeting

  CREATIVOS (2-3):
  1. Estática — Producto específico + precio + urgencia
  2. Vídeo corto 15s — "Sigue aquí. Te lo guardamos."
  3. DPA (Dynamic Product Ad desde catálogo Shopify)

  AD COPY T1:
  "Quedaste a punto 🙂
  Tu [producto] sigue disponible.

  ✅ Envío gratis a toda España
  ✅ Devolución 30 días sin preguntas
  ✅ Pago a plazos disponible

  → Completar pedido en ekio.es"

AD SET T2 — TEMPLADO (30% del presupuesto retargeting)
  Audiencia: CA-02 + CA-04 + CA-05 (ViewContent + Engagement)
  Excluir: CA-01 + CA-07 + CA-08
  Presupuesto: 30% del total retargeting

  CREATIVOS (2-3):
  1. Carrusel — 5 beneficios del producto que vieron
  2. Estática — Testimonio real del producto visto
  3. Vídeo 30s — Objeciones más frecuentes respondidas

  AD COPY T2:
  "¿Tienes dudas sobre [producto]? Normal.

  Esto es lo que preguntan más:
  ❓ '¿Funciona de verdad?' → Sí, 2.000+ familias lo confirman
  ❓ '¿Y si no me gusta?' → 30 días de devolución sin preguntas
  ❓ '¿Es muy caro?' → Desde 39€/mes con Sharpei

  → Resolver todas las dudas en ekio.es/faq"

AD SET T3 — FRÍO-TEMPLADO (20% del presupuesto retargeting)
  Audiencia: CA-03 (VC 15-30d) + CA-06 (leads Klaviyo)
  Excluir: CA-01 + CA-02 + CA-07 + CA-08
  Presupuesto: 20% del total retargeting

  CREATIVOS (2):
  1. Vídeo 45s — Historia de Javier / educativo
  2. Carrusel — "El precio invisible" (contenido, no venta)

  AD COPY T3:
  "Llevo desde 2011 estudiando cómo la contaminación electromagnética
  afecta a la salud. Lo que he descubierto es importante.

  No te vendo nada hoy. Solo quiero que tengas esta información.

  → [Título del artículo de blog educativo] en ekio.es/blog"
```

---

## TEMPLATE 4 — TESTING CREATIVO SEMANAL

### Para usar cuando: cada semana, siempre activo
### Presupuesto: 10-15% del total Meta Ads

```
═══════════════════════════════════════════════════════════
CAMPAÑA: TEST_[AÑO][SEMANA]_Creative
  Tipo: Manual Sales
  Objetivo: Conversión (Purchase)
  Presupuesto: ABO — IGUAL por ad set
  Audiencia todos los ad sets: Broad España, 25-65
═══════════════════════════════════════════════════════════

REGLA: 1 anuncio por ad set. Presupuesto igual en todos.

SEMANA TIPO — LO QUE TESTEAR:
  Ad Set 1: Nuevo concepto/ángulo A
  Ad Set 2: Nuevo concepto/ángulo B
  Ad Set 3: Variación del mejor creativo actual (hook diferente)
  Ad Set 4: Nuevo formato del mejor ángulo (estática → vídeo o viceversa)

PRESUPUESTO POR AD SET:
  Mínimo: 1x CPA objetivo por día
  Óptimo: 1.5-2x CPA objetivo por día
  Ejemplo: CPA objetivo €40 → 40-80€/día por ad set

DURACIÓN:
  Mínimo: 3 días
  Óptimo: 5-7 días para significancia
  Máximo: 7 días (si no hay señal, matar)

TABLA DE EVALUACIÓN:
  | Creativo | CPA | CTR | Hook Rate | Decisión |
  |----------|-----|-----|-----------|----------|
  | A        |     |     |           |          |
  | B        |     |     |           |          |
  | C        |     |     |           |          |
  | D        |     |     |           |          |

CRITERIOS:
  → CPA < 1.5x objetivo: GANADOR → mover a ASC
  → CPA 1.5-2x: ITERACIÓN → cambiar hook, mantener concepto
  → CPA > 2x: KILL → descartar concepto, nuevo ángulo
  → CTR < 0.7%: Problema de hook/visual → hook diferente
  → Hook Rate < 20%: Primeros 3 segundos no enganchan

═══════════════════════════════════════════════════════════
PIPELINE DE IDEAS DE TESTING (banco de ángulos EKIO)
═══════════════════════════════════════════════════════════

ÁNGULOS POR PROBAR (priorizar los que no se han testeado):

Insomnio/Sueño:
  □ "Dato: 78% de españoles tienen router cerca del dormitorio"
  □ "Antes/después de dormir (sin imágenes — solo texto descriptivo)"
  □ "Lo que los médicos del sueño no buscan primero"
  □ "La causa de tu insomnio que nadie ha revisado"

Familias/Niños:
  □ "¿Cuánto tiempo pasan tus hijos frente a pantallas?"
  □ "Carta a mi hijo futuro sobre el WiFi"
  □ "Lo que aprendí sobre el WiFi cuando fui padre/madre"
  □ "El pediatra me dijo que era normal. No lo era."

PBM / Ekio Light:
  □ "La NASA, los fisios de élite y ahora tú"
  □ "Inversión vs gasto: el cálculo de 10 años"
  □ "3 meses de fisio o 1 panel Ekio Light — el análisis honesto"
  □ "Lo que la luz roja hizo por mi recuperación en 30 días"

Educativo:
  □ "La regulación española de electrosmog tiene 23 años"
  □ "¿Qué pasó cuando medí mi casa por primera vez?"
  □ "Invisible no significa inocuo — el monóxido de carbono tampoco se ve"
  □ "Entorno neurosaludable: lo que significa realmente"

Fundador:
  □ "Por qué dejé la consulta para fundar EKIO"
  □ "El paciente que cambió todo"
  □ "15 años después: lo que sé sobre electrosmog que no sabía en 2011"
  □ "La pregunta que me hicieron 500 veces y que me hizo crear EKIO"
```

---

## TEMPLATE 5 — BLACK FRIDAY / TEMPORADA ALTA

### Para usar cuando: Noviembre (preparar en octubre)
### Presupuesto: x2-3 del presupuesto habitual

```
═══════════════════════════════════════════════════════════
CALENDARIO DE ACCIÓN
═══════════════════════════════════════════════════════════

OCTUBRE (preparación):
  → Crear todos los creativos de Black Friday
  → Construir audiencias de warm leads (email + engagement)
  → Decidir oferta real (descuento % vs pack vs alquiler gratis X meses)
  → Testear creativos sin mencionar BF para tener ganadores

1-15 NOVIEMBRE (pre-calentamiento):
  → Activar campaña de awareness educativo (CPMs aún bajos)
  → Emails Klaviyo de pre-BF (lista de espera)
  → ManyChat: keyword NOVIEMBRE o BF para alertas anticipadas
  → Aumentar presupuesto retargeting (construir base Tier 1/2)

18-24 NOVIEMBRE (pre-Black Friday):
  → "Early access" para lista de email
  → Creativos teaser: "Algo está llegando a ekio.es"
  → Retargeting Tier 1 intensivo

25-27 NOVIEMBRE (Black Friday):
  → Budget máximo (x2.5-3 del habitual)
  → Creativos específicos de BF con oferta
  → Aumentar frecuencia permitida (hasta 4 en prospecting)
  → Supervisión diaria (ajustes si se agota budget antes del día)

28-30 NOVIEMBRE (Cyber Week):
  → Reducir presupuesto gradualmente
  → Creativos de "últimas horas"
  → Retargeting agresivo de quien vio pero no compró en BF

═══════════════════════════════════════════════════════════
CREATIVOS ESPECÍFICOS BLACK FRIDAY
═══════════════════════════════════════════════════════════

Creativo BF 1 — Estática:
  Visual: Fondo negro + tipografía grande amarilla/dorada
  Texto: "BLACK FRIDAY EKIO | [X]% de descuento"
  Subtexto: "Solo hasta el 27 de noviembre · Envío gratis"
  Badge: "Desde [precio con descuento] / [precio alquiler]€/mes"

Creativo BF 2 — Vídeo urgencia (15s):
  [0-5s] Texto grande: "BLACK FRIDAY EKIO"
  [5-10s] Producto + precio tachado → precio nuevo
  [10-15s] "Solo hasta el domingo. ekio.es/blackfriday"

Creativo BF 3 — Para audiencias calientes (Tier 1):
  "Llevas tiempo pensando en [producto].
  Esta semana es el momento.
  Black Friday EKIO: [X]% de descuento.
  Solo hasta el 27 de noviembre.
  → ekio.es/blackfriday"

AD COPY PRINCIPAL BF:
  "Una vez al año hacemos esto.

  Black Friday EKIO 2026:
  [Producto 1]: [precio original] → [precio BF]
  [Producto 2]: [precio original] → [precio BF]
  [Producto 3]: [precio original] → [precio BF]

  + Envío gratis en todos los pedidos
  + Sharpei desde [precio reducido]/mes

  Oferta válida hasta el domingo 27 de noviembre a medianoche.

  → Ver todas las ofertas en ekio.es/blackfriday"
```

---

## CHECKLIST DE LANZAMIENTO (antes de activar cualquier campaña)

```
TÉCNICO:
  □ CAPI activo y funcionando (verificar en Events Manager)
  □ EMQ ≥ 7 para evento Purchase
  □ Pixel activo en todas las páginas de la tienda
  □ fbclid pasando correctamente en URLs de destino
  □ UTMs configurados en todos los anuncios
  □ Catálogo de productos sincronizado (si hay DPA)

CREATIVOS:
  □ Vídeos con subtítulos
  □ Primera imagen/frame es el hook
  □ Relación de aspecto correcta por ubicación (9:16, 1:1, 4:5)
  □ Compliance revisado (sin claims prohibidos)
  □ Logo EKIO visible
  □ Copy dentro de límites (titular <40 chars, descripción <125 chars para preview)

EMBUDO POST-CLIC:
  □ Landing page cargando en <3 segundos (verificar PageSpeed)
  □ URL de destino funciona y lleva al producto correcto
  □ Browse Abandonment activo en Klaviyo
  □ Cart Abandonment activo en Klaviyo
  □ ManyChat: keyword del anuncio configurada en flujo correspondiente
  □ Shopify: stock disponible del producto anunciado

ESTRUCTURA:
  □ Naming convention correcto
  □ Presupuesto dentro de los ratios recomendados
  □ Existing customer cap configurado en ASC (25%)
  □ Exclusiones de audiencia configuradas (compradores recientes)
  □ Pixel Events correctamente mapeados al objetivo de la campaña
```
