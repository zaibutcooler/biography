<script>
	// import { testOneInput, testOneOutput } from './constants';

	// import testOneInput from '@/assets/gallery/intest.jpg';
	// import testOneOutput from '@/assets/gallery/outest.png';

	// export { testOneInput, testOneOutput };
</script>

<div class="relative isolate mt-32 sm:mt-40 sm:pt-32">
	<div class="mx-auto max-w-xl sm:text-center">
		<h2 class="text-lg font-semibold leading-8 tracking-tight text-primary">Show Case</h2>
		<p class="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
			All the solutions that you need in one place
		</p>
	</div>

	<div class="mx-auto mt-16 grid w-full grid-cols-1 gap-6 sm:mt-20 md:grid-cols-2 lg:grid-cols-3">
		<div class="space-y-6">
			<div class="relative h-[250px] w-full cursor-pointer overflow-hidden rounded-md border">
				<div class="absolute inset-0 w-full transition-opacity duration-500">
					<img src={'/placeholder.svg'} alt="image0" class="h-full w-full object-cover" />
				</div>
				<div
					class="absolute inset-0 w-full opacity-0 transition-opacity duration-500 hover:opacity-100"
				>
					<img src={'/placeholder.svg'} alt="image0" class="h-full w-full object-cover" />
				</div>
			</div>
			<div class="relative h-[250px] w-full cursor-pointer overflow-hidden rounded-md border">
				<div class="absolute inset-0 w-full transition-opacity duration-500">
					<img src={'/placeholder.svg'} alt="image0" class="h-full w-full object-cover" />
				</div>
				<div
					class="absolute inset-0 w-full opacity-0 transition-opacity duration-500 hover:opacity-100"
				>
					<img src={'/placeholder.svg'} alt="image0" class="h-full w-full object-cover" />
				</div>
			</div>
			<div class="relative h-[300px] w-full cursor-pointer overflow-hidden rounded-md border">
				<div class="absolute inset-0 w-full transition-opacity duration-500">
					<img src={'/placeholder.svg'} alt="image0" class="h-full w-full object-cover" />
				</div>
				<div
					class="absolute inset-0 w-full opacity-0 transition-opacity duration-500 hover:opacity-100"
				>
					<img src={'/placeholder.svg'} alt="image0" class="h-full w-full object-cover" />
				</div>
			</div>
		</div>
		<div class="space-y-6">
			<div class="relative h-[350px] w-full cursor-pointer overflow-hidden rounded-md border">
				<div class="absolute inset-0 w-full transition-opacity duration-500">
					<img src={'/placeholder.svg'} alt="image0" class="h-full w-full object-cover" />
				</div>
				<div
					class="absolute inset-0 w-full opacity-0 transition-opacity duration-500 hover:opacity-100"
				>
					<img src={'/placeholder.svg'} alt="image0" class="h-full w-full object-cover" />
				</div>
			</div>
			<div class="relative h-[250px] w-full cursor-pointer overflow-hidden rounded-md border">
				<div class="absolute inset-0 w-full transition-opacity duration-500">
					<img src={'/placeholder.svg'} alt="image0" class="h-full w-full object-cover" />
				</div>
				<div
					class="absolute inset-0 w-full opacity-0 transition-opacity duration-500 hover:opacity-100"
				>
					<img src={'/placeholder.svg'} alt="image0" class="h-full w-full object-cover" />
				</div>
			</div>
			<div class="relative h-[290px] w-full cursor-pointer overflow-hidden rounded-md border">
				<div class="absolute inset-0 w-full transition-opacity duration-500">
					<img src={'/placeholder.svg'} alt="image0" class="h-full w-full object-cover" />
				</div>
				<div
					class="absolute inset-0 w-full opacity-0 transition-opacity duration-500 hover:opacity-100"
				>
					<img src={'/placeholder.svg'} alt="image0" class="h-full w-full object-cover" />
				</div>
			</div>
		</div>
		<div class="space-y-6">
			<div class="relative h-[280px] w-full cursor-pointer overflow-hidden rounded-md border">
				<div class="absolute inset-0 w-full transition-opacity duration-500">
					<img src={'/placeholder.svg'} alt="image0" class="h-full w-full object-cover" />
				</div>
				<div
					class="absolute inset-0 w-full opacity-0 transition-opacity duration-500 hover:opacity-100"
				>
					<img src={'/placeholder.svg'} alt="image0" class="h-full w-full object-cover" />
				</div>
			</div>
			<div class="relative h-[260px] w-full cursor-pointer overflow-hidden rounded-md border">
				<div class="absolute inset-0 w-full transition-opacity duration-500">
					<img src={'/placeholder.svg'} alt="image0" class="h-full w-full object-cover" />
				</div>
				<div
					class="absolute inset-0 w-full opacity-0 transition-opacity duration-500 hover:opacity-100"
				>
					<img src={'/placeholder.svg'} alt="image0" class="h-full w-full object-cover" />
				</div>
			</div>
			<div class="relative h-[280px] w-full cursor-pointer overflow-hidden rounded-md border">
				<div class="absolute inset-0 w-full transition-opacity duration-500">
					<img src={'/placeholder.svg'} alt="image0" class="h-full w-full object-cover" />
				</div>
				<div
					class="absolute inset-0 w-full opacity-0 transition-opacity duration-500 hover:opacity-100"
				>
					<img src={'/placeholder.svg'} alt="image0" class="h-full w-full object-cover" />
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.relative {
		position: relative;
	}

	.absolute {
		position: absolute;
	}

	.inset-0 {
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
	}

	.w-full {
		width: 100%;
	}

	.h-full {
		height: 100%;
	}

	.object-cover {
		object-fit: cover;
	}

	.transition-opacity {
		transition: opacity 0.5s;
	}

	.opacity-0 {
		opacity: 0;
	}

	.hover\:opacity-100:hover {
		opacity: 1;
	}
</style>
