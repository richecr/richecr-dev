# LiteLLM

---

LiteLLM is an open-source library that provides a unified interface for calling large language models from different providers. It normalizes provider-specific APIs into a common format, making it easier to build applications that can switch models without rewriting their integration layer.

LiteLLM is commonly used as an abstraction and gateway layer for applications that need model routing, usage tracking, and consistent request and response handling across cloud and local providers.

LiteLLM is:

- **Provider-agnostic**: It exposes a consistent interface across many hosted and self-hosted LLM providers.
- **Configurable**: It supports model routing, fallbacks, retries, timeouts, and load balancing for production workloads.
- **Observable**: It can centralize usage, latency, and cost information for LLM calls.

Example:
```python
from litellm import completion

response = completion(
	model="bedrock/anthropic.claude-3-haiku-20240307-v1:0",
	messages=[{"role": "user", "content": "Explain circuit breakers."}]
)
```

LiteLLM simplifies the construction of resilient LLM applications by keeping provider details behind a stable interface and enabling operational controls around model calls.