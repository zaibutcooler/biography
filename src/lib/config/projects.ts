export interface Project {
	projectId: string;
	title: string;
	techStack: string[];
	description: string;
	links: {
		label: string;
		href: string;
	}[];
	pin: boolean;
}

export const myProjects: Project[] = [
	{
		projectId: 'yume',
		title: 'Yume',
		pin: true,
		techStack: ['python', 'llms', 'pytorch', 'generative-ai', 'open-sourced'],
		description:
			'Japanese LLM (1.5B parameters), highly inspired by Andrej Karpathy trained upon dialogs from animanga and aimed to generate anime conversations',
		links: [
			{
				label: 'Github',
				href: 'https://github.com/zaibutcooler/yume/'
			}
		]
	},

	{
		projectId: 'deepmine',
		title: 'Deepmine',
		pin: true,
		techStack: ['ruby', 'deep-learning', 'autograd', 'open-sourced'],
		description: 'A minimalist (pytorch-like) deep learning library with ruby.',
		links: [
			{
				label: 'Github',
				href: 'https://github.com/zaibutcooler/yume/'
			}
		]
	},
	{
		projectId: 'librarian',
		title: 'Librarian',
		pin: true,
		techStack: ['ruby on rails', 'productivity', 'full-stack'],
		description:
			'A book management system for busy entrepreneurs built with ruby on rails and rails ui.',
		links: [
			{
				label: 'Github',
				href: 'https://github.com/zaibutcooler/librarian'
			}
		]
	},
	{
		projectId: 've-gans',
		title: 'Ve-gans',
		pin: true,
		techStack: ['Stitchfix', 'pytorch', 'representation learning', 'search'],
		description:
			'Lead computer vision research, and embedding search system using multi-modal embeddings powered by image, text, and impression data.',
		links: [
			{
				label: 'Github',
				href: 'https://github.com/zaibutcooler/librarian'
			}
		]
	},
	{
		projectId: 'burmese-gpt',
		title: 'Burmese-GPT',
		pin: true,
		techStack: ['python', 'llms', 'pytorch', 'generative-ai', 'open-sourced'],
		description:
			'Opensourced LLM (500M parameters) model for Burmese Language with low level pytorch implementation. ',
		links: [
			{
				label: 'Github',
				href: 'https://github.com/zaibutcooler/burmese-gpt'
			}
		]
	},
	{
		projectId: 'kioku',
		title: 'Kioku',
		pin: true,
		techStack: ['typescript', 'prompt engineering'],
		description: 'AI-powered journaling application with long-term memory and semantic search.',
		links: [
			{
				label: 'Github',
				href: 'https://github.com/zaibutcooler/kioku'
			}
		]
	}
];
