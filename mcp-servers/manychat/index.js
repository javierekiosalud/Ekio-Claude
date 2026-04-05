import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

const API_BASE = "https://api.manychat.com/fb";
const API_TOKEN = process.env.MANYCHAT_API_TOKEN;

if (!API_TOKEN) {
  console.error("MANYCHAT_API_TOKEN environment variable is required");
  process.exit(1);
}

const headers = {
  Authorization: `Bearer ${API_TOKEN}`,
  "Content-Type": "application/json",
  Accept: "application/json",
};

async function apiGet(path) {
  const res = await fetch(`${API_BASE}${path}`, { method: "GET", headers });
  return res.json();
}

async function apiPost(path, body = {}) {
  const res = await fetch(`${API_BASE}${path}`, {
    method: "POST",
    headers,
    body: JSON.stringify(body),
  });
  return res.json();
}

const server = new McpServer({
  name: "manychat",
  version: "1.0.0",
});

// ═══════════════════════════════════════════
// PAGE / ACCOUNT
// ═══════════════════════════════════════════

server.tool("manychat_get_page_info", "Get ManyChat page/account info", {}, async () => {
  const data = await apiGet("/page/getInfo");
  return { content: [{ type: "text", text: JSON.stringify(data, null, 2) }] };
});

// ═══════════════════════════════════════════
// TAGS
// ═══════════════════════════════════════════

server.tool("manychat_get_tags", "List all tags", {}, async () => {
  const data = await apiGet("/page/getTags");
  return { content: [{ type: "text", text: JSON.stringify(data, null, 2) }] };
});

server.tool(
  "manychat_create_tag",
  "Create a new tag",
  { name: z.string().describe("Tag name") },
  async ({ name }) => {
    const data = await apiPost("/page/createTag", { name });
    return { content: [{ type: "text", text: JSON.stringify(data, null, 2) }] };
  }
);

server.tool(
  "manychat_remove_tag",
  "Remove a tag by ID",
  { tag_id: z.number().describe("Tag ID to remove") },
  async ({ tag_id }) => {
    const data = await apiPost("/page/removeTag", { tag_id });
    return { content: [{ type: "text", text: JSON.stringify(data, null, 2) }] };
  }
);

// ═══════════════════════════════════════════
// CUSTOM FIELDS
// ═══════════════════════════════════════════

server.tool("manychat_get_custom_fields", "List all custom user fields", {}, async () => {
  const data = await apiGet("/page/getCustomFields");
  return { content: [{ type: "text", text: JSON.stringify(data, null, 2) }] };
});

server.tool(
  "manychat_create_custom_field",
  "Create a custom field",
  {
    caption: z.string().describe("Field name/caption"),
    type: z.enum(["text", "number", "date", "datetime", "boolean"]).describe("Field type"),
    description: z.string().optional().describe("Field description"),
  },
  async ({ caption, type, description }) => {
    const body = { caption, type };
    if (description) body.description = description;
    const data = await apiPost("/page/createCustomField", body);
    return { content: [{ type: "text", text: JSON.stringify(data, null, 2) }] };
  }
);

// ═══════════════════════════════════════════
// BOT FIELDS
// ═══════════════════════════════════════════

server.tool("manychat_get_bot_fields", "List all bot fields", {}, async () => {
  const data = await apiGet("/page/getBotFields");
  return { content: [{ type: "text", text: JSON.stringify(data, null, 2) }] };
});

server.tool(
  "manychat_set_bot_field",
  "Set a bot field value by name",
  {
    field_name: z.string().describe("Bot field name"),
    field_value: z.union([z.string(), z.number(), z.boolean()]).describe("New value"),
  },
  async ({ field_name, field_value }) => {
    const data = await apiPost("/page/setBotFieldByName", { field_name, field_value });
    return { content: [{ type: "text", text: JSON.stringify(data, null, 2) }] };
  }
);

// ═══════════════════════════════════════════
// FLOWS / AUTOMATIONS
// ═══════════════════════════════════════════

server.tool("manychat_get_flows", "List all automations/flows and folders", {}, async () => {
  const data = await apiGet("/page/getFlows");
  return { content: [{ type: "text", text: JSON.stringify(data, null, 2) }] };
});

server.tool("manychat_get_growth_tools", "List all growth tools", {}, async () => {
  const data = await apiGet("/page/getGrowthTools");
  return { content: [{ type: "text", text: JSON.stringify(data, null, 2) }] };
});

// ═══════════════════════════════════════════
// SUBSCRIBERS
// ═══════════════════════════════════════════

server.tool(
  "manychat_get_subscriber",
  "Get subscriber info by ID",
  { subscriber_id: z.string().describe("Subscriber ID") },
  async ({ subscriber_id }) => {
    const data = await apiGet(`/subscriber/getInfo?subscriber_id=${subscriber_id}`);
    return { content: [{ type: "text", text: JSON.stringify(data, null, 2) }] };
  }
);

server.tool(
  "manychat_find_by_name",
  "Find subscribers by name (max 100 results)",
  { name: z.string().describe("Full or partial name to search") },
  async ({ name }) => {
    const data = await apiGet(`/subscriber/findByName?name=${encodeURIComponent(name)}`);
    return { content: [{ type: "text", text: JSON.stringify(data, null, 2) }] };
  }
);

server.tool(
  "manychat_find_by_system_field",
  "Find subscriber by email or phone",
  {
    field_name: z.enum(["email", "phone"]).describe("System field to search"),
    field_value: z.string().describe("Email or phone value"),
  },
  async ({ field_name, field_value }) => {
    const params = new URLSearchParams({ [`${field_name}`]: field_value });
    const data = await apiGet(`/subscriber/findBySystemField?${params}`);
    return { content: [{ type: "text", text: JSON.stringify(data, null, 2) }] };
  }
);

server.tool(
  "manychat_find_by_custom_field",
  "Find subscribers by custom field value (max 100)",
  {
    field_id: z.number().describe("Custom field ID"),
    field_value: z.string().describe("Value to search for"),
  },
  async ({ field_id, field_value }) => {
    const params = new URLSearchParams({
      field_id: String(field_id),
      field_value,
    });
    const data = await apiGet(`/subscriber/findByCustomField?${params}`);
    return { content: [{ type: "text", text: JSON.stringify(data, null, 2) }] };
  }
);

server.tool(
  "manychat_create_subscriber",
  "Create a new subscriber",
  {
    first_name: z.string().describe("First name"),
    last_name: z.string().describe("Last name"),
    phone: z.string().optional().describe("Phone number with country code"),
    whatsapp_phone: z.string().optional().describe("WhatsApp phone number"),
    email: z.string().optional().describe("Email address"),
    gender: z.string().optional().describe("Gender"),
    consent_phrase: z.string().describe("Consent phrase for GDPR"),
  },
  async (params) => {
    const data = await apiPost("/subscriber/createSubscriber", params);
    return { content: [{ type: "text", text: JSON.stringify(data, null, 2) }] };
  }
);

server.tool(
  "manychat_update_subscriber",
  "Update subscriber info",
  {
    subscriber_id: z.string().describe("Subscriber ID"),
    first_name: z.string().optional().describe("First name"),
    last_name: z.string().optional().describe("Last name"),
    phone: z.string().optional().describe("Phone number"),
    email: z.string().optional().describe("Email"),
  },
  async ({ subscriber_id, ...fields }) => {
    const data = await apiPost("/subscriber/updateSubscriber", { subscriber_id, ...fields });
    return { content: [{ type: "text", text: JSON.stringify(data, null, 2) }] };
  }
);

// ═══════════════════════════════════════════
// SUBSCRIBER TAGS
// ═══════════════════════════════════════════

server.tool(
  "manychat_add_tag_to_subscriber",
  "Add a tag to a subscriber",
  {
    subscriber_id: z.string().describe("Subscriber ID"),
    tag_id: z.number().describe("Tag ID to add"),
  },
  async ({ subscriber_id, tag_id }) => {
    const data = await apiPost("/subscriber/addTag", { subscriber_id, tag_id });
    return { content: [{ type: "text", text: JSON.stringify(data, null, 2) }] };
  }
);

server.tool(
  "manychat_add_tag_by_name",
  "Add a tag to a subscriber by tag name",
  {
    subscriber_id: z.string().describe("Subscriber ID"),
    tag_name: z.string().describe("Tag name to add"),
  },
  async ({ subscriber_id, tag_name }) => {
    const data = await apiPost("/subscriber/addTagByName", { subscriber_id, tag_name });
    return { content: [{ type: "text", text: JSON.stringify(data, null, 2) }] };
  }
);

server.tool(
  "manychat_remove_tag_from_subscriber",
  "Remove a tag from a subscriber",
  {
    subscriber_id: z.string().describe("Subscriber ID"),
    tag_id: z.number().describe("Tag ID to remove"),
  },
  async ({ subscriber_id, tag_id }) => {
    const data = await apiPost("/subscriber/removeTag", { subscriber_id, tag_id });
    return { content: [{ type: "text", text: JSON.stringify(data, null, 2) }] };
  }
);

// ═══════════════════════════════════════════
// SUBSCRIBER CUSTOM FIELDS
// ═══════════════════════════════════════════

server.tool(
  "manychat_set_subscriber_field",
  "Set a custom field value for a subscriber",
  {
    subscriber_id: z.string().describe("Subscriber ID"),
    field_id: z.number().describe("Custom field ID"),
    field_value: z.union([z.string(), z.number(), z.boolean(), z.null()]).describe("New value"),
  },
  async ({ subscriber_id, field_id, field_value }) => {
    const data = await apiPost("/subscriber/setCustomField", {
      subscriber_id,
      field_id,
      field_value,
    });
    return { content: [{ type: "text", text: JSON.stringify(data, null, 2) }] };
  }
);

server.tool(
  "manychat_set_subscriber_field_by_name",
  "Set a custom field value for a subscriber by field name",
  {
    subscriber_id: z.string().describe("Subscriber ID"),
    field_name: z.string().describe("Custom field name"),
    field_value: z.union([z.string(), z.number(), z.boolean(), z.null()]).describe("New value"),
  },
  async ({ subscriber_id, field_name, field_value }) => {
    const data = await apiPost("/subscriber/setCustomFieldByName", {
      subscriber_id,
      field_name,
      field_value,
    });
    return { content: [{ type: "text", text: JSON.stringify(data, null, 2) }] };
  }
);

// ═══════════════════════════════════════════
// SENDING MESSAGES
// ═══════════════════════════════════════════

server.tool(
  "manychat_send_content",
  "Send message content to a subscriber",
  {
    subscriber_id: z.string().describe("Subscriber ID"),
    data: z.object({
      version: z.literal("v2").default("v2"),
      content: z.object({
        messages: z.array(z.any()).describe("Array of message objects"),
        actions: z.array(z.any()).optional().describe("Array of action objects"),
        quick_replies: z.array(z.any()).optional().describe("Quick reply buttons"),
      }),
    }).describe("Message payload"),
    message_tag: z.string().describe("Message tag (e.g. ACCOUNT_UPDATE, CONFIRMED_EVENT_UPDATE, POST_PURCHASE_UPDATE)"),
  },
  async ({ subscriber_id, data, message_tag }) => {
    const result = await apiPost("/sending/sendContent", {
      subscriber_id,
      data,
      message_tag,
    });
    return { content: [{ type: "text", text: JSON.stringify(result, null, 2) }] };
  }
);

server.tool(
  "manychat_send_flow",
  "Trigger an automation/flow for a subscriber",
  {
    subscriber_id: z.string().describe("Subscriber ID"),
    flow_ns: z.string().describe("Flow namespace/ID"),
  },
  async ({ subscriber_id, flow_ns }) => {
    const data = await apiPost("/sending/sendFlow", { subscriber_id, flow_ns });
    return { content: [{ type: "text", text: JSON.stringify(data, null, 2) }] };
  }
);

// ═══════════════════════════════════════════
// OTN TOPICS
// ═══════════════════════════════════════════

server.tool("manychat_get_otn_topics", "List One-Time Notification topics", {}, async () => {
  const data = await apiGet("/page/getOtnTopics");
  return { content: [{ type: "text", text: JSON.stringify(data, null, 2) }] };
});

// ═══════════════════════════════════════════
// START SERVER
// ═══════════════════════════════════════════

const transport = new StdioServerTransport();
await server.connect(transport);
