<script lang="ts">
	import SuperHeroSection from './_sections/super-hero.svelte';
	import MyProjects from './_sections/my-projects.svelte';
	import PersonalBlogs from './_sections/personal-blogs.svelte';
	import Announcement from './_sections/announcement.svelte';
	import Companies from './_sections/companies.svelte';
	import Timeline from './_sections/timeline.svelte';
</script>

<main>
	<SuperHeroSection />
	<Companies />
	<Timeline/>
	<MyProjects />
	<PersonalBlogs />
	<Announcement />
</main>
