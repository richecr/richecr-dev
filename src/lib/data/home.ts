import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'Rich';

export const lastName = 'Ramalho';

export const description =
	'Graduado em Ciência da Computação pela UFCG e cursando MBA - Arquitetura Full Cycle. Experiente em desenvolvimento web e mobile com Python, JavaScript, Java, Kotlin e mais. Atualmente, trabalho com tecnologias como NodeJS, Kotlin, Python e React na OLX Brasil. Sou apaixonado por projetos Open Source, novas tecnologias e jogos eletrônicos, especialmente FPS como CSGO e Souls Like como Gow Of War. Busco constantemente aprender mais e contribuir para soluções que impactem positivamente o mundo.';

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
