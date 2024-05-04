<script lang="ts">
	import CardContent from '$lib/components/ui/card/card-content.svelte';
	import CardHeader from '$lib/components/ui/card/card-header.svelte';
	import CardTitle from '$lib/components/ui/card/card-title.svelte';
	import Card from '$lib/components/ui/card/card.svelte';
	import { contactData } from '$lib/config/profile';
</script>

<div>
	<Card>
		<CardHeader><CardTitle>Social Media</CardTitle></CardHeader>
		<CardContent class="space-y-2">
			<div>
				<a href="#">{contactData.email}</a>
			</div>
			<div>
				<a href="#">{contactData.tel}</a>
			</div>
			{#each contactData.social as social}
				<div>
					<a href="#">{social.url}</a>
				</div>
			{/each}
		</CardContent>
	</Card>
</div>
