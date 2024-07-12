<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import * as Card from '$lib/components/ui/card/index.js';
	import type { Project } from '$lib/config/projects';
	import ProjectInfoCard from '../_components/project-info-card.svelte';
	import type { PageData } from '../../projects/[projectId]/$types';

	export let data: PageData;
	const project: Project = data.project;
</script>

<main class="grid flex-1 items-start gap-4 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
	<div>
		<ProjectInfoCard {project} />
	</div>
	<div class="space-y-4 lg:col-span-2">
		<Card.Root
			data-x-chunk-name="dashboard-04-chunk-1"
			data-x-chunk-description="A form to update the store name."
		>
			<Card.Header>
				<Card.Title>Project Details</Card.Title>
				<Card.Description>Everything you need to know about the project</Card.Description>
			</Card.Header>
			<Card.Content class="space-y-4 text-sm leading-loose text-foreground/80">
				{#each project.info as info}
					{#if info.label === 'video'}
						<video controls class="h-auto w-full rounded-md">
							<source src={info.content} type="video/mp4" />
							Your browser does not support the video tag.
						</video>
					{:else if info.label === 'image'}
						<img src={info.content} class="w-full rounded-md" />
					{:else if info.label === 'text'}
						<p>
							{info.content}
						</p>
					{/if}
				{/each}
			</Card.Content>
			<Card.Footer class="border-t px-6 py-4">
				<Button>Share Thoughts</Button>
			</Card.Footer>
		</Card.Root>
	</div>
</main>
