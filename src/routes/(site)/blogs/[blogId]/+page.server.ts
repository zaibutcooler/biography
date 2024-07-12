import { Blog, connectMongoDB } from '$lib/server/mongodb';
import { error } from '@sveltejs/kit';

export async function load({ params }: { params: { blogId: string } }) {
	connectMongoDB();
	const blog = await Blog.findById(params.blogId);

	if (!blog) {
		return error(404, 'Not Found');
	}

	return { blog };
}
