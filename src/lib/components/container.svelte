<script lang="ts">
	import { cn } from '$lib/utils';
	export let className: string = '';
</script>

<div class={cn('mx-auto w-full max-w-7xl px-2.5 md:px-20', className)}>
	<slot />
</div>
