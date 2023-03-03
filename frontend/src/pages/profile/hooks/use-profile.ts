import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { useAuth } from '~/hooks/use-auth';
import { UsersService } from '~/servicies/users.service';
import type { User } from '~/types';

const ProfileSchema = z.object({
	firstName: z.string().regex(/^[a-zA-ZÀ-ÿ\u00f1\u00d1\s']+$/, 'El nombre no es válido'),
	lastName: z.string().regex(/^[a-zA-ZÀ-ÿ\u00f1\u00d1\s']+$/, 'Lo(s) apellido(s) no es válido'),
	email: z.string().email('El correo electrónico no es válido'),
	phone: z
		.string()
		.regex(/^[0-9]{10}$/, 'El número de teléfono no es válido')
		.nullable(),
	country: z
		.string()
		.regex(/^[a-zA-ZÀ-ÿ\u00f1\u00d1\s']+$/, 'El país no es válido')
		.nullable(),
	address: z
		.string()
		.regex(/^[a-zA-ZÀ-ÿ\u00f1\u00d1\s']+$/, 'La dirección no es válida')
		.nullable(),
	city: z
		.string()
		.regex(/^[a-zA-ZÀ-ÿ\u00f1\u00d1\s']+$/, 'La ciudad no es válida')
		.nullable(),
	province: z
		.string()
		.regex(/^[a-zA-ZÀ-ÿ\u00f1\u00d1\s']+$/, 'El estado no es válido')
		.nullable(),
	zipCode: z
		.string()
		.regex(/^[0-9]{5}$/, 'El código postal no es válido')
		.nullable(),
});

export type ProfileForm = z.infer<typeof ProfileSchema>;

export function useProfile({
	profile,
	userId,
	token,
}: {
	profile: User;
	userId: string;
	token: string;
}) {
	const { updateUser } = useAuth();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ProfileForm>({ resolver: zodResolver(ProfileSchema), defaultValues: profile });

	const onSubmit = async (data: ProfileForm) => {
		const newUserProfile = await UsersService.updateProfile(data, userId, token);
		updateUser(newUserProfile);
	};

	return {
		register,
		onSubmit: handleSubmit(onSubmit),
		errors,
	};
}
