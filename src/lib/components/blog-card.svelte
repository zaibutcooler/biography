<script lang="ts">
	import AspectRatio from './ui/aspect-ratio/aspect-ratio.svelte';
	import CardContent from './ui/card/card-content.svelte';
	import CardHeader from './ui/card/card-header.svelte';
	import Card from './ui/card/card.svelte';

	export let blog;
</script>

<Card>
	<CardHeader>
		<AspectRatio ratio={16 / 8} class="bg-muted">
			<img
				src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
				alt="Gray by Drew Beamer"
				class="h-full w-full rounded-md object-cover"
			/>
		</AspectRatio>
	</CardHeader>
	<CardContent>This is card content</CardContent>
</Card>
