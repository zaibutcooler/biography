<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="flex h-[80vh] w-full items-center justify-center">
	<!-- TODO make a better error page -->
	<div>
		<p class="text-4xl font-bold">{$page.status}</p>
		<h1>{$page?.error?.message}</h1>
	</div>
</div>
