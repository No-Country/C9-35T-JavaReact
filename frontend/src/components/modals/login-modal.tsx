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

function LoginModal() {
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
		<Modal headerLabel='Iniciar sesión' inititalOpen={location.pathname === Route.LOGIN}>
			<form onSubmit={handleSubmit(onSubmit)} className='my-6 flex flex-col gap-6'>
				<TextField
					label='Correo electrónico'
					{...register('email', { required: 'El campo es requerido' })}
				/>
				<TextField
					label='Contraseña'
					{...register('password', { required: 'El campo es requerido' })}
				/>
				<Button disabled={!isValid}>Ingresar</Button>
				<p className='text-center text-sm font-medium text-neutral-500'>
					¿Aún no tienes una cuenta?{' '}
					<NavLink to={Route.REGISTER} className='font-semibold text-blue-600'>
						Crea una
					</NavLink>
				</p>
			</form>
		</Modal>
	);
}

export default LoginModal;
