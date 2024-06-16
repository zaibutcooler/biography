import { burmeseGPT } from './burmese-gpt';
import { deepmine } from './deepmine';
import { librarian } from './librarian';
import { vegans } from './ve-gans';
import { yume } from './yume';

export interface Project {
	projectId: string;
	title: string;
	duration: string;
	status: Status;
	techStack: string[];
	category: ProjectCategory;
	description: string;
	startedDate: string;

	links: {
		label: string;
		href: string;
	}[];
	pin: boolean;
	info: { label: ContentLabel; content: string }[];
}

type ContentLabel = 'text' | 'video' | 'image' | 'code';

type Status = 'In Progress' | 'Finished';

type ProjectCategory =
	| 'website'
	| 'mobile'
	| 'generative-ai'
	| 'machine learning'
	| 'deeplearning'
	| 'dev-tool';

export const myProjects: Project[] = [yume, burmeseGPT, vegans, deepmine, librarian];
