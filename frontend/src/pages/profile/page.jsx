import { NavLink } from 'react-router-dom';

import { ArrowLeftIcon } from '~/components/ui/icons/outline';
import Button from '~/components/ui/primitives/button';
import TextField from '~/components/ui/primitives/text-field';

function ProfilePage() {
	return (
		<section className='grid h-full w-full grid-rows-[auto_1fr]'>
			<header className='w-full py-4 px-6'>
				<NavLink
					to='/'
					className='flex items-center gap-1 text-sm font-medium text-neutral-500 hover:text-neutral-700'
				>
					<ArrowLeftIcon className='h-4 w-4' /> Ir al inicio
				</NavLink>
			</header>
			<main className='mx-auto flex w-full max-w-6xl flex-col gap-12 p-6'>
				<section className='w-full'>
					<section className='flex w-full items-center justify-center'>
						<figure className='aspect-square h-32 w-32 rounded-full bg-neutral-200'></figure>
					</section>
				</section>

				<section className='mt-6 md:mt-0 md:grid md:grid-cols-3 md:gap-6'>
					<aside className='md:col-span-1'>
						<h3 className='text-lg font-medium'>Información personal</h3>
						<p className='text-sm text-neutral-500'>
							En esta sección podrás actualizar tu información personal.
						</p>
					</aside>
					<form className='contents'>
						<section className='grid grid-cols-6 gap-6 md:col-span-2'>
							<TextField label='Nombre' className='col-span-3' />
							<TextField label='Apellidos' className='col-span-3' />
							<TextField label='Correo electrónico' className='col-span-4' />
							<TextField label='Teléfono' className='col-span-3' />
							<TextField label='País' className='col-span-3' />
							<TextField label='Dirección' className='col-span-6' />
							<TextField label='Ciudad' className='col-span-2' />
							<TextField label='Estado / Provincia' className='col-span-2' />
							<TextField label='ZIP / Codigo postal' className='col-span-2' />
							<Button className='col-span-2 col-start-5 self-end lg:col-span-1 lg:col-start-6'>
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
