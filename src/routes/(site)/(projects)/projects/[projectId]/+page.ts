import { projects } from '$lib/config/profile';
import { error } from '@sveltejs/kit';

export async function load({ params }: { params: { projectId: string } }) {
	const foundProject = projects.find((project) => project.projectId === params.projectId);
	if (!foundProject) {
		error(404, 'Not found');
	}
	console.log(params.projectId);
	return { project: foundProject };
}
