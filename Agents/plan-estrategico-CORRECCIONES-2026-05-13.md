# Plan Estratégico EKIO — CORRECCIONES tras validación rigurosa (13/05/2026)

> Documento de correcciones al plan estratégico inicial. Tras detectar el error sobre
> "Pack Stroom Master agotado", repasé cada punto con curl + grep directo al HTML
> (no WebFetch, que alucinó en varias lecturas semánticas). Esta es la verdad validada.

---

## TABLA DE CORRECCIONES — qué decía el plan vs realidad

| # | Afirmación original del plan | Validación rigurosa | Veredicto |
|---|---|---|---|
| 1 | "Pack Stroom Master agotado, pierde ventas" | `"available":true`, botón ACTIVO en HTML | ❌ **FALSO** |
| 2 | "Top sellers todos en negativo, web bloqueada" | Todos `available:true`. Stock negativo es residual sin tracking activo | ❌ **FALSO** — no bloquea |
| 3 | "PDP Deep 5 no existe en Shopify (404)" | Existe en `/products/deep-5-ekio-light` y devuelve 200 | ❌ **FALSO** |
| 4 | "FAQ duplicadas SPIRO Card (bug)" | Las preguntas aparecen 2× porque hay HTML visible + FAQ schema JSON-LD. Es PRÁCTICA CORRECTA SEO | ❌ **FALSO** — no es bug |
| 5 | "SPIRO Card sin FAQ schema" | Tiene 4 Question + 1 FAQPage schema | ❌ **FALSO** |
| 6 | "Deep 5 sin FAQ" | Tiene **16 preguntas** "¿…?" visibles | ❌ **FALSO** |
| 7 | "Deep 5 sin Product schema" | Tiene 1 Product schema JSON-LD | ❌ **FALSO** |
| 8 | "Home sin Organization ni WebSite schema" | Tiene ambos vía app "Schema Plus for SEO" | ❌ **FALSO** |
| 9 | "Home sin botón WhatsApp" | Hay 1 mención WhatsApp detectada | ⚠️ **A REVISAR** |
| 10 | "Sharpei no aparece en ninguna PDP" | Script Sharpei SÍ carga en TODAS las PDPs, pero con `app_id: APP_ID` literal (placeholder no inicializado). Y 0 productos configurados | ⚠️ **MEDIO** — instalado pero NO operativo |
| 11 | "Recomendar instalar Smile.io para loyalty" | YA tienen **AppStle Loyalty** instalado (133 menciones, widget visible) | ❌ **NO COMPRAR** |
| 12 | "Deep 5 sin reviews" | **Judge.me instalado** (`jdgm-stylesheet` presente) pero SIN reviews del Deep 5 cargadas | ✅ **CIERTO en efecto** |
| 13 | "Home sin captura email funcional" | 0 inputs `name="contact[email]"`. Solo form de búsqueda | ✅ **CIERTO** |
| 14 | "3 CTAs sin jerarquía en home" | Confirmados: VER FILTROS SPIRO / VER LUZ ROJA / MEDIDORES Y ACCESORIOS | ✅ **CIERTO** |
| 15 | "Deep 5 sin specs técnicas (irradiancia, IEC)" | 0 menciones de irradiancia, 0 IEC | ✅ **CIERTO** |
| 16 | "Deep 5 sin Review schema / AggregateRating" | 0 Review + 0 AggregateRating en JSON-LD | ✅ **CIERTO** |
| 17 | "0 productos en alquiler Sharpei publicados" | 0 productos con tag/template/handle Sharpei | ✅ **CIERTO** |
| 18 | "Doble arquitectura WooCommerce+Shopify, 56 URLs legacy" | Validado con curl HEAD: 9 dan 200, 47 dan 404 (CSV listo) | ✅ **CIERTO** |
| 19 | "Klaviyo Post-Compra y Win-Back en DRAFT" | Klaviyo-agent verificó vía MCP — confiable | ✅ **CIERTO** |
| 20 | "Klaviyo OR 43.7% / CR 0.77% (CR catastrófico)" | Klaviyo-agent vía MCP — confiable | ✅ **CIERTO** |
| 21 | "Klaviyo 0% atribución en GA4/Shopify" | UTMs no configuradas en campañas | ✅ **CIERTO** |
| 22 | "Pack Stroom Master AGOTADO" | El handle `master-pro` (Pack 655€) tiene available true. Confirmado por captura del usuario | ❌ **FALSO** |
| 23 | "Suplementos Laittin 4% penetración" | retention-agent vía MCP get_orders — confiable | ✅ **CIERTO** |
| 24 | "Atribución 83% direct" | analytics vía MCP get_orders — confiable | ✅ **CIERTO** |

**Score de precisión del plan original**: 13 ciertos / 11 falsos o a revisar = **54% de precisión**.
Esto es inaceptable. Lección: **NUNCA usar WebFetch para leer estado de páginas concretas**. Solo curl + grep o MCP.

---

## RESUMEN DE QUÉ SE MANTIENE Y QUÉ CAMBIA

### ✅ ACCIONES QUE SE MANTIENEN (validadas con rigor)

#### 🔴 P0 - Esta semana

| Acción | Validación | Impacto € |
|---|---|---|
| Publicar flujos Klaviyo Post-Compra y Win-Back (DRAFT) | MCP Klaviyo confirma | +700-1.100€/mes |
| Añadir UTMs en campañas Klaviyo | Klaviyo invisible en GA4 | Atribución correcta + decisiones bien informadas |
| Reposicionar CTA en emails Klaviyo (párrafo 3 + PS) | CR 0,77% confirmado vía MCP | +50-80% CR email |
| Importar CSV de 56 redirects 301 | Validado con curl HEAD | Recupera link equity legacy |
| **Reescribir PDP Deep 5** (añadir specs IEC, irradiancia, pedir reviews Judge.me) | Validado: 0 specs, 0 reviews en HTML | +2.400€/mes con 1 venta/semana |
| Añadir FAQ schema JSON-LD en Deep 5, Pack Stroom Master | Validado: 0 FAQ schema | Rich results + GEO |
| Activar **AppStle Loyalty** (ya instalado, comprobar tiers + bonus) | Detectado en HTML | Activar lo que está apagado |
| Home: añadir captura email funcional (Klaviyo embed o form Shopify) | Validado: 0 inputs email | Captación leads orgánicos |

#### 🟠 P1 - 30 días

- Configurar **Sharpei correctamente** (APP_ID actual es placeholder, app no inicializada) + publicar 4 productos en alquiler
- Crear PDPs específicas para productos Sharpei con ticket recurrente
- Cross-sell hardware → suplementos Laittin (4% penetración confirmada)
- Suscripción Pack Vitaminas con descuento
- Mejorar reviews Deep 5 (campaña pedir reseñas vía Klaviyo a clientes pasados)

#### 🟡 P2 - 60-90 días

- Crear FAQ schema en TODAS las PDPs sin él (Pack, Stroom Master Pro, Deep 5)
- Topic clusters SEO (Electrosmog + Fotobiomodulación)
- Mejorar Core Web Vitals (necesita API key PageSpeed Insights)
- A/B test headlines top PDPs

### ❌ ACCIONES ELIMINADAS DEL PLAN (falsas)

- ~~"Reponer stock Pack Stroom Master"~~ → NO HAY problema de stock
- ~~"Activar Notify Me en top sellers"~~ → SE PUEDEN COMPRAR todos
- ~~"Crear PDP Deep 5 desde cero (404)"~~ → YA EXISTE, solo mejorar contenido
- ~~"Limpiar FAQ duplicadas SPIRO Card"~~ → NO ES BUG, es FAQ schema JSON-LD correcto
- ~~"Instalar Smile.io"~~ → YA TIENEN AppStle Loyalty
- ~~"Añadir Organization schema en home"~~ → YA EXISTE vía SchemaPlus
- ~~"Crear PDP funcional Pack Stroom Master"~~ → YA EXISTE y funciona

### ⚠️ ACCIONES REFORMULADAS

| Original | Reformulado |
|---|---|
| "Sharpei no aparece — añadir widget" | "Sharpei está cargado en HTML pero con `app_id: APP_ID` literal (no inicializado). Hay que **completar la configuración** de la app (poner APP_ID real) + **publicar productos de alquiler** (actualmente 0)" |
| "Stock crítico en negativo" | "Stock en negativo es residual y NO afecta venta (inventory_management=null). Limpieza cosmética opcional, no urgente" |
| "Deep 5 sin FAQ" | "Deep 5 tiene 16 preguntas visibles pero **falta FAQ schema JSON-LD** para Google rich results" |
| "Deep 5 sin reviews" | "Judge.me instalado pero sin reviews del Deep 5 cargadas. **Pedir reviews a clientes pasados** vía Klaviyo" |

---

## CAMBIOS EN INVERSIÓN PREVISTA

| Concepto plan original | Plan corregido |
|---|---|
| Smile.io (49$/mes) | Eliminado. Usar AppStle ya instalado. **Ahorro: 588$/año** |
| ReConvert (7-29$/mes) | Se mantiene |
| PageSpeed Insights API key | Se mantiene (gratis) |
| **Total adicional** | **< 30€/mes** (vs los 80€ del plan original) |

---

## CALIBRACIÓN DE LA HERRAMIENTA INTERNA

Lección operativa para siguientes sesiones:

| Para verificar | Usar | NO usar |
|---|---|---|
| Estado de disponibilidad de producto | curl + grep `"available":true/false` | WebFetch (alucinó "Agotado") |
| Schema JSON-LD | curl + grep `'"@type":"X"'` con/sin espacios | WebFetch (poco preciso) |
| Inventario real | MCP `get_products` + análisis JSON | Visualización en web (puede mentir) |
| FAQ / contenido en PDP | curl + grep estructurado | WebFetch (mezcla schemas con HTML) |
| Métricas reales | MCP (Shopify, Klaviyo) | Atribución declarada (Meta, GA4) |

Toda la batería de validación queda guardada en `/tmp/ekio/*.html` (snapshots locales).

---

*Documento generado tras corrección de validación. Reemplaza partes del plan estratégico
original donde haya discrepancia. El plan-estrategico-360-2026-05-13.md se mantiene como
referencia histórica, pero las decisiones operativas deben tomarse desde este documento.*
