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
		title: 'Resonant',
		techStack: ['react-native', 'ruby on rails', 'nextjs', 'aws'],
		description:
			'Made a mobile app(react-native), admin dashboard(nextjs) and a server(ruby on rails) to revolutionize the way artists, venues and audiences connect, buying tickets and making concerts.',
		link: {
			label: 'resonant-app.com',
			href: 'https://resonant-app.com'
		},
		pin: false,
		resume: true,
		logo: ''
	},
	{
		title: 'Greenlight',
		techStack: ['full-stack', 'erb', 'pwa'],
		description:
			'One of the biggest private school in the region. Worked for a pwa for entire school management system including payments, grading, staffs, accounts and many more.',
		link: {
			label: 'greenlightedu.vercel.app',
			href: 'http://greenlightedu.vercel.app'
		},
		pin: false,
		resume: true,
		logo: ''
	},

	{
		title: 'Aspora',
		techStack: ['nextjs', 'shadcn-ui', 'stripe'],
		description:
			'A platform to connect job-seeker and businesses to find the best match. Worked as a full-stack developer to build the platform.',
		link: {
			label: 'aspora.io',
			href: 'http://aspora.io'
		},
		pin: false,
		resume: true,
		logo: ''
	},
	{
		title: 'StudyCrew',
		techStack: ['nextjs', 'flutter', 'supabase'],
		description:
			'Contributed to a non-profit education startup as a full-stack developer and later ends up working as a maintainer and a lead developer.',
		link: {
			label: 'Study Crew',
			href: 'http://studycrew.world/'
		},
		pin: false,
		resume: true,
		logo: ''
	},
	{
		title: 'Atif',
		techStack: ['pytorch', 'lightning-ai', 'transformers', 'gpt'],
		description:
			'Help developing an image encoder-decoder model for Piping and instrumentation diagram (P&ID) diagrams which is the heart of Chemical Engineering.',
		link: {
			label: '#',
			href: '#'
		},
		pin: false,
		resume: true,
		logo: ''
	}
];
