<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { contactData, profile } from '$lib/config/profile';
	import { Github, LinkedinIcon, X, YoutubeIcon } from 'lucide-svelte';
	import { routes } from '$lib/config/routes';

	const footerNavigation = {
		solutions: [
			{ name: 'Consulting', href: '#' },
			{ name: 'Analytics', href: '#' },
			{ name: 'Commerce', href: '#' },
			{ name: 'Insights', href: '#' }
		],
		support: [
			{ name: 'Patreon', href: 'https://www.patreon.com/zaibutcooler' },
			{ name: 'Email', href: '#' },
			{ name: 'Guides', href: '#' },
			{ name: 'API Status', href: '#' }
		],
		company: [
			{ name: 'About', href: routes.ABOUT },
			{ name: 'Blog', href: routes.BLOGS },
			{ name: 'Jobs', href: '#' },
			{ name: 'Press', href: '#' },
			{ name: 'Partners', href: '#' }
		],
		legal: [
			{ name: 'Claim', href: '#' },
			{ name: 'Privacy', href: '/privacy-policy' },
			{ name: 'Terms', href: 'terms-and-conditions' }
		],
		social: [...contactData.social, contactData.youtube]
	};
</script>

<footer
	class="mt-24 border-t border-foreground/5 bg-background/75 backdrop-blur-lg sm:mt-48"
	aria-labelledby="footer-heading"
>
	<h2 id="footer-heading" class="sr-only">Footer</h2>
	<div class="mx-auto max-w-7xl px-6 pb-8 lg:px-8">
		<div class="pt-16 sm:pt-24 xl:grid xl:grid-cols-3 xl:gap-8">
			<div class="grid grid-cols-2 gap-8 xl:col-span-2">
				<div class="md:grid md:grid-cols-2 md:gap-8">
					<div>
						<h3 class="text-sm font-semibold leading-6 text-foreground">Solutions</h3>
						<ul role="list" class="mt-6 space-y-4">
							{#each footerNavigation.solutions as item}
								<li>
									<a
										href={item.href}
										class="text-sm leading-6 text-muted-foreground hover:text-primary"
									>
										{item.name}
									</a>
								</li>
							{/each}
						</ul>
					</div>
					<div class="mt-10 md:mt-0">
						<h3 class="text-sm font-semibold leading-6 text-foreground">Support</h3>
						<ul role="list" class="mt-6 space-y-4">
							{#each footerNavigation.support as item}
								<li>
									<a
										href={item.href}
										class="text-sm leading-6 text-muted-foreground hover:text-primary"
									>
										{item.name}
									</a>
								</li>
							{/each}
						</ul>
					</div>
				</div>
				<div class="md:grid md:grid-cols-2 md:gap-8">
					<div>
						<h3 class="text-sm font-semibold leading-6 text-foreground">Company</h3>
						<ul role="list" class="mt-6 space-y-4">
							{#each footerNavigation.company as item}
								<li>
									<a
										href={item.href}
										class="text-sm leading-6 text-muted-foreground hover:text-primary"
									>
										{item.name}
									</a>
								</li>
							{/each}
						</ul>
					</div>
					<div class="mt-10 md:mt-0">
						<h3 class="text-sm font-semibold leading-6 text-foreground">Legal</h3>
						<ul role="list" class="mt-6 space-y-4">
							{#each footerNavigation.legal as item}
								<li>
									<a
										href={item.href}
										class="text-sm leading-6 text-muted-foreground hover:text-primary"
									>
										{item.name}
									</a>
								</li>
							{/each}
						</ul>
					</div>
				</div>
			</div>
			<div class="mt-10 xl:mt-0">
				<h3 class="text-sm font-semibold leading-6 text-foreground">Subscribe to my newsletter</h3>
				<p class="mt-2 text-sm leading-6 text-muted-foreground">
					The latest news, articles, and resources, sent to your inbox weekly.
				</p>
				<form class="mt-6 gap-4 sm:flex sm:max-w-md">
					<Input placeholder="Enter Your Email" class="focus:border-primary" />
					<Button>Register</Button>
				</form>
			</div>
		</div>
	</div>
	<div class="mt-16 w-full border-t border-foreground/5 pb-8 pt-8 sm:mt-20 lg:mt-24">
		<div class="mx-auto max-w-7xl px-6 md:flex md:items-center md:justify-between lg:px-8">
			<div class="flex space-x-6 md:order-2">
				{#each footerNavigation.social as item}
					<a
						href={item.url}
						class="rounded-md border p-1 text-muted-foreground hover:bg-muted hover:text-muted-foreground"
						aria-label={item.name}
					>
						{#if item.name === 'GitHub'}
							<Github class="h-4 w-4" />
						{:else if item.name === 'LinkedIn'}
							<LinkedinIcon class="h-4 w-4" />
						{:else if item.name === 'X'}
							<X class="h-4 w-4" />
						{:else if item.name === 'Youtube'}
							<YoutubeIcon class="h-4 w-4" />
						{/if}
					</a>
				{/each}
			</div>
			<p class="mt-8 text-xs leading-5 text-muted-foreground md:order-1 md:mt-0">
				{profile.company}
			</p>
		</div>
	</div>
</footer>
