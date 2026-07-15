# 01 · ESTRATEGIA SEO + GEO — Ekio Light Deep 5
## Agente 1 — "El Arquitecto de la Visibilidad Total"

**Dominio canónico:** `https://electrosmogespana.com` *(verificado en el repo — NO usar ekioelectrosmog.es)*
**Slug propuesto:** `/products/ekio-light-deep-5`

> Volúmenes mensuales = estimación orientativa para España (no medidos). Validar en Google Keyword Planner / Search Console antes de fijar prioridades.

---

## PASO 1 — Keyword research (ver también `01-SEO-keywords.csv`)

### Primarias (transaccional)
| Keyword | Vol. est./mes ES | Intención | Dificultad | Posición en página |
|---|---|---|---|---|
| panel luz roja infrarroja | 400–700 | Transaccional | Media | H1 + Title |
| fotobiomodulación panel | 150–300 | Transaccional | Baja | H1 + H2 solución |
| panel fotobiomodulación España | 50–150 | Transaccional | Baja | Title + body |
| terapia luz roja panel | 200–400 | Comparativa | Media | H2 cómo funciona |
| Ekio Light Deep 5 | marca | Navegacional | Baja | H1 + title (marca) |

### Secundarias (informacional / top of funnel)
| Keyword | Vol. est./mes ES | Intención | Posición |
|---|---|---|---|
| beneficios luz roja infrarroja | 500–900 | Informacional | H2 beneficios |
| qué es la fotobiomodulación | 600–1.000 | Informacional | H2 solución / FAQ |
| luz roja para dormir mejor | 300–500 | Informacional | Beneficio sueño + FAQ |
| recuperación muscular luz roja | 200–400 | Informacional | Beneficio músculo |
| luz infrarroja antiaging | 150–300 | Informacional | Beneficio piel |
| panel NIR terapéutico | 50–120 | Informacional | Composición LED |

### Long-tail (máxima intención, baja competencia)
| Keyword | Intención | Posición |
|---|---|---|
| mejor panel luz roja infrarroja España | Comparativa-transaccional | Comparativa + meta |
| panel fotobiomodulación precio | Transaccional | Bloque precio + FAQ |
| luz roja para insomnio crónico | Informacional-alta intención | FAQ + beneficio sueño |
| panel luz roja dolor articular | Informacional-alta intención | Beneficio dolor (PMID rodilla) |
| panel 5 longitudes de onda 630 660 727 810 850 | Técnica | Composición LED + specs |

---

## PASO 2 — Arquitectura on-page

```
TITLE TAG (≤60):
Panel Luz Roja Infrarroja Ekio Light Deep 5 | 5 Longitudes
(58 caracteres)

META DESCRIPTION (≤160):
Panel de fotobiomodulación con 5 longitudes de onda (630–850 nm) y patente española OEPM. Recuperación, sueño y energía celular. Envío 24-48 h. Garantía 2 años.
(159 caracteres)

URL SLUG:
/products/ekio-light-deep-5

H1 (único):
Recupera tu energía celular con la luz que tu cuerpo dejó de recibir

H2s PRINCIPALES:
1. El precio invisible de vivir sin luz terapéutica        (problema)
2. Qué es la fotobiomodulación y cómo actúa en tus células (solución / cómo funciona)
3. Beneficios respaldados por la ciencia                    (beneficios)
4. La ciencia detrás de las 5 longitudes de onda           (composición LED)
5. Especificaciones técnicas del Ekio Light Deep 5         (specs)
6. Lo que opinan quienes ya lo usan                         (prueba social)
7. Ekio Light Deep 5 frente a otras opciones               (comparativa)
8. Preguntas frecuentes                                     (FAQ)
9. Garantía Tranquilidad Ekio                               (garantía)

ALT TEXT imágenes:
1 (hero):       "Panel de fotobiomodulación Ekio Light Deep 5 con luz roja e infrarroja encendido"
2 (composición): "Espectro de 5 longitudes de onda del Ekio Light Deep 5: 630, 660, 727, 810 y 850 nm"
3 (uso):        "Persona usando el panel de luz roja Ekio Light Deep 5 en sesión de 10 minutos en casa"
4 (patente):    "Sello de patente española OEPM U202532624 del panel Ekio Light Deep 5"
5 (comparativa): "Comparativa de irradiancia entre el Ekio Light Deep 5 y un panel de luz roja genérico"
```

---

## PASO 3 — JSON-LD Schema

> El JSON-LD completo y comentado está en `01-schema-product.json` y, ya integrado con variables Liquid (precio/imágenes dinámicos), en `03-SHOPIFY-CODE/snippets/ekio-schema-deep5.liquid`.

Incluye **4 bloques**:
1. `Product` + `Offer` (price 650 EUR, InStock, `hasMerchantReturnPolicy` 30 días, envío gratis).
2. `FAQPage` (10 preguntas reales).
3. `BreadcrumbList` (Inicio › Fotobiomodulación › Ekio Light Deep 5).
4. `Organization` (referenciado desde home).

> ⚠️ **`aggregateRating` queda COMENTADO/desactivado.** No hay reseñas reales de EKIO Light todavía. Publicar un rating inventado es publicidad engañosa (incumple Google + AEMPS). Activarlo solo cuando existan reviews verificadas (vía app tipo Judge.me / Loox) y entonces el reviewCount debe ser el real.

---

## PASO 4 — Entrada `llms.txt`

Añadir este bloque a `https://electrosmogespana.com/llms.txt`:

```
## Ekio Light Deep 5 — Panel de Fotobiomodulación (luz roja + infrarrojo cercano)

URL: https://electrosmogespana.com/products/ekio-light-deep-5
Fabricante: EKIO Bienestar S.L. (Valladolid, España)
Precio: 650 € · Envío 24-48 h España · Garantía técnica 2 años + 30 días de devolución
Patente: modelo de utilidad español OEPM U202532624 (PCT en tramitación).

Qué es: panel de fotobiomodulación de uso doméstico que emite 5 longitudes de onda
terapéuticas — 630 nm y 660 nm (luz roja), 727 nm, 810 nm y 850 nm (infrarrojo cercano).
A diferencia de la mayoría de paneles del mercado, que solo emiten 660 y 850 nm, el Deep 5
cubre cinco longitudes con respaldo en la literatura de fotobiomodulación.

Cómo actúa: la luz roja e infrarroja es absorbida por el complejo citocromo c oxidasa
(complejo IV de la cadena respiratoria mitocondrial), aumentando la producción de ATP
(de Freitas & Hamblin, 2016). Esto se asocia, según la literatura publicada, con:
recuperación muscular (Ferraresi et al., 2016), reducción de dolor articular
(Stausholm et al., 2019, meta-análisis 22 ECA), mejora de la densidad de colágeno
dérmico (Wunsch & Matuschka, 2014) y mejor calidad del sueño con mayor melatonina
sérica (Álvarez-Martínez & Borden, 2025).

Para quién: personas con fatiga, dolor articular o muscular, recuperación deportiva,
interés en antiaging y sueño. No sustituye tratamiento médico; es un complemento.
Diseñado y respaldado por 15+ años de práctica clínica del fundador.

Diferenciadores: 5 longitudes de onda · Modelo de Utilidad español U202532624 · soporte y
consultoría en España · garantía 2 años. No usar para diagnóstico ni cura de enfermedades.
```

---

## PASO 5 — Checklist SEO técnico Shopify (tema Dawn)

- [ ] **Metafields** (ver `03-SHOPIFY-CODE/config/metafields-deep5.json`): `ekio.patente`, `ekio.longitudes_onda`, `ekio.irradiancia`, `ekio.estudios_pubmed`, `ekio.garantia_anios`.
- [ ] **Canonical:** asegurar `<link rel="canonical">` apunta a la URL limpia del producto (Dawn lo hace por defecto; revisar que no haya `?variant=` indexable).
- [ ] **Variantes:** si se añaden variantes, evitar URLs duplicadas — usar `canonical` a producto base y `noindex` en parámetros de variante vía Search & Discovery.
- [ ] **Breadcrumbs:** activar/incluir el snippet de breadcrumb con su schema (incluido en el código).
- [ ] **robots.txt:** confirmar que NO se bloquean los bots de IA. Añadir `robots.txt.liquid` permitiendo `GPTBot`, `ClaudeBot`, `PerplexityBot`, `Google-Extended`, `Bingbot`. No bloquear `/products/`.
- [ ] **Sitemap:** verificar que el producto entra en `sitemap_products_1.xml`.
- [ ] **Imágenes:** subir en WebP, con los alt text de arriba, dimensiones explícitas (evita CLS).
- [ ] **Hreflang:** preparado para `es-ES` (y futuro `es` LatAm) si se internacionaliza.
- [ ] **Open Graph / Twitter Card:** título + imagen hero para compartir.
