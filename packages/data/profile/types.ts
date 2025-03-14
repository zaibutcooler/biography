type ContentLabel = 'text' | 'video' | 'image' | 'code';

type ProjectStatus = 'In Progress' | 'Finished';

type ProjectCategory =
  | 'website'
  | 'mobile'
  | 'generative-ai'
  | 'machine learning'
  | 'deeplearning'
  | 'dev-tool';

export interface Project {
  projectId: string;
  title: string;
  duration: string;
  status: ProjectStatus;
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
