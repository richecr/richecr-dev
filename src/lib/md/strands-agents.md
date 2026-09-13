# Strands Agents

---

Strands Agents is an SDK for building agentic applications with models, tools, and multi-step workflows. It provides primitives for combining model reasoning with application capabilities and domain-specific actions.

The SDK is designed for agents that need to call tools, maintain task context, coordinate multiple steps, and integrate with services in a production environment.

Strands Agents is:

- **Composable**: Agents can combine models, tools, and instructions into focused workflows.
- **Tool-oriented**: Applications can expose business capabilities for agents to invoke.
- **Suitable for orchestration**: It supports multi-step and multi-agent patterns for complex tasks.

Example:
```python
from strands import Agent

agent = Agent(
	system_prompt="You are a reliable support assistant.",
	tools=[search_orders]
)
response = agent("Find the status of order 123.")
```

Strands Agents helps teams turn LLM capabilities into structured, tool-using workflows that can be integrated with real application services.