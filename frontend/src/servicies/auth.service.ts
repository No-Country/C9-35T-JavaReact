import type { AuthCredentials } from '~/types';

async function login({ email, password }: AuthCredentials) {
	const response = await fetch('https://api.example.com/login', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ email, password }),
	});

	const { token, user } = await response.json();

	// const token = window.btoa(`${email}:${password}`);

	// const user: User = {
	// 	id: '9901238401234',
	// 	name: 'Jessica',
	// 	lastName: 'Smith',
	// 	email: 'jessica@gmail.com',
	// };

	return { token, user };
}

async function getUser({ token }: { token: string }) {
	console.log('fetch with token to get user data', token);
	// fetch with token
	return {
		id: '9901238401234',
		name: 'Jessica',
		lastName: 'Smith',
		email: 'jessica@gmail.com',
	};
}

export const authService = {
	login,
	getUser,
};
