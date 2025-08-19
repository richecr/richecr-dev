import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'Rich';

export const lastName = 'Ramalho';

export const description =
	`Software Engineer II at OLX Brasil, with a Bachelor’s in Computer Science (UFCG) and an MBA in Full
Cycle Architecture. I specialize in building large-scale integration platforms, currently working in the
Ad-Integration team responsible for the insertion, update, and deletion of millions of listings across OLX,
ZAP, and Viva Real. My experience spans high-performance APIs, event-driven architectures, and end-to-end
observability. I focus on scalability, resilience, and business impact, delivering solutions that improve client
experience and conversion while enabling faster partner integrations. Proficient in modern stacks (Java,
Kotlin, Python, JavaScript/TypeScript, Spring, Node.js, AWS, Kafka, Kubernetes).`;

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
