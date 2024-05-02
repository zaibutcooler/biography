<script lang="ts">
	import { myProjects } from '$lib/config/projects';
	import ProjectCard from '$lib/components/project-card.svelte';
</script>
<div class="mt-32 lg:mt-48">
<div class="grid grid-cols-1 lg:grid-cols-3 gap-4 ">
	{#each myProjects as project}
		<ProjectCard {project} />
	{/each}
</div>
</div>