---
name: seo-tecnico
description: SEO técnico para Shopify. Mejora velocidad, Core Web Vitals (LCP, CLS, INP), corrige errores de canonical, 301 redirects, 404 y paginación. Incluye checklist de Google Search Console y configuración de hreflang.
agent: seo-agent
---

# Skill: SEO Técnico para Shopify

## Velocidad y rendimiento

- Minimizar apps instaladas (cada app ≈ +0.5-2s de carga)
- Comprimir imágenes a WebP con lazy loading
- Precargar fuentes (font-display: swap)
- Eliminar JavaScript y CSS no utilizados
- Usar un tema Shopify optimizado (Dawn es el mejor punto de partida)
- Implementar preconnect para dominios de terceros

---

## Objetivos de Core Web Vitals

| Métrica | Objetivo |
|---|---|
| LCP (Largest Contentful Paint) | < 2.5s |
| CLS (Cumulative Layout Shift) | < 0.1 |
| INP (Interaction to Next Paint) | < 200ms |
| TTFB (Time to First Byte) | < 800ms |

---

## Correcciones técnicas comunes en Shopify

- Eliminar contenido duplicado (canonical tags en variantes de producto)
- Redirigir URLs antiguas (301 redirects, NO 302)
- Corregir errores 404 (Search Console > Pages)
- Optimizar paginación de colecciones (rel=next/prev o scroll infinito)
- Implementar hreflang para tiendas multiidioma
- Eliminar parámetros de URL duplicados (?variant=xxx)

---

## Checklist de Google Search Console

- [ ] Verificar propiedad del dominio
- [ ] Enviar sitemap.xml
- [ ] Verificar cobertura de indexación (Pages > Not indexed)
- [ ] Revisar informe de experiencia de página (Core Web Vitals)
- [ ] Revisar errores de datos estructurados (Enhancements)
- [ ] Configurar informe de rendimiento (Performance)
- [ ] Verificar que bots de IA no están bloqueados en robots.txt

---

## Hreflang para tiendas multiidioma

Si EKIO expande a otros mercados (Latam, Portugal), implementar:
- `hreflang="es-ES"` para España
- `hreflang="es"` para castellano genérico
- `hreflang="x-default"` para redirección por defecto

Configurar en el `<head>` de cada template correspondiente.
