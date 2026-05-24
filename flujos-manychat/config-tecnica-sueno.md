# CONFIGURACIÓN TÉCNICA — FLUJO "SUEÑO" (PUBLICADO)

> **Entregable 2 de 3** · EKIO Electrosmog España
> **ESTADO: 🟢 LIVE** · Automatización `SUEÑO — Guía del Sueño` en ManyChat
> (cuenta "Electrosmog España", carpeta `01. AUTOMATIZACIÓN`).
> Acompaña a `flujo-sueno-manychat.md`.

---

## A) OBJETOS CREADOS EN LA CUENTA (vía API MCP)

**Tags en uso por el flujo:**
| Tag ManyChat | Estado | Uso en el flujo |
|---|---|---|
| `guia-sueno-entregada` | ✅ Existe (id 88258111) | Se aplica en el nodo de Acciones tras entregar la Guía |

**Custom fields en uso:**
| Custom field | Tipo | Estado | Valor |
|---|---|---|---|
| `keyword_origen` | text | ✅ Existe (id 14455987) | `SUENO` (set en Acciones) |

> Campo compartido con el flujo "GUÍA — Manual Higiene EM" (mismo id 14455987).
> Cada flujo escribe su propio valor: GUIA o SUENO.

**Tags existentes pero NO usados en este flujo** (creados para otros flujos,
disponibles para el futuro):
- `guia-higiene-entregada` (86482504) — pertenece al flujo GUÍA
- `guia-whatsapp-clic`, `lead-guia-email`, `lead-guia-frio`, `email-capturado-ig-follower`

> Convención de la cuenta = **kebab-case** para tags, **snake_case** para fields.

---

## B) ENTREGA DE LA GUÍA POR DRIVE

**Enlace en uso (Mensaje 2):**
```
https://drive.google.com/file/d/13ZbYbWzOy0uUM_0K6iR6FNMZUMkp9UvM/view
```
- ID del archivo: `13ZbYbWzOy0uUM_0K6iR6FNMZUMkp9UvM`
- Versión `/view` (vista previa). Variante de descarga directa si se necesita:
  `https://drive.google.com/uc?export=download&id=13ZbYbWzOy0uUM_0K6iR6FNMZUMkp9UvM`

**⚠️ CHECK DE PERMISOS (crítico, post-publicación):**
- [ ] El archivo en Drive está como **"Cualquier persona con el enlace · Lector"**
      (NO "Restringido"). Si está restringido, el usuario ve "Solicitar acceso"
      y abandona — es el único punto que rompe la experiencia.
- [ ] Probado en **incógnito + móvil** (sin sesión de Google de EKIO).

**Limitación asumida:** Drive no da trazabilidad de aperturas. Aceptable porque
la captación principal va por otra vía. Si escala, migrar a landing en Shopify
(`landing-lead-magnet/`) para recuperar trackeo + píxel.

---

## C) KLAVIYO (estado actual)

La versión publicada **NO captura email** dentro del flujo, así que **no dispara
ningún evento Klaviyo ni alimenta un flujo de nurture por email**. El seguimiento
es 100% dentro de ManyChat (pausa 23h + mensaje de cierre a web).

> Si en el futuro se quiere recuperar el email + nurture Klaviyo, habría que:
> reconectar una captura de email tras M2, disparar evento
> `manychat_lead_magnet_entregado` (ya existe en el esquema de eventos) y
> crear con Erick un flujo de nurture EMF específico para problemas de sueño.

---

## D) TIPO DE MENSAJE M1 — NOTA TÉCNICA IMPORTANTE

**Configuración en M1:** `Enviar como Respuesta privada`

Esto es **diferente** al flujo GUÍA original (que usa "dentro de la ventana de
24 horas"). El tipo "Respuesta privada" es el correcto para el trigger
Comment-to-DM de Instagram.

| Tipo de mensaje | Cuándo usar |
|---|---|
| `como Respuesta privada` | Primer mensaje tras un comentario (Comment-to-DM) |
| `dentro de la ventana de 24 horas` | Mensajes de seguimiento tras interacción reciente |

Si ManyChat muestra el warning naranja ⚠️ "Enviar dentro de la ventana de
24 horas" al intentar publicar → cambiar el tipo de M1 a "como Respuesta
privada" desde el desplegable en la parte superior del panel izquierdo.

---

## E) UTMs ESTÁNDAR EKIO PARA ESTA CAMPAÑA

El flujo enlaza a `electrosmogespana.com` (M3) y al Drive (M2). Si se añade en el
futuro un enlace a producto/tienda, usar:
```
utm_source=manychat
utm_medium=instagram_dm
utm_campaign=guia-sueno-electrosmog
utm_content=SUENO
```

---

## F) CHECKLIST DE QA POST-PUBLICACIÓN (verificación end-to-end)

```
QA FLUJO "SUEÑO" — ya está LIVE, validar funcionamiento real
──────────────────────────────────────────────
□ 1. Comenta "SUEÑO" en un post desde OTRA cuenta → llega DM de M1.
□ 2. Comenta "sueno" (sin tilde, minúscula) → también dispara (case-sensitive).
□ 3. Envía "DORMIR" por DM directo → dispara M1.
□ 4. Pulsa "Sí, mándamela" → llega M2 con el enlace de Drive.
□ 5. El enlace de Drive abre la Guía SIN pedir acceso (incógnito + móvil).
□ 6. Rama "Cuéntame más" → M1-bis → "Claro, mándamela" → entrega (M2).
□ 7. Se aplica el tag guia-sueno-entregada al contacto (ver en Contactos).
□ 8. ~23 h después llega M3 con la pregunta + enlace a la web.
□ 9. La respuesta pública al comentario aparece y rota entre las 3 versiones.
□ 10. NO colisiona con el flujo "GUÍA — Manual Higiene EM" (keywords distintas).
□ 11. NO colisiona con el flujo "Guía Niños" (keywords distintas).
──────────────────────────────────────────────
```

---

## G) CÓMO PAUSAR / EDITAR EL FLUJO

- Está **LIVE**. Para pausarlo: abrir la automatización → botón de estado → pasar
  a borrador/pausa.
- Editar es seguro en caliente; los cambios se guardan solos. Re-publicar aplica.
- Ruta: ManyChat → Automatización → carpeta `01. AUTOMATIZACIÓN` → `SUEÑO — Guía del Sueño`.
