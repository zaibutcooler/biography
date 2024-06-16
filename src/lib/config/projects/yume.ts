import type { Project } from '.';

export const yume: Project = {
	projectId: 'yume',
	title: 'Yume',
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
			content: '/project-assets/example.png'
		},
		// { label: 'video', content: 'https://youtu.be/qJcfMeAeZAQ?list=RDqJcfMeAeZAQ' },
		{
			label: 'text',
			content:
				'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic ducimus qui dolor dolore, natus culpa. Placeat adipisci debitis ipsam aut. Corporis iste earum, repellat aspernatur nisi a corrupti! Ipsa, quod.'
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
