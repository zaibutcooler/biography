export interface Project {
	projectId: string;
	title: string;
	techStack: string[];
	description: string;
	link: {
		label: string;
		href: string;
	};
	pin: boolean;
}

export const myProjects: Project[] = [
	{
		projectId: 'pj1x4h8q',
		title: 'Yume',
		pin: true,
		techStack: ['python', 'llms', 'structured extraction'],
		description:
			'Structured extraction for LLMS using Pydantic, Over 30k monthly downloads on PyPI.',
		link: {
			label: 'Instructor',
			href: 'https://jxnl.github.io/instructor/'
		}
	},

	{
		projectId: 'pj2e3r5t',
		title: 'Wrack',
		pin: true,
		techStack: ['python', 'llms', 'structured extraction'],
		description:
			'Structured extraction for LLMS using Pydantic, Over 30k monthly downloads on PyPI.',
		link: {
			label: 'Instructor',
			href: 'https://jxnl.github.io/instructor/'
		}
	},
	{
		projectId: 'pj3y7u8i',
		title: 'Uwu',
		pin: true,
		techStack: ['python', 'llms', 'structured extraction'],
		description:
			'Structured extraction for LLMS using Pydantic, Over 30k monthly downloads on PyPI.',
		link: {
			label: 'Instructor',
			href: 'https://jxnl.github.io/instructor/'
		}
	},
	{
		projectId: 'pj4d5f6g',
		title: 'Ve-gans',
		pin: true,
		techStack: ['Stitchfix', 'pytorch', 'representation learning', 'search'],
		description:
			'Lead computer vision research, and embedding search system using multi-modal embeddings powered by image, text, and impression data.',
		link: {
			label: 'Stylist Shuffle',
			href: 'https://www.stitchfix.com/women/blog/inside-stitchfix/how-style-shuffle-works/'
		}
	},
	{
		projectId: 'pj5h3k2l',
		title: 'Burmese-GPT',
		pin: true,
		techStack: ['devops', 'python', 'orchestration', 'observability'],
		description:
			'Designed and implemented Flight, a recommendation framework that improved system reliability and scalability, handling over 350 million daily requests.',
		link: {
			label: 'Learn more about Flight at Stitchfix',
			href: 'https://jxnl.notion.site/Recommendations-with-Flight-at-Stitch-Fix-bf5de4e932b34af1ad912294236d81ba'
		}
	},
	{
		projectId: 'pj6m9n0b',
		title: 'Kioku',
		pin: true,
		techStack: ['typescript', 'prompt engineering'],
		description: 'AI-powered journaling application with long-term memory and semantic search.',
		link: {
			label: 'Journal',
			href: 'http://usejournal.xyz'
		}
	}
];
