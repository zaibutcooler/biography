<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import * as Card from '$lib/components/ui/card/index.js';
	import ProjectInfoCard from '../_components/project-info-card.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	const project = data.project;
</script>

<main class="grid flex-1 items-start gap-4 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
	<div>
		<ProjectInfoCard />
	</div>
	<div class="space-y-4 lg:col-span-2">
		<!-- <Card.Root>
			<Card.Header>
				
			</Card.Header>
		</Card.Root> -->

		<Card.Root
			data-x-chunk-name="dashboard-04-chunk-1"
			data-x-chunk-description="A form to update the store name."
		>
			<Card.Header>
				<Card.Title>The story behind the project</Card.Title>
				<Card.Description>Used to identify your store in the marketplace.</Card.Description>
			</Card.Header>
			<Card.Content class="space-y-4 text-sm leading-loose text-foreground/80">
				<video controls class="h-auto w-full rounded-md">
					<source
						src="https://www.youtube.com/embed/bTqVqk7FSmY?origin=https://plyr.io&amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1"
						type="video/mp4"
					/>
					Your browser does not support the video tag.
				</video>

				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic ducimus qui dolor dolore,
					natus culpa. Placeat adipisci debitis ipsam aut. Corporis iste earum, repellat aspernatur
					nisi a corrupti! Ipsa, quod.
				</p>

				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic ducimus qui dolor dolore,
					natus culpa. Placeat adipisci debitis ipsam aut. Corporis iste earum, repellat aspernatur
					nisi a corrupti! Ipsa, quod.
				</p>

				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic ducimus qui dolor dolore,
					natus culpa. Placeat adipisci debitis ipsam aut. Corporis iste earum, repellat aspernatur
					nisi a corrupti! Ipsa, quod.
				</p>

				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic ducimus qui dolor dolore,
					natus culpa. Placeat adipisci debitis ipsam aut. Corporis iste earum, repellat aspernatur
					nisi a corrupti! Ipsa, quod.
				</p>

				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic ducimus qui dolor dolore,
					natus culpa. Placeat adipisci debitis ipsam aut. Corporis iste earum, repellat aspernatur
					nisi a corrupti! Ipsa, quod.
				</p>

				<img src="/code1.png" class="w-full rounded-md" />

				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic ducimus qui dolor dolore,
					natus culpa. Placeat adipisci debitis ipsam aut. Corporis iste earum, repellat aspernatur
					nisi a corrupti! Ipsa, quod.
				</p>

				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic ducimus qui dolor dolore,
					natus culpa. Placeat adipisci debitis ipsam aut. Corporis iste earum, repellat aspernatur
					nisi a corrupti! Ipsa, quod.
				</p>
			</Card.Content>
			<Card.Footer class="border-t px-6 py-4">
				<Button>Save</Button>
			</Card.Footer>
		</Card.Root>
	</div>
</main>
