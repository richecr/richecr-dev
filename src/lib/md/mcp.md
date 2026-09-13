# Model Context Protocol (MCP)

---

Model Context Protocol (MCP) is an open protocol for connecting AI applications to tools, data sources, and external services. It defines a standard way for a model-powered client to discover and invoke capabilities exposed by an MCP server.

MCP separates the agent or LLM application from the implementation details of each integration. This allows tools and resources to be reused across compatible clients while keeping access boundaries explicit.

MCP is:

- **Interoperable**: It provides a common contract for AI clients and external tool servers.
- **Extensible**: Servers can expose tools, resources, and prompts for different workflows.
- **Context-aware**: Applications can provide models with relevant information and actions at runtime.

Example:
```typescript
const result = await client.callTool({
	name: 'search-orders',
	arguments: { customerId: 'customer-123' }
});
```

MCP provides a practical foundation for building agentic systems with modular integrations, clear capability boundaries, and reusable context providers.