import type { Project } from '.';

export const burmeseGPT: Project = {
	projectId: 'burmese-gpt',
	title: 'Burmese-GPT',
	pin: true,
	techStack: ['python', 'llms', 'pytorch', 'generative-ai', 'open-sourced'],
	description:
		'Opensourced LLM (500M parameters) model for Burmese Language with low level pytorch implementation. ',
	info: [],
	duration: '7 months',
	startedDate: 'December 2023',
	category: 'generative-ai',
	status: 'In Progress',
	links: [
		{
			label: 'Source Code',
			href: 'https://github.com/zaibutcooler/burmese-gpt'
		},
		{
			label: 'Opensourced Model',
			href: 'https://huggingface.co/zaibutcooler/burmese-gpt'
		},
		{
			label: 'Huggingface Space',
			href: 'https://huggingface.co/spaces/zaibutcooler/burmese-gpt'
		},
		{
			label: 'Wiki Dataset',
			href: 'https://huggingface.co/datasets/zaibutcooler/wiki-burmese'
		},
		{
			label: 'Mini Dataset',
			href: 'https://huggingface.co/datasets/zaibutcooler/mini-burmese'
		}
	]
};
