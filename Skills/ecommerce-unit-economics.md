---
name: ecommerce-unit-economics
description: >
  Skill de márgenes y unit economics por SKU para EKIO. Calcula el margen de contribución
  real de cada producto (COGS + CAC + pasarela + logística + comisión de canal), el
  break-even por SKU, y cómo repercutir subidas de coste de proveedor sin romper la
  rentabilidad. Úsalo cuando el usuario pregunte "¿qué margen deja este producto?",
  "¿soy rentable con este SKU?", "el proveedor subió el precio, ¿qué hago?", o quiera
  comparar la rentabilidad real entre dos productos del catálogo.
---

# Ecommerce Unit Economics — Margen Real por SKU

## Por qué este skill existe

`ecommerce-metrics-finance` mide la rentabilidad del **negocio** (MER, Contribution Margin
agregado, sueldo del fundador). Este skill baja un nivel: mide la rentabilidad de **un SKU
concreto**, que es la pregunta que se hace antes de decidir qué empujar en ads, qué subir de
precio, o qué hacer cuando un proveedor sube coste.

---

## La fórmula completa (no la de catálogo)

```
Margen de contribución por unidad = Precio de venta
                                    − COGS (producto + packaging)
                                    − CAC atribuido (gasto en ads / unidades vendidas de ese SKU)
                                    − Coste de pasarela de pago (~1.5-2.9% + fijo)
                                    − Logística (envío + % de devoluciones × coste de devolución)
                                    − Comisión de canal si aplica (TikTok Shop: 9%; Sharpei: variable)

% Margen de contribución = Margen de contribución / Precio de venta
```

**Error habitual a evitar**: calcular "margen" como precio menos coste de fábrica y parar ahí.
Ese número siempre parece mejor de lo que es — ignora que cada venta también paga el ads que la
trajo y el envío que la entregó.

---

## Break-even por SKU

```
Unidades/mes para break-even = Coste fijo asignado a esa línea / Margen de contribución por unidad
```

El coste fijo asignado es la parte proporcional de nómina/freelances, SaaS y otros fijos que le
corresponde a esa línea de producto — no el 100% del fijo del negocio contra un solo SKU.

---

## Umbral mínimo de margen (definir con Javier, punto de partida sugerido)

| Tipo de producto | Umbral sugerido de contribución | Por qué |
|---|---|---|
| Producto físico ancla (Spiro, paneles) | ≥50% | Tiene que financiar su propio CAC y dejar margen para reinvertir |
| Producto de entrada / lead product | ≥30% aceptable si empuja recompra | El margen real se recupera en el LTV, no en la primera venta — coordina con `retention-ltv` |
| Suplementos en suscripción | ≥60% | Sin CAC recurrente tras la primera venta, el margen debe ser alto |

Si un cálculo da por debajo del umbral, no se "acepta" sin más — se decide explícitamente
(ver protocolo de subida de proveedor abajo) y se registra la razón.

---

## Protocolo: subida de precio de proveedor (caso Noxtak/SPIRO)

Cuando un proveedor sube MSRP y el margen de contribución cae:

```
PASO 1 — Recalcula el margen de contribución con el coste nuevo
PASO 2 — Compara contra el umbral mínimo de esa línea
PASO 3 — Si sigue por encima del umbral: no hace falta acción, documentar el nuevo margen
PASO 4 — Si cae por debajo, plantea las 3 opciones — nunca decidas cuál solo:
         a) Subir precio de venta (calcula cuánto hace falta subir para volver al umbral)
         b) Buscar proveedor alternativo o negociar volumen
         c) Aceptar el margen menor porque el SKU es ancla y arrastra recompra de mayor margen
            (cross-check con retention-agent: ¿cuál es el LTV de quien entra por este SKU?)
PASO 5 — Lo que decida Javier lo registra `finanzas-operaciones-agent` en el cierre del mes
```

---

## Comparar rentabilidad entre SKUs (para decidir qué empujar en ads)

No compares por precio de venta ni por unidades vendidas — compara por:

```
Margen de contribución total generado = Margen de contribución por unidad × unidades vendidas/mes
ROAS mínimo rentable = 1 / % Margen de contribución
```

Ejemplo: si un SKU deja 40% de margen de contribución, el ROAS mínimo para no perder dinero en
esa campaña es 2.5x — cualquier ROAS reportado por debajo de eso está financiando ventas, no
generándolas.

---

## Formato de entrega

1. Tabla: Precio − COGS − CAC − pasarela − logística − comisión = Margen € y %
2. Comparación contra el umbral mínimo de esa línea
3. Si aplica, ROAS mínimo rentable para ese SKU
4. Una recomendación concreta, no una lista — igual que el resto del agente Ecommerce

---

## Integración

| Necesidad | Combinar con |
|---|---|
| El margen agregado del negocio, no de un SKU | `ecommerce-metrics-finance` |
| El cierre mensual oficial y el registro de la decisión | `finanzas-operaciones-ekio` (agente Finanzas & Operaciones) |
| El LTV de quien entra por un SKU de margen bajo | `retention-ltv` |
| Decisión final de pricing estratégico | `ceo-orchestrator` (Módulo 3) |
