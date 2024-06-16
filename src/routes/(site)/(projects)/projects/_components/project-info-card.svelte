<script lang="ts">
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
	import { ChevronLeft, ChevronRight, Copy, MoreVertical } from 'lucide-svelte';
</script>

<Card class="overflow-hidden">
	<CardHeader class="flex flex-row items-start bg-muted/50">
		<div class="grid gap-0.5">
			<CardTitle class="group flex items-center gap-2 text-lg">
				Yuumi
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
			<div class="font-semibold">Project Details</div>
			<ul class="grid gap-3">
				<li class="flex items-center justify-between">
					<span class="text-muted-foreground"> Technology: SvelteKit </span>
				</li>
				<li class="flex items-center justify-between">
					<span class="text-muted-foreground">
						Description: A personal portfolio website to showcase my projects and skills.
					</span>
				</li>
			</ul>
			<Separator class="my-2" />
			<ul class="grid gap-3">
				<li class="flex items-center justify-between">
					<span class="text-muted-foreground">Duration</span>
					<span>3 months</span>
				</li>
				<li class="flex items-center justify-between">
					<span class="text-muted-foreground">Status</span>
					<span>Completed</span>
				</li>
				<li class="flex items-center justify-between font-semibold">
					<span class="text-muted-foreground">Live URL</span>
					<span
						><a href="https://myportfolio.com" target="_blank" class="text-blue-500"
							>myportfolio.com</a
						></span
					>
				</li>
			</ul>
		</div>
		<Separator class="my-4" />
		<div class="grid grid-cols-2 gap-4">
			<div class="grid gap-3">
				<div class="font-semibold">Project Features</div>
				<ul class="grid gap-0.5 text-muted-foreground">
					<li>Responsive Design</li>
					<li>Interactive UI</li>
					<li>SEO Optimized</li>
				</ul>
			</div>
			<div class="grid auto-rows-max gap-3">
				<div class="font-semibold">Tools Used</div>
				<ul class="text-muted-foreground">
					<li>Svelte</li>
					<li>Tailwind CSS</li>
					<li>Netlify</li>
				</ul>
			</div>
		</div>
		<Separator class="my-4" />
		<div class="grid gap-3">
			<div class="font-semibold">Contact Information</div>
			<dl class="grid gap-3">
				<div class="flex items-center justify-between">
					<dt class="text-muted-foreground">Developer</dt>
					<dd>Jane Doe</dd>
				</div>
				<div class="flex items-center justify-between">
					<dt class="text-muted-foreground">Email</dt>
					<dd>
						<a href="mailto:jane@example.com">jane@example.com</a>
					</dd>
				</div>
				<div class="flex items-center justify-between">
					<dt class="text-muted-foreground">Phone</dt>
					<dd>
						<a href="tel:+1234567890">+1 234 567 890</a>
					</dd>
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
