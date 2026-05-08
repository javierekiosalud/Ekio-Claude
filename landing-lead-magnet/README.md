# Landing Lead Magnet — Manual de Higiene Electromagnética

Landing minimalista para captar leads desde Meta Ads. Mobile-first, hero ultra-limpio, performance optimizada.

## 📁 Archivos

| Archivo | Para qué |
|---|---|
| `index.html` | Landing principal (donde aterriza el tráfico) |
| `manual-gracias.html` | Thank-you page tras suscribirse (con upsell a valoración gratuita) |
| `brief-disenador-landing.html` | Brief de diseño v2 minimalista |
| `BRIEF_DISENADOR_LANDING_v1.md` | Brief de diseño v1 (versión completa, archivada) |
| `LANDING_GUIA_HIGIENE_v1.md` | Documento estratégico CRO original |

## ⚙️ Antes de subir — sustituir estos placeholders

### En `index.html` y `manual-gracias.html`:

| Placeholder | Sustituir por |
|---|---|
| `TU_PIXEL_ID` | ID real del Meta Pixel |
| `G-XXXXXXXXXX` | ID real de Google Analytics 4 |
| `TU_LIST_ID` | ID de la lista de Klaviyo "Manual Higiene EM" |
| `TU_ACCOUNT_ID` | Account ID de Klaviyo (6 caracteres) |

### Cómo encontrar el ID de la lista Klaviyo
1. Klaviyo → Lists & Segments → Crear lista "Manual Higiene EM"
2. Settings → la URL contiene el ID: `manage.kmail-lists.com/.../g=XXXXXX`
3. Account ID: Klaviyo → Settings → API Keys → Public API Key (los primeros 6 caracteres)

### Imágenes pendientes
- `og-manual-higiene.jpg` (1200×630) — para compartir en redes
- Foto de Javier — sustituir el placeholder "FJ" en `.author-photo` por `<img src="javier.jpg" alt="Francisco Javier Andrés">`

## 🚀 Opciones de despliegue

### A) Como página de Shopify (recomendado)
1. Shopify Admin → Online Store → Pages → Add page
2. Pegar el HTML del `index.html` en el editor de código (botón `<>`)
3. Title: `Manual de Higiene Electromagnética`
4. Handle: `manual` → URL final: `electrosmogespana.com/pages/manual`
5. Repetir para `manual-gracias.html` con handle `manual-gracias`

### B) Como página externa (Netlify, Vercel, etc.)
1. Subir ambos `.html` a la raíz del proyecto
2. Renombrar `manual-gracias.html` a `gracias/index.html` para URL limpia
3. Configurar dominio: `manual.electrosmogespana.com` o similar

## 🧪 Testing antes de publicar

- [ ] Abrir en iPhone real: el formulario debe verse SIN scroll en el hero
- [ ] Probar el form: lead debe llegar a Klaviyo
- [ ] Verificar Meta Pixel en Facebook Pixel Helper (Chrome extension)
- [ ] Verificar GA4 Real-time
- [ ] Verificar redirect a thank-you page con `?n=NombreUsuario` en URL
- [ ] Click en upsell de la thank-you → tracking funciona
- [ ] Cookie banner aparece y se oculta al aceptar
- [ ] Lighthouse: performance >90, accesibilidad >95, SEO >95

## 🎯 KPIs

| Métrica | Objetivo |
|---|---|
| Conversion Rate landing | 30-40% (vs ~10-12% versión actual) |
| Bounce rate | <50% |
| LCP | <2.0s |
| Open rate del welcome email | >55% |
| CTR del upsell en thank-you | >8% |

## 🔄 Próximos pasos (orden recomendado)

1. ✅ Sustituir placeholders con IDs reales
2. ✅ Crear lista Klaviyo + flujo welcome con el PDF como adjunto
3. ✅ Subir foto Javier + OG image
4. ✅ Configurar campaña Meta Ads apuntando a `/pages/manual`
5. ✅ Activar tras 200-300 conversiones: A/B test del H1
6. ✅ Medir 60 días, iterar
