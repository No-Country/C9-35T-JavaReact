import { useForm } from 'react-hook-form';

import Button from '~/components/ui/primitives/button';
import TextField from '~/components/ui/primitives/text-field';
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
	const { login } = useAuth();

	console.log('esto si se muestra');

	const onSubmit = async (data: LoginFormValues) => {
		try {
			await login(data);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<Modal headerLabel='Iniciar sesión'>
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
			</form>
		</Modal>
	);
}

export default LoginModal;
