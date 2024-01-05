export async function load({ locals }) {
	return {
		token: locals.token,
		user: locals.user
	};
}
