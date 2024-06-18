import type { Project } from '.';

export const librarian: Project = {
	projectId: 'librarian',
	title: 'Librarian',
	pin: true,
	techStack: ['ruby on rails', 'productivity', 'full-stack'],
	description:
		'A book management system for busy entrepreneurs (at least I can use if no one does) built with ruby on rails and rails ui.',
	info: [
		{
			label: 'text',
			content:
				"I'm an introvert so I love buying books, reading books and everything related to books. And I am also lazy, I am tech entrepreneur, and I got a very bad memory (probably the worst you have ever seen). I spent 10$ to buy a book ,I spent 6 hours reading it,and now I forgot everything I read. What should I do?"
		},
		{ label: 'image', content: '/project-assets/librarian_1.png' },
		{
			label: 'text',
			content:
				'I usually take notes on my normal note app like this and I know that there are a lot of productivity apps that could help but they were never intended to do what I want to do. I want to read books, take notes, explore books, and see how many words, lines, minutes and pages that I read and even see how tall it is after stacking all the books I read, how expensive my book collections are and even more weird things that I want to do.'
		},
		{
			label: 'text',
			content:
				"There is a quote that I hate which goes something like this 'programmers spent 10 hours to automate a task where you can finish it manually within 5 minutes'. So I did the exact thing. "
		},

		{ label: 'image', content: '/project-assets/librarian_2.png' },
		{
			label: 'text',
			content:
				" I made a web app with ruby on rails and rails ui. It is still in the development process til this day and I hope I could finish it someday and solve a problem for a nerd like me. I am happy to build things and I don't know why "
		}
	],
	duration: '12 months',
	startedDate: 'June 2023',
	category: 'website',
	status: 'In Progress',
	links: [
		{
			label: 'Source Code',
			href: 'https://github.com/zaibutcooler/librarian'
		}
	]
};
