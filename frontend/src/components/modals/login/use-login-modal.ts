import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { useAuth } from '~/hooks/use-auth';

const LoginSchema = z.object({
	email: z.string().email('El correo electrónico no es válido'),
	password: z
		.string()
		.min(8, 'La contraseña debe tener al menos 8 caracteres')
		.max(32, 'La contraseña debe tener máximo 32 caracteres'),
});

type LoginSchemaType = z.infer<typeof LoginSchema>;

export function useLoginModal() {
	const { login } = useAuth();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginSchemaType>({
		resolver: zodResolver(LoginSchema),
	});

	const onSubmit = async (data: LoginSchemaType) => {
		login(data);
	};

	return {
		register,
		handleSubmit: handleSubmit(onSubmit),
		errors,
	};
}
