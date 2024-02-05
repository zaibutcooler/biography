<script lang="ts">
	export let title: string;
	export let descriptions: string = '';
	export let buttonName: string = '';
	export let buttonFunction: (...props: any) => void = () => {};
</script>

<h1>
	{{ title }}
</h1>

<p>
	{{ descriptions }}
</p>
