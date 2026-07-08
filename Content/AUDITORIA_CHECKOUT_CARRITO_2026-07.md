# AUDITORÍA — Checkout, carrito y apps de la zona de conversión
**Fecha**: 8 julio 2026 · **Método**: análisis del carrito y checkout reales (simulación de compra), inventario de apps por scripts, 13 pedidos de la última semana, señales de Clarity (dashboard 60d)
**Gap declarado**: el MCP oficial de Shopify sigue sin autenticar → no tengo el funnel exacto (sesiones → carrito → checkout → compra). Con re-auth o una captura de Analytics lo cuantifico. Los hallazgos de abajo no dependen de ese dato.

---

## A. INVENTARIO — lo que vive en tu zona de conversión

| App | Rol | Zona | Nota |
|---|---|---|---|
| **UpCart** | Drawer de carrito (app de pago ~15-30 $/mes) | Carrito | El carrito real que ve el cliente |
| **Judge.me** | Reseñas | PDP/home | ✓ La que usamos en todo el copy nuevo |
| **Loox** | Reseñas (¡segunda app de reseñas!) | PDP | ⚠️ Duplicada con Judge.me |
| **Schema Plus for SEO** | Datos estructurados | Global | ⚠️ Tercera fuente de schema Product |
| **Appstle Loyalty** | Puntos/fidelización | Global + carrito | Widget de puntos |
| **Sharpei Subscriptions** | Suscripciones | PDP | Vista en admin; ¿activa en qué productos? |
| **seQura** | Pago a plazos | PDP + checkout | ✓ Núcleo del argumento de cuotas |
| **Klaviyo** | Email/flows | Global | ✓ |
| **Chaty** | Botón flotante WhatsApp | Global | OK (no llega al checkout, es hosted) |
| **Microsoft Clarity** | Analytics | Global | ✓ |
| **TryMry** | ⚠️ Desconocida (scripts trymry-129/133) | ? | Identificar en admin → Apps |

**Checkout (pantalla de pago Shopify)**: express checkout activo (Shop Pay, PayPal, Google Pay, Apple Pay) ✓ · seQura presente ✓ · autocompletado de dirección ✓ · opt-in marketing ✓ · campo de descuento visible · **señales de propinas activas (19 refs)** ⚠️

**Pedidos (13 últimos)**: 12 Shopify Payments + 1 PayPal · envío "Estándar 0,00 €" en el 100% · **5/13 con cupón del 10%** (tres códigos distintos: ekio10, 10EKIO, des10ekio) = 154,50 € descontados en una semana · 10/13 compran como invitados

---

## B. HALLAZGOS (de más grave a menor)

### 🔴 H1 — Dos apps de reseñas + una de schema = triple inyección de datos estructurados
Judge.me **y** Loox conviven, y Schema Plus añade su propio Product schema. Consecuencias: (1) **schemas Product duplicados/contradictorios** → Google puede ignorar el rich snippet de estrellas (¡explicaría por qué no salen estrellas en las SERPs pese al CTR desastroso que documentamos!); (2) doble peso JS en cada PDP móvil; (3) doble coste mensual.
**Fix**: quedarse con Judge.me (es la del copy nuevo y la más integrada), migrar/exportar reseñas de Loox → desinstalar Loox. Configurar Schema Plus para NO duplicar el schema de producto (o generar el schema desde el tema como en las maquetas y simplificar). Validar después en validator.schema.org y Search Console → mejora de CTR gratis.

### 🔴 H2 — Fuga de cupones: ~660 €/mes regalados sin control
El 38% de los pedidos llega con un 10% de descuento, usando **tres códigos genéricos distintos** que claramente circulan por internet (Honey/Chrome los detecta, foros de cupones los publican). 154,50 € descontados solo esta semana ≈ 600-700 €/mes — sin saber qué canal lo generó. Además, el **campo de cupón visible en el checkout** invita a irse a buscar códigos a Google en el momento más delicado (fuga clásica de checkout).
**Fix**: (1) desactivar los 3 códigos genéricos; (2) sustituir por **códigos únicos de un solo uso generados por Klaviyo** (popup, flows) — mismos 10%, cero fuga, atribución perfecta; (3) para promos públicas, usar **descuentos automáticos** (se aplican solos, sin campo que rellenar); (4) los códigos de influencers/ManyChat, únicos por canal.

### 🟠 H3 — Propinas posiblemente activas en la pantalla de pago
El checkout muestra 19 referencias a "tip/propina". Si están activas (Configuración → Pantalla de pago → Propinas), estás pidiendo propina por vender un filtro EMF: fricción, extrañeza y un paso más.
**Fix (1 min)**: verificar y desactivar.

### 🟠 H4 — El drawer UpCart está infrautilizado (pagas por él y no vende)
Tienes un drawer de pago cuyo valor es precisamente vender más en el carrito, y las señales muestran poco aprovechamiento. Lo que UpCart debería estar haciendo:
- **Cross-sell inteligente en el drawer** (la mina de oro): Card en carrito → "Añade la Card de tu pareja" / Disc en carrito → "Complétalo con el Stroom Master (electricidad sucia)" / cualquier SPIRO → bombilla ámbar 17,50 € (add-on impulsivo perfecto)
- **Mensaje seQura en el drawer**: con AOV de 285 €, "o desde 23,75 €/mes" bajo el total es EL argumento — que no aparezca solo en el checkout
- **Refuerzo de garantía bajo el botón**: "✓ 90 días de garantía · devolución gratuita" (hoy el carrito casi no tiene señales de confianza: 4 menciones)
- Al ser envío gratis universal, no hay barra de progreso de envío → usarla para **regalo por importe**: "Te faltan X € para la bombilla ámbar de regalo" (umbral 150-200 €)

### 🟠 H5 — Los 10% de descuento erosionan el AOV sin estrategia
Descuento plano del 10% para todos = -10% de margen sin contrapartida. Mejor escalera: 10% solo primera compra (código único Klaviyo) · regalo físico en vez de % para umbrales · puntos Appstle como alternativa al descuento directo (ya pagas la app).

### 🟡 H6 — 10 de 13 compran como invitados y el loyalty lo sufre
Appstle Loyalty necesita clientes identificados para retener. Shop Pay ya ayuda; añadir en la página de gracias el gancho "actívate y llévate X puntos de esta compra" (Appstle lo soporta).

### 🟡 H7 — Peso JS de la zona: 8+ apps cargan en cada página
Judge.me + Loox + Appstle + UpCart + Chaty + Klaviyo + Clarity + seQura + Schema Plus. En móvil eso es INP/LCP — y ya documentamos que el 61% del tráfico muere pronto. Quitar Loox (H1) e identificar TryMry ya aligera. Auditoría de performance completa como fase 2.

### 🟡 H8 — Flow de checkout abandonado: verificar que existe y que vende
Con Klaviyo instalado, el flow de **abandoned checkout** debería estar activo con: recordatorio 1h (sin descuento, con garantía 90 días como gancho) → 24h (seQura "desde X €/mes") → 48-72h (código único si hace falta). Coordinar con Isabela. Mismo para **abandoned cart** (UpCart/Klaviyo) y **browse abandonment**.

### 🟡 H9 — TryMry: app no identificada cargando scripts
Identificarla en Admin → Apps. Si nadie sabe qué es: desinstalar (coste + peso + superficie de riesgo).

---

## C. PLAN DE ACCIÓN PRIORIZADO

### Esta semana (sin desarrollo, solo admin/config)
| # | Acción | Dónde | Impacto |
|---|---|---|---|
| 1 | Desactivar propinas (si activas) | Configuración → Pantalla de pago | Fricción fuera |
| 2 | Matar los 3 cupones genéricos → códigos únicos Klaviyo + descuentos automáticos | Descuentos + Klaviyo | ~660 €/mes recuperados + atribución |
| 3 | Elegir Judge.me, exportar reseñas de Loox y desinstalar Loox | Apps | Peso, coste, schema |
| 4 | Configurar Schema Plus para no duplicar Product schema → validar estrellas en SERP | Schema Plus | CTR orgánico |
| 5 | Identificar TryMry y decidir | Apps | Higiene |
| 6 | Verificar flow de checkout abandonado en Klaviyo (con Isabela) | Klaviyo | Recuperación |

### Próximas 2 semanas (configuración de apps)
| # | Acción | Impacto |
|---|---|---|
| 7 | UpCart: cross-sells (Card→2ª Card · Disc→Stroom Master · todo→bombilla 17,50) + seQura "desde X €/mes" + "✓ 90 días de garantía" bajo el botón | AOV +10-20% es el estándar de un drawer bien configurado |
| 8 | Regalo por umbral en el drawer (bombilla ámbar a partir de 150-200 €) | AOV |
| 9 | Gancho de cuenta + puntos Appstle en la página de gracias | Retención/LTV |
| 10 | Revisar Sharpei: ¿suscripciones activas en suplementos LAITTIN? Si no, activarlas ahí (producto consumible = suscripción natural) o desinstalar | LTV o higiene |

### Para cuantificar (necesito de ti UNA cosa)
Re-autentica el conector de Shopify en claude.ai (ajustes de conectores) **o** mándame una captura de Analytics → Informe "Conversión de la tienda online" — con eso te calculo el % exacto de abandono en carrito y en checkout y priorizo H4/H8 con números.

## KPIs a 30 días
- Tasa de conversión global: hacia el objetivo del 4% (medir baseline exacto al re-autenticar)
- % pedidos con cupón genérico: 38% → <10% (solo códigos únicos atribuidos)
- AOV: 285 € → 310 €+ (cross-sell drawer + regalo por umbral)
- Estrellas visibles en SERPs de PDPs (tras limpieza de schema): 0 → sí
