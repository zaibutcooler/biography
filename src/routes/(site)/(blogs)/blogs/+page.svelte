<script lang="ts">
	import type { BlogType } from '$lib/server/mongodb';
	import { onMount } from 'svelte';
	import type { PageServerData } from './$types';
	import type { Blog } from './constant';

	export let data: PageServerData;

	onMount(async () => {
		const response = await fetch('http://localhost:5173/blogs');
		const data = await response.json();
		blogs = data;
	});

	let blogs: Blog[];
</script>

{#each blogs as blog}
	<div>
		{blog.title}
	</div>
{/each}
