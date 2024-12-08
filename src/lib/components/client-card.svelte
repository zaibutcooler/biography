<script lang="ts">
	import {
		Card,
		CardHeader,
		CardFooter,
		CardTitle,
		CardDescription,
		CardContent
	} from '$lib/components/ui/card';
	import type { Client } from '$lib/config/clients';
	export let client: Client;
</script>

<Card>
	<CardHeader>{client.title}</CardHeader>

	<CardContent><p class="text-sm">{client.description}</p></CardContent>

	<!-- <CardFooter>Yo</CardFooter> -->
</Card>
