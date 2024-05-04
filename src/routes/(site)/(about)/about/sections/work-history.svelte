<script lang="ts">
	import CardContent from '$lib/components/ui/card/card-content.svelte';
	import CardHeader from '$lib/components/ui/card/card-header.svelte';
	import CardTitle from '$lib/components/ui/card/card-title.svelte';
	import Card from '$lib/components/ui/card/card.svelte';
	import { works } from '$lib/config/profile';
</script>

<div>
	<Card>
		<CardHeader><CardTitle>Work History</CardTitle></CardHeader>
		<CardContent>
			{#each works as work}
				<div class="mb-2">
					<p class="text-sm">
						{work.company}
						{work.title}
					</p>
					<p class="text-sm">
						{work.start} - {work.end}
					</p>
				</div>
			{/each}
		</CardContent>
	</Card>
</div>
