import { API_URL } from '~/constants';
import type { Address, Profile } from '~/types';

async function updateProfile(profile: Profile): Promise<void> {}

async function createAddress(user: Address): Promise<void> {
	try {
		const response = await fetch(`${API_URL}/users/${userId}/addresses`, {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${token}`,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(address),
		});

		if (!response.ok) {
			throw new Error('Error al crear la dirección');
		}
	} catch (error) {
		console.error(error);
	}
}

export const UsersService = {
	updateProfile,
	createAddress,
};
