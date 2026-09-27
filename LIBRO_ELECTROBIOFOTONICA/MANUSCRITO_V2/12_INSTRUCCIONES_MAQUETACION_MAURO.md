# Instrucciones de maquetación e ilustración

**Libro:** *Oasis Electromagnético. Guía de higiene tecnológica y luz para toda la familia*
**Autor:** Francisco Javier Andrés Andrés, naturópata especialista en Contaminación Electromagnética · **Editor:** EKIO Electrosmog
**Para:** Mauro Arroyo (diseño, ilustración y maquetación)
**Fecha del texto:** 27 de septiembre de 2026 · **Lanzamiento previsto:** 11 de noviembre de 2026

---

## 1. Qué recibes

| Archivo | Qué es |
|---|---|
| `MANUSCRITO_V2_COMPLETO.md` | Todo el libro en un solo archivo de texto (Markdown), en orden de lectura |
| `00_preliminares.md` … `11_kit_medios.md` | Los mismos contenidos, por partes, por si prefieres trabajar capítulo a capítulo |
| `esquemas/` | 23 esquemas en SVG (vector, editable) y 2 PNG de los QR, tal como se hicieron en el borrador. **Son referencia de contenido, no arte final.** Tú los rehaces con el estilo de EKIO |
| `libro-v2-lectura.html` | El libro entero para leerlo en el navegador con las figuras colocadas donde van |

El texto está cerrado por el autor. Si al maquetar hace falta cortar, mover o acortar algo, avisa antes de hacerlo.

---

## 2. Formato del libro

| Elemento | Decisión |
|---|---|
| Plataforma | Amazon KDP, tapa blanda, e-book Kindle después |
| Tamaño de corte | 6 × 9 pulgadas (15,24 × 22,86 cm) |
| Interior | Color estándar (no premium). Las figuras dependen del color: comprobar que el código E/M/R/D se distingue también si alguien imprime en gris |
| Extensión estimada | 130-150 páginas con figuras |
| Márgenes | Los de KDP para 151-300 páginas: interior (medianil) mínimo 0,75"; exterior, superior e inferior mínimo 0,25" (recomiendo 0,5" fuera y 0,75" arriba y abajo para que respire). Sangrado 0,125" si alguna figura va a sangre |
| Sangre | Ninguna figura va a sangre. Todas son figuras encajadas en la caja de texto o a página completa con margen |
| Papel | Blanco (no crema), porque las figuras llevan fondos de color suave |
| Cubierta | Aparte; ver punto 9 |

---

## 3. Estructura del libro

Orden exacto de las páginas. Las páginas preliminares van sin folio visible o en romanos; el cuerpo, en arábigos desde el prólogo o desde el capítulo 1 (tu criterio).

**Preliminares**
1. Portadilla (solo el título).
2. Página de título (título, subtítulo, autor con nombre completo "Francisco Javier Andrés Andrés", debajo "Naturópata especialista en Contaminación Electromagnética" y "Fundador y director de EKIO Electrosmog", sello EKIO).
3. Derechos y edición (créditos legales; ISBN y depósito legal aún pendientes: dejar el hueco).
4. "Antes de empezar: cuatro cosas que debes saber" (aviso legal; es una página entera y debe verse como aviso, no como capítulo).
5. Dedicación (página sola, derecha, centrada, con aire; es una dedicación de méritos en seis líneas: respetar los cortes de línea).
6. Índice (con números de página).
7. "Cómo utilizar este libro" (incluye el método OASIS y la definición de higiene tecnológica).

**Cuerpo**
8. Por qué escribí este libro (prólogo, con la figura P.1).
9. Capítulo 1 · La casa invisible.
10. Capítulo 2 · Un recorrido por tu hogar.
11. Capítulo 3 · El teléfono que llevas encima.
12. Capítulo 4 · Volver a salir fuera.
13. Capítulo 5 · Usar la luz en casa.
14. Capítulo 6 · Niños y adolescentes.
15. Capítulo 7 · Mascotas.
16. Capítulo 8 · Tu plan de higiene tecnológica.

**Finales**
17. Índice de recetas.
18. Índice de figuras.
19. Glosario.
20. Bibliografía.
21. Agradecimientos.
22. Recursos de EKIO (con los dos QR).
23. Sobre el autor.
24. Nota de la edición.
25. Para contar este libro en dos minutos (apéndice de medios; puede ir en cuerpo más pequeño).

Cada capítulo empieza en página derecha (impar).

---

## 4. Qué hay dentro de cada capítulo

Todos los capítulos siguen el mismo patrón. Reconocerlo te ahorra trabajo: son siempre los mismos siete tipos de bloque.

| Bloque | Cómo se reconoce en el texto | Tratamiento sugerido |
|---|---|---|
| **Título de capítulo** | `# Capítulo N · Título` | Página de apertura propia, con número grande y título; puede llevar la primera figura del capítulo o un detalle ilustrado |
| **Sección** | `## Título` | Título de nivel 2, con espacio antes |
| **Subsección** | `### Título` | Nivel 3, más discreto |
| **Historia** | Es el primer bloque de cada capítulo (Faraday, la mosca, Martin Cooper, la mimosa, Finsen, el iPhone, las vacas y los perros, el cargador que vuelve). Texto corrido, sin marca especial en el archivo | Cuerpo normal. Si quieres distinguirlas, una capitular al inicio del capítulo basta. No llevan recuadro: son la narración |
| **Receta** | `## Receta N — Título`, seguida de una línea `**Necesitas:** … **Resultado:** …` y pasos numerados en negrita | **Recuadro o fondo de color suave**, con el número de receta bien visible, la línea Necesitas/Resultado como cabecera y los pasos numerados. Es el elemento que el lector va a buscar hojeando: tiene que verse desde lejos. Hay 26 en el libro |
| **Tu acción** | Párrafo que empieza con `**Tu acción:**` (solo en el capítulo 1, cuatro veces) | Pequeño destacado, icono de lápiz o similar |
| **Tabla** | Tablas en Markdown (`| … |`) | Tabla limpia, cabecera con fondo, sin líneas verticales. Hay 8 tablas; la del capítulo 8 "La tarjeta de cada momento" está pensada para fotocopiar o arrancar: que quepa en una página |
| **Lista de comprobación** | Líneas con `- [ ]` (solo capítulo 8) | Casillas reales para marcar con lápiz |
| **En una frase** | Última línea de cada capítulo: `**En una frase:** …` | Cierre destacado, a modo de cita, en página propia o al final del capítulo con aire. Son las frases para la radio: dales sitio |
| **Encargo de figura** | Recuadro `> **FIGURA N.N · Título.** descripción…` | **No se imprime.** Es la descripción de lo que debe mostrar la figura. Se sustituye por la figura final y su pie |
| **Nota de pendiente** | Texto entre corchetes `[PENDIENTE]` | Huecos legales (ISBN, depósito legal, corrección). Se rellenan antes de cerrar |

### Mapa de cada capítulo

**Prólogo · Por qué escribí este libro** (≈1.200 palabras)
Presentación · Lo que he visto en quince años · De qué va este libro, en una frase · Una casa que puedes aprender a mirar (figura P.1) · Las soluciones con las que trabajo · Una palabra para mirar el conjunto · Lee una idea y haz algo con ella · En una frase.

**Capítulo 1 · La casa invisible** (≈2.500)
Historia: Faraday · Cuatro lentes (1.1) · Del enchufe a los rayos gamma (1.2) · Cuatro cosas que conviene separar (1.3; cuatro subsecciones con "Tu acción") · Un aparato puede aparecer cuatro veces (1.4) · Cuatro medidores (1.5, fotografía) · Una cuerda y una valla (1.6, nueva) · El objetivo: crear un Oasis (1.7) · Receta 1 (1.8) · En una frase.

**Capítulo 2 · Un recorrido por tu hogar** (≈3.100)
Introducción (2.1) · La casa también cambia de luz (2.2) · Dormitorio (historia: la mosca; Receta 1) · Cocina (Receta 2) · Salón (Receta 3) · Despacho (Receta 4) · La tabla que quiero que pegues en tu mapa · Cuatro habitaciones, una sola casa · En una frase.

**Capítulo 3 · El teléfono que llevas encima** (≈2.300)
Historia: Martin Cooper · El móvil cambia de actividad (3.1) · Una llamada con más distancia · El router que añadimos · Receta 1 · SPIRO: quién lo hizo y por qué lo uso · Un SPIRO para cada situación (tabla + 3.2) · Por qué el Disc va delante del router · Receta 2 · El teléfono frente a una cabeza de laboratorio · Qué puede comprobar un medidor · Receta 3 · El coche eléctrico (3.3) · Receta 4 · Devuelve al teléfono su sitio · En una frase.

**Capítulo 4 · Volver a salir fuera** (≈1.800)
Historia: la mimosa de De Mairan · Una habitación luminosa se queda corta (historia: la acampada de Wright; 4.1) · Amanecer y anochecer · La melatonina · Una mañana que cabe en tu vida · Cuando el reloj llega a la célula · Grounding (4.2) · Qué cambia al tocar tierra · Recetas 1, 2 y 3 · Antes de volver dentro · En una frase.

**Capítulo 5 · Usar la luz en casa** (≈2.700)
Historia: Finsen · Dos luces que no debemos confundir (tabla) · El nanómetro · Irradiancia · Tiempo y dosis (5.1) · Qué hace la luz en el tejido (5.2, nueva) · Más luz no siempre ayuda más · Dos estudios · La familia EKIO Light (5.3) · Recetas 1, 2 y 3 · La ficha que debe acompañar a un panel (tabla) · En una frase.

**Capítulo 6 · Niños y adolescentes** (≈2.700)
Historia: el iPhone · Una etapa en desarrollo · La noche de una niña de cuatro años (escena) · El dormitorio infantil (6.1) · Receta 1 · El recreo que cuida los ojos (6.2) · El pupitre de casa · Receta 2 · El primer móvil es un contrato · Receta 3, el pacto (6.3) · Lo que sabemos · ¿Y EKIO Light cuando hay niños? · Receta 4 (tabla) · En una frase.

**Capítulo 7 · Mascotas** (≈2.500)
Historia: las vacas y los perros de Hart · Empieza por donde descansa (lista; 7.1) · Receta 1 · El collar · Una casa conectada · Receta 2 (tabla) · La luz también organiza su día · Grounding sobre cuatro patas · Sesión veterinaria · El pelaje (7.2) · Recetas 3 y 4 · Una mascota también necesita elegir · En una frase.

**Capítulo 8 · Tu plan de higiene tecnológica** (≈2.200)
Escena: el cargador que vuelve · Una señal roja no espera (8.1) · Las cinco prioridades · Tu revisión de diez minutos (lista) · Receta 1, la semana OASIS (8.2) · Receta 2, la tarjeta (tabla para arrancar) · Receta 3, treinta días · Lo que no debe depender de la memoria (casillas) · Lo que significa vivir en un Oasis · Dos puertas para continuar · En una frase.

---

## 5. Las figuras

Son 26 figuras numeradas más 2 QR. De las 26, 23 tienen un esquema de referencia en `esquemas/` y 3 son nuevas. En el texto, cada figura tiene su recuadro ocre con lo que debe mostrar; ahí está la instrucción completa. Aquí, la lista:

| Figura | Título | Referencia en `esquemas/` | Formato sugerido |
|---|---|---|---|
| P.1 | El camino que dio origen a este libro | camino-electrobiofotonica.svg | Ancho de caja |
| 1.1 | Cuatro lentes para mirar lo invisible | cuatro-escalas-observacion.svg | Ancho de caja |
| 1.2 | El espectro electromagnético | espectro-electromagnetico.svg | Ancho de caja |
| 1.3 | Las cuatro capas de tu casa | cuatro-capas-casa.svg | Ancho de caja. **Fija el código de colores E/M/R/D para todo el libro** |
| 1.4 | Un aparato, varias capas | un-aparato-varias-capas.svg | Media página |
| 1.5 | Los instrumentos que usamos en EKIO | medidores-campos-ekio-original.jpg | **Fotografía nueva**: cenital, fondo neutro, mismo orden izquierda-derecha |
| 1.6 | Una cuerda y una valla | **nueva** | Ancho de caja, tres viñetas |
| 1.7 | Método OASIS | metodo-oasis.svg | Franja horizontal |
| 1.8 | Mapa invisible de casa, ejemplo | mapa-invisible-casa-ejemplo.svg | **Página completa girada** o doble página; es la más densa |
| 2.1 | Cuatro habitaciones, cuatro prioridades | cuatro-habitaciones-oasis.svg | Ancho de caja |
| 2.2 | La casa también cambia de luz | transicion-luz-ekio-hogar.svg | Franja horizontal |
| 3.1 | El móvil cambia de papel | el-movil-cambia-de-papel.svg | Franja horizontal |
| 3.2 | Elige la conexión y revisa tus opciones | ruta-conexion-y-spiro.svg | Ancho de caja |
| 3.3 | Un coche eléctrico también tiene un mapa | mapa-coche-electrico-spiro.svg | Media página. **Rehacer: que parezca un coche** (planta con ruedas y parabrisas) |
| 4.1 | El reloj diario de luz, tierra y tecnología | reloj-natural-diario.svg | Franja horizontal |
| 4.2 | Qué cambia al tocar tierra | grounding-paraguas-natural.svg | Ancho de caja |
| 5.1 | Anatomía de una sesión de fotobiomodulación | anatomia-sesion-pbm.svg | Ancho de caja. El ejemplo numérico es 20 mW/cm² × 300 s = 6 J/cm² (no el del esquema viejo) |
| 5.2 | Qué hace la luz en el tejido | **nueva** | Media página |
| 5.3 | La familia EKIO Light | mapa-paneles-ekio-light.svg como referencia | **Nueva versión sin cifras**: cuatro siluetas de menor a mayor sobre franjas de color; bloque UV marcado "fuera de las recetas" |
| 6.1 | Dormitorio infantil: del acumular al organizar | oasis-dormitorio-infantil.svg | Ancho de caja |
| 6.2 | Más tiempo fuera, menos miopía | exterior-y-miopia.svg | Media página. Cifras: 30,4 % (259 de 853) y 39,5 % (287 de 726), escala 0-100 % |
| 6.3 | El pacto del primer móvil | pacto-primer-movil.svg | Ancho de caja |
| 7.1 | El mapa de las tres siestas | mapa-oasis-mascota.svg | Página completa girada |
| 7.2 | De un panel a una sesión veterinaria | sesion-pbm-mascota.svg | Ancho de caja |
| 8.1 | ¿Por dónde empiezo? | prioridades-oasis-hogar.svg | Ancho de caja o página completa |
| 8.2 | Siete días para crear tu primer Oasis | plan-oasis-siete-dias.svg | Página completa girada |
| QR | Web y YouTube | qr-ekio-web.png, qr-ekio-youtube.png | 30-35 mm de lado, con la URL escrita debajo |

**Figuras opcionales** si hay espacio (el texto las pide pero no las numera): distancia (el mismo aparato a 1 cm y a 1 m); onda limpia frente a onda sucia; la pared compartida del cabecero (corte con el cuadro eléctrico o el frigorífico al otro lado).

### Reglas para todas las figuras

1. **El código E/M/R/D (campo eléctrico, magnético, radiofrecuencia, electricidad sucia) es idéntico en todo el libro**: misma letra, mismo color, mismo icono. Se fija en la figura 1.3 y se respeta en 1.4, 1.8 y donde aparezca. En los esquemas de referencia cambia de una figura a otra; eso hay que corregirlo. Ojo: en dos esquemas viejos aparece una "D" que significa Disc; no confundir.
2. **Texto mínimo dentro de una figura: 7 puntos a tamaño real de impresión.** Los esquemas de referencia tienen textos que, reducidos a 6 × 9, quedan en 3-4 puntos. Por eso las tres figuras más densas van a página completa girada.
3. **Los descargos van dentro de la figura**, en pequeño: "esquema conceptual, no representa intensidad", "propuesta comercial de EKIO", "un mapa no sustituye una medición". Son parte del contenido; consérvalos.
4. **Literales que deben ir exactamente así**: "Stroom Master" (nunca "STROOM"), "1800 K" (con espacio), "SPIRO" en mayúsculas, "EKIO Light", "Bio Regén 7" (con tilde), "Deep 5", "Bio Spectrum 11", "Core", "DUSK".
5. **Cada figura lleva pie**: "Figura N.N · Título" y, si la figura cita un estudio, la fuente en el pie (por ejemplo, la 6.2: "He et al., JAMA, 2015").
6. **Color**: paleta de EKIO. Comprobar en prueba CMYK los ocres y rojos, que son los que más se apagan. Las figuras se entregan en RGB; KDP convierte.
7. **Los QR ya están generados y comprobados.** Enlazan a `https://electrosmogespana.com/` y a `https://www.youtube.com/@EkioElectrosmog`. No regenerarlos. Imprimirlos a 30-35 mm y probarlos en la prueba física con dos o tres móviles distintos.
8. El archivo `polarizacion-membrana-vgcc` que pueda aparecer en carpetas antiguas **no se usa**.

---

## 6. Tipografía y estilo

- **Cuerpo**: una serif legible para lectura larga (Georgia, Merriweather, Source Serif o similar), 10,5-11 pt, interlineado 1,4-1,5. El lector tipo tiene entre 35 y 65 años: no bajar de 10,5.
- **Títulos y elementos de apoyo** (recetas, tablas, figuras): una sans serif de la familia de la marca.
- **Jerarquía**: capítulo > sección (##) > subsección (###). Solo tres niveles; no hay más.
- **Cursivas**: las del texto (nombres de genes como *period*, títulos de libros). Los términos SPIRO, Wi-Fi, Bluetooth, router y grounding van en redonda.
- **Comillas**: el texto usa comillas rectas ("…"). Convertir a comillas latinas («…») en toda la obra, y las comillas dentro de comillas a inglesas ("…").
- **Números**: las cifras de los estudios van tal como están (1893, 5582, 30,4 %). No añadir puntos de millar a los años ni a los kelvin (1800 K).
- **Guiones**: la raya (—) en los títulos de receta ("Receta 1 — Título") y en los incisos; el guion corto solo en palabras compuestas.
- **Folios y cabeceras**: número de página en el exterior; cabecera con el título del capítulo en página impar y el título del libro en la par.
- **Viudas y huérfanas**: evitar; los párrafos son cortos y lo permiten.

---

## 7. Elementos que se repiten y conviene diseñar una vez

1. **Apertura de capítulo** (8 veces): número, título, espacio.
2. **Recuadro de receta** (26 veces): número + título + Necesitas/Resultado + pasos.
3. **Destacado "Tu acción"** (4 veces).
4. **Cierre "En una frase"** (9 veces, incluido el prólogo).
5. **Tabla** (8 veces).
6. **Lista de casillas** (1 vez, capítulo 8).
7. **Pie de figura** (26 veces).
8. **Entrada de glosario** (unas 55): término en negrita, definición en redonda, sin sangría francesa complicada.
9. **Entrada de bibliografía** (unas 70): autor, año, título, revista, en cuerpo más pequeño.

---

## 8. Lo que falta y quién lo pone

| Pendiente | Responsable | Dónde va |
|---|---|---|
| ISBN | Javier / Agencia del ISBN | Página de derechos y código de barras en contracubierta |
| Depósito legal | Javier | Página de derechos |
| Corrección ortotipográfica final | Corrector externo (nombre pendiente) | Sobre el archivo maquetado, no sobre el Markdown |
| Tres figuras nuevas (1.6, 5.2, 5.3) y la foto de medidores | Mauro | Capítulos 1 y 5 |
| Texto de contracubierta (blurb) | Javier con Claude | Cubierta |
| Biografía breve y foto de autor | Javier | Contracubierta y "Sobre el autor" |
| Números de página del índice | Mauro, al final | Índice |
| Prueba física de KDP | Javier + Mauro | Antes de publicar |

---

## 9. Cubierta (orientación, no diseño)

- **Portada**: título "Oasis Electromagnético" grande; subtítulo debajo; nombre del autor completo, "Francisco Javier Andrés Andrés"; sello EKIO discreto. La imagen debería sugerir un hogar tranquilo con luz cálida, no un rayo ni un símbolo de peligro. El libro tranquiliza y ordena; no asusta.
- **Lomo**: título y autor, legible en 130-150 páginas (unos 8-9 mm).
- **Contracubierta**: blurb de 120-150 palabras (pendiente), tres o cuatro frases del apéndice "Para contar este libro en dos minutos" como reclamos, biografía de tres líneas, foto opcional, código de barras con ISBN, QR a la web.
- **Frase de cubierta propuesta**: "Abre el libro. Elige una habitación. Haz tu primer cambio."

---

## 10. Orden de trabajo sugerido

1. Leer el HTML de lectura entero para ver el tono y dónde cae cada figura.
2. Fijar la paleta y el código E/M/R/D con la figura 1.3. Enseñarla a Javier antes de seguir.
3. Diseñar una vez los siete elementos repetidos (punto 7) sobre el capítulo 2, que los tiene todos. Enseñar ese capítulo maquetado a Javier.
4. Rehacer las 23 figuras con referencia y dibujar las 3 nuevas y la foto.
5. Maquetar el resto.
6. Numerar el índice, revisar viudas y huérfanas, exportar PDF para el corrector.
7. Incorporar las correcciones, subir a KDP, pedir prueba física.

Cualquier duda sobre el texto, a Javier. Cualquier duda sobre qué debe mostrar una figura, en el recuadro ocre de esa figura está la respuesta.
