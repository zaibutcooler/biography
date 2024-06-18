import type { Project } from '.';

export const vegans: Project = {
	projectId: 've-gans',
	title: 'Ve-gans',
	pin: true,
	techStack: ['research-paper', 'generative-ai', 'computer-vision', 'archi-drawings'],
	description:
		'A research project for generative ai model specifically to generate floorplans and archi-drawings.',
	info: [
		{
			label: 'text',
			content:
				'A research project where I mainly focus on a new type of GANs for the image generation task where we need to get accurate results.. '
		}
	],
	duration: '6 months',
	startedDate: 'January 2024',
	category: 'generative-ai',
	status: 'In Progress',
	links: [
		{
			label: 'Source Code',
			href: 'https://github.com/zaibutcooler/ve-gans'
		},
		{
			label: 'Research Paper',
			href: 'https://docs.google.com/document/d/1nm6Pj3HaDo-W2HAQPPrgGqWIH74SPgQZAHxC5Uk20PQ/edit?usp=sharing'
		},
		{
			label: 'Huggingface Space',
			href: 'https://huggingface.co/spaces/zaibutcooler/ve-gans'
		},
		{
			label: 'Opensourced Model',
			href: 'https://huggingface.com/zaibutcooler/ve-gans'
		},
		{
			label: 'Dataset',
			href: 'https://huggingface.co/datasets/zaibutcooler/archi-12k'
		}
	]
};
