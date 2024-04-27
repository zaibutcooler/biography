export interface About {
	content: string;
}

const about: About = { content: 'Call Me Zai' };

const summary: About = { content: '' };

export const aboutMe: About[] = [about, summary];
