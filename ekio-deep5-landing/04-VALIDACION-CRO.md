# 04 · VALIDACIÓN CRO + SEO — Ekio Light Deep 5
## Agente 4 — "El Fiscal de la Experiencia de Usuario"

Auditoría del trabajo de los Agentes 1-3 contra los benchmarks del Agente 0.

---

## Tabla de puntuaciones (7 capas)

| Capa | Foco | Score /10 | Observación |
|---|---|---|---|
| 1 | Primer impacto (above the fold) | **9** | H1 de transformación, precio + financiación + patente visibles, CTA de beneficio, hook científico. Falta confirmar imagen hero que muestre "resultado/uso", no solo producto. |
| 2 | Propuesta de valor única | **9** | "5 longitudes vs 2" + patente + PubMed diferencian claramente del genérico. "El precio invisible" presente. |
| 3 | Prueba social | **5** | ⚠️ Limitada por realidad: no hay reviews ni testimonios reales. Plantillas listas; no se inventa rating. Sube a 8-9 en cuanto se carguen casos reales. |
| 4 | Manejo de objeciones | **9** | 10 FAQ completas, FAQ antes del CTA final, garantía con nombre propio, comparativa que justifica precio. |
| 5 | Urgencia y escasez | **7** | Sin urgencia (decisión deliberada y coherente con la marca). No penaliza credibilidad; sí deja potencial de palanca legítima (subida de precio con fecha real). |
| 6 | Fricción en el CTA | **9** | ≤2 clics al checkout, sticky add-to-cart, CTA describe el después, señales de seguridad pegadas al botón. |
| 7 | SEO y GEO | **9** | H1 con keyword, title ≤60, meta ≤160, JSON-LD Product+FAQ+Breadcrumb+Org, llms.txt, bots IA permitidos. |

---

## Score global de conversión estimado

**SCORE: 81 / 100** → página de alta conversión.

> El techo lo marca la **prueba social real (Capa 3)**. Con 5-10 reviews reales verificadas y 2-3 testimonios con nombre, el score sube a ~88-90.

---

## Fixes críticos (antes de publicar)

1. **Confirmar precio y stock reales** en el producto Shopify (650 € validado por el cliente). Verificar que `compare_at_price` solo se usa si hay descuento real.
2. **Subir imágenes reales** (existen en `deep5-assets/`: main, angle, use, lateral) con los alt text del SEO. La hero debe mostrar uso/resultado, no solo render.
3. **Completar specs técnicas reales:** irradiancia (mW/cm²), potencia (W), nº LEDs, dimensiones, peso. Hoy están como PENDIENTE.
4. **NO publicar rating ni testimonios como reales.** El código ya lo respeta; cargar casos reales vía email a compradores de IGNIS/Deep 7.
5. **Crear los metafields `ekio.*`** (ver config) y rellenarlos.
6. **Verificar `/collections/fotobiomodulacion`** existe (breadcrumb + schema). Si no, crearla o ajustar la URL.

## Mejoras opcionales (A/B test futuro)

- A/B del H1: "Recupera tu energía celular…" vs "No es el estrés. A tus células les falta luz."
- Test de vídeo de uso real en el hero vs galería estática.
- Bloque de financiación más explícito (logo del proveedor de pago a plazos).
- Test del CTA: "Quiero empezar mi recuperación" vs "Probar 30 días sin riesgo".

---

## Estimación de tasa de conversión esperada

> Rangos orientativos para ficha de ticket alto (650 €) en salud/bienestar, una vez completados los fixes críticos y con prueba social real.

| Tipo de tráfico | Conversión estimada |
|---|---|
| Frío (Meta/Google Ads a puerta fría) | 0,5 – 1,2 % |
| Templado (retargeting, visitantes recurrentes) | 1,5 – 3 % |
| Caliente (email lista propia, post-consultoría) | 4 – 8 % |

> Sin prueba social real, restar ~30-40 % a cada rango. La prueba social es la palanca #1 pendiente.

---

## Cumplimiento legal (revisión específica salud — España)

- ✅ Sin claims de "cura/trata/elimina" ni "sistema inmune" (Reglamento CE 1924/2006 / AEMPS).
- ✅ Beneficios formulados como "los estudios documentan / los usuarios reportan".
- ✅ Contraindicaciones visibles (epilepsia fotosensible, embarazo, fotosensibilizantes, oncología).
- ✅ "Complemento, no sustituto del tratamiento médico" presente.
- ✅ Patente correcta: OEPM 157 países, **sin** "PCT" (corregido respecto al prompt original).
- ✅ Garantía correcta: 30 días devolución + 2 años (corregido respecto al prompt original).
- ✅ Sin `aggregateRating` inventado (evita publicidad engañosa y penalización de Google).
