<script>
	import { page } from '$app/stores';
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
	{/if}
</svelte:head>

<ModeWatcher />

<slot />
