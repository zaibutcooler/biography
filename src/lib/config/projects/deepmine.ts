import type { Project } from '.';

export const deepmine: Project = {
	projectId: 'deepmine',
	title: 'Deepmine',
	pin: true,
	techStack: ['ruby', 'deep-learning', 'autograd', 'open-sourced'],
	description:
		'An opensourced, lightweight and minimalist (pytorch-like) deep learning library/framework with ruby programming language.',

	info: [
		{
			label: 'text',
			content:
				'I started learning deep-learning with TensorFlow and had no idea why a lot of tutorials are done with PyTorch until I started using it. It feels lightweight and everything is organized when training. Since then, Pytorch became a part of me for whatever I do.  '
		},

		{ label: 'image', content: '/project-assets/deepmine_1.png' },
		{
			label: 'text',
			content:
				"My obsession with PyTorch didn't stop here, I made a deep learning library with Ruby that looks exactly like PyTorch. Why? Fisrt, I want to understand the low-level (Spoiler Alert! I forgot everything by the time I am writing this so it wasn't the case lol). "
		},
		{
			label: 'text',
			content:
				"Second, I love Ruby as a programming language and thinking that it would be very interesting to make something with Ruby since it's class and modules aren't that similar with Python. This is an example of the generating dummy data with ruby and it's very minimalist. "
		},

		{ label: 'image', content: '/project-assets/deepmine_2.png' },
		{
			label: 'text',
			content:
				'The initializing process is quite simple and everyone who had used PyTorch will love how it is done. It is quite fun to train with this.'
		},

		{ label: 'image', content: '/project-assets/deepmine_3.png' },
		{
			label: 'text',
			content:
				'Training Process is the main reason why I loved PyTorch but I started to hated it when I have to write the whole back propergation algorithm. I got so many errors that I took a break to focus on other urgent projects. I will get back to this after I moved out!'
		}
	],
	duration: '3 months',
	startedDate: 'May 2024',
	category: 'dev-tool',
	status: 'In Progress',
	links: [
		{
			label: 'Source Code',
			href: 'https://github.com/zaibutcooler/deepmine/'
		},
		{
			label: 'Ruby Gem',
			href: 'https://github.com/zaibutcooler/yume/'
		}
	]
};
