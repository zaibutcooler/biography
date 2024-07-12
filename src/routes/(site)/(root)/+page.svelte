<script lang="ts">
	import { siteConfig } from '$lib/config/site';
	import SuperHeroSection from './_sections/super-hero.svelte';
	// import Timeline from './_sections/timeline.svelte';

	import { MetaTags } from 'svelte-meta-tags';
</script>

<main>
	<MetaTags
		title={'Home'}
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

	<SuperHeroSection />
	<!-- <Companies /> -->
	<!-- <Timeline /> -->
	<!-- <MyProjects /> -->
	<!-- <PersonalBlogs /> -->
	<!-- <Announcement /> -->
</main>
