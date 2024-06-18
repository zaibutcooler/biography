export interface Client {
	title: string;
	techStack: string[];
	description: string;
	link: {
		label: string;
		href: string;
	};
	resume: boolean;
	pin: boolean;
	logo: string;
}

export const myClients: Client[] = [
	{
		title: 'Greenlight',
		techStack: ['full-stack', 'erb', 'pwa'],
		description:
			'One of the biggest private school in my hometown. Worked for a pwa for entire school management system including student payments, grading, staff management, account management and many more.',
		link: {
			label: 'greenlightedu.vercel.app',
			href: 'http://greenlightedu.vercel.app'
		},
		pin: false,
		resume: true,
		logo: ''
	},
	{
		title: 'Resonant',
		techStack: ['react-native', 'social-network', 'aws'],
		description:
			'Revolutionizing the way artists, venues and audiences connect. From buying tickets to making concerts will not be the same thanks to Resonant.',
		link: {
			label: 'narohq.com',
			href: 'http://narohq.com'
		},
		pin: false,
		resume: true,
		logo: ''
	}
];
