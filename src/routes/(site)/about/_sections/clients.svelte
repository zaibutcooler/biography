<script lang="ts">
	import ClientCard from '$lib/components/client-card.svelte';
	import { myClients } from '$lib/config/clients';

	
</script>

<div class="mt-32 lg:mt-48">
<div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
	{#each myClients as client}
		<ClientCard {client} />
	{/each}
</div>


</div>



