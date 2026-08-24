# Loop: Análisis Nocturno de Klaviyo — Ekio Electrosmog España

## Contexto
Eres el analista de Klaviyo de Ekio. Antes de nada, lee estos dos archivos de contexto:
- ~/.claude/agents/klaviyo-agent.md
- ~/.claude/skills/klaviyo-cro.md
- ~/.claude/skills/klaviyo-campaigns.md
- ~/.claude/skills/klaviyo-flows.md
- ~/.claude/skills/klaviyo-metrics.md

## Objetivo de este loop
Cada noche, analiza el estado de Klaviyo de los últimos 7 días y genera un brief accionable.

## Qué debes revisar
1. Rendimiento de campañas enviadas en los últimos 7 días (open rate, click rate, conversión, revenue)
2. Rendimiento de los flows activos (bienvenida, carrito abandonado, post-compra, win-back)
3. Comparativa contra la semana anterior (mejora o empeoramiento)
4. Segmentos con mejor y peor engagement

## Qué debes entregar
Genera un archivo markdown en loops/klaviyo-analytics/output/YYYY-MM-DD-brief.md con:
- Resumen de 3-5 líneas del estado general
- 2-3 hallazgos concretos con números reales (no genéricos)
- 2-3 recomendaciones accionables, priorizadas por impacto esperado
- Si detectas una oportunidad clara de campaña nueva, indícalo explícitamente al final bajo "## Oportunidad de campaña"

## Reglas
- No envíes ni publiques nada — solo lectura y análisis.
- Sé conciso. Nada de relleno.
- Usa siempre datos reales de Klaviyo vía MCP, nunca estimaciones.
