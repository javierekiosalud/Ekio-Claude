# FLUJO MANYCHAT — "GUÍA" (Lead magnet: PDF Higiene EMF Niños)

> **Entregable 1 de 3** · Agente ManyChat · EKIO Electrosmog España
> Documento de implementación manual. ManyChat NO tiene API pública para
> crear flujos por código: esto se construye en la interfaz de ManyChat.
>
> Concepto de marca: **"El precio invisible"** — el coste oculto que paga
> el cuerpo (sobre todo el de los niños) por ignorar el electrosmog.
> Tono: cercano, científico, sin presión. Como un amigo que sabe de salud.

---

## ARQUITECTURA DEL FLUJO (decisiones cerradas)

| # | Decisión | Implicación de copy |
|---|---|---|
| 1 | **Enlace primero** | La guía se entrega en el Mensaje 2, antes de pedir nada |
| 2 | **Email opcional** | Solo se ofrece en la rama 4B a quien prefiere "leer primero" |
| 3 | **WhatsApp vía botón wa.me** | Botón que abre WhatsApp con texto pre-rellenado. No pedimos número |
| 4 | **WhatsApp atendido por humano** | El texto pre-rellenado da contexto al equipo (no preguntan "¿de qué vienes?") |
| 5 | **Delay de 30 s** | Entre Mensaje 2 (entrega) y Mensaje 3 (puente a WhatsApp) |

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
| `GUÍA NIÑOS` | Variante específica del CTA cuando el post es de niños |
| `guia niños` / `guia ninos` | Sin tilde y con/sin ñ (la ñ también se pierde en muchos teclados) |

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
FLUJO: GUÍA — Lead magnet Higiene EMF Niños
TRIGGER: Keyword "GUÍA" (+ variantes) / comentario
CANAL: Instagram DM
TEMPERATURA DEL LEAD: Frío (interés en contenido gratuito)
════════════════════════════════════════
```

### MENSAJE 1 — HOOK + CONFIRMACIÓN (inmediato al trigger)
**Bloque ManyChat:** Texto + 2 botones · Envío: inmediato

```
👋 ¡Hola [Nombre]!

El cerebro de un niño absorbe más radiación que el de un adulto:
su cráneo es más fino y su tejido, más conductor.

Te he preparado una guía con los 7 hábitos que lo protegen.
¿Te la paso ahora?

[📘 Sí, pásamela]   [🤔 Cuéntame primero]
```
- Botón **[📘 Sí, pásamela]** → Mensaje 2
- Botón **[🤔 Cuéntame primero]** → Mensaje 1-bis (micro-contexto, luego Mensaje 2)

> Cumple regla de preview: 4 líneas de cuerpo, 2 botones. El dato científico
> (cráneo infantil) es el gancho de curiosidad, verificable y no exagerado.

**MENSAJE 1-bis (solo rama "Cuéntame primero")**
**Bloque:** Texto + 1 botón
```
Claro 🙂

La guía es gratuita y directa: nada de teoría infinita.
Son los 7 hábitos concretos que, aplicados hoy, reducen
la exposición de tus hijos al electrosmog en casa.

¿Te la mando?

[📘 Venga, pásamela]
```
- Botón → Mensaje 2

---

### MENSAJE 2 — ENTREGA DEL ENLACE (inmediato tras confirmar)
**Bloque ManyChat:** Texto con enlace · Envío: inmediato

```
✅ ¡Aquí la tienes!

📘 Higiene Electromagnética para Niños
Los 7 hábitos que protegen su sistema nervioso del
electrosmog cotidiano.

👉 [ENLACE_GUIA_DRIVE]

Léela con calma. No hace falta que hagas nada más ahora mismo 🙂
```
- **Acción simultánea (sin que el usuario lo vea):**
  - Disparar evento Klaviyo `manychat_lead_magnet_entregado`
  - Aplicar tag Shopify `lead-manychat-guia`
  - Aplicar tag interno ManyChat `guia_entregada`
- `[ENLACE_GUIA_DRIVE]` → **PLACEHOLDER**. No inventar. Ver riesgo de permisos en Entregable 2 (f).

> Aquí "El precio invisible" aparece de forma natural: el daño no se ve, por
> eso la guía existe. No se fuerza el concepto en el texto del mensaje.

---

### MENSAJE 3 — PREGUNTA PUENTE A WHATSAPP (delay 30 s)
**Bloque ManyChat:** Delay 30 s → Texto + 2 botones

```
Una cosa más, [Nombre] 👇

Cada casa es un mundo: router, dispositivos, dónde duermen…
Lo que más protege es adaptar los 7 hábitos a TU situación.

¿Quieres que te ayudemos a hacerlo, sin coste?

[💬 Sí, por WhatsApp]   [📩 Mejor por email]
```
- Botón **[💬 Sí, por WhatsApp]** → Mensaje 4A
- Botón **[📩 Mejor por email]** → Mensaje 4B
- **Delay:** insertar bloque "Delay" de **30 segundos** antes de este mensaje.

> El delay de 30 s da tiempo a procesar que YA ha recibido algo. Pedir el
> siguiente paso de inmediato se siente a embudo agresivo; esperar se siente
> a conversación. Regla cumplida: 2 botones, cuerpo breve.

---

### MENSAJE 4A — APERTURA DE WHATSAPP (botón wa.me)
**Bloque ManyChat:** Texto + 1 botón tipo "URL"

```
¡Genial! 🙌

Pulsa aquí y se abre WhatsApp con un mensaje ya escrito.
Solo tienes que darle a enviar y te atendemos personalmente
(personas reales, no bots 🙂).

[💬 Abrir WhatsApp]
```
- Botón **[💬 Abrir WhatsApp]** → tipo **URL**, apunta a `wa.me` con texto
  pre-rellenado (estructura exacta en Entregable 2, sección c).
- **Acción simultánea:** tag ManyChat `guia_whatsapp_click` (corta el follow-up +24h).
- **NO pedir número.** El usuario abre su propio WhatsApp.

> El mensaje pre-rellenado lleva contexto ("vengo de la guía de niños de
> Instagram") para que el equipo humano responda sin preguntar de qué viene.

---

### MENSAJE 4B — CIERRE SUAVE + EMAIL OPCIONAL
**Bloque ManyChat:** Texto + campo de captura Email (User Input)

```
Sin problema 🙂 Lo dejamos a tu ritmo.

Si quieres, te dejo el email donde mandarte de vez en cuando
ideas prácticas para una casa más sana (puedes salir cuando quieras).

📧 Déjame tu correo aquí debajo si te apetece:
```
- **Campo:** User Input → Email → guarda en `email`.
- **Microcopy RGPD (texto obligatorio bajo el campo):**
  ```
  Al dejar tu email aceptas recibir comunicaciones de EKIO Bienestar S.L.
  Puedes darte de baja cuando quieras. Más info en electrosmogespana.com/privacidad
  ```
- Si captura email → Mensaje 5
- Si pulsa "saltar" / no responde → Cierre elegante
- **Acción al capturar:** actualizar evento Klaviyo con `email` y propiedad
  `captura_email_opcional=true`; añadir a lista Klaviyo de nurture.

---

### MENSAJE 5 — CONFIRMACIÓN (solo si dio email)
**Bloque ManyChat:** Texto · Envío: inmediato tras capturar email

```
✅ ¡Anotado, [Nombre]!

A partir de ahora te llegan cosas útiles, no spam.
Y si en algún momento quieres que te echemos una mano,
escríbenos por aquí o por WhatsApp cuando quieras.

Cuida de los tuyos 🌿
```
- **Acción:** confirmar opt-in en Klaviyo (entra en flujo "Lead magnet niños - Nurture EMF").

---

### CIERRE ELEGANTE — rama "Ahora no" / sin respuesta
**Bloque ManyChat:** Texto · Envío: tras inactividad o si rechaza

```
Perfecto, [Nombre] 🙂

La guía es tuya, léela cuando puedas.
Aquí estaremos si te surge cualquier duda.

Un abrazo 🌿
```
- Sin botones. Deja buena impresión: puede volver más adelante.

---

### FOLLOW-UP AUTOMÁTICO +24 h
**Bloque ManyChat:** Delay 24 h → condición → Texto + 3 botones
**Condición de envío:** tiene tag `guia_entregada` **Y NO** tiene tag
`guia_whatsapp_click` (es decir: recibió la guía pero no pasó a WhatsApp).

```
Hola [Nombre] 👋

¿Pudiste echarle un ojo a la guía?

Hay un punto que sorprende a casi todos los padres: el router
wifi encendido toda la noche cerca del cuarto de los niños.

¿Te pasa en casa?

[😬 Sí, lo tenemos así]  [✅ No, lo apagamos]  [❓ No lo había pensado]
```
- Cualquier respuesta → reactiva conversación → ofrecer WhatsApp de nuevo (reusar Mensaje 4A).
- **Acción:** disparar evento Klaviyo `manychat_followup_respondido` con propiedad `situacion_router`.

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
| M2 Entrega | Texto + enlace | Inmediato tras confirmar · dispara evento Klaviyo + tags |
| M3 Puente | Texto + 2 botones | **Delay 30 s** antes del bloque |
| M4A WhatsApp | Texto + botón URL (wa.me) | Rama "Sí, por WhatsApp" · tag `guia_whatsapp_click` |
| M4B Email | Texto + User Input (Email) | Rama "Mejor por email" · microcopy RGPD obligatorio |
| M5 Confirmación | Texto | Solo si capturó email |
| Cierre elegante | Texto, sin botones | Rama "Ahora no" / inactividad |
| Follow-up +24h | Delay 24 h + condición de tags | `guia_entregada` Y NO `guia_whatsapp_click` |

**Reglas de la skill aplicadas:**
- Máximo 2 botones por mensaje (excepción justificada: diagnóstico de 3 opciones).
- Mensaje 1 legible en preview (≤ 4 líneas de cuerpo).
- Salida elegante siempre disponible.
- Personalización con `[Nombre]` en apertura.
- Un solo CTA principal por mensaje.
