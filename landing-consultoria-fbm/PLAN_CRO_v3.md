# Plan CRO v3 — Landing Consultoría FBM EKIO Light
## Cómo integrar patente OEPM + espectro solar completo para máxima conversión

**Producido con:** skill `anthropic-skills:shopify-cro` (framework Joanna Wiebe + Peep Laja + Russell Brunson)
**Audiencia principal:** Arquetipo C (caso médico crónico, escéptico, ha probado todo)
**Tráfico esperado:** Meta Ads + Google Ads + orgánico SEO

---

## 1. PATENTE OEPM — Dónde y cómo encajarla

### Jerarquía de impacto (5 puntos de contacto)

| Posición | Formato | Mensaje |
|---|---|---|
| **Trustbar superior** (1ª línea visible) | Texto destacado en oro | "🛡️ Patente española OEPM · U202532624 · La única tecnología multiespectral con espectro solar completo" |
| **Hero — pill bajo H1** | Badge oro pequeño | "🛡️ Tecnología patentada en España · OEPM" |
| **Sección dedicada "Patente OEPM"** (tras Evidencia) | Card grande con imagen justificante + 3 bullets | "No somos un panel chino con logo encima" |
| **Modelo top de gama** (sección Modelos) | Badge esquina superior | "🛡️ Patentado · Único en Europa" |
| **Footer** | Sello legal pequeño en bandeja oro | "Tecnología EKIO Light protegida por modelo de utilidad OEPM nº U202532624" |

### Por qué 5 menciones y no 1

- **Trustbar**: rompe la objeción "esto es Instagram" en 3 segundos.
- **Hero pill**: el escéptico que apenas mira la página ya capta que hay credibilidad institucional.
- **Sección dedicada**: para el visitante que sí lee, profundiza con datos concretos.
- **Modelo featured**: posiciona el Solar Full como producto premium con base real.
- **Footer**: cierre legal de confianza, especialmente importante para el arquetipo C.

### Color elegido: oro (#E0B43A)

No rojo. La patente es **autoridad/legitimidad**, no urgencia. El oro la separa visualmente del resto de CTAs sin entrar en conflicto.

---

## 2. ESPECTRO SOLAR COMPLETO — Cómo presentarlo sin sonar caro

### Enmarcado clave

**NO usar:** "tenemos más longitudes de onda" → connota "es más caro".
**SÍ usar:** "imitamos el sol entero" → connota "esto es lo natural".

### H2 elegido

> "Tu cuerpo evolucionó bajo todo el espectro del sol. La mayoría de paneles te da solo dos colores. Nosotros te lo damos completo."

### Mapeo emocional por longitud de onda

| Banda | Especificación técnica | Beneficio emocional (copy) |
|---|---|---|
| UVB | 280-315 nm | Vitamina D natural — "como en la playa, sin sol abrasivo" |
| UVA | 315-400 nm | Óxido nítrico — "tu sistema hormonal recibe la señal del amanecer" |
| Cian | 480-510 nm | Alerta diurna — "tu cerebro vuelve a saber qué hora del día es" |
| Rojo | 660 nm | Energía mitocondrial — "menos fatiga, mejor reparación" |
| Infrarrojo cercano | 850 nm | Reparación profunda — "el sol que llega hasta dentro" |
| Infrarrojo profundo | 1400+ nm | Calor terapéutico — "termorregulación real, descanso profundo" |

### Visual

Una **barra de espectro continua** (gradiente CSS) que muestra el espectro real, con 6 cards debajo (una por banda) con beneficio emocional. Cada card lleva una línea de color superior que conecta con la barra.

### Cierre de sección (texto en oro)

> "Otros paneles te dan rojo e infrarrojo. **EKIO Light te da el sol completo en tu salón.** Esa es la diferencia — y por eso la tenemos patentada."

---

## 3. SECCIÓN MODELOS — Estructura de decisión

### Tres cards, ascendente

```
ESSENTIAL              DUAL                   SOLAR FULL 🛡️
"Para empezar"         "Uso familiar"         "Espectro solar completo"
                       ⭐ Más vendido         🛡️ Único en Europa

• Rojo 660 nm          • Rojo 660 nm          • UVB · vitamina D
• Infrarrojo 850 nm    • Infrarrojo 850 nm    • UVA · óxido nítrico
• Uso individual       • Mayor área           • Cian · alerta diurna
• Tamaño compacto      • Toda la familia      • Rojo 660 · mitocondrias
                       • Ciclos automáticos   • Infrarrojo 850 · profundidad
                                              • Infrarrojo profundo · calor

→ Saber si es para mí  → Saber si es para mí  → Saber si es para mí
```

### Reglas de copy

- **Tagline emocional, no técnica.** "Para empezar con base científica" > "Modelo entrada".
- **Sin precio en la landing.** Forzamos la consultoría para resolverlo (mayor CTR a Calendly).
- **CTA único en todos los modelos:** "Saber si es para mí →" apuntando al Calendly.
- **Featured cards** (Dual + Solar Full) con borde dorado para destacar visualmente.
- **Solar Full** lleva el badge de patente y las especificaciones en color oro.

### Cierre

> "**¿No sabes cuál es el tuyo?** Es exactamente lo que Cristhian decide contigo en los 30 minutos de consultoría. Gratis."

→ El "no sabes cuál" no es debilidad: es el camino al Calendly.

---

## 4. ELEMENTOS CRO IMPLEMENTADOS

### a) STICKY CTA (mobile + desktop)

- Barra fija en `bottom: 0` con `position: fixed`.
- Aparece tras 20% scroll.
- **Desaparece cuando el usuario llega a la sección Calendly** (evita duplicar CTA).
- Body añade `padding-bottom: 80px` cuando está activa para no tapar contenido.
- Track: `fbq('trackCustom', 'CTAClick', {location: 'sticky'})`.

### b) RISK REVERSAL (sección "4 garantías concretas")

Una card por garantía:
1. **Consultoría sin presión** — "30 min y si no tienes claridad, no te habremos hecho gastar ni un minuto"
2. **Cero comisión** — "Cristhian no cobra comisión por panel vendido"
3. **30 días de prueba** — "Si compras y no es para ti, devolución sin preguntas"
4. **Garantía 5 años** — "Garantía técnica hardware Made in Spain"

Cada una con icono (✓, €, 30, 5y), título y descripción corta.

### c) SCARCITY ÉTICA (real, no countdown falso)

> "⏳ Cristhian atiende un máximo de 12 consultorías a la semana — reserva mientras haya disponibilidad"

- **Es verdad** (Cristhian es humano).
- **No genera ansiedad** (no countdown).
- **Refuerza valor** (limitado = importante).
- Pill de color oro encima del Calendly.

### d) ANCLA DE PRECIO

> "**Para que te hagas una idea:** un asesoramiento profesional de salud cuesta entre 80€ y 150€ por hora. Hoy te lo regalamos."

Aparece **justo antes** del Calendly inline. Reframea "gratis" como "regalo de valor concreto".

### e) MICRO-COMPROMISOS (auto-cualificación)

Sección antes del Calendly con 3 checkboxes:
1. "Llevo más de 3 meses con este problema y no he encontrado solución."
2. "He probado al menos 2 cosas que no resolvieron."
3. "Estoy abierto a algo nuevo si tiene base científica y alguien me orienta."

Al marcar 2+ → aparece mensaje rojo: *"Entonces sí, esta consultoría está hecha para ti. ↓"*

**Por qué funciona:**
- El visitante se auto-cualifica → siente que la oferta encaja con él.
- Cada check es un pequeño "sí" (Cialdini, consistencia/compromiso).
- Track Meta + GA4: `MicroCommitment` event con número de checks → valida la intención antes del Calendly.

---

## 5. A/B TESTS PRIORITARIOS (post-lanzamiento)

### Test 1 · H1 universal vs H1 arquetipo C

| Variante A (actual) | Variante B (específico) |
|---|---|
| "¿Cuándo fue la última vez que te despertaste descansado de verdad?" | "Si llevas años con Hashimoto, fibromialgia o insomnio crónico y has probado de todo, lee esto." |

**Hipótesis:** B convierte más para tráfico de Meta Ads segmentado por condición; A convierte más para tráfico orgánico amplio.
**Métrica primaria:** Tasa de scroll al Calendly.
**Métrica secundaria:** Tasa de reserva final.
**Duración:** 2 semanas con n≥800 por variante.

### Test 2 · Vídeo en hero vs vídeo tras reconocimiento (actual)

**Hipótesis:** Para tráfico caliente (retargeting/email), vídeo en hero puede convertir más rápido. Para frío, mejor mantener actual.
**Decisión:** Segmentar por UTM y servir variantes diferentes según fuente.
**Métrica:** Tasa de reproducción + tiempo en página + conversión.

### Test 3 · Calendly inline vs modal

| Variante A (actual) | Variante B (modal) |
|---|---|
| Calendly embebido en línea (720px alto) | Botón grande "Reservar ahora" → modal con Calendly al hacer click |

**Hipótesis:** Modal reduce scroll y aumenta foco; inline reduce fricción para usuarios ya convencidos.
**Métrica:** Tasa de reservas completadas / impresiones de la sección.

---

## 6. MÉTRICAS A VIGILAR

### KPIs primarios

| KPI | Objetivo frío | Objetivo retargeting | Herramienta |
|---|---|---|---|
| **Conversión visita → reserva** | 2-4% | 5-8% | GA4 + Calendly |
| **Scroll depth >65%** | 50% | 70% | GA4 (eventos) + Clarity |
| **Reproducción vídeo manual** | >40% | >60% | Player events |
| **Visualización completa vídeo** | >35% | >55% | Player events |
| **Tasa asistencia consultoría** | >70% | >85% | Calendly + manual |
| **% reserva → compra panel (30d)** | >25% | >40% | Shopify + atribución |

### KPIs secundarios (comportamiento emocional)

| KPI | Objetivo | Qué dice |
|---|---|---|
| **Tiempo en página (mediana)** | >2:30 | El contenido emocional está enganchando |
| **% que activa 2+ micro-compromisos** | >25% | Auto-cualificación funciona |
| **% click en sticky CTA** | 8-15% | Sticky aporta conversión incremental |
| **Heatmap: clusters en sección Cristhian + Espectro** | Visible | Las secciones más persuasivas se confirman |

### Dashboard mínimo (sin app de pago)

- **GA4 Custom Report:**
  - Páginas: `/pages/consultoria-fotobiomodulacion`
  - Eventos: `cta_click`, `begin_booking`, `select_time`, `consultation_booked`, `micro_commitment`
  - Dimensiones: source/medium, device, landing_page
  - Métricas: users, conversions, conversion rate, avg engagement time

- **Microsoft Clarity:**
  - Heatmaps por device.
  - Session recordings filtrados por "completaron Calendly" y "abandonaron en scroll".
  - Dead clicks y rage clicks.

---

## 7. CHECKLIST PRE-LANZAMIENTO

### Crítico (bloquea publicación)

- [ ] Sustituir `TU_PIXEL_ID` por Pixel ID real de Meta
- [ ] Sustituir `G-XXXXXXXXXX` por GA4 ID real
- [ ] Sustituir `COMPANY_ID` por Klaviyo Public API Key
- [ ] Imagen real del justificante OEPM en sección Patente
- [ ] 3 fotos reales de modelos EKIO Light (Essential, Dual, Solar Full)
- [ ] Foto real de Cristhian de Moya
- [ ] Vídeo de 3 min producido y subido (YouTube/Vimeo/Wistia)
- [ ] Sustituir embed placeholder por iframe real del vídeo
- [ ] Configurar webhook Calendly → Klaviyo para captura de email real

### Importante (mejora calidad)

- [ ] Verificar referencia exacta del estudio Hashimoto 2020 (n=350) o sustituir
- [ ] Configurar evento personalizado "Consultoría FBM Reservada" en Klaviyo
- [ ] Crear lista "Lead Consultoría FBM" en Klaviyo
- [ ] Crear flujo de bienvenida post-reserva (3 emails: confirmación, recordatorio 24h antes, post-consulta)
- [ ] Imagen Open Graph real (og-consultoria-fbm.jpg) para shares en redes

### Nice to have

- [ ] Schema.org adicional: VideoObject, FAQPage
- [ ] llms.txt actualizado con esta URL
- [ ] Sitemap.xml incluye `/pages/consultoria-fotobiomodulacion`
- [ ] Test A/B configurado en Shoplift o Google Optimize alternative

---

## 8. STACK COMPLETO DE LA LANDING v3 (orden de scroll)

```
1.  TRUSTBAR superior — Patente OEPM
2.  HERO — H1 emocional + pill patente + CTA + vídeo link
3.  RECONOCIMIENTO — agitación empática (PAS)
4.  EXPLICACIÓN — "No es el estrés. Es la luz."
5.  ESPECTRO SOLAR COMPLETO — diferenciador único (multiespectral)
6.  VÍDEO 3 min — Cristhian
7.  ESTO ES PARA TI SI — 3 perfiles
8.  EVIDENCIA — 3 estudios reales con cifras
9.  PATENTE OEPM — sección dedicada
10. MODELOS — 3 cards con badges
11. CRISTHIAN — humanizar al especialista
12. GARANTÍAS — 4 risk reversal
13. MICRO-COMPROMISOS — auto-cualificación
14. CALENDLY — scarcity + ancla + bullets + inline widget
15. FAQ — 10 objeciones desactivadas (incluye patente y diferenciación)
16. CTA FINAL — repetición con risk reversal emocional
17. FOOTER — patente como sello legal
18. STICKY CTA — flota durante 20%-95% del scroll
```

---

## NOTAS FINALES

Esta landing está construida para **un visitante que llega escéptico y se va con un hueco reservado**. No promete milagros, no usa urgencia falsa, no oculta nada. La conversión sale del stack acumulado de credibilidad:

1. **Patente OEPM** = legitimidad institucional.
2. **Espectro solar completo** = diferenciación técnica.
3. **Estudios con cifras** = base científica.
4. **Cristhian como persona** = humanización.
5. **Risk reversal x4** = cero fricción.
6. **Micro-compromisos** = auto-cualificación.
7. **Calendly inline + sticky** = decisión fácil.

El objetivo realista de conversión visita → reserva es del **3-5%** para tráfico de Meta Ads y del **6-10%** para retargeting + email caliente. Si estamos por debajo, los tests A/B priorizados nos dirán dónde está la fuga.
