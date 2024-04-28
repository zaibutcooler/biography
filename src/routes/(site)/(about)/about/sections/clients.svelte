<script lang="ts">
	import ClientCard from '$lib/components/client-card.svelte';
	import { myClients } from '$lib/config/clients';
</script>

<div class="grid grid-cols-4 gap-4">
	{#each myClients as client}
		<ClientCard />
	{/each}
</div>
