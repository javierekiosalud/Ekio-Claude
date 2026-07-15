# 05 · INSTRUCCIONES DE IMPLEMENTACIÓN — Bio Spectrum 11

## Datos del producto para Shopify

| Campo | Valor |
|---|---|
| Título | Bio Spectrum 11 — Panel de Fotobiomodulación Profesional |
| Vendor | Ekio Light |
| Tipo de producto | Lámparas para terapia de iluminación |
| Template suffix | `productos-spiro` (mismo que Deep 5 / Bio Regen 7) |
| Handle | `bio-spectrum-11-panel-fotobiomodulacion-profesional` |
| Precio | **2.500,00 €** (base + Stack del método incluido gratis) |
| Tags | full spectrum, bio spectrum 11, fotobiomodulación, uv-b |
| Estado | Draft hasta validar ficha técnica → luego Active |

## Qué incluye el precio — no vendemos un panel, vendemos un método

**Base (dentro del precio, obligatoria):**
1. Panel Bio Spectrum 11 (210 LEDs + COB · 11 longitudes · 4 circuitos)
2. Gafas de protección UV (obligatorias para el circuito Azul)

**Stack (gratis, patrón Bio Regen 7 — precio tachado → Gratis):**
| Ítem | Valor real | Precio en la compra |
|---|---|---|
| App Ekio Coach — acceso completo | 177 € | Gratis |
| Guía de Uso Interactiva Ekio System | 49 € | Gratis |
| Bombilla roja + Bombilla Ámbar de Ekio Light | 50 € | Gratis |
| Pack Vitamina C + B50 + D3-K2 + Probióticos (Laittin) | 109 € | Gratis |
| **Valor real del Stack** | **385 €** | **0 €** |

> Decisión comercial confirmada: se vende como método, no como panel suelto (mismo framework que Bio Regen 7). Reflejar el desglose en la sección "La base + el Stack" (Bloque 9 del copy) — la base en `.kit`, el Stack en la sección oscura `.stack-section` con precios tachados, y en la galería de imágenes (foto del kit + captura de la app).

---

## Orden de montaje de la PDP (bloques CRO)

1. Hero / Buy box (Bloque 1)
2. Spec strip: 11 · 4 · 210+COB · U202532624
3. El problema — medio espectro (Bloque 2)
4. Los 4 circuitos — accordeon interactivo (Bloque 4)
5. La ciencia — semáforo de evidencia (Bloque 5)
6. Intensidad y pulso (Bloque 6)
7. Protocolos de uso (Bloque 8)
8. La base + el Stack — panel/gafas incluidos y bonos gratis con precio tachado (Bloque 9)
9. Prueba social *(ver aviso de testimonios abajo)*
10. Comparativa (Bloque 10)
11. Seguridad y contraindicaciones (Bloque 11)
12. Garantía (Bloque 13)
13. FAQ (Bloque 12)
14. CTA final (Bloque 14)

Reutilizar la **animación interactiva del panel** (los 4 circuitos iluminándose por color) de `Bio-Spectrum-11-Guia-Biohacker.html` en el hero — es un elemento de conversión ya construido.

---

## Checklist de publicación

- [ ] Rellenar ficha técnica real: irradiancia (mW/cm² a X cm), potencia total (W), dimensiones, peso, voltaje, vida útil LEDs. Ver `⚠️` en Bloque 7 del copy.
- [ ] Sustituir la URL de imagen placeholder en `01-schema-product.json` por la del CDN real.
- [ ] Pegar los 3 bloques JSON-LD (Product + FAQPage + BreadcrumbList) en el `<head>` de la PDP.
- [ ] Publicar las 15 frases citables (`03-GEO`) en HTML visible.
- [ ] Añadir entrada de `llms.txt` y verificar `robots.txt` (sin Disallow a bots de IA).
- [ ] Meta title + meta description desde `01-SEO-STRATEGY.md`.
- [ ] Alt text de imágenes (WebP, con `width`/`height`).
- [ ] Enlazado interno hacia y desde paneles hermanos, suplementos y gafas.
- [ ] Bloque de autor (Javier Andrés) + 7 referencias PubMed visibles con DOI.
- [ ] Confirmar que el handle es consistente con el patrón de catálogo antes de fijarlo.

---

## Avisos importantes

- **Testimonios:** EKIO no tiene aún reviews reales verificadas del Bio Spectrum 11 (producto nuevo). Usar plantillas de formato para rellenar con casos reales; no publicar como reales. Alternativa en lanzamiento: testimonios de paneles hermanos (Deep 5, Bio Regen 7) atribuidos explícitamente a ese producto. **No** declarar `AggregateRating` en schema sin valoraciones reales.
- **Límite legal:** ningún claim de tratamiento/diagnóstico/cura/prevención de enfermedad. Contraindicaciones visibles en la PDP (no solo en el manual).
- **Patente:** modelo de utilidad español U202532624 (protegido en 157 países vía PCT). Coherente con el marco usado en la ficha de Deep 5.
- **No publicado en Shopify por Claude:** el producto NO se ha creado en la tienda. Este paquete es el copy/estructura listo para que lo implementes tú o el equipo de tema.

---

## Archivos de este paquete

| Archivo | Contenido | Capa (agente) |
|---|---|---|
| `01-SEO-STRATEGY.md` | Keywords, meta, headings, alt, enlazado, CWV | SEO |
| `01-SEO-keywords.csv` | Keyword map en CSV | SEO |
| `01-schema-product.json` | JSON-LD Product + FAQPage + BreadcrumbList (precio 2.500 €) | GEO |
| `02-COPY-COMPLETO.md` | Copy completo en 14 bloques + banco de titulares | Contenido + Shopify/CRO |
| `03-GEO-CITABILIDAD.md` | Frases citables, Q&A IA, llms.txt, comparativa, E-E-A-T | GEO |
| `05-INSTRUCCIONES-IMPLEMENTACION.md` | Este documento | Ensamblado |
