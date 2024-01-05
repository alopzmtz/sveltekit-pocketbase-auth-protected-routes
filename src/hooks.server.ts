// Import necessary modules and types
import { pocketBaseClient } from '$lib/pocketbase';
import { serializedNonPOJO } from '$lib/utils';
import { redirect, type Handle } from '@sveltejs/kit';

// Define the handle function as required by SvelteKit
export const handle: Handle = async ({ event, resolve }) => {
	// Token local
	const token = event.cookies.get('token');
	event.locals.token = token;

	// Create a new instance of PocketBase and configure it with the API server URL
	event.locals.pb = pocketBaseClient;

	// Load user authentication information from cookies if available
	event.locals.pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '');

	// Check if the user is authenticated
	event.locals.user = event.locals.pb.authStore.isValid
		? serializedNonPOJO(event.locals.pb.authStore.model)
		: undefined;

	if (event.url.pathname === '/') {
		throw redirect(303, '/protected/home');
	}

	if (event.url.pathname.startsWith('/protected')) {
		if (!event.locals.user) {
			throw redirect(303, '/auth/login');
		}
	}

	if (event.url.pathname.startsWith('/auth')) {
		if (event.locals.user) {
			throw redirect(303, '/protected/home');
		}
	}

	// Resolve the event, triggering the actual endpoint logic
	const response = await resolve(event);

	// Export authentication information to cookies in the response headers
	response.headers.append(
		'set-cookie',
		event.locals.pb.authStore.exportToCookie({ secure: false })
	);

	// Return the final response
	return response;
};
