import { useForm } from 'react-hook-form';
import { NavLink, useLocation } from 'react-router-dom';

import Button from '~/components/ui/primitives/button';
import TextField from '~/components/ui/primitives/text-field';
import { Route } from '~/constants';
import { useAuth } from '~/hooks/use-auth';

import Modal from './modal';

type LoginFormValues = {
	email: string;
	password: string;
};

function RegisterModal() {
	const {
		register,
		handleSubmit,
		formState: { isValid },
	} = useForm<LoginFormValues>();
	const location = useLocation();
	const { login } = useAuth();

	const onSubmit = async (data: LoginFormValues) => {
		try {
			await login(data);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<Modal headerLabel='Crear cuenta' inititalOpen={location.pathname === Route.REGISTER}>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='my-6 grid-cols-2 gap-6 space-y-4  p-2 md:grid md:space-y-0'
			>
				<TextField label='Nombre' {...register('email', { required: 'El campo es requerido' })} />
				<TextField
					label='Apellidos'
					{...register('email', { required: 'El campo es requerido' })}
				/>
				<TextField label='Teléfono' {...register('email', { required: 'El campo es requerido' })} />
				<TextField
					label='Fecha de nacimiento'
					{...register('email', { required: 'El campo es requerido' })}
				/>
				<TextField
					label='Correo electrónico'
					className='col-span-2'
					{...register('email', { required: 'El campo es requerido' })}
				/>
				<TextField
					label='Contraseña'
					{...register('password', { required: 'El campo es requerido' })}
				/>
				<TextField
					label='Confirmar contraseña'
					{...register('password', { required: 'El campo es requerido' })}
				/>
				<Button disabled={!isValid} className='col-span-2 w-full'>
					Registrarme
				</Button>
				<p className='col-span-2 text-center text-sm font-medium text-neutral-500'>
					¿Ya tienes una cuenta?{' '}
					<NavLink to={Route.LOGIN} className='font-semibold text-blue-600'>
						Inicia sesión
					</NavLink>
				</p>
			</form>
		</Modal>
	);
}

export default RegisterModal;
