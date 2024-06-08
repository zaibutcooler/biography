<div class="w-full lg:grid lg:h-screen lg:grid-cols-2 xl:h-screen">
	<div class="flex items-center justify-center"><slot /></div>
	<div class="hidden bg-muted lg:block">
		<img
			src="/placeholder.svg"
			alt="placeholder"
			width="1920"
			height="1080"
			class="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
		/>
	</div>
</div>
