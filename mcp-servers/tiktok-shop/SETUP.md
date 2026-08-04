# Conectar Claude con TikTok Shop y TikTok Ads

Guía de puesta en marcha del servidor MCP `tiktok-shop`.
Los pasos que implican credenciales los tiene que hacer Javier: Claude no introduce contraseñas ni tokens en ningún formulario.

---

## Requisito previo: la tienda debe existir

El MCP se conecta a una tienda **ya creada y verificada**. Si TikTok Shop aún no está abierto, primero va el Módulo 1 del skill `tiktok-shop-growth` (y conviene no abrirla hasta tener el catálogo listo, por la ventana del 4 % de comisión durante los primeros 60 días).

Decisión previa a todo: **¿la tienda cuelga del autónomo Francisco Javier Andrés o de Ekio Bienestar S.L.?** Cambiarlo después obliga a rehacer la tienda desde cero.

---

## Paso 1 — Crear la app en TikTok Shop Partner Center

1. Entrar en <https://partner.tiktokshop.com> y registrarse como **desarrollador** con la cuenta de EKIO
2. *Manage Apps* → *Create App*
3. Tipo de app: **Self-service / Private** (es para uso propio, no para publicar en el marketplace)
4. Permisos (scopes) a solicitar:

   | Scope | Para qué |
   |---|---|
   | `product.list` / `product.info` | Leer catálogo y motivos de rechazo |
   | `product.update` | Actualizar stock y precios |
   | `order.list` / `order.info` | Pedidos y GMV |
   | `finance.statement` | Liquidaciones reales |

5. Al crear la app se obtienen **App Key** y **App Secret**. Guardarlos.

---

## Paso 2 — Autorizar la tienda y obtener los tokens

1. En la app, copiar la **Authorized URL** (algo como `https://services.tiktokshop.com/open/authorize?service_id=...`)
2. Abrirla en el navegador **con la sesión de vendedor de EKIO iniciada** y autorizar
3. TikTok redirige con un parámetro `code=...` en la URL. Ese código **caduca en minutos**
4. Canjearlo por tokens ejecutando esto en un terminal, sustituyendo los tres valores:

```bash
curl -s "https://auth.tiktok-shops.com/api/v2/token/get?app_key=TU_APP_KEY&app_secret=TU_APP_SECRET&auth_code=EL_CODE&grant_type=authorized_code" | python3 -m json.tool
```

La respuesta contiene `access_token` y `refresh_token`.

---

## Paso 3 — Registrar el servidor en Claude

Editar `~/.claude.json` y añadir dentro de `mcpServers`, junto a `shopify-ekio` y `meta-ads-ekio`:

```json
"tiktok-shop": {
  "type": "stdio",
  "command": "/usr/local/bin/node",
  "args": ["/Users/javierandres/Ekio-Claude/mcp-servers/tiktok-shop/index.js"],
  "env": {
    "TTS_APP_KEY": "...",
    "TTS_APP_SECRET": "...",
    "TTS_ACCESS_TOKEN": "...",
    "TTS_REFRESH_TOKEN": "...",
    "TTS_SHOP_CIPHER": ""
  }
}
```

Reiniciar Claude.

---

## Paso 4 — Obtener el `shop_cipher`

El `shop_cipher` identifica la tienda y es **obligatorio en todas las llamadas** salvo la primera. Con el servidor ya cargado, pedir a Claude:

> «Ejecuta `tiktok_shop_get_shops`»

Devuelve el cipher. Copiarlo en `TTS_SHOP_CIPHER` dentro de `~/.claude.json` y reiniciar Claude otra vez.

**A partir de aquí la conexión está viva.** Prueba:

> «Dame el resumen de GMV de TikTok Shop de este mes»

---

## Paso 5 (opcional) — TikTok Ads

Solo hace falta cuando se encienda el pago, que según el Módulo 6 del skill **no debería ser antes del mes 4**.

1. <https://business-api.tiktok.com> → crear app de desarrollador
2. Autorizar la cuenta publicitaria de EKIO y obtener el access token
3. Añadir al mismo bloque `env`:

```json
"TT_ADS_ACCESS_TOKEN": "...",
"TT_ADS_ADVERTISER_ID": "..."
```

---

## Mantenimiento

**El access token de TikTok Shop caduca (unos 7 días).** Cuando cualquier herramienta devuelva un error de autenticación:

> «Ejecuta `tiktok_shop_refresh_token`»

Devuelve el par de tokens nuevo ya formateado para pegar en `~/.claude.json`. Después, reiniciar Claude.

> Merece la pena automatizarlo con una tarea programada si la cadencia de uso es alta. De momento es manual y son 30 segundos cada semana.

---

## Qué NO puede hacer este MCP

La API de TikTok Shop cubre catálogo, pedidos y finanzas. **No** cubre:

- Publicar vídeos en la cuenta orgánica de TikTok
- Gestionar el programa de afiliados y sus comisiones
- Hacer o programar un LIVE
- Ver métricas de vídeos orgánicos (eso es la Display API, que requiere aprobación aparte de TikTok y rara vez la conceden para uso propio)

Todo eso se hace a mano en Seller Center y en la app. El trabajo del agente ahí es dejar el material listo y decir dónde va.

---

## Diagnóstico rápido

| Error | Causa | Solución |
|---|---|---|
| `Falta shop_cipher` | No está en el env | Paso 4 |
| `TikTok Shop API 105002` | Firma inválida | App Secret mal copiado |
| `TikTok Shop API 105004` | Token caducado | `tiktok_shop_refresh_token` |
| `TikTok Shop API 11001` | Falta un scope | Añadir el permiso en Partner Center y reautorizar (Paso 2) |
| El servidor no arranca | Faltan credenciales | El log dice cuáles; revisar el bloque `env` |

Comprobar que el servidor arranca, sin tocar Claude:

```bash
cd /Users/javierandres/Ekio-Claude/mcp-servers/tiktok-shop && npm install && node --check index.js
```
