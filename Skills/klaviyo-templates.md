---
name: klaviyo-templates
description: Crear, revisar y gestionar templates de email en Klaviyo. Úsala para auditar templates existentes, crear nuevos o asignarlos a campañas y flujos.
---

# Skill: Gestión de Templates de Email

## Herramientas MCP disponibles
- `klaviyo_get_email_template` — Ver un template por ID
- `klaviyo_create_email_template` — Crear nuevo template HTML
- `klaviyo_assign_template_to_campaign_message` — Asignar template a campaña
- `klaviyo_upload_image_from_url` — Subir imagen desde URL a Klaviyo

## Instrucciones

### Revisar template existente
Usa `klaviyo_get_email_template` con el ID del template. Analiza:
- Estructura HTML (¿tiene preheader? ¿botón CTA claro?)
- Variables de personalización ({{ first_name }}, etc.)
- Links y URLs incluidos

### Crear nuevo template
Solicitar al usuario:
1. Nombre del template
2. Asunto del email
3. Contenido (texto o HTML)
4. CTA principal (texto + URL)

Buenas prácticas al crear:
- Siempre incluir `{{ first_name|default:'Hola' }}` para personalización
- Un solo CTA principal por email
- Preheader distinto al asunto
- Ratio texto/imagen mínimo 60/40
- Footer con enlace de desuscripción obligatorio

### Subir imágenes
Si el template necesita imágenes, usar `klaviyo_upload_image_from_url` con la URL pública de la imagen.

### Asignar a campaña
Tras crear el template, asignarlo con `klaviyo_assign_template_to_campaign_message` indicando el ID de la campaña.

## Output esperado
Confirmación del template creado/actualizado con ID para referencia futura. Lista de mejoras sugeridas si se audita un template existente.
