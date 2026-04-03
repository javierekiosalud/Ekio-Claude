---
name: seo-schema
description: Datos estructurados JSON-LD para Shopify. Implementa y audita schemas de Product, Organization, BreadcrumbList, FAQ, Article, CollectionPage y HowTo. Todo vía snippets Liquid dinámicos, listo para copiar y pegar.
agent: seo-agent
---

# Skill: Datos Estructurados (JSON-LD) para Shopify

## Prioridad de implementación

1. **Product** (CRÍTICO) — name, description, image, brand, SKU, GTIN, offers (price, priceCurrency, availability), aggregateRating, review
2. **Organization** (CRÍTICO) — homepage, logo, contacto, redes sociales, fundador
3. **BreadcrumbList** (ALTO) — todas las páginas
4. **FAQ** (ALTO) — páginas de producto y páginas informativas
5. **Article** (ALTO) — blog posts con author, datePublished, dateModified
6. **CollectionPage / OfferCatalog** (MEDIO) — páginas de colección
7. **HowTo** (MEDIO) — páginas de instrucciones de uso
8. **WebSite** (MEDIO) — homepage con potentialAction SearchAction
9. **LocalBusiness** (si aplica) — si hay tienda física
10. **Person** (MEDIO) — páginas de equipo/fundador para EEAT

---

## Reglas de implementación en Shopify

- Usar SIEMPRE JSON-LD (no Microdata)
- Inyectar vía snippets de Liquid (no apps cuando sea posible, para control total)
- Vincular variables dinámicas de Liquid para que price/availability se actualicen automáticamente
- Un solo bloque JSON-LD por tipo de schema por página
- Validar SIEMPRE con Google Rich Results Test después de implementar
- Los datos del JSON-LD DEBEN coincidir exactamente con lo visible en HTML
- TODOS LOS COMENTARIOS EN CÓDIGO EN MAYÚSCULAS

---

## Metafields esenciales en Shopify para schema

Configurar en Settings > Custom Data > Products:
- `custom.gtin13` — código GTIN/EAN
- `custom.mpn` — número de parte del fabricante
- `custom.material` — material del producto
- `custom.color` — color
- `custom.weight_value` / `custom.weight_unit` — peso
- `custom.country_of_origin` — país de fabricación

---

## Contexto EKIO para schema

- **Patente U202532624** — incluir en Product schema como `additionalProperty` o en description
- **Organization**: EKIO Electrosmog España, fundador Javier Andres
- **EEAT**: Javier Andres con 15+ años en bienestar, avalado por UVa/Centrotec
- **Avales científicos**: referenciar PubMed en `citation` de Article schema
- Todas las páginas de producto deben incluir FAQ schema con al menos 3 preguntas

---

## Flujo de implementación

1. Identificar qué tipos de schema faltan (auditar con `seo-auditoria`)
2. Crear snippet Liquid para cada tipo: `snippets/schema-product.liquid`, etc.
3. Incluir el snippet en el template correspondiente (`product.liquid`, `index.liquid`, etc.)
4. Mapear variables dinámicas de Liquid (`product.price`, `product.available`, etc.)
5. Validar con Google Rich Results Test
6. Verificar en Search Console > Enhancements tras 1-2 semanas
