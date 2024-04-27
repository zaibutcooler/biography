<script lang="ts">
	import Background from '$lib/components/background.svelte';
	import Container from '$lib/components/container.svelte';
	import Footer from '$lib/components/footer.svelte';
	import Navbar from '$lib/components/navbar.svelte';
</script>

<Navbar />
<Background />

<Container>
	<div class="min-h-screen">
		<slot />
	</div>
</Container>
<Footer />
