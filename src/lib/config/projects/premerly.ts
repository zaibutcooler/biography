import type { Project } from '.';

export const premerly: Project = {
	projectId: 'premerly',
	title: 'Premerly',

	pin: false,
	techStack: ['saas', 'next.js', 'real-estate', 'ai'],
	description:
		'A modern ai toolbox for the real-estate agents and property developers. Offering image to image ai tools, llms and many more.',
	info: [
		{
			label: 'text',
			content:
				"My very first emotional project that I've done so far. My first Saas Application, my first official startup and my first experience as a CTO. I coded the website at the refugee camp when my house got bombed. It's mixed with different emotions for me."
		},

		{
			label: 'image',
			content: '/project-assets/premerly_1.png'
		},
		{
			label: 'text',
			content:
				'The features are very simple, property description with location data, image data and the power of Ai. The image generation, floorplan generation and virtual staging with chat features. Market Analysis is one of the best feature that we added so far.'
		},

		{ label: 'image', content: '/project-assets/premerly_2.png' }
		// { label: 'text', content: '/project-assets/premerly_1.png' },
		// { label: 'text', content: '/project-assets/premerly_1.png' }
	],
	duration: '3 months',
	startedDate: 'September 2023',
	category: 'website',
	status: 'Finished',
	links: [
		{
			label: 'Website',
			href: 'https://premerly.com'
		}
	]
};
