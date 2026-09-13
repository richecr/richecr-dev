import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'Rich';

export const lastName = 'Ramalho';

export const description =
	`Software Engineer III at OLX Brasil, holding a B.Sc. in Computer Science (UFCG) and an MBA in Full Cycle
Architecture.

Currently embedded in the Negotiation team, responsible for OLX's high-throughput chat platform processing
90k requests per minute. I specialize in building mission-critical distributed systems designed for ultra-high
availability, extreme fault tolerance, and graceful degradation across complex multi-service dependencies.

Alongside large-scale messaging infrastructure, my active focus is on Generative AI & Agentic Systems,
architecting LLM-driven workflows and autonomous agents using LiteLLM, Model Context Protocol (MCP), AWS
Bedrock, and AgentCore Runtime.

Core Focus: Distributed Systems, High-Throughput APIs, Resilience & Fault Tolerance, LLM Architectures,
Event-Driven Systems (Kafka, AWS, K8s).`;

export const links: Array<{ platform: Platform; link: string }> = [
	{ platform: Platform.GitHub, link: 'https://github.com/richecr' },
	{
		platform: Platform.Linkedin,
		link: 'https://www.linkedin.com/in/rich-ramalho'
	},
	{
		platform: Platform.Twitter,
		link: 'https://twitter.com/richzinho_ecr'
	},
	{
		platform: Platform.StackOverflow,
		link: 'https://stackoverflow.com/users/13995829/rich-elton'
	},
	{
		platform: Platform.Email,
		link: 'richelton14@gmail.com'
	}
];

export const skills = getSkills(
	'python',
	'java',
	'kotlin',
	'js',
	'ts',
	'go',
	'clojure',
	'nodejs',
	'nestjs',
	'spring',
	'fastapi',
	'fastify',
	'expressjs',
	'reactjs',
	'vuejs',
	'svelte',
	'aws',
	'docker',
	'kubernetes',
	'nginx',
	'kafka',
	'postgresql',
	'mongodb',
	'redis'
);
