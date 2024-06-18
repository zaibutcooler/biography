<script lang="ts">
	import { myProjects } from '$lib/config/projects';
	import ProjectCard from '$lib/components/project-card.svelte';

	const projects = myProjects.filter((project) => project.pin);
</script>

<div class="mt-32 lg:mt-48">
	<div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
		{#each projects as project}
			<ProjectCard {project} />
		{/each}
	</div>
</div>
