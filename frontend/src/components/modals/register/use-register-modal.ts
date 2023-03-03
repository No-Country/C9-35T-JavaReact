import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { useAuth } from '~/hooks/use-auth';

const RegisterSchema = z
	.object({
		firstName: z.string().regex(/^[a-zA-ZÀ-ÿ\u00f1\u00d1\s']+$/, 'El nombre no es válido'),
		lastName: z.string().regex(/^[a-zA-ZÀ-ÿ\u00f1\u00d1\s']+$/, 'Lo(s) apellido(s) no es válido'),
		phone: z.string().regex(/^[0-9]{10}$/, 'El número de teléfono no es válido'),
		email: z.string().email('El correo electrónico no es válido'),
		password: z
			.string()
			.min(8, 'La contraseña debe tener al menos 8 caracteres')
			.max(32, 'La contraseña debe tener máximo 32 caracteres'),
		confirmPassword: z
			.string()
			.min(8, 'La contraseña debe tener al menos 8 caracteres')
			.max(32, 'La contraseña debe tener máximo 32 caracteres'),
	})
	.superRefine(({ password, confirmPassword }, ctx) => {
		if (confirmPassword !== password) {
			ctx.addIssue({
				path: ['confirmPassword'],
				code: 'custom',
				message: 'Las contraseñas no coinciden',
			});
		}
	});

export type RegisterSchemaType = z.infer<typeof RegisterSchema>;

export function useRegisterModal() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<RegisterSchemaType>({
		resolver: zodResolver(RegisterSchema),
	});
	const { register: registerUser } = useAuth();

	const onSubmit = async (data: RegisterSchemaType) => registerUser(data);

	return {
		register,
		handleSubmit: handleSubmit(onSubmit),
		errors,
	};
}
