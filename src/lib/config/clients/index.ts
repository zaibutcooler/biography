export interface Client {
	title: string;
	techStack: string[];
	description: string;
	link: {
		label: string;
		href: string;
	};
}

export const myClients: Client[] = [
	{
		title: 'Greenlight',
		techStack: ['full-stack', 'erb', 'pwa'],
		description: 'Made Student Management System for ',
		link: {
			label: 'greenlightedu.vercel.app',
			href: 'http://greenlightedu.vercel.app'
		}
	},
	{
		title: 'Resonant',
		techStack: ['react-native', 'social-network', 'aws'],
		description:
			'Naro sits in the background, using contextual clues to proactively select the right content and messaging for each customer conversation, from emails to meetings.',
		link: {
			label: 'narohq.com',
			href: 'http://narohq.com'
		}
	},
	{
		title: 'Trunk Tools',
		techStack: ['construction', 'technical advisor', 'retrival'],
		description:
			'Trunk Tools addresses the skilled labor shortage in construction, enhancing workforce productivity through AI-based tools.',
		link: {
			label: 'trunktools.com',
			href: 'https://trunktools.com/'
		}
	},
	{
		title: 'Modal Labs',
		techStack: ['technical writing', 'python'],
		description:
			'Modal specializes in cloud functions, offering a platform for running generative AI models, large-scale batch jobs, and more.',
		link: {
			label: 'modal.com',
			href: 'https://modal.com/'
		}
	},
	{
		title: 'Pydantic',
		techStack: ['technical writing', 'python'],
		description:
			'Pydantic provides data validation and settings management using Python type annotations, enforcing type hints at runtime with user-friendly error handling.',
		link: {
			label: 'pydantic.dev',
			href: 'http://pydantic.dev'
		}
	}
];
