import * as Dialog from '@radix-ui/react-dialog';
import { useState } from 'react';

import {
	MenuIcon,
	QuestionMarkCircleIcon,
	ShoppingCartIcon,
	TagIcon,
	UserCircleIcon,
	XIcon,
} from '~/components/ui/icons/outline';
import { Route } from '~/constants';

import NavbarList from './navbar-list';

const LINKS = [
	{ icon: TagIcon, label: 'Categoría 1', href: `${Route.PRODUCTS}?categoria=categoria-1` },
	{ icon: TagIcon, label: 'Categoría 2', href: `${Route.PRODUCTS}?categoria=categoria-2` },
	{ icon: TagIcon, label: 'Categoría 3', href: `${Route.PRODUCTS}?categoria=categoria-3` },
	{ icon: TagIcon, label: 'Categoría 4', href: `${Route.PRODUCTS}?categoria=categoria-4` },
	{ icon: ShoppingCartIcon, label: 'Mi carrito', href: Route.SHOPPING_CART },
	{ icon: UserCircleIcon, label: 'Mi perfil', href: Route.PROFILE },
	{ icon: QuestionMarkCircleIcon, label: 'Ayuda', href: Route.HELP },
];

function NavbarDrawer() {
	const [open, setOpen] = useState(false);

	return (
		<Dialog.Root open={open} onOpenChange={setOpen}>
			<Dialog.Trigger asChild>
				<button className='rounded-full p-2 text-neutral-600 transition-colors hover:bg-black/5'>
					<MenuIcon />
				</button>
			</Dialog.Trigger>
			<Dialog.Portal>
				<Dialog.Overlay className='fixed inset-0 bg-black/50 backdrop-blur-sm' />
				<Dialog.Content
					forceMount
					className='fixed top-0 left-0 z-40 grid h-screen w-80 grid-rows-[auto_1fr] overflow-y-auto rounded-r-2xl bg-white transition-transform'
				>
					<header className='flex flex-col gap-4 bg-neutral-300 p-4 pt-0'>
						<figure className='mt-12 h-16 w-16 rounded-full bg-black/10'></figure>
						<section>
							<p className='font-semibold'>Jessica Smith</p>
							<p className='text-sm font-medium text-neutral-600'>jessica@gmail.com</p>
						</section>
						<Dialog.Close asChild>
							<button
								type='button'
								className='absolute top-2.5 right-2.5 inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-white hover:bg-black/10'
							>
								<XIcon />
							</button>
						</Dialog.Close>
					</header>
					<NavbarList links={LINKS} />
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	);
}

export default NavbarDrawer;
