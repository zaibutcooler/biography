// import { GitHubIcon } from "@/components/resume/icons/GitHubIcon"
// import { LinkedInIcon } from "@/components/resume/icons/LinkedInIcon"
// import { XIcon } from "@/components/resume/icons/XIcon"

export type ProfileType = typeof profile;

export const profile = {
	fullName: 'Sai Ye Yint Aung',
	nickName: 'Zai',
	location: 'Lashio',
	locationLink: '',
	about: '',
	summary: '',
	avatar: '/me.jpeg',
	website: ''
};

export const projects = [
	{
		title: 'Instructor',
		techStack: ['python', 'llms', 'structured extraction'],
		description:
			'Structured extraction for LLMS using Pydantic, Over 30k monthly downloads on PyPI.',
		link: {
			label: 'Instructor',
			href: 'https://jxnl.github.io/instructor/'
		}
	},
	{
		title: 'Multimodal Search',
		techStack: ['Stitchfix', 'pytorch', 'representation learning', 'search'],
		description:
			'Lead computer vision research, and embedding search system using multi-modal embeddings powered by image, text, and impression data.',
		link: {
			label: 'Stylist Shuffle',
			href: 'https://www.stitchfix.com/women/blog/inside-stitchfix/how-style-shuffle-works/'
		}
	},
	{
		title: 'RecSys Framework',
		techStack: ['devops', 'python', 'orchestration', 'observability'],
		description:
			'Designed and implemented Flight, a recommendation framework that improved system reliability and scalability, handling over 350 million daily requests.',
		link: {
			label: 'Learn more about Flight at Stitchfix',
			href: 'https://jxnl.notion.site/Recommendations-with-Flight-at-Stitch-Fix-bf5de4e932b34af1ad912294236d81ba'
		}
	},
	{
		title: 'Journal',
		techStack: ['typescript', 'prompt engineering'],
		description: 'AI-powered journaling application with long-term memory and semantic search.',
		link: {
			label: 'Journal',
			href: 'http://usejournal.xyz'
		}
	}
];

export const clients = [
	{
		title: 'Rewind AI',
		techStack: ['memory', 'personal computing'],
		description:
			'Rewind AI is a personal memory assistant that helps you remember, organize, and navigate your life.',
		link: {
			label: 'rewind.ai',
			href: 'http://rewind.ai'
		}
	},
	{
		title: 'Naro',
		techStack: ['python', 'prompt engineering', 'sales'],
		description:
			'Naro sits in the background, using contextual clues to proactively select the right content and messaging for each customer conversation, from emails to meetings.',
		link: {
			label: 'narohq.com',
			href: 'http://narohq.com'
		}
	},
	{
		title: 'Trunk Tools',
		techStack: ['construction', 'technical advisor', 'retrival'],
		description:
			'Trunk Tools addresses the skilled labor shortage in construction, enhancing workforce productivity through AI-based tools.',
		link: {
			label: 'trunktools.com',
			href: 'https://trunktools.com/'
		}
	},
	{
		title: 'Modal Labs',
		techStack: ['technical writing', 'python'],
		description:
			'Modal specializes in cloud functions, offering a platform for running generative AI models, large-scale batch jobs, and more.',
		link: {
			label: 'modal.com',
			href: 'https://modal.com/'
		}
	},
	{
		title: 'Pydantic',
		techStack: ['technical writing', 'python'],
		description:
			'Pydantic provides data validation and settings management using Python type annotations, enforcing type hints at runtime with user-friendly error handling.',
		link: {
			label: 'pydantic.dev',
			href: 'http://pydantic.dev'
		}
	},
	{
		title: 'Weight & Biases',
		techStack: ['technical writing', 'education', 'machine learning'],
		description:
			'Wandb (Weights & Biases) provides a platform for tracking machine learning experiments, offering tools for visualization, comparison, and collaboration in ML projects.',
		link: {
			label: 'wandb.ai',
			href: 'https://wandb.ai/'
		}
	},
	{
		title: 'New Computer',
		techStack: ['personal computing', 'python'],
		description:
			'Dot by New Computer is an intelligent guide designed to help you remember, organize, and navigate your life.',
		link: {
			label: 'new.computer',
			href: 'http://new.computer'
		}
	},

	{
		title: 'Kay.ai',
		techStack: ['retrieval', 'evals', 'infrastucture', 'python'],
		description:
			'Retrieve relevant context from the semantic web for your LLM apps with fully hosted embeddings.',
		link: {
			label: 'Kay.ai',
			href: 'http://Kay.ai'
		}
	}
];

export const educations = [
	{
		school: 'University of People',
		degree: 'B.Math. Computational Mathematics and Statistics',
		start: '2021',
		end: '#'
	},
	{
		school: 'Technological University (Mandalay)',
		degree: 'B.Math. Computational Mathematics and Statistics',
		start: '2021',
		end: '#'
	}
];

export const works = [
	{
		company: '567',
		link: 'https://jxnl.notion.site/jxnl/whats-up-95708748a05d40c398a4abc66a978a8e',
		badges: ['Consulting'],
		title: 'Owner / Consultant',
		logo: '', // Add logo if available
		start: '2023',
		end: 'Present',
		description:
			'Working with seed stage companies, helping founders with tech strategy, research, and infrastructure.'
	},
	{
		company: 'South Park Commons',
		link: 'https://www.southparkcommons.com/',
		badges: ['Sabbatical'],
		title: 'Member',
		logo: '', // Add logo if available
		start: '2023',
		end: 'Present',
		description:
			'Exploring LLM tooling around structured extraction and self-hosting. Launched Youtube University and developing Journal, an AI-powered journaling application.'
	},
	{
		company: 'Stitchfix',
		link: 'https://www.stitchfix.com/',
		badges: ['System'],
		title: 'Staff ML Engineer',
		logo: '', // Add logo if available
		start: '2018',
		end: '2023',
		description:
			'Exploring LLM tooling around structured extraction and self-hosting. Launched Youtube University and developing Journal, an AI-powered journaling application.'

		// <>
		//   <li>
		//     Designed Flight framework, improving reliability, scalability, adopted
		//     by over 80% of organization, servicing 350 million daily requests.{" "}
		//     <a href="https://newsroom.stitchfix.com/blog/your-shop-is-getting-an-update-shop-by-category-will-make-it-easier-to-discover-things-youll-love/">
		//       [1]
		//     </a>
		//   </li>
		//   <li>
		//     Led vision research, managed data acquisition, fine-tuned models,
		//     developed 300,000+ outfit dataset to power new Stitch Fix outfit
		//     recommender.
		//   </li>
		//   <li>
		//     Developed product similarity search with multi-modal embeddings,
		//     boosting revenue by over $50 million annually.{" "}
		//     <a href="https://newsroom.stitchfix.com/blog/how-we-understand-your-personal-style/">
		//       [2]
		//     </a>
		//   </li>
		// </>
	},
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
		title: 'Full-Stack Developer',
		start: '2022',
		end: '2022',
		description: 'Under Rumi Chunara, centered around public health and social media.',
		logo: '' // Path to NYU logo image
	},

	{
		company: 'Wind Tech',
		link: 'https://www.studycrw.world/',
		badges: ['Django', 'Fastapi', 'Pytorch', 'Ruby On Rails'],
		title: 'Full-Stack Developer',
		start: '2022',
		end: '2022',
		description: 'Under Rumi Chunara, centered around public health and social media.',
		logo: '' // Path to NYU logo image
	},

	{
		company: 'Konoike',
		link: 'https://www.studycrw.world/',
		badges: ['Autocad', 'Revit', 'Sketchup'],
		title: 'Team Lead Architect',
		start: '2021',
		end: '2022',
		description: 'Under Rumi Chunara, centered around public health and social media.',
		logo: '' // Path to NYU logo image
	}
];
('process');

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
