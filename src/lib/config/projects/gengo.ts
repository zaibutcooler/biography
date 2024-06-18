import type { Project } from '.';

export const gengo: Project = {
	projectId: 'gengo',
	title: 'Gengo',

	pin: false,
	techStack: ['next.js', 'mongodb', 'job-seeking'],
	description:
		'A multi-lingual version of chatgpt using the google translate API to get a full translation of the response.',
	info: [],
	duration: '1 month',
	startedDate: 'August 2023',
	category: 'generative-ai',
	status: 'In Progress',
	links: [
		{
			label: 'Website',
			href: 'https://gengo.vercel.app'
		}
	]
};
