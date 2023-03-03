import { NavLink, useLocation } from 'react-router-dom';

import Button from '~/components/ui/primitives/button';
import TextField from '~/components/ui/primitives/text-field';
import { Route } from '~/constants';

import Modal from './modal';
import { useRegisterModal } from './register/use-register-modal';

function RegisterModal() {
	const { register, handleSubmit, errors } = useRegisterModal();
	const location = useLocation();

	return (
		<Modal headerLabel='Crear cuenta' inititalOpen={location.pathname === Route.REGISTER}>
			<form
				onSubmit={handleSubmit}
				className='my-6 grid-cols-2 gap-6 space-y-4  p-2 md:grid md:space-y-0'
			>
				<TextField label='Nombre' {...register('firstName')} error={errors.firstName?.message} />
				<TextField label='Apellidos' {...register('lastName')} error={errors.lastName?.message} />
				<TextField
					label='Teléfono'
					className='col-span-2'
					{...register('phone')}
					error={errors.phone?.message}
				/>
				<TextField
					type='email'
					label='Correo electrónico'
					className='col-span-2'
					{...register('email')}
					error={errors.email?.message}
				/>
				<TextField
					type='password'
					label='Contraseña'
					{...register('password')}
					error={errors.password?.message}
				/>
				<TextField
					type='password'
					label='Confirmar contraseña'
					{...register('confirmPassword')}
					error={errors.confirmPassword?.message}
				/>
				<Button className='col-span-2 w-full'>Registrarme</Button>
				<p className='col-span-2 text-center text-sm font-medium text-neutral-500'>
					¿Ya tienes una cuenta?{' '}
					<NavLink to={Route.LOGIN} className='font-semibold text-brand-accent'>
						Inicia sesión
					</NavLink>
				</p>
			</form>
		</Modal>
	);
}

export default RegisterModal;
