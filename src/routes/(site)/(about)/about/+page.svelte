<script lang="ts">
	import AboutHero from './sections/about-hero.svelte';
	import Clients from './sections/clients.svelte';
	import Education from './sections/education.svelte';
	import Summary from './sections/summary.svelte';
	import FullStory from './sections/full-story.svelte';
	import WorkHistory from './sections/work-history.svelte';
	import GlobeSphere from '$lib/components/globe-sphere.svelte';
</script>

<AboutHero />

<section class="grid grid-cols-12 gap-4">
	<div class="col-span-8">
		<FullStory />
	</div>

	<div class="col-span-4 space-y-4">
		<WorkHistory />
		<Education />
	</div>
</section>

<Clients />

<Summary />

<GlobeSphere />
