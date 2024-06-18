<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import * as Card from '$lib/components/ui/card/index.js';
	import Input from '$lib/components/ui/input/input.svelte';
</script>

<Card.Root class="mb-6">
	<Card.Header class="border-b">
		<Card.Title class="text-2xl">Project Library</Card.Title>
		<Card.Description
			>The collection of all the projects that I have done "Alone", tried and worked.</Card.Description
		>
	</Card.Header>
	<Card.Content class="h-[300px]  px-6 py-4">
		<div class="h-full w-full border border-dashed"></div>
	</Card.Content>
	<Card.Footer class=" flex gap-4 px-6 py-4">
		<Input class="w-full" /><Button>Search</Button>
	</Card.Footer>
</Card.Root>
