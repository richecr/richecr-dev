# LangChain

---

LangChain is a framework for composing applications powered by large language models. It provides abstractions for prompts, model calls, structured output, retrieval pipelines, tools, memory, and agent workflows.

LangChain is useful when an application needs to connect an LLM to business data or actions and coordinate multiple steps in a repeatable workflow.

LangChain is:

- **Composable**: Applications can combine prompts, models, parsers, retrievers, and tools into chains.
- **Integration-friendly**: It connects LLM applications to data stores, APIs, and model providers.
- **Agent-ready**: It supports tool-calling agents that can select actions based on the task and available context.

Example:
```python
from langchain_core.prompts import ChatPromptTemplate

prompt = ChatPromptTemplate.from_template("Summarize this text: {text}")
chain = prompt | model
response = chain.invoke({"text": "Distributed systems require careful failure handling."})
```

LangChain provides a flexible foundation for developing and evolving LLM applications while keeping their model, data, and tool integrations organized.