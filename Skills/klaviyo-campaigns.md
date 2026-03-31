---
name: klaviyo-campaigns
description: Crear, revisar y analizar campañas de email en Klaviyo. Úsala para ver campañas activas, sus métricas, crear nuevas campañas o asignar templates.
---

# Skill: Gestión de Campañas Klaviyo

## Herramientas MCP disponibles
- `klaviyo_get_campaigns` — Listar campañas (con filtros de estado, canal)
- `klaviyo_get_campaign` — Detalle de una campaña por ID
- `klaviyo_get_campaign_report` — Métricas de rendimiento de una campaña
- `klaviyo_create_campaign` — Crear nueva campaña
- `klaviyo_assign_template_to_campaign_message` — Asignar template a campaña
- `klaviyo_get_email_template` — Ver template de email
- `klaviyo_create_email_template` — Crear nuevo template

## Instrucciones

### Revisar campañas activas
Usa `klaviyo_get_campaigns` y muestra: nombre, estado, canal (email/SMS), fecha de envío.

### Analizar rendimiento de campaña
Con `klaviyo_get_campaign_report` reporta:
- Emails enviados / entregados
- Open rate (objetivo: >25%)
- Click rate (objetivo: >3%)
- Revenue atribuido
- Unsubscribes

### Crear una campaña nueva
1. Solicitar al usuario: nombre, lista destino, asunto, fecha de envío
2. Usar `klaviyo_create_campaign`
3. Si hay template, asignarlo con `klaviyo_assign_template_to_campaign_message`

### Señales de alerta
- Open rate < 15% → problema de subject line o deliverability
- Click rate < 1% → problema de contenido o CTA
- Unsubscribe rate > 0.5% → revisar segmentación

## Output esperado
Resumen ejecutivo con métricas clave y recomendaciones de mejora concretas.
