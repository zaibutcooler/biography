<script lang="ts">
	import { cn } from '$lib/utils';
	export let className: string = '';
</script>

<div class={cn('mx-auto w-full max-w-7xl px-6 lg:px-8', className)}>
	<slot />
</div>
