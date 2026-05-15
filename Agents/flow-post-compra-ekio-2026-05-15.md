# Flujo Post-Compra EKIO — Diseño completo

> Secuencia post-compra adaptada de los frameworks world-class (Klaviyo oficial,
> Athletic Greens, Allbirds, Ten Thousand, Fullscript, Nine.am, Drip) al contexto
> EKIO: ticket alto, educación EMF, AppStle Loyalty activo, funnel ascendente
> Card→Disc→Master→Deep 5, suplementos Laittin como cross-sell.

---

## 1. PRINCIPIOS APLICADOS DE LAS TOP BRANDS

| Principio mundial | Fuente | Cómo lo aplicamos en EKIO |
|---|---|---|
| Post-purchase emails tienen OR 17% más alto que cualquier otro automation | Klaviyo benchmark | Usar el momento de máxima atención para educar + activar loyalty |
| 30-Day Repeat Purchase Rate es el KPI primario | Nine.am | Diseño en torno a 2ª compra dentro de 30d |
| Ventana óptima review: día 10-14 (cliente ya formó opinión) | Klaviyo, Nine.am | Email 5 a los 12 días post-delivery |
| Loyalty enrollment funciona mejor inmediatamente post-checkout | Klaviyo | Email 1 (día 0) activa AppStle Points |
| Athletic Greens: NO hard sells, secuencia psicológica | Drip examples | Email 4 (día 7) = solo soporte, cero venta |
| 56% compradores son influidos por UGC positivo | Nine.am | Pedir review CON foto, incentivo en puntos |
| Subscription upgrade beats discount | Nine.am | Email 6: cross-sell suplementos con suscripción |
| Cada nuevo cliente cuesta 5-25× más que retener uno | Estándar industry | Justifica inversión en este flow |
| Lift de 5% en retención = +25-95% en profits | Bain & Co | OKR alineado |

**Conclusión EKIO**: 7 emails en 30 días, ramas por producto comprado, integración total con AppStle + Sharpei + Javier como figura accesible.

---

## 2. CONFIGURACIÓN TÉCNICA EN KLAVIYO

### Trigger
- **Métrica**: `Placed Order` (Shopify) → ID `SbbUjV`
- **NO USAR** la métrica Placed Order WooCommerce (`VUxvmA`) — es legacy y ya no se dispara
- **Filtros del flow trigger**:
  - `Has not been in flow in the last 60 days` (evita doble disparo si compra dos veces seguidas)
  - `Email Marketing > Has consented` (cumplimiento RGPD)

### Conditional splits clave

**Split 1 — Por VALOR del pedido** (tras Email 1):
- Rama A: `value < 100€` (Bombilla, SpiroCard, Detector, Bombilla amarilla, etc.) — funnel ascendente agresivo
- Rama B: `100€ ≤ value < 400€` (SpiroDisc, Square, Stroom Master, Packs entrada) — educación + cross-sell estándar
- Rama C: `value ≥ 400€` (Deep 5, BR7, FS10, Pack Oasis) — white glove, mensaje personal de Javier

**Split 2 — Por PRODUCTO comprado** (en Email 6, cross-sell):
- Compró bombilla → recomienda SpiroCard
- Compró SpiroCard → recomienda SpiroDisc + Stroom Master
- Compró SpiroDisc/Square → recomienda Square X + Stroom Master Pro
- Compró Stroom Master → recomienda Deep 5 (con Sharpei alquiler 59€/mes)
- Compró Deep 5 → recomienda Bio Regen 7 o suplementos Laittin
- Compró cualquier hardware EMF → cross-sell SISTEMÁTICO de suplementos Laittin

**Split 3 — Primera compra vs Repeat** (en Email 7):
- Primera compra: invitación al programa referidos (más cálido)
- Repeat: agradecimiento VIP, acceso a Consultoría EKIO 360

### UTMs en TODOS los enlaces

```
?utm_source=klaviyo
&utm_medium=email
&utm_campaign=post-compra
&utm_content=email-{N}-{nombre-corto}
```

Ejemplo: `https://electrosmogespana.com/products/spiro-disc?utm_source=klaviyo&utm_medium=email&utm_campaign=post-compra&utm_content=email-6-cross-sell-disc`

### Configurar `tracking_options.add_tracking_params = true` para CADA email del flow

### Excluir de este flow:
- Quien esté ahora mismo en flow de Carrito/Checkout Abandonado
- Quien esté en flow Bienvenida (los nuevos compradores del welcome que aún no compraron)
- Bounced segment + Hard Bounced list

---

## 3. SECUENCIA COMPLETA — 7 EMAILS

```
DÍA 0 → Email 1 (THANK + LOYALTY ACTIVATION)
DÍA 2 → Email 2 (EDUCATION — qué esperar)
DÍA delivery → Email 3 (SETUP — cómo activarlo)
DÍA delivery+7 → Email 4 (CHECK-IN — solo soporte)
DÍA delivery+12 → Email 5 (REVIEW REQUEST + puntos bonus)
DÍA delivery+18 → Email 6 (CROSS-SELL siguiente escalón funnel)
DÍA delivery+28 → Email 7 (SUPLEMENTOS LAITTIN + Consultoría/Referidos)
```

---

## 4. EMAILS — COPY COMPLETO

---

### 📩 EMAIL 1 — Día 0 (Thank You + Loyalty Activation)

**Trigger**: Inmediatamente al dispararse Placed Order
**Objetivo**: Confirmar compra + activar AppStle Loyalty + reducir buyer's remorse + onboarding emocional

**Subject A**: `Tu pedido EKIO está confirmado — y has ganado {{ event.extra.points_earned|default:"puntos" }} ✨`
**Subject B**: `Acabas de dar el paso. Esto es lo que pasa ahora.`

**Preview Text**: `Aquí tienes el detalle de tu pedido + tus primeros puntos EKIO desbloqueados.`

**From Name**: `Javier de EKIO`
**From Email**: `salud@electrosmogespana.com`

**Body**:

```
Hola {{ first_name|default:"" }},

Has hecho algo que la mayoría no hace: pagar el precio visible para dejar de pagar el invisible.

Tu pedido #{{ event.extra.order_number }} está confirmado y en preparación.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━

**TU PEDIDO**

{{ event.extra.line_items }}
[Bloque dinámico Klaviyo con los productos]

Total: {{ event.extra.total|currency_format }}

Fecha estimada de entrega: 2-4 días laborables en península.

[BOTÓN: SEGUIR MI PEDIDO →]
(link al tracking de Shopify)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━

**HAS GANADO TUS PRIMEROS PUNTOS EKIO**

Por esta compra has acumulado **{{ points|default:"X" }} puntos EKIO** (2 puntos por cada €1).

Eso significa que ya tienes camino andado hacia tu próximo descuento. Los puntos no caducan en tu primer año.

[BOTÓN: VER MIS PUNTOS Y RECOMPENSAS →]
(link a /pages/programa-fidelidad o widget AppStle)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━

**ESTOY AQUÍ**

Te escribe Javier, fundador de EKIO. Si tienes cualquier duda mientras esperas tu pedido, responde a este email. Lo leo yo.

También puedes escribirme directamente por WhatsApp aquí: [WhatsApp Javier]

Bienvenido a la mayor red de hogares electromagnéticamente higiénicos de España.

Javier

P.D. En 48 horas te mando algo importante: lo que tu cuerpo está a punto de empezar a sentir cuando llegue tu {{ event.extra.first_product_title }}. No es lo que crees.
```

**KPIs objetivo**:
- OR: 70%+ (post-compra premium)
- CR: 25%+ (tracking + loyalty)
- Unsub rate: < 0.2%

---

### 📩 EMAIL 2 — Día 2 (Education — qué esperar)

**Trigger**: 48h después del Placed Order
**Objetivo**: Educar mientras el producto está en tránsito. NO vender. Solo ciencia.

**Subject A**: `Lo que te va a pasar las próximas 3 semanas`
**Subject B**: `Tu cuerpo lleva años recibiendo una señal que ahora va a apagarse`

**Preview Text**: `Por qué los primeros 21 días con EKIO son distintos. Y qué buscar.`

**From Name**: `Javier de EKIO`

**Body**:

```
Hola {{ first_name|default:"" }},

Mientras tu pedido viaja hacia tu casa, quiero adelantarte algo importante:

**Tu cuerpo lleva años adaptándose a una sobreexposición electromagnética que nadie le ha contado.**

No te lo digo yo. Lo dicen 25.000 estudios en PubMed (puedes buscarlo: "electromagnetic fields" + cualquier síntoma cotidiano que tengas).

El International Agency for Research on Cancer (OMS) clasificó los campos electromagnéticos de baja frecuencia como **posibles cancerígenos** desde 2002.

Esto es **el precio invisible** del que nadie habla:

→ La fatiga que no se cura durmiendo
→ El insomnio aunque hagas todo bien
→ La niebla mental que aparece sin razón
→ La piel que no responde a tratamientos
→ La inflamación que no baja con dieta

━━━━━━━━━━━━━━━━━━━━━━━━━━━━

**QUÉ ESPERAR LAS PRÓXIMAS 3 SEMANAS**

Cuando llegue tu {{ event.extra.first_product_title }}, no esperes un cambio de un día para otro. Esto no es magia. Es coherencia electromagnética.

**Días 1-7**: Tu sistema nervioso autónomo empieza a relajarse. Puede que duermas más profundo desde la primera noche. O puede que tardes una semana.

**Días 7-14**: Empiezas a notar la diferencia más en lo que NO sientes que en lo que sientes. Menos dolor de cabeza. Menos cansancio extraño. Menos "días raros".

**Días 14-21**: Tu cuerpo recalibra. Aquí es donde la mayoría de nuestros clientes dicen: "ahora entiendo".

━━━━━━━━━━━━━━━━━━━━━━━━━━━━

**MIENTRAS LLEGA, LEE ESTO**

He preparado una guía de Higiene Electromagnética. Es la que entrego a mis pacientes desde hace 10 años. Te la mando gratis:

[BOTÓN: DESCARGAR GUÍA DE HIGIENE ELECTROMAGNÉTICA (PDF) →]
(link a /pages/descarga-guia-higiene-electromagnetica)

Si tienes a alguien en casa con sensibilidad EMF (hijos, pareja, padres mayores), léela con ellos.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Cualquier duda, responde a este email. Te leo yo.

Javier

P.D. En el próximo email te explico cómo activar tu producto en 5 minutos cuando llegue, y los 3 errores que hace la mayoría las primeras horas.
```

**KPIs objetivo**:
- OR: 55%+
- CR: 15%+ (descarga guía)
- Unsub rate: < 0.3%

---

### 📩 EMAIL 3 — Día del DELIVERY (Setup — cómo activarlo)

**Trigger**: `Fulfilled Order` (Shopify) — la mejor opción porque dispara cuando Shopify confirma entrega
**Alternativa**: 5-7 días después del Placed Order si no hay evento de entrega
**Objetivo**: Setup paso a paso. Reducir devoluciones. Activar uso real.

**Subject A**: `Tu EKIO ha llegado. Cómo activarlo en 5 minutos.`
**Subject B**: `Cómo NO usar tu {{ event.extra.first_product_title }} (errores que hace la mayoría)`

**Preview Text**: `3 pasos para que empiece a funcionar desde el primer día.`

**From Name**: `Javier de EKIO`

**Body**:

```
{{ first_name|default:"Hola" }},

Tu EKIO ya está en tu casa. Ahora viene lo importante: **cómo activarlo bien**.

Te dejo el setup en 3 pasos. Tarda 5 minutos.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━

[Bloque dinámico por producto comprado — usar conditional split en Klaviyo]

**SI COMPRASTE SPIRO Card o Card X:**

1. Desenvuélvelo y colócalo entre tu móvil y la funda. O en la parte trasera del teléfono si no usas funda.
2. Llévalo SIEMPRE. La SPIRO Card no tiene batería ni mantenimiento — es tecnología pasiva basada en filtrado armónico.
3. **El error más común**: pensar que "no nota nada". El filtrado SPIRO no se siente al instante; se siente en lo que deja de pasar (menos cansancio al final del día tras 10h con el móvil).

**SI COMPRASTE SPIRO Disc / Disc X / Disc Ultra:**

1. Colócalo en el centro de la habitación donde más tiempo pasas (dormitorio o sala).
2. Es pasivo: no necesita enchufe. Cobertura ~5m de radio (Disc) / 8m (X) / 12m (Ultra).
3. **Error común**: esconderlo. El SPIRO Disc no se ve mal — déjalo a la vista para activar el efecto recordatorio (un cliente protegido tiene mejor higiene tecnológica que uno que olvida).

**SI COMPRASTE STROOM MASTER PRO:**

1. Enchúfalo en el cuadro eléctrico principal o en la habitación donde duermes.
2. Va al primer enchufe libre. No necesita configuración.
3. La luz tarda 2-3 segundos en estabilizarse. Es normal.
4. **Error común**: enchufarlo en regletas. **Va siempre al enchufe directo de pared.**

**SI COMPRASTE EKIO LIGHT DEEP 5 / 7 / FULL SPECTRUM 10:**

1. Colócalo a 30-50 cm de tu cuerpo desnudo (lo más cercano que puedas tolerar sin molestia visual).
2. Empieza con sesiones de 5 minutos. Sube progresivamente hasta 20 minutos (Deep 5) o 30 minutos (Deep 7 / FS10).
3. **Mejor momento**: por la mañana al despertar, o 2 horas antes de dormir.
4. **Error común**: usarlo todos los días desde el día 1. Empieza con 3-4 sesiones/semana las primeras 2 semanas, luego escala.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━

**VÍDEO DE SETUP (90 SEGUNDOS)**

He grabado un vídeo rápido para que veas exactamente cómo lo coloco yo en casa:

[BOTÓN: VER VÍDEO DE SETUP →]
(link a YouTube/Vimeo o página dedicada)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━

**SI ALGO NO VA COMO ESPERAS**

Responde a este email o escríbeme directamente por WhatsApp: [enlace WhatsApp]

Lo leo personalmente. No paso por filtros.

Javier

P.D. Si compraste un producto Ekio Light, en una semana te mando los protocolos exactos por objetivo (recuperación deportiva, sueño, piel, fatiga crónica). Espera ese email.
```

**KPIs objetivo**:
- OR: 75%+ (tienen el producto en mano, atención máxima)
- CR: 30%+ (ver vídeo + responder)
- Reducción de devoluciones: -40% típicamente

---

### 📩 EMAIL 4 — Día 7 post-delivery (Check-in — solo soporte)

**Trigger**: 7 días después del email 3
**Objetivo**: Soporte puro. CERO venta. Construir confianza.

**Subject A**: `¿Cómo va con tu EKIO esta semana?`
**Subject B**: `Una pregunta directa (sin venta, lo prometo)`

**Preview Text**: `Una semana usando EKIO. ¿Algo que no esté funcionando como esperabas?`

**From Name**: `Javier (sí, el de verdad)`

**Body**:

```
Hola {{ first_name|default:"" }},

Una semana después de que llegara tu {{ event.extra.first_product_title }}, te escribo solo por una razón:

**Quiero saber si todo va bien.**

No te voy a recomendar nada nuevo. No te voy a empujar a comprar más. Solo te pregunto:

**¿Estás usándolo como pensabas?**

Las 3 cosas que pasan habitualmente esta semana:

1. **Lo estás usando perfecto y empiezas a notar diferencias**. Bien. Sigue así. La curva sube las próximas 2 semanas.

2. **Lo tienes guardado en un cajón "para cuando me organice"**. No pasa nada. Pero responde a este email contándome dónde se atascó y te ayudo a integrarlo en tu rutina.

3. **No notas nada y tienes dudas**. También responde. Hay cosas que se ajustan en 5 minutos de conversación y cambian todo.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━

**RECURSO ÚTIL**

Si tienes un momento, mira la sección de Preguntas Frecuentes que tenemos sobre {{ event.extra.first_product_category }}:

[BOTÓN: VER PREGUNTAS FRECUENTES →]
(link contextual al producto comprado)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━

**ESCRÍBEME**

En serio: responde a este email con tu situación. Tardo entre 12 y 24h en contestar personalmente.

O por WhatsApp si lo prefieres: [enlace WhatsApp]

Javier

P.D. Si tu día a día con EKIO va perfecto y no necesitas nada, no hace falta que respondas. Pero si dudas... aquí estoy.
```

**KPIs objetivo**:
- OR: 50%+
- Reply rate: 5%+ (este es el KPI clave, no clicks)
- Unsub rate: < 0.2%

---

### 📩 EMAIL 5 — Día 12 post-delivery (Review request + puntos bonus)

**Trigger**: 12 días después del email 3
**Objetivo**: Solicitar review en ventana óptima + boost AppStle Loyalty

**Subject A**: `¿Cómo lo está sintiendo tu cuerpo? (+ 200 puntos por contármelo)`
**Subject B**: `Necesito tu opinión sincera — y te regalo 200 puntos EKIO`

**Preview Text**: `Ayuda a otras personas a decidirse. Tu experiencia importa.`

**From Name**: `Javier de EKIO`

**Body**:

```
{{ first_name|default:"Hola" }},

Llevas casi 2 semanas con tu {{ event.extra.first_product_title }}. Ya tienes opinión de verdad.

Y tu opinión vale oro.

No por mí (que también) sino por todas las personas que están donde tú estabas hace 14 días: con la duda, con el "¿y si no funciona?", con el miedo a invertir y arrepentirse.

**Tu reseña les da la respuesta que necesitan.**

━━━━━━━━━━━━━━━━━━━━━━━━━━━━

**Y POR DEJÁRMELA, +200 PUNTOS EKIO**

He activado un bonus en tu cuenta:

- **Reseña con foto** del producto en tu casa: **+200 puntos** (=10€ en descuento)
- **Reseña sin foto**: +100 puntos

Los puntos se cargan automáticamente en tu cuenta cuando publiques la reseña.

[BOTÓN: DEJAR MI RESEÑA Y GANAR 200 PUNTOS →]
(link directo al producto comprado con anchor #reviews + UTM)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━

**SI VAS A SER HONESTO, ESCRIBE DE VERDAD**

No quiero reseñas "todo perfecto, 5 estrellas". Quiero la realidad:

- Qué te ha sorprendido (bien o mal)
- Cuándo lo notas y cuándo no
- Si lo recomendarías a alguien en concreto

Las reseñas honestas son las que convencen. Las reseñas perfectas las ignora todo el mundo (incluido Google).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━

**SI TIENES UN PROBLEMA**

Si tu experiencia no está siendo buena, **NO dejes la reseña primero**. Responde a este email y lo arreglamos. Después, si quieres, escribe la reseña.

Javier

P.D. Si compartes tu reseña con foto en Instagram y nos etiquetas (@electrosmog_espana), te subimos a la web. Visibilidad a cambio de visibilidad.
```

**KPIs objetivo**:
- OR: 55%+
- CR (click al review): 15-20%
- Review submission rate: 8-12% (vs 1-3% sin incentivo)

---

### 📩 EMAIL 6 — Día 18 post-delivery (Cross-sell siguiente escalón funnel)

**Trigger**: 18 días después del email 3
**Objetivo**: Llevar al cliente al siguiente paso del funnel de valor con lógica condicional

**Subject A**: `El siguiente paso (cuando estés listo)`
**Subject B**: `Lo que el {{ event.extra.first_product_title }} hace por ti — y lo que NO`

**Preview Text**: `Cómo completar tu protección sin que tu casa sea un laboratorio.`

**From Name**: `Javier de EKIO`

**Body — RAMA según producto comprado**:

#### Si compró BOMBILLA o producto < 30€:

```
{{ first_name|default:"Hola" }},

Tu {{ event.extra.first_product_title }} es el primer paso. Pero solo eso: el primero.

Lo que te protege a ti en movimiento (al coger el móvil 200 veces al día) es la **SPIRO Card**.

77€. Va contigo, en tu bolsillo. No tiene mantenimiento.

Por el camino que ya llevas, tienes ahora mismo {{ points }} puntos EKIO. Aplicados a la Card, te quedan en {{ price_after_points }}€.

[BOTÓN: VER LA SPIRO CARD →]
```

#### Si compró SPIRO Card o producto 30-100€:

```
{{ first_name|default:"Hola" }},

La SPIRO Card te protege a ti. Pero hay un sitio donde TÚ no puedes estar y tu cuerpo sí lo recibe: tu casa cuando duermes.

8 horas al día tu sistema nervioso se está reparando — o intentándolo, mientras está rodeado de wifi, contadores inteligentes, dispositivos en standby y cableado eléctrico activo.

**SPIRO Disc** cubre toda la habitación. **Stroom Master Pro** limpia la electricidad sucia del cuadro.

Juntos = tu dormitorio se vuelve un santuario electromagnético.

[BOTÓN: VER SPIRO DISC (205€) →]
[BOTÓN: VER STROOM MASTER PRO (219€) →]

O ahorras ambos en el **Pack Hogar SPIRO** (277€ vs 425€ por separado):
[BOTÓN: VER PACK HOGAR →]

Con tus {{ points }} puntos EKIO, te queda en {{ price_after_points }}€.
```

#### Si compró SPIRO Disc/Square/Stroom o producto 100-400€:

```
{{ first_name|default:"Hola" }},

Tu hogar ya tiene el filtrado electromagnético del SPIRO.

Pero queda **la otra mitad** que la mayoría nunca activa: la **regeneración celular activa**.

La luz roja a longitudes específicas (660nm + infrarrojo cercano) revierte el daño oxidativo que el electrosmog ha ido acumulando en tus mitocondrias.

**EKIO Light Deep 5** es el dispositivo de fotobiomodulación clínica más accesible del mercado español:
- Tecnología patentada (PCT U202532624)
- 10 longitudes de onda calibradas
- Certificación IEC 62471
- Disponible en **alquiler desde 59€/mes con Sharpei** (sin compromiso largo plazo)

[BOTÓN: VER EKIO LIGHT DEEP 5 →]
[BOTÓN: VER OPCIÓN ALQUILER 59€/MES →]

Con tus {{ points }} puntos EKIO, el Deep 5 te queda en {{ price_after_points }}€.

**Bonus solo para ti**: si decides el Deep 5 esta semana, sesión de protocolo personalizado conmigo (15 min por WhatsApp/Zoom) **incluida**.
```

#### Si compró Deep 5, BR7, FS10 o producto > 400€:

```
{{ first_name|default:"Hola" }},

Has invertido en lo más importante: regeneración celular activa con tu {{ event.extra.first_product_title }}.

Ahora la pregunta no es "¿qué más comprar?" sino:

**¿Estás aprovechando el 100% de lo que ya tienes?**

He preparado una **Consultoría EKIO 360** que cubre:
- Auditoría electromagnética de tu vivienda (medición remota o presencial)
- Protocolo personalizado de uso del Deep 5/7/FS10 según tu objetivo (sueño / piel / recuperación / energía)
- Plan de suplementación complementaria
- Seguimiento a 30 días

297€. Si la activas esta semana, te aplico tus {{ points }} puntos EKIO → te queda en {{ price_after_points }}€.

[BOTÓN: VER CONSULTORÍA EKIO 360 →]

Si prefieres ir por libre, también hay otra capa: **tu nutrición antioxidante**. La luz roja y la protección EMF generan demanda metabólica adicional. Los suplementos Laittin (Vit. C Electro Pro, D3+K2 Premium, Probiotic Electro Vital) son la otra mitad del protocolo.

[BOTÓN: VER PACK SUPLEMENTOS LAITTIN →]
```

**KPIs objetivo email 6**:
- OR: 45%+
- CR: 8-12%
- Conversion: 4-7% (€350-500 AOV en cross-sell)

---

### 📩 EMAIL 7 — Día 28 post-delivery (Suplementos + Consultoría + Referidos)

**Trigger**: 28 días después del email 3
**Objetivo**: Última ventana de expansión + activar advocacy / referidos

**Subject A**: `Lo que la mayoría olvida tras 30 días con EKIO`
**Subject B**: `¿A quién más le harías el favor de contarle esto?`

**Preview Text**: `La otra mitad de la ecuación, y un favor que te pido.`

**From Name**: `Javier de EKIO`

**Body**:

```
{{ first_name|default:"Hola" }},

Llevas un mes con EKIO.

Espero que tu cuerpo te lo esté agradeciendo. Si no lo notas todavía, **escríbeme**. Hay variables que ajustamos contigo en 10 minutos.

Hoy te escribo por dos cosas — una para ti, otra para alguien que conoces.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━

**1. PARA TI: LA OTRA MITAD DE LA ECUACIÓN**

EKIO te protege de lo externo. Filtrar EMF, regenerar con luz roja, todo eso reduce la carga.

Pero hay una mitad que la mayoría se salta: **lo que tu cuerpo necesita por dentro para reparar lo que el electrosmog ya hizo**.

Después de años de exposición:
- Vitamina C agotada (estrés oxidativo crónico)
- Vitamina D3+K2 mal absorbida (calcificación arterial)
- Vitaminas B depletadas (sistema nervioso saturado)
- Microbiota desregulada (eje intestino-cerebro)

Los suplementos Laittin (formulados para personas electrosensibles) son la pieza que cierra el círculo.

[BOTÓN: VER PACK VITAMINAS 1 MES (109€) →]
[BOTÓN: VER PACK LAITTIN 3 MESES (325€) →]

**Si activas SUSCRIPCIÓN mensual del Pack 1 Mes**, primer mes a 98€ (-10%) y los puntos EKIO se duplican.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━

**2. PARA ALGUIEN QUE CONOCES: PROGRAMA DE REFERIDOS**

Piensa en alguien:
- Que duerme mal y no sabe por qué
- Que está pegado al móvil 14 horas al día
- Que tiene hijos pequeños y wifi 24/7 en casa
- Que llega a las 5 de la tarde sin energía

A esa persona EKIO le hace falta. Probablemente más que a ti hace un mes.

Cuando la refieres con tu link personal:

- **A ella le regalamos 15€** en su primera compra
- **A ti te damos 500 puntos EKIO** (=25€) por cada amigo que compre

[BOTÓN: COPIAR MI LINK DE REFERIDO →]
(link al programa AppStle referrals)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━

**SI QUIERES IR MUCHO MÁS LEJOS**

La Consultoría EKIO 360 sigue disponible:
- Auditoría electromagnética
- Protocolo personalizado
- Seguimiento 30 días

297€ con descuento puntos.

[BOTÓN: VER CONSULTORÍA EKIO 360 →]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Gracias por estar aquí. En serio.

Javier

P.D. Si esta es tu segunda compra con nosotros (o más), eres VIP. Responde a este email con "VIP" y te incluyo en el grupo privado de WhatsApp donde comparto novedades, estudios nuevos y respondo preguntas. Solo clientes recurrentes.
```

**KPIs objetivo email 7**:
- OR: 45%+
- CR: 8-10%
- Cross-sell suplementos: 4-6%
- Referido activado: 2-3%

---

## 5. CHECKLIST DE PREPARACIÓN ANTES DE PUBLICAR

### Configuración técnica
- [ ] Trigger: Placed Order Shopify (SbbUjV) confirmado
- [ ] Filtros: excluir flows abandono activos
- [ ] Conditional split por valor (3 ramas) configurado
- [ ] Conditional split por producto (5 categorías) en Email 6
- [ ] Conditional split primera vs repeat en Email 7
- [ ] `tracking_options.add_tracking_params = true` en cada email
- [ ] UTMs en cada CTA verificadas

### Contenido
- [ ] AppStle Loyalty: confirmar variable `{{ points }}` correcta o usar bloque dinámico de la app
- [ ] Variable `{{ event.extra.first_product_title }}` testada
- [ ] Imágenes hero de cada email diseñadas (Canva)
- [ ] Bloque dinámico de productos comprados configurado
- [ ] Links a /pages/descarga-guia-higiene-electromagnetica y otros verificados
- [ ] Link WhatsApp Javier configurado
- [ ] Vídeo de setup grabado (Email 3)
- [ ] Link al programa referidos AppStle activo

### Templates
- [ ] Header EKIO unificado en los 7 templates
- [ ] Footer con dirección física + unsubscribe + razón de recibir el email
- [ ] Versión móvil testada (>70% del tráfico es mobile)
- [ ] Dark mode compatible

### Test
- [ ] Send to me mismo: cada email
- [ ] Test compra real con cuenta de prueba
- [ ] Verificar que se dispara correctamente
- [ ] Verificar que los splits funcionan según valor de pedido
- [ ] Verificar UTMs en GA4 DebugView

### Soporte operativo
- [ ] Plantilla de respuesta para los emails que devuelvan "responde a este email"
- [ ] Equipo (Javier) sabe que va a recibir respuestas reales y debe contestar en 12-24h

---

## 6. IMPACTO ESTIMADO

Asumiendo 30 nuevas compras al mes (objetivo conservador):

| Email | OR esperado | CR esperado | Conv estimada | Revenue/mes |
|---|---|---|---|---|
| 1 — Thank + Loyalty | 70% | 25% | 5% (registro AppStle) | LTV indirecto |
| 2 — Education | 55% | 15% | 2% descarga guía | 0€ directo |
| 3 — Setup | 75% | 30% | 1% (reduce devoluciones) | +200€ ahorro devoluciones |
| 4 — Check-in | 50% | 5% reply | 1% conv tras conversación | +250€ |
| 5 — Review request | 55% | 18% | 10% reviews | Indirecto pero alto LTV |
| 6 — Cross-sell | 45% | 10% | 5% | **+450€/mes** |
| 7 — Suplementos+Referidos | 45% | 9% | 4% (suplementos), 2% (referido) | **+350€/mes** |

**Total revenue directo nuevo flow vs el actual (1 email/190€ 90d)**: **+1.000-1.500€/mes en run rate.**

Más el efecto indirecto sobre LTV (segunda compra, reviews que convierten frío, referidos que multiplican).

---

## 7. SIGUIENTES PASOS

1. **Diseñar templates visuales** (Canva o directamente en Klaviyo editor)
2. **Grabar vídeo de setup** (Email 3) — Javier, 90 segundos
3. **Configurar el flow en Klaviyo** según especificación técnica
4. **Activar AppStle integration variable** o usar bloques dinámicos de la app
5. **Test exhaustivo** con compra real
6. **Publicar** y monitorizar primera semana
7. **A/B test de subjects** a partir de la 2ª semana

---

*Diseño basado en frameworks de Klaviyo oficial, Athletic Greens, Allbirds, Fullscript,
Ten Thousand y Nine.am insights. Adaptado a EKIO con producto, voz de marca, AppStle Loyalty
activo y funnel ascendente Card→Disc→Master→Deep 5. Generado 15/05/2026.*
