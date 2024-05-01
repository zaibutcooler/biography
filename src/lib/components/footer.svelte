<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import Facebook from './ui/icons/facebook.svelte';
	import Github from './ui/icons/github.svelte';
	import Instagram from './ui/icons/instagram.svelte';
	import Twitter from './ui/icons/twitter.svelte';
	import Youtube from './ui/icons/youtube.svelte';

	const footerNavigation = {
		solutions: [
			{ name: 'Marketing', href: '#' },
			{ name: 'Analytics', href: '#' },
			{ name: 'Commerce', href: '#' },
			{ name: 'Insights', href: '#' }
		],
		support: [
			{ name: 'Pricing', href: '/pricing' },
			{ name: 'Documentation', href: '#' },
			{ name: 'Guides', href: '#' },
			{ name: 'API Status', href: '#' }
		],
		company: [
			{ name: 'About', href: 'https://archaic.vercel.app/' },
			{ name: 'Blog', href: '/blogs' },
			{ name: 'Jobs', href: '#' },
			{ name: 'Press', href: '#' },
			{ name: 'Partners', href: '#' }
		],
		legal: [
			{ name: 'Claim', href: '#' },
			{ name: 'Privacy', href: '/privacy-policy' },
			{ name: 'Terms', href: 'terms-and-conditions' }
		],
		social: [
			{
				name: 'Facebook',
				href: '#',
				icon: Facebook
			},
			{
				name: 'Instagram',
				href: 'https://instagram.com/premia.ai?igshid=M2RkZGJiMzhjOQ%3D%3D&utm_source=qr',
				icon: Instagram
			},
			{
				name: 'Twitter',
				href: '#',
				icon: Twitter
			},
			{
				name: 'GitHub',
				href: '#',
				icon: Github
			},
			{
				name: 'YouTube',
				href: '#',
				icon: Youtube
			}
		]
	};
</script>

<!-- pb -->
<footer
	class="mt-24 border-t border-foreground/5 bg-background/75 backdrop-blur-lg sm:mt-56"
	aria-labelledby="footer-heading"
>
	<h2 id="footer-heading" class="sr-only">Footer</h2>
	<div class="mx-auto max-w-7xl px-6 pb-8 lg:px-8">
		<div class=" pt-16 sm:pt-24 xl:grid xl:grid-cols-3 xl:gap-8">
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
				<h3 class="text-sm font-semibold leading-6 text-foreground">Subscribe to our newsletter</h3>
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
		<div class="mx-auto max-w-7xl md:flex md:items-center md:justify-between">
			<div class="flex space-x-6 md:order-2">
				{#each footerNavigation.social as item}
					<a href={item.href} class="text-muted-foreground hover:text-muted-foreground">
						<item.icon class="h-6 w-6 hover:text-primary" aria-hidden="true" />
					</a>
				{/each}
			</div>
			<p class="mt-8 text-xs leading-5 text-muted-foreground md:order-1 md:mt-0">
				&copy; 2023 Archaic Group Pty Ltd T/A Premia AI. All rights reserved.
			</p>
		</div>
	</div>
</footer>
