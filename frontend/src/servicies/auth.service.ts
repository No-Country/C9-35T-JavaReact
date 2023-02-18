import { AuthCredentials, User } from '~/types';

async function login({ email, password }: AuthCredentials) {
	const token = window.btoa(`${email}:${password}`);

	const user: User = {
		id: '9901238401234',
		name: 'Jessica',
		lastName: 'Smith',
		email: 'jessica@gmail.com',
	};

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
