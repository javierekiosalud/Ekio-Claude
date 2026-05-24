# CONFIGURACIÓN TÉCNICA — FLUJO "GUÍA"

> **Entregable 2 de 3** · Agentes ManyChat + Klaviyo · EKIO Electrosmog España
> Mapa de integraciones, tags, enlace WhatsApp, UTMs, QA y riesgos.
> Acompaña a `flujo-guia-manychat.md`.

---

## A) MAPA DE INTEGRACIÓN KLAVIYO

### EVENTO PRINCIPAL

**Nombre del evento:** `manychat_lead_magnet_entregado`
*(validado contra la tabla de eventos de la skill manychat-cro — Módulo 4)*

**Cuándo se dispara:** en el Mensaje 2, en el instante en que el usuario
recibe el enlace de la guía (no cuando comenta, sino cuando confirma y recibe).

### PROPIEDADES DEL EVENTO (con valores posibles)

| Propiedad | Tipo | Valores posibles | Cuándo se rellena |
|---|---|---|---|
| `lead_magnet` | string | `guia_higiene_emf_ninos` (fijo) | Siempre, en M2 |
| `keyword_activadora` | string | `GUIA` (normalizado, sin tilde) | Siempre, en M2 |
| `canal_origen` | string | `instagram_dm` | Siempre, en M2 |
| `email` | string | el correo capturado · vacío si no lo da | Solo si pasa por M4B |
| `captura_email_opcional` | boolean | `true` / `false` | `true` si dio email en M4B; `false` por defecto |
| `via_preferida` | string | `whatsapp` / `email` / `ninguna` | Según botón pulsado en M3 |
| `whatsapp_click` | boolean | `true` / `false` | `true` si pulsó botón wa.me en M4A |
| `situacion_router` | string | `si_encendido` / `apagado` / `no_pensado` / vacío | Solo si responde al follow-up +24h |
| `tiene_ninos` | boolean | `true` (asumido por el lead magnet) | Siempre, en M2 |
| `fecha_entrega` | datetime | timestamp ISO | Siempre, en M2 |

> **Nota de privacidad:** si el usuario NO da email (rama WhatsApp o cierre),
> el evento Klaviyo se dispara igualmente pero el perfil queda como
> anónimo/identificado por ManyChat ID, sin email. Klaviyo solo activará el
> flujo de email cuando exista `email`.

### EVENTO SECUNDARIO (follow-up)

**Nombre:** `manychat_followup_respondido`
**Propiedades:** `situacion_router` (mismos valores que arriba), `email` (si existe).

### FLUJO KLAVIYO DESTINO

| Campo | Valor |
|---|---|
| **Flujo destino** | `Lead magnet niños - Nurture EMF` |
| **Trigger del flujo** | Métrica = evento `manychat_lead_magnet_entregado` |
| **Condición de activación** | El perfil tiene `email` (≠ vacío) **Y** `captura_email_opcional = true` |
| **Filtro de exclusión** | Excluir si ya está en el flujo (evitar duplicados) |
| **Rama interna sugerida** | Si `situacion_router = si_encendido` → email 2 prioriza el hábito del router |

> Quien elige WhatsApp y NO deja email **no entra** en el flujo de email
> Klaviyo (no tenemos email). Su seguimiento es 100% humano vía WhatsApp +
> el follow-up +24h de ManyChat. Esto es correcto y deliberado.

---

## B) TAGS DE SHOPIFY (con condición de asignación)

| Tag Shopify | Condición de asignación |
|---|---|
| `lead-manychat-guia` | Al disparar `manychat_lead_magnet_entregado` (M2). Todos los que reciben la guía |
| `lead-guia-whatsapp` | Si pulsa el botón wa.me en M4A (`whatsapp_click = true`) |
| `lead-guia-email` | Si deja email en M4B (`captura_email_opcional = true`) |
| `lead-guia-frio` | Si recibe guía pero ni WhatsApp ni email (solo contenido) |

> Los tags Shopify solo se materializan en un *customer* de Shopify cuando
> hay email coincidente. Para leads sin email, el tag vive en ManyChat y
> Klaviyo hasta que (si) haya conversión. Sirven para remarketing y para
> medir calidad de lead por rama.

### TAGS INTERNOS DE MANYCHAT (control de flujo)

| Tag ManyChat | Uso |
|---|---|
| `guia_entregada` | Condición de entrada al follow-up +24h |
| `guia_whatsapp_click` | **Corta** el follow-up +24h (ya pasó a humano) |
| `guia_email_dado` | Marca opt-in de email |

---

## C) ESTRUCTURA DEL ENLACE wa.me (mensaje pre-rellenado)

**Formato base:**
```
https://wa.me/[NÚMERO_WHATSAPP_EKIO]?text=[MENSAJE_URL_ENCODED]
```

- `[NÚMERO_WHATSAPP_EKIO]` → **PLACEHOLDER**. Formato internacional sin `+`,
  sin espacios ni guiones (ej. España: `34XXXXXXXXX`). No inventar.

**Mensaje pre-rellenado (texto legible, antes de codificar):**
```
Hola EKIO 👋 Vengo de la guía de Higiene EMF para niños de Instagram.
Me gustaría que me ayudéis a adaptar los 7 hábitos a mi casa.
```

**Mismo mensaje URL-encoded (listo para pegar tras `?text=`):**
```
Hola%20EKIO%20%F0%9F%91%8B%20Vengo%20de%20la%20gu%C3%ADa%20de%20Higiene%20EMF%20para%20ni%C3%B1os%20de%20Instagram.%20Me%20gustar%C3%ADa%20que%20me%20ayud%C3%A9is%20a%20adaptar%20los%207%20h%C3%A1bitos%20a%20mi%20casa.
```

**URL final de ejemplo (con placeholder de número):**
```
https://wa.me/[NÚMERO_WHATSAPP_EKIO]?text=Hola%20EKIO%20%F0%9F%91%8B%20Vengo%20de%20la%20gu%C3%ADa%20de%20Higiene%20EMF%20para%20ni%C3%B1os%20de%20Instagram.%20Me%20gustar%C3%ADa%20que%20me%20ayud%C3%A9is%20a%20adaptar%20los%207%20h%C3%A1bitos%20a%20mi%20casa.
```

> **Por qué este texto:** da al equipo humano el contexto completo —de qué
> campaña viene y qué quiere— para responder sin tener que preguntar
> "¿de qué vienes?". Reduce fricción y acelera la primera respuesta (< 1 min,
> benchmark de la skill).

---

## D) UTMs ESTÁNDAR EKIO PARA ESTA CAMPAÑA

Aplicar a CUALQUIER enlace a la tienda Shopify que aparezca en este flujo
(no al enlace de Drive ni al wa.me, que no son de tienda):

```
utm_source=manychat
utm_medium=instagram_dm
utm_campaign=guia-emf-ninos
utm_content=GUIA
```

**Ejemplo de enlace a producto con UTM (si en el futuro se añade CTA a SPIRO):**
```
https://electrosmogespana.com/products/[handle]?utm_source=manychat&utm_medium=instagram_dm&utm_campaign=guia-emf-ninos&utm_content=GUIA
```

---

## E) CHECKLIST DE QA — 10 PUNTOS ANTES DE ACTIVAR

Adaptado del checklist de configuración técnica de la skill manychat-cro,
específico para este flujo:

```
QA FLUJO "GUÍA" — verificar antes de publicar
──────────────────────────────────────────────
□ 1. Keyword "GUÍA" + TODAS las variantes (GUIA, guía, guia,
      "quiero la guía", "GUÍA NIÑOS", "guia niños") en modo "contiene".
□ 2. Respuesta pública al comentario activa y rotando versiones A/B.
□ 3. Mensaje 2: el enlace [ENLACE_GUIA_DRIVE] abre correctamente
      y la guía es visible SIN pedir permiso/login (ver riesgo F).
□ 4. Delay de 30 s configurado entre Mensaje 2 y Mensaje 3 (no 30 min).
□ 5. Botón wa.me abre WhatsApp con el texto pre-rellenado correcto
      y el número [NÚMERO_WHATSAPP_EKIO] real (probado en móvil).
□ 6. Campo de email (M4B) lleva el microcopy RGPD visible debajo.
□ 7. Evento Klaviyo "manychat_lead_magnet_entregado" llega con todas
      las propiedades (probar con cuenta de test y ver en Klaviyo).
□ 8. Tags Shopify/ManyChat se aplican en cada rama (guia_entregada,
      guia_whatsapp_click, guia_email_dado).
□ 9. Follow-up +24h SOLO se envía a quien tiene guia_entregada
      y NO tiene guia_whatsapp_click (probar ambas rutas).
□ 10. Cierre elegante y rama "Ahora no" probados: nadie queda en un
      callejón sin salida ni recibe mensajes en bucle.
──────────────────────────────────────────────
EXTRA recomendado:
□ API de Klaviyo conectada (Settings → Integrations).
□ Notificaciones al equipo activas para los clics de WhatsApp.
□ Horario de atención humana definido (fuera de horario → mensaje de espera).
```

---

## F) NOTA DE RIESGO — PERMISOS DEL ENLACE DE DRIVE

**Riesgo:** un enlace de Google Drive con permisos mal configurados es el
fallo silencioso más común de este tipo de flujo. Síntomas:
- El usuario pulsa el enlace y ve **"Solicitar acceso"** → fricción total,
  abandono inmediato, y mala primera impresión de marca.
- Drive puede **bloquear o limitar** la descarga si hay un pico de tráfico
  (ej. tras un Reel viral), justo cuando más leads llegan.
- No hay forma de medir aperturas/descargas reales del PDF desde Drive.

**Mitigación mínima si se mantiene Drive:**
- Permiso = "Cualquier persona con el enlace · Lector" (no "Restringido").
- Subir el PDF como archivo, no como Google Doc, para descarga directa.
- Probar el enlace en incógnito y desde móvil antes de activar.

**Alternativa recomendada (preferente): landing en Shopify con PDF embebido.**
- Crear una página en `electrosmogespana.com/guia-ninos` (o similar) con el
  PDF embebido/descargable y el branding EKIO.
- Ventajas: control total de permisos, **trackeo real** (GA4 + UTMs),
  posibilidad de añadir un CTA suave a producto/consultoría dentro de la
  propia landing, retargeting con el píxel, y cero riesgo de "solicitar acceso".
- Ya existe la carpeta `landing-lead-magnet/` en el proyecto: reutilizarla.
- El `[ENLACE_GUIA_DRIVE]` del Mensaje 2 pasaría a ser
  `https://electrosmogespana.com/guia-ninos?utm_source=manychat&utm_medium=instagram_dm&utm_campaign=guia-emf-ninos&utm_content=GUIA`.

> Decisión a confirmar con Javier antes de activar: Drive (rápido, frágil)
> vs. landing Shopify (un poco más de montaje, mucho más control y medible).
> Recomendación del agente: **landing Shopify.**
