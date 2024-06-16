import type { Project } from '.';

export const vegans: Project = {
	projectId: 've-gans',
	title: 'Ve-gans',
	pin: true,
	techStack: ['research-paper', 'generative-ai', 'computer-vision', 'archi-drawings'],
	description:
		'A research project for generative ai model specifically to generate floorplans and archi-drawings.',
	info: [],
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
			href: 'https://github.com/zaibutcooler/librarian'
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
