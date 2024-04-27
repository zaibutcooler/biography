<script lang="ts">
	import SuperHeroSection from './super-hero.svelte';
	import MyProjects from './my-projects.svelte';
	import PersonalBlogs from './personal-blogs.svelte';
	import Announcement from '$lib/components/announcement.svelte';
</script>

<main>
	<SuperHeroSection />
	<MyProjects />
	<PersonalBlogs />
	<Announcement />
</main>
