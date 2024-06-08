<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import * as Card from '$lib/components/ui/card/index.js';
	import ProjectInfoCard from '../_components/project-info-card.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	const project = data.project;
</script>

<main class="grid flex-1 items-start gap-4 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
	<div class="lg:col-span-2">
		<Card.Root
			data-x-chunk-name="dashboard-04-chunk-1"
			data-x-chunk-description="A form to update the store name."
		>
			<Card.Header>
				<Card.Title>Store Name</Card.Title>
				<Card.Description>Used to identify your store in the marketplace.</Card.Description>
			</Card.Header>
			<Card.Content></Card.Content>
			<Card.Footer class="border-t px-6 py-4">
				<Button>Save</Button>
			</Card.Footer>
		</Card.Root>
	</div>
	<div>
		<ProjectInfoCard />
	</div>
</main>
