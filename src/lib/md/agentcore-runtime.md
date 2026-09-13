# AgentCore Runtime

---

AgentCore Runtime provides a managed runtime for deploying and operating production AI agents. It gives agent applications an execution environment for handling model interactions, tool calls, state, and runtime concerns without requiring teams to manage the full serving infrastructure themselves.

The runtime is designed for agents that need to operate securely, scale with demand, and connect to services while preserving clear operational boundaries.

AgentCore Runtime is:

- **Managed**: It reduces the infrastructure work required to deploy and operate agent applications.
- **Scalable**: It supports running agent workloads as demand and interaction volume change.
- **Production-oriented**: It helps provide runtime isolation, service integration, and operational controls for agent workloads.

Example:
```python
from bedrock_agentcore.runtime import BedrockAgentCoreApp

app = BedrockAgentCoreApp()

@app.entrypoint
def invoke(payload):
	return {"result": agent(payload["prompt"])}

app.run()
```

AgentCore Runtime helps bridge the gap between an agent prototype and a dependable service that can be deployed, operated, and integrated into production systems.