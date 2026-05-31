# Subir el ebook DEEP 5 a Shopify + Configurar ManyChat

## Archivo generado

- **`page.guia-deep5.liquid`** → template Liquid listo para subir al tema de Shopify
  - Mantiene todo el HTML, CSS, JS e imágenes embebidos (100% standalone)
  - Añade `{% layout none %}` para que NO herede el header/footer del tema (página limpia, sin distracciones)
  - Incluye meta tags Open Graph para previews de WhatsApp/Instagram/Facebook
  - Pixel Meta y analytics se inyectan automáticamente vía `{{ content_for_header }}`

## URL final tras publicar

```
https://electrosmogespana.com/pages/guia-deep5
```

---

## Paso 1 — Subir el template al tema (5 min)

1. Shopify Admin → **Online Store** → **Themes**
2. En el tema activo (Dawn / el que uses) → botón **`···`** → **Edit code**
3. En la columna izquierda busca la carpeta **`Templates`**
4. Click **Add a new template** → tipo **`page`** → nombre **`guia-deep5`** → formato **`liquid`**
5. Borra el contenido por defecto y **pega el contenido completo** de `page.guia-deep5.liquid`
6. **Save**

## Paso 2 — Crear la página en Shopify (3 min)

1. Shopify Admin → **Online Store** → **Pages** → **Add page**
2. Title: **`Guía DEEP 5 — El Libro de la Luz`**
3. Content: déjalo en blanco (todo está en el template)
4. A la derecha → **Theme template** → selecciona **`guia-deep5`**
5. **Search engine listing**: edita el slug a **`guia-deep5`** (URL final: `/pages/guia-deep5`)
6. Visibility → **Visible**
7. **Save**

## Paso 3 — Comprobar (2 min)

Abre en una pestaña incógnito:
```
https://electrosmogespana.com/pages/guia-deep5
```

✓ Debe cargar el ebook completo  
✓ Sin header/footer del tema  
✓ Las 5 longitudes de onda visibles  
✓ Animaciones funcionando  

---

## Paso 4 — Plantilla ManyChat (DM Instagram)

### Flow recomendado para el embudo

**Trigger sugerido**: comentario con keyword `LUZ`, `DEEP5`, `GUÍA` o `EBOOK` en cualquier Reel sobre fotobiomodulación.

### Mensaje 1 — Bienvenida

```
¡Hola {{first_name}}! 👋

Aquí tienes mi guía completa sobre cómo la luz roja e infrarroja
puede transformar tu piel y reactivar tus células 🌅

He puesto ahí dentro las 5 longitudes de onda del Deep 5,
los protocolos exactos y la ciencia detrás de todo.

¿Te la mando ya?
```

**Botones**:
- ✅ Sí, quiero la guía → siguiente paso
- 🤔 ¿Qué es Deep 5? → mensaje educativo

### Mensaje 2 — Captura de email (RECOMENDADO antes de entregar)

```
Perfecto 🙌

Déjame tu email y te envío también
el protocolo personalizado para tu objetivo
+ acceso a la lista privada con descuentos
exclusivos.
```

**Email Input** → guardar en custom field `email` + sync a Klaviyo (lista "Lead Magnet Deep 5")

### Mensaje 3 — Entrega del ebook

```
¡Aquí lo tienes! 📖✨

Esta es la guía completa del Deep 5,
con la ciencia detrás de cada longitud de onda
y los protocolos exactos para cada objetivo.

👉 Ábrela aquí 👇
```

**Botón URL**:
- **Texto**: `📖 Abrir la guía Deep 5`
- **URL**: `https://electrosmogespana.com/pages/guia-deep5?utm_source=manychat&utm_medium=dm&utm_campaign=lead_magnet_deep5`

### Mensaje 4 — Follow-up 1h después

```
¿Has podido echarle un ojo a la guía? 👀

Si te ha interesado, hoy te puedo dar un descuento
exclusivo de 100€ en el Deep 5 (solo activo 24h
para quien recibe la guía).

¿Lo activamos?
```

**Botones**:
- 🔥 Sí, dame el descuento → cupón + link al producto
- ⏰ Más tarde → tag "tibio" + secuencia Klaviyo

---

## Paso 5 — Tracking en GA4 (opcional pero recomendado)

Como la página está bajo el dominio principal, GA4 ya track-ea automáticamente:
- `page_view` con path `/pages/guia-deep5`
- Origen del tráfico (utm_source=manychat)
- Tiempo en página, scroll depth (si tienes GA4 Enhanced Measurement activado)

Para crear un **evento de conversión** cuando alguien llega al ebook desde ManyChat:

1. GA4 → Admin → Events → Create event
2. Nombre: `lead_magnet_view_deep5`
3. Condición: `page_path equals /pages/guia-deep5` AND `source equals manychat`
4. Mark as conversion ✓

---

## Paso 6 — Píxel Meta (automático)

Si ya tienes Meta Pixel instalado en Shopify, **automáticamente trackeará el PageView** de esta página.

Eso te permite crear una audiencia personalizada en Meta Ads Manager:
- **Nombre**: `Leads Deep 5 — Ebook Visitors`
- **Source**: Website Custom Audience
- **Rule**: URL contains `pages/guia-deep5` en los últimos 30 días

Úsala para:
- Retargeting con anuncio de oferta Deep 5
- Lookalike audience para campañas de prospecting

---

## Resumen ejecutivo

| Paso | Tiempo | Resultado |
|------|--------|-----------|
| 1. Subir template al tema | 5 min | Template `page.guia-deep5` instalado |
| 2. Crear página en Shopify | 3 min | URL pública activa |
| 3. Comprobar funcionamiento | 2 min | Ebook visible y compartible |
| 4. Configurar flow ManyChat | 15 min | Embudo lead → email → entrega |
| 5. GA4 tracking | 5 min | Conversión medible |
| 6. Audiencia Meta | 5 min | Retargeting activo |
| **Total** | **35 min** | **Funnel completo activo** |

---

## URL final para compartir

```
https://electrosmogespana.com/pages/guia-deep5
```

Esta URL la puedes pegar en:
- ✅ ManyChat (botón URL)
- ✅ Bio de Instagram
- ✅ Stories (sticker link)
- ✅ Email Klaviyo
- ✅ WhatsApp Business
- ✅ Newsletter
- ✅ Anuncios Meta Ads (landing antes del producto)
