# FLUJO MANYCHAT — "DEEP5" (Lead magnet: Ebook Interactivo Deep 5)

> **Entregable 1 de 3** · EKIO Electrosmog España
> **ESTADO: 🟢 PUBLICADO (LIVE)** en la cuenta "Electrosmog España".
> Automatización: **DEEP5 — Ebook Interactivo Deep 5** · carpeta `01. AUTOMATIZACIÓN`.
>
> **Lead magnet:** Ebook Interactivo Deep 5 — el protocolo de EKIO con los 5 cambios más
> impactantes para reducir la exposición al electrosmog en casa. Audiencia: hogar /
> adultos que quieren empezar con cambios concretos hoy.
> NO confundir con el flujo "GUÍA — Manual Higiene EM" (guía general) ni con
> el flujo "SUEÑO — Guía del Sueño" (problemas de sueño).
>
> Concepto de marca: **"El precio invisible"** — el coste oculto que paga
> el cuerpo por ignorar el electrosmog en el día a día.
> Tono: cercano, científico, sin presión. Como un amigo que sabe de salud.

---

## RESUMEN DEL FLUJO PUBLICADO

```
2 DISPARADORES (comentarios + DM) · keywords DEEP5/deep5/Deep5/DEEPCINCO/deepcinco/DeepCinco
        ↓
M1  Hook + 2 botones (📗 Sí, mándamelo / 🤔 Cuéntame más)
        │                          │
        │                    M1-bis (reassurance) ──┐
        ↓                                           ↓
M2  Entrega del Ebook (enlace Drive)  ←─────────────┘  (convergen)
        ↓
ACCIONES  (tag deep5-entregada + set keyword_origen=DEEP5)
        ↓
PAUSA INTELIGENTE — 23 HORAS
        ↓
M3  Seguimiento/cierre: "¿Ya has leído el ebook?..." + enlace a la web   (FIN)
```

> **Diseño final:** entrega rápida del Ebook por Drive dentro del DM,
> y ~23 h después un único mensaje de seguimiento que reconduce a la web.
> SIN captura de email, SIN paso a WhatsApp, SIN follow-up adicional.
> Flujo simple, limpio y de timing no intrusivo. Idéntico en estructura a
> los flujos "GUÍA — Manual Higiene EM" y "SUEÑO — Guía del Sueño".

---

## A) DISPARADORES (configurados y activos)

Ambos disparadores cuelgan del nodo "Cuando..." y activan la misma secuencia.

### 1) Comentarios de publicaciones o Reels (Comment-to-DM)
- **Alcance:** Todas las publicaciones o Reels.
- **Keywords (los comentarios que incluyen):** `DEEP5`, `deep5`, `Deep5`, `DEEPCINCO`, `deepcinco`, `DeepCinco`.
- **Respuesta pública:** "Sí, múltiples respuestas aleatorias" — 3 respuestas que
  rotan (evita patrón de bot y amplía alcance):
  1. `¡Te mando el Ebook Deep 5 por DM ahora mismo! 📗`
  2. `Revisa tus DMs 📨 te envío el Ebook Deep 5 ya`
  3. `¡Enviado! Busca en tus mensajes directos el Ebook Deep 5 📗`

### 2) Mensaje de Instagram (DM directo)
- **Tipo:** "Detecta palabras específicas en un mensaje".
- **Keywords (el mensaje contiene):** `DEEP5`, `deep5`, `Deep5`, `DEEPCINCO`, `deepcinco`, `DeepCinco`.

### POR QUÉ TODAS LAS VARIANTES SON CRÍTICAS
> ManyChat confirma en su propia interfaz que **las palabras clave distinguen
> mayúsculas y minúsculas**. En Instagram el teclado en mayúsculas no añade
> tilde y la gente escribe sin acentos. Sin las variantes `deep5`/`Deep5`/
> `DEEPCINCO`/`deepcinco`/`DeepCinco` se perdería a la mayoría de quien sí
> quiere el Ebook.
>
> ⚠️ **No incluir variantes con "guía", "manual", "sueño" o "dormir"** —
> pertenecen a los flujos GUÍA y SUEÑO respectivamente.

---

## B) SECUENCIA DE MENSAJES (copy literal publicado)

### MENSAJE 1 — HOOK + CONFIRMACIÓN
```
👋 ¡Hola!

¿Has oído hablar del Deep 5? Es el protocolo de EKIO con los 5 cambios más impactantes para reducir tu exposición al electrosmog en casa.

Te he preparado el Ebook Interactivo Deep 5 con todo explicado paso a paso. ¿Te lo paso ahora?

[📗 Sí, mándamelo]   [🤔 Cuéntame más]
```
- **[📗 Sí, mándamelo]** → M2 (entrega)
- **[🤔 Cuéntame más]** → M1-bis

> **Tipo de mensaje M1:** "como Respuesta privada" — necesario para que funcione
> el trigger Comment-to-DM en Instagram y para poder publicar el flujo.

### MENSAJE 1-bis (rama "Cuéntame más")
```
Claro 🙂

El Ebook es gratuito e interactivo: nada de teoría interminable. Son los 5 cambios concretos que, aplicados hoy, reducen tu exposición al electrosmog donde más impacta en tu cuerpo.

¿Te lo mando?

[📗 Claro, mándamelo]
```
- **[📗 Claro, mándamelo]** → M2 (converge en el mismo nodo de entrega)

### MENSAJE 2 — ENTREGA DEL EBOOK
```
✅ ¡Aquí lo tienes!

📗 Ebook Interactivo Deep 5
Los 5 cambios más impactantes para reducir tu exposición al electrosmog. Práctico, visual e interactivo — para empezar hoy.

👉 https://drive.google.com/file/d/10mPv-qY4JZCYK97YG69qokXf4LWqgb_7/view

Léelo con calma. No hace falta que hagas nada más ahora mismo 🙂
```

### NODO DE ACCIONES (tras M2)
- Añadir tag `deep5-entregada`
- Set custom field `keyword_origen = DEEP5`

### PAUSA INTELIGENTE — 23 HORAS

### MENSAJE 3 — SEGUIMIENTO + CIERRE A WEB (tras la pausa)
```
¿Ya has leído el ebook? 📖

Ya sabes que estamos aquí para lo que necesites. Y te invitamos a pasarte por nuestra web 👇

https://electrosmogespana.com/
```
- Sin botones. Es el mensaje final del flujo. El enlace queda clicable.

---

## C) NOTAS DE IMPLEMENTACIÓN (resumen por paso)

| Paso | Tipo de bloque ManyChat | Notas |
|---|---|---|
| Disparadores | Comment-to-DM (Growth Tool) + Keyword DM | 6 variantes case-sensitive; respuesta pública rotativa (3 versiones) |
| M1 | Instagram · Texto + 2 botones | **Tipo: "como Respuesta privada"** — crítico para publicar |
| M1-bis | Instagram · Texto + 1 botón | Converge a M2 con "Seleccionar paso existente" |
| M2 | Instagram · Texto con enlace Drive | Entrega del Ebook |
| Acciones | Acciones | tag `deep5-entregada` + set `keyword_origen` |
| Pausa | Pausa inteligente · Duración | **23 Horas** |
| M3 | Instagram · Texto (sin botones) | Cierre + enlace web · FIN |

**Reglas aplicadas:** hook breve y legible, máximo 2 botones por mensaje,
salida elegante (M1-bis), copy en voz de EKIO, un solo CTA por mensaje.

> **Lección clave (idéntica a flujos GUÍA y SUEÑO):** el tipo de mensaje M1 debe
> configurarse como "como Respuesta privada" (no "dentro de la ventana de 24
> horas") para que la automatización pueda publicarse. El warning naranja
> ⚠️ en ManyChat indica que el tipo de mensaje está mal configurado.
