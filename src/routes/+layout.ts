import type { LayoutLoad } from './$types';

export const ssr = false;
export const csr = true;

export const load = (() => {
	return {
		meta: {
			title: 'Zai',
			description: 'This is zai and nice to meet you!'
		}
	};
}) satisfies LayoutLoad;
