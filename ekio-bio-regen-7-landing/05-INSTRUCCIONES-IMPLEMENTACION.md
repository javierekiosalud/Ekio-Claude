# 05 · INSTRUCCIONES DE IMPLEMENTACIÓN — Bio Regen 7

## Datos del producto para Shopify

| Campo | Valor |
|---|---|
| Título | Panel Ekio Light Bio Regen 7 — Sistema de Regeneración Celular |
| Vendor | Ekio Light |
| Tipo de producto | Panel de fotobiomodulación |
| Template suffix | `productos-spiro` (mismo que Deep 5 / Bio Spectrum 11) |
| Handle | `bio-regen-7-panel-regeneracion-celular` |
| Precio | **970,00 €** (incluye Ekio Light System Bio Regen 7 completo) |
| Tags | ekio-light, panel-luz-roja, fotobiomodulacion, bio-regen-7, intermedio, regeneracion, piel, dolor, deporte, recuperacion |
| Estado | Draft hasta validar ficha técnica → luego Active |

## Qué incluye el precio (970 €): base + Stack

**Base (panel + ritual de noche):**
1. Panel Bio Regen 7 (70 LEDs + COB · 7 longitudes de onda)
2. Bombilla ámbar 1800K

**El Stack — incluido sin coste adicional, mostrar precio real tachado → Gratis:**
3. App Ekio Coach — acceso completo · valor real **177 €** → Gratis
4. Guía de Uso Interactiva Ekio System · valor real **49 €** → Gratis
5. Bombilla roja de Ekio Light · valor real **25 €** → Gratis
6. Vitamina C + Vitamina B50 de Laittin · valor real **49,60 €** → Gratis

**Total valor del Stack: 300,60 €**, incluido sin coste dentro de los 970 €.

> Decisión comercial (Javier, jul-2026): no se vende como "sistema con extras", sino como **método completo** — el mensaje comercial es "no vendemos un panel, vendemos un método". Mostrar el Stack con precio de tachado → Gratis en su propia sección (no mezclado con la ficha técnica del panel), igual que se hizo en el Deep 5.

---

## Orden de montaje de la PDP (bloques CRO)

1. Hero / Buy box (Bloque 1)
2. Spec strip: 7 · 70+COB · U202532624
3. El programa de regeneración celular — qué incluye el sistema (Bloque 2)
4. Las 7 longitudes de onda — banda desplegable con los 2 diferenciadores (Bloque 3)
5. Beneficios — los 10 ejes (Bloque 4)
6. Especificaciones técnicas (Bloque 5)
7. Protocolo de uso (Bloque 6)
8. Comparativa de gama Deep 5 / Bio Regen 7 / Bio Spectrum 11 (Bloque 7)
9. Garantía
10. FAQ (Bloque 8)
11. CTA final (Bloque 9)

No incluir un selector de "circuitos independientes" como en el Bio Spectrum 11: el Bio Regen 7 no tiene circuitos controlables por separado. El panel interactivo del hero debe presentarse como visualización ilustrativa de qué longitud hace qué (Cian / Rojo-NIR / IR profundo / COB), no como control real de hardware.

---

## Checklist de publicación

- [ ] Rellenar ficha técnica real: irradiancia (mW/cm² a X cm), potencia total (W), dimensiones, peso. Ver `⚠️` en Bloque 5 del copy.
- [ ] Sustituir la URL de imagen placeholder en `01-schema-product.json` por la del CDN real.
- [ ] Pegar los 3 bloques JSON-LD (Product + FAQPage + BreadcrumbList) en el `<head>` de la PDP.
- [ ] Publicar las 11 frases citables (`03-GEO`) en HTML visible.
- [ ] Añadir entrada de `llms.txt` y verificar `robots.txt` (sin Disallow a bots de IA).
- [ ] Meta title + meta description desde `01-SEO-STRATEGY.md`.
- [ ] Alt text de imágenes (WebP, con `width`/`height`).
- [ ] Enlazado interno hacia y desde Deep 5 y Bio Spectrum 11.
- [ ] Bloque de autor (Javier Andrés) + 3 referencias PubMed visibles con DOI.
- [ ] Confirmar que el handle es consistente con el patrón de catálogo antes de fijarlo.

---

## Avisos importantes

- **Testimonios:** EKIO no tiene aún reviews reales verificadas del Bio Regen 7. Usar plantillas de formato para rellenar con casos reales; no publicar como reales. Alternativa en lanzamiento: testimonios de paneles hermanos (Deep 5) atribuidos explícitamente a ese producto. **No** declarar `AggregateRating` en schema sin valoraciones reales.
- **Límite legal:** ningún claim de tratamiento/diagnóstico/cura/prevención de enfermedad. Contraindicaciones visibles en la PDP (no solo en el manual).
- **Patente:** modelo de utilidad español U202532624, PCT en tramitación. Coherente con el marco usado en Deep 5 y Bio Spectrum 11.
- **No publicado en Shopify por Claude:** el producto NO se ha creado en la tienda. Este paquete es el copy/estructura listo para que lo implementes tú o el equipo de tema.

---

## Archivos de este paquete

| Archivo | Contenido | Capa (agente) |
|---|---|---|
| `01-SEO-STRATEGY.md` | Keywords, meta, headings, alt, enlazado, CWV | SEO |
| `01-SEO-keywords.csv` | Keyword map en CSV | SEO |
| `01-schema-product.json` | JSON-LD Product + FAQPage + BreadcrumbList (precio 970 €) | GEO |
| `02-COPY-COMPLETO.md` | Copy completo en bloques + banco de titulares | Contenido + Shopify/CRO |
| `03-GEO-CITABILIDAD.md` | Frases citables, Q&A IA, llms.txt, comparativa, E-E-A-T | GEO |
| `05-INSTRUCCIONES-IMPLEMENTACION.md` | Este documento | Ensamblado |
| `index.html` | Versión visual navegable (hero animado, buy box, sticky bar, CRO) | Visual |
