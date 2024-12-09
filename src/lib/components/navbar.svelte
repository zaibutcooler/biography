<script lang="ts">
	import Container from '$lib/components/container.svelte';
	import Logo from './logo.svelte';
	import ThemeToggleButton from './theme-toggle-button.svelte';
	import ChatInterface from '$lib/components/chat-interface.svelte';
	import Button from './ui/button/button.svelte';
	import * as Drawer from '$lib/components/ui/drawer';
	import {
		History,
		Home,
		Map,
		Navigation,
		Navigation2,
		NotebookPen,
		ScrollText,
		User
	} from 'lucide-svelte';
	import { buttonVariants } from './ui/button';
	import { Sun } from 'svelte-radix';

	export const mobileNavlinks = [
		{ label: 'Home', route: '/', icon: '', desktop: false },
		{ label: 'About', route: '/about', icon: '', desktop: true },
		{ label: 'Projects', route: '/projects', icon: '', desktop: true },
		{ label: 'Blogs', route: '/blogs', icon: '', desktop: true },
		{ label: 'Resume', route: '/resume', icon: '', desktop: true },
		{ label: 'Theme', route: '', icon: '', desktop: false }
	];

	const desktopNavLinks = mobileNavlinks.filter((link) => link.desktop);
</script>

<div />
<nav
	class="sticky top-0 z-40 -mt-8 hidden h-16 items-center border-b border-foreground/5 bg-background/75 px-4 backdrop-blur-lg md:flex"
>
	<Container>
		<div class="flex items-center justify-between">
			<div>
				<Logo />
			</div>

			<div class="flex gap-6">
				<!-- <ThemeToggleButton /> -->
				{#each desktopNavLinks as link}
					<a href={link.route} class={buttonVariants({ variant: 'link' })}>{link.label}</a>
				{/each}

				<ChatInterface />
			</div>
		</div>
	</Container>
</nav>

<nav class="fixed bottom-0 left-0 z-40 block h-16 w-full border-t bg-background md:hidden">
	<Container className="flex items-center justify-between h-full">
		<div><Logo /></div>
		<div>
			<Drawer.Root>
				<Drawer.Trigger>
					<Button size="icon" on:click={() => {}} variant="ghost">
						<Map />
					</Button>
				</Drawer.Trigger>
				<Drawer.Content>
					<Drawer.Header>
						<Drawer.Title>Navigator</Drawer.Title>
						<Drawer.Description>Click and it will automatically redirected.</Drawer.Description>
					</Drawer.Header>
					<div class="grid grid-cols-3 gap-4">
						{#each mobileNavlinks as link}
							<Drawer.Close>
								<a
									href={link.route}
									class="flex h-16 w-full flex-col items-center justify-center gap-1"
								>
									{#if link.label === 'Home'}
										<Home class="h-5 w-5" />
									{:else if link.label === 'About'}
										<User class="h-5 w-5" />
									{:else if link.label === 'Projects'}
										<History class="h-5 w-5" />
									{:else if link.label === 'Resume'}
										<ScrollText class="h-5 w-5" />
									{:else if link.label === 'Blogs'}
										<NotebookPen class="h-5 w-5" />
									{:else if link.label === 'Theme'}
										<Sun class="h-5 w-5" />
									{/if}

									<p class="text-sm">{link.label}</p>
								</a>
							</Drawer.Close>
						{/each}
					</div>
					<Drawer.Footer>
						<!-- <div class="w-full flex justify-between">
<div><ThemeToggleButton/></div>
<div></div>

				</div> -->
					</Drawer.Footer>
				</Drawer.Content>
			</Drawer.Root>
		</div>
	</Container>
</nav>
