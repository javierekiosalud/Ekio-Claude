# Instalación en Shopify — Sección Consultoría FBM

**Archivo a entregar a tu desarrollador:** `shopify-section-consultoria-fbm.liquid`

Esta es una **sección Shopify 2.0** autocontenida. Todo el CSS está scopeado bajo la clase `.ekio-fbm`, así que **no afecta ni rompe el resto del tema**. El JavaScript está encapsulado en una IIFE.

---

## Opción A — Página dedicada (recomendada)

Para que la landing viva en `electrosmogespana.com/pages/consultoria-fotobiomodulacion`:

1. **Subir la sección**
   - Admin Shopify → **Tienda online → Temas → … → Editar código**
   - En la carpeta `sections/`, pulsar **Añadir una nueva sección**
   - Nombrarla `consultoria-fbm` y pegar todo el contenido de `shopify-section-consultoria-fbm.liquid`. Guardar.

2. **Crear la plantilla de página**
   - En `templates/`, **Añadir nueva plantilla** → tipo **page** → formato **JSON** → nombre `consultoria-fbm`
   - Reemplazar su contenido por:
     ```json
     {
       "sections": {
         "main": { "type": "consultoria-fbm" }
       },
       "order": ["main"]
     }
     ```
   - (Opcional) Para una landing sin cabecera/menú ni footer del tema, duplicar `layout/theme.liquid` como `layout/landing.liquid` quitando header y footer, y añadir `{% layout 'landing' %}` arriba de la plantilla.

3. **Crear la página y asignar la plantilla**
   - Admin → **Tienda online → Páginas → Añadir página**
   - Título: `Consultoría Fotobiomodulación` · Handle: `consultoria-fotobiomodulacion`
   - En **Plantilla de tema**, elegir `page.consultoria-fbm`. Guardar.

4. **Configurar desde el editor**
   - Admin → **Temas → Personalizar** → navegar a la página creada
   - En los ajustes de la sección **EKIO · Consultoría FBM**, rellenar:
     - **URL embed del vídeo** (cuando esté listo)
     - **URL de Calendly** (ya viene precargada)
     - **Imágenes**: justificante de patente, foto de Cristhian, fotos de Deep 5 / Bio Regen 7 / Bio Spectrum 11

---

## Opción B — Insertar en una página existente

Si ya tienes una página y quieres añadir la sección dentro:
- Editor de temas → Personalizar → la página → **Añadir sección** → **EKIO · Consultoría FBM** (aparece gracias al `preset` del schema).

---

## Ajustes disponibles en el editor (sin tocar código)

| Ajuste | Qué controla |
|---|---|
| URL embed del vídeo | El iframe del vídeo de 3 min. Si está vacío, muestra un placeholder. |
| URL de Calendly | El widget de reserva embebido. |
| Imagen patente | Justificante OEPM. Si vacío, muestra placeholder con la bandera. |
| Imagen Cristhian | Foto del especialista. Si vacío, muestra placeholder. |
| Imagen Deep 5 / Bio Regen 7 / Bio Spectrum 11 | Fotos de cada modelo. Si vacías, muestran un icono. |

El resto del copy (textos, FAQ, garantías) está en el código de la sección y se edita ahí directamente.

---

## ⚠️ Tracking — IMPORTANTE (va fuera de la sección)

Los píxeles de **Meta, GA4 y Klaviyo NO van dentro de esta sección**: deben cargarse globalmente en el tema (normalmente ya los tienes instalados vía Shopify → Configuración o en `theme.liquid`).

La sección **sí incluye** el disparo de eventos de conversión cuando se completa una reserva en Calendly:
- Meta Pixel: `Lead` + `Schedule`
- GA4: `consultation_booked` + `generate_lead`
- Klaviyo: evento `Consultoría FBM Reservada`

Estos eventos solo se dispararán si `fbq`, `gtag` y `_learnq` ya existen en la página (cargados globalmente). Están protegidos con `typeof … !== 'undefined'`, así que no dan error si falta alguno.

> **Captura de email en Klaviyo:** Calendly no expone el email del que reserva vía postMessage. Para meter el lead en la lista "Lead Consultoría FBM" con su email real, configura un **webhook Calendly → Klaviyo** (vía Zapier/Make o webhook nativo). Lo podemos montar aparte.

---

## Notas técnicas para el desarrollador

- **CSS scope:** todo bajo `.ekio-fbm`. Las variables CSS (`--bg`, `--red`, etc.) se definen en `.ekio-fbm` y heredan a los hijos.
- **JS:** encapsulado en IIFE. Controla sticky CTA, micro-compromisos y eventos de Calendly. La clase `sticky-active` se aplica al wrapper `.ekio-fbm`, no al `<body>`.
- **Calendly:** el script `widget.js` se carga una vez al final de la sección.
- **Responsive:** breakpoints en 760px y 640px, ya scopeados.
- **Fuente:** usa el system font stack. Si quieres la tipografía del tema, eliminar la línea `font-family` de `.ekio-fbm`.
