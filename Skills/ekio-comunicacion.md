---
name: ekio-comunicacion
description: >
  Skill de creación de contenido de comunicación para EKIO usando NotebookLM como fuente
  de verdad. Úsalo para crear posts de Instagram, emails, copy de producto, guiones de vídeo,
  artículos de blog, newsletters, scripts WhatsApp/ManyChat, FAQs, argumentarios de venta
  y textos para landing pages. Siempre consulta los notebooks antes de generar contenido.
  Aplica cuando el usuario pida contenido basado en documentos internos de EKIO, diga
  "usando mis notebooks", "según nuestros documentos", o quiera que el contenido sea
  fiel a las fuentes internas de la empresa.
---

# EKIO Comunicación — Skill de Contenido con NotebookLM

## Principio fundamental

**Consultar NotebookLM SIEMPRE antes de escribir.** No inventar datos, claims ni argumentos
que no estén respaldados por las fuentes internas de EKIO.

---

## PASO 1: Consultar los notebooks

```bash
# Listar todos los notebooks disponibles
cd ~/.claude/skills/notebooklm && python3 scripts/run.py notebook_manager.py list

# Buscar notebook por tema
python3 scripts/run.py notebook_manager.py search --query "SPIRO mecanismo"

# Preguntar al notebook relevante
python3 scripts/run.py ask_question.py \
  --question "Tu pregunta específica" \
  --notebook-id [ID]

# Preguntas de seguimiento si faltan datos
python3 scripts/run.py ask_question.py \
  --question "Dame más detalle sobre [aspecto]" \
  --notebook-id [ID]
```

Continuar hasta tener información suficiente. Cada respuesta de NotebookLM es independiente
(nueva sesión de navegador), así que incluir contexto en cada pregunta.

---

## PASO 2: Crear el contenido por canal

### Instagram / Redes Sociales
- **Estructura:** Hook impactante → Desarrollo 3-5 puntos → CTA claro
- **Línea 1:** Dato sorprendente o pregunta disruptiva (lo más importante)
- **Tono:** Educativo + inspiracional, nunca agresivo ni vendedor
- **Claims:** Solo los respaldados por los notebooks
- **Longitud:** 150-300 palabras para carrusel, 80-120 para post simple
- **Hashtags:** #electrosmog #saludEMF #EKIO #proteccionEMF #bienestar

### Email / Newsletter
- **Subject:** Curiosidad o problema + promesa implícita de solución
- **Estructura:** Historia → Problema → Solución (EKIO) → Prueba social → CTA único
- **Longitud:** 200-400 palabras newsletters, 100-200 promocionales
- **Personalización:** Usar nombre cuando sea posible, segmentar por producto de interés

### Copy de Producto / Landing Page
- **Headline:** Beneficio principal, no característica técnica
- **Estructura:** Headline + subheadline + beneficios (no características) + prueba social + CTA
- **Objeciones:** Precio, efectividad, necesidad — tratar todas en el copy
- **Urgencia:** Solo si hay razón real (stock bajo, oferta temporal verificada)
- **Garantía:** Incluir siempre condiciones reales de devolución

### WhatsApp / ManyChat Scripts
- **Tono:** Conversacional, como un amigo experto, nunca comercial
- **Longitud:** Mensajes cortos (máx. 160 caracteres idealmente)
- **Estructura:** Pregunta de calificación → Empatía → Información relevante → CTA suave
- **Emojis:** Usar con moderación, solo los que refuercen el mensaje

### Blog / Contenido Educativo
- **SEO:** Keyword principal en H1, H2/H3 con variaciones, meta description 155 chars
- **Longitud:** 800-1.500 palabras
- **Estructura:** Intro con hook → Problema → Solución educativa → EKIO como ejemplo → CTA
- **Fuentes:** Citar datos del notebook; nunca inventar estudios o estadísticas

### Argumentario de Ventas / FAQs
- **Formato:** Pregunta del cliente → Respuesta empática → Explicación técnica → Beneficio concreto
- **Objeciones comunes EKIO:**
  - "Es muy caro" → ROI en salud, coste del problema sin resolver, opción alquiler Sharpei
  - "No tengo claro si funciona" → Evidencia del notebook, garantía de prueba
  - "¿Por qué EKIO y no otra marca?" → Diferenciadores reales del notebook

### Guión de Vídeo
- **Estructura:** Hook 3s → Problema 10s → Promesa 5s → Contenido → CTA 10s
- **Tono:** Directo, sin relleno, cada frase cuenta
- **Subtítulos:** Escribir para ser entendido sin audio

---

## Reglas de comunicación EKIO (inamovibles)

| Regla | Detalle |
|---|---|
| **Sin claims médicos** | Usar "puede contribuir a", "diseñado para", nunca "cura" o "trata" |
| **Fuentes primero** | Si no está en el notebook, no lo afirmes |
| **Educación primero** | EKIO vende educando, no presionando |
| **Precio sin disculpas** | Justificar con valor, no rebajar el precio psicológicamente |
| **Comunidad** | EKIO es estilo de vida consciente, no solo producto |
| **Ciencia accesible** | Dato técnico → traducción a beneficio cotidiano |

---

## Notebooks de EKIO disponibles (25 fuentes)

Los notebooks cubren el conocimiento interno completo de EKIO. Ver lista actualizada:
```bash
cd ~/.claude/skills/notebooklm && python3 scripts/run.py notebook_manager.py list
```

Temas cubiertos típicamente: tecnología SPIRO, Ekio Light (PBM), argumentarios de venta,
electrosmog y salud, estrategia de marketing, FAQs de clientes, protocolos de uso,
formación del equipo comercial, casos de éxito.

---

## Integración con otras skills

| Canal destino | Skill a combinar |
|---|---|
| Fichas de producto Shopify | `shopify-cro` |
| Emails y flows Klaviyo | `klaviyo-cro` |
| Instagram DM / WhatsApp | `manychat-cro` |
| Blog / SEO | `shopify-seo-geo` |
| Calendarios editoriales | `marketing:content-creation` |
| Secuencias email multi-paso | `marketing:email-sequence` |
