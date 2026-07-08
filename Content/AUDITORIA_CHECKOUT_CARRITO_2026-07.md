# AUDITORÍA — Checkout, carrito y apps de la zona de conversión
**Fecha**: 8 julio 2026 · **Método**: análisis del carrito y checkout reales (simulación de compra), inventario de apps instaladas (Shopify Admin → Apps), 13 pedidos de la última semana, funnel real de Shopify Analytics (captura directa de pantalla, 8-jul)

---

## 0. EL FUNNEL REAL (dato duro — Analytics → Desglose de la tasa de conversión)

| Periodo | Sesiones | Añadido al carrito | Llegaron al pago | Completaron el pago | Tasa conversión |
|---|---|---|---|---|---|
| **Últimos 30 días** (8 jun–8 jul) | 4.446 | 169 | 111 | 41 | **0,92%** |
| Periodo más amplio (1 mar–7 jul) | 18.501 | 947 | 654 | 220 | 1,18% |

**Tasas por etapa (últimos 30 días):**
- Sesión → Carrito: **3,80%** (169/4.446) — *cayó desde el 5,12% del periodo amplio*
- Carrito → Checkout: **65,7%** (111/169) — estable (era 69,1%)
- **Checkout → Compra: 36,9%** (41/111) — *mejoró desde el 33,6%, pero sigue bajo benchmark (45-65%)*

### Lectura honesta — dónde está el problema de verdad
**No es principalmente un problema de checkout.** La fuga más grande y la que empeora es la de **arriba del funnel**: solo 3,8 de cada 100 sesiones añaden algo al carrito, y esa tasa ha caído (-26% relativo) frente al periodo más amplio. Es exactamente lo que ya diagnosticamos y estamos arreglando con el rediseño de home/colección/PDPs/SEO: snippets sin estrellas por el conflicto de schema (H1), copy débil, CTR del 0,7% en Google. **Esa sigue siendo la prioridad número 1 del negocio.**

El checkout **sí tiene una fuga real pero menor**: de 111 personas que llegan a pagar, se van **70** sin completar (63%). Con un volumen de 41 pedidos/mes, recuperar aunque sea 8-10 checkouts más al mes (subir del 37% a ~45%) es +20% de pedidos — el ajuste de UpCart de este documento sigue mereciendo la pena, pero como **prioridad 2, no como bloqueante**.

---

## A. INVENTARIO — lo que vive en tu zona de conversión (confirmado en Shopify Admin → Apps)

| App | Rol | Zona | Coste | Nota |
|---|---|---|---|---|
| **UpCart Cart Drawer** | Drawer de carrito | Carrito | 29,99 $/mes + uso | ✅ Único drawer activo — AOV.ai ya eliminada (ver H0) |
| **Judge.me Reviews** | Reseñas | PDP/home | 15 $/mes | ✓ La que usamos en todo el copy nuevo |
| **Schema Plus for SEO** | Datos estructurados | Global | 28,99 $/mes | ⚠️ Fuente de schema Product — verificar duplicidad |
| **Appstle℠ Loyalty** | Puntos/fidelización | Global + carrito | 30 $/mes | Widget de puntos |
| **Sharpei Subscriptions** | Suscripciones | PDP | Por uso | ¿Activa en los suplementos LAITTIN? |
| **Aftersell** | Upsell **post-compra** (pág. de gracias) | Post-checkout | Por uso | 🔴 **ROTA — ver H10 abajo** |
| **GOAFFPRO** | Marketing de afiliados | Global | ? | Programa de afiliados activo — sin relación confirmada con los cupones (ver H2) |
| **Chaty Chat Buttons & WhatsApp** | Botón flotante WhatsApp | Global | 15 $/mes | ⚠️ Shopify lo marca con **"Acción necesaria"** |
| **EKIO CRM Sync** / **EKIO MCP Server** | Apps propias | Backend | — | Integraciones internas, no tocan conversión |
| **Knowledge Base** | Desconocida | ? | ? | Verificar para qué se instaló |
| **Klaviyo: Email Marketing & SMS** | Email/flows | Global | — | ✓ |
| **Microsoft Clarity** | Analytics | Global | Gratis | ✓ |

*(App "TryMry" del escaneo original de scripts: probablemente el handle técnico de una de las apps de arriba — no aparece con ese nombre en el listado del admin. Sin acción.)*

**Checkout (pantalla de pago Shopify)**: express checkout activo (Shop Pay, PayPal, Google Pay, Apple Pay) ✓ · seQura presente ✓ · autocompletado de dirección ✓ · opt-in marketing ✓ · campo de descuento visible · **señales de propinas activas (19 refs)** ⚠️

**Pedidos (13 últimos)**: 12 Shopify Payments + 1 PayPal · envío "Estándar 0,00 €" en el 100% · **5/13 con cupón del 10%** (tres códigos distintos: ekio10, 10EKIO, des10ekio) = 154,50 € descontados en una semana · 10/13 compran como invitados

---

## B. HALLAZGOS (de más grave a menor)

### ✅ H0 — Doble drawer: resuelto (AOV.ai eliminada, 8-jul)
Confirmado: **AOV.ai Cart Drawer ya ha sido desinstalada**. **UpCart** queda como único drawer activo — sin conflicto de DOM/JS en la etapa de "Añadido al carrito". Hallazgo cerrado. Queda pendiente el punto original de H4: configurar bien UpCart con cross-sells, mensaje seQura y refuerzo de garantía.

### 🔴 H1 — Verificar duplicidad de schema Product (Judge.me + Schema Plus for SEO)
Judge.me gestiona las reseñas y **Schema Plus for SEO** (28,99 $/mes) también genera datos estructurados de producto. Si ambas emiten un `Product`/`Review` schema para la misma PDP, Google puede recibir señales contradictorias y descartar el rich snippet de estrellas — coherente con el CTR del 0,7% que documentamos en las PDPs pese a estar en página 1.
**Fix**: revisar en Schema Plus si tiene el módulo de reseñas de producto activado; si lo tiene, desactivarlo y dejar que solo Judge.me emita ese schema (o generarlo desde el tema, como en las maquetas nuevas). Validar en validator.schema.org y en Search Console → Mejoras → Fragmentos enriquecidos.

### 🟠 H2 — Cupones legítimos (no es una fuga), pero sin trazabilidad ni consolidación
**Corrección de Javier (8-jul)**: ekio10, 10EKIO y des10ekio **no son códigos filtrados** — son cupones que EKIO entrega deliberadamente en distintas promociones, por ejemplo para incentivar la siguiente compra. Descartado el descarte de GOAFFPRO/afiliados como causa; no hay fuga que tapar.

Redefinido el problema real: **tres nombres distintos para, aparentemente, el mismo 10%**, sin que el análisis pueda distinguir qué campaña generó cada pedido (154,50 € descontados en 5/13 pedidos de la semana, ≈600-700 €/mes en descuentos — cifra que ahora hay que leer como **coste de campaña**, no como pérdida). Preguntas abiertas para Javier/Isabela: ¿ekio10, 10EKIO y des10ekio corresponden a canales o momentos distintos (ej. abandono de carrito vs. win-back vs. newsletter), o son variantes accidentales del mismo cupón creadas en momentos distintos?
**Fix**: (1) si son el mismo propósito, consolidar en **un único código activo** con nombre memorable y desactivar los duplicados — simplifica soporte y mide mejor; (2) si cada uno pertenece a un flujo distinto (recomendado), **renombrarlos por función** (ej. `VUELVE10` para win-back, `BIENVENIDA10` para primera compra) para poder medir qué campaña convierte mejor en Klaviyo/Shopify; (3) mantener el campo de cupón en el checkout — aquí sí tiene sentido, es un canal de retención real, no una fuga.

### ✅ H3 — Propinas: descartado (verificado 8-jul)
Comprobado en Configuración → Pantalla de pago → Propinas: la casilla "Mostrar opciones de propina en la pantalla de pago" está **desmarcada**. Las 19 referencias detectadas en el código eran parte del motor estándar de checkout de Shopify, no la función activada. Sin acción — hallazgo cerrado.

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

### 🟡 H9 — Chaty marcado con "Acción necesaria" en el propio admin de Shopify
Shopify señala esta app explícitamente. Puede ser un aviso de facturación, permisos o configuración rota del botón de WhatsApp.
**Fix**: entrar en la app y resolver el aviso — 2 minutos.

### 🔴 H10 — Aftersell: rota desde hace meses, pagando sin ningún beneficio (verificado 8-jul)
Instalada el 31 de marzo, con **0 extensiones activas y 0 functions activas** (de 3 áreas disponibles cada una) — es decir, nunca ha tenido ni un solo upsell configurado. Al intentar abrir su panel de configuración, la app **crashea con un Critical Error** (`TypeError: Cannot read properties of undefined (reading 'featureFlags')`, Error ID `5e29720ea51e401aa2020ab199697283`): ni siquiera se puede configurar desde dentro. Más de 3 meses de facturación por uso sin retorno alguno.
**Fix**: (opcional, máx. 1 semana) reportar el error a soporte de Aftersell con el Error ID por si es un bug puntual; si no hay solución rápida, **desinstalar** (Admin → Apps → Aftersell → Desinstalar app). Decisión y ejecución de Javier — no es una acción que deba tomarse sin su confirmación.

---

## C. PLAN DE ACCIÓN PRIORIZADO (actualizado con el funnel real)

> Recordatorio de prioridad de negocio (sección 0): el 96% de la fuga ocurre ANTES del carrito (solo 3,8% de sesiones añaden algo). Esto se ataca con el rediseño de home/colección/PDPs/SEO ya en marcha — no con esta lista. Lo de abajo es la prioridad 2: exprimir el 37% de checkouts completados hacia el benchmark de 45-65%.

### Esta semana (sin desarrollo, solo admin/config)
| # | Acción | Dónde | Impacto |
|---|---|---|---|
| ~~1~~ | ~~Comprobar en incógnito qué drawer se ve de verdad y desinstalar el otro~~ | ✅ Hecho — AOV.ai desinstalada | Coste eliminado + conflicto resuelto |
| 2 | Desactivar propinas (si activas) | Configuración → Pantalla de pago | Fricción fuera del 63% que abandona en checkout |
| 3 | Confirmar con Isabela el propósito de cada cupón (ekio10/10EKIO/des10ekio) y consolidar/renombrar por función (ej. VUELVE10, BIENVENIDA10) | Descuentos + Klaviyo | Atribución real por campaña, no ahorro |
| 4 | Comprobar si Schema Plus duplica el Product schema de Judge.me → desactivar módulo si aplica | Schema Plus | CTR orgánico (impacto en la fuga del 96%, prioridad 1) |
| 5 | Resolver el aviso "Acción necesaria" de Chaty | Apps → Chaty | Higiene |
| 6 | Verificar flow de checkout abandonado en Klaviyo — con 70 abandonos/mes en checkout, es el ROI más rápido de todo este documento (con Isabela) | Klaviyo | Recuperación directa de las 70 personas/mes que abandonan pagando |

### Próximas 2 semanas (configuración de apps)
| # | Acción | Impacto |
|---|---|---|
| 7 | En la app de drawer que quede activa: cross-sells (Card→2ª Card · Disc→Stroom Master · todo→bombilla 17,50) + seQura "desde X €/mes" + "✓ 90 días de garantía" bajo el botón | Subir el 65,7% de carrito→checkout y aportar a completar |
| 8 | Regalo por umbral en el drawer (bombilla ámbar a partir de 150-200 €) | AOV |
| 9 | Gancho de cuenta + puntos Appstle en la página de gracias (10/13 compran como invitados) | Retención/LTV |
| 10 | Revisar Sharpei: ¿suscripciones activas en suplementos LAITTIN? Si no, activarlas (producto consumible = suscripción natural) o desinstalar | LTV o higiene |
| 11 | Aftersell: reportar el error a soporte (1 semana de margen) o desinstalar directamente | Corta el coste sin uso desde marzo |

## KPIs a 30 días (baseline real, 8 jun–8 jul 2026)
- **Sesión → Carrito**: 3,80% → 5%+ (prioridad 1 — depende del rediseño home/colección/PDP/SEO, no de este documento)
- **Carrito → Checkout**: 65,7% → 72%+ (cross-sells y confianza en el drawer que quede activo)
- **Checkout → Compra**: 36,9% → 45%+ (UpCart bien configurado, flow de abandono H8) — equivale a ~9-10 pedidos extra/mes con el volumen actual
- **Tasa de conversión global**: 0,92% → 1,3%+ combinando las tres mejoras
- Cupones consolidados por función (ekio10/10EKIO/des10ekio → nomenclatura clara) con atribución de campaña visible en Klaviyo/Shopify
- AOV: 285 € → 310 €+ (cross-sell drawer + regalo por umbral)
- Estrellas visibles en SERPs de PDPs (tras limpieza de schema): 0 → sí
