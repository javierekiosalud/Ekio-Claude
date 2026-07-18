# FLUJO MANYCHAT — "TEST ADOLESCENTE" (Lead magnet: Test de exposición EMF de tu hijo/a)

> **EKIO Electrosmog España** · Automatización a crear: **TEST ADOLESCENTE —
> Test de exposición del adolescente** · carpeta `01. AUTOMATIZACIÓN`.
> **ESTADO: 🟡 SPEC (pendiente de montar en el editor visual + deploy de la web).**
> Se construye manualmente en ManyChat (la API no permite autorar flujos;
> como en SUEÑO, se monta conduciendo el navegador).
>
> **Lead magnet:** el **Test de exposición EMF del adolescente** — una web
> (`app-estudio-adolescente/index.html`, tipo Estudio del Hogar) que el
> **padre/madre** completa en 3 min sobre su hijo/a y termina con una
> **puntuación de exposición /100 + un plan de producto priorizado**
> (Spiro Card, regleta del escritorio, Square X del cuarto, Deep 5 si hay
> fatiga/mal sueño). El scoring vive en la web; ManyChat solo capta y entrega.
>
> Audiencia: padres/madres de adolescentes que pasan muchas horas al ordenador
> (estudio, gaming, pantallas). Concepto de marca: **"El precio invisible"** —
> el coste oculto de las horas de pantalla en plena etapa de formación.
> Tono: cercano, científico, sin alarmismo. Como un amigo que sabe de salud.
>
> **IMPORTANTE — diferencia con SUEÑO/DEEP5/GUÍA:** este flujo **SÍ captura
> email** (antes de entregar el enlace) para disparar el nurture Klaviyo del
> segmento adolescente. Los otros tres NO capturan email.

---

## RESUMEN DEL FLUJO

```
2 DISPARADORES (comentarios + DM) · keywords TESTHIJO/PANTALLAS/GAMER/ADOLESCENTE/ESTUDIA…
        ↓
M1  Hook (coste invisible de las horas de pantalla) + 2 botones
        │                              │
        │                        M1-bis (reassurance) ──┐
        ↓                                               ↓
M2  Pide el EMAIL (User Input · validación email)  ←────┘  (convergen)
        ↓
ACCIONES  (tag test-adolescente-lead + keyword_origen=ADOLESCENTE
           + evento Klaviyo manychat_lead_magnet_entregado)
        ↓
M3  Entrega del enlace a la WEB del test
        ↓
PAUSA INTELIGENTE — 23 HORAS
        ↓
M4  Seguimiento/cierre: "¿Ya hiciste el test de tu hijo/a?…" + enlace a la web  (FIN)
```

> **Diseño:** captura de email → entrega del enlace al test → 23 h después un
> único mensaje de seguimiento. La venta la hace la propia web (resultado +
> stack de producto). El nurture por email lo continúa Klaviyo.

---

## A) DISPARADORES

Ambos disparadores cuelgan del nodo "Cuando…" y activan la misma secuencia.

### 1) Comentarios de publicaciones o Reels (Comment-to-DM)
- **Alcance:** Todas las publicaciones o Reels (idealmente Reels sobre
  adolescentes + pantallas / gaming / estudio).
- **Keywords (comentarios que incluyen):** `TESTHIJO`, `testhijo`, `PANTALLAS`,
  `pantallas`, `GAMER`, `gamer`, `ADOLESCENTE`, `adolescente`, `ESTUDIA`,
  `estudia`, `HIJO`, `hijo`, `HIJA`, `hija`.
- **Respuesta pública:** "Sí, múltiples respuestas aleatorias" — 3 que rotan:
  1. `¡Te paso el test de exposición de tu hijo/a por DM ahora mismo! 📲`
  2. `Revisa tus DMs 📨 te envío el test para tu hijo/a`
  3. `¡Enviado! Busca en tus mensajes el test de exposición 📲`

### 2) Mensaje de Instagram (DM directo)
- **Tipo:** "Detecta palabras específicas en un mensaje".
- **Keywords (el mensaje contiene):** las mismas de arriba.

### POR QUÉ TODAS LAS VARIANTES (mayúsculas + sin tilde)
> ManyChat distingue mayúsculas/minúsculas ("PANTALLAS" ≠ "pantallas") y en
> Instagram la gente escribe en mayúsculas sin tildes. Sin las variantes se
> pierde a la mayoría. `ADOLESCENTE` no lleva tilde, pero mantener ambas cajas
> por consistencia con el resto de la cuenta.
>
> ⚠️ **No solapar** con keywords de SUEÑO (`SUEÑO`, `DORMIR`), DEEP5 (`DEEP5`)
> ni GUÍA (`guía`, `manual`): pertenecen a otros flujos.

---

## B) SECUENCIA DE MENSAJES (copy propuesto)

### MENSAJE 1 — HOOK + CONFIRMACIÓN
```
👋 ¡Hola!

¿Sabías que un adolescente pasa de media 6-8 horas al día frente a pantallas… muchas de ellas en su cuarto, con el router al lado y el móvil en la mesilla toda la noche?

Ese "ruido" invisible se paga en sueño, concentración y energía — justo cuando su cuerpo y su cerebro más se están formando.

Te he preparado un test de 3 minutos que calcula su nivel de exposición y te dice, en concreto, qué cambiar. ¿Te lo paso?

[📲 Sí, quiero el test]   [🤔 Cuéntame más]
```
- **[📲 Sí, quiero el test]** → M2 (pedir email)
- **[🤔 Cuéntame más]** → M1-bis

> **Tipo de mensaje M1:** "como Respuesta privada" — necesario para el trigger
> Comment-to-DM en Instagram y para poder publicar el flujo.

### MENSAJE 1-bis (rama "Cuéntame más")
```
Claro 🙂

Es un test gratuito que respondes tú en 3 minutos sobre los hábitos y la habitación de tu hijo/a. Al terminar te da:

• Su puntuación de exposición (0-100)
• Su cuarto, zona por zona
• Un plan concreto — desde cambios gratis hasta qué protección le conviene

¿Te lo mando?

[📲 Sí, mándamelo]
```
- **[📲 Sí, mándamelo]** → M2 (converge)

### MENSAJE 2 — CAPTURA DE EMAIL (User Input)
```
Perfecto ✍️

¿A qué email te envío el test + el informe completo con el plan de acción por zonas?

(Te llega también una mini-guía de higiene electromagnética para adolescentes.)
```
- **Tipo de respuesta:** "Correo electrónico" (User Input con validación de
  email nativa de ManyChat; guarda en el system field **Email**).
- **Si el email no es válido** → reintento estándar de ManyChat.
- Al capturar → **NODO DE ACCIONES** (ver §C) → M3.

### MENSAJE 3 — ENTREGA DEL ENLACE A LA WEB
```
✅ ¡Listo! Aquí tienes el test de tu hijo/a:

📲 Test de exposición EMF del adolescente
Respóndelo con calma (3 min). Al final verás su puntuación y el plan concreto para su cuarto.

👉 {{ENLACE_WEB_TEST}}

Cuando lo termines, el informe completo te llega al email 📧
```
- `{{ENLACE_WEB_TEST}}` → URL de deploy de `app-estudio-adolescente/`
  (ver config técnica: placeholder `https://ekio-test-adolescente.vercel.app/`
  hasta confirmar el deploy real).

### PAUSA INTELIGENTE — 23 HORAS

### MENSAJE 4 — SEGUIMIENTO / CIERRE
```
Hola de nuevo 🙂

¿Pudiste hacer el test de exposición de tu hijo/a?

Si te salió naranja o rojo, no te agobies: casi siempre los 2 primeros pasos del plan (su móvil de noche y el router fuera del cuarto) ya bajan muchísimo la exposición — y son gratis.

Si quieres ver la protección que le recomienda el test, la tienes aquí 👇
👉 https://electrosmogespana.com
```
(FIN del flujo)

---

## C) NODO DE ACCIONES (tras capturar email, antes de M3)
- Añadir tag `test-adolescente-lead`
- Set custom field `keyword_origen = ADOLESCENTE`
- Disparar evento Klaviyo **`manychat_lead_magnet_entregado`** con properties:
  - `origen = test-adolescente`
  - (opcional) `first_name = {{first name}}`

> El resultado del test (puntuación/nivel/producto) NO vuelve a ManyChat en esta
> fase: vive en la web. Si más adelante se quiere segmentar el nurture por
> resultado, la web debería postear el nivel a Klaviyo al capturar el email en
> su propio formulario (hoy es un placeholder MVP, ver `app-estudio-adolescente/`).

---

## D) NOTAS
- **Web primero:** este flujo depende de que `app-estudio-adolescente/index.html`
  esté desplegada (Vercel) y su URL puesta en M3. Sin deploy, el flujo no se
  publica.
- **Nurture Klaviyo:** el flujo de email para el segmento adolescente lo diseña
  y monta **ISABELA** (especialista Klaviyo). Aquí solo se dispara el evento.
- **Consistencia de marca:** mismo concepto "precio invisible" y mismo tono que
  SUEÑO/DEEP5. Ver `flujo-sueno-manychat.md` como plantilla de estructura.
