# Departamento de Investigación — Ekio Electrosmog España

Base de conocimiento científico interna. Diez agentes de Claude Code: nueve de investigación
más un responsable científico con capacidad de veto.

## Puesta en marcha

Ya está instalado en el repositorio `Ekio-Claude`. No hay nada que arrancar: los diez agentes
viven en `.claude/agents/` de la raíz del repo y se descubren desde cualquier sesión.

Para abrir una investigación:

```
/investigar [lo que quieras saber]
```

Eso convoca a **Heruca**, que acota el encargo, elige agente, fija el canal de destino y
valida el resultado. No llames a un agente vertical por tu cuenta salvo que Heruca ya te haya
asignado el encargo.

## Agentes

| Agente | Cubre |
|---|---|
| `heruca` | Responsable científico. Veto, arbitraje, registro, agenda, auditoría |
| `emf-salud` | Exposición electromagnética y salud (ELF y RF) |
| `sensibilidad-emf` | Electrohipersensibilidad (EHS / IEI-EMF) |
| `spiro` | Tecnología SPIRO y filtros |
| `fotobiomodulacion` | PBM: mecanismos, dosimetría, indicaciones, seguridad |
| `luz-aplicada` | Deporte, belleza, antienvejecimiento |
| `alimentacion` | Nutrición en intersección con las líneas de Ekio |
| `ejercicio` | Ejercicio físico, hormesis, sinergia con PBM |
| `suplementacion-fitoterapia` | Suplementos, plantas, soporte a Laittin |
| `sintesis-mtc` | Capa interpretativa en Medicina Tradicional China |

## Uso típico

```
> /investigar PBM y recuperación muscular en amateurs de resistencia,
  para el capítulo 4 del libro

> /investigar qué podemos decir de SPIRO en una ficha de producto

> heruca: audita el registro, toca revisión trimestral
```

Heruca reparte el trabajo. Si ya tienes un informe entregado y quieres la capa MTC, pídesela:
`> pasa ese informe por sintesis-mtc`.

## Fuentes

El departamento tiene acceso al corpus de NotebookLM (25 notebooks) y al resto de
investigaciones vivas de Ekio — libro *Electrobiofotónica*, expediente PCT, protocolos de Ekio
Light, referencias de `Skills/`. **Ninguna de ellas cuenta como evidencia**: son localizadores
para llegar al paper. Las reglas están en `docs/04-fuentes-internas.md`.

## Reglas que no se negocian

1. Todo hallazgo lleva nivel de evidencia [A]–[E]
2. Todo informe incluye evidencia contraria
3. Todo informe incluye "qué diría un escéptico bien informado"
4. Ninguna versión posterior de una afirmación puede ser más fuerte que la original
5. Nada llega a canal público sin pasar por Heruca

## Pendiente de decidir

- Si Heruca aparece en comunicación externa, debe identificarse como sistema de IA
- Verificación legal con asesoría antes de aplicar `docs/01-limites-por-canal.md` a fichas de
  producto
