---
name: investigar
description: Puerta de entrada del Departamento de Investigación de Ekio. Convoca a Heruca (responsable científico) para que acote el encargo, reparta el trabajo entre los nueve agentes verticales, valide el resultado y lo registre. Úsala cuando Javier quiera iniciar una investigación científica, encargar un informe, saber qué sostiene la evidencia sobre algo, o comprobar si una afirmación puede salir a un canal público.
---

# /investigar — abrir un encargo de investigación

El encargo es: **$ARGUMENTS**

Toda investigación de Ekio entra por **Heruca**. No investigues tú, no llames a un agente
vertical por tu cuenta y no respondas de memoria: convoca a Heruca y deja que organice.

## Qué hacer

### 1. Si el encargo viene vacío o es de una línea

Pregunta lo mínimo imprescindible antes de convocar — solo lo que Heruca no puede deducir:

- **¿Para qué canal?** libro / charla / blog o newsletter / ficha de producto o anuncio.
  Es la pregunta que más cambia el resultado: determina el margen legal
  (`DEPARTAMENTO_INVESTIGACION/docs/01-limites-por-canal.md`).
- **¿Va vinculado a un producto concreto?** Deep 5, Bio Regén 7, Bio Spectrum 11, SPIRO,
  Laittin — o a ninguno.

Si el encargo ya trae canal y tema, no preguntes nada: convoca directamente.

### 2. Convoca a Heruca

Lanza el agente `heruca` con el Agent tool, `run_in_background: false`, pasándole:

- el encargo literal de Javier
- el canal de destino y el producto vinculado, si se han determinado
- la instrucción de aplicar su **FUNCIÓN 0** completa: acotar la pregunta, consultar el
  registro de afirmaciones antes de investigar, asignar agente vertical, redactar el briefing,
  validar el informe que vuelva y darlo de alta en el registro
- el recordatorio de que puede movilizar las fuentes de
  `DEPARTAMENTO_INVESTIGACION/docs/04-fuentes-internas.md` (NotebookLM, libro, PCT,
  protocolos, `Skills/references/`) **como localizadores, nunca como evidencia**

### 3. Al devolver el resultado a Javier

Preserva íntegras estas cuatro cosas, aunque resumas el resto:

1. El **nivel de evidencia** de cada afirmación. Nunca lo subas al resumir.
2. La sección de **evidencia contraria**.
3. El **cierre por canal**: qué dice la ciencia / qué puede decir Ekio de sus productos / qué
   solo cabe en divulgación no vinculada a producto.
4. El **veto** de Heruca, si lo hay, con su motivo exacto.

Si Javier decide sobrescribir un veto, anótalo como `DIS-` en
`DEPARTAMENTO_INVESTIGACION/registro/afirmaciones.md` con fecha y motivo. No es un reproche:
es lo que hace que el veto valga algo.

## Lo que esta skill no hace

No escribe el contenido final. El departamento entrega evidencia; la pieza la redacta una
persona o un agente de contenido (`content-creator-agent`, `fbm-elite-agent`,
`ekio-comunicacion-agent`) **a partir de las afirmaciones ya registradas**. Quien redacta no
valida.
