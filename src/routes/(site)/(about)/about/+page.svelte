<script lang="ts">
	import AboutHero from './sections/about-hero.svelte';
	import Clients from './sections/clients.svelte';
	import Education from './sections/education.svelte';
	import Summary from './sections/summary.svelte';
	import FullStory from './sections/full-story.svelte';
	import WorkHistory from './sections/work-history.svelte';
	import GlobeSphere from '$lib/components/globe-sphere.svelte';
	import Timeline from './sections/timeline.svelte';
	import SocialMedia from './sections/social-media.svelte';
	import AspectRatio from '$lib/components/ui/aspect-ratio/aspect-ratio.svelte';
</script>

<AboutHero />
<Timeline />
<div class="mt-32 lg:mt-48">
	<section class="grid grid-cols-12 gap-6">
		<div class="col-span-8 space-y-6">
			<!-- <AspectRatio ratio={16 / 7} class="bg-muted">
				<img
					src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
					alt="Gray by Drew Beamer"
					class="h-full w-full rounded-md object-cover"
				/>
			</AspectRatio> -->
			<FullStory />
		</div>

		<div class="col-span-4 space-y-6">
			<Education />
			<WorkHistory />

			<SocialMedia />
		</div>
	</section>
</div>
<Clients />

<Summary />

<GlobeSphere />
