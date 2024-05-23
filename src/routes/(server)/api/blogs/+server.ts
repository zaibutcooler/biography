import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
export const GET: RequestHandler = async () => {
	connectMongoDB();
	const blogs = await Blog.find();
	console.log('FETCHED BLOGS', blogs);

	return json(blogs);
};

import { Blog, connectMongoDB } from '$lib/server/mongodb';
