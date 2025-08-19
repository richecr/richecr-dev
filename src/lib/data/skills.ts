import { omit, type StringWithAutoComplete } from '@riadh-adrani/utils';
import aws from '../md/aws.md?raw';
import clojure from '../md/clojure.md?raw';
import css from '../md/css.md?raw';
import docker from '../md/docker.md?raw';
import fastapi from '../md/fastapi.md?raw';
import fastify from '../md/fastify.md?raw';
import go from '../md/go.md?raw';
import java from '../md/java.md?raw';
import js from '../md/js.md?raw';
import kafka from '../md/kafka.md?raw';
import kotlin from '../md/kotlin.md?raw';
import kubernetes from '../md/kubernetes.md?raw';
import mongodb from '../md/mongodb.md?raw';
import nestjs from '../md/nestjs.md?raw';
import nginx from '../md/nginx.md?raw';
import nodejs from '../md/nodejs.md?raw';
import numpy from '../md/numpy.md?raw';
import pandas from '../md/pandas.md?raw';
import postgresql from '../md/postgresql.md?raw';
import python from '../md/python.md?raw';
import reactjs from '../md/reactjs.md?raw';
import redis from '../md/redis.md?raw';
import saphana from '../md/saphana.md?raw';
import sklearn from '../md/sklearn.md?raw';
import spacy from '../md/spacy.md?raw';
import spring from '../md/spring.md?raw';
import svelte from '../md/svelte.md?raw';
import ts from '../md/ts.md?raw';
import vuejs from '../md/vuejs.md?raw';
import type { Skill, SkillCategory } from '../types';
import Assets from './assets';

const defineSkillCategory = <S extends string>(data: SkillCategory<S>): SkillCategory<S> => data;

const categories = [
	defineSkillCategory({ name: 'Programming Languages', slug: 'pro-lang' }),
	defineSkillCategory({ name: 'Frameworks', slug: 'framework' }),
	defineSkillCategory({ name: 'Libraries', slug: 'library' }),
	defineSkillCategory({ name: 'Langauges', slug: 'lang' }),
	defineSkillCategory({ name: 'Databases', slug: 'db' }),
	defineSkillCategory({ name: 'ORMs', slug: 'orm' }),
	defineSkillCategory({ name: 'DevOps', slug: 'devops' }),
	defineSkillCategory({ name: 'Testing', slug: 'test' }),
	defineSkillCategory({ name: 'Dev Tools', slug: 'devtools' }),
	defineSkillCategory({ name: 'Markup & Style', slug: 'markup-style' }),
	defineSkillCategory({ name: 'Design', slug: 'design' }),
	defineSkillCategory({ name: 'Soft Skills', slug: 'soft' })
] as const;

const defineSkill = <S extends string>(
	skill: Omit<Skill<S>, 'category'> & {
		category?: StringWithAutoComplete<(typeof categories)[number]['slug']>;
	}
): Skill<S> => {
	const out: Skill<S> = omit(skill, 'category');

	if (skill.category) {
		out.category = categories.find((it) => it.slug === skill.category);
	}

	return out;
};

export const items = [
	defineSkill({
		slug: 'python',
		color: 'blue',
		description: python,
		logo: Assets.Python,
		name: 'Python',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'java',
		color: 'orange',
		description: java,
		logo: Assets.Java,
		name: 'Java',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'kotlin',
		color: 'pink',
		description: kotlin,
		logo: Assets.Kotlin,
		name: 'Kotlin',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'js',
		color: 'yellow',
		description: js,
		logo: Assets.JavaScript,
		name: 'Javascript',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'ts',
		color: 'blue',
		description: ts,
		logo: Assets.TypeScript,
		name: 'Typescript',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'go',
		color: 'orange',
		description: go,
		logo: Assets.Go,
		name: 'Go',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'clojure',
		color: 'orange',
		description: clojure,
		logo: Assets.Clojure,
		name: 'Clojure',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'nodejs',
		color: 'yellow',
		description: nodejs,
		logo: Assets.NodeJs,
		name: 'NodeJs',
		category: 'framework'
	}),
	defineSkill({
		slug: 'spring',
		color: 'cyan',
		description: spring,
		logo: Assets.Spring,
		name: 'Spring',
		category: 'framework'
	}),
	defineSkill({
		slug: 'nestjs',
		color: 'cyan',
		description: nestjs,
		logo: Assets.NestJs,
		name: 'NestJs',
		category: 'framework'
	}),
	defineSkill({
		slug: 'fastapi',
		color: 'cyan',
		description: fastapi,
		logo: Assets.FastApi,
		name: 'FastApi',
		category: 'library'
	}),
	defineSkill({
		slug: 'fastify',
		color: 'cyan',
		description: fastify,
		logo: Assets.Fastify,
		name: 'Fastify',
		category: 'library'
	}),
	defineSkill({
		slug: 'expressjs',
		color: 'orange',
		description: '',
		logo: Assets.ExpressJs,
		name: 'ExpressJs',
		category: 'library'
	}),
	defineSkill({
		slug: 'reactjs',
		color: 'cyan',
		description: reactjs,
		logo: Assets.ReactJs,
		name: 'React Js',
		category: 'library'
	}),
	defineSkill({
		slug: 'vuejs',
		color: 'cyan',
		description: vuejs,
		logo: Assets.VueJs,
		name: 'Vue Js',
		category: 'framework'
	}),
	defineSkill({
		slug: 'svelte',
		color: 'cyan',
		description: svelte,
		logo: Assets.Svelte,
		name: 'svelte',
		category: 'library'
	}),
	defineSkill({
		slug: 'aws',
		color: 'orange',
		description: aws,
		logo: Assets.AWS,
		name: 'Aws',
		category: 'devops'
	}),
	defineSkill({
		slug: 'docker',
		color: 'orange',
		description: docker,
		logo: Assets.Docker,
		name: 'Docker',
		category: 'devops'
	}),
	defineSkill({
		slug: 'kubernetes',
		color: 'orange',
		description: kubernetes,
		logo: Assets.Kubernetes,
		name: 'Kubernetes',
		category: 'devops'
	}),
	defineSkill({
		slug: 'nginx',
		color: 'orange',
		description: nginx,
		logo: Assets.Nginx,
		name: 'Nginx',
		category: 'devops'
	}),
	defineSkill({
		slug: 'kafka',
		color: 'orange',
		description: kafka,
		logo: Assets.Kafka,
		name: 'Kafka',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'postgresql',
		color: 'orange',
		description: postgresql,
		logo: Assets.PostgreSQL,
		name: 'PostgreSQL',
		category: 'db'
	}),
	defineSkill({
		slug: 'mongodb',
		color: 'orange',
		description: mongodb,
		logo: Assets.MongoDB,
		name: 'MongoDB',
		category: 'db'
	}),
	defineSkill({
		slug: 'redis',
		color: 'orange',
		description: redis,
		logo: Assets.Redis,
		name: 'Redis',
		category: 'db'
	}),
	defineSkill({
		slug: 'saphana',
		color: 'orange',
		description: saphana,
		logo: Assets.SapHana,
		name: 'SapHana',
		category: 'db'
	}),
	defineSkill({
		slug: 'css',
		color: 'orange',
		description: css,
		logo: Assets.CSS,
		name: 'CSS',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'sklearn',
		color: 'orange',
		description: sklearn,
		logo: Assets.Sklearn,
		name: 'Sklearn',
		category: 'library'
	}),
	defineSkill({
		slug: 'numpy',
		color: 'orange',
		description: numpy,
		logo: Assets.Numpy,
		name: 'Numpy',
		category: 'library'
	}),
	defineSkill({
		slug: 'pandas',
		color: 'orange',
		description: pandas,
		logo: Assets.Pandas,
		name: 'Pandas',
		category: 'library'
	}),
	defineSkill({
		slug: 'spacy',
		color: 'orange',
		description: spacy,
		logo: Assets.Spacy,
		name: 'Spacy',
		category: 'library'
	})
] as const;

export const title = 'Skills';

export const getSkills = (
	...slugs: Array<StringWithAutoComplete<(typeof items)[number]['slug']>>
): Array<Skill> => items.filter((it) => slugs.includes(it.slug));

export const groupByCategory = (
	query: string
): Array<{ category: SkillCategory; items: Array<Skill> }> => {
	const out: ReturnType<typeof groupByCategory> = [];

	const others: Array<Skill> = [];

	items.forEach((item) => {
		if (query.trim() && !item.name.toLowerCase().includes(query.trim().toLowerCase())) return;

		// push to others if item does not have a category
		if (!item.category) {
			console.log(item.category);
			others.push(item);
			return;
		}

		// check if category exists
		let category = out.find((it) => it.category.slug === item.category?.slug);

		if (!category) {
			category = { items: [], category: item.category };

			out.push(category);
		}

		category.items.push(item);
	});

	if (others.length !== 0) {
		out.push({ category: { name: 'Others', slug: 'others' }, items: others });
	}

	return out;
};
