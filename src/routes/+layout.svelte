<script>
	import { page } from '$app/stores';
	import { siteConfig } from '$lib/config/site';
	import '../app.pcss';
	import { ModeWatcher } from 'mode-watcher';
</script>

<svelte:head>
	<title>Zai</title>
	<link rel="manifest" href="/manifest.json" />
	<meta name="theme-color" content="currentColor" />
	<!-- TODO handle metadata -->
	<!-- <AppleHeader /> -->

	{#if $page.data.meta}
		<meta name="description" content={$page.data.meta.description} />

		<!-- Facebook Meta Tags -->
		<meta property="og:type" content="website" />
		<meta property="og:title" content={$page.data.meta.title} />
		<meta property="og:description" content={$page.data.meta.description} />
		<meta property="og:image" content={$page.data.meta.imageUrl} />

		<!-- Twitter Meta Tags -->
		<meta name="twitter:card" content="summary_large_image" />
		<meta name="twitter:title" content={$page.data.meta.title} />
		<meta name="twitter:description" content={$page.data.meta.description} />
		<meta name="twitter:image" content={$page.data.meta.imageUrl} />
	{:else}
		<meta name="description" content={siteConfig.description} />

		<!-- Facebook Meta Tags -->
		<meta property="og:type" content="website" />
		<meta property="og:title" content={siteConfig.title} />
		<meta property="og:description" content={siteConfig.description} />
		<meta property="og:image" content={'/thumbnail.jpeg'} />

		<!-- Twitter Meta Tags -->
		<meta name="twitter:card" content="summary_large_image" />
		<meta name="twitter:title" content={siteConfig.title} />
		<meta name="twitter:description" content={siteConfig.description} />
		<meta name="twitter:image" content={'/thumbnail.jpeg'} />
	{/if}
</svelte:head>

<ModeWatcher />

<slot />
