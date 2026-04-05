# Flujos Base ManyChat — EKIO Electrosmog España

---

## FLUJO 1: CONSULTORÍA (keyword principal)

**Trigger:** Keyword "CONSULTORÍA" en DM o comentario
**Canal:** Instagram DM / WhatsApp
**Temperatura:** Tibio-Caliente (ya ha visto contenido de Ekio)

```
MENSAJE 1 — Apertura inmediata
──────────────────────────────
👋 Hola [Nombre], gracias por escribir.

Cuéntame: ¿qué síntomas o preocupaciones te han traído hasta aquí?

[😴 Insomnio o fatiga]
[🧠 Falta de concentración]
[📶 Preocupación por el wifi/móvil]
[🌿 Quiero saber más sobre Ekio]

MENSAJE 2A (Insomnio/fatiga)
──────────────────────────────
El insomnio y la fatiga crónica son dos de los síntomas más comunes de la
exposición continuada al electrosmog.

Y la mayoría de médicos no lo relacionan porque los efectos no son térmicos —
no hay quemadura visible, pero el sistema nervioso sí los detecta.

¿Puedo hacerte una pregunta antes de recomendarte nada?

[✅ Sí, adelante]

MENSAJE 3 (común a todas las ramas)
──────────────────────────────
¿Tienes router wifi encendido toda la noche cerca de donde duermes?

[📡 Sí, siempre]
[🔌 Lo apago por la noche]
[🤷 No sé exactamente dónde está]

MENSAJE 4 — Cualificación final
──────────────────────────────
Perfecto. Para enviarte información personalizada sobre cómo podemos ayudarte,
¿me dejas tu email?

(Te mando un análisis gratuito de tu situación)

[📧 INPUT: Email]

MENSAJE 5 — Cierre + próximo paso
──────────────────────────────
✅ ¡Listo, [Nombre]!

En los próximos minutos recibes en tu email un análisis de tu situación
con los primeros pasos que puedes dar hoy mismo.

Y si quieres ir más rápido, puedes reservar una consulta gratuita de
15 minutos aquí:
→ [ENLACE A CALENDLY / FORMULARIO]

INTEGRACIÓN:
→ Evento Klaviyo: manychat_consulta_iniciada
→ Propiedades: rama_sintoma, tiene_router_noche, email
→ Flujo Klaviyo activado: "Consultoría - Secuencia de cualificación"
→ Tag Shopify: lead-manychat-consultoria
```

---

## FLUJO 2: LUZ (keyword de alto volumen)

**Trigger:** Keyword "LUZ" en comentario o DM
**Canal:** Instagram DM
**Temperatura:** Frío-Tibio (viene del carrusel viral de bombilla roja)
**Nota:** Este flujo es URGENTE — el carrusel tiene 176 comentarios

```
MENSAJE 1 — Apertura
──────────────────────────────
💡 ¡Hola [Nombre]!

La mayoría de bombillas "rojas" del mercado tienen un problema que
muy poca gente conoce: el flicker invisible.

Activa tu sistema nervioso aunque no lo notes.

¿Te cuento qué buscar para que realmente proteja tu descanso?

[✅ Sí, dime cuál]  [❌ No, gracias]

MENSAJE 2
──────────────────────────────
La clave está en 3 cosas:

🔴 Longitud de onda: entre 620–700nm (rojo puro, no naranja)
⚡ Sin flicker: debe ser DC o frecuencia > 1000Hz
🌡️ Temperatura de color: < 1800K

La mayoría del mercado falla en al menos una.

En Ekio llevamos años probando bombillas y solo certificamos
las que superan los 3 criterios.

¿Quieres ver la que recomendamos?

[🛍️ Ver bombilla recomendada]  [📖 Quiero saber más primero]

MENSAJE 3A — Directo a producto
──────────────────────────────
Aquí tienes la bombilla que recomendamos en Ekio:

→ [ENLACE A PRODUCTO CON UTM]

Y si tienes cualquier duda, escríbeme aquí mismo.

MENSAJE 3B — Más información
──────────────────────────────
Tiene sentido querer entenderlo antes.

¿Cuál es tu situación principal?

[😴 Problemas para dormir]
[👶 Tengo bebés o niños en casa]
[🌞 Quiero optimizar mi bienestar]
[📚 Solo curiosidad por ahora]

MENSAJE 4B — Entrega lead magnet opcional
──────────────────────────────
Perfecto. Tengo una guía gratuita que explica exactamente
cómo crear un entorno luminoso sano en casa.

¿Te la envío a tu email?

[📧 INPUT: Email]

INTEGRACIÓN:
→ Evento Klaviyo: manychat_interes_luz_roja
→ Flujo Klaviyo activado: "Luz Roja - Educación + conversión"
→ Tag Shopify: lead-manychat-luz
→ UTM: utm_source=manychat&utm_medium=instagram_dm&utm_campaign=luz-roja
```

---

## FLUJO 3: GUÍA (lead magnet — PDF Higiene EMF Niños)

**Trigger:** Keyword "GUÍA" en comentario o DM
**Canal:** Instagram DM
**Temperatura:** Frío (interesado en contenido gratuito)

```
MENSAJE 1 — Apertura
──────────────────────────────
👋 ¡Hola [Nombre]!

Te mando la guía ahora mismo.

Solo necesito tu email para enviártela
(también te llega una copia por aquí por si acaso):

[📧 INPUT: Email]

MENSAJE 2 — Entrega
──────────────────────────────
✅ ¡Perfecto!

En los próximos minutos recibes en [email] la guía:

📘 "Higiene Electromagnética para Niños"
— Los 7 hábitos que protegen el sistema nervioso de tus hijos
del electrosmog cotidiano

Si tienes cualquier pregunta después de leerla, escríbeme aquí.

MENSAJE 3 — Follow-up (24h después)
──────────────────────────────
Hola [Nombre] 👋

¿Has podido leer la guía?

Hay un punto que suele sorprender a los padres: el del router
encendido por la noche cerca del cuarto de los niños.

¿Te pasaba esto en casa?

[😬 Sí, lo tenemos encendido]
[✅ No, lo apagamos]
[❓ No lo había pensado]

INTEGRACIÓN:
→ Evento Klaviyo: manychat_lead_magnet_entregado
→ Propiedades: tiene_ninos, situacion_router
→ Flujo Klaviyo activado: "Lead magnet niños - Nurture EMF"
→ Tag Shopify: lead-manychat-guia
```

---

## FLUJO 4: TEST (Score EMF / electrohipersensibilidad)

**Trigger:** Keyword "TEST" en comentario o DM
**Canal:** Instagram DM / WhatsApp
**Temperatura:** Tibio (ya tiene síntomas o curiosidad activa)

```
MENSAJE 1 — Apertura
──────────────────────────────
🧪 ¡Hola [Nombre]!

El test de sensibilidad electromagnética te ayuda a entender
si tu cuerpo ya está reaccionando al electrosmog sin que lo sepas.

Son 5 preguntas. ¿Empezamos?

[✅ Sí, empezamos]  [❌ Ahora no]

MENSAJE 2 — Pregunta 1
──────────────────────────────
1️⃣ ¿Con qué frecuencia sientes fatiga sin causa aparente?

[😴 Casi siempre]
[🤔 Varias veces a la semana]
[😊 Raramente]

MENSAJE 3 — Pregunta 2
──────────────────────────────
2️⃣ ¿Tienes dificultades para conciliar o mantener el sueño?

[😩 Sí, casi todas las noches]
[🌙 A veces]
[✅ Duermo bien]

MENSAJE 4 — Pregunta 3
──────────────────────────────
3️⃣ ¿Sientes malestar (dolor de cabeza, irritabilidad) cuando
estás mucho tiempo cerca de dispositivos electrónicos?

[🤯 Sí, claramente]
[🤷 Tal vez, no lo había relacionado]
[❌ No]

MENSAJE 5 — Pregunta 4
──────────────────────────────
4️⃣ ¿Duermes con el móvil en la mesilla o cerca de ti?

[📱 Sí, siempre]
[🔌 A veces]
[✅ Nunca]

MENSAJE 6 — Pregunta 5
──────────────────────────────
5️⃣ ¿Tienes router wifi encendido 24h en casa?

[📡 Sí, nunca lo apago]
[⏰ Lo apago por la noche]
[✅ Tengo fibra por cable]

MENSAJE 7 — Resultado + captura de email
──────────────────────────────
Gracias [Nombre]. Tengo tu resultado.

Para enviarte el análisis completo con recomendaciones
personalizadas, ¿me dejas tu email?

[📧 INPUT: Email]

MENSAJE 8A — Alta sensibilidad
──────────────────────────────
⚠️ Tu perfil muestra señales de sensibilidad electromagnética alta.

Esto no es algo que debas ignorar — los efectos se acumulan.

En tu email tienes el análisis completo con los 3 cambios
más urgentes que puedes hacer hoy.

Si quieres ir más rápido, puedo orientarte personalmente:
→ [ENLACE CONSULTORÍA]

MENSAJE 8B — Sensibilidad media
──────────────────────────────
🟡 Tu perfil muestra sensibilidad electromagnética moderada.

Aún estás a tiempo de prevenir que se agrave con cambios sencillos.

En tu email tienes el plan de acción paso a paso.

INTEGRACIÓN:
→ Evento Klaviyo: manychat_test_completado
→ Propiedades: nivel_sensibilidad (alta/media/baja), respuestas individuales
→ Flujo Klaviyo activado: "Score EMF - Secuencia segmentada por nivel"
→ Tag Shopify: lead-manychat-test-[nivel]
```

---

## FLUJO 5: COMENTARIO AUTOMÁTICO EN REELS

**Cuándo usar:** En Reels con CTA explícito en la caption
**Configuración:** ManyChat → Growth Tools → Comment to DM

```
CONFIGURACIÓN:
  Trigger: Comentario que contenga [KEYWORD]
  Respuesta pública al comentario:
    "✅ ¡Te lo acabo de enviar por DM, [Nombre]! Revisa tus mensajes 📩"

  → Inmediatamente después: inicia el flujo de DM correspondiente

NOTAS:
  - La respuesta pública al comentario es ESENCIAL para el alcance
    (Instagram amplifica los posts con respuestas de la cuenta)
  - Configurar para comentarios exactos Y comentarios que contengan la keyword
  - Activar también para comentarios en Stories si el post tiene mucho tráfico
```

---

## CHECKLIST DE CONFIGURACIÓN TÉCNICA

Antes de activar cualquier flujo en ManyChat, verificar:

- [ ] API de Klaviyo conectada en ManyChat (Settings → Integrations)
- [ ] Lista de Klaviyo correcta seleccionada para opt-in
- [ ] Pixel de Facebook instalado y activo
- [ ] Notificaciones de ManyChat activadas para el equipo
- [ ] Flujo testado con cuenta de prueba antes de publicar
- [ ] UTMs correctos en todos los enlaces a Shopify
- [ ] GDPR: mensaje de consentimiento visible antes de capturar email
- [ ] Horario de atención humana definido (fuera de horario → mensaje de desvío)
