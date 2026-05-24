# FLUJO MANYCHAT — "GUÍA" (Lead magnet: Manual de Higiene Electromagnética)

> **Entregable 1 de 3** · EKIO Electrosmog España
> **ESTADO: 🟢 PUBLICADO (LIVE)** en la cuenta "Electrosmog España".
> Automatización: **GUÍA — Manual Higiene EM** · carpeta `01. AUTOMATIZACIÓN`.
> Construida manualmente en el editor visual de ManyChat (la API no permite
> autorar flujos; se montó conduciendo el navegador).
>
> **Lead magnet:** Manual de Higiene Electromagnética (audiencia: hogar /
> adultos). NO confundir con el flujo aparte "Guía Niños - Higiene
> Electromagnética", que entrega otro documento.
>
> Concepto de marca: **"El precio invisible"** — el coste oculto que paga
> el cuerpo por ignorar el electrosmog en casa.
> Tono: cercano, científico, sin presión. Como un amigo que sabe de salud.

---

## RESUMEN DEL FLUJO PUBLICADO

```
2 DISPARADORES (comentarios + DM) · keywords GUÍA/GUIA/guía/guia/MANUAL/manual
        ↓
M1  Hook + 2 botones (📘 Sí, pásamelo / 🤔 Cuéntame primero)
        │                          │
        │                    M1-bis (reassurance) ──┐
        ↓                                           ↓
M2  Entrega del Manual (enlace Drive)  ←────────────┘  (convergen)
        ↓
ACCIONES  (tag guia-higiene-entregada + set keyword_origen=GUIA)
        ↓
PAUSA INTELIGENTE — 23 HORAS
        ↓
M3  Seguimiento/cierre: "¿Ya has leído el Manual?..." + enlace a la web   (FIN)
```

> **Diseño final (decisiones de Javier):** entrega rápida del Manual por Drive
> dentro del DM, y ~23 h después un único mensaje de seguimiento que reconduce
> a la web. SIN captura de email, SIN paso a WhatsApp, SIN follow-up adicional.
> Flujo simple, limpio y de timing no intrusivo.

---

## A) DISPARADORES (configurados y activos)

Ambos disparadores cuelgan del nodo "Cuando..." y activan la misma secuencia.

### 1) Comentarios de publicaciones o Reels (Comment-to-DM)
- **Alcance:** Todas las publicaciones o Reels.
- **Keywords (los comentarios que incluyen):** `GUÍA`, `GUIA`, `guía`, `guia`, `MANUAL`, `manual`.
- **Respuesta pública:** "Sí, múltiples respuestas aleatorias" — 3 respuestas que
  rotan (evita patrón de bot y amplía alcance). Textos por defecto de ManyChat,
  en tono amable ("¡Mensaje enviado! Revisa los DMs", etc.).

### 2) Mensaje de Instagram (DM directo)
- **Tipo:** "Detecta palabras específicas en un mensaje".
- **Keywords (el mensaje contiene):** `GUÍA`, `GUIA`, `guía`, `guia`, `MANUAL`, `manual`.

### POR QUÉ TODAS LAS VARIANTES SON CRÍTICAS
> ManyChat confirma en su propia interfaz que **las palabras clave distinguen
> mayúsculas y minúsculas** ("GUÍA" ≠ "guia"). En Instagram el teclado en
> mayúsculas no añade tilde y la gente escribe sin acentos. Sin las variantes
> `GUIA`/`guia` se perdería a la mayoría de quien sí quiere el Manual: ese es
> un "precio invisible" del propio flujo.
>
> ⚠️ **No incluir variantes con "niños"** — pertenecen al flujo "Guía Niños".

---

## B) SECUENCIA DE MENSAJES (copy literal publicado)

### MENSAJE 1 — HOOK + CONFIRMACIÓN
```
👋 ¡Hola!

En casa estás expuesto al electrosmog las 24h: router, móvil, wifi del
vecino… y tu cuerpo lo registra aunque tú no lo notes.

Te he preparado el Manual de Higiene Electromagnética para reducirlo.
¿Te lo paso ahora?

[📘 Sí, pásamelo]   [🤔 Cuéntame primero]
```
- **[📘 Sí, pásamelo]** → M2 (entrega)
- **[🤔 Cuéntame primero]** → M1-bis

### MENSAJE 1-bis (rama "Cuéntame primero")
```
Claro 🙂

El Manual es gratuito y práctico: nada de teoría infinita. Son los cambios
concretos que, aplicados hoy, reducen tu exposición al electrosmog en casa
(empezando por el dormitorio).

¿Te lo mando?

[📘 Venga, pásamelo]
```
- **[📘 Venga, pásamelo]** → M2 (converge en el mismo nodo de entrega)

### MENSAJE 2 — ENTREGA DEL MANUAL
```
✅ ¡Aquí lo tienes!

📘 Manual de Higiene Electromagnética
Los cambios prácticos para reducir tu exposición en casa, empezando por
donde más importa: tu descanso.

👉 https://drive.google.com/file/d/1g7SC_Z_XFwIMzSN6r8jUyiJ6GYMwix_c/view

Léelo con calma. No hace falta que hagas nada más ahora mismo 🙂
```

### NODO DE ACCIONES (tras M2)
- Añadir tag `guia-higiene-entregada`
- Set custom field `keyword_origen = GUIA`

### PAUSA INTELIGENTE — 23 HORAS

### MENSAJE 3 — SEGUIMIENTO + CIERRE A WEB (tras la pausa)
```
¿Ya has leído el Manual? 📖

Ya sabes que estamos aquí para lo que necesites. Y te invitamos a pasarte
por nuestra web 👇

https://electrosmogespana.com/
```
- Sin botones. Es el mensaje final del flujo. El enlace queda clicable.

---

## C) NOTAS DE IMPLEMENTACIÓN (resumen por paso)

| Paso | Tipo de bloque ManyChat | Notas |
|---|---|---|
| Disparadores | Comment-to-DM (Growth Tool) + Keyword DM | 6 variantes case-sensitive; respuesta pública rotativa |
| M1 | Instagram · Texto + 2 botones | Legible en preview |
| M1-bis | Instagram · Texto + 1 botón | Converge a M2 con "Seleccionar paso existente" |
| M2 | Instagram · Texto con enlace Drive | Entrega del Manual |
| Acciones | Acciones | tag `guia-higiene-entregada` + set `keyword_origen` |
| Pausa | Pausa inteligente · Duración | **23 Horas** |
| M3 | Instagram · Texto (sin botones) | Cierre + enlace web · FIN |

**Reglas de la skill aplicadas:** hook breve y legible, máximo 2 botones por
mensaje, salida elegante (M1-bis), copy en voz de EKIO, un solo CTA por mensaje.

> **Descartado del diseño previo (ya NO está en el flujo):** captura de email
> opcional (M4), mensaje de confirmación, paso a WhatsApp y follow-up separado.
> El mensaje de email se sustituyó por el cierre a web del M3 y la pausa de 23h
> hace de "seguimiento al día siguiente".
