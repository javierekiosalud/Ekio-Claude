/**
 * MCP Server — TikTok Shop + TikTok Ads for EKIO Electrosmog España
 *
 * Two independent surfaces in one server:
 *
 *   1. TikTok Shop Partner API  (https://open-api.tiktokglobalshop.com)
 *      → productos, pedidos, GMV, inventario, precios, liquidaciones
 *
 *   2. TikTok Ads / Business API (https://business-api.tiktok.com)
 *      → campañas (GMV Max / Video Shopping Ads) y reporting de rendimiento
 *
 * Cada bloque se activa solo si sus variables de entorno están presentes,
 * así que puedes arrancar con Shop y añadir Ads más tarde.
 *
 * Variables de entorno — TikTok Shop:
 *   TTS_APP_KEY        — App key de TikTok Shop Partner Center
 *   TTS_APP_SECRET     — App secret
 *   TTS_ACCESS_TOKEN   — Access token del vendedor (caduca; ver tiktok_shop_refresh_token)
 *   TTS_REFRESH_TOKEN  — Refresh token
 *   TTS_SHOP_CIPHER    — Cipher de la tienda (obtenlo con tiktok_shop_get_shops)
 *
 * Variables de entorno — TikTok Ads (opcional):
 *   TT_ADS_ACCESS_TOKEN — Access token de TikTok for Business
 *   TT_ADS_ADVERTISER_ID — Advertiser ID por defecto
 *
 * NOTA sobre versiones de API: TikTok versiona por fecha (202309, 202312, 202405…).
 * Las rutas aquí usan las versiones estables más extendidas. Si TikTok deprecia una,
 * el error de la API lo dirá explícitamente y basta con cambiar la constante VERSIONS.
 */

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import crypto from "node:crypto";

// ─── Config ──────────────────────────────────────────────────────────────────

const SHOP_API = "https://open-api.tiktokglobalshop.com";
const AUTH_API = "https://auth.tiktok-shops.com";
const ADS_API = "https://business-api.tiktok.com/open_api/v1.3";

const APP_KEY = process.env.TTS_APP_KEY || "";
const APP_SECRET = process.env.TTS_APP_SECRET || "";
const ACCESS_TOKEN = process.env.TTS_ACCESS_TOKEN || "";
const REFRESH_TOKEN = process.env.TTS_REFRESH_TOKEN || "";
const SHOP_CIPHER = process.env.TTS_SHOP_CIPHER || "";

const ADS_TOKEN = process.env.TT_ADS_ACCESS_TOKEN || "";
const ADS_ADVERTISER = process.env.TT_ADS_ADVERTISER_ID || "";

const VERSIONS = {
  authorization: "202309",
  product: "202309",
  order: "202309",
  finance: "202309",
};

const SHOP_ENABLED = Boolean(APP_KEY && APP_SECRET && ACCESS_TOKEN);
const ADS_ENABLED = Boolean(ADS_TOKEN);

if (!SHOP_ENABLED && !ADS_ENABLED) {
  console.error(
    "[tiktok-shop] Sin credenciales. Define TTS_APP_KEY + TTS_APP_SECRET + TTS_ACCESS_TOKEN " +
      "(TikTok Shop) y/o TT_ADS_ACCESS_TOKEN (TikTok Ads)."
  );
  process.exit(1);
}

// ─── Helpers comunes ─────────────────────────────────────────────────────────

function ok(text) {
  return { content: [{ type: "text", text }] };
}

function err(e) {
  return { content: [{ type: "text", text: `Error: ${e.message}` }], isError: true };
}

const EUR = new Intl.NumberFormat("es-ES", { style: "currency", currency: "EUR" });

function money(v) {
  const n = Number(v);
  return Number.isFinite(n) ? EUR.format(n) : String(v ?? "—");
}

function toMs(input) {
  // Acepta "2026-08-01", "2026-08-01T10:00:00Z" o epoch en segundos.
  if (typeof input === "number") return input * 1000;
  const d = new Date(input);
  if (Number.isNaN(d.getTime())) throw new Error(`Fecha inválida: ${input}`);
  return d.getTime();
}

function toEpochSeconds(input) {
  return Math.floor(toMs(input) / 1000);
}

// ─── Firma HMAC-SHA256 de TikTok Shop ────────────────────────────────────────
//
// Algoritmo oficial:
//   1. Coger los query params, excluyendo `sign` y `access_token`
//   2. Ordenar las claves alfabéticamente
//   3. Concatenar `{clave}{valor}` sin separadores
//   4. Anteponer la ruta del endpoint
//   5. Añadir el cuerpo crudo de la petición (si no es multipart)
//   6. Envolver el resultado con el app_secret por delante y por detrás
//   7. HMAC-SHA256 con app_secret como clave, salida en hexadecimal

function signRequest(path, queryParams, rawBody) {
  const excluded = new Set(["sign", "access_token"]);
  const keys = Object.keys(queryParams)
    .filter((k) => !excluded.has(k) && queryParams[k] !== undefined && queryParams[k] !== null)
    .sort();

  let base = keys.map((k) => `${k}${queryParams[k]}`).join("");
  base = path + base;
  if (rawBody) base += rawBody;
  base = APP_SECRET + base + APP_SECRET;

  return crypto.createHmac("sha256", APP_SECRET).update(base, "utf8").digest("hex");
}

async function shopRequest(method, path, { query = {}, body, useCipher = true } = {}) {
  if (!SHOP_ENABLED) throw new Error("TikTok Shop no está configurado (faltan TTS_APP_KEY/TTS_APP_SECRET/TTS_ACCESS_TOKEN).");

  const params = {
    app_key: APP_KEY,
    timestamp: Math.floor(Date.now() / 1000),
    ...query,
  };

  if (useCipher) {
    const cipher = query.shop_cipher || SHOP_CIPHER;
    if (!cipher) {
      throw new Error(
        "Falta shop_cipher. Ejecuta tiktok_shop_get_shops para obtenerlo y guárdalo en TTS_SHOP_CIPHER."
      );
    }
    params.shop_cipher = cipher;
  }

  const rawBody = body ? JSON.stringify(body) : undefined;
  params.sign = signRequest(path, params, rawBody);

  const url = new URL(SHOP_API + path);
  for (const [k, v] of Object.entries(params)) url.searchParams.set(k, String(v));

  const res = await fetch(url.toString(), {
    method,
    headers: {
      "x-tts-access-token": ACCESS_TOKEN,
      "content-type": "application/json",
    },
    body: rawBody,
  });

  const json = await res.json().catch(() => ({}));

  // TikTok Shop devuelve HTTP 200 con code != 0 en los errores de negocio.
  if (json.code !== 0 && json.code !== undefined) {
    throw new Error(`TikTok Shop API ${json.code}: ${json.message || "sin mensaje"}`);
  }
  if (!res.ok) {
    throw new Error(`TikTok Shop HTTP ${res.status}: ${JSON.stringify(json).slice(0, 400)}`);
  }

  return json.data ?? json;
}

async function adsRequest(path, query = {}) {
  if (!ADS_ENABLED) throw new Error("TikTok Ads no está configurado (falta TT_ADS_ACCESS_TOKEN).");

  const url = new URL(ADS_API + path);
  for (const [k, v] of Object.entries(query)) {
    if (v === undefined || v === null) continue;
    url.searchParams.set(k, typeof v === "object" ? JSON.stringify(v) : String(v));
  }

  const res = await fetch(url.toString(), {
    headers: { "Access-Token": ADS_TOKEN, "Content-Type": "application/json" },
  });
  const json = await res.json().catch(() => ({}));

  if (json.code !== 0 && json.code !== undefined) {
    throw new Error(`TikTok Ads API ${json.code}: ${json.message || "sin mensaje"}`);
  }
  return json.data ?? json;
}

// ─── Server init ─────────────────────────────────────────────────────────────

const server = new McpServer({ name: "tiktok-shop", version: "1.0.0" });

const fmt = z.enum(["markdown", "json"]).default("markdown").describe("Formato de salida");

// ═════════════════════════════════════════════════════════════════════════════
// BLOQUE 1 — TIKTOK SHOP
// ═════════════════════════════════════════════════════════════════════════════

if (SHOP_ENABLED) {
  // ─── Tiendas autorizadas (devuelve el shop_cipher) ─────────────────────────

  server.tool(
    "tiktok_shop_get_shops",
    "Lista las tiendas de TikTok Shop autorizadas por el token actual. Devuelve el shop_cipher, que es OBLIGATORIO para todas las demás llamadas. Ejecuta esto primero al configurar la conexión y guarda el cipher en TTS_SHOP_CIPHER.",
    { response_format: fmt },
    async ({ response_format }) => {
      try {
        const data = await shopRequest("GET", `/authorization/${VERSIONS.authorization}/shops`, {
          useCipher: false,
        });
        const shops = data.shops || [];
        if (!shops.length) return ok("No hay tiendas autorizadas con este token.");
        if (response_format === "json") return ok(JSON.stringify(data, null, 2));

        const lines = ["# Tiendas TikTok Shop autorizadas", ""];
        for (const s of shops) {
          lines.push(
            `## ${s.name || s.shop_name || "(sin nombre)"}`,
            `- **shop_id**: \`${s.id || s.shop_id}\``,
            `- **shop_cipher**: \`${s.cipher || s.shop_cipher}\``,
            `- **Región**: ${s.region || "—"}`,
            `- **Tipo**: ${s.seller_type || "—"}`,
            ""
          );
        }
        lines.push("> Guarda el `shop_cipher` en `TTS_SHOP_CIPHER` dentro de `~/.claude.json`.");
        return ok(lines.join("\n"));
      } catch (e) {
        return err(e);
      }
    }
  );

  // ─── Productos ─────────────────────────────────────────────────────────────

  server.tool(
    "tiktok_shop_get_products",
    "Lista los productos del catálogo de TikTok Shop con su estado, precio, stock y SKUs. Úsalo para auditar el catálogo, detectar productos sin stock, listados despublicados o precios desalineados con Shopify.",
    {
      status: z
        .enum(["ALL", "DRAFT", "PENDING", "FAILED", "ACTIVATE", "SELLER_DEACTIVATED", "PLATFORM_DEACTIVATED", "FREEZE", "DELETED"])
        .default("ALL")
        .describe("Filtrar por estado del listado. FAILED y PLATFORM_DEACTIVATED indican rechazo por compliance."),
      page_size: z.number().int().min(1).max(100).default(50),
      page_token: z.string().optional().describe("Token de paginación de una respuesta anterior"),
      response_format: fmt,
    },
    async ({ status, page_size, page_token, response_format }) => {
      try {
        const body = {};
        if (status !== "ALL") body.status = status;

        const data = await shopRequest("POST", `/product/${VERSIONS.product}/products/search`, {
          query: { page_size, ...(page_token ? { page_token } : {}) },
          body,
        });

        const products = data.products || [];
        if (!products.length) return ok("No se encontraron productos con ese filtro.");
        if (response_format === "json") return ok(JSON.stringify(data, null, 2));

        const lines = [`# Catálogo TikTok Shop (${products.length} productos)`, ""];
        for (const p of products) {
          const skus = p.skus || [];
          const stock = skus.reduce(
            (acc, s) => acc + (s.inventory || []).reduce((a, i) => a + (i.quantity || 0), 0),
            0
          );
          const price = skus[0]?.price?.tax_exclusive_price ?? skus[0]?.price?.sale_price;
          const currency = skus[0]?.price?.currency || "EUR";
          lines.push(
            `## ${p.title}`,
            `- **product_id**: \`${p.id}\``,
            `- **Estado**: ${p.status}${p.status === "FAILED" || p.status === "PLATFORM_DEACTIVATED" ? " ⚠️ REVISAR COMPLIANCE" : ""}`,
            `- **Precio**: ${price ?? "—"} ${currency}`,
            `- **Stock total**: ${stock}${stock === 0 ? " ⚠️ SIN STOCK" : ""}`,
            `- **SKUs**: ${skus.length}`,
            ""
          );
        }
        if (data.next_page_token) lines.push(`> Siguiente página: \`${data.next_page_token}\``);
        return ok(lines.join("\n"));
      } catch (e) {
        return err(e);
      }
    }
  );

  server.tool(
    "tiktok_shop_get_product",
    "Detalle completo de un producto de TikTok Shop: descripción, imágenes, atributos, SKUs, certificaciones y motivo de rechazo si el listado fue denegado. Úsalo para diagnosticar por qué un listado está en FAILED.",
    {
      product_id: z.string().describe("ID del producto (de tiktok_shop_get_products)"),
      response_format: fmt,
    },
    async ({ product_id, response_format }) => {
      try {
        const data = await shopRequest("GET", `/product/${VERSIONS.product}/products/${product_id}`);
        if (response_format === "json") return ok(JSON.stringify(data, null, 2));

        const lines = [
          `# ${data.title || product_id}`,
          "",
          `- **Estado**: ${data.status}`,
          `- **Categoría**: ${data.category_chains?.map((c) => c.local_name).join(" › ") || "—"}`,
          `- **Marca**: ${data.brand?.name || "—"}`,
          "",
        ];

        if (data.audit_failed_reasons?.length) {
          lines.push("## ⚠️ Motivos de rechazo", "");
          for (const r of data.audit_failed_reasons) {
            lines.push(`- **${r.position || "listado"}**: ${r.reasons?.join("; ") || r.suggestions?.join("; ") || "—"}`);
          }
          lines.push("");
        }

        if (data.skus?.length) {
          lines.push("## SKUs", "");
          for (const s of data.skus) {
            const stock = (s.inventory || []).reduce((a, i) => a + (i.quantity || 0), 0);
            lines.push(`- \`${s.id}\` — ${s.seller_sku || "—"} · ${s.price?.sale_price ?? "—"} ${s.price?.currency ?? ""} · stock ${stock}`);
          }
          lines.push("");
        }

        if (data.description) {
          lines.push("## Descripción", "", String(data.description).replace(/<[^>]+>/g, " ").slice(0, 1500), "");
        }

        return ok(lines.join("\n"));
      } catch (e) {
        return err(e);
      }
    }
  );

  // ─── Pedidos ───────────────────────────────────────────────────────────────

  server.tool(
    "tiktok_shop_get_orders",
    "Busca pedidos de TikTok Shop en un rango de fechas. Devuelve importe, estado, productos y cantidad. Es la fuente de verdad para el GMV real; para el resumen agregado usa tiktok_shop_gmv_summary.",
    {
      create_time_ge: z.string().describe("Fecha inicio inclusive, p. ej. '2026-08-01'"),
      create_time_lt: z.string().describe("Fecha fin exclusive, p. ej. '2026-09-01'"),
      order_status: z
        .enum(["ALL", "UNPAID", "ON_HOLD", "AWAITING_SHIPMENT", "PARTIALLY_SHIPPING", "AWAITING_COLLECTION", "IN_TRANSIT", "DELIVERED", "COMPLETED", "CANCELLED"])
        .default("ALL"),
      page_size: z.number().int().min(1).max(100).default(50),
      page_token: z.string().optional(),
      response_format: fmt,
    },
    async ({ create_time_ge, create_time_lt, order_status, page_size, page_token, response_format }) => {
      try {
        const body = {
          create_time_ge: toEpochSeconds(create_time_ge),
          create_time_lt: toEpochSeconds(create_time_lt),
        };
        if (order_status !== "ALL") body.order_status = order_status;

        const data = await shopRequest("POST", `/order/${VERSIONS.order}/orders/search`, {
          query: { page_size, sort_field: "create_time", sort_order: "DESC", ...(page_token ? { page_token } : {}) },
          body,
        });

        const orders = data.orders || [];
        if (!orders.length) return ok(`Sin pedidos entre ${create_time_ge} y ${create_time_lt}.`);
        if (response_format === "json") return ok(JSON.stringify(data, null, 2));

        const lines = [`# Pedidos TikTok Shop · ${create_time_ge} → ${create_time_lt}`, "", `**${orders.length} pedidos en esta página**`, ""];
        for (const o of orders) {
          const items = (o.line_items || []).map((li) => `${li.product_name} ×${li.quantity ?? 1}`).join(", ");
          lines.push(
            `- \`${o.id}\` · ${o.status} · ${money(o.payment?.total_amount)} · ${new Date((o.create_time || 0) * 1000).toLocaleDateString("es-ES")}`,
            `  ${items || "—"}`
          );
        }
        if (data.next_page_token) lines.push("", `> Siguiente página: \`${data.next_page_token}\``);
        return ok(lines.join("\n"));
      } catch (e) {
        return err(e);
      }
    }
  );

  // ─── GMV summary: la herramienta de seguimiento del objetivo ───────────────

  server.tool(
    "tiktok_shop_gmv_summary",
    "Resumen agregado de GMV en TikTok Shop para un periodo: total vendido, número de pedidos, AOV, desglose por producto y progreso frente a los objetivos anuales de EKIO (100.000 € Ekio Light + 50.000 € Spiro). Es la herramienta principal de seguimiento. Pagina automáticamente todos los pedidos del rango.",
    {
      create_time_ge: z.string().describe("Fecha inicio inclusive, p. ej. '2026-01-01'"),
      create_time_lt: z.string().describe("Fecha fin exclusive, p. ej. '2026-12-31'"),
      exclude_cancelled: z.boolean().default(true).describe("Excluir pedidos cancelados del GMV"),
      response_format: fmt,
    },
    async ({ create_time_ge, create_time_lt, exclude_cancelled, response_format }) => {
      try {
        const body = {
          create_time_ge: toEpochSeconds(create_time_ge),
          create_time_lt: toEpochSeconds(create_time_lt),
        };

        const all = [];
        let token;
        let guard = 0;
        do {
          const data = await shopRequest("POST", `/order/${VERSIONS.order}/orders/search`, {
            query: { page_size: 100, sort_field: "create_time", sort_order: "DESC", ...(token ? { page_token: token } : {}) },
            body,
          });
          all.push(...(data.orders || []));
          token = data.next_page_token;
          guard += 1;
        } while (token && guard < 50);

        const orders = exclude_cancelled ? all.filter((o) => o.status !== "CANCELLED") : all;
        if (!orders.length) return ok(`Sin pedidos entre ${create_time_ge} y ${create_time_lt}.`);

        let gmv = 0;
        const byProduct = new Map();
        for (const o of orders) {
          gmv += Number(o.payment?.total_amount || 0);
          for (const li of o.line_items || []) {
            const name = li.product_name || "(sin nombre)";
            const cur = byProduct.get(name) || { units: 0, revenue: 0 };
            cur.units += Number(li.quantity || 1);
            cur.revenue += Number(li.sale_price || li.original_price || 0) * Number(li.quantity || 1);
            byProduct.set(name, cur);
          }
        }

        const aov = gmv / orders.length;
        const ranked = [...byProduct.entries()].sort((a, b) => b[1].revenue - a[1].revenue);

        // Clasificación heurística por línea de producto EKIO
        const isLight = (n) => /light|core|deep|regen|spectrum|panel|fotobiomod|luz roja/i.test(n);
        const isSpiro = (n) => /spiro|stroom|card|disc|square/i.test(n);
        const lightRev = ranked.filter(([n]) => isLight(n)).reduce((a, [, v]) => a + v.revenue, 0);
        const spiroRev = ranked.filter(([n]) => isSpiro(n) && !isLight(n)).reduce((a, [, v]) => a + v.revenue, 0);

        if (response_format === "json") {
          return ok(JSON.stringify({ gmv, orders: orders.length, aov, lightRev, spiroRev, byProduct: Object.fromEntries(byProduct) }, null, 2));
        }

        const bar = (pct) => {
          const filled = Math.max(0, Math.min(20, Math.round(pct / 5)));
          return "█".repeat(filled) + "░".repeat(20 - filled);
        };
        const lightPct = (lightRev / 100000) * 100;
        const spiroPct = (spiroRev / 50000) * 100;

        const lines = [
          `# GMV TikTok Shop · ${create_time_ge} → ${create_time_lt}`,
          "",
          `| Métrica | Valor |`,
          `|---|---|`,
          `| GMV total | **${money(gmv)}** |`,
          `| Pedidos | ${orders.length} |`,
          `| AOV | ${money(aov)} |`,
          `| Comisión TikTok (9%) | −${money(gmv * 0.09)} |`,
          `| Neto tras comisión | ${money(gmv * 0.91)} |`,
          "",
          "## Progreso frente a objetivo",
          "",
          `**Ekio Light** ${bar(lightPct)} ${lightPct.toFixed(1)}%  ·  ${money(lightRev)} / 100.000 €`,
          `**Spiro**      ${bar(spiroPct)} ${spiroPct.toFixed(1)}%  ·  ${money(spiroRev)} / 50.000 €`,
          "",
          "## Top productos por facturación",
          "",
          "| Producto | Uds | Facturación |",
          "|---|---|---|",
        ];
        for (const [name, v] of ranked.slice(0, 20)) {
          lines.push(`| ${name} | ${v.units} | ${money(v.revenue)} |`);
        }
        lines.push("", "> Clasificación Light/Spiro por heurística de nombre. Si un producto no encaja, renómbralo en el catálogo o ajusta el patrón.");
        return ok(lines.join("\n"));
      } catch (e) {
        return err(e);
      }
    }
  );

  // ─── Finanzas ──────────────────────────────────────────────────────────────

  server.tool(
    "tiktok_shop_get_statements",
    "Liquidaciones (settlements) de TikTok Shop: lo que TikTok realmente te ingresa tras comisiones, envío y ajustes. Úsalo para calcular el margen real, no el GMV bruto.",
    {
      statement_time_ge: z.string().describe("Fecha inicio, p. ej. '2026-07-01'"),
      statement_time_lt: z.string().describe("Fecha fin, p. ej. '2026-08-01'"),
      page_size: z.number().int().min(1).max(100).default(50),
      response_format: fmt,
    },
    async ({ statement_time_ge, statement_time_lt, page_size, response_format }) => {
      try {
        const data = await shopRequest("GET", `/finance/${VERSIONS.finance}/statements`, {
          query: {
            page_size,
            statement_time_ge: toEpochSeconds(statement_time_ge),
            statement_time_lt: toEpochSeconds(statement_time_lt),
            sort_field: "statement_time",
          },
        });
        const st = data.statements || [];
        if (!st.length) return ok("Sin liquidaciones en ese rango.");
        if (response_format === "json") return ok(JSON.stringify(data, null, 2));

        let net = 0;
        let fees = 0;
        const lines = [`# Liquidaciones · ${statement_time_ge} → ${statement_time_lt}`, "", "| Fecha | Ingresos | Comisiones | Neto | Estado |", "|---|---|---|---|---|"];
        for (const s of st) {
          net += Number(s.settlement_amount || 0);
          fees += Number(s.fee_amount || 0);
          lines.push(
            `| ${new Date((s.statement_time || 0) * 1000).toLocaleDateString("es-ES")} | ${money(s.revenue_amount)} | ${money(s.fee_amount)} | ${money(s.settlement_amount)} | ${s.status || "—"} |`
          );
        }
        lines.push("", `**Total neto liquidado**: ${money(net)}  ·  **Total comisiones**: ${money(fees)}`);
        return ok(lines.join("\n"));
      } catch (e) {
        return err(e);
      }
    }
  );

  // ─── Inventario y precio ───────────────────────────────────────────────────

  server.tool(
    "tiktok_shop_update_inventory",
    "Actualiza el stock de un SKU en TikTok Shop. ACCIÓN DE ESCRITURA: confirma con Javier antes de ejecutar. Úsalo para sincronizar con Shopify o cortar ventas de un producto agotado.",
    {
      product_id: z.string(),
      sku_id: z.string(),
      quantity: z.number().int().min(0),
      warehouse_id: z.string().optional().describe("ID de almacén; omítelo si solo hay uno"),
    },
    async ({ product_id, sku_id, quantity, warehouse_id }) => {
      try {
        const body = {
          skus: [{ id: sku_id, inventory: [{ quantity, ...(warehouse_id ? { warehouse_id } : {}) }] }],
        };
        await shopRequest("POST", `/product/${VERSIONS.product}/products/${product_id}/inventory/update`, { body });
        return ok(`✅ Stock actualizado: SKU \`${sku_id}\` → ${quantity} unidades.`);
      } catch (e) {
        return err(e);
      }
    }
  );

  server.tool(
    "tiktok_shop_update_price",
    "Actualiza el precio de un SKU en TikTok Shop. ACCIÓN DE ESCRITURA: confirma con Javier antes de ejecutar. Recuerda que la comisión de TikTok en España es del 9% desde el 8/ene/2026 — comprueba el margen antes de bajar precio.",
    {
      product_id: z.string(),
      sku_id: z.string(),
      price: z.string().describe("Precio como cadena, p. ej. '147.00'"),
      currency: z.string().default("EUR"),
    },
    async ({ product_id, sku_id, price, currency }) => {
      try {
        const body = { skus: [{ id: sku_id, price: { amount: price, currency } }] };
        await shopRequest("POST", `/product/${VERSIONS.product}/products/${product_id}/prices/update`, { body });
        return ok(`✅ Precio actualizado: SKU \`${sku_id}\` → ${price} ${currency}.`);
      } catch (e) {
        return err(e);
      }
    }
  );

  // ─── Refresh token ─────────────────────────────────────────────────────────

  server.tool(
    "tiktok_shop_refresh_token",
    "Renueva el access token de TikTok Shop usando el refresh token. Los access tokens caducan (típicamente a los 7 días). Si cualquier herramienta devuelve un error de autenticación, ejecuta esto y guarda el token nuevo en ~/.claude.json.",
    {},
    async () => {
      try {
        if (!REFRESH_TOKEN) throw new Error("Falta TTS_REFRESH_TOKEN.");
        const url = new URL(`${AUTH_API}/api/v2/token/refresh`);
        url.searchParams.set("app_key", APP_KEY);
        url.searchParams.set("app_secret", APP_SECRET);
        url.searchParams.set("refresh_token", REFRESH_TOKEN);
        url.searchParams.set("grant_type", "refresh_token");

        const res = await fetch(url.toString());
        const json = await res.json();
        if (json.code !== 0) throw new Error(`${json.code}: ${json.message}`);

        const d = json.data;
        return ok(
          [
            "✅ Token renovado. Actualiza `~/.claude.json` → mcpServers → tiktok-shop → env:",
            "",
            "```json",
            `"TTS_ACCESS_TOKEN": "${d.access_token}",`,
            `"TTS_REFRESH_TOKEN": "${d.refresh_token}"`,
            "```",
            "",
            `Caduca: ${new Date(d.access_token_expire_in * 1000).toLocaleString("es-ES")}`,
            "",
            "Después reinicia Claude para que cargue el token nuevo.",
          ].join("\n")
        );
      } catch (e) {
        return err(e);
      }
    }
  );
}

// ═════════════════════════════════════════════════════════════════════════════
// BLOQUE 2 — TIKTOK ADS / BUSINESS
// ═════════════════════════════════════════════════════════════════════════════

if (ADS_ENABLED) {
  server.tool(
    "tiktok_ads_get_advertisers",
    "Lista las cuentas publicitarias de TikTok Ads accesibles con el token actual. Ejecuta esto primero para descubrir el advertiser_id.",
    { response_format: fmt },
    async ({ response_format }) => {
      try {
        const data = await adsRequest("/oauth2/advertiser/get/", {});
        const list = data.list || [];
        if (!list.length) return ok("Sin cuentas publicitarias para este token.");
        if (response_format === "json") return ok(JSON.stringify(data, null, 2));
        const lines = ["# Cuentas TikTok Ads", ""];
        for (const a of list) lines.push(`- **${a.advertiser_name}** — \`${a.advertiser_id}\``);
        return ok(lines.join("\n"));
      } catch (e) {
        return err(e);
      }
    }
  );

  server.tool(
    "tiktok_ads_get_campaigns",
    "Lista campañas de TikTok Ads con objetivo, estado y presupuesto. Para EKIO las relevantes son las de tipo GMV Max / Product Shopping Ads que empujan el catálogo de TikTok Shop.",
    {
      advertiser_id: z.string().optional().describe("Usa TT_ADS_ADVERTISER_ID si se omite"),
      page_size: z.number().int().min(1).max(100).default(20),
      response_format: fmt,
    },
    async ({ advertiser_id, page_size, response_format }) => {
      try {
        const adv = advertiser_id || ADS_ADVERTISER;
        if (!adv) throw new Error("Falta advertiser_id (define TT_ADS_ADVERTISER_ID).");
        const data = await adsRequest("/campaign/get/", { advertiser_id: adv, page_size });
        const list = data.list || [];
        if (!list.length) return ok("Sin campañas.");
        if (response_format === "json") return ok(JSON.stringify(data, null, 2));
        const lines = ["# Campañas TikTok Ads", "", "| Campaña | Objetivo | Estado | Presupuesto |", "|---|---|---|---|"];
        for (const c of list) {
          lines.push(`| ${c.campaign_name} | ${c.objective_type} | ${c.operation_status} | ${c.budget ?? "—"} ${c.budget_mode ?? ""} |`);
        }
        return ok(lines.join("\n"));
      } catch (e) {
        return err(e);
      }
    }
  );

  server.tool(
    "tiktok_ads_get_report",
    "Informe de rendimiento de TikTok Ads: gasto, impresiones, clics, CTR, CPC, conversiones y ROAS. Úsalo para saber si el paid está siendo rentable frente al 9% de comisión + coste de producto.",
    {
      advertiser_id: z.string().optional(),
      start_date: z.string().describe("YYYY-MM-DD"),
      end_date: z.string().describe("YYYY-MM-DD"),
      level: z.enum(["AUCTION_CAMPAIGN", "AUCTION_ADGROUP", "AUCTION_AD"]).default("AUCTION_CAMPAIGN"),
      response_format: fmt,
    },
    async ({ advertiser_id, start_date, end_date, level, response_format }) => {
      try {
        const adv = advertiser_id || ADS_ADVERTISER;
        if (!adv) throw new Error("Falta advertiser_id (define TT_ADS_ADVERTISER_ID).");

        const dimension = level === "AUCTION_CAMPAIGN" ? ["campaign_id"] : level === "AUCTION_ADGROUP" ? ["adgroup_id"] : ["ad_id"];
        const metrics = [
          "spend", "impressions", "clicks", "ctr", "cpc", "cpm",
          "conversion", "cost_per_conversion", "conversion_rate",
          "complete_payment_roas", "complete_payment",
        ];

        const data = await adsRequest("/report/integrated/get/", {
          advertiser_id: adv,
          report_type: "BASIC",
          data_level: level,
          dimensions: dimension,
          metrics,
          start_date,
          end_date,
          page_size: 50,
        });

        const list = data.list || [];
        if (!list.length) return ok(`Sin datos entre ${start_date} y ${end_date}.`);
        if (response_format === "json") return ok(JSON.stringify(data, null, 2));

        let spend = 0;
        let revenue = 0;
        const lines = [`# Rendimiento TikTok Ads · ${start_date} → ${end_date}`, "", "| ID | Gasto | Impr. | CTR | CPC | Compras | ROAS |", "|---|---|---|---|---|---|---|"];
        for (const r of list) {
          const m = r.metrics || {};
          spend += Number(m.spend || 0);
          revenue += Number(m.spend || 0) * Number(m.complete_payment_roas || 0);
          lines.push(
            `| ${Object.values(r.dimensions || {})[0]} | ${money(m.spend)} | ${m.impressions ?? "—"} | ${m.ctr ?? "—"}% | ${money(m.cpc)} | ${m.complete_payment ?? "—"} | ${m.complete_payment_roas ?? "—"} |`
          );
        }
        const roas = spend ? revenue / spend : 0;
        lines.push("", `**Gasto total**: ${money(spend)}  ·  **Revenue atribuido**: ${money(revenue)}  ·  **ROAS global**: ${roas.toFixed(2)}x`);
        lines.push("", `> Punto de equilibrio EKIO en TikTok: con 9% de comisión, el ROAS mínimo depende del margen bruto del SKU. Consulta el módulo de economía unitaria del skill \`tiktok-shop-growth\`.`);
        return ok(lines.join("\n"));
      } catch (e) {
        return err(e);
      }
    }
  );
}

// ─── Arranque ────────────────────────────────────────────────────────────────

const transport = new StdioServerTransport();
await server.connect(transport);
console.error(
  `[tiktok-shop] MCP listo — Shop: ${SHOP_ENABLED ? "ON" : "OFF"} · Ads: ${ADS_ENABLED ? "ON" : "OFF"}`
);
