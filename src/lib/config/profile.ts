import { aboutMe } from './about';
import { myClients } from './clients';
import { myEducations, myWorks } from './history';
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
	website: 'https://zaibutcooler.vercel.app',
	company: '&copy; 2023 Archaic Group Pty Ltd T/A Premia AI. All rights reserved.'
};

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

export const contactData = {
	email: 'zaibutcooler@icloud.com',
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
	],
	youtube: {
		name: 'Youtube',
		url: 'https://youtube.com/zaibutcooler',
		icon: 'youtube'
	}
};

export const projects = myProjects;

export const clients = myClients;

export const educations = myEducations;

export const works = myWorks;
