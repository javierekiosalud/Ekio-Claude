---
name: klaviyo-metrics
description: Consultar y analizar métricas y eventos de Klaviyo. Úsala para ver KPIs generales, analizar eventos específicos (compras, aperturas, clics), y obtener datos agregados por período.
---

# Skill: Análisis de Métricas y Eventos

## Herramientas MCP disponibles
- `klaviyo_get_metrics` — Listar todas las métricas disponibles
- `klaviyo_get_metric` — Detalle de una métrica por ID
- `klaviyo_query_metric_aggregates` — Consultar datos agregados de una métrica
- `klaviyo_get_events` — Ver eventos individuales

## Instrucciones

### Listar métricas disponibles
Usa `klaviyo_get_metrics` para obtener todas las métricas. Las más importantes para EKIO:
- Placed Order (compras)
- Active on Site (actividad web)
- Viewed Product (vistas de producto)
- Added to Cart (carritos)
- Opened Email / Clicked Email

### Consultar datos agregados
Con `klaviyo_query_metric_aggregates`:
- Define el rango de fechas (últimos 7, 30 o 90 días)
- Agrupa por día, semana o mes según necesidad
- Métricas clave: count, sum (para revenue), unique

### Análisis de eventos individuales
Con `klaviyo_get_events` filtra por:
- Tipo de evento (ej. Placed Order)
- Rango de fechas
- Perfil específico

### KPIs clave a reportar para EKIO
| Métrica | Objetivo |
|---------|----------|
| Revenue por email | Maximizar |
| Placed Order (email-atribuido) | Creciente MoM |
| Open Rate flujos | >30% |
| Click Rate flujos | >3% |
| Unsubscribe Rate | <0.3% |

## Output esperado
Tabla o resumen con los datos solicitados, tendencia (↑↓) respecto al período anterior y recomendación de acción si hay anomalías.
