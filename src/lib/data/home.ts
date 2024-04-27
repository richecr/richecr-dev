import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'Rich';

export const lastName = 'Ramalho';

export const description =
	"Graduated in Computer Science from UFCG and studying MBA - Full Cycle Architecture. Experienced in web and mobile development with Python, JavaScript, Java, Kotlin and more. Currently, I work with technologies such as NodeJS, Kotlin, Python and React at OLX Brasil. I'm passionate about Open Source projects, new technologies and electronic games, especially FPS like CSGO and Souls Like like Gow Of War. I constantly seek to learn more and contribute to solutions that positively impact the world.";

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
	'nodejs',
	'fastapi',
	'spring',
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
	'redis'
);
