import { redirect } from '@sveltejs/kit';

export const actions = {
	login: async ({ locals, cookies, request }) => {
		const data = await request.formData();
		const auth = Object.fromEntries(data);

		const username = auth.username as string;
		const password = auth.password as string;

		const user = await locals.pb.collection('users').authWithPassword(username, password);
		cookies.set('token', user.token, { domain: 'localhost', path: '/', secure: false });

		throw redirect(303, '/protected/home');
	}
};
