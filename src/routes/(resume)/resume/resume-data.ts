import {
	clients,
	contactData,
	educations,
	profile,
	projects,
	skills,
	works
} from '$lib/config/profile';

export const RESUME_DATA = {
	name: profile.fullName,
	initials: profile.nickName,
	location: profile.location,
	locationLink: profile.locationLink,
	about: profile.about,
	// "Cycling my time between artist and tinkerer. Currently I’m obsessed with finding the right abstractions and patterns to work with large language models.",
	summary: profile.summary,
	// "I am currently on sabbatical at South Park Commons, where I consult and advise fast growing startups on applied ai and tech strategy.",
	avatarUrl: profile.avatar,
	personalWebsiteUrl: profile.website,
	// "https://jxnl.notion.site/jxnl/whats-up-95708748a05d40c398a4abc66a978a8e",
	contact: contactData,
	education: educations,
	work: works,
	skills: skills,
	projects: projects.filter((project) => project.pin),
	clients: clients.filter((client) => client.resume)
} as const;
