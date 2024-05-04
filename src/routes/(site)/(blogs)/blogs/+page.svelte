<script lang="ts">
	import type { BlogType } from '$lib/server/mongodb';
	import type { PageData } from './$types';
	import type { Blog } from './constant';

	export let data: PageData;
	const blogs: Blog[] = data.blogs;
</script>

{#each blogs as blog}
	<div>
		{blog.title}
	</div>
{/each}
