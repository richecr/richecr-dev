# Amazon Bedrock

---

Amazon Bedrock is a fully managed AWS service that provides access to foundation models from multiple providers through a unified API. It enables teams to build generative AI applications without managing the underlying model infrastructure.

Bedrock integrates with AWS security, identity, networking, and observability services, making it suitable for applications that need enterprise controls around model access and data handling.

Amazon Bedrock is:

- **Managed**: AWS operates the infrastructure required to invoke supported foundation models.
- **Flexible**: Applications can choose models for different capabilities, latency targets, and cost profiles.
- **Enterprise-ready**: It integrates with AWS permissions, private networking, logging, and governance controls.

Example:
```python
import boto3

bedrock = boto3.client('bedrock-runtime', region_name='us-east-1')
response = bedrock.converse(
	modelId='anthropic.claude-3-haiku-20240307-v1:0',
	messages=[{'role': 'user', 'content': [{'text': 'Explain graceful degradation.'}]}]
)
```

Amazon Bedrock gives teams a managed path to production generative AI while preserving the operational and security patterns of the AWS ecosystem.