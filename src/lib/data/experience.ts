import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

import olx from '../md/olx.md?raw';

export const items: Array<Experience> = [
	{
		slug: 'software-engineer-2',
		company: 'OLX Brasil',
		description: olx,
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Home',
		period: { from: new Date(2023, 9, 1) },
		skills: getSkills(
			'java',
			'python',
			'js',
			'ts',
			'kotlin',
			'spring',
			'expressjs',
			'fastapi',
			'vuejs',
			'reactjs',
			'ts',
			'postgresql',
			'docker',
			'kubernetes',
			'aws'
		),
		name: 'Software Engineer II',
		color: 'blue',
		links: [],
		logo: Assets.OLX,
		shortDescription:
			'In our team, we are responsible for millions of ads published on platforms, namely: OLX, ZAP and Viva Real, through integrations developed to meet the needs of our professional clients.'
	},
	{
		slug: 'software-engineer',
		company: 'OLX Brasil',
		description: olx,
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Home',
		period: { from: new Date(2022, 6, 1), to: new Date(2023, 9, 1) },
		skills: getSkills(
			'java',
			'python',
			'js',
			'ts',
			'kotlin',
			'spring',
			'expressjs',
			'fastapi',
			'vuejs',
			'reactjs',
			'ts',
			'postgresql',
			'docker',
			'kubernetes',
			'aws'
		),
		name: 'Software Engineer I',
		color: 'blue',
		links: [],
		logo: Assets.OLX,
		shortDescription:
			'In our team, we are responsible for millions of ads published on platforms, namely: OLX, ZAP and Viva Real, through integrations developed to meet the needs of our professional clients.'
	},
	{
		slug: 'analyst-developer',
		company: 'Laboratório de Sistemas de Informação - LSI',
		description:
			"I work on an LSI/UFCG project in partnership with tax solution Synchro, Syn4TDF. It is a native solution for the SAP environment, which exploits the full power of HANA processing and provides information on the taxable event in real time when determining and declaring the ancillary obligation. Synchro's tax knowledge know-how is essential to ensure compliance and efficiency in the process of generating tax obligations.",
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Campina Grande - PB',
		period: { from: new Date(2022, 4, 1), to: new Date(2022, 6, 1) },
		skills: getSkills('java', 'clojure', 'spring', 'reactjs', 'ts', 'saphana'),
		name: 'Analyst Developer',
		color: 'green',
		links: [],
		logo: Assets.LSI,
		shortDescription:
			'Scholarship holder in the LSI project at UFCG. Working with Data Science and Machine Learning.'
	},
	{
		slug: 'software-developement',
		company: 'Laboratório de Sistemas de Informação - LSI',
		description:
			"I work on an LSI/UFCG project in partnership with tax solution Synchro, Syn4TDF. It is a native solution for the SAP environment, which exploits the full power of HANA processing and provides information on the taxable event in real time when determining and declaring the ancillary obligation. Synchro's tax knowledge know-how is essential to ensure compliance and efficiency in the process of generating tax obligations.",
		contract: ContractType.PartTime,
		type: 'Software Development',
		location: 'Campina Grande - PB',
		period: { from: new Date(2020, 4, 1), to: new Date(2022, 4, 1) },
		skills: getSkills('java', 'clojure', 'spring', 'reactjs', 'ts', 'saphana'),
		name: 'Junior Developer',
		color: 'green',
		links: [],
		logo: Assets.LSI,
		shortDescription:
			'Scholarship holder in the LSI project at UFCG. Working with Data Science and Machine Learning.'
	},
	{
		slug: 'scholarship-holder',
		company: 'Laboratório de Sistemas de Informação - LSI',
		description:
			"Scholarship holder in the LSI project at UFCG. Working with Data Science and Machine Learning. Objective: Extract and convert the videos from TV Paraíba's 'JPB Calendar' section into texts and then process the data obtained, extracting its location and the class of the problem addressed in the video. At the end of the research, a library capable of extracting the address and the urban problem addressed in a text will be distributed.",
		contract: ContractType.PartTime,
		type: 'Software Development',
		location: 'Campina Grande - PB',
		period: { from: new Date(2019, 3, 1), to: new Date(2020, 4, 1) },
		skills: getSkills('python', 'js', 'sklearn', 'numpy', 'pandas', 'spacy'),
		name: 'Scholarship Holder',
		color: 'green',
		links: [],
		logo: Assets.LSI,
		shortDescription:
			'Scholarship holder in the LSI project at UFCG. Working with Data Science and Machine Learning.'
	}
];

export const title = 'Experience';
