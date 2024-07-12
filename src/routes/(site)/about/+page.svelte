<script lang="ts">
	import AboutHero from './_sections/about-hero.svelte';
	import Clients from './_sections/clients.svelte';
	import Education from './_sections/education.svelte';
	import Summary from './_sections/summary.svelte';
	import FullStory from './_sections/full-story.svelte';
	import WorkHistory from './_sections/work-history.svelte';
	import GlobeSphere from '$lib/components/globe-sphere.svelte';
	import Timeline from './_sections/timeline.svelte';
	import SocialMedia from './_sections/social-media.svelte';
	import AspectRatio from '$lib/components/ui/aspect-ratio/aspect-ratio.svelte';
	import Gallery from './_sections/gallery.svelte';
	import { MetaTags } from 'svelte-meta-tags';
	import { siteConfig } from '$lib/config/site';
</script>

<MetaTags
	title={'About Me :P'}
	titleTemplate="%s | Zai"
	description={siteConfig.description}
	openGraph={{
		url: 'https://www.url.ie/a',
		title: siteConfig.title,
		description: siteConfig.description,
		images: [
			{
				url: siteConfig.websiteUrl + '/thumbnail.jpeg',
				alt: siteConfig.title
			}
		],
		siteName: siteConfig.title
	}}
	twitter={{
		handle: '@zaibutcooler',
		cardType: 'summary_large_image',
		title: siteConfig.title,
		description: siteConfig.description,
		image: siteConfig.websiteUrl + '/thumbnail.jpeg',
		imageAlt: siteConfig.title
	}}
/>

<AboutHero />
<Timeline />

<div class="relative isolate mt-32 overflow-hidden lg:overflow-visible">
	<div
		class=" grid w-full grid-cols-1 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-12 lg:items-start lg:gap-x-8 lg:gap-y-10"
	>
		<div
			class="col-span-8 w-full lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:pt-20"
		>
			<FullStory />
		</div>

		<div
			class="col-span-4 ml-auto w-full items-center space-y-8 justify-self-center sm:justify-self-auto lg:sticky lg:right-0 lg:top-4 lg:row-start-1 lg:overflow-hidden lg:pt-20"
		>
			<AspectRatio ratio={16 / 14} class="bg-muted">
				<!-- TODO Change image as we scroll -->
				<img
					src="/robbin-kid.jpg"
					alt="zai as a kid"
					class="h-full w-full rounded-md object-cover"
				/>
			</AspectRatio>
			<Education />
			<WorkHistory />

			<SocialMedia />
		</div>
	</div>
</div>

<Gallery />
<Summary />

<GlobeSphere />
