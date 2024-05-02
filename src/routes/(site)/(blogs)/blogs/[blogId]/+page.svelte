<script lang="ts">
	import { AspectRatio } from '$lib/components/ui/aspect-ratio';
	import { buttonVariants } from '$lib/components/ui/button';
	import { Separator } from '$lib/components/ui/separator';
	import { topicDatas } from '../constant';
	import { demoBlog } from './constant';
	// import type { PageData } from './$types';

	// export let data: PageData;

	const blog = demoBlog;
</script>

<main class="space-y-12 py-4">
	<AspectRatio ratio={16 / 7} class="bg-muted">
		<img
			src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
			alt="Gray by Drew Beamer"
			class="h-full w-full rounded-md object-cover"
		/>
	</AspectRatio>
	<section class="flex flex-col gap-4 lg:flex-row">
		<div class="w-full space-y-4 pr-0 leading-loose lg:w-3/4 lg:space-y-6 lg:border-r lg:pr-6">
			<h1 class="mb-4 text-3xl font-semibold md:text-4xl">{blog.title}</h1>
			{#each blog.contents as content, index}
				{#if content.type === 'subtitle'}
					<h2 class="text-2xl font-semibold md:text-3xl">{content.text}</h2>
				{:else if content.type === 'break'}
					<div class="py-2"></div>
				{:else}
					<p>{content.text}</p>
				{/if}
			{/each}
		</div>
		<div class="hidden lg:block lg:w-1/4">
			<h1 class="mb-2 font-semibold">Topics</h1>
			<div class="flex flex-wrap gap-2">
				{#each topicDatas as topic}
					<a href="#" class={buttonVariants({ variant: 'outline', size: 'sm' })}>
						{topic.label}
					</a>
				{/each}
			</div>
		</div>
	</section>
	<Separator class="my-6" />
	<!-- <BlogRecommendation recommendedBlogs={recommendedBlogs} /> -->
	<div>Recommended Blogs</div>
</main>
