import { redirect } from '@sveltejs/kit';

export const actions = {
	register: async ({ locals, request }) => {
		const data = await request.formData();
		const user = Object.fromEntries(data);

		await locals.pb.collection('users').create({ passwordConfirm: user.password, ...user });
		throw redirect(303, '/auth/login');
	}
};
