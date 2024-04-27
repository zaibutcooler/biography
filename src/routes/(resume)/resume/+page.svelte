<script>
	import { Avatar, AvatarFallback, AvatarImage } from '$lib/components/ui/avatar';
	import { Badge } from '$lib/components/ui/badge';
	import { Button } from '$lib/components/ui/button';
	import { Card, CardContent, CardHeader } from '$lib/components/ui/card';
	import CommandMenu from './_components/command-menu.svelte';
	import ProjectCard from './_components/project-card.svelte';

	import { GlobeIcon, MailIcon, PhoneIcon } from 'lucide-svelte';
	import { RESUME_DATA } from './resume-data';
</script>

<main class="container relative mx-auto scroll-my-12 overflow-auto p-4 md:p-16 print:p-12">
	<section class="mx-auto w-full max-w-3xl space-y-8 bg-white print:space-y-6">
		<div class="flex items-center justify-between">
			<div class="flex-1 space-y-1.5">
				<h1 class="text-2xl font-bold">{RESUME_DATA.name}</h1>
				<p class="max-w-md text-pretty font-mono text-sm text-muted-foreground">
					{RESUME_DATA.about}
				</p>
				<p class="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground">
					<a
						class="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
						href={RESUME_DATA.locationLink}
						target="_blank"
					>
						<GlobeIcon class="h-3 w-3" />
						{RESUME_DATA.location}
					</a>
				</p>
				<div class="flex gap-x-1 pt-1 font-mono text-sm text-muted-foreground print:hidden">
					{#if RESUME_DATA.contact.email}
						<a href={`mailto:${RESUME_DATA.contact.email}`}>
							<Button class="h-8 w-8" variant="outline" size="icon">
								<MailIcon class="h-4 w-4" />
							</Button>
						</a>
					{/if}
					{#if RESUME_DATA.contact.tel}
						<a href={`tel:${RESUME_DATA.contact.tel}`}>
							<Button class="h-8 w-8" variant="outline" size="icon">
								<PhoneIcon class="h-4 w-4" />
							</Button>
						</a>
					{/if}

					{#each RESUME_DATA.contact.social as social}
						<Button class="h-8 w-8" variant="outline" size="icon">
							<a href={social.url}>
								{#if social.icon === 'github'}
									<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4">
										<path
											fill="currentColor"
											d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
										/>
									</svg>
								{:else if social.icon === 'linkedin'}
									<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4">
										<title>LinkedIn</title>
										<path
											fill="currentColor"
											d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
										/>
									</svg>
								{:else if social.icon === 'twitter'}
									<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4">
										<title>X</title>
										<path
											fill="currentColor"
											d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
										/>
									</svg>
								{/if}
							</a>
						</Button>
					{/each}
				</div>
				<div class="hidden flex-col gap-x-1 font-mono text-sm text-muted-foreground print:flex">
					{#if RESUME_DATA.contact.email}
						<a href={`mailto:${RESUME_DATA.contact.email}`}>
							<span class="underline">{RESUME_DATA.contact.email}</span>
						</a>
					{/if}
					{#if RESUME_DATA.contact.tel}
						<a href={`tel:${RESUME_DATA.contact.tel}`}>
							<span class="underline">{RESUME_DATA.contact.tel}</span>
						</a>
					{/if}
				</div>
			</div>

			<Avatar class="h-28 w-28">
				<AvatarImage alt={RESUME_DATA.name} src={RESUME_DATA.avatarUrl} />
				<AvatarFallback>{RESUME_DATA.initials}</AvatarFallback>
			</Avatar>
		</div>
		<section>
			<h2 class="mb-4 text-xl font-bold">About</h2>
			<p class="text-pretty font-mono text-sm text-muted-foreground">
				{RESUME_DATA.summary}
			</p>
		</section>
		<section>
			<h2 class="mb-4 text-xl font-bold">Work Experience</h2>

			{#each RESUME_DATA.work as work}
				<Card class="mb-3 print:mb-2">
					<CardHeader>
						<div class="flex items-center justify-between gap-x-2 text-base">
							<h3
								class="inline-flex items-center justify-center gap-x-1 font-semibold leading-none"
							>
								<a class="hover:underline" href={work.link}>
									{work.company}
								</a>

								<span class="inline-flex gap-x-1">
									{#each work.badges as badge}
										<Badge variant="secondary" class="align-middle text-xs" key={badge}>
											{badge}
										</Badge>
									{/each}
								</span>
							</h3>
							<div class="text-sm tabular-nums text-gray-500">
								{work.start} - {work.end}
							</div>
						</div>

						<h4 class="font-mono text-sm leading-none">
							{work.title}
						</h4>
					</CardHeader>
					<CardContent class="mt-2 text-xs">
						{work.description}
					</CardContent>
				</Card>
			{/each}
		</section>

		<section class="print-force-new-page scroll-mb-16">
			<h2 class="mb-4 text-xl font-bold">Projects</h2>
			<div
				class="-mx-3 grid grid-cols-1 gap-3 md:grid-cols-1 lg:grid-cols-1 print:grid-cols-1 print:gap-2"
			>
				{#each RESUME_DATA.projects as project}
					<ProjectCard
						title={project.title}
						description={project.description}
						tags={project.techStack}
						link={'link' in project ? project.link.href : undefined}
					/>
				{/each}
			</div>
		</section>
		<section class="print-force-new-page scroll-mb-16">
			<h2 class="mb-4 text-xl font-bold">Clients</h2>
			<div
				class="-mx-3 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 print:grid-cols-3 print:gap-2"
			>
				{#each RESUME_DATA.clients as project}
					<ProjectCard
						title={project.title}
						description={project.description}
						tags={project.techStack}
						link={'link' in project ? project.link.href : undefined}
					/>
				{/each}
			</div>
		</section>
		<section>
			<h2 class="mb-4 text-xl font-bold">Education</h2>
			{#each RESUME_DATA.education as education}
				<Card class="mb-3 print:mb-2">
					<CardHeader>
						<div class="flex items-center justify-between gap-x-2 text-base">
							<h3 class="font-semibold leading-none">
								{education.school}
							</h3>
							<div class="text-sm tabular-nums text-gray-500">
								{education.start} - {education.end}
							</div>
						</div>
					</CardHeader>
					<CardContent class="mt-2">{education.degree}</CardContent>
				</Card>
			{/each}
		</section>
		<section>
			<h2 class="mb-4 text-xl font-bold">Skills</h2>
			<div class="flex flex-wrap gap-1">
				{#each RESUME_DATA.skills as skill}
					<Badge key={skill}>{skill}</Badge>
				{/each}
			</div>
		</section>
	</section>

	<CommandMenu
		links={[
			{
				url: RESUME_DATA.personalWebsiteUrl,
				title: 'Personal Website'
			},
			...RESUME_DATA.contact.social.map((socilaMediaLink) => ({
				url: socilaMediaLink.url,
				title: socilaMediaLink.name
			}))
		]}
	/>

	<!-- <CommandMenu/> -->
</main>

<style>
	.print-force-new-page {
		page-break-before: always;
	}
</style>
