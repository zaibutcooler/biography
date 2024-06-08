<script lang="ts">
	import Container from '$lib/components/container.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import {
		Card,
		CardHeader,
		CardFooter,
		CardTitle,
		CardDescription,
		CardContent
	} from '$lib/components/ui/card';
	import { CheckCircleIcon } from 'lucide-svelte';

	const points = [
		'dolor sit amet consect',
		'dolor sit amet consect',
		'dolor sit amet consect',
		'dolor sit amet consect',
		'dolor sit amet consect',
		'dolor sit amet consect'
	];
</script>

<div class="mt-28 w-full">
	<div
		class="relative isolate overflow-hidden border bg-card px-6 pt-16 shadow-sm sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0"
	>
		<!-- <svg
			viewBox="0 0 1024 1024"
			class="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
			aria-hidden="true"
		>
			<circle
				cx="512"
				cy="512"
				r="512"
				fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
				fill-opacity="0.7"
			/>
			<defs>
				<radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
					<stop stop-color="#7775D6" />
					<stop offset="1" stop-color="#E935C1" />
				</radialGradient>
			</defs>
		</svg> -->
		<div class="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
			<h2 class="text-3xl font-bold tracking-tight sm:text-4xl">
				Boost your productivity.<br />Start using our app today.
			</h2>
			<p class="mt-6 text-lg leading-8 text-muted-foreground">
				Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing
				sagittis vel nulla.
			</p>
			<div class="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
				<Button>Hello</Button>
			</div>
		</div>
		<div class="relative mt-16 h-80 lg:mt-8">
			<img
				class="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
				src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
				alt="App screenshot"
				width="1824"
				height="1080"
			/>
		</div>
	</div>
</div>
