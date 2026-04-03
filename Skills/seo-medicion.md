---
name: seo-medicion
description: Medición y tracking SEO + GEO para EKIO. Define KPIs de SEO tradicional (rankings, tráfico, CTR, Core Web Vitals) y KPIs de GEO (AI citation frequency, share of voice IA, LLM Visibility Score). Cadencia semanal, mensual y trimestral.
agent: seo-agent
---

# Skill: Medición y Tracking SEO + GEO

## KPIs de SEO tradicional

| KPI | Herramienta | Objetivo EKIO |
|---|---|---|
| Posiciones de keywords | Semrush / Ahrefs / Search Console | Top 10 en keywords principales |
| Tráfico orgánico | GA4 > Acquisition > Organic Search | Crecimiento mes a mes |
| Impresiones y CTR | Search Console > Performance | CTR > 3% en páginas clave |
| Páginas indexadas | Search Console > Pages | Sin páginas importantes excluidas |
| Core Web Vitals | Search Console > Experience | LCP <2.5s, CLS <0.1, INP <200ms |
| Rich Results | Search Console > Enhancements | Activados en productos y FAQs |
| Backlinks nuevos | Ahrefs / Semrush / Moz | Crecimiento mensual de dominios referentes |

---

## KPIs de GEO (Generative Engine Optimization)

| KPI | Definición | Herramienta |
|---|---|---|
| **AI Citation Frequency** | ¿Con qué frecuencia las IAs mencionan EKIO? | Peec AI, Evertune |
| **Share of Voice IA** | Menciones EKIO vs competidores en respuestas IA | Geoptie |
| **Citation Sentiment** | ¿Las IAs presentan EKIO positivamente? | Revisión manual + Peec AI |
| **AI-Referred Traffic** | Visitas desde AI search (ChatGPT, Perplexity) | GA4 > Attribution |
| **LLM Visibility Score** | Tracking probabilístico con variaciones de prompt | Rankability / Rankscale |

---

## Herramientas recomendadas

**SEO tradicional:**
- Google Search Console (gratuito — imprescindible)
- Google Analytics 4 (gratuito — imprescindible)
- Semrush o Ahrefs (rankings, backlinks, auditoría técnica)

**GEO:**
- Semrush Enterprise AIO (tracking de AI Overviews)
- Geoptie (rank tracker para múltiples IAs)
- Rankability / Rankscale (auditoría técnica GEO)
- Peec AI / Evertune (monitoring de citaciones en LLMs)

---

## Cadencia de revisión

### Semanal
- Rankings de keywords principales
- Tráfico orgánico vs semana anterior
- Errores de indexación en Search Console
- Nuevos errores 404

### Mensual
- Auditoría de schema (nuevos rich results, errores)
- AI citation check (¿mencionan a EKIO las IAs?)
- Nuevos backlinks conseguidos
- Actualización de llms.txt si hubo cambios en productos/precios

### Trimestral
- Auditoría SEO completa (usar `seo-auditoria`)
- Actualización y optimización de llms.txt
- Content refresh de artículos con caída de posiciones
- Revisión de topic clusters y gaps de contenido
- Comparativa de Share of Voice vs competidores
