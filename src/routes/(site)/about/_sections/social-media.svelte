<script lang="ts">
	import CardContent from '$lib/components/ui/card/card-content.svelte';
	import CardHeader from '$lib/components/ui/card/card-header.svelte';
	import CardTitle from '$lib/components/ui/card/card-title.svelte';
	import Card from '$lib/components/ui/card/card.svelte';
	import { contactData } from '$lib/config/profile';
	import { Github, Linkedin, Mail, Phone, Twitter } from 'lucide-svelte';
</script>

<div>
	<Card>
		<CardHeader><CardTitle>Social Media</CardTitle></CardHeader>
		<CardContent class="space-y-4">
			<div class="flex items-center gap-2">
				<Mail class="h-4 w-4" />
				<a href={`mailto:${contactData.email}`} class="text-sm font-medium">{contactData.email}</a>
			</div>
			<div class="flex items-center gap-2">
				<Phone class="h-4 w-4" />
				<a href={`tel:${contactData.tel}`} class="text-sm font-medium">{contactData.tel}</a>
			</div>
			{#each contactData.social as social}
				<div class="flex items-center gap-2">
					{#if social.icon === 'github'}
						<Github class="fab fa-github h-4 w-4" />
					{:else if social.icon === 'linkedin'}
						<Linkedin class="fab fa-linkedin h-4 w-4" />
					{:else if social.icon === 'twitter'}
						<Twitter class="fab fa-twitter h-4 w-4" />
					{/if}
					<a href={social.url} class="text-sm font-medium">{social.url.replace('https://', '')}</a>
				</div>
			{/each}
		</CardContent>
	</Card>
</div>
