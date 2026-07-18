# CONFIGURACIÓN TÉCNICA — FLUJO "TEST ADOLESCENTE"

> **EKIO Electrosmog España** · Acompaña a `flujo-test-adolescente-manychat.md`.
> **ESTADO: 🟡 SPEC** · Automatización a crear: `TEST ADOLESCENTE` en ManyChat
> (cuenta "Electrosmog España", `fb644187`, carpeta `01. AUTOMATIZACIÓN`).

---

## A) OBJETOS A CREAR EN LA CUENTA (vía API MCP antes de montar)

**Tags (convención kebab-case):**
| Tag ManyChat | Estado | Uso en el flujo |
|---|---|---|
| `test-adolescente-lead` | ⬜ Crear | Se aplica en el nodo de Acciones tras capturar el email |

**Custom fields (convención snake_case):**
| Custom field | Tipo | Estado | Valor |
|---|---|---|---|
| `keyword_origen` | text | ✅ Ya existe (id 14455987) | `ADOLESCENTE` (set en Acciones) |

> `keyword_origen` es el campo compartido con SUEÑO/DEEP5/GUÍA. Cada flujo
> escribe su propio valor. Aquí: `ADOLESCENTE`.

**System field usado:** `Email` (nativo de ManyChat) — se rellena con el
User Input del Mensaje 2.

---

## B) ENTREGA — ENLACE A LA WEB DEL TEST

A diferencia de SUEÑO (PDF en Drive), aquí se entrega el **enlace a la web**
`app-estudio-adolescente/index.html`.

**Placeholder hasta el deploy real:**
```
https://ekio-test-adolescente.vercel.app/
```
- ⚠️ **Bloqueante:** el flujo NO se publica hasta que la web esté desplegada y
  su URL definitiva sustituya al placeholder en el Mensaje 3.
- Convención de deploy = igual que los otros 3 tests
  (`ekio-test-spiro` / `ekio-test-panel` / `recursos-web-ekio`).
- Verificar en **incógnito + móvil** que la web carga y el test se completa
  antes de publicar el flujo (la mayoría del tráfico llega por DM en móvil).

---

## C) EVENTO KLAVIYO

En el nodo de Acciones (tras capturar email) se dispara:

```
Evento: manychat_lead_magnet_entregado   (ya existe en el esquema de eventos)
Properties:
  origen = test-adolescente
  first_name = {{first name}}   (opcional)
```

- Esto mete al lead en el ecosistema Klaviyo con email + property de origen.
- **Nurture:** el flujo de email del segmento adolescente lo diseña **ISABELA**
  (especialista Klaviyo). Fuera de alcance de este entregable.
- **Segmentación por resultado (futuro):** el nivel de exposición
  (verde/ámbar/rojo) NO llega a Klaviyo desde ManyChat porque el scoring vive en
  la web. Para segmentar el nurture por resultado, la web debería enviar el
  nivel a Klaviyo desde su propio formulario de email (hoy MVP con `alert()`,
  ver `app-estudio-adolescente/index.html` → `.lead-box`).

---

## D) TIPO DE MENSAJE M1 — NOTA TÉCNICA

El Mensaje 1 debe ser de tipo **"como Respuesta privada"** (no "mensaje normal")
para que:
1. Funcione el disparador **Comment-to-DM** en Instagram.
2. ManyChat permita **publicar** el flujo.

Igual que en SUEÑO/DEEP5. Si M1 se deja como mensaje normal, el trigger de
comentarios no arranca y el editor bloquea la publicación.

---

## E) CHECKLIST QA (antes de publicar)

- [ ] Web `app-estudio-adolescente/` desplegada y URL definitiva puesta en M3.
- [ ] Web probada en **incógnito + móvil**: completa las 5 pasos y muestra el
      informe sin errores de consola.
- [ ] Tag `test-adolescente-lead` creado.
- [ ] Custom field `keyword_origen` set a `ADOLESCENTE` en Acciones.
- [ ] Evento Klaviyo `manychat_lead_magnet_entregado` con `origen=test-adolescente`.
- [ ] Keywords cargadas en AMBAS cajas (mayúsculas + minúsculas) y en los 2
      disparadores (comentarios + DM).
- [ ] Keywords **no solapan** con SUEÑO / DEEP5 / GUÍA.
- [ ] M1 en modo "como Respuesta privada".
- [ ] User Input de M2 en modo "Correo electrónico" (validación nativa).
- [ ] Ramas M1 / M1-bis convergen correctamente en M2.
- [ ] Pausa de 23 h antes de M4.
- [ ] Prueba de extremo a extremo con una cuenta real: comentar keyword →
      recibir DM → dar email → recibir enlace → (23 h) recibir cierre.

---

## F) RELACIÓN CON OTROS ENTREGABLES
- Plantilla de estructura: `flujo-sueno-manychat.md` + `config-tecnica-sueno.md`.
- Web del test: `../app-estudio-adolescente/index.html` (adaptada de
  `../app-estudio-emf/index.html`).
- Diagrama: `diagrama-flujo-test-adolescente.mmd`.
