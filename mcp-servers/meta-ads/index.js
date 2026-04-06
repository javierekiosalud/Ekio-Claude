/**
 * MCP Server — Meta Ads (Facebook/Instagram Ads) for EKIO Electrosmog España
 *
 * Connects to the Meta Marketing API (graph.facebook.com/v19.0).
 *
 * Required env vars:
 *   META_ACCESS_TOKEN   — System User token (ads_read + ads_management)
 *   META_AD_ACCOUNT_ID  — Default ad account ID, e.g. "act_123456789"
 */

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

// ─── Config ─────────────────────────────────────────────────────────────────

const API_BASE = "https://graph.facebook.com/v19.0";
const ACCESS_TOKEN = process.env.META_ACCESS_TOKEN || "";
const DEFAULT_ACCOUNT = process.env.META_AD_ACCOUNT_ID || "";

if (!ACCESS_TOKEN) {
  console.error("[meta-ads] META_ACCESS_TOKEN env var is required.");
  process.exit(1);
}

// ─── Shared helpers ──────────────────────────────────────────────────────────

function resolveAccount(override) {
  const acc = override || DEFAULT_ACCOUNT;
  if (!acc) throw new Error("No ad_account_id provided and META_AD_ACCOUNT_ID not set.");
  return acc.startsWith("act_") ? acc : `act_${acc}`;
}

async function metaGet(endpoint, params = {}) {
  const url = new URL(`${API_BASE}/${endpoint}`);
  url.searchParams.set("access_token", ACCESS_TOKEN);
  for (const [k, v] of Object.entries(params)) {
    if (v !== undefined && v !== null) url.searchParams.set(k, String(v));
  }
  const res = await fetch(url.toString());
  const json = await res.json();
  if (json.error) throw new Error(`Meta API ${json.error.code}: ${json.error.message}`);
  return json;
}

async function metaPost(endpoint, body = {}) {
  const url = `${API_BASE}/${endpoint}`;
  const form = new URLSearchParams({ access_token: ACCESS_TOKEN, ...body });
  const res = await fetch(url, { method: "POST", body: form });
  const json = await res.json();
  if (json.error) throw new Error(`Meta API ${json.error.code}: ${json.error.message}`);
  return json;
}

function findAction(actions = [], type) {
  return parseFloat(actions.find((a) => a.action_type === type)?.value ?? 0);
}

function ok(text) {
  return { content: [{ type: "text", text }] };
}

function err(e) {
  return { content: [{ type: "text", text: `Error: ${e.message}` }] };
}

// ─── Server init ─────────────────────────────────────────────────────────────

const server = new McpServer({ name: "meta-ads", version: "1.0.0" });

// ─── Tool: get_ad_accounts ────────────────────────────────────────────────────

server.tool(
  "meta_get_ad_accounts",
  "List all Meta ad accounts accessible with the current token. Returns account IDs, names, currency, timezone, and status. Use this to discover account IDs before calling other tools.",
  {
    response_format: z.enum(["markdown", "json"]).default("markdown").describe("Output format"),
  },
  async ({ response_format }) => {
    try {
      const data = await metaGet("me/adaccounts", {
        fields: "id,name,currency,timezone_name,account_status,amount_spent",
        limit: 50,
      });
      const accounts = data.data || [];
      if (!accounts.length) return ok("No ad accounts found for this token.");

      if (response_format === "json") return ok(JSON.stringify({ accounts, count: accounts.length }, null, 2));

      const statusMap = { 1: "ACTIVE", 2: "DISABLED", 3: "UNSETTLED", 9: "IN_GRACE_PERIOD", 100: "PENDING_CLOSURE", 101: "CLOSED" };
      const lines = ["# Meta Ad Accounts", ""];
      for (const acc of accounts) {
        const st = statusMap[acc.account_status] ?? acc.account_status;
        const spent = (parseFloat(acc.amount_spent ?? 0) / 100).toFixed(2);
        lines.push(
          `## ${acc.name} (\`${acc.id}\`)`,
          `- **Estado**: ${st}`,
          `- **Moneda**: ${acc.currency}`,
          `- **Zona horaria**: ${acc.timezone_name}`,
          `- **Gasto total**: ${spent} ${acc.currency}`,
          ""
        );
      }
      return ok(lines.join("\n"));
    } catch (e) {
      return err(e);
    }
  }
);

// ─── Tool: get_campaigns ─────────────────────────────────────────────────────

server.tool(
  "meta_get_campaigns",
  "List campaigns for a Meta ad account. Returns id, name, objective, status, and budget. Use meta_get_insights for performance metrics (ROAS, CPA, CTR).",
  {
    ad_account_id: z.string().optional().describe("Ad account ID (e.g. 'act_123456789'). Uses META_AD_ACCOUNT_ID if omitted."),
    status_filter: z.array(z.enum(["ACTIVE", "PAUSED", "ARCHIVED", "DELETED"])).optional().describe("Filter by status. Default: all."),
    limit: z.number().int().min(1).max(100).default(20).describe("Max campaigns to return"),
    response_format: z.enum(["markdown", "json"]).default("markdown"),
  },
  async ({ ad_account_id, status_filter, limit, response_format }) => {
    try {
      const account = resolveAccount(ad_account_id);
      const params = {
        fields: "id,name,objective,status,effective_status,daily_budget,lifetime_budget,created_time,start_time,stop_time",
        limit,
      };
      if (status_filter?.length) params.effective_status = JSON.stringify(status_filter);

      const data = await metaGet(`${account}/campaigns`, params);
      const campaigns = data.data || [];
      if (!campaigns.length) return ok("No campaigns found for this account.");

      if (response_format === "json") return ok(JSON.stringify({ campaigns, count: campaigns.length, account }, null, 2));

      const lines = [`# Campañas — ${account}`, ""];
      for (const c of campaigns) {
        let budget = "Campaign Budget Optimization";
        if (c.daily_budget) budget = `Daily: ${(c.daily_budget / 100).toFixed(2)} €`;
        else if (c.lifetime_budget) budget = `Lifetime: ${(c.lifetime_budget / 100).toFixed(2)} €`;
        lines.push(
          `## ${c.name} (\`${c.id}\`)`,
          `- **Objetivo**: ${c.objective}`,
          `- **Estado**: ${c.effective_status}`,
          `- **Presupuesto**: ${budget}`,
          `- **Creada**: ${(c.created_time ?? "").slice(0, 10)}`,
          ""
        );
      }
      return ok(lines.join("\n"));
    } catch (e) {
      return err(e);
    }
  }
);

// ─── Tool: get_adsets ────────────────────────────────────────────────────────

server.tool(
  "meta_get_adsets",
  "List ad sets within a Meta campaign or ad account. Returns id, name, status, optimization goal, budget, and bid strategy.",
  {
    campaign_id: z.string().optional().describe("Campaign ID to list ad sets for. If omitted, lists all in the account."),
    ad_account_id: z.string().optional().describe("Ad account ID (used when campaign_id is omitted)."),
    limit: z.number().int().min(1).max(100).default(20),
    response_format: z.enum(["markdown", "json"]).default("markdown"),
  },
  async ({ campaign_id, ad_account_id, limit, response_format }) => {
    try {
      const fields = "id,name,campaign_id,status,effective_status,daily_budget,lifetime_budget,optimization_goal,billing_event,bid_strategy,start_time,end_time";
      const endpoint = campaign_id ? `${campaign_id}/adsets` : `${resolveAccount(ad_account_id)}/adsets`;
      const data = await metaGet(endpoint, { fields, limit });
      const adsets = data.data || [];
      if (!adsets.length) return ok("No ad sets found.");

      if (response_format === "json") return ok(JSON.stringify({ adsets, count: adsets.length }, null, 2));

      const lines = ["# Ad Sets", ""];
      for (const a of adsets) {
        let budget = "Heredado de campaña";
        if (a.daily_budget) budget = `${(a.daily_budget / 100).toFixed(2)} €/día`;
        else if (a.lifetime_budget) budget = `${(a.lifetime_budget / 100).toFixed(2)} € lifetime`;
        lines.push(
          `## ${a.name} (\`${a.id}\`)`,
          `- **Estado**: ${a.effective_status}`,
          `- **Optimización**: ${a.optimization_goal}`,
          `- **Facturación**: ${a.billing_event}`,
          `- **Presupuesto**: ${budget}`,
          `- **Bid strategy**: ${a.bid_strategy ?? "N/A"}`,
          ""
        );
      }
      return ok(lines.join("\n"));
    } catch (e) {
      return err(e);
    }
  }
);

// ─── Tool: get_ads ───────────────────────────────────────────────────────────

server.tool(
  "meta_get_ads",
  "List individual ads within an ad set, campaign, or account. Returns ad id, name, status, and creative summary.",
  {
    adset_id: z.string().optional().describe("Ad set ID (takes priority)."),
    campaign_id: z.string().optional().describe("Campaign ID (used if adset_id not provided)."),
    ad_account_id: z.string().optional().describe("Ad account ID (fallback)."),
    limit: z.number().int().min(1).max(100).default(20),
    response_format: z.enum(["markdown", "json"]).default("markdown"),
  },
  async ({ adset_id, campaign_id, ad_account_id, limit, response_format }) => {
    try {
      const fields = "id,name,status,effective_status,adset_id,campaign_id,created_time,creative{id,name,body,title,image_url,video_id}";
      const endpoint = adset_id
        ? `${adset_id}/ads`
        : campaign_id
        ? `${campaign_id}/ads`
        : `${resolveAccount(ad_account_id)}/ads`;
      const data = await metaGet(endpoint, { fields, limit });
      const ads = data.data || [];
      if (!ads.length) return ok("No ads found.");

      if (response_format === "json") return ok(JSON.stringify({ ads, count: ads.length }, null, 2));

      const lines = ["# Anuncios", ""];
      for (const ad of ads) {
        const c = ad.creative || {};
        lines.push(
          `## ${ad.name} (\`${ad.id}\`)`,
          `- **Estado**: ${ad.effective_status}`,
          `- **Ad Set**: ${ad.adset_id}`,
          `- **Creado**: ${(ad.created_time ?? "").slice(0, 10)}`
        );
        if (c.title) lines.push(`- **Título**: ${c.title}`);
        if (c.body) lines.push(`- **Copy**: ${String(c.body).slice(0, 120)}${c.body.length > 120 ? "..." : ""}`);
        if (c.video_id) lines.push(`- **Video ID**: ${c.video_id}`);
        lines.push("");
      }
      return ok(lines.join("\n"));
    } catch (e) {
      return err(e);
    }
  }
);

// ─── Tool: get_insights ──────────────────────────────────────────────────────

server.tool(
  "meta_get_insights",
  "Get performance metrics for Meta campaigns, ad sets, ads, or accounts. Key metrics: impressions, reach, CTR, CPC, CPM, spend, ROAS, CPA (cost per purchase), conversions, frequency, outbound clicks. Use date_preset to select the time window.",
  {
    object_id: z.string().optional().describe("Campaign, ad set, ad, or account ID. Uses META_AD_ACCOUNT_ID if omitted."),
    date_preset: z
      .enum(["today", "yesterday", "last_7d", "last_14d", "last_30d", "last_90d", "this_month", "last_month"])
      .default("last_30d")
      .describe("Date range preset"),
    level: z.enum(["account", "campaign", "adset", "ad"]).default("campaign").describe("Aggregation level"),
    breakdown: z
      .enum(["age", "gender", "country", "placement", "device_platform"])
      .optional()
      .describe("Optional breakdown dimension"),
    limit: z.number().int().min(1).max(100).default(20),
    response_format: z.enum(["markdown", "json"]).default("markdown"),
  },
  async ({ object_id, date_preset, level, breakdown, limit, response_format }) => {
    try {
      const objId = object_id || resolveAccount(null);
      const fields = [
        "campaign_name", "adset_name", "ad_name",
        "impressions", "reach", "frequency",
        "clicks", "unique_clicks", "ctr",
        "cpc", "cpm", "spend",
        "actions", "action_values",
        "purchase_roas",
        "outbound_clicks", "outbound_clicks_ctr",
        "video_p25_watched_actions", "video_p100_watched_actions",
      ].join(",");

      const params = { fields, date_preset, level, limit };
      if (breakdown) params.breakdowns = breakdown;

      const data = await metaGet(`${objId}/insights`, params);
      const rows = data.data || [];
      if (!rows.length) return ok(`No insights found for '${objId}' in the selected period (${date_preset}).`);

      if (response_format === "json") return ok(JSON.stringify({ insights: rows, count: rows.length }, null, 2));

      const lines = [
        `# Meta Ads Insights — ${date_preset}`,
        `*Nivel: ${level} | Objeto: ${objId}*`,
        "",
      ];
      for (const row of rows) {
        const name = row.campaign_name || row.adset_name || row.ad_name || objId;
        const spend = parseFloat(row.spend ?? 0);
        const impressions = parseInt(row.impressions ?? 0);
        const clicks = parseInt(row.clicks ?? 0);
        const ctr = parseFloat(row.ctr ?? 0).toFixed(2);
        const cpc = parseFloat(row.cpc ?? 0).toFixed(2);
        const cpm = parseFloat(row.cpm ?? 0).toFixed(2);
        const freq = parseFloat(row.frequency ?? 0).toFixed(2);
        const purchases = findAction(row.actions, "purchase");
        const purchaseValue = findAction(row.action_values, "purchase");
        const apiRoas = Array.isArray(row.purchase_roas) ? parseFloat(row.purchase_roas[0]?.value ?? 0) : 0;
        const roas = apiRoas || (spend > 0 ? purchaseValue / spend : 0);
        const cpa = purchases > 0 ? spend / purchases : 0;
        const outboundClicks = Array.isArray(row.outbound_clicks) ? parseFloat(row.outbound_clicks[0]?.value ?? 0) : 0;

        lines.push(
          `## ${name}`,
          `| Métrica | Valor |`,
          `|---------|-------|`,
          `| 💰 Gasto | ${spend.toFixed(2)} € |`,
          `| 📊 Impresiones | ${impressions.toLocaleString("es-ES")} |`,
          `| 🔁 Frecuencia | ${freq} |`,
          `| 👆 Clics | ${clicks.toLocaleString("es-ES")} |`,
          `| 🔗 LP Clics | ${outboundClicks.toFixed(0)} |`,
          `| 📈 CTR | ${ctr}% |`,
          `| 💲 CPC | ${cpc} € |`,
          `| 📢 CPM | ${cpm} € |`,
          `| 🛒 Compras | ${purchases.toFixed(0)} |`,
          `| 💵 Valor compras | ${purchaseValue.toFixed(2)} € |`,
          `| 🎯 ROAS | ${roas.toFixed(2)}x |`,
          `| 🏷️ CPA | ${cpa.toFixed(2)} € |`,
          ""
        );
      }
      return ok(lines.join("\n"));
    } catch (e) {
      return err(e);
    }
  }
);

// ─── Tool: get_creatives ─────────────────────────────────────────────────────

server.tool(
  "meta_get_creatives",
  "List ad creatives (images, videos, copy) in a Meta ad account. Returns creative id, name, title, body text, call-to-action, and thumbnail URL.",
  {
    ad_account_id: z.string().optional().describe("Ad account ID. Uses META_AD_ACCOUNT_ID if omitted."),
    limit: z.number().int().min(1).max(100).default(20),
    response_format: z.enum(["markdown", "json"]).default("markdown"),
  },
  async ({ ad_account_id, limit, response_format }) => {
    try {
      const account = resolveAccount(ad_account_id);
      const data = await metaGet(`${account}/adcreatives`, {
        fields: "id,name,title,body,call_to_action_type,image_url,thumbnail_url,video_id",
        limit,
      });
      const creatives = data.data || [];
      if (!creatives.length) return ok("No creatives found.");

      if (response_format === "json") return ok(JSON.stringify({ creatives, count: creatives.length }, null, 2));

      const lines = ["# Ad Creatives", ""];
      for (const c of creatives) {
        lines.push(`## ${c.name ?? c.id} (\`${c.id}\`)`, `- **CTA**: ${c.call_to_action_type ?? "N/A"}`);
        if (c.title) lines.push(`- **Título**: ${c.title}`);
        if (c.body) lines.push(`- **Copy**: ${String(c.body).slice(0, 150)}${c.body.length > 150 ? "..." : ""}`);
        if (c.image_url) lines.push(`- **Imagen**: ${c.image_url}`);
        if (c.video_id) lines.push(`- **Video ID**: ${c.video_id}`);
        lines.push("");
      }
      return ok(lines.join("\n"));
    } catch (e) {
      return err(e);
    }
  }
);

// ─── Tool: create_campaign ───────────────────────────────────────────────────

server.tool(
  "meta_create_campaign",
  "Create a new Meta Ads campaign. Creates in PAUSED status by default (safe). You must then create ad sets and ads before activating. Objective options: OUTCOME_SALES, OUTCOME_LEADS, OUTCOME_TRAFFIC, OUTCOME_AWARENESS, OUTCOME_ENGAGEMENT, OUTCOME_APP_PROMOTION.",
  {
    name: z.string().min(1).max(400).describe("Campaign name (required)"),
    objective: z
      .enum(["OUTCOME_AWARENESS", "OUTCOME_TRAFFIC", "OUTCOME_ENGAGEMENT", "OUTCOME_LEADS", "OUTCOME_APP_PROMOTION", "OUTCOME_SALES"])
      .describe("Campaign objective"),
    status: z.enum(["ACTIVE", "PAUSED"]).default("PAUSED").describe("Initial status (default PAUSED for safety)"),
    daily_budget_cents: z.number().int().min(100).optional().describe("Daily budget in cents (e.g. 5000 = 50.00 €)"),
    lifetime_budget_cents: z.number().int().min(100).optional().describe("Lifetime budget in cents"),
    special_ad_categories: z
      .array(z.enum(["HOUSING", "EMPLOYMENT", "CREDIT", "ISSUES_ELECTIONS_POLITICS"]))
      .default([])
      .describe("Special ad categories (usually empty [])"),
    ad_account_id: z.string().optional().describe("Ad account ID override"),
  },
  async ({ name, objective, status, daily_budget_cents, lifetime_budget_cents, special_ad_categories, ad_account_id }) => {
    try {
      const account = resolveAccount(ad_account_id);
      const body = {
        name,
        objective,
        status,
        special_ad_categories: JSON.stringify(special_ad_categories),
      };
      if (daily_budget_cents) body.daily_budget = String(daily_budget_cents);
      if (lifetime_budget_cents) body.lifetime_budget = String(lifetime_budget_cents);

      const result = await metaPost(`${account}/campaigns`, body);
      return ok(
        `✅ Campaña creada correctamente.\n\n` +
        `- **ID**: \`${result.id}\`\n` +
        `- **Nombre**: ${name}\n` +
        `- **Objetivo**: ${objective}\n` +
        `- **Estado**: ${status}\n\n` +
        `Siguiente paso: crear un Ad Set dentro de la campaña \`${result.id}\`.`
      );
    } catch (e) {
      return err(e);
    }
  }
);

// ─── Tool: update_campaign ───────────────────────────────────────────────────

server.tool(
  "meta_update_campaign",
  "Update an existing Meta Ads campaign. Can change name, status (ACTIVE/PAUSED/ARCHIVED), or budget. Use to pause/activate campaigns or adjust spend caps.",
  {
    campaign_id: z.string().min(1).describe("Campaign ID to update (required)"),
    name: z.string().max(400).optional().describe("New campaign name"),
    status: z.enum(["ACTIVE", "PAUSED", "ARCHIVED"]).optional().describe("New status"),
    daily_budget_cents: z.number().int().min(100).optional().describe("New daily budget in cents"),
    lifetime_budget_cents: z.number().int().min(100).optional().describe("New lifetime budget in cents"),
  },
  async ({ campaign_id, name, status, daily_budget_cents, lifetime_budget_cents }) => {
    try {
      const body = {};
      if (name) body.name = name;
      if (status) body.status = status;
      if (daily_budget_cents) body.daily_budget = String(daily_budget_cents);
      if (lifetime_budget_cents) body.lifetime_budget = String(lifetime_budget_cents);

      if (!Object.keys(body).length) return ok("Error: No fields to update provided.");

      const result = await metaPost(campaign_id, body);
      const changes = Object.entries(body).map(([k, v]) => `${k}=${v}`).join(", ");
      return ok(`✅ Campaña \`${campaign_id}\` actualizada.\n\n- **Cambios**: ${changes}\n- **Éxito**: ${result.success ?? true}`);
    } catch (e) {
      return err(e);
    }
  }
);

// ─── Start ───────────────────────────────────────────────────────────────────

const transport = new StdioServerTransport();
await server.connect(transport);
