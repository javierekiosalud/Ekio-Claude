# BRIEF DE DISEÑO — Landing Page Lead Magnet
## "Manual de Contaminación e Higiene Electromagnética"

**Cliente:** Ekio Electrosmog España
**Versión:** v1 — 2026-05-08
**Owner:** Francisco Javier Andrés (Director Ekio)
**Designer:** [añadir nombre]
**Plazo objetivo:** [añadir fecha]

---

## 0. RESUMEN EN 30 SEGUNDOS

Necesitamos rediseñar la landing actual de captación de leads (que convierte ~10-12% y debería estar en el 30-40%) para entregar el **Manual de Higiene Electromagnética** (62 páginas, PDF gratuito, autor Francisco Javier Andrés). El tráfico viene 100% de **Meta Ads** (Instagram + Facebook), mayoritariamente frío, así que la landing es **mobile-first obligatorio**. La meta es captar nombre + email (NO teléfono).

**KPI primario:** Conversion Rate de la landing.
**Meta:** pasar de ~10% a 30-40% en 60-90 días.
**Impacto económico estimado:** +110 leads/mes × LTV → +400-1.250€/mes en ventas directas y +2.000-3.200€/mes vía funnel email.

---

## 1. AUDIENCIA Y ARQUETIPOS

Tres perfiles llegan a esta landing desde Meta Ads:

| Arquetipo | Motivación | Disparador emocional |
|---|---|---|
| **La madre preocupada** | Niños con tablets, wifi 24/7, síntomas en familia | Proteger a los hijos |
| **El profesional con síntomas inexplicables** | Insomnio crónico, fatiga, jaquecas que ningún médico explica | Alivio + respuesta racional |
| **El consciente preventivo** | Sano, pero quiere reducir exposición (5G, antenas) | Anticiparse, control |

**Bonus B2B:** terapeutas, naturópatas y consultores ambientales también descargan el manual como material de formación.

---

## 2. TONO Y VOZ DE MARCA

- ✅ Riguroso (científico, citas, evidencia, referencias APA)
- ✅ Cercano (lenguaje claro, español de España, frases cortas)
- ✅ Esperanzador (hay solución, es sencilla, empieza hoy)
- ❌ NO alarmista ("la radiación te mata")
- ❌ NO conspiranoico ("ocultan la verdad")
- ❌ NO promesas médicas ("cura", "trata")
- ❌ NO new age / pseudociencia

**Frase guía interna:** *"No se trata de vivir con miedo al móvil. Se trata de saber cómo usarlo sin que te cueste la salud."*

---

## 3. SISTEMA VISUAL EKIO

### Paleta de colores (consistente con brief anterior)

| Token | Hex | Uso |
|---|---|---|
| **Fondo principal (dark)** | `#07090F` | Background general |
| **Fondo elevado** | `#0D1119` | Cards, secciones contrastadas |
| **Card / superficie** | `#141A26` | Bloques con borde sutil |
| **EKIO Green (primario)** | `#00C9A7` | CTA, acentos, iconos clave |
| **Naranja (atención)** | `#F5A623` | Highlights, badges, urgencia suave |
| **Azul (información)** | `#8899FF` | Datos, citas científicas, links |
| **Rojo (alerta/contraste)** | `#FF4D4D` | "NO es" / problema (uso muy puntual) |
| **Texto principal** | `#FFFFFF` | Títulos, copy principal |
| **Texto secundario** | `rgba(255,255,255,0.7)` | Subtítulos, descripción |
| **Texto terciario** | `rgba(255,255,255,0.5)` | Microcopy, captions |

### Tipografía

- **Familia recomendada:** Inter, Manrope o sans-serif del sistema (`-apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif`)
- **H1 móvil:** 32-36px / weight 700 / line-height 1.15
- **H1 desktop:** 56-64px / weight 700
- **H2:** 24-28px móvil, 40-44px desktop / weight 600
- **Body:** 16-17px / line-height 1.6
- **Microcopy:** 13-14px / opacidad 0.5-0.7

### Referencias visuales del estilo EKIO
- Existen mockups previos en `brief-disenador-v2.html`, `pitch-keiretsu-valladolid-v7.html` y `mockup-home/`. **Mantener esa misma identidad visual.**
- Estética: tecnológica, científica, oscura, con acentos verde-cyan que evocan "campo electromagnético reorganizado" (filosofía SPIRO).

### Filosofía visual aplicada al lead magnet
- Imagen y profesionalismo de clínica/laboratorio, no de "blog de bienestar".
- El manual es el **adelanto del libro oficial** que se publica en noviembre. La landing debe transmitir que es un material **académico/profesional**, no un PDF amateur.

---

## 4. WIREFRAME MOBILE-FIRST (sección por sección)

### Reglas globales
- **Mobile-first obligatorio** (375px de base)
- **Sin menú de navegación, sin footer rico** (página de conversión pura)
- **Solo dos elementos en top bar:** logo EKIO + texto pequeño "Manual gratuito"
- **Logo EKIO pequeño** (no domina la pantalla)
- **Imágenes optimizadas** (WebP, lazy loading)
- **Velocidad objetivo:** LCP < 2.5s, CLS < 0.1, peso total < 1MB

---

### 🟩 SECCIÓN 1 — HERO (above the fold, 100vh móvil)

```
┌─────────────────────────────────┐
│  [Logo EKIO sm]   Manual gratis │
├─────────────────────────────────┤
│  📕 Manual gratuito · 62 págs   │ ← badge naranja pequeño
│                                 │
│  [H1 GRANDE 32-36px]            │
│  La guía que tu médico no te    │
│  dio para entender por qué      │
│  duermes mal, vives en alerta   │
│  y nadie sabe explicarte la     │
│  causa.                         │
│                                 │
│  [Subtítulo, gris claro]        │
│  Descarga gratis el Manual de   │
│  Contaminación e Higiene...     │
│                                 │
│  ┌───────────────────────────┐ │
│  │   [MOCKUP 3D PDF]         │ │ ← centrado, ~280px alto
│  │   (portada visible)       │ │
│  └───────────────────────────┘ │
│                                 │
│  [ Tu nombre               ]   │ ← input 48px alto
│  [ Tu email                ]   │
│  ┌───────────────────────────┐ │
│  │  Quiero mi manual gratuito │ │ ← CTA verde EKIO full-width
│  └───────────────────────────┘ │
│  Lo recibirás en tu email en   │ ← microcopy 13px
│  menos de 2 minutos. Sin spam.  │
│  Cumplimos RGPD.                │
│                                 │
│  ⭐ Más de [X] descargas        │ ← social proof línea
└─────────────────────────────────┘
```

**Notas de diseño:**
- El **mockup 3D del PDF** es CRÍTICO: tangibiliza el lead magnet y aumenta el valor percibido +40-60%. Crear con Canva/Placeit o pedir render 3D al diseñador.
- **CTA color:** `#00C9A7` (EKIO Green) con texto `#07090F`. Hover: ligero glow/shadow.
- **Inputs:** fondo `#141A26`, borde `rgba(255,255,255,0.1)`, focus `#00C9A7`.

---

### 🟩 SECCIÓN 2 — "Esto es para ti si…"

```
┌─────────────────────────────────┐
│  Si alguna vez te has           │
│  preguntado…                    │
│                                 │
│  ✓  Por qué tu insomnio no      │
│     mejora aunque hagas todo    │
│     "bien"                      │
│  ✓  Por qué te sientes en       │
│     alerta sin razón aparente   │
│  ✓  Si el wifi y el 5G afectan  │
│     a tus hijos                 │
│  ✓  Por qué tienes jaquecas,    │
│     fatiga o niebla mental que  │
│     ningún análisis explica     │
│  ✓  Si los límites legales de   │
│     exposición a CEM te         │
│     protegen de verdad          │
│                                 │
│  [destacado]                    │
│  Este manual te da respuestas — │
│  con ciencia, no con miedo.     │
└─────────────────────────────────┘
```

**Diseño:**
- Iconos check `#00C9A7` (verde EKIO) en círculo sutil.
- Última frase con tipografía un poco más grande, estilo callout.

---

### 🟩 SECCIÓN 3 — "Qué encontrarás dentro" (8 capítulos)

```
┌─────────────────────────────────┐
│  Qué encontrarás dentro         │
│  8 capítulos que cambian tu     │
│  forma de habitar tu casa       │
│                                 │
│  ┌─────────────────────────┐   │
│  │ [Icono 📡]              │   │
│  │ Las 6 capas de la       │   │
│  │ electropolución         │   │
│  │ Desde la corriente...   │   │
│  └─────────────────────────┘   │
│                                 │
│  ┌─────────────────────────┐   │
│  │ [Icono 🧬]              │   │
│  │ Polarización: el corazón │   │
│  │ del problema            │   │
│  │ ...                     │   │
│  └─────────────────────────┘   │
│  (… 6 cards más)               │
└─────────────────────────────────┘
```

**Diseño:**
- 8 cards, una por capítulo (formato consistente).
- Móvil: cards en columna única (1 por fila).
- Desktop: grid 2x4 o 4x2.
- Iconos lineales/minimalistas (línea fina, color EKIO Green).
- Cada card: icono + título capítulo (bold) + descripción 1-2 líneas.

**Iconos sugeridos por capítulo:**
1. 📡 Las 6 capas de la electropolución → torre/antena
2. 🧬 Polarización → onda con dirección
3. ⚖️ Las 14 suposiciones falsas FCC/ICNIRP → balanza/documento
4. 🔬 SPIRO → átomo/espiral
5. 🏠 Higiene electromagnética práctica → casa
6. 💡 Higiene lumínica → bombilla
7. 📋 Apéndices visuales → checklist
8. 📚 Referencias APA → libro/comillas

---

### 🟩 SECCIÓN 4 — Sobre el autor (autoridad)

```
┌─────────────────────────────────┐
│  Sobre el autor                 │
│                                 │
│  ┌──────────┐                   │
│  │  [Foto]  │  Francisco Javier │
│  │ Javier   │  Andrés Andrés    │
│  │ profesio │  Fundador Ekio    │
│  └──────────┘  Naturópata...    │
│                                 │
│  [Cita destacada en italic]     │
│  "Desde 2011 he acompañado a    │
│  cientos de personas con        │
│  síntomas que el sistema médico │
│  no sabía explicar..."          │
│                                 │
│  ┌─────┬─────┬─────┐           │
│  │ 14  │ 20+ │ [X] │           │
│  │años │refs │valor│ ← stats   │
│  │exp. │APA  │aciones          │
│  └─────┴─────┴─────┘           │
│                                 │
│  • Naturopatía + Bioelectro...  │
│  • Innumerables valoraciones... │
│  • Adelanto del libro oficial   │
│    publicado en noviembre       │
└─────────────────────────────────┘
```

**Diseño:**
- **Foto profesional de Javier** (necesaria — pedirla a Javier).
- Foto circular o redondeada, ~120px móvil.
- Cita en formato blockquote con barra lateral verde.
- Stats en grid 3 columnas con números grandes (color verde EKIO).

---

### 🟩 SECCIÓN 5 — Testimonios (3 + cita destacada)

```
┌─────────────────────────────────┐
│  Lo que dicen quienes ya lo     │
│  tienen                         │
│                                 │
│  ┌─────────────────────────┐   │
│  │ ⭐⭐⭐⭐⭐                │   │
│  │ "Llevaba dos años sin    │   │
│  │ dormir bien. Apliqué..." │   │
│  │                          │   │
│  │ [foto] Laura M., Madrid │   │
│  └─────────────────────────┘   │
│  (… 2 testimonios más)         │
│                                 │
│  ┌─────────────────────────┐   │
│  │  [CITA GRANDE]           │   │
│  │  "No se trata de vivir   │   │
│  │  con miedo al móvil..."  │   │
│  └─────────────────────────┘   │
└─────────────────────────────────┘
```

**Diseño:**
- Cards con fondo `#141A26`, borde sutil.
- Móvil: carrusel horizontal o columna.
- Desktop: 3 columnas.
- Foto del testimoniante: avatar pequeño 40px (puede ser ilustrativo si Javier no tiene fotos reales).
- Cita destacada al final con tipografía grande, italic, comillas decorativas verde.

---

### 🟩 SECCIÓN 6 — "Esto NO es / SÍ es"

```
┌─────────────────────────────────┐
│  Por qué este manual es         │
│  diferente                      │
│                                 │
│  ┌───────────┐  ┌───────────┐  │
│  │ ❌ NO es  │  │ ✅ SÍ es  │  │
│  │           │  │           │  │
│  │ Panfleto  │  │ Síntesis  │  │
│  │ conspira- │  │ con refs  │  │
│  │ noico 5G  │  │ APA       │  │
│  └───────────┘  └───────────┘  │
│  (… 3 filas más)               │
└─────────────────────────────────┘
```

**Diseño:**
- 4 filas con dos columnas: izquierda "NO es" (rojo `#FF4D4D` muy sutil, solo borde), derecha "SÍ es" (verde EKIO).
- Móvil: stack vertical (NO arriba, SÍ debajo) o tabla simple.
- Desktop: 2 columnas reales.

---

### 🟩 SECCIÓN 7 — Segundo formulario (CTA repetido)

```
┌─────────────────────────────────┐
│  [Banner verde sutil]           │
│  Descárgalo ahora.              │
│  Es 100% gratuito.              │
│                                 │
│  Es el primer paso de la        │
│  higiene del siglo XXI...       │
│                                 │
│  [ Tu nombre              ]    │
│  [ Tu email               ]    │
│  ┌──────────────────────────┐  │
│  │ Sí, enviadme el manual   │  │
│  └──────────────────────────┘  │
│                                 │
│  En menos de 2 minutos lo       │
│  tendrás en tu bandeja...       │
└─────────────────────────────────┘
```

**Diseño:**
- Sección con fondo elevado (`#0D1119`) para destacar.
- Mismo formulario que en hero (reutilizar componente).

---

### 🟩 SECCIÓN 8 — FAQ (acordeón)

```
┌─────────────────────────────────┐
│  Preguntas frecuentes           │
│                                 │
│  ▸ ¿De verdad el wifi o el     │
│    móvil pueden afectar a la    │
│    salud?                       │
│  ▸ ¿Necesito comprar algún      │
│    aparato?                     │
│  ▸ ¿Esto es solo para personas  │
│    con EHS?                     │
│  ▸ ¿Quién es Francisco Javier...│
│  ▸ ¿Qué pasa después de la      │
│    descarga?                    │
└─────────────────────────────────┘
```

**Diseño:**
- Acordeón expandible (cerrado por defecto).
- Animación suave al abrir.
- Icono `+` que rota a `×` al abrir.

---

### 🟩 SECCIÓN 9 — Footer mínimo

```
┌─────────────────────────────────┐
│  [Logo EKIO]                    │
│                                 │
│  © 2026 Ekio Electrosmog España │
│  Política de privacidad ·       │
│  Aviso legal · Contacto         │
│                                 │
│  Tus datos están protegidos     │
│  según el RGPD.                 │
└─────────────────────────────────┘
```

**Diseño:**
- Footer minimalista. Sin menú, sin links a tienda. Solo legal + contacto.

---

## 5. THANK YOU PAGE (página de agradecimiento post-suscripción)

```
┌─────────────────────────────────┐
│  ✅ ¡Listo! Tu manual está      │
│  volando hacia tu email         │
│                                 │
│  Mientras llega, te invitamos   │
│  al siguiente paso…             │
│                                 │
│  ┌─────────────────────────┐   │
│  │ ¿Quieres saber cómo     │   │
│  │ está exactamente tu     │   │
│  │ hogar?                  │   │
│  │                         │   │
│  │ El manual te da la      │   │
│  │ teoría. Una valoración  │   │
│  │ técnica profesional...  │   │
│  │                         │   │
│  │ [Reservar mi cita →]    │   │
│  └─────────────────────────┘   │
└─────────────────────────────────┘
```

**Diseño:**
- Tick verde grande arriba (animación opcional).
- CTA secundario en naranja `#F5A623` (no compite con el verde del hero).
- **Esta página captura el momento de máxima intención** — diseñarla con cariño.

---

## 6. ASSETS A PRODUCIR

### 🎨 El diseñador entrega:
| # | Asset | Formato | Notas |
|---|---|---|---|
| 1 | **Mockup 3D del PDF** | PNG transparente, 800x800 mín | Portada visible, lomo, sombra realista |
| 2 | **Iconos 8 capítulos** | SVG | Línea fina, color #00C9A7 |
| 3 | **Diseño completo landing** | Figma + export Web | Mobile + Desktop |
| 4 | **Diseño thank-you page** | Figma + export Web | Mobile + Desktop |
| 5 | **Avatares testimonios** | PNG/SVG | Pueden ser ilustrativos si no hay fotos reales |
| 6 | **OG image** (compartir social) | 1200x630 PNG | Para Meta Ads/WhatsApp |

### 📷 Javier (cliente) entrega:
| # | Asset | Notas |
|---|---|---|
| 1 | **Foto profesional de Javier** | Mín 800x800px, fondo neutro |
| 2 | **PDF del manual** | El que ya está terminado (62 páginas) |
| 3 | **Cifra real de descargas** | Para social proof |
| 4 | **Año de fundación EKIO** | Para credenciales |
| 5 | **Nº valoraciones técnicas realizadas** | Para credenciales |
| 6 | **3 testimonios reales** (con permiso) | Si los hay; si no, usar plantillas |

---

## 7. ESPECIFICACIONES TÉCNICAS

### Performance
- LCP < 2.5s (Largest Contentful Paint)
- CLS < 0.1 (Cumulative Layout Shift)
- TTI < 3.5s (Time to Interactive)
- **Peso total página < 1MB**
- Imágenes en WebP con fallback a PNG/JPG
- Lazy loading en todas las imágenes below-the-fold

### Accesibilidad
- WCAG 2.1 AA mínimo
- Contraste texto/fondo ≥ 4.5:1
- Inputs con `<label>` (visible o sr-only)
- Focus visible en todos los elementos interactivos

### SEO
- `<title>`: "Manual de Higiene Electromagnética — Descarga Gratuita | Ekio"
- Meta description: 150-160 caracteres
- Schema.org `Book` o `LearningResource` para el manual
- `og:image`, `og:title`, `og:description`

### Tracking obligatorio
- **Meta Pixel** + Conversion API (CAPI) — evento `Lead` al submit
- **Google Analytics 4** — evento `generate_lead`
- **Klaviyo** — suscripción a lista "Manual Higiene EM"
- **Cookies banner** consent mode v2 (RGPD)

### Plataforma sugerida
- **Recomendación principal:** Shopify Page con Liquid + integración con Klaviyo (mantener todo en el ecosistema EKIO).
- **Alternativa:** ManyChat landing o página externa (Webflow/Framer) — solo si hay razón técnica.

---

## 8. A/B TESTS PREVISTOS

Diseñar pensando en que se van a probar variantes:

| Test | Control | Variante | Cuándo |
|---|---|---|---|
| **H1** | "La guía que tu médico no te dio…" | "¿Y si tu insomnio no es estrés sino tu router?" | Semana 1-3 |
| **CTA copy** | "Quiero mi manual gratuito" | "Proteger mi hogar — empezar aquí" | Semana 4-6 |
| **Mockup PDF vs sin mockup** | Con mockup 3D | Sin imagen | Semana 7-9 |

→ **Importante:** dejar el copy editable en variables de Liquid o en CMS, no hardcoded.

---

## 9. PLAZOS Y ENTREGABLES

| Entregable | Plazo sugerido | Responsable |
|---|---|---|
| Wireframes Figma low-fi | Día +3 | Diseñador |
| Mockup 3D del PDF | Día +5 | Diseñador |
| Diseño high-fi mobile | Día +7 | Diseñador |
| Diseño high-fi desktop | Día +10 | Diseñador |
| Iconos capítulos (8) | Día +10 | Diseñador |
| Thank-you page | Día +12 | Diseñador |
| Validación con Javier | Día +13 | Cliente |
| Handoff a desarrollo | Día +14 | Diseñador |

---

## 10. EL COPY COMPLETO (texto final, listo para pegar)

> **Nota:** todo el copy de la landing está aprobado por Javier y se debe respetar literalmente. Cualquier cambio requiere validación previa.

---

### 🔹 HERO

**Pre-título:** Manual gratuito · 62 páginas · Adelanto del libro oficial que se publica en noviembre

**H1:** La guía que tu médico no te dio para entender por qué duermes mal, vives en alerta y nadie sabe explicarte la causa.

**Subtítulo:** Descarga gratis el Manual de Contaminación e Higiene Electromagnética de Francisco Javier Andrés. 62 páginas con base científica para dejar de pagar con tu salud el precio invisible de la vida en la era de la IA.

**Form fields:** Tu nombre / Tu email
**CTA primario:** Quiero mi manual gratuito
**Microcopy bajo CTA:** Lo recibirás en tu email en menos de 2 minutos. Sin spam. Cumplimos RGPD. Baja cuando quieras.
**Social proof línea:** Más de [AJUSTAR cifra] personas en España ya lo han descargado.

---

### 🔹 SECCIÓN 2 — "Para ti si…"

**Título:** Si alguna vez te has preguntado…

**Bullets:**
- Por qué tu insomnio no mejora aunque hagas todo "bien"
- Por qué te sientes en alerta sin razón aparente
- Si el wifi y el 5G afectan a tus hijos
- Por qué tienes jaquecas, fatiga o niebla mental que ningún análisis explica
- Si los límites legales de exposición a campos electromagnéticos te protegen de verdad

**Cierre:** Este manual te da respuestas — con ciencia, no con miedo.

---

### 🔹 SECCIÓN 3 — "Qué encontrarás dentro"

**Título:** Qué encontrarás dentro
**Subtítulo:** 8 capítulos que cambian tu forma de habitar tu casa

| Card | Título | Descripción |
|---|---|---|
| 1 | **Las 6 capas de la electropolución** | Desde la corriente alterna de Edison hasta el 5G y el IoT. Por qué tu cuerpo nunca evolucionó para esto. |
| 2 | **Polarización: el corazón del problema** | Qué hace exactamente una microonda artificial dentro de tus células (y por qué no es cuestión de "calentamiento"). |
| 3 | **Las 14 suposiciones falsas de la FCC y la ICNIRP** | Por qué los límites legales de exposición están desfasados según el informe de Miller et al. (2022). |
| 4 | **SPIRO: la tecnología cuántica que reorganiza el campo** | La solución pionera de NOXTAK que no bloquea ni apantalla, sino que devuelve coherencia al campo. |
| 5 | **Higiene electromagnética práctica** | Checklist completa para dormitorio, zona de trabajo y móvil. Aplicable esta misma noche. |
| 6 | **Higiene lumínica y ritmos circadianos** | Por qué tu lámpara LED puede estar saboteándote el sueño y qué hacer. |
| 7 | **Apéndices visuales** | Tablas, diagramas y la checklist final que usan los profesionales. |
| 8 | **Referencias científicas APA** | Pall, Belyaev, Hardell, Belpomme, Panagopoulos, BioInitiative Report. Sin opinión: solo evidencia. |

---

### 🔹 SECCIÓN 4 — Autor

**Título:** Sobre el autor

**Nombre:** Francisco Javier Andrés Andrés
**Cargo:** Fundador de Ekio Electrosmog España
**Sub-cargo:** Naturópata experto en contaminación electromagnética

**Cita destacada:**
> "Desde 2011 he acompañado a cientos de personas con síntomas que el sistema médico no sabía explicar: insomnio crónico, jaquecas, ansiedad, sensación de no estar nunca en calma. La pista invisible siempre estaba en el mismo sitio: el entorno electromagnético. Y, lo más importante, era reversible."

**Stats (3 cards):**
- **+14 años** acompañando casos de hipersensibilidad electromagnética (EHS)
- **20+ referencias** científicas revisadas por pares en el manual
- **[AJUSTAR]** valoraciones técnicas realizadas en hogares y empresas

**Bullets credenciales:**
- Formación en Naturopatía + Bioelectromagnetismo ambiental + Física cuántica aplicada
- Innumerables valoraciones técnicas de espacios contaminados por radiación artificial
- Colaboración con ingenieros, médicos ambientales y expertos en geobiología
- Este manual es el primer adelanto del libro oficial que se publica en noviembre

---

### 🔹 SECCIÓN 5 — Testimonios

**Título:** Lo que dicen quienes ya lo tienen

**Testimonio 1:**
> "Llevaba dos años sin dormir bien. Apliqué tres cambios la primera semana después de leer el manual: apagar el router por la noche, alejar el móvil de la mesilla y cambiar la lámpara del dormitorio. En diez días dormía de otra manera."
>
> — **Laura M., Madrid**

**Testimonio 2:**
> "Soy informático, trabajo desde casa. Tenía dolores de cabeza casi todos los días. El manual me dio el marco para entender el por qué. Las soluciones no eran ninguna locura."
>
> — **Carlos R., Barcelona**

**Testimonio 3:**
> "Soy enfermera y muy escéptica con todo lo que no tenga base científica. Este manual cita estudios reales, explica los mecanismos y no vende miedo. Lo recomiendo a cualquiera que quiera informarse en serio."
>
> — **Ana T., Valencia**

**Cita destacada (cierre sección):**
> "No se trata de vivir con miedo al móvil. Se trata de saber cómo usarlo sin que te cueste la salud."

---

### 🔹 SECCIÓN 6 — "NO es / SÍ es"

**Título:** Por qué este manual es diferente

| ❌ Esto NO es… | ✅ Esto SÍ es… |
|---|---|
| Un panfleto conspiranoico sobre el 5G | Una síntesis técnica con referencias APA: Pall, Belyaev, Hardell, BioInitiative Report |
| Una lista de aparatos "anti-radiación" sin base | Un análisis del mecanismo biológico real (polarización, espines, ruido cuántico) |
| Alarmismo barato para venderte miedo | Un manual práctico con checklist aplicable hoy mismo, gratis |
| Un PDF genérico de internet | El primer adelanto del libro oficial de Javier Andrés (publicación noviembre) |

---

### 🔹 SECCIÓN 7 — Segundo formulario

**Título:** Descárgalo ahora. Es 100% gratuito.

**Subtítulo:** Es el primer paso de la higiene del siglo XXI. Como lavarse las manos, pero para el medio invisible que atraviesa tu cuerpo cada segundo.

**Form fields:** Tu nombre / Tu email
**CTA:** Sí, enviadme el manual ahora
**Microcopy:** En menos de 2 minutos lo tendrás en tu bandeja de entrada.

---

### 🔹 SECCIÓN 8 — FAQ

**Título:** Preguntas frecuentes

**P1: ¿De verdad el wifi o el móvil pueden afectar a la salud?**
La OMS/IARC clasifica los campos electromagnéticos de radiofrecuencia como posiblemente carcinógenos (Grupo 2B). El informe de Miller et al. (2022) demuestra que las normas actuales de la FCC e ICNIRP se basan en 14 suposiciones erróneas que ignoran 30 años de evidencia sobre efectos no térmicos. Todo esto está documentado y referenciado en el manual.

**P2: ¿Necesito comprar algún aparato para aplicar lo que explica?**
No. La mayor parte del manual son cambios de hábito y configuración que no cuestan nada: apagar dispositivos por la noche, reubicar el router, modo avión cuando duermes, higiene lumínica. Las soluciones tecnológicas (como SPIRO) se explican como opción para quien quiera ir más allá, pero no son obligatorias.

**P3: ¿Esto es solo para personas con hipersensibilidad electromagnética?**
No. Está pensado para tres perfiles: personas con síntomas inexplicables, familias que quieren proteger a sus hijos, y profesionales sanos que quieren prevención real. Lo usan también terapeutas, naturópatas y consultores ambientales como material de formación.

**P4: ¿Quién es Francisco Javier Andrés y por qué confiar en él?**
Es naturópata con más de 14 años acompañando casos de EHS, fundador de Ekio Electrosmog España (la empresa pionera del ámbito hispanohablante en este campo), y trabaja con ingenieros, médicos ambientales y expertos en geobiología. El manual cita más de 20 referencias científicas revisadas por pares.

**P5: ¿Qué pasa después de que descargue el manual?**
Recibirás el PDF en tu email al instante. En los días siguientes te enviaremos contenido práctico complementario sobre cómo medir tu hogar y reducir la exposición. Puedes darte de baja en un clic cuando quieras.

---

### 🔹 FOOTER

> © 2026 Ekio Electrosmog España · [Política de privacidad] · [Aviso legal] · [Contacto]
>
> *Tus datos están protegidos según el RGPD. No se ceden a terceros.*

---

### 🔹 THANK YOU PAGE

**H1:** ✅ ¡Listo! Tu manual está volando hacia tu email
**Subtítulo:** Mientras llega, te invitamos al siguiente paso…

**Bloque oferta:**
> ### ¿Quieres saber cómo está exactamente tu hogar?
>
> El manual te da la teoría. Una **valoración técnica profesional** te da los datos reales de tu casa: campos ELF, RF, voltaje corporal inducido, electricidad sucia.
>
> **[ Reserva tu cita de valoración con un técnico Ekio → ]**
>
> *Primera consulta sin compromiso.*

---

## 11. CHECKLIST FINAL ANTES DEL HANDOFF

- [ ] Mockup 3D del PDF entregado
- [ ] Foto profesional de Javier integrada
- [ ] 8 iconos de capítulos en SVG
- [ ] Cifras "AJUSTAR" sustituidas por valores reales
- [ ] Diseño mobile + desktop validados
- [ ] Thank-you page diseñada
- [ ] OG image para compartir
- [ ] Velocidad < 1MB total
- [ ] Contraste WCAG AA verificado
- [ ] Formulario con todos los tracking events
- [ ] Cookies banner consent mode v2

---

## 12. CONTACTO Y VALIDACIONES

**Cliente:** Francisco Javier Andrés — Director Ekio Electrosmog España
**Email:** [añadir]
**Validaciones requeridas antes del handoff a dev:**
1. ✅ Wireframe low-fi (Javier valida estructura)
2. ✅ Mockup 3D del PDF (Javier valida estética)
3. ✅ Diseño high-fi mobile (Javier valida tono y jerarquía)
4. ✅ Diseño high-fi desktop (Javier valida)

---

**FIN DEL BRIEF — v1**
