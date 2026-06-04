# FASE 4 — Especificación de figuras para ilustrador técnico de patentes
# PCT EKIO Bienestar S.L. — Sistema SRBA
# Versión v0.1 — 2026-06-04

---

## INSTRUCCIONES GENERALES PARA EL ILUSTRADOR

### Cumplimiento normativo

Las figuras se entregarán en formato y estilo conforme a los estándares
de las oficinas receptoras de la PCT, con foco en EPO (ISA propuesta) y
fase nacional USPTO, CNIPA, JPTO, KIPO.

**Normas USPTO (37 CFR 1.84):**
- Tinta india negra sobre fondo blanco, sin escala de grises ni
  sombreados.
- Líneas continuas para contornos visibles, discontinuas para elementos
  ocultos o referencias.
- Texto en mayúsculas, sans-serif (Arial / Helvetica). Tamaño mínimo
  de texto 3,2 mm en figuras a escala final.
- Signos de referencia en arábigos, alineados con la entidad referida.
- Una sola vista por figura, salvo cuando se enumeran explícitamente
  (Fig. 5A, 5B, etc.).
- Sin fotografías, sin texturas, sin colores.

**Normas EPO (Reglas 46-49 RIEPC):**
- Mismas reglas que USPTO en general.
- Numeración de figuras consecutiva (FIG. 1, FIG. 2, ...).
- Bordes mínimos: 2,5 cm superior, 2,5 cm izquierdo, 1,5 cm derecho,
  1 cm inferior.

**Normas CNIPA (Reglas 18-21 Implementing Regulations):**
- Mismas reglas en general.
- Texto en caracteres simplificados chinos requerirá traducción posterior
  para la fase nacional china; el borrador internacional puede entregarse
  en inglés.

### Consistencia de signos de referencia

Todos los signos de referencia siguen la tabla consolidada de la
memoria descriptiva v0.1, §5.2. Cada elemento usa el mismo número en
todas las figuras y en el texto de los claims y la memoria. **No
cambiar bajo ninguna circunstancia.**

### Idioma del texto de las figuras

Las figuras se entregarán inicialmente en español; traducción al inglés
para filing PCT a cargo del agente. Etiquetas mínimas, evitando texto
narrativo dentro de la figura. Preferir signos de referencia + leyenda
externa.

---

## FIGURA 1 — Diagrama de bloques del sistema (100)

### Propósito

Mostrar la arquitectura global del sistema, identificando los cuatro
nodos principales (dispositivo de emisión, dispositivo electrónico
externo, dispositivos vestibles, servidor remoto) y sus interconexiones
funcionales.

### Estilo

Diagrama de bloques rectangular. Cada nodo es una caja rectangular con
contorno simple. Las interconexiones son líneas con flechas
unidireccionales o bidireccionales según corresponda. Sin sombreado.

### Composición sugerida

Una vista en planta única, formato apaisado, dividida en cuatro
cuadrantes:

- **Cuadrante superior izquierdo:** dispositivo de emisión (110)
  representado como una caja rectangular grande con sub-cajas internas:
  - (112) panel de emisión multiespectral
  - (120) unidad de procesamiento (sub-cajas internas: 122 procesador,
    123 NPU, 124 memoria)
  - (126) módulo de comunicación inalámbrica
  - (128) pantalla OLED + interfaz
  - (130) matriz de sensores no invasivos (con sub-elementos 132, 134,
    138)
  - (140) módulo de calibración automática
  - (116) módulo LED central

- **Cuadrante superior derecho:** dispositivo electrónico externo (150)
  representado como un teléfono inteligente estilizado, con etiqueta
  interna (152) "aplicación móvil".

- **Cuadrante inferior izquierdo:** dispositivos vestibles (160) — tres
  iconos minimalistas de reloj, anillo y banda, agrupados con la etiqueta
  (160). Etiqueta (162) "APIs HealthKit / Google Health / Oura".

- **Cuadrante inferior derecho:** servidor remoto (170) representado
  como una caja rectangular con sub-cajas internas:
  - (172) motor de IA
  - (174) base de datos histórica longitudinal
  - (176) módulo de aprendizaje federado
  - (178) módulo de gestión de flota

### Interconexiones

- (110) ↔ (150): doble flecha etiquetada "BLE / WiFi".
- (150) ↔ (160): doble flecha etiquetada "API".
- (150) ↔ (170): doble flecha etiquetada "MQTT/TLS".
- (110) ↔ (170): doble flecha discontinua (opcional, vía
  conexión directa WiFi).

### Notas para el ilustrador

- Mantener la jerarquía visual: el dispositivo de emisión (110) debe
  ocupar el área visual más grande (≈40% del diagrama).
- El servidor remoto (170) debe estar visualmente separado de los
  componentes locales (110, 150, 160) por una línea de demarcación
  etiquetada "CLOUD" o similar.
- Los iconos de wearables deben ser silhouettes minimalistas en línea
  negra, no detalladas.
- Todos los textos en sans-serif mayúsculas.

---

## FIGURA 2 — Diagrama de flujo del método (200)

### Propósito

Mostrar los siete pasos secuenciales del método de control adaptativo
de la reivindicación 16, con énfasis en el bucle de actualización
sesión-a-sesión.

### Estilo

Diagrama de flujo vertical. Cada paso es un rectángulo con bordes
redondeados (o rombo para puntos de decisión). Flechas verticales
indican la secuencia. Bucle final del paso (g) al paso (e) cierra el
ciclo.

### Composición sugerida

Disposición vertical de arriba abajo, formato vertical (portrait):

```
[INICIO]
   ↓
(210) RECIBIR PERFIL DE USUARIO
   ↓
(220) RECIBIR DATOS BIOMÉTRICOS DEL WEARABLE
   ↓
(230) GENERAR PROTOCOLO INICIAL POR MOTOR IA
   ↓
[ROMBO DECISIÓN: ¿BD HISTÓRICA CONTIENE INFORMACIÓN PREVIA?]
   ├─ NO → (232) APLICAR MODELO DE POBLACIÓN (cold-start)
   │           ↓
   └─ SÍ → (234) GENERAR DESDE INFORMACIÓN PREVIA
              ↓
(240) TRANSMITIR PROTOCOLO AL PANEL MULTIESPECTRAL
   ↓
(250) EJECUTAR SESIÓN
   ↓
(260) RECIBIR PARÁMETROS EFECTIVOS + DATOS BIOMÉTRICOS POST-SESIÓN
   ↓
(270) ACTUALIZAR BASE DE DATOS HISTÓRICA LONGITUDINAL
   ↓
(280) GENERAR PROTOCOLO ACTUALIZADO PARA SESIÓN POSTERIOR
   ↓
[FLECHA DE BUCLE QUE RETORNA A (240) PARA LA SIGUIENTE SESIÓN]
```

### Notas para el ilustrador

- La flecha de bucle de retorno debe ser claramente visible, idealmente
  saliendo del lado derecho de la caja (280) y entrando por el lado
  derecho de la caja (240), con etiqueta "BUCLE SESIÓN-A-SESIÓN".
- Los signos de referencia (210, 220, 230...) están reservados a los
  pasos del método y son distintos de los signos de referencia
  estructurales (110, 112, 120...).
- Mantener proporciones uniformes entre rectángulos.

---

## FIGURA 3 — Bucle cerrado de retroalimentación sesión-a-sesión

### Propósito

Ilustrar conceptualmente el bucle cerrado bidireccional entre el
sistema y el usuario, destacando que es la innovación central de la
invención.

### Estilo

Diagrama esquemático circular o en ocho. Cuatro nodos principales
dispuestos en cuadrado o ciclo, con flechas curvas conectándolos.

### Composición sugerida

Layout circular, cuatro nodos dispuestos en las posiciones N, E, S, W
de un círculo conceptual:

- **Norte:** "USUARIO" representado como silhouette humana minimalista.
- **Este:** dispositivos de medición agrupados — wearables (160) +
  matriz de sensores (130).
- **Sur:** base de datos histórica longitudinal (174) — representada
  como cilindro tradicional de base de datos.
- **Oeste:** motor de IA (172) — representado como una caja con
  símbolo de red neuronal estilizado.

Flechas curvas conectan:

1. USUARIO → SENSORES (etiquetada "RESPUESTA FISIOLÓGICA")
2. SENSORES → BD LONGITUDINAL (etiquetada "REGISTRO DE DATOS")
3. BD LONGITUDINAL → MOTOR IA (etiquetada "ESTADO ACTUAL")
4. MOTOR IA → USUARIO via PANEL (etiquetada "PROTOCOLO ACTUALIZADO")

Una flecha central, vertical, conecta el panel de emisión (112)
representado en el centro del círculo, hacia el USUARIO arriba,
indicando "EMISIÓN LUMINOSA MULTIESPECTRAL".

### Notas para el ilustrador

- Este diagrama es **conceptual** y se permite cierta libertad
  artística. Mantener la sobriedad de la línea negra.
- El bucle debe leerse claramente como cerrado y bidireccional.
- Etiquetas mínimas; las explicaciones detalladas están en la memoria.

---

## FIGURA 4 — Arquitectura interna del motor de inteligencia artificial (172)

### Propósito

Mostrar los cuatro subsistemas del motor IA y sus interconexiones,
soportando la sección §7 de la memoria sobre arquitectura del motor.

### Estilo

Diagrama de bloques con cajas anidadas. Subsistemas como rectángulos,
flujos de datos como flechas etiquetadas.

### Composición sugerida

Una caja exterior grande etiquetada (172) "MOTOR DE IA". Dentro, cuatro
sub-cajas dispuestas en cuadrícula 2×2:

- **Arriba izquierda:** "MODELO MULTIESCALA DEL USUARIO" — sub-cajas
  internas:
  - (172a) capa macroscópica
  - (172b) capa fisiológica
  - (172c) capa tisular (Monte Carlo)
  - (172d) capa celular / circadiana

- **Arriba derecha:** "ALGORITMO DE APRENDIZAJE POR REFUERZO (RL)" —
  diagrama de bloques internos:
  - estado s_t
  - acción a_t
  - política π
  - función de recompensa r_t
  - actualización política

- **Abajo izquierda:** "MÓDULO DE CRONOBIOLOGÍA COMPUTACIONAL" — caja
  simple con etiquetas "ESTIMACIÓN FASE CIRCADIANA".

- **Abajo derecha:** "MÓDULO DE APRENDIZAJE FEDERADO (176)" — caja
  simple con etiquetas internas "GRADIENTES LOCAL → AGREGACIÓN SEGURA
  → MODELO GLOBAL".

### Flujos entre subsistemas

- Flecha desde MODELO MULTIESCALA hacia RL (etiquetada "ESTADO").
- Flecha desde RL hacia OUTPUT externo del motor (etiquetada
  "PROTOCOLO ACTUALIZADO").
- Flecha desde CRONOBIOLOGÍA hacia MODELO MULTIESCALA capa
  fisiológica.
- Flecha desde RL hacia FEDERADO (etiquetada "GRADIENTES").
- Flecha desde FEDERADO hacia RL (etiquetada "MODELO GLOBAL
  ACTUALIZADO").

### Inputs/outputs del motor

A la izquierda de la caja (172):
- entrada "PERFIL DE USUARIO".
- entrada "DATOS BIOMÉTRICOS WEARABLE" (de 160).
- entrada "MEDIDAS SENSORES" (de 130).

A la derecha de la caja (172):
- salida "PARÁMETROS PANEL MULTIESPECTRAL" (a 112).
- salida "RECOMENDACIONES UI" (a 152).

### Notas para el ilustrador

- Esta figura puede ser visualmente densa; priorizar legibilidad sobre
  exhaustividad.
- Las sub-cajas internas pueden representarse sólo como rectángulos
  vacíos con etiqueta para no saturar.
- Mantener jerarquía visual: la caja exterior (172) debe ser
  claramente el contenedor.

---

## FIGURA 5 — Panel de emisión multiespectral (112)

### Propósito

Mostrar la configuración física del panel, las zonas independientes
(113), la disposición de los LEDs (114) por longitud de onda, y la
posición del módulo LED central (116) y el fotodiodo (138).

### Estilo

Vista en planta del panel, con representación esquemática de los LEDs
como pequeños círculos numerados. Sin perspectiva 3D — vista 2D plana.

### Composición sugerida

Vista en planta de un rectángulo (representando el panel 60 × 40 cm
de la realización preferente), dividido visualmente en 12 zonas (113)
mediante líneas discontinuas de demarcación, en una cuadrícula 4 × 3.

Cada zona contiene una distribución representativa de LEDs (114),
mostrados como círculos pequeños etiquetados con la longitud de onda
correspondiente:

- 295, 385, 405 → grupo UV-A/UV-B (esquina superior izquierda de cada
  zona).
- 485 → cian (esquina superior derecha).
- 630, 670 → rojo y rojo profundo (centro).
- 727, 850, 935, 1050 → NIR (esquina inferior).

En el centro geométrico del panel, una caja rectangular destacada
representa el módulo LED central (116), con etiquetas internas para
las cinco longitudes de alta potencia (670, 727, 850, 935, 1050 nm).

En las cuatro esquinas del panel, posicionar:
- (138) fotodiodos de referencia (uno por esquina).
- (132) sensores NIRS (uno por esquina, distinguidos visualmente del
  138).

En la parte superior e inferior del panel:
- (134) termopilas de temperatura sin contacto (una superior, una
  inferior).

### Vista complementaria (opcional, Figura 5B)

Vista en sección lateral / corte transversal del panel mostrando:
- Carcasa de aluminio anodizado.
- Substrate PCB con LEDs.
- Difusor PMMA cubriendo los LEDs.
- Sistema de ventilación interna.
- Fotodiodo (138) ópticamente acoplado al panel mediante una guía de
  luz lateral.

### Notas para el ilustrador

- No es necesario representar los 12 LEDs ×10 longitudes = 120 LEDs
  individuales por zona; basta con representación esquemática de unos
  pocos LEDs etiquetados por zona.
- Las líneas de demarcación entre zonas (113) deben ser discontinuas
  para indicar que son agrupaciones lógicas, no físicas.

---

## FIGURA 6 — Arquitectura distribuida cloud

### Propósito

Mostrar la arquitectura del sistema distribuido (claim 22) con una
pluralidad de dispositivos conectados al servidor remoto, soportando
los claims 22, 23, 24, 25 (sostenibilidad / gestión de flota).

### Estilo

Diagrama de bloques con representación de N dispositivos (N=3 o 4
para legibilidad) conectados a un nodo central servidor.

### Composición sugerida

Layout en estrella:

- Centro: caja grande etiquetada (170) "SERVIDOR REMOTO" con
  sub-cajas internas:
  - (172) motor de IA global
  - (174) bases de datos longitudinales (una por usuario, representadas
    como apilamiento de cilindros)
  - (176) módulo de aprendizaje federado
  - (178) módulo de gestión de flota
  - (180) pasaporte digital de producto

- Periferia: tres o cuatro dispositivos de emisión (110), cada uno
  representado como una caja simplificada con etiquetas mínimas.
  Cada dispositivo está numerado (110a, 110b, 110c, 110d) para
  representar la pluralidad.

- Conexiones: cada dispositivo (110*) conecta al servidor remoto (170)
  mediante una doble flecha etiquetada "TELEMETRÍA + OTA".

- En una sub-flecha desde cada dispositivo hacia el módulo de
  aprendizaje federado (176): etiqueta "GRADIENTES ANONIMIZADOS".

- En una sub-flecha desde el módulo federado (176) hacia cada
  dispositivo: etiqueta "MODELO GLOBAL".

### Notas para el ilustrador

- Los dispositivos (110a, 110b, 110c) pueden representarse de forma
  muy simplificada (cajas vacías con etiqueta) para evitar
  redundancia con la Figura 1.
- El servidor remoto (170) debe ser visualmente dominante.
- Considerar añadir una nube estilizada como icono de fondo para
  reforzar el concepto cloud.

---

## FIGURA 7 — Pasaporte Digital de Producto (180)

### Propósito

Visualizar la estructura del Pasaporte Digital de Producto del claim
23, mostrando las cinco categorías de datos almacenadas por
dispositivo.

### Estilo

Diagrama de árbol o estructura tabular. Una caja central etiquetada
(180) "PASAPORTE DIGITAL DE PRODUCTO", con cinco sub-cajas conectadas
abajo en horizontal.

### Composición sugerida

Layout vertical:

- Arriba: una caja etiquetada (110) "DISPOSITIVO N" con un código QR
  estilizado al lado, conectado por flecha hacia abajo a la caja del
  PDP.

- Centro: caja grande (180) "PASAPORTE DIGITAL DE PRODUCTO".

- Abajo: cinco sub-cajas horizontales, una por categoría de datos:
  - (180a) "COMPOSICIÓN DE MATERIALES"
  - (180b) "HUELLA DE CARBONO CICLO DE VIDA"
  - (180c) "HISTORIAL DE USO OPERATIVO"
  - (180d) "HISTORIAL DE MANTENIMIENTO"
  - (180e) "ÍNDICE DE REPARABILIDAD"

- A la derecha del conjunto: una flecha sale hacia "USUARIO FINAL /
  GESTOR DE RESIDUOS" con etiqueta "ACCESO VÍA QR".

- A la izquierda: una flecha entra desde "MÓDULO DE GESTIÓN DE FLOTA
  (178)" con etiqueta "ALIMENTACIÓN AUTOMÁTICA".

### Notas para el ilustrador

- El código QR puede ser un cuadrado con patrón QR genérico
  (estilizado) etiquetado "QR".
- Las cinco categorías deben quedar igualmente espaciadas y con cajas
  del mismo tamaño.

---

## RESUMEN DE FIGURAS Y CORRESPONDENCIA CON CLAIMS

| Figura | Soporta los claims | Soporta secciones memoria |
|---|---|---|
| FIG. 1 | Claim 1 (sistema general) | §5.1, §6 (todos los componentes) |
| FIG. 2 | Claim 16 (método) | §15, §17 |
| FIG. 3 | Claim 1 (i)-(v) bucle cerrado | §3, §4, §17 |
| FIG. 4 | Claims 7, 8, 9, 10, 12 (motor IA) | §7, §8, §9, §10 |
| FIG. 5 | Claims 2, 3, 4, 5, 6 (panel y sensores) | §6.1, §6.2, §6.3 |
| FIG. 6 | Claims 22, 23, 24, 25 (distribuido / flota) | §12, §13, §14 |
| FIG. 7 | Claim 23 (Pasaporte Digital de Producto) | §13 |

---

## ESTIMACIÓN DE COSTE Y CALENDARIO

**Ilustrador técnico de patentes recomendado:** Patricia García debería
poder recomendar ilustradores con los que La Fábrica de Inventos ya
colabora.

**Coste estimado:** 100-200 € por figura conforme a tarifas
estándar de ilustradores técnicos de patentes en España. **Total
estimado para 7 figuras: 700-1.400 €.**

**Lead time típico:** 2-4 semanas para un set de 7 figuras. **Encargar
de inmediato** para no comprometer el filing target de julio 2026.

**Iteraciones:** prever 1-2 rondas de revisión. Las figuras finales
deben ser aprobadas por Patricia García antes de la entrega de los
documentos PCT al filing.

---

## CHECKLIST DE ENTREGA AL ILUSTRADOR

- [ ] Estas especificaciones textuales (este documento).
- [ ] Memoria descriptiva v0.1 (referencia de signos consolidada §5.2).
- [ ] Claim set v0.2 (referencia de qué claim soporta qué figura).
- [ ] Esbozo manual o digital de cada figura (puede ser muy básico —
  el ilustrador es el experto en composición técnica).
- [ ] Acuerdo de confidencialidad firmado con el ilustrador antes de
  compartir cualquier material.
- [ ] Plazo de entrega acordado por escrito.

---

*PCT EKIO Bienestar S.L. — Fase 4 figuras spec v0.1 — Confidencial —
Borrador interno para encargo a ilustrador técnico tras revisión por
Patricia García*
