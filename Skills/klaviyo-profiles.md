---
name: klaviyo-profiles
description: Gestionar perfiles, listas y segmentos en Klaviyo. Úsala para buscar perfiles, actualizar datos, suscribir/desuscribir contactos, y gestionar listas y segmentos.
---

# Skill: Gestión de Perfiles, Listas y Segmentos

## Herramientas MCP disponibles
- `klaviyo_get_profiles` — Listar perfiles con filtros
- `klaviyo_get_profile` — Detalle de un perfil por ID
- `klaviyo_create_profile` — Crear nuevo perfil
- `klaviyo_update_profile` — Actualizar datos de un perfil
- `klaviyo_subscribe_profile_to_marketing` — Suscribir perfil a lista
- `klaviyo_unsubscribe_profile_from_marketing` — Desuscribir perfil
- `klaviyo_get_lists` — Listar todas las listas
- `klaviyo_get_list` — Detalle de una lista
- `klaviyo_get_segments` — Listar segmentos
- `klaviyo_get_segment` — Detalle de un segmento

## Instrucciones

### Buscar un perfil
Usa `klaviyo_get_profiles` filtrando por email o teléfono. Muestra: nombre, email, estado de suscripción, fecha de creación.

### Actualizar perfil
Con `klaviyo_update_profile` actualiza campos como: nombre, teléfono, propiedades custom (ej. puntuación, producto comprado, país).

### Gestionar suscripciones
- Para suscribir: `klaviyo_subscribe_profile_to_marketing` especificando lista y canal (email/SMS)
- Para desuscribir: `klaviyo_unsubscribe_profile_from_marketing`
- Siempre confirmar al usuario antes de desuscribir

### Revisar listas y segmentos
1. Listar con `klaviyo_get_lists` y `klaviyo_get_segments`
2. Mostrar: nombre, número de contactos, fecha de creación
3. Identificar listas sin uso o sin crecimiento reciente

## Output esperado
Confirmación de acciones realizadas con los datos del perfil afectado. Para listas: tabla con nombre, tamaño y estado.
