# SOLICITUD DE PRESUPUESTO — ESPECIFICACIÓN FINAL DE PRODUCTO
## Ekio Light — Core Recovery y Core Beauty
### v2.0 · 20-08-2026

> **Esto es una solicitud de presupuesto sobre la especificación de abajo — no es una orden de compra.** No empezar producción, utillaje ni compra de componentes con base en este documento. Necesitamos su presupuesto formal (precio por unidad, coste de producción de packaging/manual, plazo de entrega y condiciones de pago) antes de hacer un pedido.
>
> Esta especificación reúne el brief técnico que enviamos el 27-07-2026, las respuestas ya confirmadas por la fábrica sobre él, y las respuestas ya confirmadas sobre calidad de LED y datos de irradiancia.

---

## 1. QUÉ QUEREMOS PEDIR

Dos variantes nuevas del dispositivo **Ekio Light Core** que ya nos producen, sobre el mismo chasis:

| Producto | LEDs | Encapsulado | Longitudes de onda | Estado |
|---|---|---|---|---|
| **Core** (actual, solo de referencia — no forma parte de este presupuesto) | 13 | Chip dual | 660 · 850 nm | En producción |
| **Core Recovery** | 13 | Chip triple | 660 · 810 · 940 nm | **Nuevo — pedimos cotización** |
| **Core Beauty** | 13 | Chip triple | 590 · 630 · 670 nm | **Nuevo — pedimos cotización** |

---

## 2. ESPECIFICACIÓN CONFIRMADA

Lo siguiente ya es definitivo. Pedimos que coticen sobre esta especificación tal como está escrita.

### 2.1 Compartido con el Core actual (sin cambios)
- Chasis y molde: 162 × 90 × 45 mm — mismo molde, sin modificaciones.
- 13 emisores LED, misma disposición física en el PCB.
- Batería recargable, carga USB-C.
- Vida útil >20.000 horas.
- Cero flicker visible, baja emisión de campo electromagnético.
- Certificaciones base: RoHS, CE, WEEE.

### 2.2 Confirmado por la fábrica
- Existen ambos encapsulados tri-chip: **660/810/940 nm** y **590/630/670 nm**.
- El PCB soporta **3 canales de driver independientes**.
- Los 3 dies no pueden funcionar a corriente plena simultáneamente; **la potencia máxima del producto es 10 W**, repartida entre dies en modo combinado.
- No hace falta repetir el ensayo CE para la base eléctrica/EMC.
- **Calidad de los LED (marca, consistencia entre lotes, vida útil) y datos de irradiancia (mW/cm² por banda y combinada) — confirmados como satisfactorios.** Gracias.

### 2.3 Core Recovery — especificación
- Longitudes de onda: **660 · 810 · 940 nm**, chip triple, en las 13 posiciones.
- **Modo único**: las tres bandas se encienden siempre juntas — sin selección independiente por banda.
- CW y pulsado a 10 Hz como opciones de modo (aplicadas al conjunto combinado).
- Corte térmico por hardware vía sensor NTC + comparador (umbral exacto por confirmar — ver §4).
- No se aceptan sustituciones sin consulta previa: 810 nm ≠ 800/830 nm; 940 nm ≠ 850/880 nm; nada de LEDs "905 nm" (no existe como LED de precisión).
- **Color de chasis: negro.** Sugerencias bienvenidas si tienen un acabado o tono que quede mejor en este chasis.

### 2.4 Core Beauty — especificación
- Longitudes de onda: **590 · 630 · 670 nm**, chip triple, en las 13 posiciones.
- **Modo único**: las tres bandas se encienden siempre juntas — sin selección independiente por banda, sin niveles de intensidad seleccionables por el usuario.
- Sin infrarrojo (nada de 810, 850, ni ninguna banda por encima de 700 nm).
- Sin azul ni violeta (405, 450, 485 nm).
- Temporizador de autoapagado activado por defecto, que no sea trivial de desactivar para el usuario (tiempo exacto por confirmar — ver §4).
- CW obligatorio; pulsado a 10 Hz opcional.
- **Color de chasis: oro.** Sugerencias bienvenidas si tienen un acabado o tono que quede mejor en este chasis.

### 2.5 Packaging y manuales
- Vamos a diseñar **packaging propio y manual de instrucciones propio para cada modelo** (Core Recovery y Core Beauty). Enviaremos el arte y las especificaciones por separado — esto no es una reutilización de la caja actual del Core.

### 2.6 Nota comercial/regulatoria
- Ambos productos se comercializan como **dispositivos de bienestar**, no como producto sanitario. La documentación del producto no debe contener indicaciones terapéuticas ni clínicas.

---

## 3. QUÉ NECESITAMOS EN SU PRESUPUESTO

Pedimos que nos den:

1. **Precio por unidad y por variante.**
2. **Coste de producción de packaging y manual por variante**, sobre nuestro propio diseño (arte/especificaciones a continuación).
3. **Plazo de producción** desde el pedido confirmado hasta la entrega, para cada variante.
4. **Condiciones de pago** (% de depósito, saldo contra envío, etc.).

---

## 4. SIGUE ABIERTO — que no bloquee su presupuesto

Nos falta cerrar el umbral exacto del corte térmico del Core Recovery y el tiempo de autoapagado del Core Beauty. Esto no debería retrasar su presupuesto — pedimos que coticen sobre la especificación de la §2, y confirmaremos estos últimos detalles antes de cerrar el pedido.

---

## 5. FECHA OBJETIVO

Para planificación: nuestro objetivo es tener **tanto Core Recovery como Core Beauty en almacén a principios de noviembre de 2026**, antes de Black Friday. Pedimos que nos digan en su presupuesto si su plazo de entrega hace esto realista, y si no, cuál sería la fecha más temprana realista.

---

*Pedimos que respondan con su presupuesto referenciando los números de sección de arriba.*
