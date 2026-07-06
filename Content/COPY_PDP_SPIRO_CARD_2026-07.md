# AUDITORÍA + COPY NUEVO — PDP SPIRO® Card
**URL**: /products/spiro-card-proteccion-electromagnetica
**Fecha**: 6 julio 2026
**Contexto**: 3ª página más visitada (4.663 visitas/60d), producto puerta de entrada (97 €), regla base de venta (1 por persona con móvil) y el producto con más unidades vendidas esta semana.

---

## DIAGNÓSTICO

### 🔴 P1 — Cadena de redirecciones de 2 saltos
`/producto/spiro-card/` (WordPress, aún rankea pos 2,6 para "spirocard" con 986 imp) → 301 → `/products/spiro-card` → 301 → `/products/spiro-card-proteccion-electromagnetica`.
Google sigue cadenas, pero pierden autoridad y retrasan la consolidación — por eso "spiro card" aparece repartida en 3 URLs (~3.100 imp, 49 clics, CTR 1,6%).
**Fix (5 min)**: en Shopify → Navegación → Redirecciones de URL, editar `/producto/spiro-card/` para que apunte DIRECTO a `/products/spiro-card-proteccion-electromagnetica` (saltarse el intermedio).

### 🔴 P2 — Queries de oro en página 1 sin capturar (mismo patrón que la colección: snippet débil)
| Query | Imp (3 URLs) | Posición | Clics | Qué falta |
|---|---|---|---|---|
| spiro card | ~650 | 7,5–11,5 | 26 | Title con gancho (precio + ★ + garantía) |
| **spirocard para que sirve** | 261 | 7,5–9,8 | **0** | Ni un heading con la frase exacta — añadir bloque "¿Para qué sirve?" |
| **spiro card opiniones** | 115 | 4,6–12,3 | ~1 | La FAQ ya lo pregunta, pero el snippet no muestra estrellas ni cifra de reseñas |
| tarjeta spiro | 134 | 2,0–9,1 | 7 | Ya se usa en H1 ✓ — mantener |
| spirocard | 296 | 2,6–10,5 | 3 | Consolidación de URLs (P1) |

### 🟠 P3 — Errata visible: "Esta es la opnión de nuestros clientes"
H2 duplicado además con "Testimonios de Nuestros Clientes" (dos encabezados para lo mismo). Corregir y unificar.

### 🟠 P4 — Title y meta sin gancho comercial
Title actual: "Spiro Card | Protección electromagnética para móviles" — correcto pero plano. Meta sin precio, sin garantía, sin ★.

### 🟠 P5 — El multiplicador de AOV está desaprovechado
La regla de venta es "1 Card por persona con móvil" — pero la PDP vende unidades sueltas sin preguntar cuántas personas hay en casa. Un selector guiado + cross-sell al Pack Familia (445 €: 2 Card + 1 Disc) convierte una venta de 97 € en una de 194–445 €.

### 🟠 P6 — Beneficios formulados como claims de salud sin ancla
"Más calma mental", "más energía y menos fatiga", "mejora la concentración" — sin enlace a evidencia ni mecanismo. Con la página La Ciencia ya creada, cada beneficio puede anclarse (estudio VFC, estudio sueño) y rematarse con la garantía de 90 días como mecanismo honesto de prueba.

### ✅ Lo que ya está bien
9 FAQs (incluida una de "opiniones" — buena intuición), sección de testimonios, Judge.me integrado, schema Product con AggregateRating, 2.040 palabras de contenido, H1 con "Tarjeta EMF" + "tarjeta spiro" funcionando (pos 2,0).

---

## COPY NUEVO

### Title (~58 chars)
> `SPIRO® Card — Filtro EMF para tu móvil · 97 € | EKIO`

### Meta description
> `La tarjeta que filtra la radiación electromagnética de tu móvil. 1 por persona, cabe en la funda. ★4,8 en +[N] opiniones. 97 € con 90 días de garantía y envío gratis.`

### Bloque de compra (above the fold)

**H1**: `SPIRO® Card — La tarjeta que filtra la radiación de tu móvil`
**Bajo el H1**: ★★★★★ 4,8/5 — [N] opiniones verificadas *(ancla a la sección de reseñas — captura "spiro card opiniones")*
**Precio**: 97 € · o 8,08 €/mes con seQura
**Bullets de confianza (junto al botón)**:
- ✓ 90 días de garantía o te devolvemos el dinero
- ✓ Envío gratis 24/48h desde España
- ✓ Sin batería ni mantenimiento — dura años
- ✓ No bloquea señal: tu móvil funciona igual

**Selector guiado de cantidad** *(el multiplicador de AOV)*:
> **¿Cuántas personas con móvil hay en tu casa?** Cada una necesita su SPIRO Card.
> [1] [2] [3] [4+]
> Al elegir 2+: "💡 ¿Sois familia? El **Pack Familia** (2 Cards + 1 Disc para el hogar) sale mejor: 445 € → Ver Pack"

**CTA**: `AÑADIR AL CARRITO — 97 €` (actualiza el importe según cantidad)

**📷 Galería (dirección de arte)**: 1) Card saliendo de la funda del móvil (hero), 2) tamaño real en mano, 3) infografía "dónde va" (funda/bolsillo/cartera), 4) familia con sus móviles + cards, 5) captura del test SAR de MORLAB con sello "estudio enlazado".

### Bloque "¿Para qué sirve la SPIRO® Card?" *(NUEVO — captura "spirocard para que sirve", 261 imp pos 7-9 con 0 clics)*

**H2**: `¿Para qué sirve la SPIRO® Card?`
> La SPIRO® Card sirve para **filtrar la contaminación electromagnética que emite tu móvil**, el dispositivo que más cerca de tu cuerpo pasa el día (y la noche). Se coloca en la funda del teléfono y actúa de forma pasiva, sin batería, sin apps y sin bloquear la señal. Es la protección personal básica de EKIO: **una por cada persona con móvil**. Para cubrir estancias completas o el router, se complementa con SPIRO Disc o Square.

*(60 palabras, definicional, citable — el formato AI Overview. Colocar tras el bloque de compra.)*

### Beneficios (reformulados con ancla de evidencia)

**H2**: `Qué notan quienes la llevan` *(reframe: de claim propio a experiencia reportada + evidencia)*
- **Descanso de más calidad** — la calidad del sueño fue una de las variables medidas en los ensayos clínicos de SPIRO → [ver estudio]
- **Menos tensión al final del día** — la respuesta al estrés y la variabilidad cardíaca (VFC) mejoraron bajo exposición filtrada → [ver estudio VFC]
- **Concentración en el teletrabajo** — menos exposición de campo cercano en las horas de pantalla
- **Y si tú no lo notas: te devolvemos el dinero.** 90 días de prueba real en tu casa.

### Comparativa Card vs Card X (upsell honesto)

**H2**: `¿Card o Card X?`
| | SPIRO® Card — 97 € | SPIRO® Card X — 167 € |
|---|---|---|
| Para quién | Uso diario normal | +6h de pantallas, ciudad, teletrabajo intensivo |
| Cobertura | Personal básica | Personal ampliada |
| Regla | 1 por persona | Sustituye a la Card, no se suman |

`¿Dudas? Haz el test (2 min) →`

### Reseñas
**H2**: `Opiniones de la SPIRO® Card en España` *(keyword exacta — hoy el H2 es genérico y hay dos duplicados, uno con errata "opnión")*
Widget Judge.me completo + resumen: "★4,8/5 sobre [N] opiniones verificadas".

### FAQ — mantener las 9 y ajustar 2
- Renombrar la 1ª a exact-match: **"¿Para qué sirve la SPIRO Card y cómo funciona?"**
- La de opiniones, enlazarla a la sección de reseñas y citar la cifra real.
- Mantener en schema FAQPage.

### Cierre
**H2**: `Empieza por donde empiezan todos`
> La SPIRO Card es el primer paso de la higiene electromagnética: protege a la persona, no solo al lugar. Añade la tuya (y la de los tuyos) y pruébala 90 días.
`AÑADIR AL CARRITO` · `Ver toda la colección SPIRO →`

---

## ENLAZADO INTERNO
- ← Colección: "Ver todos los filtros electromagnéticos SPIRO" (anchor exacto)
- → La Ciencia: en beneficios (estudios VFC/sueño) y en "cómo funciona"
- → Pack Familia: desde el selector de cantidad y el cross-sell
- → Card X: comparativa
- → Test recomendador

## GEO
- Bloque "¿Para qué sirve?" = respuesta directa citable
- Comparativa Card/Card X en tabla HTML
- Schema Product: verificar que AggregateRating lleva ratingValue y reviewCount REALES de Judge.me (hoy la description dice "Judge.me 2" — revisar)
- FAQ schema ya existe ✓

## PRIORIZACIÓN
| # | Acción | Esfuerzo | Impacto |
|---|---|---|---|
| 1 | Redirección directa `/producto/spiro-card/` → URL final (quitar salto) | 5 min | Alto (consolida 3 URLs) |
| 2 | Corregir errata "opnión" + unificar H2 de testimonios | 5 min | Medio |
| 3 | Title + meta con precio/★/garantía | 5 min | Alto (CTR) |
| 4 | Bloque "¿Para qué sirve?" | 30 min | Alto (261 imp pos 7 sin dueño) |
| 5 | H2 reseñas "Opiniones de la SPIRO Card en España" | 5 min | Medio-alto |
| 6 | Selector de cantidad + cross-sell Pack Familia | 2-4 h (tema) | 🔴 El mayor impacto en AOV |
| 7 | Comparativa Card/Card X | 1 h | Medio |

**KPIs**: CTR del clúster "spiro card" del 1,6% → 4%+ · AOV de pedidos con Card: de 1,0 → 1,6+ unidades/pedido · conversión PDP→carrito +20%.
