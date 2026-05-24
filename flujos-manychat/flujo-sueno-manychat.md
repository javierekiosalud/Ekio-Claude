# FLUJO MANYCHAT — "SUEÑO" (Lead magnet: Guía del Sueño sin Electrosmog)

> **Entregable 1 de 3** · EKIO Electrosmog España
> **ESTADO: 🟢 PUBLICADO (LIVE)** en la cuenta "Electrosmog España".
> Automatización: **SUEÑO — Guía del Sueño** · carpeta `01. AUTOMATIZACIÓN`.
> Construida manualmente en el editor visual de ManyChat (la API no permite
> autorar flujos; se montó conduciendo el navegador).
>
> **Lead magnet:** Guía del Sueño sin Electrosmog (audiencia: hogar /
> adultos que sufren problemas de sueño). NO confundir con el flujo
> "GUÍA — Manual Higiene EM", que entrega el Manual general de Higiene EM.
>
> Concepto de marca: **"El precio invisible"** — el coste oculto que paga
> el cuerpo por ignorar el electrosmog mientras duerme.
> Tono: cercano, científico, sin presión. Como un amigo que sabe de salud.

---

## RESUMEN DEL FLUJO PUBLICADO

```
2 DISPARADORES (comentarios + DM) · keywords SUEÑO/sueño/SUENO/sueno/DORMIR/dormir
        ↓
M1  Hook + 2 botones (😴 Sí, mándamela / 🤔 Cuéntame más)
        │                          │
        │                    M1-bis (reassurance) ──┐
        ↓                                           ↓
M2  Entrega de la Guía (enlace Drive)  ←────────────┘  (convergen)
        ↓
ACCIONES  (tag guia-sueno-entregada + set keyword_origen=SUENO)
        ↓
PAUSA INTELIGENTE — 23 HORAS
        ↓
M3  Seguimiento/cierre: "¿Ya has leído la guía?..." + enlace a la web   (FIN)
```

> **Diseño final:** entrega rápida de la Guía por Drive dentro del DM,
> y ~23 h después un único mensaje de seguimiento que reconduce a la web.
> SIN captura de email, SIN paso a WhatsApp, SIN follow-up adicional.
> Flujo simple, limpio y de timing no intrusivo. Idéntico en estructura al
> flujo "GUÍA — Manual Higiene EM".

---

## A) DISPARADORES (configurados y activos)

Ambos disparadores cuelgan del nodo "Cuando..." y activan la misma secuencia.

### 1) Comentarios de publicaciones o Reels (Comment-to-DM)
- **Alcance:** Todas las publicaciones o Reels.
- **Keywords (los comentarios que incluyen):** `SUEÑO`, `sueño`, `SUENO`, `sueno`, `DORMIR`, `dormir`.
- **Respuesta pública:** "Sí, múltiples respuestas aleatorias" — 3 respuestas que
  rotan (evita patrón de bot y amplía alcance).

### 2) Mensaje de Instagram (DM directo)
- **Tipo:** "Detecta palabras específicas en un mensaje".
- **Keywords (el mensaje contiene):** `SUEÑO`, `sueño`, `SUENO`, `sueno`, `DORMIR`, `dormir`.

### POR QUÉ TODAS LAS VARIANTES SON CRÍTICAS
> ManyChat confirma en su propia interfaz que **las palabras clave distinguen
> mayúsculas y minúsculas** ("SUEÑO" ≠ "sueno"). En Instagram el teclado en
> mayúsculas no añade tilde y la gente escribe sin acentos. Sin las variantes
> `SUENO`/`sueno`/`DORMIR`/`dormir` se perdería a la mayoría de quien sí
> quiere la Guía.
>
> ⚠️ **No incluir variantes con "guía" o "manual"** — pertenecen al flujo
> "GUÍA — Manual Higiene EM".

---

## B) SECUENCIA DE MENSAJES (copy literal publicado)

### MENSAJE 1 — HOOK + CONFIRMACIÓN
```
👋 ¡Hola!

¿Sabías que el electrosmog en tu dormitorio puede fragmentar tu sueño aunque no lo notes?

Router encendido, móvil en la mesilla, repetidores… tu sistema nervioso los registra toda la noche.

Te he preparado la Guía del Sueño sin Electrosmog. ¿Te la paso ahora?

[😴 Sí, mándamela]   [🤔 Cuéntame más]
```
- **[😴 Sí, mándamela]** → M2 (entrega)
- **[🤔 Cuéntame más]** → M1-bis

> **Tipo de mensaje M1:** "como Respuesta privada" — necesario para que funcione
> el trigger Comment-to-DM en Instagram y para poder publicar el flujo.

### MENSAJE 1-bis (rama "Cuéntame más")
```
Claro 🙂

La guía es gratuita y práctica: nada de teoría interminable. Son los cambios concretos que, aplicados esta noche, reducen tu exposición al electrosmog mientras duermes.

¿Te la mando?

[😴 Claro, mándamela]
```
- **[😴 Claro, mándamela]** → M2 (converge en el mismo nodo de entrega)

### MENSAJE 2 — ENTREGA DE LA GUÍA
```
✅ ¡Aquí la tienes!

📘 Guía del Sueño sin Electrosmog
Los cambios prácticos para reducir tu exposición durante la noche, empezando por donde más importa: tu dormitorio.

👉 https://drive.google.com/file/d/13ZbYbWzOy0uUM_0K6iR6FNMZUMkp9UvM/view

Léela con calma. No hace falta que hagas nada más ahora mismo 🙂
```

### NODO DE ACCIONES (tras M2)
- Añadir tag `guia-sueno-entregada`
- Set custom field `keyword_origen = SUENO`

### PAUSA INTELIGENTE — 23 HORAS

### MENSAJE 3 — SEGUIMIENTO + CIERRE A WEB (tras la pausa)
```
¿Ya has leído la guía? 📖

Ya sabes que estamos aquí para lo que necesites. Y te invitamos a pasarte por nuestra web 👇

https://electrosmogespana.com/
```
- Sin botones. Es el mensaje final del flujo. El enlace queda clicable.

---

## C) NOTAS DE IMPLEMENTACIÓN (resumen por paso)

| Paso | Tipo de bloque ManyChat | Notas |
|---|---|---|
| Disparadores | Comment-to-DM (Growth Tool) + Keyword DM | 6 variantes case-sensitive; respuesta pública rotativa |
| M1 | Instagram · Texto + 2 botones | **Tipo: "como Respuesta privada"** — crítico para publicar |
| M1-bis | Instagram · Texto + 1 botón | Converge a M2 con "Seleccionar paso existente" |
| M2 | Instagram · Texto con enlace Drive | Entrega de la Guía |
| Acciones | Acciones | tag `guia-sueno-entregada` + set `keyword_origen` |
| Pausa | Pausa inteligente · Duración | **23 Horas** |
| M3 | Instagram · Texto (sin botones) | Cierre + enlace web · FIN |

**Reglas aplicadas:** hook breve y legible, máximo 2 botones por mensaje,
salida elegante (M1-bis), copy en voz de EKIO, un solo CTA por mensaje.

> **Lección aprendida (diferencia vs. GUÍA):** el tipo de mensaje M1 debe
> configurarse como "como Respuesta privada" (no "dentro de la ventana de 24
> horas") para que la automatización pueda publicarse. El warning naranja
> ⚠️ en ManyChat indica que el tipo de mensaje está mal configurado.
