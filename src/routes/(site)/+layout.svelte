<script lang="ts">
	import Background from '$lib/components/background.svelte';
	import Container from '$lib/components/container.svelte';
	import Footer from '$lib/components/footer.svelte';
	import Navbar from '$lib/components/navbar.svelte';
</script>

<Background />
<Navbar />

<Container>
	<div class="min-h-screen pt-16">
		<slot />
	</div>
</Container>
<Footer />
