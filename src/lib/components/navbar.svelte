<script lang="ts">
	import Container from '$lib/components/container.svelte';
	import Logo from './logo.svelte';
	import ThemeToggleButton from './theme-toggle-button.svelte';
	import ChatInterface from '$lib/components/chat-interface.svelte';
	import Button from './ui/button/button.svelte';
</script>

<nav
	class="sticky top-0 z-40 -mt-8 flex h-16 items-center border-b border-foreground/5 bg-background/75 px-4 backdrop-blur-lg"
>
	<Container>
		<div class="flex items-center justify-between">
			<div>
				<Logo />
			</div>

			<div class="flex gap-4">
				<ThemeToggleButton />

				<ChatInterface />
			</div>
		</div>
	</Container>
</nav>
