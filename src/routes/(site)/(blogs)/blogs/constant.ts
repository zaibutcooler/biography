import * as z from 'zod';

export const blogFormSchema = z.object({
	title: z.string().min(1),
	prompt: z.string(),
	image: z.string().min(1),
	contents: z
		.object({
			type: z.string(),
			text: z.string()
		})
		.array(),
	minRead: z.string().min(1),
	topic: z.string().array(),
	created: z.string()
});

export interface BlogContent {
	type: 'subtitle' | 'body' | 'break' | 'code' | 'image';
	text: string | null;
}

export type Blog = z.infer<typeof blogFormSchema>;

export const initialData: Blog = {
	title: '',
	prompt: '',
	image: '',
	minRead: '',
	topic: [],
	contents: [{ type: '', text: '' }],
	created: String(new Date())
};

export const formTypeChoices = [
	{ label: 'Body', value: 'body' },
	{ label: 'Sub Title', value: 'subtitle' },
	{ label: 'Break', value: 'break' }
];

export const topicDatas = [
	{ label: 'Buying', key: 'buying' },
	{ label: 'Selling', key: 'selling' },
	{ label: 'Investing', key: 'investing' },
	{ label: 'Property Types', key: 'property-types' },
	{ label: 'Market Insights', key: 'market-insights' },
	{ label: 'Home Improvement', key: 'home-improvement' },
	{ label: 'Real Estate Agents', key: 'real-estate-agents' },
	{ label: 'Legal & Financial', key: 'legal-financial' }
];
