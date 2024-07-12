<script lang="ts">
	import Badge from '$lib/components/ui/badge/badge.svelte';
	import { Button } from '$lib/components/ui/button';
	import {
		Card,
		CardHeader,
		CardTitle,
		CardDescription,
		CardContent,
		CardFooter
	} from '$lib/components/ui/card';
	import {
		DropdownMenu,
		DropdownMenuContent,
		DropdownMenuItem,
		DropdownMenuSeparator,
		DropdownMenuTrigger
	} from '$lib/components/ui/dropdown-menu';
	import { Pagination, PaginationContent, PaginationItem } from '$lib/components/ui/pagination';
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import type { Project } from '$lib/config/projects';
	import { ChevronLeft, ChevronRight, Copy, MoreVertical } from 'lucide-svelte';

	export let project: Project;
</script>

<Card class="overflow-hidden">
	<CardHeader class="flex flex-row items-start bg-muted/50">
		<div class="grid gap-0.5">
			<CardTitle class="group flex items-center gap-2 text-lg">
				{project.title}
				<Button
					size="icon"
					variant="outline"
					class="h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100"
				>
					<Copy class="h-3 w-3" />
					<span class="sr-only">Copy Project Title</span>
				</Button>
			</CardTitle>
			<CardDescription>Date: June 10, 2024</CardDescription>
		</div>
		<div class="ml-auto flex items-center gap-1">
			<Button size="sm" variant="outline" class="h-8 gap-1">
				<span class="lg:sr-only xl:not-sr-only xl:whitespace-nowrap"> View Live </span>
			</Button>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button size="icon" variant="outline" class="h-8 w-8">
						<MoreVertical class="h-3.5 w-3.5" />
						<span class="sr-only">More</span>
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent align="end">
					<DropdownMenuItem>Edit</DropdownMenuItem>
					<DropdownMenuItem>Export</DropdownMenuItem>
					<DropdownMenuSeparator />
					<DropdownMenuItem>Delete</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	</CardHeader>
	<CardContent class="p-6 text-sm">
		<div class="grid gap-3">
			<div class="font-semibold">Summary</div>
			<ul class="grid gap-3">
				<span class="text-muted-foreground">
					{project.description}
				</span>
				<div class="flex flex-wrap gap-1">
					{#each project.techStack as stack}
						<Badge class="px-2 py-0 text-[10px]" variant="secondary">
							{stack}
						</Badge>
					{/each}
				</div>
			</ul>
			<Separator class="my-2" />
			<ul class="grid gap-3 text-sm">
				<li class="flex items-center justify-between">
					<span class="text-muted-foreground">Category</span>
					<span>{project.category}</span>
				</li>
				<li class="flex items-center justify-between">
					<span class="text-muted-foreground">Started</span>
					<span>{project.startedDate}</span>
				</li>
				<li class="flex items-center justify-between">
					<span class="text-muted-foreground">Duration</span>
					<span>{project.duration}</span>
				</li>
				<li class="flex items-center justify-between">
					<span class="text-muted-foreground">Status</span>
					<span>{project.status}</span>
				</li>
			</ul>
		</div>
		<Separator class="my-4" />

		<div class="grid gap-3">
			<div class="font-semibold">Links</div>
			<dl class="grid gap-3">
				<div>
					{#each project.links as link}
						<div class="mb-2 flex items-center gap-2">
							<img
								src={`https://www.google.com/s2/favicons?domain=${link.href}`}
								class="h-5 w-5 rounded-full"
								alt="favicon"
							/>
							<div class="">
								<h3 class="text-sm">{link.label}</h3>
								<a
									href={link.href}
									target="_blank"
									rel="noopener noreferrer"
									class="text-xs hover:underline"
									>{link.href.replace('https://', '').replace('www.', '')}</a
								>
							</div>
						</div>
					{/each}
				</div>
			</dl>
		</div>
	</CardContent>
	<CardFooter class="flex flex-row items-center border-t bg-muted/50 px-6 py-3">
		<div class="text-xs text-muted-foreground">
			Updated <time dateTime="2024-06-10">June 10, 2024</time>
		</div>
		<Pagination count={4}>
			<div class="ml-auto mr-0 w-auto">
				<PaginationContent>
					<PaginationItem>
						<Button size="icon" variant="outline" class="h-6 w-6">
							<ChevronLeft class="h-3.5 w-3.5" />
							<span class="sr-only">Previous Project</span>
						</Button>
					</PaginationItem>
					<PaginationItem>
						<Button size="icon" variant="outline" class="h-6 w-6">
							<ChevronRight class="h-3.5 w-3.5" />
							<span class="sr-only">Next Project</span>
						</Button>
					</PaginationItem>
				</PaginationContent>
			</div>
		</Pagination>
	</CardFooter>
</Card>
