# DATAROOM — NARRATIVA DE VALORACIÓN PARA INVERSOR

> **Este documento NO se lleva a escritura notarial.** Es el material que sostiene la valoración pre-money con la que se negocia la ronda de inversión (SODICAL + ENISA + equity privado). Aquí vive el valor real del negocio que el PGC prohíbe activar en balance (fondo de comercio autogenerado, cartera de clientes, marca personal, know-how), pero que un inversor sí paga.
>
> **Fecha:** 2026-06-29. **Autor:** sociedades-espana-agent para Francisco Javier Andrés Andrés.

---

## 1. POR QUÉ ESTE DOCUMENTO EXISTE (Y NO EL BALANCE)

Los documentos de valoración externos que ha recibido Javier (`Documento provisional de valoración de activos` con 1.526.605 € brutos, y `Informe Detallado de Valoración de una Base de Datos de Clientes` con 220-240 k€ por BBDD) proponen **activar en la escritura** cifras que el PGC español **prohíbe expresamente activar** cuando son de origen autogenerado:

- **PGC NRV 5ª apartado 1.a):** *"En ningún caso podrá reconocerse un fondo de comercio generado internamente"*.
- **PGC NRV 5ª apartado 2:** los intangibles autogenerados (listas de clientes, marca comercial no derivada de adquisición, cartera de leads) NO son activables como activo separado.
- **Régimen FEAC (art. 78 LIS):** los elementos aportados conservan su valor fiscal para el aportante. Una lista de clientes autogenerada tiene valor fiscal cero para el autónomo → entra a la SL con valor fiscal cero aunque contablemente se le pretenda dar más.

**Consecuencias de forzar la activación en balance:**
1. Responsabilidad solidaria de los socios fundadores por 5 años ante la diferencia entre valor declarado y valor real (arts. 73-77 LSC).
2. Riesgo alto de comprobación de valores AEAT e impugnación.
3. Obligación de test de deterioro anual → probables pérdidas contables en años siguientes → cuentas sucias antes de la ronda.
4. Bandera roja en due diligence inversora (un inversor sofisticado sabe leer un balance con fondo de comercio autogenerado gordo y desconfía).

**Vía profesional (la que se usa aquí):**
1. Balance de escritura limpio → activos aportados **~53.005 €**, patrimonio neto **+36.276 €** (ver `01_inventario_realista_para_escritura.md`).
2. Dataroom con la valoración inversora — **este documento**.
3. Ronda de inversión: el valor real se refleja en la **prima de emisión** de las nuevas participaciones que suscriben los inversores.

Balance limpio + narrativa fuerte + prima de emisión. Es el patrón estándar de startups tech serias.

---

## 2. VALORACIÓN COMERCIAL BLOQUE A BLOQUE (PARA DATAROOM)

### 2.1. Base de datos y cartera de clientes

Aplicando los dos métodos del documento `Informe Detallado Valoración BBDD` que aportó Javier, adaptados a las cifras reales de Ekio (7.600 clientes, 12.400 contactos, 3.800 WhatsApp, 2.500 encuestas cualificadas, 40.000 seguidores IG).

#### Método A — Coste de reposición (Cost Approach)

**Fórmula:** Valor BBDD = Nº registros × CAC aplicable por segmento.

| Segmento | Cantidad | Coste unitario estimado | Valor |
|---|---|---|---|
| Clientes activos (compra últimos 12 m) | ~2.000 (estimación) | 35 € CAC ecommerce especializado paneles/CEM | 70.000 € |
| Clientes históricos (compra > 12 m) | ~5.600 (7.600 - 2.000) | 35 € CAC completo | 196.000 € |
| Contactos calientes no-clientes (leads Klaviyo) | ~4.800 (12.400 - 7.600) | 5 € CPL medio | 24.000 € |
| Contactos WhatsApp opt-in | 3.800 | 3 € coste captación | 11.400 € |
| Encuestas científicas cualificadas | 2.500 | 12 € coste captación + valor diagnóstico | 30.000 € |
| **VALOR TOTAL BBDD método coste** | **18.700** registros | | **~331.400 €** |

> **Nota:** el CAC de 35 € es una estimación conservadora para ecommerce especializado. Si Ekio calcula su CAC real desde datos históricos de Google Ads + Meta Ads + Klaviyo, la cifra puede subir a 50-80 €/cliente (típico en nichos especializados de bienestar). Con CAC real de 60 € el valor total sube a ~500 k€.

#### Método B — Ingresos históricos (Income Approach / VAN LTV)

**Hipótesis operativas para Ekio** (basadas en I1-I2 aportado por Javier):

- Clientes activos base año 1: 2.000
- Ticket medio anual por cliente activo: 200 € (dato conservador; hay que refinar con analytics-agent extrayendo Shopify)
- Margen neto: 40 % (margen bruto 50 % menos costes operativos y logística; sin marketing porque los clientes ya están captados)
- Beneficio por cliente/año: 80 €
- Tasa de retención año a año: 30 % (bajo, ecommerce de bienestar no es SaaS)
- Tasa de descuento WACC: 12 % (referencia PYME no cotizada 10-15 %)

| Año | Clientes activos (retención 30 %) | Beneficio total (80 € × clientes) | Factor descuento (12 %) | VAN año |
|---|---|---|---|---|
| Año 1 | 2.000 | 160.000 € | 0,892 | 142.720 € |
| Año 2 | 600 | 48.000 € | 0,797 | 38.256 € |
| Año 3 | 180 | 14.400 € | 0,711 | 10.238 € |
| Año 4 | 54 | 4.320 € | 0,635 | 2.743 € |
| Año 5 | 16 | 1.296 € | 0,567 | 735 € |
| **TOTAL VAN** | | | | **~194.692 €** |

> **Nota:** con hipótesis más agresivas (retención 40 %, ticket medio 250 €), el VAN sube a 350-400 k€. Con hipótesis más conservadoras (retención 20 %, ticket 150 €), baja a 120-150 k€.

#### Rango defendible para dataroom

**BBDD Ekio: 200.000 - 300.000 € rango realista** por ambos métodos. Coherente. Cifra a usar en negociación con inversor.

**Requisito legal imprescindible** (recordatorio del documento externo, que aquí sí es válido): la BBDD debe cumplir estrictamente el RGPD:
- Registro de consentimientos (opt-ins) documentado.
- Política de privacidad vigente y coherente.
- Registro de actividades de tratamiento.
- Comunicación a los 12.400 usuarios del cambio de responsable de tratamiento (autónomo → Ekio BioTech S.L.) o re-confirmación de consentimiento.
- Renegociación de acuerdos de encargado de tratamiento con Klaviyo, Shopify, ManyChat, Meta a nombre del nuevo CIF.

---

### 2.2. Marcas registradas (excluyendo EKO WiFi, que se reserva)

**Método de valoración para dataroom: royalty relief**. Un titular de marca ahorra el royalty que pagaría por usarla si no la tuviera.

Estimación conservadora:
- Facturación anual Ekio: ~600.000 €
- Royalty implícito atribuible al valor de marca: 3-5 % (referencia sectorial ecommerce bienestar)
- Royalty anual imputable: 18.000 - 30.000 €
- Valor VAN 5 años al 12 %: **~65.000 - 108.000 €**

**Rango defendible dataroom marcas EKIO LIGHT + EKIO Electrosmog: 50.000 - 100.000 €**.

(A escritura solo entran 1.500 € — coste de registro. Diferencia = valor de marca autogenerada, va al dataroom.)

---

### 2.3. IP — Modelo de utilidad U202532624 + PCT en preparación

**Método:** valoración por royalty relief y comparables sectoriales.

- MU concedida + PCT en preparación (157 países cubiertos).
- Valor estratégico: barrera de entrada, defensibilidad frente a competidores, base para escalar Ekio Light internacionalmente.
- Comparables sectoriales: patentes de fotobiomodulación en el rango 50.000 - 250.000 € para MUs sin explotación comercial masiva; 250.000 - 1.000.000 € con explotación acreditada.

**Rango defendible dataroom IP: 100.000 - 250.000 €** (con MU + PCT presentado + primeras evidencias de explotación).

(A escritura solo entra 1.750 € — coste incurrido. Diferencia va al dataroom.)

**Nota importante:** este rango puede refinarse encargando un **informe pericial de valoración** (2-5 k€). Javier ha decidido NO encargarlo por ahora (C3). Cuando se acerque la ronda, es recomendable encargarlo para tener un número respaldado por experto ante el inversor.

---

### 2.4. Software EKIO Coach + EKIO APP + App con IA (AIR Institute)

**Estado actual:** software incipiente (4 h de desarrollo Cristian, coste 350 €). App con IA con AIR Institute en desarrollo con contrato de cotitularidad.

**Valor dataroom:** limitado hoy por estado incipiente. Su valor emerge cuando:
- EKIO Coach se lance y capte usuarios (lead magnet + fidelización).
- EKIO APP consolide procesos CRM internos y mejore eficiencia operativa.
- App con IA con AIR Institute termine desarrollo y demuestre personalización.

**Rango defendible dataroom: 20.000 - 50.000 €** (valor de opción tecnológica más que valor actual).

---

### 2.5. Ecommerce, tienda Shopify e infraestructura digital

**Método:** valor de una tienda operativa con histórico comercial y posicionamiento.

- Tienda Shopify con 3 años de tráfico e histórico transaccional.
- Tema Dawn personalizado + integración Klaviyo, ManyChat, Meta Pixel, Google Analytics, Merchant Center.
- Dominios especializados posicionados.
- Píxeles y audiencias entrenadas con datos históricos.

**Comparables:** tiendas Shopify similares con la misma facturación se venden en el rango 0,5-1x facturación anual → 300.000 - 600.000 € para Ekio.

**Rango defendible dataroom ecommerce completo: 250.000 - 500.000 €**.

(A escritura solo entran 4.500 € — coste histórico documentado. Diferencia va al dataroom.)

---

### 2.6. Cuentas publicitarias, RRSS y ecosistema digital

**Método:** valor de las cuentas por su histórico, audiencias entrenadas y capacidad de generación de ventas.

- Instagram 40.000 seguidores + 800 publicaciones (autoridad sectorial acumulada).
- Google Ads con histórico de conversiones y audiencias.
- Meta Ads con píxel, CAPI, audiencias custom, look-alikes entrenados.
- Klaviyo con automatizaciones, flows, segmentaciones y KPI históricos.
- ManyChat con secuencias operativas conectadas a IG y WhatsApp.
- Merchant Center con catálogo optimizado.

**Rango defendible dataroom: 80.000 - 150.000 €**.

---

### 2.7. Contratos comerciales y proveedores

- Contrato distribución **Noxtak (Spiro España)** — activo estratégico crítico. Continuidad de línea de negocio.
- Acuerdo fabricación **AzurTherapy** + 2 fabricantes China para paneles marca propia EKIO Light.
- Contrato con **AIR Institute** para desarrollo IA (cotitularidad software).

**Rango defendible dataroom: 100.000 - 200.000 €** (contratos con exclusividad y años de recorrido).

---

### 2.8. Know-how, marca personal y capital reputacional (Javier)

- 15 años (desde 2011) construyendo metodología propia en electromagnetismo aplicado a bienestar.
- Autoridad sectorial acreditada (charlas, formaciones, colaboración con AIR Institute).
- Marca personal como referente en España en contaminación electromagnética y fotobiomodulación.
- Formación acumulada en marketing digital, SEO, IA, comunicación (Vilma Núñez, Eugenio Ller y otros).
- Formación específica en electrosmog con Joaquín Machado (Noxtak).

**Rango defendible dataroom: 200.000 - 400.000 €** (know-how específico difícilmente replicable + track record de facturación 1,8 M€ en 3 años que demuestra que el conocimiento produce ingresos).

---

## 3. VALORACIÓN CONSOLIDADA PARA DATAROOM

| Bloque | Rango dataroom | Método principal |
|---|---|---|
| BBDD y cartera clientes | 200.000 - 300.000 € | Coste reposición + VAN ingresos |
| Marcas (EKIO LIGHT + EKIO Electrosmog) | 50.000 - 100.000 € | Royalty relief |
| IP (MU + PCT) | 100.000 - 250.000 € | Comparables + royalty relief |
| Software | 20.000 - 50.000 € | Coste desarrollo + valor de opción |
| Ecommerce completo | 250.000 - 500.000 € | Comparables ventas de tiendas |
| RRSS + cuentas publicitarias | 80.000 - 150.000 € | Comparables + coste replicación |
| Contratos comerciales | 100.000 - 200.000 € | Valor de continuidad + royalty implícito |
| Know-how y marca personal | 200.000 - 400.000 € | Comparables consultoría sectorial + track record |
| **RANGO TOTAL DATAROOM** | **1.000.000 - 1.950.000 €** | |

**Rango que un inversor sofisticado consideraría razonable en la ronda seed:**
- **Baja gama (conservador):** 800 k€ - 1 M€ pre-money.
- **Media gama (target):** 1,2 - 1,5 M€ pre-money.
- **Alta gama (ambicioso, exige que Javier lo sostenga con métricas y proyecciones):** 1,5 - 2 M€ pre-money.

---

## 4. LÓGICA DE LA OPERACIÓN CON EL INVERSOR

**Objetivo Javier (arquitectura cerrada + prioridades financiación):**
- SODICAL 200 k€ Q4 2026
- ENISA 200 k€ Q1-Q2 2027
- Equity privado: ~400 k€
- **Total ronda: ~800 k€**

**Ejemplo numérico con valoración pre-money 1,2 M€ (target):**

| Concepto | Importe |
|---|---|
| Valoración pre-money Ekio BioTech | 1.200.000 € |
| Ronda captada | 800.000 € |
| Valoración post-money | 2.000.000 € |
| Participación inversores (todos suman) | 40 % (800 k / 2.000 k) |
| Participación Javier vía Ekio Holdings | 60 % |

**Estructura en la ampliación de capital:**
- Capital social inicial Ekio BioTech: 10.000 €.
- Ampliación de capital para inversores: por ejemplo 6.667 € nominal más **793.333 € de prima de emisión**.
- Después de la ampliación: capital nominal 16.667 €, prima de emisión 793.333 €.
- **La prima de emisión captura los 793 k€ de valor que los inversores reconocen y que NO están en el balance inicial de Javier.**

---

## 5. QUÉ NECESITA VER EL INVERSOR EN EL DATAROOM

Este documento es la síntesis. La carpeta completa del dataroom debe incluir:

- [ ] **Métricas Shopify reales** de los últimos 24 meses (facturación mensual, AOV, tasa recompra, cohort analysis). Pendiente: extraer con `analytics-agent` de Shopify.
- [ ] **Métricas Klaviyo**: open rate, click rate, conversión por flujo, tamaño y segmentación de listas, LTV por segmento.
- [ ] **Métricas Google Ads + Meta Ads**: ROAS histórico, CAC real por canal, top audiencias.
- [ ] **P&L de los últimos 3 años** del autónomo (Holded o extractos oficiales).
- [ ] **Proyecciones financieras 3-5 años** con hipótesis explícitas.
- [ ] **Roadmap producto e IP**: MU, PCT, SRBA, app con IA (partner AIR Institute).
- [ ] **Cap table pro-forma** post-constitución + post-ronda (Ekio Holdings + Ekio BioTech + inversores + phantom equity 3 colaboradoras).
- [ ] **Team**: perfiles Javier, Cristian, freelances, phantom equity advisory (Marta, José Luis, Rosario).
- [ ] **Contratos clave**: Noxtak (distribución), AzurTherapy + fabricantes China (fabricación), AIR Institute (partner IA).
- [ ] **Certificados administrativos**: al corriente AEAT + SS, marcas OEPM concedidas, MU U202532624 título original.
- [ ] **Trayectoria y autoridad sectorial**: apariciones públicas, charlas, formaciones, casos de éxito.
- [ ] **Este documento (`02_dataroom_narrativa_inversor.md`)** como síntesis de la valoración cualitativa.

---

## 6. NOTA SOBRE LOS DOCUMENTOS DE VALORACIÓN EXTERNOS APORTADOS POR JAVIER

Javier ha recibido dos documentos externos con propuestas de valoración:

**Doc A — "Documento provisional de valoración de activos, pasivos, intangibles y estructura empresarial" (1.526.605 € brutos / 1.396.605 € netos):**
- ✅ Valioso como inventario operativo exhaustivo (13 bloques, activos y pasivos identificados).
- ❌ Propone activar en escritura fondo de comercio autogenerado (600 k€ know-how, 220 k€ BBDD, 158 k€ contratos, 95 k€ equipo). Todo eso **NO se puede activar en balance** por PGC.
- ❌ Peligroso si se lleva al notario sin filtrar: responsabilidad solidaria + impugnación AEAT + bandera roja DD.
- **Uso correcto:** las cifras que propone son coherentes con el rango dataroom (~1 M€ − 1,5 M€). Su lugar natural es este documento, NO la escritura.

**Doc B — "Informe Detallado Valoración de una Base de Datos de Clientes" (220-240 k€ para BBDD):**
- ✅ Metodología correcta (coste de reposición + VAN de ingresos).
- ✅ Referencias a CAC sectoriales y LTV estándar.
- ✅ Requisito RGPD imprescindible bien identificado.
- ❌ Comete un error técnico crítico al proponer "usar el método de coste de reposición como justificación objetiva ante tu asesor fiscal para calcular el Fondo de Comercio" en la constitución de la SL: confunde fondo de comercio **adquirido** (activable) con fondo de comercio **autogenerado** (prohibido activar, NRV 5ª PGC).
- **Uso correcto:** los métodos son válidos para dataroom, no para escritura. Los resultados (220-300 k€ para BBDD Ekio) están incorporados en este documento en la sección 2.1.

**Conclusión:** los dos documentos externos aportados no se descartan; se **recolocan** donde sí sirven — el dataroom del inversor — y se retiran de la valoración de escritura.

---

## ADVERTENCIA

Este documento es material de trabajo para preparar la ronda de inversión y las conversaciones con SODICAL, ENISA y equity privado. **No sustituye** una valoración pericial independiente encargada a un experto (recomendable en la fase pre-ronda para tener un número respaldado por firma tercera). Los rangos aquí propuestos son **defendibles** con los datos disponibles, pero cada inversor aplicará sus propios múltiplos y descuentos.
