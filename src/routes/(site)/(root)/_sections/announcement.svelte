<script lang="ts">
	import Container from '$lib/components/container.svelte';
	import {
		Card,
		CardHeader,
		CardFooter,
		CardTitle,
		CardDescription,
		CardContent
	} from '$lib/components/ui/card';
	import { CheckCircleIcon } from 'lucide-svelte';

	const points =    [
      "dolor sit amet consect",
      "dolor sit amet consect",
      "dolor sit amet consect",
      "dolor sit amet consect",
      "dolor sit amet consect",
      "dolor sit amet consect",
    ]
</script>

<div class="relative isolate -z-10 mt-32 sm:mt-40">
	<Container>
	  <div class="flex flex-col gap-16　bg-card/75 text-card-foreground shadow-sm backdrop-blur-lg border border-foreground/5 px-6 py-16  sm:rounded-3xl sm:p-8 w-full lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
		<img
		  class="h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm　bg-muted"
		  src="/career1.avif"
		  alt=""
		 
		/>
		<div class="w-full flex-auto">
		  <h2 class="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
			This is freakin title babe
		  </h2>
		  <p class="mt-6 text-lg leading-8 text-foreground/90">
			This title is stupid as hell
		  </p>
		  <ul
			role="list"
			class="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-base leading-7 text-foreground sm:grid-cols-2"
		  >
			{#each points as benefit}
			  <li class="flex gap-x-3">
				<CheckCircleIcon
				  class="h-7 w-5 flex-none"
				  aria-hidden="true"
				/>
				{benefit}
			  </li>
			{/each}
		  </ul>
		  <div class="mt-10 flex">
			<a
			  href="#"
			  class="text-sm font-semibold leading-6 text-blue-500"
			>
			  See our job postings <span aria-hidden="true">&rarr;</span>
			</a>
		  </div>
		</div>
	  </div>
	</Container>
  </div>