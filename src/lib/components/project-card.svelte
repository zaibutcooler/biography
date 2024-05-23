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
		<div class="text-sm">LLM Project</div>
		<CardDescription>
			<div>{project.description}</div>
			<!-- <div>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae atque ut fuga magnam
				sapiente quis.
			</div> -->
		</CardDescription>
	</CardHeader>

	<CardContent class="flex justify-end space-y-2">
		<!-- <div class="flex gap-2">
			{#each project.techStack as item}
				<Badge>{item}</Badge>
			{/each}
		</div> -->
		<Button variant={'ghost'} size={'sm'}>Details <ArrowRight class="ml-2 h-4 w-4" /></Button>
	</CardContent>
	<!-- <CardFooter class="flex justify-end"></CardFooter> -->
</Card>
