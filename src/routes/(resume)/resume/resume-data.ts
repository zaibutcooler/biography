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
	summary: profile.summary,
	avatarUrl: profile.avatar,
	personalWebsiteUrl: profile.website,
	contact: contactData,
	education: educations,
	work: works,
	skills: skills,
	projects: projects.filter((project) => project.pin),
	clients: clients.filter((client) => client.resume)
} as const;
