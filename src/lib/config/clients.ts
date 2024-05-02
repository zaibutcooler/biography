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
		title: 'Rewind AI',
		techStack: ['memory', 'personal computing'],
		description:
			'Rewind AI is a personal memory assistant that helps you remember, organize, and navigate your life.',
		link: {
			label: 'rewind.ai',
			href: 'http://rewind.ai'
		}
	},
	{
		title: 'Naro',
		techStack: ['python', 'prompt engineering', 'sales'],
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
	},
	{
		title: 'Weight & Biases',
		techStack: ['technical writing', 'education', 'machine learning'],
		description:
			'Wandb (Weights & Biases) provides a platform for tracking machine learning experiments, offering tools for visualization, comparison, and collaboration in ML projects.',
		link: {
			label: 'wandb.ai',
			href: 'https://wandb.ai/'
		}
	},
	{
		title: 'New Computer',
		techStack: ['personal computing', 'python'],
		description:
			'Dot by New Computer is an intelligent guide designed to help you remember, organize, and navigate your life.',
		link: {
			label: 'new.computer',
			href: 'http://new.computer'
		}
	},

	{
		title: 'Greenlight Private School',
		techStack: ['nextjs', 'postgres', 'next-auth', 'prisma', 'tailwind'],
		description:
			'Student/Budget management system to manage more than 500 students. Nextjs is not a usual tech stack but they liked it.',
		link: {
			label: 'Greenlightedu',
			href: 'http://greenlightedu.vercel.app'
		}
	}
];
