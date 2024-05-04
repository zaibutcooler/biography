import { Blog, connectMongoDB } from '$lib/server/mongodb';

export async function load() {
	connectMongoDB();
	const blogs = await Blog.find();

	return { blogs };
}
