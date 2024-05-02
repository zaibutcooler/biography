<script lang="ts">
	import Container from '$lib/components/container.svelte';

	const timelines = [
		{
			date: 'Sep 2023',
			title: 'Ab corporis id officia',
			description:
				'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum delectus dolores'
		},
		{
			date: 'Sep 2023',
			title: 'Ab corporis id officia',
			description:
				'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum delectus dolores'
		},
		{
			date: 'Sep 2023',
			title: 'Ab corporis id officia',
			description:
				'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum delectus dolores'
		},
		{
			date: 'Sep 2023',
			title: 'Ab corporis id officia',
			description:
				'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum delectus dolores'
		}
	];
</script>
<div class="mt-32 lg:mt-48">
	
<div class="grid w-full grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
	{#each timelines as item}
		<div>
			<time
				datetime={new Date().toString()}
				class="text-tempo flex items-center text-sm font-semibold leading-6"
			>
				<svg viewBox="0 0 4 4" class="mr-4 h-1 w-1 flex-none" aria-hidden="true">
					<circle cx={2} cy={2} r={2} fill="currentColor" />
				</svg>
				{item.date}
				<div
					class="bg-tempo/10 absolute -ml-2 h-px w-screen -translate-x-full sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
					aria-hidden="true"
				/>
			</time>
			<p class="mt-6 text-lg font-semibold leading-8 tracking-tight text-foreground">
				{item.title}
			</p>
			<p class="mt-1 text-base leading-7 text-muted-foreground">
				{item.description}
			</p>
		</div>
	{/each}
</div>

</div>