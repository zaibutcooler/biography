<script lang="ts">
	import { Badge } from '$lib/components/ui/badge';
	import {
		Card,
		CardContent,
		CardDescription,
		CardHeader,
		CardTitle
	} from '$lib/components/ui/card';

	export let title: string;
	export let description: string;
	export let tags: string[];
	export let link: string | undefined;
</script>

<Card class="flex flex-col overflow-hidden border border-muted p-3">
	<CardHeader class="">
		<div class="space-y-1">
			<CardTitle class="text-base">
				{#if link}
					<a href={link} target="_blank" class="inline-flex items-center gap-1 hover:underline">
						{title}{' '}
						<span class="h-1 w-1 rounded-full bg-green-500"></span>
					</a>
				{:else}
					title
				{/if}
			</CardTitle>
			<div class="hidden font-mono text-xs underline print:visible">
				{link?.replace('https://', '').replace('www.', '').replace('/', '')}
			</div>
			<CardDescription class="font-mono text-xs">
				{description}
			</CardDescription>
		</div>
	</CardHeader>
	<CardContent class="mt-auto flex">
		<div class="mt-2 flex flex-wrap gap-1">
			{#each tags as tag}
				<Badge class="px-2 py-0 text-[10px]" variant="secondary">
					{tag}
				</Badge>
			{/each}
		</div>
	</CardContent>
</Card>
