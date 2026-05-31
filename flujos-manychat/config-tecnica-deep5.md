# CONFIGURACIÓN TÉCNICA — FLUJO "DEEP5" (PUBLICADO)

> **Entregable 2 de 3** · EKIO Electrosmog España
> **ESTADO: 🟢 LIVE** · Automatización `DEEP5 — Ebook Interactivo Deep 5` en ManyChat
> (cuenta "Electrosmog España", carpeta `01. AUTOMATIZACIÓN`).
> Acompaña a `flujo-deep5-manychat.md`.

---

## A) OBJETOS CREADOS EN LA CUENTA (vía API MCP)

**Tags en uso por el flujo:**
| Tag ManyChat | Estado | Uso en el flujo |
|---|---|---|
| `deep5-entregada` | ✅ Existe (id 88709523) | Se aplica en el nodo de Acciones tras entregar el Ebook |

**Custom fields en uso:**
| Custom field | Tipo | Estado | Valor |
|---|---|---|---|
| `keyword_origen` | text | ✅ Existe (id 14455987) | `DEEP5` (set en Acciones) |

> Campo compartido con los flujos "GUÍA — Manual Higiene EM" y "SUEÑO — Guía del Sueño"
> (mismo id 14455987). Cada flujo escribe su propio valor: GUIA, SUENO o DEEP5.

**Tags existentes pero NO usados en este flujo** (creados para otros flujos,
disponibles para el futuro):
- `guia-higiene-entregada` (86482504) — pertenece al flujo GUÍA
- `guia-sueno-entregada` (88258111) — pertenece al flujo SUEÑO
- `guia-whatsapp-clic`, `lead-guia-email`, `lead-guia-frio`, `email-capturado-ig-follower`

> Convención de la cuenta = **kebab-case** para tags, **snake_case** para fields.

---

## B) ENTREGA DEL EBOOK POR DRIVE

**Enlace en uso (Mensaje 2):**
```
https://drive.google.com/file/d/10mPv-qY4JZCYK97YG69qokXf4LWqgb_7/view
```
- ID del archivo: `10mPv-qY4JZCYK97YG69qokXf4LWqgb_7`
- Versión `/view` (vista previa). Variante de descarga directa si se necesita:
  `https://drive.google.com/uc?export=download&id=10mPv-qY4JZCYK97YG69qokXf4LWqgb_7`

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
> crear con Erick un flujo de nurture EMF específico para el protocolo Deep 5.

---

## D) TIPO DE MENSAJE M1 — NOTA TÉCNICA IMPORTANTE

**Configuración en M1:** `Enviar como Respuesta privada`

Configurado correctamente desde el principio (lección aprendida del flujo SUEÑO,
que requirió corrección al publicar). El tipo "Respuesta privada" es el correcto
para el trigger Comment-to-DM de Instagram.

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
utm_campaign=deep5-ebook-interactivo
utm_content=DEEP5
```

---

## F) CHECKLIST DE QA POST-PUBLICACIÓN (verificación end-to-end)

```
QA FLUJO "DEEP5" — ya está LIVE, validar funcionamiento real
──────────────────────────────────────────────
□ 1. Comenta "DEEP5" en un post desde OTRA cuenta → llega DM de M1.
□ 2. Comenta "deep5" (minúscula) → también dispara (case-sensitive).
□ 3. Comenta "DEEPCINCO" → también dispara.
□ 4. Envía "Deep5" por DM directo → dispara M1.
□ 5. Pulsa "Sí, mándamelo" → llega M2 con el enlace de Drive.
□ 6. El enlace de Drive abre el Ebook SIN pedir acceso (incógnito + móvil).
□ 7. Rama "Cuéntame más" → M1-bis → "Claro, mándamelo" → entrega (M2).
□ 8. Se aplica el tag deep5-entregada al contacto (ver en Contactos).
□ 9. keyword_origen queda como "DEEP5" en el perfil del contacto.
□ 10. ~23 h después llega M3 con la pregunta + enlace a la web.
□ 11. La respuesta pública al comentario aparece y rota entre las 3 versiones.
□ 12. NO colisiona con el flujo "GUÍA — Manual Higiene EM" (keywords distintas).
□ 13. NO colisiona con el flujo "SUEÑO — Guía del Sueño" (keywords distintas).
──────────────────────────────────────────────
```

---

## G) CÓMO PAUSAR / EDITAR EL FLUJO

- Está **LIVE**. Para pausarlo: abrir la automatización → botón de estado → pasar
  a borrador/pausa.
- Editar es seguro en caliente; los cambios se guardan solos. Re-publicar aplica.
- Ruta: ManyChat → Automatización → carpeta `01. AUTOMATIZACIÓN` → `DEEP5 — Ebook Interactivo Deep 5`.
- URL directa: `https://app.manychat.com/fb644187/cms/files/33104593--content20260531080915_051422/edit`
