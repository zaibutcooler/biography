<script lang="ts">
	import { Button, buttonVariants } from '$lib/components/ui/button/index.js';
	import * as Dialog from '$lib/components/ui/dialog/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index.js';

	import PaperPlane from 'svelte-radix/PaperPlane.svelte';
	import { cn } from '$lib/utils';
	import { ScrollArea } from './ui/scroll-area';
	import axios from 'axios';

	type ChatMessage = {
		role: 'system' | 'user';
		content: string;
	};
	let messages: ChatMessage[] = [];

	let input = '';
	let loading = false;
	$: inputLength = input.trim().length;

	const handleSubmit = async () => {
		try {
			loading = true;
			if (inputLength === 0) return;
			messages = [
				...messages,
				{
					role: 'user',
					content: input
				}
			];
			input = '';

			const response = await axios.post('/api/chat', messages);

			messages = [
				...messages,
				{
					role: 'system',
					content: response.data.message
				}
			];
		} catch (error) {
			console.log(error);
		} finally {
			loading = false;
		}
	};
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
								'flex w-max max-w-[340px] flex-col gap-2 rounded-lg px-3 py-2 text-sm lg:max-w-[400px]',
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
					handleSubmit();
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
				<Button type="submit" size="icon" disabled={inputLength === 0 || loading}>
					<PaperPlane class="h-4 w-4" />
					<span class="sr-only">Send</span>
				</Button>
			</form>
		</Dialog.Footer>
	</Dialog.Content>
</Dialog.Root>
