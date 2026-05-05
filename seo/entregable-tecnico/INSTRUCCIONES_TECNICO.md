# Instrucciones para el técnico web

**Cliente:** EKIO Electrosmog España (electrosmogespana.com)
**Fecha del briefing:** 5 mayo 2026
**Tiempo estimado de ejecución:** 2 horas (tareas obligatorias) + 1 hora opcional

---

## 1. Contexto en 3 frases

La tienda migró de WordPress a Shopify el **23 de marzo de 2026**. Tras la migración, el tráfico orgánico desde Google ha caído un **48% en clics y un 46% en impresiones** (medido del 23/3 al 5/5 vs los 43 días previos). La causa raíz es que **los redirects 301 desde las URLs antiguas de WordPress hacia las nuevas URLs de Shopify están incompletos**, con casos de duplicate content activo.

Documentos de contexto incluidos en este paquete:
- `AUDITORIA_MIGRACION_2026-05-05.pdf` — diagnóstico técnico completo (5 págs.)
- `MIGRATION_ANALYSIS.pdf` — datos brutos comparativos de Search Console (8 págs.)

---

## 2. Pre-requisitos de acceso

Antes de empezar verifica que tienes:

- [ ] Acceso a **Shopify Admin** (rol: Staff con permisos sobre "Online Store")
- [ ] Acceso a **Google Search Console** de electrosmogespana.com
- [ ] Una terminal con `curl` (Mac/Linux nativo, Windows requiere WSL o Git Bash)
- [ ] Editor de texto plano o Excel/Numbers para abrir CSV

---

## 3. Tareas en orden de ejecución

### TAREA 1 — Importar redirects 301 automáticos (30 min)

**Objetivo:** Activar 53 redirects 301 que cubren el 90,7% del tráfico perdido.

**Archivo a usar:** `redirects_shopify.csv`

**Pasos:**

1. Entra en **Shopify Admin** → menú lateral → **Online Store** → **Navigation**
2. En la parte superior derecha, pestaña **"URL Redirects"**
3. Botón **"Import"**
4. Arrastra (o selecciona) el archivo `redirects_shopify.csv`
5. Shopify mostrará un preview con las 53 filas
6. Confirma con **"Upload file"** o equivalente
7. Espera a que termine la importación (puede tardar 1-2 minutos)

**Notas importantes:**
- Si Shopify reporta filas con error, anótalas en un documento aparte y déjalas para revisión manual.
- Si alguna URL ya tiene un redirect previo, Shopify te avisará — sobrescribe solo si el destino del CSV es más correcto.
- Las URLs `from` y `to` son rutas relativas (empiezan por `/`), Shopify las completa automáticamente con el dominio.

---

### TAREA 2 — Verificar que los redirects funcionan (10 min)

**Objetivo:** Confirmar que las URLs antiguas devuelven realmente HTTP 301 hacia las nuevas.

Ejecuta en terminal estos 5 comandos (uno a uno) y verifica que la respuesta es `301` y el `Location` apunta a la URL nueva:

```bash
curl -sI https://electrosmogespana.com/producto/spiro-card/ | grep -E "HTTP|Location"
curl -sI https://electrosmogespana.com/tecnologia-spiro/ | grep -E "HTTP|Location"
curl -sI https://electrosmogespana.com/categoria-producto/spiro-filtros-electromagneticos/ | grep -E "HTTP|Location"
curl -sI https://electrosmogespana.com/terapia-de-luz-roja-ekio-light/ | grep -E "HTTP|Location"
curl -sI https://electrosmogespana.com/producto/detector-de-radiacion-electromagnetica/ | grep -E "HTTP|Location"
```

**Salida esperada para cada uno (ejemplo):**
```
HTTP/2 301
location: https://electrosmogespana.com/products/spiro-card
```

**Si alguno devuelve HTTP 200 en vez de 301:**
- Vuelve a Shopify Admin → URL Redirects y verifica que ese redirect concreto está creado.
- Si está pero no funciona, espera 5 minutos (cache CDN) y reintenta.

---

### TAREA 3 — Revisar y completar redirects manuales (45 min)

**Objetivo:** Procesar las 34 URLs que no se pudieron mapear automáticamente y completar la cobertura del 100%.

**Archivo a usar:** `redirects_review_manual.csv`

**Pasos:**

1. Abre `redirects_review_manual.csv` en Excel, Numbers o Google Sheets.
2. Para cada fila (priorizadas por impresiones, mayor a menor):
   1. Lee la columna **"URL antigua (WP)"**.
   2. Mira la columna **"Sugerencia destino"**: es lo que el script propuso heurísticamente.
   3. Verifica en Shopify Admin si esa URL destino existe realmente:
      - Para `/products/...` → busca el producto en `Productos`
      - Para `/collections/...` → busca la colección en `Colecciones`
      - Para `/pages/...` → busca la página en `Online Store > Pages`
      - Para `/blogs/electrosmog/...` → busca el post en `Online Store > Blog posts`
   4. Si la sugerencia es correcta → déjala tal cual.
   5. Si la sugerencia es incorrecta → corrige la URL destino en la columna.
   6. Si la URL destino NO existe en Shopify (producto/página no migrado) → escribe "PENDIENTE DE CREAR" en la columna y comunícalo al cliente.
3. Casos especiales que debes saber:
   - **`/politica-de-devoluciones/`** → Shopify gestiona políticas legales en `/policies/refund-policy`. Cambia la sugerencia a esa URL.
   - **`/politica-de-privacidad/`** → `/policies/privacy-policy`
   - **`/aviso-legal/`** → `/policies/legal-notice` (si existe) o crear
   - **`/tienda/`** → probable destino: `/collections/all`
4. Cuando termines de revisar TODAS las filas, prepara un nuevo CSV para importar:
   - Crea un archivo nuevo con solo dos columnas: `Redirect from` y `Redirect to`
   - Copia las filas que tengan destino válido (excluye las "PENDIENTE DE CREAR")
   - Guárdalo como `redirects_manual_revisado.csv`
5. Vuelve a Shopify Admin → URL Redirects → **Import** → sube el nuevo CSV.

**URLs de alta prioridad a revisar primero** (las de mayor tráfico perdido):

| URL antigua | Impresiones perdidas | Acción |
|---|---:|---|
| `/producto/card-disc/` | 1.089 | Verificar slug exacto en Shopify |
| `/tienda/` | 929 | Probable: `/collections/all` |
| `/producto/pack-proteccion-personal/` | 400 | Verificar producto |
| `/producto/consultoria-online-360/` | 393 | Verificar producto |
| `/producto/pack-stroom-master/` | 283 | Verificar producto |
| `/politica-de-devoluciones/` | 289 | Cambiar a `/policies/refund-policy` |
| `/consultoria-naturopatia/` | 258 | Verificar página |
| `/producto/ignis-de-ekio-light/` | 240 | Verificar producto |

---

### TAREA 4 — Limpiar sitemap en Google Search Console (10 min)

**Objetivo:** Asegurar que GSC solo procesa el sitemap de Shopify y no sitemaps de WordPress huérfanos.

**Pasos:**

1. Entra en **Google Search Console** → propiedad **electrosmogespana.com**.
2. Menú lateral → **Sitemaps**.
3. Verifica los sitemaps enviados:
   - **Debe estar:** `https://electrosmogespana.com/sitemap.xml` (es el sitemap automático de Shopify)
   - **Si aparece** algún sitemap con paths como `sitemap_index.xml`, `wp-sitemap.xml`, `sitemap-1.xml`, `sitemap-posts.xml` → son de WordPress, **elimínalos**: clic en los tres puntos → "Quitar sitemap".
4. Si el sitemap de Shopify NO está enviado → añádelo: pega `https://electrosmogespana.com/sitemap.xml` en el campo "Añadir un nuevo sitemap" → Enviar.
5. Confirma que el sitemap de Shopify reporta **status: Correcto** y que el número de URLs descubiertas tiene sentido (debería estar entre 100 y 300 URLs aprox.).

---

### TAREA 5 — Forzar reindexación de las top 10 URLs Shopify en GSC (15 min)

**Objetivo:** Acelerar la consolidación de autoridad en las nuevas URLs Shopify (sin esto, Google puede tardar 4-8 semanas en hacerlo solo).

**Pasos:**

En Google Search Console → **Inspección de URL** (campo de búsqueda superior). Pega cada una de estas URLs (una a una), espera el resultado, clic en **"Solicitar indexación"**, y pasa a la siguiente:

```
https://electrosmogespana.com/products/spiro-card
https://electrosmogespana.com/products/spiro-card-proteccion-electromagnetica
https://electrosmogespana.com/products/spiro-disc-ultra
https://electrosmogespana.com/products/spiro-card-x
https://electrosmogespana.com/collections/spiro-filtros-electromagneticos
https://electrosmogespana.com/pages/tecnologia-spiro
https://electrosmogespana.com/pages/terapia-de-luz-roja-ekio-light
https://electrosmogespana.com/collections/productos-pack-kits-spiro
https://electrosmogespana.com/products/spiro-disc-x
https://electrosmogespana.com/products/spiro-square-x
```

**Notas:**
- GSC permite ~10 solicitudes de indexación al día. Estas 10 entran justo en la cuota.
- Cada solicitud tarda 30-60 segundos en procesarse.
- Si alguna URL devuelve "URL no está en Google" después de la solicitud, no es alarma: significa que está pendiente de rastreo, no que esté bloqueada.

---

### TAREA 6 — (OPCIONAL, requiere Liquid) Implementar schema JSON-LD Product

**Objetivo:** Recuperar Rich Results en SERP para productos (precio, disponibilidad, valoraciones), lo que mejora el CTR.

**Solo asume esta tarea si tienes experiencia con themes de Shopify (Liquid).**

**Pasos resumidos:**

1. En Shopify Admin → **Online Store** → **Themes** → **Edit code** sobre el theme actual.
2. En la carpeta `snippets/` crea un nuevo archivo `product-jsonld.liquid` con el siguiente contenido:

```liquid
{% if product %}
<script type="application/ld+json">
{
  "@context": "https://schema.org/",
  "@type": "Product",
  "name": {{ product.title | json }},
  "image": {{ product.featured_image | image_url: width: 1200 | json }},
  "description": {{ product.description | strip_html | truncate: 5000 | json }},
  "sku": {{ product.selected_or_first_available_variant.sku | json }},
  "mpn": "U202532624",
  "brand": {
    "@type": "Brand",
    "name": "EKIO Electrosmog"
  },
  "offers": {
    "@type": "Offer",
    "url": {{ shop.url | append: product.url | json }},
    "priceCurrency": {{ cart.currency.iso_code | json }},
    "price": {{ product.selected_or_first_available_variant.price | money_without_currency | replace: ',', '.' | json }},
    "availability": "{% if product.available %}https://schema.org/InStock{% else %}https://schema.org/OutOfStock{% endif %}",
    "itemCondition": "https://schema.org/NewCondition"
  }
}
</script>
{% endif %}
```

3. En `sections/main-product.liquid` (o el archivo principal de la plantilla de producto), añade al final:
   ```liquid
   {% render 'product-jsonld' %}
   ```
4. Guarda los cambios.
5. Valida con [https://search.google.com/test/rich-results](https://search.google.com/test/rich-results) — pega la URL de cualquier producto y confirma que detecta schema Product sin errores.

**Si no tienes experiencia con Liquid → no hagas esta tarea, márcala como pendiente y comunícalo al cliente para que la asigne a otro recurso.**

---

## 4. Verificación final antes de cerrar el trabajo

Antes de reportar el trabajo como terminado, confirma:

- [ ] Tarea 1 ejecutada: 53 redirects importados sin errores en Shopify.
- [ ] Tarea 2 ejecutada: los 5 comandos `curl` devuelven `HTTP 301` con `location` correcto.
- [ ] Tarea 3 ejecutada: CSV manual revisado e importado (anota cuántos redirects extra se añadieron).
- [ ] Tarea 4 ejecutada: GSC tiene solo el sitemap de Shopify, sin restos de WordPress.
- [ ] Tarea 5 ejecutada: las 10 URLs solicitadas a indexar muestran estado "URL solicitada para indexación".
- [ ] (Opcional) Tarea 6 ejecutada: schema Product JSON-LD pasa el test de Rich Results.

---

## 5. Reporte de cierre al cliente

Envía un email/mensaje al cliente con esta estructura:

```
Asunto: SEO migración WordPress→Shopify — Tareas completadas

Buenas,

He ejecutado el plan de recuperación SEO post-migración. Resumen:

[ ] Tarea 1 — Redirects automáticos importados:    XX/53 ok
[ ] Tarea 2 — Redirects verificados con curl:      OK / FALLO en X URLs
[ ] Tarea 3 — Redirects manuales completados:      XX URLs añadidas
[ ] Tarea 4 — Sitemap GSC limpio:                  OK
[ ] Tarea 5 — Top 10 URLs solicitadas a indexar:   10/10 ok
[ ] Tarea 6 — Schema Product JSON-LD:              EJECUTADA / PENDIENTE / NO ASUMIDA

Incidencias encontradas:
- [Lista de cualquier URL que no se pudo redirigir y por qué]
- [Lista de URLs destino "PENDIENTE DE CREAR" en Shopify]

Próximo paso recomendado:
- Esperar 7 días para empezar a ver recuperación de tráfico en Search Console.
- Yo / vosotros revisamos métricas el lunes XX/05/2026.

Saludos.
```

---

## 6. Soporte y dudas

Si algo no encaja con lo que ves en pantalla, en lugar de improvisar:

1. **NO modifiques** redirects existentes que ya funcionaban antes de empezar.
2. **NO toques** el robots.txt de Shopify (es generado automáticamente y bloquearlo manualmente puede romper indexación).
3. **NO desactives** el sitemap de Shopify por error.

Si tienes dudas sobre un caso concreto:
- Documéntalo (URL afectada + qué dice Shopify) en un documento aparte.
- Marca esa URL como "BLOQUEADA: pendiente de revisión" y continúa con el resto.
- Comunica el bloqueo al cliente al cerrar el trabajo.

---

## 7. Resumen del paquete recibido

| Archivo | Para qué |
|---|---|
| `INSTRUCCIONES_TECNICO.pdf` | Este documento |
| `CHECKLIST_TECNICO.pdf` | Checklist abreviada para tener al lado durante la ejecución |
| `redirects_shopify.csv` | Importar tal cual en Tarea 1 |
| `redirects_review_manual.csv` | Revisar y procesar en Tarea 3 |
| `AUDITORIA_MIGRACION_2026-05-05.pdf` | Contexto y diagnóstico (lectura recomendada antes de empezar) |
| `MIGRATION_ANALYSIS.pdf` | Datos brutos por si necesitas profundizar |

**Tiempo estimado total:**
- Tareas 1+2+4+5 (obligatorias): 60-65 minutos
- Tarea 3 (manual, obligatoria): 45 minutos
- Tarea 6 (opcional, schema): 30-45 minutos

**Total: ~2 horas si Tarea 6 se omite, ~3 horas si se ejecuta.**
