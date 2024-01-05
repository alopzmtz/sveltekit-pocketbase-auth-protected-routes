<script>
	export let data;
</script>

<main class="min-h-screen flex items-center justify-center bg-gray-900 text-white">
	<div class="max-w-md w-full p-4 bg-gray-800 shadow-md rounded-md">
		<h2 class="text-2xl font-semibold mb-4">Protected Route</h2>
		Si puedes ver esto gracias al token {data.token}

		<form action="/logout" method="POST">
			<button type="submit" class="border-solid border-2 border-fuchsia-500 p-2">Logout</button>
		</form>
	</div>
</main>
