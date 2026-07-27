# BRIEF TÉCNICO PARA FABRICANTE
## Ekio Light — Core Recovery y Core Beauty
### Dos variantes sobre el chasis del Core actual · v1.1 · 27-jul-2026

> **Uso:** documento de petición de cotización (RFQ) y especificación de diseño. Enviar al fabricante del Core actual. Todo lo marcado **[CONFIRMAR]** es una pregunta abierta que debe responder el fabricante; todo lo marcado **[REQUISITO]** es innegociable por nuestra parte.

---

## 1. RESUMEN EJECUTIVO

Queremos fabricar **dos variantes** del dispositivo **Ekio Light Core** que ya nos producís, **reutilizando el mismo chasis, la misma batería y el mismo recuento de LEDs**. Lo único que cambia entre los tres productos es la **combinación de longitudes de onda** y la **arquitectura del encapsulado LED** (paso de chip dual a chip triple).

| Producto | Estado | LEDs | Arquitectura | Longitudes de onda |
|---|---|---|---|---|
| **Core** (actual) | En producción | 13 | Chip **dual** | 660 · 850 nm |
| **Core Recovery** | **Nuevo** | 13 | Chip **triple** | **660 · 810 · 940 nm** |
| **Core Beauty** | **Nuevo** | 13 | Chip **triple** | **590 · 630 · 670 nm** |

**Objetivo de negocio:** máximo aprovechamiento del utillaje existente y mínimo coste incremental. No queremos rediseñar el producto — queremos dos variantes espectrales del mismo aparato.

---

## 2. LO QUE NO CAMBIA (heredado del Core actual)

**[REQUISITO]** Todo lo siguiente debe ser idéntico al Core que ya producís:

- **Chasis y molde:** 162 × 90 × 45 mm. Mismo molde, sin modificaciones.
- **Recuento de LEDs:** 13 emisores, misma disposición física en el PCB.
- **Batería:** recargable, carga **USB-C**.
- **Vida útil:** >20.000 h.
- **Modo pulsado:** continuo (CW) y **pulsado a 10 Hz**.
- **Cero flicker visible** en modo continuo y **bajo campo electromagnético** — es el diferenciador de marca de Ekio y no es negociable.
- **Certificaciones base:** RoHS, CE, WEEE.

**[REQUISITO] Diferencia respecto al Core actual: aquí NO hay control por bancos independiente.** El Core actual sí permite encender cada longitud por separado; **Core Recovery y Core Beauty encienden sus tres bandas siempre juntas, en un único modo combinado** (ver §3.2 y §4.3). Simplifica firmware, UI y probablemente el número de controles físicos — confirmad con nosotros si esto reduce también el número de canales de driver necesarios o si preferís mantenerlos por balance de corriente entre dies.

---

## 3. ESPECIFICACIÓN — CORE RECOVERY (recuperación y dolor)

### 3.1 Espectro

| Banda | λ nominal | Tolerancia de centroide | Función de diseño |
|---|---|---|---|
| **660 nm** | 660 | **± 10 nm** | Rojo visible. Tejido superficial + **confirmación visual al usuario** de que el aparato está encendido |
| **810 nm** | 810 | **± 10 nm** | NIR. Pico de absorción de la citocromo c oxidasa. Banda principal del producto |
| **940 nm** | 940 | **± 15 nm** | NIR profundo. Penetración máxima + calor perceptible en contacto |

**[REQUISITO]** El **660 nm debe ser terapéutico, no un simple piloto indicador.** Debe entregar irradiancia útil sobre toda la apertura.

**[REQUISITO] No aceptamos sustituciones sin consulta previa.** En particular:
- **No** sustituir 810 por 800 ni por 830 (están dentro del mismo ancho espectral — no son bandas distintas para nosotros).
- **No** sustituir 940 por 850 ni por 880.
- **No** ofrecer LEDs de "905 nm": esa longitud no existe como LED de precisión, solo como diodo láser. Cualquier oferta de "LED 905 nm" será rechazada.

### 3.2 Requisitos funcionales específicos

- **[REQUISITO] Corte térmico por hardware.** El 940 nm es absorbido por el agua y genera calor perceptible en contacto directo. El dispositivo debe limitar la temperatura de superficie por hardware, no solo por software. **[CONFIRMAR]** qué temperatura de corte proponéis y con qué sensor.
- **[REQUISITO] Modo único: 660 + 810 + 940 nm encendidos siempre a la vez.** No hay selección independiente por banda — a diferencia del Core actual, este dispositivo no ofrece "660 solo" ni "810 solo" ni "940 solo" como modos de usuario.
- **[REQUISITO]** CW y pulsado 10 Hz como únicas opciones de modo (aplican al conjunto de las tres bandas, no a bandas individuales).

---

## 4. ESPECIFICACIÓN — CORE BEAUTY (piel y estética facial)

### 4.1 Espectro

| Banda | λ nominal | Tolerancia de centroide | Función de diseño |
|---|---|---|---|
| **590 nm** | 590 | **± 8 nm** | Ámbar. Piel reactiva, rojeces, tono desigual. **Es la banda diferencial del producto** |
| **630 nm** | 630 | **± 10 nm** | Rojo. Colágeno y fibroblastos. Banda con mayor respaldo clínico en estética |
| **670 nm** | 670 | **± 10 nm** | Rojo profundo. Citocromo c oxidasa dérmica |

**[REQUISITO] Este dispositivo NO lleva infrarrojo.** Es una decisión de seguridad deliberada: se usa sobre la cara, y el NIR es invisible, no dispara reflejo de aversión palpebral y tiene riesgo térmico corneal. **No aceptamos añadir 810, 850 ni ninguna banda >700 nm.**

**[REQUISITO] No lleva azul ni violeta** (405, 450, 485 nm). Decisión de seguridad fotobiológica y de posicionamiento.

### 4.2 El die de 590 nm es la pieza crítica de este diseño

Es el punto de mayor riesgo técnico del proyecto y necesitamos respuestas explícitas.

El AlInGaP a 590 nm opera en su zona de peor rendimiento cuántico, con **caída térmica severa** y **desplazamiento del pico hacia el rojo** al calentarse.

**[CONFIRMAR — obligatorio]**
1. **Centroide del 590 nm medido a temperatura de operación**, no a 25 °C de laboratorio. Necesitamos el dato en condiciones reales de uso continuo.
2. **Deriva del pico (nm) y caída de flujo radiante (%)** entre 25 °C y la temperatura de operación esperada.
3. Si la deriva lleva el centroide por encima de 600 nm en uso real, **decídnoslo ahora**, no después del utillaje.

**Nota favorable de diseño:** el 590 nm **no necesita ser potente**. Nuestro objetivo es 10-25 mW/cm² en contacto — una décima parte de lo que pedimos a las bandas rojas. Esto debería aliviar tanto el coste como el problema térmico.

### 4.3 Requisitos funcionales específicos

- **[REQUISITO] Temporizador con autoapagado activado por defecto.** A irradiancia de contacto, la dosis objetivo se alcanza en **60-90 segundos**. Un usuario que aplique "20 minutos" (por analogía con paneles) se administraría 10-15× la dosis y entraría en rango inhibitorio. El autoapagado es **seguridad de producto**, no una función opcional. **[CONFIRMAR]** implementación propuesta y si el usuario puede desactivarlo (preferimos que **no** sea trivial hacerlo).
- **[REQUISITO] Modo único: 590 + 630 + 670 nm encendidos siempre a la vez.** No hay selección independiente por banda.
- CW obligatorio; 10 Hz opcional por continuidad de gama (aplica al conjunto, no a bandas sueltas).

---

## 5. ARQUITECTURA DE ENCAPSULADO — LA PREGUNTA CENTRAL

El Core actual usa **chip dual** (dos dies en un encapsulado). Para las dos variantes queremos **chip triple**: tres dies por encapsulado, de modo que **cada longitud de onda se despliegue sobre las 13 posiciones**.

**Por qué es innegociable para nosotros:** con chip simple y 3 bandas repartidas entre 13 LEDs, al encender una sola banda quedan 4 puntos de luz aislados y el resto de la apertura a oscuras. La dosis no sería baja: sería **radicalmente no uniforme**. Con chip triple, cada banda cubre el 100 % de la apertura.

### [CONFIRMAR — bloqueante]

1. **¿Podéis suministrar chip triple 660/810/940** en el formato que usa el Core actual? Referencia y hoja de datos.
2. **¿Podéis suministrar chip triple 590/630/670?** Son tres dies AlInGaP en el mismo encapsulado — es la combinación que más dudas nos genera. Referencia y hoja de datos.
3. **¿Cuántos canales de driver independientes** soporta el PCB actual? Necesitamos **3 por dispositivo**.
4. **Presupuesto térmico:** ¿podéis alimentar los 3 dies a corriente plena simultáneamente en este chasis sin ventilación? Si no —que es lo que esperamos— confirmad el reparto de corriente en modo combinado. **Es aceptable** que el modo combinado reparta corriente y el modo de banda única vaya a plena potencia; de hecho es nuestro diseño previsto.

### Plan B si el chip triple 590/630/670 no existe

Aceptaríamos: **chip dual 630 + 670 en las 13 posiciones**, más el **590 nm en emisores dedicados**. Perderíamos uniformidad solo en la banda que menos irradiancia necesita, lo cual es asumible. **[CONFIRMAR]** viabilidad y coste de esta alternativa.

---

## 6. DATOS RADIOMÉTRICOS QUE NECESITAMOS DE VOSOTROS

**[REQUISITO]** Sin estos datos no podemos publicar fichas técnicas ni protocolos de uso. Es la información que más nos falta hoy en toda nuestra gama.

Para **cada banda por separado** y para el **modo combinado**, de cada uno de los dos productos:

| Dato | Condición de medida |
|---|---|
| **Irradiancia (mW/cm²)** | En **contacto directo (0 cm)** y a **3 cm** |
| **Tipo de medida** | Especificar si es **pico en eje** o **promedio sobre la apertura**. Necesitamos el **promedio sobre apertura** |
| **FWHM (nm)** | Ancho espectral a media altura de cada banda |
| **Centroide real (nm)** | A temperatura de operación |
| **Flujo radiante (mW)** | Por die, a la corriente de trabajo |
| **Temperatura de superficie** | Máxima alcanzada en sesión de 10 min, modo combinado |

> **Nota:** la especificación actual del Core (">150 mW/cm² en contacto") no nos sirve como referencia porque no indica si es pico en eje o promedio sobre apertura. Para estos dos productos necesitamos el dato desglosado y con la condición de medida explícita.

---

## 7. COSTE Y PLAZOS

**[CONFIRMAR — todo este bloque]**

1. **COGS actual del Core** (para poder calcular el delta con precisión).
2. **Delta de COGS por unidad** de cada variante frente al Core actual, desglosado:
   - Sobrecoste del encapsulado tri-chip vs dual
   - Sobrecoste específico del die de 590 nm
   - Tercer canal de driver
   - Corte térmico (Recovery) y temporizador (Beauty)
3. **NRE / utillaje:** ¿hay coste de configuración por la variante de PCB? Asumimos que el molde del chasis está amortizado y no se toca.
4. **MOQ** por variante.
5. **Plazo de producción** para unidades de lanzamiento. Nuestro objetivo es **tener el Core Beauty en almacén a principios de septiembre de 2026** y el Core Recovery **a finales de octubre**, para lanzarlo antes de Black Friday.
6. **Packaging:** confirmamos que reutilizamos la caja del Core con **sleeve diferenciado** por variante. ¿Coste del sleeve?

---

## 8. CERTIFICACIÓN

**[CONFIRMAR]**

1. ¿El cambio de combinación espectral sobre el mismo chasis **obliga a repetir el ensayo CE**, o es válida la base eléctrica y de compatibilidad electromagnética del Core actual?
2. **Seguridad fotobiológica IEC 62471:** necesitamos el **grupo de riesgo** de cada variante. Sin azul, sin violeta, sin UV, y en el caso del Beauty sin infrarrojo, esperamos Grupo de Riesgo 1 o Exento — pero **necesitamos que se ensaye, no que se asuma**.
3. Ambos productos se comercializan como **dispositivos de bienestar**, no como producto sanitario. La documentación no debe contener indicaciones terapéuticas.

---

## 9. RESUMEN DE PREGUNTAS BLOQUEANTES

Sin respuesta a estas cinco no podemos cerrar el diseño:

1. ¿Existe el **chip triple 590/630/670**? Si no, ¿es viable el plan B (§5)?
2. ¿Existe el **chip triple 660/810/940**?
3. **Centroide y deriva térmica del die de 590 nm** a temperatura de operación.
4. ¿El PCB actual admite **3 canales de driver independientes**?
5. ¿El cambio espectral **obliga a nuevo ensayo CE**?

---

## ANEXO — Notas internas (no enviar al fabricante)

**Racional espectral resumido**

- **Core Recovery 660·810·940:** el 810 es el pico de absorción de la CcO y la mejor base clínica NIR en dolor. El 940 es la única banda con datos **nativos de LED** en cartílago (Fan 2025, 52 J/cm², superior a 810/625/1050) y además es el LED IR más barato del mercado. El 660 se mantiene pese a solapar con el Core actual porque el rojo visible es requisito de producto — un dispositivo de 299 € que parece apagado genera devoluciones — y además trabaja puntos gatillo superficiales.
- **Core Beauty 590·630·670:** el 630 es la longitud con más ECA de estética LED que existe (Omnilux Revive; Russell 2005, Weiss 2004-05). El 670 fue una de las dos más eficaces del único comparativo cabeza a cabeza con LED (Wong-Riley 2005, *J Biol Chem*, PMID 15557336). El 590 es la única banda de toda la propuesta que **no existe en ningún producto Ekio actual** y la única con mecanismo no mitocondrial (anti-angiogénico, VEGF↓/SCF↓).
- **Modo único (27-jul-2026, decisión Javier):** ambos dispositivos encienden sus tres bandas siempre juntas, sin selección independiente por banda. Esto simplifica producto y firmware, pero renuncia a la flexibilidad de dosis por banda que discutió el agente científico (p. ej. aislar el 940 para dosis específica de cartílago, o el 590 solo para piel muy sensible). Es una decisión de producto de Javier, no un límite técnico.
- **Regla de ingeniería adoptada:** ≥40 nm entre picos, o no son dos bandas distintas. Un LED no emite una longitud de onda, emite una banda de 20-45 nm de FWHM.

**Regla de solape de gama**

Cero solape **dentro** de una línea; entre líneas, diferenciación por formato (contacto portátil vs panel). El 810, 630 y 940 ya existen en la gama de paneles y eso no es un problema: un Core de contacto a batería y un Deep 5 de panel no compiten entre sí.

**Reserva del 727 nm**

El 727 nm sigue **reservado a la gama alta** (Deep 5 / Bio Regén 7 / Bio Spectrum 11) y no entra en ningún producto Core. Decisión cerrada.

**Bloqueante interno pendiente**

Necesitamos **radiómetro PBM propio** para verificar los datos que nos dé el fabricante y para cerrar la pregunta P3 del marco técnico (`ekio-light-protocolos/00_MARCO_TECNICO.md` §7), abierta desde julio. Sin medida propia seguimos dependiendo de la palabra del proveedor.

**Claims permitidos / prohibidos**

- **Sí:** apoyo a la recuperación · confort muscular y articular · bienestar post-esfuerzo · vitalidad, firmeza y luminosidad de la piel · tono uniforme · confort en pieles reactivas.
- **No:** trata la artrosis · cura el dolor · alivia la fibromialgia · elimina el melasma · trata el acné · antiinflamatorio · producto sanitario · cualquier indicación clínica.
- Nombres finales (27-jul-2026, decisión Javier): **Core Recovery** y **Core Beauty** — sustituyen a "Activo"/"Radiante", elegidos igualmente para no incorporar claim médico implícito, a diferencia de "Pain".
