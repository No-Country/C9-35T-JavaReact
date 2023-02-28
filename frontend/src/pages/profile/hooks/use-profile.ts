import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const ProfileSchema = z.object({
	name: z.string().regex(/^[a-zA-ZÀ-ÿ\u00f1\u00d1\s']+$/, 'El nombre no es válido'),
	lastName: z.string().regex(/^[a-zA-ZÀ-ÿ\u00f1\u00d1\s']+$/, 'Lo(s) apellido(s) no es válido'),
	email: z.string().email('El correo electrónico no es válido'),
	phone: z.string().regex(/^[0-9]{10}$/, 'El número de teléfono no es válido'),
	country: z.string().regex(/^[a-zA-ZÀ-ÿ\u00f1\u00d1\s']+$/, 'El país no es válido'),
	address: z.string().regex(/^[a-zA-ZÀ-ÿ\u00f1\u00d1\s']+$/, 'La dirección no es válida'),
	city: z.string().regex(/^[a-zA-ZÀ-ÿ\u00f1\u00d1\s']+$/, 'La ciudad no es válida'),
	state: z.string().regex(/^[a-zA-ZÀ-ÿ\u00f1\u00d1\s']+$/, 'El estado no es válido'),
	zipCode: z.string().regex(/^[0-9]{5}$/, 'El código postal no es válido'),
	bornDate: z.preprocess(arg => {
		if (typeof arg === 'string' || arg instanceof Date) return new Date(arg);
	}, z.date().min(new Date('1900-01-01'), 'La fecha de nacimiento no es válida').max(new Date('2005-01-01'), 'La fecha de nacimiento no es válida')),
});

type ProfileForm = z.infer<typeof ProfileSchema>;

export function useProfile() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ProfileForm>({ resolver: zodResolver(ProfileSchema) });

	const onSubmit = (data: ProfileForm) => {
		console.log(data);
	};

	return {
		register,
		onSubmit: handleSubmit(onSubmit),
		errors,
	};
}
