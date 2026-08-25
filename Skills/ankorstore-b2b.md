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

| SKU | PVP Ekio (Shopify) | Incluye en Stack |
|---|---|---|
| **Core** | 147 € | App Coach + Guía |
| **Deep 5** | 650 € | App Coach + Guía |
| **Bio Regén 7** | 950 € *(no 970€ — ver nota)* | App Coach + Guía + bombilla roja + Laittin Vit C+B50 |

> Nota de precio: el listado vivo en Shopify de Bio Regén 7 es **950 €**. Existe un producto
> duplicado en borrador a 970 € — no usarlo. Ver [[project_ekio_light_gama]].

Cuando haya ficha técnica de fábrica y datos de venta en Ankorstore de estos 3, se evalúa
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
   dimensiones, peso, batería/alimentación, garantía (30 días devolución). Sin cifras de dosis
   si el SKU no tiene irradiancia documentada (ver Módulo 4).
4. **Qué incluye la caja** — el Stack (App Coach, Guía, extras por SKU) como valor añadido de
   marca, no como argumento de salud.
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
  **"Modelo de Utilidad español Nº U202532624"**, sin mención de alcance internacional (el PCT
  aún no está presentado)

**Sí se puede:**
- ✅ Bienestar, recuperación, descanso, rutina — categoría establecida
- ✅ Specs verificables: nm, nº de LEDs, materiales, garantía
- ✅ Modelo de Utilidad citado como hecho registral, sin atribuirle eficacia

Antes de que cualquier ficha llegue a Redflexion para subirla, debe pasar el mismo filtro que
pasa el contenido de canal público — si hay duda sobre un claim, consultar con
[[heruca|Heruca]] (departamento de investigación) antes de publicar.

---

## MÓDULO 5 — Ficha técnica: lo que falta antes de poder listar con specs completas

Solo el **Core** tiene irradiancia medida (>150 mW/cm² en contacto). Deep 5 y Bio Regén 7 no
la tienen todavía — el propio paquete de Deep 5 lo señala como pendiente. Para Ankorstore esto
importa menos que para un claim de dosis público (un retailer no pide J/cm², pide specs de
producto), pero si se pide ficha técnica formal a fábrica de todos modos, pedir junto a la
irradiancia: potencia real de salida, distancia de uso recomendada, certificados LVD/EMC. No es
bloqueante para lanzar en Ankorstore con los 3 SKUs elegidos — sí lo sería para el BioSpectrum 11
(UV-B real, exige IEC 62471 en regla antes de anunciarlo en cualquier canal).

---

## MÓDULO 6 — Checklist de lanzamiento

**Hace Ekio (contenido):**
- [ ] Ficha de producto Ankorstore para Core, Deep 5, Bio Regén 7 (Módulo 3)
- [ ] Precio wholesale y PVP recomendado por SKU, validado con margen real (Módulo 2)
- [ ] Fotografía de producto limpia (packaging incluido) — coordinar con el agente de
      dirección de arte si hace falta producir nueva
- [ ] Condiciones comerciales propias: pedido mínimo, descuento por volumen
- [ ] Paso de compliance (Módulo 4) antes de entregar a Redflexion

**Hace Redflexion (técnico/operativo):**
- [ ] Alta de cuenta de marca en Ankorstore
- [ ] Subida de catálogo y condiciones a la plataforma
- [ ] Configuración de envíos, logística, gestión de pedidos entrantes
- [ ] Cualquier requisito de onboarding específico de Ankorstore (verificación de marca, IVA
      intracomunitario, etc.)

**Entregable a Paula:** un documento por SKU con ficha de producto + precio wholesale + PVP
recomendado + fotos, listo para que ella lo suba. No se le entrega copy de Shopify sin adaptar.
