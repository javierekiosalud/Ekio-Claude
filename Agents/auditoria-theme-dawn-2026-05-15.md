# Auditoría Theme Dawn EKIO — 15/05/2026

> Auditoría técnica del theme tras la pregunta "¿Dawn es un problema?".
> 3 frentes: (1) cómo se personalizó Dawn, (2) peso de las apps, (3) secciones premium que faltan.
> Datos medidos con curl directo. PageSpeed Insights no disponible (quota sin API key — ver acción final).

---

## RESUMEN EJECUTIVO

**Dawn NO es el problema. La forma de usarlo SÍ.**

1. El theme base es **Dawn 15.4.1 oficial** (limpio, ~35 KB, rapidísimo).
2. Pero **11 de las 14 secciones de la home están construidas como `custom_liquid`** (HTML crudo pegado). Esto anula casi todas las ventajas de Dawn.
3. Las **apps pesan 6× más que el theme entero** (~221 KB vs ~35 KB). **UpCart sola pesa 155 KB** y duplica una función que Dawn ya hace gratis.
4. **48 de 53 imágenes de la home NO tienen lazy loading.**

El cuello de botella técnico de EKIO no es el theme — es el **uso de custom_liquid + apps redundantes + imágenes sin optimizar**.

---

## 1. AUDITORÍA DE PERSONALIZACIÓN DE DAWN

### Qué tenéis
- **Theme**: Dawn 15.4.1 (theme_store_id 887, oficial Shopify)
- **ID interno**: `t/9` → es el 9.º theme creado/duplicado en la cuenta (señal de iteración sin control de versiones)
- **JS custom**: existe `compiled_assets/scripts.js` (3 KB — personalización JS mínima, OK)
- **CSS custom**: clases propias detectadas (`cc-btn`, `tm1-ekio-btn`) → hay CSS añadido

### 🔴 El hallazgo grave: la home es 79% `custom_liquid`

Secciones reales de la home:

| Sección | Tipo |
|---|---|
| header | ✅ Dawn nativa |
| custom_liquid_6MKMdd | ⚠️ HTML crudo |
| custom_liquid_4ARi6c | ⚠️ HTML crudo |
| custom_liquid_6zVPDP | ⚠️ HTML crudo |
| custom_liquid_FLaRrW | ⚠️ HTML crudo |
| custom_liquid_GDGBBi | ⚠️ HTML crudo |
| custom_liquid_TgWhB8 | ⚠️ HTML crudo |
| custom_liquid_XJYpAj | ⚠️ HTML crudo |
| custom_liquid_acWLt4 | ⚠️ HTML crudo |
| custom_liquid_tf63L8 | ⚠️ HTML crudo |
| custom_liquid_aHTEQb | ⚠️ HTML crudo |
| custom_liquid_rcNgFW | ⚠️ HTML crudo |
| multirow_9wphEi | ✅ Dawn nativa |
| footer | ✅ Dawn nativa |

**11 de 14 secciones = `custom_liquid`** (bloques donde se pega HTML/CSS/JS a mano).

### Por qué esto es un problema

| Consecuencia | Detalle |
|---|---|
| **Javier no puede editar la home** sin tocar código | Custom Liquid no es editable visualmente. Cambiar un texto = editar HTML. |
| **Se pierde el lazy loading de Dawn** | Dawn optimiza imágenes automáticamente con el filtro `image_url`. El HTML crudo no. → solo 5/53 imágenes lazy. |
| **Se pierden las responsive images** | Dawn genera `srcset` automático. El HTML crudo sirve la misma imagen a móvil y desktop. |
| **No se beneficia de las 12-15 updates/año de Dawn** | Las mejoras de Dawn aplican a sus secciones nativas, no a tu HTML crudo. |
| **Mantenimiento caro** | Cada cambio requiere un desarrollador. No es escalable. |
| **CLS alto probable** | HTML crudo sin `width`/`height` reservados → saltos visuales. |

### ¿Está "versionado" el theme?

**No se puede confirmar al 100% desde fuera**, pero las señales apuntan a **NO**:
- Theme en `t/9` → han duplicado el theme 9 veces (típico de trabajar sin Git: "duplico antes de tocar").
- Home construida con custom_liquid → enfoque de "pegar en el editor", no de desarrollo profesional con Shopify CLI + GitHub.
- No hay indicios de build pipeline más allá de un `compiled_assets/scripts.js` mínimo.

**Para confirmarlo, Javier debe verificar en Shopify Admin:**
1. `Online Store → Themes` → ¿cuántos themes duplicados hay? ¿están nombrados con fechas/versiones?
2. ¿Hay un repositorio GitHub conectado al theme? (`Online Store → Themes → ⋯ → Connect from GitHub`)
3. ¿Quién hizo las personalizaciones y dónde está documentado?

**Recomendación**: conectar el theme a un repo GitHub (Shopify lo soporta nativo) para tener versionado real. A partir de ahí, cada cambio queda trazado.

---

## 2. AUDITORÍA DE PESO DE LAS APPS

Medición directa con curl (transfer = lo que descarga el navegador, comprimido):

### Apps de terceros

| App | Transfer | Raw | Veredicto |
|---|---|---|---|
| **UpCart** (cart drawer) | **155,4 KB** | 548,6 KB | 🔴 Enorme. Y REDUNDANTE (ver abajo) |
| UpCart CSS | 11,6 KB | 69,1 KB | 🔴 Parte del problema UpCart |
| Schema Plus SEO (trymry) | 22,9 KB | 89,2 KB | 🟠 Aceptable si aporta schema |
| Judge.me CSS | 14,9 KB | 74,6 KB | 🟠 Reviews — justificable |
| AppStle Loyalty | 10,8 KB | 48,0 KB | 🟢 Razonable |
| Judge.me loader | 3,3 KB | 9,6 KB | 🟢 OK |
| Klaviyo onsite | 2,2 KB | 14,6 KB | 🟢 OK |
| **TOTAL APPS** | **~221 KB** | **~853 KB** | |

### Theme Dawn (assets propios)

| Asset | Transfer |
|---|---|
| base.css | 13,6 KB |
| global.js | 8,2 KB |
| cart.js | 2,2 KB |
| compiled_assets/scripts.js (custom) | 1,0 KB |
| animations.js | 0,9 KB |
| + componentes CSS varios | ~10 KB |
| **TOTAL THEME** | **~36 KB** |

### 🔴 Conclusión: las apps pesan 6× más que el theme entero

```
THEME DAWN:  ████ 36 KB
APPS:        ████████████████████████ 221 KB
```

### 🔴 Hallazgo crítico: UpCart es REDUNDANTE

Verificado en el HTML: **se cargan a la vez**
- `cart-drawer.js` (cart drawer NATIVO de Dawn, ~2 KB)
- `upcart-bundle.js` (UpCart, 155 KB)

Dawn **ya trae un cart drawer nativo, ligero y rápido**. UpCart hace lo mismo pesando **77× más**.

UpCart aporta extras (upsells en carrito, barra de envío gratis, etc.). La pregunta es: **¿esos extras justifican 155 KB + duplicar una función nativa?** A vuestro volumen actual (6 pedidos/mes), casi seguro **NO**.

**Recomendación**: evaluar quitar UpCart y usar el cart drawer nativo de Dawn + construir los upsells de carrito con Liquid (el `shopify-theme-dev-agent` puede hacerlo). Ahorro: **~167 KB** (UpCart js+css) — casi la mitad del peso total de scripts.

### Imágenes de la home — mal optimizadas

| Métrica | Valor | Debería ser |
|---|---|---|
| Imágenes totales | 53 | — |
| Con `loading="lazy"` | 5 | ~52 (todas menos el hero) |
| Con `loading="eager"` | 1 | 1 (el hero) ✅ |
| Con `width`+`height` | 14 | 53 (todas, para evitar CLS) |

→ **48 imágenes cargan de golpe** al abrir la home. Causa directa de LCP y peso de carga inicial altos. Causa de esto: las imágenes están en HTML crudo dentro de `custom_liquid`, sin el filtro `image_url` de Dawn que añade lazy + srcset automáticamente.

### Nota sobre medición PageSpeed

La API pública de PageSpeed Insights está saturada (HTTP 429 — quota compartida sin API key). **Acción pendiente**: crear API key gratuita en Google Cloud Console para que el `web-performance-agent` pueda medir LCP/INP/CLS reales. Mientras tanto, los datos de peso de arriba son medición directa y fiable.

---

## 3. SECCIONES PREMIUM QUE FALTAN SOBRE DAWN

Dawn de fábrica es minimalista. Comparado con themes premium (Prestige, Impulse) y con tiendas D2C de salud bien montadas, a EKIO le faltan estas secciones/funciones de **conversión**:

### 🔴 Alto impacto en conversión

| Sección / función | Qué hace | Por qué EKIO la necesita |
|---|---|---|
| **Sticky Add-to-Cart** (PDP) | Barra fija con producto + botón comprar al hacer scroll | PDPs largas de ticket alto (Deep 5 600€) — el CTA debe estar siempre visible |
| **Slider Antes/Después** | Comparador visual con deslizador | Crítico para luz roja Ekio Light (resultados en piel, recuperación) |
| **Tabla comparativa de producto** | Comparar modelos (Deep 5 vs 7 vs FS10 / Card vs Disc) | El cliente no sabe cuál elegir → comparador reduce fricción |
| **Bundle builder / "compra el set"** | Construir pack con descuento visible | Subir AOV — packs SPIRO hogar/oficina |
| **Quick view en colección** | Ver producto sin entrar a PDP | Acelera descubrimiento en catálogo de 38 productos |
| **Sección de testimonios con foto** | Carrusel de reseñas reales destacadas | Producto de categoría desconocida → social proof esencial |

### 🟠 Impacto medio

| Sección / función | Qué hace |
|---|---|
| **Mega-menú visual** | Menú con imágenes por categoría (Dawn trae uno básico de solo texto) |
| **FAQ acordeón nativo por sección** | Bloque reutilizable de preguntas — hoy va dentro de custom_liquid |
| **Barra de progreso de envío gratis** en carrito | "Te faltan X€ para envío gratis" (UpCart lo hace; si se quita, recrearlo) |
| **Sección "Cómo funciona" con pasos** | Explicar la tecnología SPIRO / fotobiomodulación visualmente |
| **Trust bar / certificaciones** | Patente, IEC 62471, garantía 90 días — con iconos |
| **Lookbook / "el hogar protegido"** | Mostrar productos en contexto de uso real |

### 🟢 Nice to have

| Sección / función | Qué hace |
|---|---|
| **Cuestionario / quiz de recomendación** | "¿Qué EKIO necesitas?" → recomienda producto (ya existe test EMF, integrarlo) |
| **Countdown de oferta** | Urgencia real en campañas |
| **Feed de Instagram** | UGC en la home |

### Punto clave

La paradoja: **EKIO técnicamente "tiene" todas estas secciones posibles** porque la home es custom_liquid (HTML crudo → puedes meter cualquier cosa). Pero están hechas **mal**: sin editabilidad, sin optimización, sin reutilización.

**La solución NO es comprar Prestige.** Es convertir esos `custom_liquid` en **secciones nativas Dawn con schema** — editables por Javier, con lazy loading automático, responsive, y reutilizables. Eso es trabajo del `shopify-theme-dev-agent`.

---

## 4. PLAN DE ACCIÓN PRIORIZADO

### 🔴 P0 — Esta semana

| # | Acción | Responsable | Impacto |
|---|---|---|---|
| 1 | Crear API key PageSpeed Insights (Google Cloud, gratis) | Javier | Habilita medición CWV real |
| 2 | Verificar en Shopify Admin: nº de themes duplicados + si hay repo GitHub | Javier | Diagnóstico de versionado |
| 3 | Auditoría de decisión sobre UpCart: ¿los upsells de carrito justifican 167 KB? | shopify-theme-dev-agent | Posible -167 KB |

### 🟠 P1 — 2-4 semanas

| # | Acción | Responsable |
|---|---|---|
| 4 | Conectar el theme a un repositorio GitHub (versionado real) | shopify-theme-dev-agent |
| 5 | Migrar las 11 secciones `custom_liquid` de la home a secciones Dawn nativas con schema | shopify-theme-dev-agent |
| 6 | Reoptimizar las 53 imágenes: lazy load + srcset + width/height | shopify-theme-dev-agent |
| 7 | Si se quita UpCart: activar cart drawer nativo Dawn + recrear barra envío gratis en Liquid | shopify-theme-dev-agent |

### 🟡 P2 — 1-2 meses

| # | Acción |
|---|---|
| 8 | Construir las 6 secciones premium de alto impacto (sticky ATC, slider antes/después, comparador, bundle builder, quick view, testimonios) |
| 9 | Mega-menú visual + trust bar + sección "cómo funciona" |
| 10 | Medición CWV antes/después de cada cambio con web-performance-agent |

---

## 5. RESPUESTA A LA PREGUNTA ORIGINAL

> **"¿Usar Dawn fue un problema técnico, frente a Prestige?"**

**No.** Dawn fue la elección correcta:
- Es más rápido que Prestige (95-100 vs 72-82 PageSpeed base)
- Gratis, mantenido por Shopify, 12-15 updates/año
- El theme base pesa solo 36 KB

**El problema real no es el theme — son 3 decisiones de implementación:**
1. Construir la home entera en `custom_liquid` en vez de secciones nativas
2. Instalar UpCart (155 KB) duplicando el cart drawer nativo
3. No optimizar las imágenes (48/53 sin lazy)

Cambiar a Prestige **no arreglaría nada de esto** — y encima sería un downgrade de velocidad. Los 3 problemas se arreglan **sobre Dawn**, con trabajo del `shopify-theme-dev-agent`.

---

*Auditoría con datos medidos directamente (curl) el 15/05/2026. PageSpeed Insights pendiente
de API key. Snapshots en /tmp/ekio/.*
