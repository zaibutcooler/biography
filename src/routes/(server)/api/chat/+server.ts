import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { groq } from '$lib/server/groq';
export const POST: RequestHandler = async ({ request }) => {
	const messages = await request.json();
	console.log(messages);
	// let messageResponse:string;

	const res = await groq.chat.completions.create({
		messages: messages,
		model: 'mixtral-8x7b-32768'
	});

	const responseMessage = res.choices[0].message;

	return json({ message: responseMessage.content });
};
