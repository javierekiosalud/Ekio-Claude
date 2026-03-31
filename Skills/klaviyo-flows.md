---
name: klaviyo-flows
description: Analizar, auditar y gestionar flujos de Klaviyo. Úsala para revisar flujos activos, ver su rendimiento, detectar flujos rotos o sin tráfico, y comparar flujos duplicados.
---

# Skill: Gestión de Flujos Klaviyo

## Herramientas MCP disponibles
- `klaviyo_get_flows` — Listar flujos con filtros (status, trigger_type, nombre)
- `klaviyo_get_flow` — Detalle de un flujo por ID
- `klaviyo_get_flow_report` — Rendimiento de un flujo (opens, clicks, revenue, recipients)

## Instrucciones

### Listar flujos activos
Usa `klaviyo_get_flows` con filtro `status = live`. Muestra: nombre, trigger_type y fecha de creación.

### Auditar flujos sin tráfico
1. Obtén todos los flujos live con `klaviyo_get_flows`
2. Para cada flujo, llama `klaviyo_get_flow_report`
3. Marca como **sospechosos** los flujos con 0 recipients en los últimos 30 días
4. Informa al usuario con la lista y posibles causas

### Detectar flujos duplicados
Compara nombres similares. Si dos flujos tienen el mismo propósito (ej. mismo trigger + mismo nombre base), avisa al usuario del posible conflicto.

### Reporte de rendimiento
Para cada flujo reporta:
- Recipients totales
- Open rate
- Click rate
- Revenue generado
- Conversiones

## Output esperado
Tabla clara con los flujos auditados, marcando con ⚠️ los problemáticos y ✅ los que funcionan correctamente.
