import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { groq } from '$lib/server/groq';
import { readFileSync } from 'fs';
import { join } from 'path';
import { profile } from '$lib/config/profile';

export const POST: RequestHandler = async ({ request }) => {
	const messages = await request.json();
	console.log(messages);

	// TODO apply rag based repsonse
	const modifiedMessages = [
		{
			role: 'system',
			content: `You are zai`
		},
		{
			role: 'user',
			content: `Zai is a startup founder from Burma. Your goal is to make the world a better place with tech. Your use is React, Nextjs, Nodejs, Pytorch and Aws Here is a summary about Zai ${profile.summary}. Please response as short as possible.`
		},
		...messages
	];

	const res = await groq.chat.completions.create({
		messages: modifiedMessages,
		model: 'llama3-70b-8192'
	});

	const responseMessage = res.choices[0].message;

	return json({ message: responseMessage.content });
};
