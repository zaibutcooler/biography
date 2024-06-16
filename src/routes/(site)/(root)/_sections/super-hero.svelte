<script>
	import Button from '$lib/components/ui/button/button.svelte';
	import { PaperPlane } from 'svelte-radix';
</script>

<div class="relative isolate -z-10 overflow-hidden bg-gradient-to-b pt-12">
	<div class="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
		<div
			class="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8"
		>
			<h1
				class="max-w-2xl text-4xl font-bold capitalize text-foreground sm:text-6xl lg:col-span-2 xl:col-auto"
			>
				I'm turning ideas into innovative products
			</h1>
			<div class="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
				<p class="text-lg leading-8 text-muted-foreground">
					With a passion for technology and innovation, I specialize in transforming concepts into
					tangible, cutting-edge products. I love pushing the boundaries of what's possible.
				</p>
				<div class="mt-6 flex gap-5">
					<Button class="flex gap-2">Contact Now <PaperPlane size={18} /></Button>
					<Button variant={'secondary'}>About Me</Button>
				</div>
			</div>
			<img
				src="/me.jpeg"
				alt="people"
				class="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
				width={400}
				height={400}
			/>
		</div>
	</div>
</div>
