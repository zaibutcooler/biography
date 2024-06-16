export interface About {
	content: string;
}

const about: About = {
	content: 'Turning ideas into products'
};

const summary: About = {
	content:
		'Born and rasied by two Civil Engineering graduates. A talented and blessed young man who started working at a big Japanese construction company named Konoike(sub-contract) at 16. After two years, I transitioned into tech entrepreneurship, co-founded my first startup venture at 19, became a war refugee at 20 and now helping other startups while learning.'
};

export const aboutMe: About[] = [about, summary];
