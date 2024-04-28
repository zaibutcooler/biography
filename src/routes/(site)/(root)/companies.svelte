<script>
	import Container from '$lib/components/container.svelte';
</script>

<Container>
	<h2 class="mt-8 text-center text-lg font-semibold leading-8 text-foreground">
		Worked with the market leading companies
	</h2>
	<div
		class="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5"
	>
		<img
			class="col-span-2 block max-h-12 w-full object-contain dark:hidden lg:col-span-1 lg:px-4"
			alt="Transistor"
		/>
		<img
			class="col-span-2 block max-h-12 w-full object-contain dark:hidden lg:col-span-1 lg:px-4"
			alt="Reform"
		/>
		<img
			class="col-span-2 block max-h-12 w-full object-contain dark:hidden lg:col-span-1 lg:px-4"
			alt="Tuple"
		/>
		<img
			class="col-span-2 block max-h-12 w-full object-contain dark:hidden sm:col-start-2 lg:col-span-1 lg:px-4"
			alt="SavvyCal"
		/>
		<img
			class="col-span-2 col-start-2 block max-h-12 w-full object-contain dark:hidden sm:col-start-auto lg:col-span-1 lg:px-4"
			alt="Statamic"
		/>

		<img
			class="col-span-2 hidden max-h-12 w-full object-contain dark:block lg:col-span-1 lg:px-4"
			alt="Reform"
		/>
		<img
			class="col-span-2 hidden max-h-12 w-full object-contain dark:block lg:col-span-1 lg:px-4"
			alt="Tuple"
		/>
		<img
			class="col-span-2 hidden max-h-12 w-full object-contain dark:block lg:col-span-1 lg:px-4"
			alt="Transistor"
		/>

		<img
			class="col-span-2 hidden max-h-12 w-full object-contain dark:block sm:col-start-2 lg:col-span-1 lg:px-4"
			alt="SavvyCal"
		/>
		<img
			class="col-span-2 col-start-2 hidden max-h-12 w-full object-contain dark:block sm:col-start-auto lg:col-span-1 lg:px-4"
			alt="Statamic"
		/>
	</div>
</Container>
