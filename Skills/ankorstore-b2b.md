---
name: ankorstore-b2b
description: >
  Skill de venta B2B en Ankorstore para Ekio Light. Precio wholesale por SKU, cálculo de
  margen real tras comisión de plataforma, copy de ficha de producto para comprador
  profesional (no consumidor final), compliance de claims de salud en marketplace europeo,
  y checklist de lanzamiento coordinado con la agencia externa (Redflexion / Paula Aliaga).
  Úsalo cuando el usuario pida fichas de producto para Ankorstore, calcular precio o margen
  wholesale, revisar el catálogo antes de publicarlo, o preparar cualquier entregable para
  Paula/Redflexion.
---

# Ankorstore B2B — Skill de Precio, Copy y Compliance

## Principio fundamental

Ankorstore no es Shopify con otro logo: **el comprador es un retailer, no un consumidor**.
Compra para revender, piensa en margen y rotación de estantería, no en cómo le va a cambiar
la vida el producto. Todo lo que se escriba o se calcule en este skill debe pasar primero por
esa pregunta: *¿esto ayuda a un comprador profesional a decidir "esto se vende bien en mi
tienda"?* Si la respuesta es no, no es copy de Ankorstore, es copy de Shopify mal reciclado.

**Reparto de trabajo (confirmado por Javier 25/ago/2026):** Redflexion (Paula Aliaga Turpín,
+34 968 223 867, paula@redflexion.com) gestiona la parte técnica — alta de cuenta, puesta en
marcha de la tienda en Ankorstore, operativa de la plataforma. Ekio aporta el contenido: copy,
precio y estrategia. Este skill cubre la parte de Ekio, no sustituye a Redflexion.

---

## MÓDULO 1 — Catálogo de lanzamiento

Confirmado 25/ago/2026: se lanza con 3 de los 4 SKUs de Ekio Light. **BioSpectrum 11 (2.500 €)
queda fuera de esta primera fase** — ticket demasiado alto para que un retailer lo pruebe sin
compromiso, y es el único con UV-B real (IEC 62471 obligatorio, ver Módulo 4).

| SKU | PVP Ekio (Shopify) |
|---|---|
| **Core** | 147 € |
| **Deep 5** | 650 € |
| **Bio Regén 7** | 950 € *(no 970€ — ver nota)* |
| **Bombilla LED Roja** *(4º SKU, añadido 25/ago/2026, standalone — no es un accesorio del Stack)* | 25 € |

> Nota de precio: el listado vivo en Shopify de Bio Regén 7 es **950 €**. Existe un producto
> duplicado en borrador a 970 € — no usarlo. Ver [[project_ekio_light_gama]].

> ⚠️ **El Stack (App Coach, Guía de Uso, bombilla/vitaminas de regalo) NO se lista como
> componente comercial en ninguna ficha de Ankorstore** — ver corrección en Módulo 3. Es
> mecánica de bundling para el consumidor final de Shopify; en B2B el retailer compra el
> producto físico y una lista aparte de precio/margen, no un "regalo con valor tachado".

Cuando haya ficha técnica de fábrica y datos de venta en Ankorstore de estos 4, se evalúa
sumar BioSpectrum 11 en una segunda fase.

---

## MÓDULO 2 — Precio wholesale y margen real

### Regla de partida (decidida por Javier 25/ago/2026)

**Descuento del 25% sobre el PVP de Ekio** como hipótesis inicial de precio wholesale, a
recalcular con margen real por SKU. Fórmula: `Precio wholesale = PVP × 0,75`.

| SKU | PVP | Wholesale (–25%) | Margen que le queda al retailer si revende a PVP |
|---|---|---|---|
| Core | 147 € | **110,25 €** | 36,75 € → 25% |
| Deep 5 | 650 € | **487,50 €** | 162,50 € → 25% |
| Bio Regén 7 | 950 € | **712,50 €** | 237,50 € → 25% |

⚠️ **A vigilar, no a bloquear:** un 25% de margen para el retailer es bajo para el estándar del
sector wholesale — la referencia habitual en Ankorstore y marketplaces B2B similares es
*keystone pricing* (retailer compra a ~50% del PVP, es decir, duplica al revender). Con 25% de
descuento, el producto tiene que venderse casi solo (marca fuerte, packaging, rotación rápida)
para que a una tienda le compense el espacio de estantería frente a otra marca que le deja el
doble de margen. Esto no es motivo para subir el descuento ya — es la variable a mirar primero
si el catálogo no arranca en Ankorstore: síntoma más probable será "lo ven pero no piden
muestra", no "piden y no venden".

### Lo que Ekio recibe realmente: comisión de Ankorstore

Ankorstore no cobra al comprador, cobra al vendedor sobre el importe del pedido:

| Concepto | Tarifa |
|---|---|
| Comisión primer pedido de cada retailer | 20% (ex IVA) |
| Comisión pedidos de reposición (mismo retailer) | 10% (ex IVA) |
| Comisión pasarela de pago | 3% |
| Plazo de pago a Ekio | Garantizado, con condición de 60 días de pago aplazado al retailer (lo asume Ankorstore, no Ekio) |
| Programa LIFT (clientes propios invitados) | 0% comisión de por vida en esos pedidos |

Neto real que llega a Ekio por unidad, sobre el precio wholesale ya calculado (–25% del PVP):

| SKU | Wholesale | Neto 1er pedido (–20% –3%) | Neto reposición (–10% –3%) |
|---|---|---|---|
| Core | 110,25 € | **≈ 84,89 €** | **≈ 95,92 €** |
| Deep 5 | 487,50 € | **≈ 375,38 €** | **≈ 424,13 €** |
| Bio Regén 7 | 712,50 € | **≈ 548,63 €** | **≈ 618,86 €** |

Estas cifras son sobre precio, no sobre coste — todavía no incluyen coste de producto,
logística de envío a retailer ni exposición a proveedor. **Antes de fijar el precio wholesale
definitivo, pedir al [[project_finanzas_operaciones_agent|finanzas-operaciones-agent]] el coste
real por SKU** (mismo criterio que ya usa para TikTok Shop y Shopify) y comprobar que el neto
de la tabla de arriba deja margen sano tras coste de producto + envío al retailer. Si algún SKU
no lo deja, decirlo explícitamente en vez de ajustar el precio en silencio.

### Condiciones comerciales propias (las fija Ekio, no Ankorstore)

Ankorstore deja que cada marca configure: pedido mínimo, umbral de envío gratis, descuentos por
volumen. Pendiente de decidir — proponer al lanzar catálogo:
- Pedido mínimo por SKU o por carrito (evita pedidos de 1 unidad que no compensan logística)
- Descuento adicional por volumen a partir de X unidades, especialmente en Core (ticket bajo,
  compensa con volumen)

---

## MÓDULO 3 — Copy de ficha de producto para comprador profesional

La ficha B2C de Shopify (la de `ekio-*-landing/02-COPY-COMPLETO.md`) está escrita para alguien
que se va a poner el panel en la cara. La ficha de Ankorstore está escrita para alguien que
decide si lo pone en su estantería. Mismo producto, otro lector, otro copy.

### Estructura de ficha Ankorstore

1. **Nombre + una línea de posicionamiento** — qué es, en qué categoría compite (bienestar /
   belleza / recuperación), sin adjetivos vacíos.
2. **Por qué se vende** — 3-4 bullets orientados a rotación: ticket medio, quién lo compra
   (perfil de cliente final), qué problema de compra resuelve para la tienda (ej. producto de
   regalo, complemento de gama de bienestar, diferenciador frente a lo que ya vende).
3. **Especificaciones técnicas verificables** — nº de LEDs, longitudes de onda (nm), materiales,
   dimensiones, peso, batería/alimentación, certificaciones (CE/RoHS/FCC/WEEE si están
   confirmadas — ver Módulo 5), garantía (30 días devolución). Sin cifras de dosis si el SKU no
   tiene irradiancia documentada (ver Módulo 4).
4. **Qué incluye la caja** — **solo el contenido físico real**: el dispositivo, sus accesorios
   físicos de fábrica (cable, gafas de protección si aplica) y el **manual de instrucciones,
   adaptado al idioma del mercado de destino** (ES/DE/EN/FR según dónde compre el retailer —
   ver Módulo 5-bis). **El Stack de Shopify (App Ekio Coach, Guía de Uso Interactiva, bombilla
   o vitaminas "de regalo") NO va aquí.** Es una mecánica de bundling y "precio tachado → gratis"
   pensada para la conversión del consumidor final en la web — en Ankorstore el retailer compra
   el producto físico y decide su propio margen; mencionar un Stack de valor añadido de
   consumidor confunde el argumento de venta B2B y no aporta nada al retailer.
5. **Story de marca en 2-3 líneas** — quién es Ekio, por qué existe (electrosmog + luz), sin
   reclamar autoridad médica.
6. **Condiciones comerciales** — precio wholesale, PVP recomendado, pedido mínimo, plazo de
   entrega.

### Lo que cambia frente al copy de Shopify

| En Shopify (B2C) | En Ankorstore (B2B) |
|---|---|
| Habla al dolor/deseo del usuario final | Habla a la oportunidad de negocio del retailer |
| Storytelling largo, casos de uso | Datos y specs primero, storytelling breve al final |
| CTA "cómpralo ya" | CTA "pide muestra" / "añade a tu próximo pedido" |
| Precio con descuento de lanzamiento | Precio wholesale + PVP recomendado, sin urgencia artificial |
| Fotografía de estilo de vida | Fotografía de producto limpia + packaging (lo que el retailer va a exponer) |

---

## MÓDULO 4 — Compliance de claims (mismo criterio que TikTok Shop, aplicado a marketplace europeo)

Ankorstore es una plataforma francesa que opera en toda Europa, con retailers profesionales que
pueden cuestionar un claim más rápido que un consumidor. La regla de Ekio es la misma que ya
rige TikTok Shop y el resto del ecosistema — ver `tiktok-shop-growth.md` Módulo de compliance:

**Nunca en ficha, imagen ni brief a Redflexion:**
- ❌ "Cura", "trata", "elimina", "previene" cualquier patología
- ❌ Mención de enfermedad diagnosticada
- ❌ Claims de dosis (J/cm², mW/cm²) en SKUs sin ficha técnica de fábrica — **hoy Deep 5 y
  Bio Regén 7 no la tienen** (solo Core), ver [[project_ekio_light_ficha_tecnica]]
- ❌ "Modelo de Utilidad... protegido en 157 países" — el claim correcto es exactamente
  **"Modelo de Utilidad español Nº U202532624"**, sin mención de alcance internacional
- ❌ "PCT en tramitación" u otra referencia a estado internacional de la solicitud, salvo que
  Javier confirme el estado actual en el momento de publicar (ver [[project_pct_srba]]) — no
  asumir que sigue igual que en jul/2026 solo porque el copy de la landing lo dice

**Sí se puede:**
- ✅ Bienestar, recuperación, descanso, rutina — categoría establecida
- ✅ Specs verificables: nm, nº de LEDs, materiales, garantía
- ✅ Modelo de Utilidad citado como hecho registral, sin atribuirle eficacia

**⚠️ Corrección importante (6/sep/2026) — a qué SKUs aplica el Modelo de Utilidad:**
El MU **U202532624 cubre los 3 paneles — Deep 5, Bio Regén 7 y Bio Spectrum 11 —, NO solo al
Bio Spectrum 11.** Fuente verificada directamente en la tabla de especificaciones oficial de
cada landing: `ekio-deep5-landing/02-COPY-COMPLETO.md` ("Patente: Modelo de Utilidad U202532624")
y `ekio-bio-regen-7-landing/02-COPY-COMPLETO.md` (misma fila). El **Core NO lo lleva** — es
explícito en `ekio-core-landing/01-SEO-STRATEGY.md`: *"no citarlo en la PDP del Core salvo que
Javier confirme que también cubre este dispositivo"*. Tampoco lo lleva la bombilla roja (no es
un panel). Si en algún momento se usó el criterio contrario en una ficha de Ankorstore, corregir.

Antes de que cualquier ficha llegue a Redflexion para subirla, debe pasar el mismo filtro que
pasa el contenido de canal público — si hay duda sobre un claim, consultar con
[[heruca|Heruca]] (departamento de investigación) antes de publicar.

---

## MÓDULO 5 — Ficha técnica y certificaciones: qué hay confirmado por SKU

Solo el **Core** tiene irradiancia medida (>150 mW/cm² en contacto). Deep 5 y Bio Regén 7 no
la tienen todavía — el propio paquete de Deep 5 lo señala como pendiente. Para Ankorstore esto
importa menos que para un claim de dosis público (un retailer no pide J/cm², pide specs de
producto), pero si se pide ficha técnica formal a fábrica de todos modos, pedir junto a la
irradiancia: potencia real de salida, distancia de uso recomendada, certificados LVD/EMC. No es
bloqueante para lanzar en Ankorstore con los 3 SKUs elegidos — sí lo sería para el BioSpectrum 11
(UV-B real, exige IEC 62471 en regla antes de anunciarlo en cualquier canal).

**Certificaciones — no inventar, solo lo que está documentado por fuente:**

| SKU | Certificaciones confirmadas en fuente | Fuente |
|---|---|---|
| Bio Regén 7 | CE · RoHS · FCC · WEEE | `ekio-bio-regen-7-landing/02-COPY-COMPLETO.md` |
| Core | No documentadas en el paquete de landing | — pendiente de confirmar con fabricante |
| Deep 5 | No documentadas en el paquete de landing | — pendiente de confirmar con fabricante |
| Bombilla LED Roja | No documentadas | — pendiente de confirmar con fabricante |

Todo producto eléctrico vendido en la UE necesita CE de forma legal, así que es muy probable que
Core, Deep 5 y la bombilla también la tengan — pero **no se afirma en una ficha B2B sin
confirmación documental**, porque una declaración de conformidad falsa es un riesgo legal real,
no un matiz de estilo. Pedir a fabricante la Declaración de Conformidad UE (DoC) de cada SKU
antes de publicarlos con esa fila rellena.

---

## MÓDULO 5-BIS — Normativa UE aplicable a la venta B2B (relevante para Alemania, mercado principal)

Ankorstore vende en toda Europa; Javier señaló Alemania como mercado principal (25/ago/2026).
Esto no es solo "poner el copy en alemán": hay obligaciones normativas reales que afectan al
contenido de la ficha y al material que acompaña al producto. Ninguna de ellas la resuelve este
skill — son responsabilidad de fabricante/Redflexion/Ekio según el caso — pero conocerlas mejora
la ficha y da confianza al retailer profesional, que sí las conoce y las pregunta.

| Normativa | Qué exige | Quién la resuelve |
|---|---|---|
| **Reglamento General de Seguridad de los Productos (GPSR, UE 2023/988)**, en vigor desde 13/dic/2024 | Instrucciones de uso y advertencias de seguridad **en el idioma que exija el país donde se vende** (alemán para Alemania), datos de contacto del fabricante/responsable en la UE, trazabilidad (lote/referencia). **Es la base normativa real del manual localizado que pidió Javier — no es solo mejor venta, es obligatorio.** | Ekio prepara el contenido del manual; Redflexion/fabricante gestiona la traducción formal si Ekio no la tiene ya |
| **Marcado CE** | Declaración de Conformidad UE por producto eléctrico. Obligatorio, no opcional. | Fabricante — pedir DoC de cada SKU (ver Módulo 5) |
| **RoHS** (restricción de sustancias peligrosas) | Declaración de cumplimiento en electrónica | Fabricante |
| **WEEE / en Alemania ElektroG** | Símbolo del contenedor tachado en el producto; **en Alemania, registro EAR/número WEEE-Reg-Nr. obligatorio para quien pone el producto en el mercado alemán** — puede recaer en Ekio como marca o en el importador/distribuidor según cómo se estructure la venta | Confirmar con Redflexion quién es el "Inverkehrbringer" (responsable de puesta en mercado) en Alemania |
| **Ley de envases alemana (VerpackG) — registro LUCID** | Registro obligatorio de envases puestos en el mercado alemán, para cualquiera que venda con destino Alemania | Redflexion/logística — no es tarea de contenido |
| **Reglamento de baterías (UE 2023/1542)** — aplica al **Core** (batería interna recargable) | Marcado de batería, información de reciclaje, registro en esquemas de recogida por país | Fabricante/Redflexion — verificar antes de vender el Core en Alemania |
| **Etiquetado energético de fuentes de luz (UE 2019/2015)** — aplica potencialmente a la **bombilla roja** | Exige etiqueta energética salvo excepciones para iluminación especializada/no general — a verificar si la bombilla roja califica como excepción por ser luz de espectro específico, no iluminación general | Confirmar con fabricante/asesoría antes de publicar en Ankorstore |

**Aplicación práctica para las fichas de Ankorstore:** cada ficha debe indicar que el manual de
instrucciones se entrega **adaptado al idioma del país de destino** (alemán como prioridad,
inglés como alternativa, resto de idiomas UE bajo demanda), y señalar en la nota a Paula qué
certificaciones/registros normativos concretos (CE, RoHS, WEEE-Reg-Nr. Alemania, LUCID) están
confirmados y cuáles quedan pendientes de verificar con fabricante antes de la primera venta a
un retailer alemán.

---

## MÓDULO 6 — Checklist de lanzamiento

**Hace Ekio (contenido):**
- [ ] Ficha de producto Ankorstore para Core, Deep 5, Bio Regén 7, Bombilla Roja (Módulo 3) —
      solo contenido físico + manual, sin Stack de Shopify
- [ ] Precio wholesale y PVP recomendado por SKU, validado con margen real (Módulo 2)
- [ ] Fotografía de producto limpia (packaging incluido) — coordinar con el agente de
      dirección de arte si hace falta producir nueva
- [ ] Condiciones comerciales propias: pedido mínimo, descuento por volumen
- [ ] Paso de compliance de claims (Módulo 4) antes de entregar a Redflexion
- [ ] Manual de instrucciones preparado en el idioma del mercado de destino — alemán como
      prioridad (Módulo 5-bis, obligación GPSR, no solo mejor venta)

**Hace Redflexion (técnico/operativo):**
- [ ] Alta de cuenta de marca en Ankorstore
- [ ] Subida de catálogo y condiciones a la plataforma
- [ ] Configuración de envíos, logística, gestión de pedidos entrantes
- [ ] Cualquier requisito de onboarding específico de Ankorstore (verificación de marca, IVA
      intracomunitario, etc.)
- [ ] Confirmar con fabricante: Declaración de Conformidad CE por SKU, registro WEEE/ElektroG
      en Alemania, registro de envases LUCID (Módulo 5-bis) — antes de la primera venta a un
      retailer alemán

**Entregable a Paula:** un documento por SKU con ficha de producto + precio wholesale + PVP
recomendado + fotos, listo para que ella lo suba. No se le entrega copy de Shopify sin adaptar.
