<script lang="ts">
	import {
		Card,
		CardHeader,
		CardFooter,
		CardTitle,
		CardDescription,
		CardContent
	} from '$lib/components/ui/card';
	import type { Project } from '$lib/config/projects';
	import { ArrowLeft } from 'lucide-svelte';
	import Button from './ui/button/button.svelte';
	import { ArrowRight } from 'svelte-radix';
	import Badge from './ui/badge/badge.svelte';

	export let project: Project;
</script>

<Card>
	<CardHeader>
		<CardTitle>
			{project.title}
		</CardTitle>
		<div class="text-sm">Category: {project.category}</div>
		<CardDescription>
			<div>{project.description}</div>
		</CardDescription>
		<div class="flex gap-2 pt-4">
			{#each project.techStack as techStack}
				<Badge variant="secondary">
					{techStack}
				</Badge>
			{/each}
		</div>
	</CardHeader>

	<CardContent class="flex justify-end space-y-2">
		<a href={`/projects/${project.projectId}`}
			><Button variant={'ghost'} size={'sm'}>Details <ArrowRight class="ml-2 h-4 w-4" /></Button></a
		>
	</CardContent>
	<!-- <CardFooter class="flex justify-end"></CardFooter> -->
</Card>
