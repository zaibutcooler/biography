<script lang="ts">
	import { projects } from '$lib/config/profile';
</script>

<div>
	{#each projects as project}
		<div>
			<a href={`/projects/${project.projectId}`}>
				{project.title}
			</a>
		</div>
	{/each}
</div>
