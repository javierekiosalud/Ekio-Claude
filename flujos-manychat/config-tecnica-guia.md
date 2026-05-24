# CONFIGURACIÓN TÉCNICA — FLUJO "GUÍA" (PUBLICADO)

> **Entregable 2 de 3** · EKIO Electrosmog España
> **ESTADO: 🟢 LIVE** · Automatización `GUÍA — Manual Higiene EM` en ManyChat
> (cuenta "Electrosmog España", carpeta `01. AUTOMATIZACIÓN`).
> Acompaña a `flujo-guia-manychat.md`.

---

## A) OBJETOS CREADOS EN LA CUENTA (vía API MCP)

**Tags en uso por el flujo:**
| Tag ManyChat | Estado | Uso en el flujo |
|---|---|---|
| `guia-higiene-entregada` | ✅ Existe (id 86482504) | Se aplica en el nodo de Acciones tras entregar el Manual |

**Custom fields en uso:**
| Custom field | Tipo | Estado | Valor |
|---|---|---|---|
| `keyword_origen` | text | ✅ Existe (id 14455987) | `GUIA` (set en Acciones) |

**Objetos creados pero NO usados en la versión final** (quedaron disponibles
por si se reactiva la captura de email/WhatsApp en el futuro):
- Tags: `guia-whatsapp-clic` (88252056), `lead-guia-email` (88252550), `lead-guia-frio` (88252551), `email-capturado-ig-follower` (86482505).
- Custom fields: `via_preferida` (14625216), `situacion_router` (14625217), `canal_captacion` (14455992).

> Convención de la cuenta = **kebab-case** para tags, **snake_case** para fields.

---

## B) ENTREGA DEL MANUAL POR DRIVE

**Enlace en uso (Mensaje 2):**
```
https://drive.google.com/file/d/1g7SC_Z_XFwIMzSN6r8jUyiJ6GYMwix_c/view
```
- ID del archivo: `1g7SC_Z_XFwIMzSN6r8jUyiJ6GYMwix_c`
- Versión `/view` (vista previa). Variante de descarga directa si se necesita:
  `https://drive.google.com/uc?export=download&id=1g7SC_Z_XFwIMzSN6r8jUyiJ6GYMwix_c`

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

> Si en el futuro se quiere recuperar el email + nurture Klaviyo, los objetos ya
> existen (ver sección A) y habría que: reconectar una captura de email tras M2,
> disparar evento `manychat_lead_magnet_entregado` y crear/confirmar con Erick un
> flujo de nurture EMF para hogar/adultos.

---

## D) UTMs ESTÁNDAR EKIO PARA ESTA CAMPAÑA

El flujo enlaza a `electrosmogespana.com` (M3) y al Drive (M2). Si se añade en el
futuro un enlace a producto/tienda, usar:
```
utm_source=manychat
utm_medium=instagram_dm
utm_campaign=manual-higiene-em
utm_content=GUIA
```

---

## E) CHECKLIST DE QA POST-PUBLICACIÓN (verificación end-to-end)

```
QA FLUJO "GUÍA" — ya está LIVE, validar funcionamiento real
──────────────────────────────────────────────
□ 1. Comenta "GUÍA" en un post desde OTRA cuenta → llega DM de M1.
□ 2. Comenta "guia" (sin tilde, minúscula) → también dispara (case-sensitive).
□ 3. Envía "MANUAL" por DM directo → dispara M1.
□ 4. Pulsa "Sí, pásamelo" → llega M2 con el enlace de Drive.
□ 5. El enlace de Drive abre el Manual SIN pedir acceso (incógnito + móvil).
□ 6. Rama "Cuéntame primero" → M1-bis → "Venga, pásamelo" → entrega (M2).
□ 7. Se aplica el tag guia-higiene-entregada al contacto (ver en Contactos).
□ 8. ~23 h después llega M3 con la pregunta + enlace a la web.
□ 9. La respuesta pública al comentario aparece y rota entre las 3 versiones.
□ 10. NO colisiona con el flujo "Guía Niños" (keywords distintas).
──────────────────────────────────────────────
```

---

## F) CÓMO PAUSAR / EDITAR EL FLUJO

- Está **LIVE**. Para pausarlo: abrir la automatización → botón de estado → pasar
  a borrador/pausa.
- Editar es seguro en caliente; los cambios se guardan solos. Re-publicar aplica.
- Ruta: ManyChat → Automatización → carpeta `01. AUTOMATIZACIÓN` → `GUÍA — Manual Higiene EM`.
