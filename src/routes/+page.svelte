<script>
	let user = false;
</script>

<main class="min-h-screen flex items-center justify-center bg-gray-900 text-white">
	<div class="max-w-md w-full p-4 bg-gray-800 shadow-md rounded-md">
		<h2 class="text-2xl font-semibold mb-4">Protected Route</h2>
		{#if user}
			<p class="text-green-500">Welcome, {user.name}!</p>
			<!-- Your protected content goes here -->
		{:else}
			<p class="text-red-500">Access Denied. Please log in.</p>
		{/if}
	</div>
</main>
