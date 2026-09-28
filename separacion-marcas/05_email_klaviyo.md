# Email marketing — Separación de marcas EKIO / Ekio Light
**Informe: 28 sep 2026 | Modo lectura, sin cambios ejecutados**

---

## 1. Foto actual de Klaviyo

### Listas (24 en total)

| ID | Nombre | Opt-in | Relevancia luz |
|----|--------|--------|----------------|
| YkLQTa | Lista de correo electrónico | double | Principal de la cuenta |
| Y64cNH | Contactos Clientify | single | Incluida en campañas semanales |
| UVNvTj | Clientify MKT (@+WhatsApp+SMS) | double | Incluida en campañas |
| RBBNLg | [BF] POP UP - Ecommcraft | single | Incluida en campañas semanales |
| RzqHsd | Pop Up - Guía + Regalo | single | Entrada top of funnel |
| Ujv637 | Pop Up Descuento | single | Entrada top of funnel |
| YrbayF | Pop up - Ekio Light | single | NUEVA (20 sep 2026) — solo EKL |
| SZpsGV | Tests - ¿Qué panel necesito? | single | Solo EKL — test de panel |
| U2cB79 | Guía Belleza y luz | single | Solo EKL (1 sep 2026) |
| SZ7gNh | Guía Bio_Regeneración | single | Solo EKL (1 sep 2026) |
| RkvCDz | ManyChat - Guía Niños | single | Neutro (electrosmog) |
| TtaaPH | ManyChat - Manual Ayuno y Luz | single | EKL (ayuno de luz) |
| WutriN | Manychat-Newsletter | single | General |
| TrEYBt | Ekio Coach - Usuarios registrados | single | App / general |
| RLxRyp | Test - Estudio del hogar | single | Electrosmog |
| TiuHYk | Test - ¿Qué Spiro necesitas? | single | Electrosmog |
| WgCMAC | URL Consultoría | single | Consultoría |
| VWXUL2 | Pop Up - Leads - Descarga App | single | App |
| YvBtZB | Embeded form Guia de Higiene | single | General |
| S523PV | Type Form | single | General |
| QVNt9p | Leads meta ads | single | General |
| Y2KTam | Soporte y ayuda | single | Soporte |
| XM2wrq | Hard Bounced | single | Hygiene |
| YB3NW7 | Teléfonos - No pueden recibir WhatsApp | single | Hygiene |

**Nota sobre tamaños**: la API de listas no devuelve el conteo de perfiles sin un endpoint adicional. Los tamaños reales de cada lista requieren una consulta separada por Isabela desde el panel. Se sabe por memoria del negocio que "12.000" son los contactos totales de la cuenta y que "Lista de correo electrónico" es la principal.

### Segmentos relevantes (13 en total)

| ID | Nombre | Uso para separación |
|----|--------|---------------------|
| RCZi5D | Compradores 1x | Base retención |
| RyXhLB | Compradores 2x | Base retención |
| Yg5MNT | Compradores 3x+ | Champions |
| Ytw8de | Compradores de SPIRO últimos 90 días | Electrosmog — no tocar para EKL |
| WitnFR | INTERESADOS SPIRO DISC/CARD no compraron | Electrosmog |
| RxbhG4 | 14 Días Comprometidos | Engagement general |
| VCD6Rb | 14 Días Comprometidos (+3 correos) | Engagement alto |
| YuLNNS | 60 Días Comprometidos | Engagement medio |
| X8UX9w | 120 Días Comprometidos | Engagement bajo |
| VGE5QE | Clientes Comprometidos | Segment por campaña concreta |
| TYkqDd | Todos los perfiles | Todo |
| W8XGb6 | No recibieron correos nunca | Cold |
| VTHgW3 | Whatsapp User | WhatsApp (creado 27 sep 2026) |

**No existe ningún segmento de compradores de productos de luz ni de personas que clicaron emails EKL.** Hay que crearlo (ver apartado 3).

### Flujos activos (27 live, 2 draft)

| ID | Nombre | Trigger | Toca luz |
|----|--------|---------|----------|
| SYu5kN | Flujo Bienvenida | Added to List | No |
| ShxBLZ | Flujo bienvenida al newsletter | Added to List | No |
| SCc5CB | Flujo de Carrito Abandonado | Metric | Hipótesis: sí (carrito mixto) |
| THT4wJ | Flujo de Abandono de Check Out | Metric | Hipótesis: sí |
| XhQwxj | Flujo Abandono de Producto | Metric | Hipótesis: sí |
| TWTJ4g | Flujo abandono producto SPIRO DISC | Metric | No (solo Spiro) |
| VvdWGp | Flujo de producto abandonado CARD | Metric | No (solo Card) |
| SSbNLy | POST COMPRA | Metric | Hipótesis: sí (post-compra mixta) |
| Rhpw4y | SHOPIFY Upsell Stroom Master | Metric | No |
| XF4JNw | SHOPIFY Upsell SpiroDisc | Metric | No |
| UAUCtp | Pop Up - Ekio Light | Added to List | Sí — solo EKL |
| TqVTqi | Recurso - Guía Belleza y luz | Added to List | Sí — solo EKL |
| VsqMVF | Recurso - Guía Bioregeneración | Added to List | Sí — solo EKL |
| UwpyYz | Flujo - Test Panel - Envío resultado | Metric | Sí — solo EKL |
| RGgPXW | Flujo - Test - Estudio Hogar - Envío resultado | Metric | No |
| WHfd5M | Flujo - Test - Qué Spiro - Envío Resultado | Metric | No |
| RuDDZe | Score Sensibilidad Electromagnética | Metric | No |
| TUYs5M | Many Chat - Guía para niños | Added to List | No |
| Vt7rQH | ManyChat Guía de Ayuno de Luz | Added to List | Sí — EKL adyacente |
| XrNSmZ | Bienvenida URL Consultoría | Added to List | No |
| S9wKpx | No han recibido mail | Added to List | No |
| QYF9tv | Pop Up - Ekio Coach | Added to List | No |
| Xu98KV / W3rLxE / WZsAye / XQGE2U | EFEIA Cuestionarios A-D | Metric | No |
| WyeLqD | [BF] Flujo Abandono de Sitio | Metric | Posiblemente |
| VX3nWR | [BF] Flujo Bienvenida (DRAFT) | Added to List | No |
| SRRAFW | WS CONSENTMENT (DRAFT) | Added to List | No |

### Verificación del flujo de carrito abandonado

El flujo SCc5CB (Flujo de Carrito Abandonado) tiene trigger_type "Metric" y fue actualizado el 16 jul 2026. Contiene 3 emails + 1 WhatsApp + delays. La API no expone directamente el metric_id del trigger sin una llamada adicional al endpoint de flow-actions con campos específicos que esta sesión de lectura no devolvió.

**Hallazgo previo (sesión anterior)**: el flujo comprobaba el evento "Placed Order" de WooCommerce, no "Started Checkout" de Shopify. Esto significaría que el carrito abandonado en realidad se dispara cuando alguien completa un pedido en WooCommerce (plataforma ya abandonada), por lo que el flujo puede estar sin tráfico o disparando incorrectamente.

**Estado actual (hipótesis)**: la última actualización es jul 2026 y Shopify estaba activo ya en esa fecha. Isabela debe confirmar en el panel de Klaviyo > Flow SCc5CB > Settings > Trigger qué métrica específica lo dispara (Shopify "Checkout Started" o WooCommerce "Placed Order").

**Riesgo**: si el trigger sigue siendo WooCommerce, este flujo no está recibiendo tráfico y representa revenue perdido. Corregirlo a "Checkout Started" de Shopify es urgente, independientemente de la separación de marcas.

---

## 2. Opciones de arquitectura

### Opción A — Una sola cuenta Klaviyo, dos integraciones Shopify

Klaviyo permite conectar múltiples tiendas Shopify a la misma cuenta. Los perfiles quedan unificados y los eventos de cada tienda se etiquetan con la fuente.

**Pros:**
- Cero coste adicional (no hay plan extra)
- Los perfiles actuales conservan su historial completo
- Los flujos de electrosmog siguen funcionando sin cambios
- Puedes segmentar "compró en ekiolight.com" con un simple filtro de tienda origen
- La reputación del dominio de envío ya está construida (emails.electrosmogespana.com o similar)
- Se lanza antes de Black Friday sin calentamiento de dominio nuevo
- Isabela gestiona todo desde un mismo panel

**Contras:**
- Los emails de EKL salen del mismo dominio de envío que EKIO (electrosmog)
- Si el volumen aumenta mucho, las métricas de las dos marcas se mezclan
- Hay que usar etiquetas o naming conventions muy claros para separar flujos y campañas
- Ekio Light no tiene su propia identidad de remitente ("de: Ekio Light") desde el primer día — se puede añadir un alias de remitente distinto pero comparte la misma IP de envío

### Opción B — Cuenta nueva para ekiolight.com

**Pros:**
- Identidad completamente separada desde el primer email
- Métricas y revenue 100% atribuibles a EKL sin mezcla
- Dominio de envío propio (ekiolight.com) refuerza la marca

**Contras:**
- Costo: plan Klaviyo nuevo (~45-150 €/mes según contactos)
- Calentamiento de dominio nuevo: 4-6 semanas de envíos gradualmente crecientes antes de poder enviar a toda la lista sin riesgo de spam. Con Black Friday el 27 nov, iniciar en octubre sería el límite
- No puedes copiar perfiles de la cuenta actual (RGPD: el consentimiento se dio para electrosmogespana.com, no para ekiolight.com)
- La lista de EKL empieza en 0 en la nueva cuenta; solo crece con opt-ins voluntarios
- Doble configuración, doble mantenimiento para Isabela

### Recomendacion

**Para Black Friday 2026: Opcion A (misma cuenta, dos tiendas Shopify).**

Razones: el plazo es imposible para la Opcion B (27 nov es en 8 semanas; el calentamiento de dominio necesita al menos 4-6 semanas y la tienda ekiolight.com aún no existe). La Opcion A está operativa en días. Ekio Light ya tiene flujos en la cuenta actual (Pop Up EKL, Guía Belleza, Guía Bioregeneración, Test Panel) que funcionan bien.

**A partir de enero 2027**: evaluar la migración a cuenta propia si el volumen de EKL justifica el coste (~400+ contactos activos únicamente de luz). El proceso sería: construir la lista de EKL durante Q4 con la campaña de "nuestra nueva casa" + flujos propios, y cuando tenga masa crítica, crear la cuenta nueva con un subdominio ya calentado (ej. mail.ekiolight.com).

---

## 3. Identificar y construir la audiencia de luz (RGPD)

### Quiénes son los interesados en luz (a construir como segmento)

En la cuenta actual se puede identificar la audiencia de luz con estos criterios combinables:

**Tier 1 — Compradores confirmados de luz** (los más valiosos):
- Métrica "Ordered Product" (o "Placed Order") con filtro de nombre de producto = "Core", "Deep 5", "Bio Regen", "Bio Spectrum", "IGNIS", "bombilla roja", "bombilla amarilla", "DUSK"
- Segmento a crear: "Compradores de luz - todos" (modelo igual que el segmento Ytw8de de SPIRO)

**Tier 2 — Clickers de emails EKL** (interesados sin compra):
- Métrica "Clicked Email" donde la campaña es de tipo EKL (las campañas de la cadencia EKL llevan "EKL" en el nombre)
- Segmento: "Clicaron al menos 1 email EKL" — 180 días

**Tier 3 — Visitaron páginas de luz** (vía Klaviyo tracking):
- Métrica "Viewed Product" con filtro de nombre = productos de luz (modelo del segmento WitnFR)
- Segmento: "Vieron producto de luz sin comprar" — 90 días

**Tier 4 — Descargaron recurso de luz**:
- Están en las listas: U2cB79 (Guía Belleza y luz), SZ7gNh (Guía Bio_Regeneración), TtaaPH (ManyChat - Manual Ayuno y Luz), SZpsGV (Test panel)
- Son los leads más calificados para la invitación a Ekio Light

### Cómo invitarlos a Ekio Light respetando el RGPD

La ley exige que el consentimiento sea específico para cada marca. No se puede añadir a nadie a la lista de ekiolight.com sin que lo haya pedido expresamente, aunque ya estén suscritos a electrosmogespana.com.

**Proceso correcto en 3 pasos:**

Paso 1. Crear una landing en ekiolight.com con formulario de opt-in ("Quiero recibir novedades de Ekio Light") antes de enviar ninguna campaña de EKL desde ese dominio. La landing puede recibir tráfico desde los emails de EKIO mientras se está en la Opcion A.

Paso 2. Enviar desde la cuenta actual (electrosmogespana.com) una campaña de "nuestra nueva casa" al segmento de interesados en luz (Tiers 1-4). El CTA lleva a la landing de ekiolight.com para que se suscriban voluntariamente. Cada persona que hace clic y se registra da un consentimiento nuevo y válido para la nueva marca.

Paso 3. Los que se suscriban en ekiolight.com entran a la lista oficial de EKL. Los que no lo hagan siguen recibiendo contenido EKL (newsletters EKL de la cadencia actual) desde electrosmogespana.com hasta que decidan migrar o no.

**Texto de asunto para la campaña de invitación** (máx. 5 palabras):
- "Ekio Light nace hoy"
- "Nuestra nueva casa de luz"
- "Te invitamos a Ekio Light"

---

## 4. Flujos mínimos para ekiolight.com antes de Black Friday

### Flujos necesarios en la cuenta actual para EKL (Opcion A)

Todos estos flujos se crean en la misma cuenta de Klaviyo pero etiquetados como "EKL" y disparados por eventos de la tienda Shopify de ekiolight.com.

| Flujo | Trigger | Prioridad | Estado actual |
|-------|---------|-----------|---------------|
| Bienvenida EKL | Added to List "Pop up - Ekio Light" | CRITICO | Existe (UAUCtp) — revisar si está completo |
| Carrito abandonado EKL | Checkout Started (ekiolight.com) | CRITICO | No existe — crear desde cero |
| Post-compra EKL | Placed Order (ekiolight.com) | CRITICO | No existe — crear desde cero |
| Abandono de producto EKL | Viewed Product (ekiolight.com) | Importante | No existe |
| Win-back EKL | Sin compra en 90 días | Post-BF | No existe |

El carrito abandonado y el post-compra son los dos flujos que generan más revenue en cualquier tienda nueva y deben estar listos el día que ekiolight.com acepte pagos.

### Calendario de emails — Lanzamiento y Black Friday

Supuesto: ekiolight.com en producción 1 nov 2026. Black Friday 27 nov 2026.

---

FASE 1 — PRELANZAMIENTO (1-10 oct)

Objetivo: construir la lista propia de EKL antes del lanzamiento.

Semana del 6 oct (Lunes - cadencia EPI, Miércoles - FJA, Jueves - EKO, Sábado - EKL)

Email EKL - sábado 10 oct 9:00
Asunto: "Ekio Light llega pronto"
Asunto B: "Luz roja. Nueva casa."
Lista: todos los interesados en luz (Tiers 1-4 + lista EKL actual)
Texto:
---
Hola,

Tenemos una novedad grande.

Ekio Light va a tener su propia tienda: ekiolight.com.

Allí podrás comprar todos nuestros paneles y bombillas de luz roja, seguir las últimas noticias sobre terapia de luz y hablar con nosotros sobre tu caso.

Si quieres ser de los primeros en saberlo todo, apúntate aquí:
[BOTÓN: Quiero estar en la lista de Ekio Light]

Javier Andrés
EKIO
---

---

FASE 2 — APERTURA (semana del 3 nov)

Email EKL - sábado 8 nov 9:00
Asunto: "Ya está abierta"
Asunto B: "Ekio Light está en marcha"
Lista: suscriptores de la nueva lista EKL + Tiers 1-4
Texto:
---
Hola,

Ya puedes visitar ekiolight.com.

Hemos creado una tienda solo para la luz. Sin mezclar con los medidores ni con los SPIRO.

Esta semana tenemos precio especial de apertura:
- 10% en todos los paneles con el código EKIOLIGHTYA

Solo hasta el viernes.

[BOTÓN: Ver paneles]

Javier Andrés
---

---

FASE 3 — BLACK FRIDAY (semana del 24 nov)

Para EKIO (electrosmogespana.com):

Email EPI - lunes 24 nov 9:00
Asunto: "El viernes bajan los SPIRO"
Lista: comprometidos 14 días + 120 días
Texto breve: anuncio de descuento SPIRO Card / Disc para el viernes.

Email FJA - miércoles 25 nov 9:00
Asunto: "Mi regalo de Black Friday"
Lista: todos los comprometidos
Texto: historia personal de Javier + producto estrella Stroom Master a precio especial.

Email EKO - jueves 26 nov 9:00
Asunto: "Mañana empieza BF"
Lista: todos los comprometidos
Texto: recordatorio urgencia + stock limitado.

Email EPI extra - viernes 27 nov 9:00
Asunto: "BF arranca hoy"
Lista: todos los comprometidos

Email cierre - domingo 29 nov 9:00
Asunto: "Último día de descuentos"

---

Para EKIO LIGHT (ekiolight.com) — misma semana:

Email EKL - lunes 24 nov 9:00
Asunto: "El viernes bajan los paneles"
Lista: suscriptores EKL + compradores de luz

Email EKL - jueves 26 nov 9:00
Asunto: "Mañana empieza en Ekio Light"

Email EKL - viernes 27 nov 9:00
Asunto: "BF Ekio Light empieza"

Email EKL - domingo 29 nov 9:00
Asunto: "Último día en Ekio Light"

Recomendación de descuento EKL para BF: 15% en Core y Deep 5 (los de mayor volumen). No descuento en BioRegen7 ni BioSpectrum11 (ticket alto, comprador informado, no necesita presión de precio).

---

## Decisiones que necesito de Javier

1. ¿Confirmas la Opción A (misma cuenta Klaviyo, dos Shopify) para el Black Friday, con posible migración en enero 2027?

2. ¿Isabela puede verificar esta semana el trigger exacto del flujo de carrito abandonado (SCc5CB) y confirmar si usa evento de Shopify o WooCommerce?

3. ¿Cuándo queda lista la landing ekiolight.com para recibir el tráfico de la campaña de "nuestra nueva casa"? (Debe estar antes del email del 10 oct)

4. ¿El descuento de apertura es 10% o diferente? ¿Y el de Black Friday para EKL?

5. ¿Se va a usar un remitente diferente para los emails de Ekio Light? Por ejemplo "Javier de Ekio Light" vs "Javier de EKIO". Técnicamente se puede hacer en la misma cuenta con un alias de remitente distinto.

6. La cadencia EKL actual (newsletters de los sábados) ¿va a EKL standalone o también a los suscriptores generales de EKIO durante la fase de transición?
