import type { Project } from '.';

export const mailAgent: Project = {
	projectId: 'mailAgent',
	title: 'MailAgent',

	pin: false,
	techStack: ['groq', 'automation', 'email'],
	description:
		'An automation tool with llm for sending emails and response accordingly using groq api to get the fastest response.',
	info: [],
	duration: '1 months',
	startedDate: 'May 2024',
	category: 'generative-ai',
	status: 'In Progress',
	links: [
		{
			label: 'Website',
			href: 'https://mailAgentedu.vercel.app'
		}
	]
};
