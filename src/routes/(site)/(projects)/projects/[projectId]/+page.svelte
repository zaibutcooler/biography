<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	const project = data.project;
</script>

<h1>{project.title}</h1>
