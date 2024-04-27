import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';

export const items: Array<Project> = [
	{
		slug: 'duck-orm',
		color: '#5e95e3',
		description:
			'The Duck-ORM package is an asynchronous ORM for Python, with support for Postgres and SQLite. ORM is built with: databases. Requirements: Python 3.8+. Duck-ORM is still under development.',
		shortDescription:
			'The Duck-ORM package is an asynchronous ORM for Python, with support for Postgres and SQLite.',
		links: [
			{ to: 'https://github.com/richecr/duck-orm', label: 'GitHub' },
			{ to: 'https://richecr.github.io/duck-orm/', label: 'Documentation' }
		],
		logo: Assets.Unknown,
		name: 'DuckORM',
		period: {
			from: new Date(2021, 2, 7)
		},
		skills: getSkills('python', 'docker'),
		type: 'Library'
	},
	{
		slug: 'quem-gasta-mais',
		color: '#ff3e00',
		description:
			'Aplicação com propósito de mostrar o que está acontecendo na Câmara dos Deputados. Quais os deputados que mais gastam e com o que eles estão gastando.',
		shortDescription:
			'Aplicação com propósito de mostrar o que está acontecendo na Câmara dos Deputados. Quais os deputados que mais gastam e com o que eles estão gastando.',
		links: [
			{ to: 'https://github.com/richecr/CamaraDosDeputados', label: 'GitHub' },
			{
				to: 'https://www.figma.com/file/d0EXcqtCoKIkeDIz5pBeGd/Prototype?type=design&node-id=0-1&mode=design',
				label: 'Figma'
			},
			{ to: 'https://quem-gasta-mais.netlify.app/', label: 'Website' }
		],
		logo: Assets.QuemGastaMais,
		name: 'Quem Gasta Mais',
		period: {
			from: new Date(2018, 11, 15)
		},
		skills: getSkills('js', 'reactjs', 'css'),
		type: 'Website',
		screenshots: [
			{
				label: 'Tela Principal',
				src: 'https://i.imgur.com/OtfEO0S.png'
			},
			{
				label: 'Listagem de Deputados',
				src: 'https://i.imgur.com/wX1hX6h.png'
			},
			{
				label: 'Informação e Despesas do Deputado',
				src: 'https://i.imgur.com/qaDttAD.png'
			},
			{
				label: 'Informação e Despesas do Deputado',
				src: 'https://i.imgur.com/7F1Da27.png'
			},
			{
				label: 'Listagem de Partidos',
				src: 'https://i.imgur.com/bytVvqu.png'
			},
			{
				label: 'Informação do Partido',
				src: 'https://i.imgur.com/F38lWLY.png'
			}
		]
	},
	{
		slug: 'barbearia-saraiva-frontend',
		color: '#ff3e00',
		description:
			'The product is a resource management system aimed at companies in the beauty salon/barbershop sector. We offer features such as: service scheduling, notifications, schedule management, customer loyalty system and registration with history.',
		shortDescription:
			'The product is a resource management system aimed at companies in the beauty salon/barbershop sector.',
		links: [
			{ to: 'https://github.com/richecr/barbearia-saraiva-frontend', label: 'GitHub' },
			{
				to: 'https://docs.google.com/document/d/1LeOk0IrCXdVdeRXOA4zwJhSroXwJIoF4GGRzgmF4AlE/edit?usp=sharing',
				label: 'Documento de Plano de Negócio'
			}
		],
		logo: Assets.BarbeariaSaraiva,
		name: 'Barbearia Saraiva (Frontend)',
		period: {
			from: new Date(2022, 3, 7),
			to: new Date(2022, 4, 22)
		},
		skills: getSkills('js', 'reactjs', 'css'),
		type: 'Website',
		screenshots: [
			{
				label: 'Tela de Login',
				src: 'https://i.imgur.com/2rv6ZY3.png'
			},
			{
				label: 'Listagem de Eventos (ADMIN)',
				src: 'https://i.imgur.com/l29Mh9Q.png'
			},
			{
				label: 'Agendando Evento (ADMIN)',
				src: 'https://i.imgur.com/frcWniR.png'
			},
			{
				label: 'Criar Nova Agenda',
				src: 'https://i.imgur.com/1Jex5Ks.png'
			},
			{
				label: 'Tela Sobre',
				src: 'https://i.imgur.com/ovj64HB.png'
			}
		]
	},
	{
		slug: 'barbearia-saraiva-back',
		color: '#ff3e00',
		description:
			'The product is a resource management system aimed at companies in the beauty salon/barbershop sector. We offer features such as: service scheduling, notifications, schedule management, customer loyalty system and registration with history.',
		shortDescription:
			'The product is a resource management system aimed at companies in the beauty salon/barbershop sector.',
		links: [
			{ to: 'https://github.com/richecr/barbearia-saraiva-back', label: 'GitHub' },
			{
				to: 'https://docs.google.com/document/d/1LeOk0IrCXdVdeRXOA4zwJhSroXwJIoF4GGRzgmF4AlE/edit?usp=sharing',
				label: 'Documento de Plano de Negócio'
			}
		],
		logo: Assets.BarbeariaSaraiva,
		name: 'Barbearia Saraiva (Backend)',
		period: {
			from: new Date(2021, 11, 16),
			to: new Date(2022, 4, 20)
		},
		skills: getSkills('ts', 'express', 'postgresql', 'docker'),
		type: 'Backend'
	},
	{
		slug: 'PyElit',
		color: '#5e95e3',
		description:
			'It started with a research at LSI-UFCG and the activities are with Geoparsing and Topic Modeling. With the activities carried out, it was decided that it would be appropriate to create this library to be made available to the community.',
		shortDescription:
			'It started with a research at LSI-UFCG and the activities are with Geoparsing and Topic Modeling. With the activities carried out, it was decided that it would be appropriate to create this library to be made available to the community.',
		links: [{ to: 'https://github.com/richecr/PyElit', label: 'GitHub' }],
		logo: Assets.PyElit,
		name: 'PyElit',
		period: {
			from: new Date(2019, 9, 9),
			to: new Date(2022, 8, 6)
		},
		skills: getSkills('python'),
		type: 'Library'
	},
	{
		slug: 'pythonicsqlgo',
		color: '#5e95e3',
		description: 'Query Builder written in Golang for Python.',
		shortDescription: 'Query Builder written in Golang for Python.',
		links: [{ to: 'https://github.com/richecr/pythonicsqlgo', label: 'GitHub' }],
		logo: Assets.Unknown,
		name: 'pythonicsqlgo',
		period: {
			from: new Date(2023, 11, 24)
		},
		skills: getSkills('go', 'python'),
		type: 'Library'
	},
	{
		slug: 'hltvgo',
		color: '#5e95e3',
		description: 'This is an unofficial library of hltv.org',
		shortDescription: 'This is an unofficial library of hltv.org',
		links: [{ to: 'https://github.com/richecr/hltvgo', label: 'GitHub' }],
		logo: Assets.Unknown,
		name: 'hltvgo',
		period: {
			from: new Date(2023, 8, 30)
		},
		skills: getSkills('go', 'python'),
		type: 'Library'
	},
	{
		slug: 'pyhltv',
		color: '#5e95e3',
		description: 'Library to extract information from the HLTV website.',
		shortDescription: 'Library to extract information from the HLTV website.',
		links: [{ to: 'https://github.com/richecr/pyhltv', label: 'GitHub' }],
		logo: Assets.Unknown,
		name: 'pyhltv',
		period: {
			from: new Date(2020, 6, 26)
		},
		skills: getSkills('python'),
		type: 'Library'
	}
];

export const title = 'Projects';
