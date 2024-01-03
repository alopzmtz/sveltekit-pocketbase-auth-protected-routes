<main class="min-h-screen flex items-center justify-center bg-gray-900 text-white">
	<div class="max-w-md w-full p-4 bg-gray-800 shadow-md rounded-md">
		<h2 class="text-2xl font-semibold mb-4">Register</h2>
		<form action="?/register" method="POST">
			<div class="mb-4">
				<label for="email" class="block text-gray-300 text-sm font-medium mb-2">email</label>
				<input
					type="email"
					name="email"
					id="email"
					class="w-full px-3 py-2 border rounded-md bg-gray-700 text-gray-300"
				/>
			</div>
			<div class="mb-4">
				<label for="username" class="block text-gray-300 text-sm font-medium mb-2">Username</label>
				<input
					type="text"
					name="username"
					id="username"
					class="w-full px-3 py-2 border rounded-md bg-gray-700 text-gray-300"
				/>
			</div>
			<div class="mb-4">
				<label for="password" class="block text-gray-300 text-sm font-medium mb-2">Password</label>
				<input
					type="password"
					name="password"
					id="password"
					class="w-full px-3 py-2 border rounded-md bg-gray-700 text-gray-300"
				/>
			</div>
			<button type="submit" class="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600"
				>Register</button
			>
		</form>
	</div>
</main>
