export interface About {
	content: string;
}

const about: About = {
	content: 'Turning ideas into products'
};

const summary: About = {
	content:
		'Started working at a big Japanese construction company named Konoike(sub-contract) as a lead-architect at 16, I transitioned into tech and entrepreneurship after two years to persue my dream, co-founded my first startup venture at 19, became a war refugee and lost everything I had at 20. Now, helping other startups grow while trying to get out of this war-torn country.'
};

export const aboutMe: About[] = [about, summary];
