import type { Project } from '.';

export const greenlight: Project = {
	projectId: 'greenlight',
	title: 'Greenlight',

	pin: false,
	techStack: ['erp', 'next.js', 'pwa', 'private-school'],
	description:
		'A modern ERP application for private-school where the owner can manage student payments, grades, staffs, expenses and many more.',
	info: [],
	duration: '12 months',
	startedDate: 'June 2023',
	category: 'generative-ai',
	status: 'In Progress',
	links: [
		{
			label: 'Website',
			href: 'https://greenlightedu.vercel.app'
		}
	]
};
