export interface About {
	content: string;
}

const about: About = {
	content: 'Turning ideas into products'
};

const summary: About = {
	content:
		'Living a life of no regrets, I co-founded a startup to create floorplans with diffusion models, co-founder of BMC (Burmese MachineLearning Community), the initial creator of 120M BurmeseGPT (I faced some tragedy along the way and now my friend is recreating and scaling it), a lead contributor of Non-Profit Education Startup (StudyCrew). I also freelance and work part-time, building scalable web and cloud solutions as a side-quest.'
};

export const aboutMe: About[] = [about, summary];
