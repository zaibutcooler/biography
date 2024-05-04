<script lang="ts">
	import CardContent from '$lib/components/ui/card/card-content.svelte';
	import CardHeader from '$lib/components/ui/card/card-header.svelte';
	import CardTitle from '$lib/components/ui/card/card-title.svelte';
	import Card from '$lib/components/ui/card/card.svelte';
	import { educations } from '$lib/config/profile';
</script>

<div>
	<Card>
		<CardHeader><CardTitle>Education</CardTitle></CardHeader>
		<CardContent>
			{#each educations as education}
				<div class="mb-2">
					<p class="text-sm">
						{education.school}
					</p>
					<p class="text-sm">
						{education.start} - {education.end}
					</p>
				</div>
			{/each}
		</CardContent>
	</Card>
</div>
