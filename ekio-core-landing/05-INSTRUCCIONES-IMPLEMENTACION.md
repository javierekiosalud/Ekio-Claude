# 05 · Instrucciones de implementación — Ekio Light Core

## Datos de Shopify

| Campo | Valor |
|---|---|
| Título producto (admin) | Ekio Light Core — Terapia de Luz Roja Local y Portátil |
| URL slug (handle) | `ekio-light-core-terapia-luz-roja-portatil` |
| Redirección 301 | Marcar "crear redirección de URL" al renombrar desde el handle del IGNIS |
| Precio regular | 175 € |
| Precio de oferta | 147 € |
| Colección | Ekio Light — posición 1 (puerta de entrada) |
| Meta title | `Core — Luz Roja Portátil 660+850 nm · 147 € \| Ekio Light` |
| Meta description | `Terapia de luz roja donde la necesitas: rodilla, cuello, cara. 13 LEDs de 660 y 850 nm en un dispositivo portátil. Oferta 147 € (antes 175 €). Envío gratis y devolución 30 días.` |

## Orden de bloques en la ficha de producto
1. Above the fold (buy box: precio tachado 175€→147€, USPs, CTA)
2. Bloque de confianza ("por qué confiar en Ekio Light")
3. Para qué sirve (6 zonas de uso)
4. Cómo funciona (660/850 nm + referencias PubMed)
5. Beneficios
6. Especificaciones técnicas
7. Protocolo de uso
8. Qué recibes (contenido de la caja)
9. Comparativa de gama (Core / Deep 5 / Bio Regen 7 / Bio Spectrum 11)
10. Seguridad y precauciones
11. Garantía 30 días
12. FAQ (con FAQPage schema)
13. CTA final

`index.html` implementa este orden exacto y puede usarse como referencia visual directa al maquetar en el editor de Shopify.

## Checklist de publicación
- [ ] Actualizar precio en Shopify: regular 175 € · oferta 147 €
- [ ] Redirección 301 desde el handle del IGNIS → Core
- [ ] Pegar copy de todos los bloques (`02-COPY-COMPLETO.md`) en el editor de producto
- [ ] Subir 4-6 fotos reales con los alt text de `01-SEO-STRATEGY.md`
- [ ] Insertar `01-schema-product.json` en metafields SEO o app de schema
- [ ] Completar `aggregateRating` con el rating real de Judge.me (migrar reseñas del IGNIS)
- [ ] Confirmar fecha de fin de oferta (o si 147 € es precio permanente) y fijar `priceValidUntil` en el schema
- [ ] Añadir seQura como método de pago visible en la PDP
- [ ] Verificar que la plantilla NO hereda mensajes de garantía 90 días de SPIRO
- [ ] Añadir a colección Ekio Light en posición 1 (escalera de entrada)
- [ ] Conectar internal linking hacia Deep 5, hub Terapia de Luz Roja y La Ciencia
- [ ] Verificar manual en castellano incluido en la caja (o QR a PDF en `/pages/`)
- [ ] Publicar entrada del Core en `llms.txt` (ver `03-GEO-CITABILIDAD.md`) y verificar que `robots.txt` no bloquea bots de IA
- [ ] **No** citar el Modelo de Utilidad U202532624 en esta PDP salvo confirmación expresa de Javier de que cubre también el Core (ver nota en `README.md`)

## Notas pendientes de confirmar por Javier

| Dato | Estado | Acción requerida |
|---|---|---|
| Rating real Judge.me (reseñas del IGNIS) | Pendiente migración | Pedir a Judge.me la migración de reviews al renombrar el producto a Core |
| Fecha de fin de oferta 147 € | No definida | Decidir cuándo sube a 175 € o si la oferta es permanente — afecta al schema (`priceValidUntil`) y al copy |
| Manual en castellano en caja | Diseñado (`mockup-home/manual-core-ekio.html`) | Confirmar si ya va impreso en la caja actual o si el QR apunta a la versión digital |
| Número real de unidades a precio de oferta | No informado | Si hay limitación de stock, añadir urgencia real ("quedan X unidades a este precio") |
| seQura activo en esta PDP | Pendiente verificación | Confirmar que el widget de seQura aparece también en dispositivos, no solo en paneles |
| Handle de la colección `/collections/luz-roja-terapeutica` usado en el schema | Sin verificar | Confirmar que ese handle existe en Shopify o corregirlo en `01-schema-product.json` |
| Nombres de archivo de las fotos reales | Pendientes | Sustituir los nombres WebP propuestos en el schema y el alt text por los reales al subir |
