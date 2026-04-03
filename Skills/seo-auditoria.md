---
name: seo-auditoria
description: Auditoría SEO completa en 10 capas para tiendas Shopify. Evalúa crawlabilidad, on-page, schema, velocidad, mobile y GEO readiness. Entrega score global, top problemas críticos, quick wins y roadmap 90 días.
agent: seo-agent
---

# Skill: Auditoría SEO Completa

## Datos que necesitas del usuario
- URL de la tienda Shopify
- ¿Tiene Google Search Console conectado?
- ¿Tiene Google Analytics 4?
- Nicho / público objetivo
- Competidores principales (si los conoce)

---

## Framework de auditoría — 10 capas

Analiza y puntúa cada capa de 1 a 10:

### 1. CRAWLABILIDAD & INDEXACIÓN
- ¿Robots.txt permite el rastreo correcto? ¿Bloquea algo importante?
- ¿El sitemap.xml se genera correctamente y está enviado en Search Console?
- ¿Hay páginas importantes no indexadas (noindex accidental)?
- ¿Las URLs canónicas son correctas (canonical tags)?
- ¿Los bots de IA (GPTBot, ClaudeBot, PerplexityBot) están permitidos en robots.txt?
- Estado del archivo llms.txt (¿existe? ¿está actualizado?)

### 2. ESTRUCTURA DE URLs & NAVEGACIÓN
- ¿Las URLs son descriptivas y contienen keywords? (evitar /products/12345)
- ¿La jerarquía colecciones > productos es lógica?
- ¿Hay breadcrumbs implementados con schema BreadcrumbList?
- ¿La navegación principal incluye colecciones clave?
- ¿Hay páginas huérfanas sin enlaces internos?

### 3. TÍTULOS & META DESCRIPTIONS
- ¿Cada página tiene un title tag único, con keyword principal y ≤60 caracteres?
- ¿Cada página tiene meta description persuasiva, con keyword y ≤160 caracteres?
- ¿Los títulos de producto comunican beneficio + keyword?
- ¿Hay titles duplicados o genéricos?

### 4. CONTENIDO ON-PAGE
- ¿Las descripciones de producto son únicas, largas (300+ palabras) y optimizadas?
- ¿Hay H1 único por página con keyword principal?
- ¿La jerarquía de headings (H1 > H2 > H3) es lógica?
- ¿Hay contenido thin (páginas con menos de 100 palabras)?
- ¿Las páginas de colección tienen texto descriptivo, no solo productos?

### 5. IMÁGENES & MEDIA
- ¿Todas las imágenes tienen alt text descriptivo con keywords?
- ¿Las imágenes están comprimidas (WebP preferido)?
- ¿Hay lazy loading implementado?
- ¿Los nombres de archivo son descriptivos? (evitar IMG_0123.jpg)

### 6. DATOS ESTRUCTURADOS (JSON-LD)
- ¿Product schema está completo? (name, price, availability, reviews, brand, SKU, GTIN)
- ¿Organization schema en homepage?
- ¿BreadcrumbList schema en todas las páginas?
- ¿FAQ schema en páginas con preguntas frecuentes?
- ¿Article schema en blog posts?
- ¿CollectionPage / OfferCatalog schema en colecciones?
- ¿Los datos del JSON-LD coinciden con los datos visibles en HTML?
- Validar con Google Rich Results Test y Schema Markup Validator

### 7. VELOCIDAD & CORE WEB VITALS
- LCP (Largest Contentful Paint): objetivo < 2.5s
- CLS (Cumulative Layout Shift): objetivo < 0.1
- INP (Interaction to Next Paint): objetivo < 200ms
- TTFB (Time to First Byte): objetivo < 800ms
- ¿El tema carga JavaScript innecesario? ¿Cuántas apps pesadas hay?

### 8. SEO MOBILE
- ¿El diseño es responsive y funcional en móvil?
- ¿Los CTAs son fáciles de pulsar con el pulgar?
- ¿El texto es legible sin zoom?
- ¿Google Mobile-Friendly Test pasa sin errores?

### 9. SEO INTERNACIONAL (si aplica)
- ¿Hay hreflang tags correctos para cada idioma/región?
- ¿El contenido está localizado (no solo traducido)?
- ¿Los precios están en la moneda local?

### 10. GEO READINESS (Preparación para IAs)
- ¿Existe llms.txt actualizado?
- ¿Los bots de IA no están bloqueados?
- ¿El contenido está estructurado para ser extractable por RAG?
- ¿Hay FAQ schema que las IAs puedan citar?
- ¿La marca tiene presencia en plataformas que las IAs citan? (Reddit, YouTube, reviews)
- ¿El contenido lidera con respuestas directas antes de dar contexto?

---

## Output de la auditoría

1. **Tabla de puntuaciones** (10 capas, de 1 a 10)
2. **Score global SEO** (media ponderada)
3. **Score GEO** (preparación para IAs)
4. **Top 5 problemas críticos** (ordenados por impacto en visibilidad)
5. **Quick wins** (cambios de < 1 hora)
6. **Roadmap 90 días** (ordenado por impacto/esfuerzo)
