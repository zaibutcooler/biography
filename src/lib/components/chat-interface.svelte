<script lang="ts">
	import { Button, buttonVariants } from '$lib/components/ui/button/index.js';
	import * as Dialog from '$lib/components/ui/dialog/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index.js';

	import PaperPlane from 'svelte-radix/PaperPlane.svelte';
	import { cn } from '$lib/utils';
	import { ScrollArea } from './ui/scroll-area';

	const users = [
		{
			name: 'Olivia Martin',
			email: 'm@example.com',
			avatar: '/avatars/01.png'
		},
		{
			name: 'Isabella Nguyen',
			email: 'isabella.nguyen@email.com',
			avatar: '/avatars/03.png'
		},
		{
			name: 'Emma Wilson',
			email: 'emma@example.com',
			avatar: '/avatars/05.png'
		},
		{
			name: 'Jackson Lee',
			email: 'lee@example.com',
			avatar: '/avatars/02.png'
		},
		{
			name: 'William Kim',
			email: 'will@email.com',
			avatar: '/avatars/04.png'
		}
	] as const;

	type User = (typeof users)[number];
	let messages = [
		{
			role: 'agent',
			content: 'Hi, how can I help you today?'
		},
		{
			role: 'user',
			content: "Hey, I'm having trouble with my account."
		},
		{
			role: 'agent',
			content: 'What seems to be the problem?'
		},
		{
			role: 'user',
			content: "I can't log in."
		}
	];

	let input = '';
	$: inputLength = input.trim().length;
</script>

<Dialog.Root>
	<Dialog.Trigger class={buttonVariants({ className: 'rounded-full' })}
		>Talk With Zai</Dialog.Trigger
	>
	<Dialog.Content class="sm:max-w-[500px]">
		<Dialog.Header>
			<Dialog.Title>Have a talk with Zai</Dialog.Title>
			<Dialog.Description>
				Make changes to your profile here. Click save when you're done.
			</Dialog.Description>
		</Dialog.Header>
		<ScrollArea class=" h-[340px]">
			<div class="space-y-4 py-4">
				{#if messages.length}
					{#each messages as message}
						<div
							class={cn(
								'flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm',
								message.role === 'user' ? 'ml-auto bg-primary text-primary-foreground' : 'bg-muted'
							)}
						>
							{message.content}
						</div>
					{/each}
				{:else}
					<div class="flex h-[300px] w-full items-center justify-center border border-dashed">
						<h1>Help sir zai</h1>
					</div>
				{/if}
			</div>
		</ScrollArea>
		<Dialog.Footer>
			<form
				on:submit={(event) => {
					event.preventDefault();
					if (inputLength === 0) return;
					messages = [
						...messages,
						{
							role: 'user',
							content: input
						}
					];
					input = '';
				}}
				class="flex w-full items-center space-x-2"
			>
				<Input
					id="message"
					placeholder="Type your message..."
					class="flex-1"
					autocomplete="off"
					bind:value={input}
				/>
				<Button type="submit" size="icon" disabled={inputLength === 0}>
					<PaperPlane class="h-4 w-4" />
					<span class="sr-only">Send</span>
				</Button>
			</form>
		</Dialog.Footer>
	</Dialog.Content>
</Dialog.Root>
