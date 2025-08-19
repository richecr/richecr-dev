import type { Education } from '../types';
import Assets from './assets';

export const items: Array<Education> = [
	{
		degree: 'MBA of Full Cycle Architecture',
		description:
			'The MBA in Full Cycle Architecture is a comprehensive program, accredited by the Ministry of Education (MEC), designed to develop the key skills a software engineer needs to lead, architect, and deliver large-scale projects for major companies, positioning graduates among the most sought-after and well-paid professionals in the market.',
		location: 'Online',
		logo: Assets.FullCycle,
		name: '',
		organization: 'FullCycle',
		period: { from: new Date(2023, 6, 1) },
		shortDescription: '',
		slug: 'dummy-education-item-2',
		subjects: [
			'Java',
			'Golang',
			'Docker',
			'Kubernetes',
			'AWS',
			'Microservices',
			'DDD',
			'TDD',
			'Hexagonal Architecture',
			'Clean Code',
			'Clean Architecture',
			'SOLID',
			'Design Patterns',
			'CI/CD',
			'Git',
			'Linux',
			'PostgreSQL',
			'MySQL',
			'MongoDB',
			'Redis',
			'RabbitMQ',
			'Kafka',
			'Nginx',
			'Jenkins'
		]
	},
	{
		degree: 'Bachelor degree of Computer Science',
		description: '',
		location: 'Campina Grande - PB',
		logo: Assets.UFCG,
		name: '',
		organization: 'Universidade Federal de Campina Grande - UFCG',
		period: { from: new Date(2017, 8, 1), to: new Date(2022, 8, 1) },
		shortDescription: '',
		slug: 'dummy-education-item',
		subjects: [
			'C',
			'Algorithm',
			'Data Structure',
			'Machine Learning',
			'Artificial Intelligence',
			'Software Engineering',
			'Networks',
			'Web development',
			'Algebra',
			'Python',
			'C++',
			'Java',
			'English'
		]
	}
];

export const title = 'Education';
