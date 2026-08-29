# FLUJO MANYCHAT — Vitamina D3+K2 Electro Premium
### Brief de implementación · EKIO Electrosmog España

> **Para:** equipo que implementa en ManyChat
> **Cuenta:** Electrosmog España (`fb644187`)
> **Flujo ya creado (vacío):** https://app.manychat.com/fb644187/cms/files/content20260628082528_624288/edit
> **Tipo:** Instagram DM · Keyword trigger
> **Objetivo:** Validar interés → entregar enlace al producto → dar código de descuento `D10` (10%)
> **Sin captura de email** — flujo directo a la venta.

---

## RESUMEN DEL FLUJO

```
TRIGGER: keyword "VitaminaD" (Instagram DM)
        │
        ▼
[MSG 1 — Hook dato + pregunta]
        │
   ┌────┴─────┐
[✅ Sí]     [❌ No]
   │            │
   ▼            ▼
[MSG 2 —     [MSG CIERRE]
 Cualificación]
   │
   ├─ [💊 Ya me suplemento] → MSG 3A → CTA FINAL (enlace + D10)
   │
   └─ [☀️ Confío en el sol] → MSG 3B → CTA FINAL (enlace + D10)
```

---

## PASO 1 — TRIGGER (keyword)

1. En el canvas, clic en el bloque **"Cuando…"** → **"+ Nuevo disparador"**.
2. Selecciona **Instagram** → **"El usuario envía un mensaje / Palabra clave de DM"**.
3. Condición: **"El mensaje contiene una de estas palabras clave"**.
4. Escribe la keyword: `VitaminaD` → Enter.
   - *(Opcional: añadir variantes `vitamina d`, `D3`, `vitamina`)*

> **Bonus — activación por comentario en Reel/Post:** crear un flujo paralelo de *Comment Reply* con las keywords `vitamina`, `sol`, `huesos`, `energía`. Respuesta automática al comentario: *"¡Hola! 🌞 Te envío info por DM ahora mismo."* → deriva al mismo flujo en DM.

---

## PASO 2 — MENSAJE 1 (apertura + bifurcación)

**Tipo:** Instagram DM · Texto

```
Hola {{first name}} 👋

¿Sabías que el 80% de los europeos tiene déficit de vitamina D… aunque crean que salen suficiente al sol?

Y no es solo cansancio. Sin D3+K2, el calcio no llega a los huesos — va directo a las arterias. 🫀

¿Te cuento algo importante sobre esto?
```

**Botones (Quick Reply):**
| Botón | Acción |
|---|---|
| `✅ Sí, cuéntame` | → ir a PASO 3 (Mensaje 2) · aplicar Tag `lead-manychat-vitaminad` |
| `❌ Ahora no` | → ir a PASO 6 (Mensaje de cierre) |

---

## PASO 3 — MENSAJE 2 (validar / cualificación)

**Tipo:** Instagram DM · Texto

```
La vida moderna nos roba el sol sin que nos demos cuenta. 🏙️

Oficinas, pantallas, ropa… el cuerpo produce menos vitamina D de la que necesita. Y sin K2, la poca que absorbes no llega a donde tiene que ir.

¿Ya te suplementas con vitamina D actualmente?
```

**Botones (Quick Reply):**
| Botón | Acción |
|---|---|
| `💊 Sí, me suplemento` | → ir a PASO 4 (Mensaje 3A) |
| `☀️ No, confío en el sol` | → ir a PASO 5 (Mensaje 3B) |

---

## PASO 4 — MENSAJE 3A (rama "Ya me suplemento")

**Tipo:** Instagram DM · Texto

```
Me alegra que ya cuides esto, {{first name}} 💪

Pero hay un detalle que muchos suplementos pasan por alto: sin K2 junto a la D3, el calcio se absorbe… pero puede ir a tus arterias en vez de a tus huesos.

El D3+K2 Electro Premium de Laittin los combina en la proporción correcta, con acción antioxidante extra. ☀️
```

→ Conectar al bloque **CTA FINAL (PASO 7)**.

---

## PASO 5 — MENSAJE 3B (rama "Confío en el sol")

**Tipo:** Instagram DM · Texto

```
El sol es la fuente natural perfecta… cuando tienes más de 20 min diarios de exposición directa, entre las 12h y las 15h, sin filtro solar y sin cristal de por medio. ☀️

La realidad: la mayoría de días eso no pasa.

En la Medicina Tradicional China, el Riñón rige los huesos y la energía vital — cuando hay déficit de D3, ese sistema se resiente primero. Suplementar con D3+K2 es cerrar ese ciclo de forma natural.
```

→ Conectar al bloque **CTA FINAL (PASO 7)**.

---

## PASO 6 — MENSAJE DE CIERRE (rama "Ahora no")

**Tipo:** Instagram DM · Texto

```
¡Sin problema, {{first name}}! 😊

Si en algún momento quieres saber más sobre cómo el estilo de vida moderno afecta tu energía y tus huesos, aquí estaremos.

¡Cuídate mucho! 🌿
```

- Sin botones (fin de flujo limpio).
- No enviar follow-up automático a esta rama (respetar el "no").

---

## PASO 7 — CTA FINAL (común a 3A y 3B)

**Tipo:** Instagram DM · Texto (o Card con botón URL)

```
Aquí tienes el enlace directo al D3+K2 Electro Premium 👇

Y como vienes de aquí, tienes un 10% de descuento exclusivo. 🎁
Aplica el código D10 al finalizar tu pedido.

Son 29,90€ → 26,91€ con el descuento. Envío gratuito incluido.

Si tienes cualquier duda antes de pedirlo, escríbeme aquí mismo. 🙌
```

**Botón URL:**
| Texto botón | URL |
|---|---|
| `🛒 Ir al producto` | `https://electrosmogespana.com/products/vitamina-d3k2-electro-premium-de-laittin?utm_source=manychat&utm_medium=instagram_dm&utm_campaign=vitaminaD&utm_content=VitaminaD` |

> Abrir URL en navegador externo (no in-app).

---

## PASO 8 — RECORDATORIO DEL CÓDIGO (opcional, recomendado)

Nodo de **Smart Delay 5 min** después del CTA Final, con condición *"no hizo clic en el enlace"*:

```
¡Por si acaso! 📌 El código es D10 — ponlo en el campo "código de descuento" al pagar.

Si tienes cualquier duda con el pedido, escríbeme aquí. 🙌
```

- Se envía una sola vez. Si ya hizo clic, no se dispara.

---

## INTEGRACIONES — RESUMEN

| Sistema | Qué | Valor | Cuándo |
|---|---|---|---|
| **ManyChat** | Tag suscriptor | `lead-manychat-vitaminad` | Al pulsar "✅ Sí, cuéntame" |
| **Shopify** | Código descuento | `D10` (10%, todos los productos) | **CREAR ANTES de publicar** |

> Sin captura de email ni evento Klaviyo en este flujo. El tag `lead-manychat-vitaminad` queda disponible para retargeting en Meta Ads / segmentación posterior.

---

## CHECKLIST ANTES DE PUBLICAR

- [ ] Código `D10` creado y activo en Shopify (10%, sin caducidad)
- [ ] Trigger keyword `VitaminaD` configurada
- [ ] Mensaje 1 con 2 botones conectados a ramas correctas
- [ ] Tag `lead-manychat-vitaminad` se aplica al pulsar "Sí, cuéntame"
- [ ] Mensaje 2 con 2 botones de cualificación
- [ ] Ramas 3A y 3B convergen en el CTA Final
- [ ] CTA Final con URL + UTMs completos + código D10
- [ ] Recordatorio D10 con Smart Delay (opcional)
- [ ] Mensaje de cierre para los que dicen "no"
- [ ] Bloqueo de re-entrada al flujo 30 días (evitar bombardeo)
- [ ] Publicar el flujo

---

## REGLAS DE COPY (voz de marca EKIO)

- Concepto central: *"El precio invisible"* — el coste oculto del electrosmog y la falta de sol.
- Tono DM: cercano, experto, sin presión.
- Máx. 3-4 líneas por globo · 1-2 emojis (nunca decorativos) · máx. 2 botones por mensaje.
- Siempre una salida elegante para quien dice "no".
