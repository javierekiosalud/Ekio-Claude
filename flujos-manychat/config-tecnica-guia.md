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
recibe el enlace del manual (no cuando comenta, sino cuando confirma y recibe).

### PROPIEDADES DEL EVENTO (con valores posibles)

| Propiedad | Tipo | Valores posibles | Cuándo se rellena |
|---|---|---|---|
| `lead_magnet` | string | `manual_higiene_electromagnetica` (fijo) | Siempre, en M2 |
| `keyword_activadora` | string | `GUIA` (normalizado, sin tilde) | Siempre, en M2 |
| `canal_origen` | string | `instagram_dm` | Siempre, en M2 |
| `email` | string | el correo capturado · vacío si no lo da | Solo si pasa por M4 |
| `captura_email_opcional` | boolean | `true` / `false` | `true` si dio email en M4; `false` por defecto |
| `via_preferida` | string | `email` / `ninguna` | Según botón pulsado en M3 |
| `situacion_router` | string | `si_encendido` / `apagado` / `no_pensado` / vacío | Solo si responde al follow-up +24h |
| `fecha_entrega` | datetime | timestamp ISO | Siempre, en M2 |

> **Audiencia hogar/adultos.** Se eliminó la propiedad `tiene_ninos`: este manual
> NO es el lead magnet de niños (ese es otro flujo distinto, "Guía Niños").
> **Versión sin WhatsApp:** eliminada la propiedad `whatsapp_click`; `via_preferida`
> solo toma `email` o `ninguna`.

> **Nota de privacidad:** si el usuario NO da email (rama "No, gracias" o cierre),
> el evento Klaviyo se dispara igualmente pero el perfil queda
> identificado solo por ManyChat ID, sin email. Klaviyo solo activará el
> flujo de email cuando exista `email`.

### EVENTO SECUNDARIO (follow-up)

**Nombre:** `manychat_followup_respondido`
**Propiedades:** `situacion_router` (mismos valores que arriba), `email` (si existe).

### FLUJO KLAVIYO DESTINO

| Campo | Valor |
|---|---|
| **Flujo destino** | Nurture EMF hogar/adultos — **nombre exacto a confirmar con Erick** |
| **Trigger del flujo** | Métrica = evento `manychat_lead_magnet_entregado` con `lead_magnet = manual_higiene_electromagnetica` |
| **Condición de activación** | El perfil tiene `email` (≠ vacío) **Y** `captura_email_opcional = true` |
| **Filtro de exclusión** | Excluir si ya está en el flujo (evitar duplicados) |
| **Rama interna sugerida** | Si `situacion_router = si_encendido` → email 2 prioriza el hábito del router |

> **⚠️ A confirmar con Erick (especialista Klaviyo):** el flujo destino NO es
> "Lead magnet niños - Nurture EMF" (ese es del lead magnet de niños). Este
> manual necesita un flujo de nurture para hogar/adultos. Si no existe, hay
> que crearlo o filtrar el flujo por la propiedad `lead_magnet` para segmentar.
>
> Quien NO deja email **no entra** en el flujo de email Klaviyo (no tenemos
> email). Su único seguimiento es el follow-up +24h dentro de ManyChat.
> Esto es correcto y deliberado.

---

## B) TAGS DE SHOPIFY (con condición de asignación)

| Tag Shopify | Condición de asignación |
|---|---|
| `lead-manychat-manual-higiene` | Al disparar `manychat_lead_magnet_entregado` (M2). Todos los que reciben el manual |
| `lead-guia-email` | Si deja email en M4 (`captura_email_opcional = true`) |
| `lead-guia-frio` | Si recibe el manual pero no deja email (solo contenido) |

> Los tags Shopify solo se materializan en un *customer* de Shopify cuando
> hay email coincidente. Para leads sin email, el tag vive en ManyChat y
> Klaviyo hasta que (si) haya conversión. Sirven para remarketing y para
> medir calidad de lead por rama.

### TAGS INTERNOS DE MANYCHAT (control de flujo)

Estado real de la cuenta "Electrosmog España" (verificado vía API):

| Tag ManyChat | Estado | Uso |
|---|---|---|
| `guia-higiene-entregada` | ✅ Ya existe (id 86482504) | Condición de entrada al follow-up +24h |
| `email-capturado-ig-follower` | ✅ Ya existe (id 86482505) | Marca opt-in de email · corta el follow-up +24h |
| `lead-guia-email` | ✅ Creado (id 88252550) | Lead que dejó email (M4) |
| `lead-guia-frio` | ✅ Creado (id 88252551) | Lead que recibió el manual pero no dejó email |
| `guia-whatsapp-clic` | ✅ Creado (id 88252056) | ⚠️ **No usado** en la versión sin WhatsApp. Reservado por si se reactiva |

> Convención de la cuenta = **kebab-case** (`guia-higiene-entregada`,
> `whatsapp-lead`…), no snake_case. Los tags nuevos siguen esa convención.

### CUSTOM FIELDS DE MANYCHAT (datos del lead)

| Custom field | Tipo | Estado | Valores |
|---|---|---|---|
| `keyword_origen` | text | ✅ Ya existe (id 14455987) | `GUIA` |
| `canal_captacion` | text | ✅ Ya existe (id 14455992) | `instagram` |
| `via_preferida` | text | ✅ Creado (id 14625216) | `email` / `ninguna` |
| `situacion_router` | text | ✅ Creado (id 14625217) | `si_encendido` / `apagado` / `no_pensado` |

---

## C) ENTREGA DENTRO DE MANYCHAT (sin WhatsApp)

El manual se entrega exclusivamente en el DM de ManyChat mediante el enlace de
Drive (Mensaje 2). **No hay paso a WhatsApp** en esta versión del flujo.

- Enlace en el botón/texto del Mensaje 2 (ver Entregable 1, M2 y sección F).
- El equipo no necesita atender WhatsApp para este flujo: la entrega es
  automática y autónoma.
- Si en el futuro se quiere reactivar el puente a WhatsApp, el tag
  `guia-whatsapp-clic` (id 88252056) ya está creado y disponible.

---

## D) UTMs ESTÁNDAR EKIO PARA ESTA CAMPAÑA

Aplicar a CUALQUIER enlace a la tienda Shopify que aparezca en este flujo
(no al enlace de Drive ni al wa.me, que no son de tienda):

```
utm_source=manychat
utm_medium=instagram_dm
utm_campaign=manual-higiene-em
utm_content=GUIA
```

**Ejemplo de enlace a producto con UTM (si en el futuro se añade CTA a SPIRO):**
```
https://electrosmogespana.com/products/[handle]?utm_source=manychat&utm_medium=instagram_dm&utm_campaign=manual-higiene-em&utm_content=GUIA
```

---

## E) CHECKLIST DE QA — 10 PUNTOS ANTES DE ACTIVAR

Adaptado del checklist de configuración técnica de la skill manychat-cro,
específico para este flujo:

```
QA FLUJO "GUÍA" — verificar antes de publicar
──────────────────────────────────────────────
□ 1. Keyword "GUÍA" + TODAS las variantes (GUIA, guía, guia,
      "quiero la guía", MANUAL, "quiero el manual") en modo "contiene".
      NO incluir variantes con "niños" (esas son del flujo Guía Niños).
□ 2. Respuesta pública al comentario activa y rotando versiones A/B.
□ 3. Mensaje 2: el enlace de Drive abre el manual SIN pedir permiso/login
      (probado en incógnito + móvil; permiso = "Cualquiera con el enlace").
□ 4. Delay de 30 s configurado entre Mensaje 2 y Mensaje 3 (no 30 min).
□ 5. Mensaje 3 (email opcional): los 2 botones llevan a captura de email
      y a cierre elegante respectivamente. SIN paso a WhatsApp.
□ 6. Campo de email (M4) lleva el microcopy RGPD visible debajo.
□ 7. Evento Klaviyo "manychat_lead_magnet_entregado" llega con todas
      las propiedades (probar con cuenta de test y ver en Klaviyo).
□ 8. Tags ManyChat se aplican (guia-higiene-entregada en M2,
      email-capturado-ig-follower en M4) y custom fields
      via_preferida / situacion_router se rellenan.
□ 9. Follow-up +24h SOLO se envía a quien tiene guia-higiene-entregada
      y NO tiene email-capturado-ig-follower (probar ambas rutas).
□ 10. Cierre elegante y rama "Ahora no" probados: nadie queda en un
      callejón sin salida ni recibe mensajes en bucle.
──────────────────────────────────────────────
EXTRA recomendado:
□ API de Klaviyo conectada (Settings → Integrations).
□ Notificaciones al equipo activas para los clics de WhatsApp.
□ Horario de atención humana definido (fuera de horario → mensaje de espera).
```

---

## F) ENTREGA POR DRIVE — DECISIÓN TOMADA + CHECK DE PERMISOS

**Decisión (Javier):** se entrega el lead magnet **directamente por Google
Drive** desde el Mensaje 2 de ManyChat. Prioridad: rapidez de montaje. Los
leads se están captando por otra vía, así que este flujo no necesita la
infraestructura de medición de una landing propia.

**Enlace en uso (Mensaje 2):**
```
https://drive.google.com/file/d/1g7SC_Z_XFwIMzSN6r8jUyiJ6GYMwix_c/view
```
- ID del archivo: `1g7SC_Z_XFwIMzSN6r8jUyiJ6GYMwix_c`
- Se quitó el `?usp=sharing` del enlace compartido (no afecta al acceso).

**Variante de descarga directa (opcional):** si se prefiere que el PDF se
descargue de golpe en vez de abrir la vista previa de Drive:
```
https://drive.google.com/uc?export=download&id=1g7SC_Z_XFwIMzSN6r8jUyiJ6GYMwix_c
```
> Recomendación: usar la versión `/view` (vista previa). En móvil es más
> amable —el usuario ve el PDF al instante y descarga si quiere— y evita
> descargas automáticas que algunos navegadores bloquean.

**CHECK DE PERMISOS — obligatorio antes de activar (1 minuto):**
- [ ] En Drive, el archivo está como **"Cualquier persona con el enlace ·
      Lector"** (NO "Restringido"). Es el único fallo que rompe el flujo:
      si está restringido, el usuario ve "Solicitar acceso" y abandona.
- [ ] Probado en **incógnito y desde el móvil** (sin sesión de Google de EKIO),
      para confirmar que se abre sin pedir login.

**Limitación asumida (consciente):** Drive no da trazabilidad de aperturas/
descargas del PDF, y ante un pico fuerte de tráfico puede limitar la descarga.
Aceptable dado que la captación principal va por otra vía. Si en el futuro
este flujo escala, migrar a landing en Shopify (`landing-lead-magnet/`) para
recuperar trackeo (GA4 + UTMs), píxel/retargeting y CTA a producto.
