import type { Project } from '.';

export const yume: Project = {
	projectId: 'yume',
	title: 'Yume　(夢)',
	pin: true,
	duration: '6 months',
	startedDate: 'January 2024',
	category: 'generative-ai',
	status: 'In Progress',
	techStack: ['python', 'llms', 'pytorch', 'generative-ai', 'open-sourced'],
	description:
		'Japanese LLM (1.5B parameters), highly inspired by Andrej Karpathy trained upon dialogs from anime and manga and aimed to generate anime dialogs',
	info: [
		{
			label: 'image',
			content: '/project-assets/yume_1.png'
		},
		{
			label: 'text',
			content: 'I could speak and understand Japanese and '
		},

		{
			label: 'image',
			content: '/project-assets/yume_2.png'
		}
	],
	links: [
		{
			label: 'Source Code',
			href: 'https://github.com/zaibutcooler/yume/'
		},
		{
			label: 'Opensourced Model',
			href: 'https://huggingface.co/zaibutcooler/yume/'
		},
		{
			label: 'Huggingface Space',
			href: 'https://huggingface.co/spaces/zaibutcooler/yume'
		},
		{
			label: 'Japanese Dataset',
			href: 'https://huggingface.co/datasets/zaibutcooler/nihon-wiki'
		},
		{
			label: 'Animanga Dataset',
			href: 'https://huggingface.co/datasets/zaibutcooler/animanga-dialogs'
		}
	]
};
