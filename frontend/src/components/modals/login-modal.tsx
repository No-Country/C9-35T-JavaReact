import { NavLink, useLocation } from 'react-router-dom';

import Button from '~/components/ui/primitives/button';
import TextField from '~/components/ui/primitives/text-field';
import { Route } from '~/constants';

import { useLoginModal } from './login/use-login-modal';
import Modal from './modal';

function LoginModal() {
	const { register, handleSubmit, errors } = useLoginModal();
	const location = useLocation();

	return (
		<Modal headerLabel='Iniciar sesión' inititalOpen={location.pathname === Route.LOGIN}>
			<form onSubmit={handleSubmit} className='my-6 flex flex-col gap-6'>
				<TextField
					label='Correo electrónico'
					{...register('email', { required: 'El campo es requerido' })}
					error={errors.email?.message}
				/>
				<TextField
					type='password'
					label='Contraseña'
					{...register('password', { required: 'El campo es requerido' })}
					error={errors.password?.message}
				/>
				<Button>Ingresar</Button>
				<p className='text-center text-sm font-medium text-neutral-500'>
					¿Aún no tienes una cuenta?{' '}
					<NavLink to={Route.REGISTER} className='font-semibold text-brand-accent'>
						Crea una
					</NavLink>
				</p>
			</form>
		</Modal>
	);
}

export default LoginModal;
