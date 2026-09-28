# Separación de marcas: cómo quedan las dos tiendas Shopify
**Agente:** shopify-agent | **Fecha:** 28/sep/2026 | **Solo planificación — sin cambios ejecutados**

---

## Fuentes consultadas
- Shopify MCP: catálogo completo (50 productos activos)
- Visita en vivo a electrosmogespana.com (homepage, menú, barra de anuncios, reseñas)
- 00_contexto_comun.md (decisiones ya tomadas, datos verificados)

---

## 1. electrosmogespana.com después de la separación

### Qué se queda (catálogo verificado)

| Categoría | Productos |
|---|---|
| Filtros EMF SPIRO | Card (97€), Card X (167€), Disc (255€), Disc X (597€), Disc Ultra (929€), Square (147€), Square X (257€) |
| Electricidad sucia | Stroom Master Pro (219.99€) |
| Packs SPIRO | Familia (445€), Infantil (420€), Oasis Electromagnético (825€), Oficina (470€), Hogar+Oficina (350€), Personal (350€), Protección Stroom (655€), Sueño (470€) |
| Medidores y accesorios | Detector radiación (49€), Socket Tester (20.66€), Medidor electricidad sucia (216.37€), Regleta apantallada Danell (93€) |
| Suplementos Laittin | Vitamina B50 (24.90€), Vitamina C (24.70€), Vitamina D3+K2 (29.90€), Probiotic (34.90€), Pack 1 mes (109€), Pack 3 meses (325€), Pack 6 meses (542.88€) |
| Consultoría y servicios | Consultoría EKIO 360 (297€, no tocar según instrucción) |

**Productos que salen:** todos los de Ekio Light (paneles, Core, IGNIS, bombillas, packs de bombillas) — ver sección 2.

---

### Menú propuesto post-separación

**Menú actual:** SPIRO | PACKS | LUZ ROJA | SUPLEMENTOS | ACCESORIOS

**Menú propuesto:**

| Posición | Nombre | Destino |
|---|---|---|
| 1 | SPIRO | /collections/spiro-filtros-electromagneticos |
| 2 | PACKS | /collections/productos-pack-kits-spiro |
| 3 | MEDIDORES | /collections/medidores-y-accesorios |
| 4 | SUPLEMENTOS | /collections/suplementos-laittin |
| 5 | CONSULTORÍA | /products/consultoria-ekio-360 |

El ítem "LUZ ROJA" se elimina del menú principal. Se sustituye por el bloque de marca hermana en la homepage (ver abajo).

---

### Homepage — estructura por bloques

| Bloque | Contenido actual / propuesto |
|---|---|
| **Barra de anuncios** | Ver subsección abajo |
| **Hero principal** | Mantener: "Protección contra la contaminación electromagnética" + CTA "ENCONTRAR MI SPIRO" → /collections/spiro. Eliminar el segundo CTA que apunta a LUZ ROJA. |
| **Bloque 2: Problema** | Dato científico sorprendente sobre exposición EMF (mantener tono actual) |
| **Bloque 3: Colecciones** | Solo SPIRO + PACKS + ACCESORIOS. Eliminar el enlace a /collections/productos-luz-roja que aparece en el hero secundario. |
| **Bloque 4: Social proof** | Ver subsección abajo — unificar cifra de clientes |
| **Bloque 5: Marca hermana** | NUEVO — bloque discreto "Nuestra marca hermana" (ver diseño abajo) |
| **Bloque 6: Reseñas** | Mantener el carrusel actual (solo muestra reseñas de productos Spiro, ya correcto) |
| **Bloque 7: seQura banner** | Mantener — enlace a /pages/sequra-como-funciona |
| **Footer** | Eliminar referencias a luz roja de las listas de colecciones |

**Barra de anuncios — propuesta:**

Hoy muestra: "MÁS DE 12.000 CLIENTES SATISFECHOS" — pero 12.000 son contactos, no clientes verificados (>7.600 Spiro verificados). Propuesta:
- Sustituir por: "MÁS DE 7.600 CLIENTES PROTEGIDOS" (cifra auditable, solo Spiro)
- Mantener: PAGO A 12 MESES | ENVÍO GRATIS | GARANTÍA 30 DÍAS

**Bloque "Nuestra marca hermana Ekio Light" — diseño:**

```
┌─────────────────────────────────────────────────────────┐
│  [icono luz roja]  Terapia de luz roja Ekio Light       │
│  La fotobiomodulación para dormir mejor, recuperarte     │
│  y tener más energía — fabricada por EKIO.               │
│  [Ir a ekiolight.com →]                                  │
└─────────────────────────────────────────────────────────┘
```

Bloque pequeño, fondo neutro, sin competir con el hero. Posición: después del bloque de reseñas, antes del footer. Enlace abre en nueva pestaña.

**Qué pasa con la página /pages/terapia-de-luz-roja-ekio-light:**
Redirigir (301) a ekiolight.com cuando esté activa. Hasta entonces mantener la página con un aviso: "Ekio Light tiene ahora su propio espacio en ekiolight.com".

**Qué pasa con /collections/productos-luz-roja:**
Redirigir (301) a ekiolight.com/collections/paneles-luz-roja cuando esté activa. Hasta entonces: redirigir a homepage de electrosmogespana.com.

---

### Prueba social coherente

Problema hoy: la barra de anuncios dice 12.000 (contactos) y en otro sitio puede aparecer 5.000 u otra cifra. Una sola cifra en toda la tienda.

- **Cifra a usar:** ">7.600 clientes protegidos" (solo Spiro, documentado)
- **Borrar o corregir** todas las instancias de 11.500, 12.000, 5.000 en páginas, metadescripciones, banners
- Hipótesis: si hay reseñas de productos de luz que se quedan sin producto, migrarlas a ekiolight.com antes de ocultarlas

---

## 2. ekiolight.com — catálogo, home y estructura

### Catálogo completo verificado (precios reales Shopify, sep 2026)

| Producto | Precio PVP | Handle Shopify actual | Nota |
|---|---|---|---|
| Bombilla Luz Roja DUSK | 17.50€ | bombilla-led-roja-de-ekio-light | Entrada de funnel |
| Bombilla LED Amarilla 1800K | 17.50€ | bombillas-de-luz-amarilla | Complemento sueño |
| Pack Salón + Dormitorio (bombillas) | 29.70€ | pack-bombillas-roja-y-amarilla | Pack entrada |
| CORE (portátil, 13 LEDs) | 147€ | core-ekio-light | Panel personal |
| IGNIS | 120€ | ignis-de-ekio-light-terapia-de-luz-y-proteccion-contra-cem | Combo luz+EMF |
| DEEP 5 | 650€ | deep-5-ekio-light | Panel principal |
| BIO REGEN 7 (roja + cyan) | 950€ | deep-7-cyan-ekio-light | Panel avanzado |
| BIO SPECTRUM 11 / FULL SPECTRUM 10 | 2.500€ | lampara-full-spectrum-ekio-light | Panel premium |
| DEEP 5 B2B | 600€ | luz-roja-deep-5-de-ekio-light-b2b | Solo canal B2B |
| BIO REGEN 7 B2B | 650€ | luz-roja-y-cyan-deep-7-de-ekio-light-b2b | Solo canal B2B |
| FULL SPECTRUM 10 B2B | 2.500€ | lampara-full-spectrum-10-de-ekio-light-b2b | Solo canal B2B |

> Hipótesis pendiente de confirmación: el "Deep 5" de 650€ es el nombre actualizado del panel de 5 barras. La memoria indica "Core 147€ / Deep5 650€ / BioRegen7 970€ / BioSpectrum11 2500€" — hay discrepancia de 20€ en BioRegen7 (Shopify: 950€, memoria: 970€). Confirmar con Javier antes de fichar precios en la nueva tienda.

**Productos B2B:** mantenerlos ocultos para el público general. Acceso por link directo o con contraseña de cliente B2B (Shopify Markets o app de acceso restringido).

---

### Menú de ekiolight.com

```
PANELES   PARA TI   CÓMO FUNCIONA   TESTIMONIOS   FINANCIACIÓN
```

Detalle:
- **PANELES** — desplegable: Core · Deep 5 · Bio Regen 7 · Bio Spectrum 11 · Ver todos
- **PARA TI** — desplegable por necesidad: Dormir mejor · Recuperación · Piel y anti-edad · Energía y rendimiento · Bomillas y accesorios
- **CÓMO FUNCIONA** — página educativa (fotobiomodulación en lenguaje sencillo)
- **TESTIMONIOS** — página de reseñas + casos
- **FINANCIACIÓN** — página seQura (12 meses sin intereses)

---

### Homepage de ekiolight.com — estructura por bloques

| # | Bloque | Contenido |
|---|---|---|
| 1 | **Barra de anuncios** | ENVÍO GRATIS EN ESPAÑA · PAGO EN 12 MESES · GARANTÍA 30 DÍAS |
| 2 | **Hero** | Hook síntoma: "¿Cansado, con la piel apagada o sin dormir bien? La luz puede hacer más de lo que crees." + CTA principal → Guía "qué panel es para mí" / colección paneles |
| 3 | **Por necesidad** | 4 fichas: Sueño · Recuperación · Piel · Energía — cada una enlaza a colección filtrada |
| 4 | **El CORE** | Producto de entrada destacado — precio, foto, CTA. Target: quien quiere probar antes de un panel grande |
| 5 | **El panel más vendido** | Deep 5 en primer plano — precio, ROAS validado, testimonios de mujeres 45-54 |
| 6 | **Cómo funciona (mini)** | 3 iconos: Luz → Mitocondria → Resultado. Link a página educativa completa |
| 7 | **Social proof** | Reseñas migradas + número de clientes de luz (real: 56 carritos, 1 compra en sep — no publicar esto; usar reseñas históricas de la tienda actual) |
| 8 | **Guía "qué panel elegir"** | Comparador de 4 paneles en tabla simple |
| 9 | **Marca hermana** | "De EKIO — la empresa española líder en salud y entorno electromagnético" + enlace a electrosmogespana.com |
| 10 | **seQura banner** | "Paga a 12 meses desde 54€/mes" |

---

### Colecciones de ekiolight.com

**Por producto (navegación principal):**
- /collections/paneles-luz-roja — todos los paneles (Core, Deep5, BioRegen7, BioSpectrum11)
- /collections/bombillas-luz — bombillas roja, amarilla, pack salón+dormitorio
- /collections/packs — packs de bombillas y futuros packs de panel+bombilla

**Por necesidad (filtros de uso o colecciones separadas):**
- /collections/dormir-mejor
- /collections/recuperacion-deportiva
- /collections/piel-y-antiedad
- /collections/energia-y-rendimiento

> Nota técnica: las colecciones por necesidad pueden ser colecciones manuales (el mismo producto aparece en varias). El Core y las bombillas aparecen en todas; los paneles grandes en las que correspondan.

---

### Ficha de producto tipo (PDP) — qué debe llevar cada una

**Estructura obligatoria para paneles (Deep5, BioRegen7, BioSpectrum11):**

1. Headline A/B (síntoma como gancho, no el producto de frente — dato del memo: 72× más views)
2. Galería: foto de uso en contexto (persona, no estudio), foto técnica, infografía de longitudes de onda
3. Precio + opción de alquiler seQura (desde X€/mes) bien visible
4. Bullets: 5 beneficios concretos, en lenguaje de niño de 12 años
5. Sección "Para quién es este panel" — 3 perfiles de comprador
6. Comparador de paneles (tabla: Core / Deep5 / BioRegen7 / BioSpectrum11) — enlace o embebido
7. FAQ con Schema JSON-LD (mínimo 5 preguntas por producto)
8. Reseñas (widget, importadas de la tienda actual)
9. Garantía: 30 días devolución + 2 años garantía de fabricante
10. Sección envío: "Envío gratis a España peninsular. Entrega 3-5 días hábiles."
11. Financiación seQura: banner "Paga en 12 cómodos plazos" con calculadora de cuota
12. Sección de compliance: "Solo el Core tiene irradiancia publicada (mW/cm²). Deep5, BioRegen7 y BioSpectrum11: datos en validación con fábrica." — No publicar claims de dosis hasta tener ficha técnica.

> Pendiente de fábrica (bloqueante): ficha técnica con irradiancia de Deep5 / BioRegen7 / BioSpectrum11 antes de publicar claims de dosis o protocolos (ver memory: project_ekio_light_ficha_tecnica.md).

**Guía "qué panel elegir" (página o sección en home):**

```
| Panel     | Precio | Para quién       | Zonas de uso | Frecuencia recomendada |
|-----------|--------|------------------|--------------|------------------------|
| CORE      | 147€   | Probar/viajar    | Local (zona pequeña) | Diaria, 10-15 min |
| DEEP 5    | 650€   | Uso regular      | Media (espalda, piernas) | Diaria, 10-20 min |
| BIO REGEN 7 | 950€ | Recuperación avanzada | Grande | Diaria, 15-20 min |
| BIO SPECTRUM 11 | 2.500€ | Máxima cobertura | Cuerpo completo | Diaria |
```

---

## 3. Configuración técnica de la segunda tienda

### Plan de Shopify recomendado

| Plan | Precio | Razón |
|---|---|---|
| **Basic** (9€/mes primeras semanas) | 29€/mes (estándar) | Suficiente para lanzar. Subir a Shopify cuando los pedidos superen ~50/mes para tener informes avanzados |
| No es necesario Advanced hasta superar 100 pedidos/mes |

### Qué se duplica y qué no

| Elemento | Decisión | Responsable |
|---|---|---|
| **Tema Shopify** | Duplicar el tema actual de electrosmogespana.com (o comprar nuevo Dawn/Debut limpio para empezar sin deuda técnica) | Javier Escobar |
| **UpCart** | Instalar nueva licencia — UpCart no es transferible entre tiendas | Javier Escobar |
| **Reseñas de productos de luz** | Exportar desde la app de reseñas actual (Judge.me o similar) e importar a ekiolight.com sobre los mismos productos | Javier Escobar + empresa externa |
| **seQura** | Solicitar habilitación para nuevo dominio — misma cuenta de comerciante, nuevo dominio. Contactar a seQura antes del 15/oct | Javier (solicitud) |
| **Pasarelas de pago** | Shopify Payments + PayPal + Google Pay: se configuran de nuevo en la nueva tienda bajo el mismo autónomo (Francisco Javier Andrés Andrés). NIF idéntico, banco idéntico | Javier |
| **Políticas** | Copiar y adaptar (marca: "Ekio Light") — política de envíos, devoluciones, privacidad, aviso legal | Javier Escobar |
| **Píxel de Meta** | Píxel NUEVO para ekiolight.com (cuenta de ads puede ser la misma) — eventos separados para no contaminar los datos de electrosmogespana.com | Empresa externa o Javier Escobar |
| **Google Analytics 4** | Propiedad GA4 nueva para ekiolight.com. Vincular a la misma cuenta de Google del autónomo | Javier Escobar |
| **Klaviyo** | DECISIÓN REQUERIDA: ¿cuenta nueva o lista nueva dentro de la misma cuenta? Recomendación: misma cuenta Klaviyo, lista separada "Ekio Light Subscribers" con tag de origen. Más barato, mismo histórico de supresiones. NO crear cuenta nueva salvo que la marca quiera separación total de datos |
| **ManyChat** | Si se crean flujos para ekiolight.com, usar la misma página de Instagram de Ekio Light (ya creada) — flujos separados, misma cuenta ManyChat si el plan lo permite |
| **Markets** | No es necesario activar Markets para el lanzamiento — solo España. Activar después si se expande a LATAM |
| **Facturación Shopify** | Bajo el autónomo Francisco Javier Andrés Andrés (NIF del autónomo, misma dirección fiscal) |
| **Dominio** | Comprar ekiolight.com — verificar disponibilidad. Si no está libre: ekiolight.es como alternativa |

### Stock compartido (mismo almacén)

Si el almacén es el mismo (hipótesis: sí, gestión propia), hay dos opciones:

**Opción A — Inventario duplicado manual (recomendada para el lanzamiento):**
- Ekio Light en la nueva tienda comienza con stock ajustado. Al vender, Javier Escobar actualiza ambas tiendas manualmente o solo en la nueva.
- Mientras el volumen sea bajo (<10 pedidos/mes en luz), es manejable.

**Opción B — App de sincronización (medio plazo):**
- Apps como Syncio, Stock Sync o Multiorders permiten sincronizar inventario entre dos tiendas Shopify.
- Coste: ~15-30€/mes. Activar cuando los pedidos de luz superen 10-15/mes.

### Qué hace Javier Escobar vs empresa externa

| Tarea | Javier Escobar | Empresa externa |
|---|---|---|
| Crear tienda Shopify + instalar tema | ✓ | |
| Importar productos (CSV o manual) | ✓ | |
| Configurar pasarelas de pago | ✓ | |
| Instalar seQura (nuevo dominio) | ✓ | |
| Instalar UpCart + configurar | ✓ | |
| Escribir PDPs (copy) | | Agente shopify-agent |
| Customización avanzada del tema (CSS/Liquid) | | ✓ |
| Crear secciones custom (comparador, guía) | | ✓ |
| Configurar píxel Meta + GA4 | ✓ (básico) | ✓ (Enhanced Conversions) |
| Importar reseñas de luz | ✓ | |
| SEO técnico (metafields, schema, redirecciones) | | Agente seo-agent |
| Configurar Klaviyo (lista nueva) | Agente klaviyo-agent | |

---

## 4. Oferta de lanzamiento para Black Friday (coherente con márgenes >50%)

### Política de precios — sin destruir margen

Los paneles Ekio Light tienen margen >50% declarado. Evitar descuentos directos de porcentaje sobre PVP (destruyen precio de referencia). Alternativas:

**Opción 1 — Paquete de lanzamiento (recomendada):**

| Oferta | Contenido | Precio | Valor percibido |
|---|---|---|---|
| Pack Lanzamiento CORE | CORE + Bombilla Roja DUSK | 155€ (vs 164.50€ por separado) | Ahorro 9.50€ — bajo impacto en margen |
| Pack Lanzamiento DEEP 5 | DEEP 5 + guía protocolo PDF | 650€ (precio normal) | El valor añadido es el protocolo, sin tocar el precio |
| Pack DEEP 5 + CORE | Panel grande + Core portátil | 749€ (vs 797€ por separado) | Ahorro 48€ — en el margen del Core |

**Opción 2 — Primer mes de alquiler gratis (seQura):** ⚠️ NO VERIFICADO: confirmar con seQura si existe esta condición antes de usarla.
En vez de descuento, negociar con seQura que el primer mes sea sin cargo. Mensaje: "Empieza hoy por 0€ el primer mes." Impacto real: mínimo (seQura financia, no Ekio Light).

**Opción 3 — Bonus de contenido:**
Quien compre cualquier panel en Black Friday recibe acceso a "Protocolo Ekio Light — 30 días guiados" (PDF o vídeo). Coste de producción: 0€ para la tienda.

**Lo que NO hacer:**
- Descuentos de 20-30% sobre paneles (destroza precio de referencia y señal de calidad)
- Flash sales de 24h en productos de 650€+ (el proceso de decisión de compra de un panel dura días, no horas)
- Código BLACKFRIDAY sobre todo el catálogo (incluye bombillas a 17€ — no tiene sentido)

**Oferta comunicada recomendada para Black Friday:**
> "Lanzamos ekiolight.com. Por tiempo limitado, el Pack Lanzamiento incluye [Core o Deep5] + protocolo guiado de 30 días. Precio especial de apertura."

---

## 5. Calendario técnico semana a semana (28/sep — 27/nov)

| Semana | Fechas | Tareas clave | Responsable | Hito |
|---|---|---|---|---|
| **S1** | 28/sep–4/oct | Comprar dominio ekiolight.com · Crear tienda Shopify (Basic) · Solicitar ekiolight.com a seQura · Inventario de reseñas de productos de luz | Javier + Javier Escobar | Tienda creada |
| **S2** | 5–11/oct | Seleccionar tema (Dawn o duplicado) · Instalar UpCart · Importar productos de luz (CSV) · Configurar pasarelas de pago | Javier Escobar | Catálogo importado |
| **S3** | 12–18/oct | Copy de PDPs principales (Core, Deep5) — agente shopify-agent · Comparador de paneles · Página "Cómo funciona" | Agente shopify-agent + Escobar | PDPs Core y Deep5 listos |
| **S4** | 19–25/oct | Copy PDPs BioRegen7 y BioSpectrum11 · Importar reseñas · Configurar Klaviyo (lista nueva) · Configurar píxel Meta + GA4 | Escobar + empresa externa | Tienda completa en staging |
| **S5** | 26/oct–1/nov | QA completo (móvil + escritorio) · Test de compra real · seQura activado y probado · Redirecciones en electrosmogespana.com configuradas | Empresa externa | Tienda aprobada |
| **S6** | 2–8/nov | Lanzamiento soft — sin anuncios, solo email a lista de contactos de luz · Monitoreo de conversión · Ajustes rápidos de UX | Klaviyo-agent + Javier | Primera venta en ekiolight.com |
| **S7** | 9–15/nov | **CONGELACIÓN DE CONTENIDO** (deadline: 14/nov) · Preparar creativos Black Friday · Configurar campaña Meta Ads (audiencia: mujeres 25-54, síntoma como gancho) · Email sequences BF | Meta-ads-agent + Klaviyo-agent | Creativos BF aprobados |
| **S8** | 16–22/nov | Activar teaser BF ("abre el viernes") · Email D-7 a lista · Story con cuenta atrás en Instagram Ekio Light | Content-creator-agent | Audiencia calentada |
| **S9** | 23–27/nov | **BLACK FRIDAY 27/nov** · Activar Pack Lanzamiento + protocolo · Campaña Meta Ads activa · Email D-0 · WhatsApp/ManyChat | Meta-ads-agent + Klaviyo-agent | Primera campaña pagada Ekio Light |

**Fecha de congelación de contenido y código:** 14 de noviembre. Después de esa fecha, no se hacen cambios en el tema ni en el catálogo (riesgo de bugs en el momento de más tráfico).

---

## Decisiones que necesito de Javier

1. **Dominio:** ¿ekiolight.com o ekiolight.es? Verificar disponibilidad esta semana.
2. **Klaviyo:** ¿cuenta nueva para Ekio Light o lista separada en la misma cuenta? Recomendación: misma cuenta.
3. **Precio BioRegen7:** Shopify muestra 950€; la memoria del proyecto dice 970€. ¿Cuál es el PVP correcto?
4. **Empresa externa Shopify:** ¿contratada ya o sigue en decisión? Si no se contrata en S1, las semanas S3-S4 recaen en Javier Escobar — revisar capacidad.
5. **Ficha técnica irradiancia Deep5/BioRegen7/BioSpectrum11:** sin esto, los PDPs no pueden incluir claims de dosis. ¿Hay plazo con la fábrica?
6. **Reseñas de luz:** ¿cuántas reseñas verificadas hay en la tienda actual para productos de luz? ¿Qué app de reseñas se usa?
7. **IGNIS:** en la escalera de valor actual no aparece. ¿Se vende en ekiolight.com o se retira del catálogo activo?
8. **B2B:** ¿se activa canal B2B (Ankorstore) en paralelo al lanzamiento D2C o se pospone a 2027?
