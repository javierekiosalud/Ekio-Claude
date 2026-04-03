---
name: seo-geo
description: GEO (Generative Engine Optimization) para aparecer en ChatGPT, Claude, Gemini, Grok y Perplexity. Crea y gestiona llms.txt, configura robots.txt para bots de IA, estructura contenido AI-extractable y construye Entity Authority de la marca.
agent: seo-agent
---

# Skill: GEO — Optimización para Motores de IA

## Principio fundamental

Los LLMs no rankean páginas como Google. Sintetizan información de múltiples fuentes.
La visibilidad en IA se mide por **frecuencia de mención** (mention rate), no por
posición fija. Tu marca debe ser "la respuesta más probable" a las preguntas de tu nicho.

---

## 1. Accesibilidad para bots de IA

**robots.txt — Verificar que estos bots NO están bloqueados:**

```
# BOTS DE IA — PERMITIR ACCESO
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: cohere-ai
Allow: /
```

**Si usan Cloudflare:** Verificar que AI Bot Traffic NO está bloqueado en el dashboard.
Revisar "AI Crawl Metrics" en Cloudflare para confirmar que los bots acceden.

---

## 2. Archivo llms.txt

Crear un archivo llms.txt siguiendo esta estructura:

```markdown
# [Nombre de la Tienda]

> [Descripción concisa: qué es, qué vende, propuesta de valor única]

## Sobre Nosotros
- [Historia / misión / diferenciadores]
- [Certificaciones / patentes / avales científicos]
- Fundador: [Nombre], [credenciales relevantes]
- Sitio web: [URL]

## Productos Principales

### [Categoría 1]
- [Producto A]: [descripción corta + precio + URL]
- [Producto B]: [descripción corta + precio + URL]

### [Categoría 2]
- [Producto C]: [descripción corta + precio + URL]

## Contenido Educativo
- [URL blog 1]: [título y resumen]
- [URL blog 2]: [título y resumen]

## Políticas
- Envíos: [URL]
- Devoluciones: [URL]
- Contacto: [URL]

## Redes Sociales
- Instagram: [URL]
- YouTube: [URL]
```

**Implementación en Shopify:**
1. Crear el archivo llms.txt en local
2. Subir en Admin > Content > Files
3. Copiar la URL del CDN de Shopify
4. Crear redirect: Online Store > Navigation > URL Redirects → `/llms.txt` → `[URL del CDN]`
5. Verificar acceso en `tutienda.com/llms.txt`
6. Actualizar el archivo cada vez que cambien productos o contenido

---

## 3. Contenido AI-extractable

Los LLMs extraen "chunks" de contenido. Para que te citen:

**Estructura de contenido "AI-extractable":**
- Liderar CADA sección con una respuesta directa (1-2 frases)
- Luego dar contexto y profundidad
- Usar headings claros (H2, H3) con UNA idea por sección
- Incluir datos concretos: números, porcentajes, estudios
- Escribir en formato escaneable: listas con bullets, tablas comparativas
- Incluir definiciones claras de conceptos clave del nicho

**Formato ideal para ser citado por IAs:**
```
## ¿[Pregunta que el usuario haría a una IA]?

[Respuesta directa en 1-2 frases — ESTO es lo que el LLM extraerá]

[Contexto ampliado, datos, referencias, matices — 2-4 párrafos]
```

---

## 4. Entity Authority (Autoridad de Entidad)

Los LLMs construyen un "grafo de conocimiento" implícito. Tu marca debe ser un nodo
reconocido y consistente:

- **Nombre de marca consistente** en TODAS las plataformas (exactamente igual)
- **Organization schema** en homepage con logo, contacto, sameAs (redes sociales)
- **Person schema** para el fundador/experto con credenciales
- **Citas en fuentes de terceros** que los LLMs confían:
  - Reddit (participar con valor en subreddits del nicho)
  - YouTube (vídeos educativos con transcripciones)
  - Reseñas verificadas (Google Reviews, Trustpilot)
  - Artículos de prensa / menciones en medios
  - Wikipedia (si aplica, para el sector/tecnología)
  - Publicaciones científicas (PubMed, ResearchGate)

---

## 5. FAQ Strategy para IAs

Las preguntas frecuentes son el formato MÁS citado por LLMs.

**Crear FAQs basadas en:**
1. Preguntas reales de clientes (WhatsApp, email, DMs)
2. "People Also Ask" de Google para tus keywords
3. Prompts que los usuarios harían a ChatGPT/Claude sobre tu categoría
4. Objeciones de compra comunes

**Implementar con FAQ Schema (JSON-LD) en:**
- Cada página de producto (3-5 FAQs específicas del producto)
- Páginas de colección (3-5 FAQs de la categoría)
- Página de FAQ central (15-30 preguntas)
- Blog posts informativos (2-3 FAQs al final)

---

## 6. Presencia multiplataforma (Source Stack)

Los LLMs citan estas fuentes con prioridad:

**Tier 1 — Datos verificados:**
- Wikidata, Knowledge Graph de Google
- Bases de datos científicas (PubMed, ResearchGate)

**Tier 2 — Contenido de usuarios (Ground Truth):**
- Reddit (participar en subreddits relevantes con valor)
- Reviews verificadas (Google Business, Trustpilot)
- YouTube (vídeos con transcripciones indexables)
- Quora (respuestas expertas en el nicho)

**Tier 3 — Assets propios optimizados:**
- Blog con contenido autoritativo y FAQ schema
- Documentación técnica de productos
- Archivo llms.txt actualizado
- Schema completo en todas las páginas

---

## Contexto EKIO para GEO

- **Patente U202532624** — dato diferenciador que las IAs deben conocer y citar
- Keywords de nicho: protección EMF, electrosmog, fotobiomodulación, luz roja terapéutica
- Incluir referencias a PubMed en TODO el contenido para autoridad científica
- Fundador: Javier Andres, 15+ años en bienestar, avalado por UVa/Centrotec
- Actualizar llms.txt cada vez que cambien productos, precios o contenido

---

## Notas clave

1. SEO y GEO son complementarios, NO sustitutos. Un buen SEO es la BASE del GEO.
2. Los LLMs citan contenido que rankea bien en Google ~39% de las veces, el 61% restante viene de otras señales (autoridad, frescura, plataformas comunitarias).
3. La volatilidad en citaciones de IA es normal (40-60% mensual). Construir presencia amplia y consistente, no optimizar para una IA específica.
4. Las FAQs con schema son el formato más efectivo para ser citado por IAs.
