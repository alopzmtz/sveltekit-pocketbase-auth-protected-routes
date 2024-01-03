import { redirect } from '@sveltejs/kit';

export const actions = {
	login: async ({ locals, request }) => {
		const data = await request.formData();
		const auth = Object.fromEntries(data);

		const username = auth.username as string;
		const password = auth.password as string;

		await locals.pb.collection('users').authWithPassword(username, password);

		throw redirect(303, '/protected/home');
	}
};
