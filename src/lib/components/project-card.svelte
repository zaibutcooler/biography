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

	export let project: Project;
</script>

<Card>
	<CardHeader>{project.title}</CardHeader>

	<CardContent class="space-y-2">
		<div>{project.description}</div>
		<div>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, eveniet exercitationem!
			Omnis, repellendus fugit.
		</div>
	</CardContent>
	<CardFooter class="flex justify-end"
		><Button variant={'ghost'} size={'sm'}>Details <ArrowRight class="ml-2 h-4 w-4" /></Button
		></CardFooter
	>
</Card>
