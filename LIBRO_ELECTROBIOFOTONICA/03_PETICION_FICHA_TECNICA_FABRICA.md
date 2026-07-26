# PETICIÓN DE FICHA TÉCNICA A FÁBRICA
## Datos necesarios para publicar dosis en el libro, las landings y los manuales

> Preparado 26 julio 2026. Bloqueante para: libro *Electrobiofotónica*, landings, manuales de usuario y cualquier creativo con cifras.
> **Regla de oro: pide datos MEDIDOS, no los teóricos del datasheet del LED.** La diferencia entre ambos suele ser de 2 a 5 veces.

> ## ✅ ACTUALIZACIÓN 26/jul — ESTO YA NO BLOQUEA EL LIBRO
>
> Javier ha decidido que **el libro no lleve protocolos concretos** (ni dosis, ni minutos, ni distancias) y que **el Bio Spectrum 11 quede fuera**. Consecuencia: **la ficha técnica ya no bloquea la publicación del libro.**
>
> **Pero sigue siendo necesaria, y por razones más importantes:**
> - **Manuales de usuario** — sin irradiancia no puedes decirle a un cliente cuánto tiempo usar el panel. Es el frente más urgente ahora: los Core ya están en casa de la gente.
> - **Landings y creativos** con cualquier cifra de dosis o comparativa de potencia.
> - **Marcado CE y expediente técnico** — obligación legal, y **la asumes tú** al vender bajo tu marca.
> - **IEC 62471 del Bio Spectrum 11** — sigue vendiéndose. Sacarlo del libro **no resuelve nada de esto**. Es el frente de mayor riesgo del proyecto.
>
> Es decir: baja de prioridad **editorial**, sube de prioridad **de producto**.

---

## POR QUÉ SIGUE SIENDO CRÍTICO

Sin irradiancia medida no hay dosis (J/cm²). Sin dosis:
- **Los manuales de usuario no pueden dar tiempos de sesión correctos.** ← el problema más urgente: hay Cores vendidos cuyo temporizador llega a 30 min cuando en contacto la dosis útil se alcanza en 1–4.
- No se puede defender ningún claim de resultado ni comparativa de potencia frente a un competidor que la exija.
- No se puede completar el expediente técnico que sostiene tu marcado CE.

La fórmula que lo une todo:
```
minutos = (J/cm² deseados × 1.000) ÷ (mW/cm² del equipo × 60)
```

---

## PRIORIDAD 0 — SIN ESTO NO HAY MANUAL NI EXPEDIENTE TÉCNICO

### 1. Irradiancia medida (mW/cm²) por distancia

Para **cada panel**. Prioridad para el libro: **Core, Deep 5 y Bio Regén 7**. Pide también la del **Bio Spectrum 11** — no la necesitas para el libro, pero sí para venderlo y para su expediente técnico:

| Distancia | Centro del panel | Borde del área útil |
|---|---|---|
| 0 cm (contacto) | | |
| 5 cm | | |
| 15 cm | | |
| 30 cm | | |
| 50 cm | | |

**Condiciones que deben especificar:**
- Radiómetro/espectrorradiómetro usado: **marca, modelo y fecha de calibración**.
- Medida **en frío (encendido <1 min)** y **en caliente (tras 10 min encendido)**. Los LEDs pierden potencia al calentarse; el dato real de uso es el segundo.
- Temperatura ambiente de la medición.
- Sensor perpendicular al panel, centrado.

> **Por qué el borde:** necesitamos saber la **uniformidad**. Si el borde da la mitad que el centro, la dosis real del usuario no es la anunciada.

### 2. Irradiancia desglosada POR LONGITUD DE ONDA

⚠️ **Este es el dato que casi nadie pide y el que más necesitamos.**

No sirve el total agregado. Las recetas del libro son por longitud de onda: la de piel usa 630–660 nm, la cognitiva usa 810 nm, la de dolor usa 810+850 nm. Si un panel entrega 40 mW/cm² totales pero solo 4 son de 810 nm, el protocolo cambia por completo.

Pedir, para cada panel y a 15 y 30 cm:

| λ nominal | λ pico real medida | Irradiancia (mW/cm²) | % del total |
|---|---|---|---|
| 630 nm | | | |
| 660 nm | | | |
| 727 nm | | | |
| 810 nm | | | |
| 850 nm | | | |
| *(etc. según panel)* | | | |

### 3. Potencia óptica real de salida (W)

**Potencia óptica radiada, NO potencia eléctrica consumida.**

Es el dato que más se falsea en el sector: un panel que consume 200 W de la red puede radiar 40 W ópticos. Si en la ficha ponen "200 W" sin especificar, es potencia eléctrica y no vale para nada.

### 4. Certificado IEC 62471 (seguridad fotobiológica)

**Crítico y no negociable en el Bio Spectrum 11**, que emite UV-B real a 292 nm.

⚠️ **Este punto NO decae porque el panel salga del libro.** El libro era solo una de las exposiciones; la otra —vender el aparato— sigue viva y es la grande.

Pedir explícitamente:
- Informe completo IEC 62471 (o EN 62471).
- **Grupo de riesgo asignado** (RG0 / RG1 / RG2 / RG3) **por cada fuente**, no solo global.
- **Tiempo máximo de exposición permitido** derivado de esa clasificación.
- Distancia a la que se hizo la evaluación.

> Sin este certificado en regla y sin expediente técnico propio, el Bio Spectrum 11 **no debe anunciarse**. (Del libro ya está fuera por decisión editorial del 26/jul.)

---

## PRIORIDAD 1 — NECESARIO PARA CLAIMS Y MANUALES

### 5. Espectro medido completo
Gráfica de distribución espectral con espectrorradiómetro (no la del datasheet del LED), incluyendo el **FWHM** (anchura de banda) de cada pico. Sirve para verificar que el 850 nm es realmente 850 y no 830 o 870.

### 6. Área de tratamiento efectiva (cm²)
A 15 y 30 cm, con el criterio usado (lo habitual: superficie donde la irradiancia es ≥ 50 % del máximo central). Sin esto no se puede calcular la dosis por sesión de cuerpo completo.

### 7. Flicker
- Porcentaje de modulación (% flicker).
- Frecuencia de modulación (Hz).

El Core ya declara cero flicker; hace falta el dato de los otros tres. **Es argumento de venta directo** y encaja con el posicionamiento EKIO.

### 8. Campos electromagnéticos emitidos
Medida de µT y V/m a 15 y 30 cm del panel encendido.

El Core declara 0 µT. **Para EKIO este dato es estratégico**: eres la marca de electrosmog vendiendo un aparato eléctrico. Tener la medición de los cuatro paneles te blinda frente a la objeción obvia.

### 9. Modo pulsado (Core y los que lo tengan)
- Frecuencias disponibles (el Core declara 10 Hz).
- **Duty cycle** (% de tiempo encendido).

⚠️ Necesario para dos cosas: el duty cycle cambia la irradiancia media y por tanto la dosis; y el modo pulsado exige la advertencia de epilepsia fotosensible en el libro.

### 10. Temperatura superficial
Del panel y de la piel a 0, 15 y 30 cm tras 10 minutos de uso. Necesario para la advertencia de melasma/rosácea (el infrarrojo profundo de 940/935 nm es calórico).

---

## PRIORIDAD 2 — DESEABLE

### 11. Vida útil y degradación
- Horas L70 / L80 (cuándo cae al 70 % / 80 % de la irradiancia inicial).
- Caída de irradiancia a las 1.000 horas.

Determina cuándo hay que recomendar reposición y si la dosis del manual sigue siendo válida al año de uso.

### 12. Resto de certificados
LVD (EN 62368-1 o EN 60335), EMC (EN 55015 / EN 61547), RoHS, declaración CE, informe de ensayo del laboratorio.

---

## DOS PREGUNTAS QUE HAY QUE HACER SIEMPRE

1. **¿Quién hizo la medición?** ¿Laboratorio propio de fábrica o laboratorio externo acreditado? **Un informe de tercero independiente vale diez veces más** — es lo que te defiende si un competidor o un regulador te cuestiona.

2. **¿Nos podéis enviar el informe de ensayo completo, no solo el resumen?** El PDF con las curvas y las condiciones de medida, no una tabla en un email.

---

## SI LA FÁBRICA SE RESISTE

Es habitual. Argumentos, en orden:

1. **"Lo necesitamos para el mercado europeo."** Es cierto: sin IEC 62471 no se puede vender legalmente en la UE un producto con UV.
2. **"Vamos a publicar un libro y unas fichas técnicas con vuestro producto; si los datos no son correctos, el problema es de los dos."**
3. **"Si no podéis medirlo, lo medimos nosotros en un laboratorio europeo y os pasamos el informe."** — Esta es la salida real. Un ensayo de irradiancia espectral en un laboratorio acreditado español no es caro comparado con el coste de no poder publicar dosis.

> **Recomendación:** si la fábrica tarda o da datos dudosos, **encarga tú la medición de los cuatro paneles a un laboratorio acreditado**. El informe pasa a ser **tuyo** — es un activo defendible, sirve para el libro, para las landings, para el expediente de inversión y para el PCT.

---

## PARA EL CORE, ADEMÁS

El ">150 mW/cm² en contacto" es un **suelo, no una medida**. Hay que convertirlo en un valor exacto, porque de él depende un problema abierto:

A 150 mW/cm² en contacto, la ventana útil (1–60 J/cm²) se alcanza entre **33 segundos y 6 min 40 s**. El temporizador del Core va de **5 a 30 minutos**. Media hora en contacto entregaría ~270 J/cm², muy por encima de la ventana útil.

**Preguntar a fábrica:** ¿el rango 5–30 min está pensado para uso a distancia? ¿Recomiendan tiempo distinto en contacto? Y revisar el manual en consecuencia.
