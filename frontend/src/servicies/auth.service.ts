import type { RegisterSchemaType } from '~/components/modals/register/use-register-modal';
import { API_URL } from '~/constants';
import type { AuthCredentials } from '~/types';

async function login({ email, password }: AuthCredentials) {
	const response = await fetch(`${API_URL}/auth/signIn`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ email, password }),
	});

	const data = await response.json();
	const { token, ...user } = data;

	return { token, user };
}

async function register({ email, password, firstName, lastName, phone }: RegisterSchemaType) {
	const response = await fetch(`${API_URL}/auth/signUp`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			email,
			password,
			firstName,
			lastName,
			phone,
			address: '',
			country: null,
			province: null,
			zipCode: null,
			city: null,
			avatar: null,
		}),
	});

	const { statusCodeValue, body: data } = await response.json();
	if (statusCodeValue === 400) {
		throw new Error(data.message);
	}

	const { token, ...user } = data;

	return { token, user };
}

async function logout() {
	const response = await fetch(`${API_URL}/auth/logout`);

	if (!response.ok) {
		throw new Error('Error al cerrar sesión');
	}
}

async function getUser({ token, userId }: { token: string; userId: string }) {
	const response = await fetch(`${API_URL}/users/${userId}`, {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});

	const data = await response.json();

	return data;
}

export const authService = {
	register,
	login,
	logout,
	getUser,
};
