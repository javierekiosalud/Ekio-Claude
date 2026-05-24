# FLUJO MANYCHAT — "GUÍA" (Lead magnet: Manual de Higiene Electromagnética)

> **Entregable 1 de 3** · Agente ManyChat · EKIO Electrosmog España
> Documento de implementación manual. ManyChat NO tiene API pública para
> crear flujos por código: esto se construye en la interfaz de ManyChat.
>
> **Lead magnet:** Manual de Higiene Electromagnética (audiencia: hogar /
> adultos). NO confundir con el flujo ya existente "Guía Niños - Higiene
> Electromagnética", que entrega otro documento distinto.
>
> Concepto de marca: **"El precio invisible"** — el coste oculto que paga
> el cuerpo por ignorar el electrosmog en casa.
> Tono: cercano, científico, sin presión. Como un amigo que sabe de salud.

---

## ARQUITECTURA DEL FLUJO (decisiones cerradas)

| # | Decisión | Implicación de copy |
|---|---|---|
| 1 | **Enlace primero** | El manual se entrega en el Mensaje 2, antes de pedir nada |
| 2 | **Entrega 100% en ManyChat** | El usuario recibe el enlace de Drive en el propio DM. SIN paso a WhatsApp |
| 3 | **Email opcional** | Tras la entrega se ofrece dejar el email para nurture. No es obligatorio |
| 4 | **Delay de 30 s** | Entre Mensaje 2 (entrega) y Mensaje 3 (oferta de email) |

> **Flujo simplificado (sin WhatsApp).** Versión anterior contemplaba un puente
> a WhatsApp vía wa.me; se elimina por decisión de Javier para que la entrega
> sea rápida y autónoma dentro de ManyChat. Los leads se captan por otra vía,
> así que este flujo solo entrega valor + captura email opcional.

> **Nota de coherencia con el Flujo 3 base de la skill:** el flujo base
> pedía el email *antes* de entregar. Aquí lo invertimos a propósito:
> entregamos valor primero (genera reciprocidad y confianza) y el email
> pasa a ser una vía secundaria, no la puerta. Es una mejora deliberada
> sobre el flujo base, no una desviación.

---

## A) CONFIGURACIÓN DEL TRIGGER (KEYWORD)

### KEYWORD PRINCIPAL Y VARIANTES

Configurar en ManyChat como **un único Growth Tool "Comment-to-DM" + Keyword en DM**
que dispare con CUALQUIERA de estas variantes (modo "contiene", no "coincide exacto"):

| Variante | Por qué se incluye |
|---|---|
| `GUÍA` | Forma canónica, la que aparece en el CTA del post |
| `GUIA` | **Crítica**: sin tilde. La mayoría de móviles Android e iOS NO ponen tilde en mayúsculas por defecto, y muchísima gente escribe sin tildes en redes |
| `guía` | Minúscula con tilde |
| `guia` | **Crítica**: minúscula sin tilde, la forma más tecleada de todas |
| `quiero la guía` | Frase natural; mucha gente responde con frase completa, no con la keyword aislada |
| `quiero la guia` | Misma frase sin tilde |
| `MANUAL` / `manual` | El lead magnet es el "Manual de Higiene EM"; algunos escribirán esa palabra en vez de GUÍA |
| `quiero el manual` | Frase natural alternativa |

> **⚠️ Colisión con el flujo de niños:** este flujo NO debe capturar las
> variantes con "niños" (`GUÍA NIÑOS`, `guia niños`, etc.). Esas pertenecen
> al flujo existente "Guía Niños - Higiene Electromagnética". Si ambos flujos
> usan keyword GUÍA, desambiguar por el post de origen (Comment-to-DM por
> publicación concreta) para que cada Reel dispare el manual correcto.

### POR QUÉ LAS VARIANTES SIN TILDE SON CRÍTICAS

> Si solo configuras `GUÍA` con tilde, **pierdes la mayoría de los leads**.
> En Instagram, el teclado en mayúsculas de iOS y Android no añade tilde
> automáticamente, y el comportamiento real del usuario en comentarios es
> escribir rápido y sin acentos. Una keyword que no captura `GUIA` y `guia`
> deja fuera —en la práctica— a más de la mitad de quien sí quiere la guía.
> Ese es, literalmente, un "precio invisible" del propio flujo: leads que
> comentan, no reciben nada, y se van pensando que la marca no respondió.

### CONFIGURACIÓN TÉCNICA EN MANYCHAT

- **Tipo de trigger:** Instagram → "Comments" (Comment-to-DM) **+** "Keywords" (DM directo).
- **Match type:** *Contains* (contiene), no *Is* (exacto), para abarcar frases.
- **Aplicar a:** comentarios en el Reel/Post específico **y** mensajes directos.
- **Activar también en respuestas a Stories** si el post tiene tráfico alto.
- **Anti-bot:** alternar las dos versiones de respuesta pública (ver sección B).

---

## B) RESPUESTA AUTOMÁTICA AL COMENTARIO (3 VERSIONES)

> La respuesta pública al comentario es ESENCIAL para el alcance: Instagram
> amplifica los posts donde la cuenta responde. Alternar A/B evita que el
> algoritmo detecte un patrón de bot (mismo texto repetido = penalización).

### VERSIÓN A — Reel/Post
```
✅ ¡Te acabo de mandar la guía por DM, [Nombre]! 📩
Revisa tus mensajes, está ahí esperándote 👀
```

### VERSIÓN B — Reel/Post (alternar con A)
```
📩 ¡Hecho, [Nombre]! Tienes la guía en tu bandeja de DM.
Échale un ojo y me cuentas 🙌
```

### VERSIÓN STORY — directo a DM
```
👀 ¡Mira tus DMs, [Nombre]! Te he dejado ahí la guía.
```

> **Regla de uso:** configurar A y B como dos respuestas y dejar que ManyChat
> rote, o alternarlas manualmente cada pocos días. La versión Story es más
> corta porque la respuesta a una Story ya llega directa al DM.

---

## C) SECUENCIA DE DM — 5 MENSAJES + RAMAS

```
════════════════════════════════════════
FLUJO: GUÍA — Lead magnet Manual de Higiene Electromagnética
TRIGGER: Keyword "GUÍA" (+ variantes) / comentario
CANAL: Instagram DM
TEMPERATURA DEL LEAD: Frío (interés en contenido gratuito)
════════════════════════════════════════
```

### MENSAJE 1 — HOOK + CONFIRMACIÓN (inmediato al trigger)
**Bloque ManyChat:** Texto + 2 botones · Envío: inmediato

```
👋 ¡Hola [Nombre]!

En casa estás expuesto al electrosmog las 24h: router, móvil,
wifi del vecino… y tu cuerpo lo registra aunque tú no lo notes.

Te he preparado el Manual de Higiene Electromagnética para reducirlo.
¿Te lo paso ahora?

[📘 Sí, pásamelo]   [🤔 Cuéntame primero]
```
- Botón **[📘 Sí, pásamelo]** → Mensaje 2
- Botón **[🤔 Cuéntame primero]** → Mensaje 1-bis (micro-contexto, luego Mensaje 2)

> Cumple regla de preview: 4 líneas de cuerpo, 2 botones. El hook conecta el
> electrosmog del hogar con el concepto "El precio invisible" ("lo registra
> aunque no lo notes"), sin exagerar ni inventar claims.

**MENSAJE 1-bis (solo rama "Cuéntame primero")**
**Bloque:** Texto + 1 botón
```
Claro 🙂

El Manual es gratuito y práctico: nada de teoría infinita.
Son los cambios concretos que, aplicados hoy, reducen tu
exposición al electrosmog en casa (empezando por el dormitorio).

¿Te lo mando?

[📘 Venga, pásamelo]
```
- Botón → Mensaje 2

---

### MENSAJE 2 — ENTREGA DEL ENLACE (inmediato tras confirmar)
**Bloque ManyChat:** Texto con enlace · Envío: inmediato

```
✅ ¡Aquí lo tienes!

📘 Manual de Higiene Electromagnética
Los cambios prácticos para reducir tu exposición en casa,
empezando por donde más importa: tu descanso.

👉 https://drive.google.com/file/d/1g7SC_Z_XFwIMzSN6r8jUyiJ6GYMwix_c/view

Léelo con calma. No hace falta que hagas nada más ahora mismo 🙂
```
- **Acción simultánea (sin que el usuario lo vea):**
  - Disparar evento Klaviyo `manychat_lead_magnet_entregado`
  - Aplicar tag Shopify `lead-manychat-manual-higiene`
  - Aplicar tag interno ManyChat `guia-higiene-entregada` (ya existe en la cuenta)
  - Set custom field `keyword_origen = GUIA` y `canal_captacion = instagram`
- **Enlace de entrega (Drive):** decisión tomada — entrega directa por Drive
  para ir rápido (los leads vienen por otra vía). Verificar permisos: ver
  Entregable 2 (f). Quitado el `?usp=sharing` final por limpieza; el ID es el
  mismo. Si se prefiere forzar descarga directa en vez de vista previa, usar
  la variante `uc?export=download` documentada en el Entregable 2 (c).

> Aquí "El precio invisible" aparece de forma natural: el daño no se ve, por
> eso el manual existe. No se fuerza el concepto en el texto del mensaje.

---

### MENSAJE 3 — OFERTA DE EMAIL OPCIONAL (delay 30 s)
**Bloque ManyChat:** Delay 30 s → Texto + 2 botones

```
Una cosa más, [Nombre] 👇

Si quieres, te mando de vez en cuando ideas prácticas para
reducir el electrosmog en casa (sin spam, te sales cuando quieras).

¿Te dejo apuntado?

[📩 Sí, apúntame]   [🙂 No, gracias]
```
- Botón **[📩 Sí, apúntame]** → Mensaje 4 (captura de email)
- Botón **[🙂 No, gracias]** → Cierre elegante
- **Delay:** insertar bloque "Delay" de **30 segundos** antes de este mensaje.

> El delay de 30 s da tiempo a procesar que YA ha recibido el manual. Pedir
> algo de inmediato se siente a embudo agresivo; esperar se siente a
> conversación. Regla cumplida: 2 botones, cuerpo breve.

---

### MENSAJE 4 — CAPTURA DE EMAIL (rama "Sí, apúntame")
**Bloque ManyChat:** Texto + campo de captura Email (User Input)

```
¡Genial! 📧

Déjame tu correo aquí debajo y te llegan solo cosas útiles:
```
- **Campo:** User Input → Email → guarda en `email`.
- **Microcopy RGPD (texto obligatorio bajo el campo):**
  ```
  Al dejar tu email aceptas recibir comunicaciones de EKIO Bienestar S.L.
  Puedes darte de baja cuando quieras. Más info en electrosmogespana.com/privacidad
  ```
- Si captura email → Mensaje 5
- Si no responde → Cierre elegante
- **Acción al capturar:** tag ManyChat `email-capturado-ig-follower` (ya existe);
  set `via_preferida = email`; actualizar evento Klaviyo con `email` y propiedad
  `captura_email_opcional=true`; añadir a lista Klaviyo de nurture.

---

### MENSAJE 5 — CONFIRMACIÓN (solo si dio email)
**Bloque ManyChat:** Texto · Envío: inmediato tras capturar email

```
✅ ¡Anotado, [Nombre]!

A partir de ahora te llegan cosas útiles, no spam.
Y si te surge cualquier duda con el manual, escríbeme por aquí
cuando quieras 🌿
```
- **Acción:** confirmar opt-in en Klaviyo (entra en el flujo de nurture EMF para
  hogar/adultos — nombre exacto a confirmar con Erick; ver Entregable 2 (a)).

---

### CIERRE ELEGANTE — rama "Ahora no" / sin respuesta
**Bloque ManyChat:** Texto · Envío: tras inactividad o si rechaza

```
Perfecto, [Nombre] 🙂

El manual es tuyo, léelo cuando puedas.
Aquí estaremos si te surge cualquier duda.

Un abrazo 🌿
```
- Sin botones. Deja buena impresión: puede volver más adelante.

---

### FOLLOW-UP AUTOMÁTICO +24 h
**Bloque ManyChat:** Delay 24 h → condición → Texto + 3 botones
**Condición de envío:** tiene tag `guia-higiene-entregada` **Y NO** tiene tag
`email-capturado-ig-follower` (recibió el manual pero no dejó email: reenganche).

```
Hola [Nombre] 👋

¿Pudiste echarle un ojo al manual?

Hay un punto que sorprende a casi todos: el router wifi
encendido toda la noche a pocos metros de la cama.

¿Te pasa en casa?

[😬 Sí, lo tengo así]  [✅ No, lo apago]  [❓ No lo había pensado]
```
- Cualquier respuesta → reactiva conversación → volver a ofrecer el email opcional (reusar Mensaje 4).
- **Acción:** set custom field `situacion_router` (valor según botón) y disparar
  evento Klaviyo `manychat_followup_respondido` con esa propiedad.

> **Excepción a la regla de "máx. 2 botones":** este follow-up usa 3 porque
> son respuestas a una pregunta de diagnóstico (no CTAs que compiten), igual
> que en el Flujo 3 base de la skill. No hay parálisis de decisión: las tres
> son la misma acción (responder), solo cambia el contenido.

---

## D) NOTAS DE IMPLEMENTACIÓN EN MANYCHAT (resumen por mensaje)

| Mensaje | Tipo de bloque | Delay / condición de envío |
|---|---|---|
| Resp. pública | Comment-to-DM (Growth Tool) | Inmediato al comentario; rotar A/B |
| M1 Hook | Texto + 2 botones | Inmediato al trigger |
| M1-bis | Texto + 1 botón | Solo rama "Cuéntame primero" |
| M2 Entrega | Texto + enlace Drive | Inmediato tras confirmar · dispara evento Klaviyo + tags |
| M3 Email opcional | Texto + 2 botones | **Delay 30 s** antes del bloque |
| M4 Email | Texto + User Input (Email) | Rama "Sí, apúntame" · microcopy RGPD obligatorio |
| M5 Confirmación | Texto | Solo si capturó email |
| Cierre elegante | Texto, sin botones | Rama "No, gracias" / inactividad |
| Follow-up +24h | Delay 24 h + condición de tags | `guia-higiene-entregada` Y NO `email-capturado-ig-follower` |

**Reglas de la skill aplicadas:**
- Máximo 2 botones por mensaje (excepción justificada: diagnóstico de 3 opciones).
- Mensaje 1 legible en preview (≤ 4 líneas de cuerpo).
- Salida elegante siempre disponible.
- Personalización con `[Nombre]` en apertura.
- Un solo CTA principal por mensaje.
