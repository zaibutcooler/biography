<script lang="ts">
	import {
		CommandDialog,
		CommandEmpty,
		CommandGroup,
		CommandInput,
		CommandItem,
		CommandList,
		CommandSeparator
	} from '$lib/components/ui/command';
	import { onMount } from 'svelte';

	interface LinkType {
		title: string;
		url: string;
	}

	export let links: LinkType[] = [];

	let open = false;

	const toggleMenu = () => {
		open = !open;
	};

	const setOpen = (input: boolean) => {
		open = input;
	};

	onMount(() => {
		const down = (e: KeyboardEvent) => {
			if (e.key === 'j' && (e.metaKey || e.ctrlKey)) {
				e.preventDefault();
				toggleMenu();
			}
		};

		document.addEventListener('keydown', down);
		return () => document.removeEventListener('keydown', down);
	});
</script>

<p
	class="fixed bottom-0 left-0 right-0 border-t border-t-muted bg-background p-1 text-center text-sm text-muted-foreground print:hidden"
>
	Press{' '}
	<kbd
		class="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100"
	>
		<span class="text-xs">⌘</span>J
	</kbd>{' '}
	to open the command menu
</p>
<CommandDialog {open} onOpenChange={setOpen}>
	<CommandInput placeholder="Type a command or search..." />
	<CommandList>
		<CommandEmpty>No results found.</CommandEmpty>
		<CommandGroup heading="Actions">
			<CommandItem
				onSelect={() => {
					setOpen(false);
					window.print();
				}}
			>
				<span>Print</span>
			</CommandItem>
		</CommandGroup>
		<CommandGroup heading="Links">
			{#each links as link}
				<CommandItem
					onSelect={() => {
						setOpen(false);
						window.open(link.url, '_blank');
					}}
				>
					<span>{link.title}</span>
				</CommandItem>
			{/each}
		</CommandGroup>
		<CommandSeparator />
	</CommandList>
</CommandDialog>
