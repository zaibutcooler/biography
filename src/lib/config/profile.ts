import { aboutMe } from './about';
import { myClients } from './clients';
import { myProjects } from './projects';

export type ProfileType = typeof profile;

export const profile = {
	fullName: 'Sai Ye Yint Aung',
	nickName: 'Zai',
	location: 'Taunggyi',
	locationLink: '',
	about: aboutMe[0].content,
	summary: aboutMe[1].content,
	avatar: '/me.jpeg',
	website: ''
};

export const projects = myProjects;

export const clients = myClients;

export const educations = [
	{
		school: 'University of People (California)',
		degree: 'B.E. Computer Science',
		start: '2022',
		end: '2025'
	},
	{
		school: 'Technological University (Mandalay)',
		degree: 'B.Engineering. Civil Engineering',
		start: '2020',
		end: '2021'
	},
	{
		school: 'Government Technological High School (Lashio)',
		degree: 'Certified Technical Specialist',
		start: '2020',
		end: '2018'
	}
];

export const works = [
	{
		company: 'Archaic',
		link: 'https://about.meta.com/actions/promoting-safety-and-expression/',
		badges: ['Lead Developer', 'Research', 'Data Science'],
		title: 'Cheif Technology Officer',
		logo: '',
		start: '2023',
		end: '2024',
		description:
			'Created algorithms for identifying harmful content and developed dashboards to detect malicious activities.'
	},
	{
		company: 'StudyCrew',
		link: 'https://www.studycrw.world/',
		badges: ['React', 'Node.js', 'Next.js'],
		title: 'Lead Developer',
		start: '2022',
		end: '2022',
		description: 'Under Rumi Chunara, centered around public health and social media.',
		logo: '' // Path to NYU logo image
	},

	{
		company: 'Konoike',
		link: 'https://www.studycrw.world/',
		badges: ['Autocad', 'Revit', 'Sketchup', 'Leadership'],
		title: 'Team Lead Architect',
		start: '2021',
		end: '2022',
		description: 'Under Rumi Chunara, centered around public health and social media.',
		logo: '' // Path to NYU logo image
	}
];

// done
export const skills = [
	'Python',
	'Pytorch',
	'TensorFlow',
	'Django',
	'FastAPI',
	'TypeScript',
	'NextJs',
	'NodeJs',
	'ReactJs',
	'Express',
	'SvelteKit'
];

// done
export const contactData = {
	email: 'zaiyellyintaung@gmail.com',
	tel: '+95-987304010',
	social: [
		{
			name: 'GitHub',
			url: 'https://github.com/zaibutcooler',
			icon: 'github'
		},
		{
			name: 'LinkedIn',
			url: 'https://www.linkedin.com/in/saiyeyintaung/',
			icon: 'linkedin'
		},
		{
			name: 'X',
			url: 'https://x.com/zaibutcooler',
			icon: 'twitter'
		}
	]
};
