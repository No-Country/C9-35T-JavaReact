import { Link, NavLink } from 'react-router-dom';

import { ArrowLeftIcon } from '~/components/ui/icons/outline';
import Button from '~/components/ui/primitives/button';
import TextField from '~/components/ui/primitives/text-field';
import { Route } from '~/constants';
import { useAuth } from '~/hooks/use-auth';
import type { User } from '~/types';

import { useProfile } from './hooks/use-profile';

function ProfilePage() {
	const { user, token, logout } = useAuth();
	const { register, errors, onSubmit } = useProfile({
		profile: user as User,
		userId: user?.id ?? '',
		token: token ?? '',
	});

	return (
		<section className='grid h-full w-full grid-rows-[auto_1fr]'>
			<header className='flex w-full items-center justify-between py-4 px-6'>
				<NavLink
					to={Route.ROOT}
					className='flex items-center gap-1 text-sm font-medium text-neutral-500 hover:text-neutral-700'
				>
					<ArrowLeftIcon className='h-4 w-4' /> Ir al inicio
				</NavLink>

				<menu className='flex items-center gap-4'>
					<Link
						to={Route.ORDERS}
						className='rounded-lg px-2.5 py-1.5 text-sm font-medium text-neutral-500 hover:bg-neutral-200/60 hover:text-neutral-700'
					>
						Mis pedidos
					</Link>
					<button
						onClick={logout}
						className='rounded-lg bg-rose-100 px-5 py-2 text-sm font-medium text-rose-700'
					>
						Cerrar sesión
					</button>
				</menu>
			</header>
			<main className='mx-auto flex w-full max-w-6xl flex-col gap-12 p-6'>
				<section className='w-full'>
					<section className='flex w-full items-center justify-center'>
						<figure className='aspect-square h-32 w-32 rounded-full bg-neutral-200'>
							<img src={user?.avatar} alt='Avatar' className='rounded-full' />
						</figure>
					</section>
				</section>

				<section className='mt-6 md:mt-0 md:grid md:grid-cols-3 md:gap-6'>
					<aside className='md:col-span-1'>
						<h3 className='text-lg font-medium'>Información personal</h3>
						<p className='text-sm text-neutral-500'>
							En esta sección podrás actualizar tu información personal.
						</p>
					</aside>
					<form onSubmit={onSubmit} className='contents'>
						<section className='flex grid-cols-6 flex-col gap-6 md:col-span-2 md:grid'>
							<TextField
								label='Nombre'
								className='col-span-3'
								{...register('firstName')}
								disabled
								error={errors?.firstName?.message}
							/>
							<TextField
								label='Apellidos'
								className='col-span-3'
								{...register('lastName')}
								disabled
								error={errors?.lastName?.message}
							/>
							<TextField
								label='Correo electrónico'
								className='col-span-4'
								{...register('email')}
								disabled
								error={errors?.email?.message}
							/>
							<TextField
								label='Teléfono'
								className='col-span-3'
								{...register('phone')}
								error={errors?.phone?.message}
							/>
							<TextField
								label='País'
								className='col-span-3'
								{...register('country')}
								error={errors?.country?.message}
							/>
							<TextField
								label='Dirección'
								className='col-span-6'
								{...register('address')}
								error={errors?.address?.message}
							/>
							<TextField
								label='Ciudad'
								className='col-span-2'
								{...register('city')}
								error={errors?.city?.message}
							/>
							<TextField
								label='Estado / Provincia'
								className='col-span-2'
								{...register('province')}
								error={errors?.province?.message}
							/>
							<TextField
								label='ZIP / Codigo postal'
								className='col-span-2'
								{...register('zipCode')}
								error={errors?.zipCode?.message}
							/>
							<Button className='col-span-2 col-start-5 shrink-0 self-end lg:col-span-2 lg:col-start-5'>
								Guardar
							</Button>
						</section>
					</form>
				</section>
			</main>
		</section>
	);
}

export default ProfilePage;
