<script lang="ts">
	import ProjectCard from '$lib/components/project-card.svelte';
	import { projects } from '$lib/config/profile';
	import ProjectHeader from './_components/project-header.svelte';
</script>

<ProjectHeader />
<div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
	{#each projects as project}
		<ProjectCard {project} />
	{/each}
</div>
