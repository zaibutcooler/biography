<script lang="ts">
	import BlogCard from '$lib/components/blog-card.svelte';
	const blogs = ['', '', '', '', '', ''];
</script>

<div class="mt-32 lg:mt-48">
	<div class="grid grid-cols-1 gap-4 lg:grid-cols-3">
		{#each blogs as blog}
			<BlogCard {blog} />
		{/each}
	</div>
</div>
