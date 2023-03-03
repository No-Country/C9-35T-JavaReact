import { API_URL } from '~/constants';
import type { ProfileForm } from '~/pages/profile/hooks/use-profile';

async function updateProfile(
	user: ProfileForm,
	userId: string,
	token: string
): Promise<ProfileForm> {
	try {
		const response = await fetch(`${API_URL}/users/patch`, {
			method: 'PATCH',
			headers: {
				Authorization: `Bearer ${token}`,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(user),
		});

		if (!response.ok) {
			throw new Error('Error al actualizar el perfil');
		}

		const data = await response.json();

		return data;
	} catch (error) {
		console.error(error);
		return {} as ProfileForm;
	}
}

// async function createAddress(user: Address): Promise<void> {
// 	try {
// 		const response = await fetch(`${API_URL}/users/${userId}/addresses`, {
// 			method: 'POST',
// 			headers: {
// 				Authorization: `Bearer ${token}`,
// 				'Content-Type': 'application/json',
// 			},
// 			body: JSON.stringify(address),
// 		});

// 		if (!response.ok) {
// 			throw new Error('Error al crear la dirección');
// 		}
// 	} catch (error) {
// 		console.error(error);
// 	}
// }

export const UsersService = {
	updateProfile,
	// createAddress,
};
