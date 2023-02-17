import * as Dialog from '@radix-ui/react-dialog';
import { useState } from 'react';

import {
	MenuIcon,
	QuestionMarkCircleIcon,
	ShoppingCartIcon,
	UserCircleIcon,
	XIcon,
} from '~/components/ui/icons/outline';
import { Route } from '~/constants';

import NavbarList from './navbar-list';
import ShoppingCartLabel from './shopping-cart-label';

function DeskIcon() {
	return (
		<svg width='20' height='13' viewBox='0 0 20 13' fill='none' className='h-6 w-6'>
			<path
				d='M1 0H19C19.55 0 20 0.45 20 1C20 1.55 19.55 2 19 2V13H17V11H13V13H11V2H3V13H1V2C0.45 2 0 1.55 0 1C0 0.45 0.45 0 1 0ZM14 4.5V5H16V4.5C16 4.22 15.78 4 15.5 4H14.5C14.22 4 14 4.22 14 4.5ZM14 8.5V9H16V8.5C16 8.22 15.78 8 15.5 8H14.5C14.22 8 14 8.22 14 8.5Z'
				fill='currentColor'
			/>
		</svg>
	);
}

function ChairIcon() {
	return (
		<svg width='22' height='18' viewBox='0 0 22 18' fill='none' className='h-6 w-6'>
			<path
				d='M4 18C3.71667 18 3.479 17.904 3.287 17.712C3.09567 17.5207 3 17.2833 3 17V16C2.16667 16 1.45833 15.7083 0.875 15.125C0.291667 14.5417 0 13.8333 0 13V8C0 7.45 0.196 6.979 0.588 6.587C0.979333 6.19567 1.45 6 2 6C2.55 6 3.02067 6.19567 3.412 6.587C3.804 6.979 4 7.45 4 8V12H18V8C18 7.45 18.1957 6.979 18.587 6.587C18.979 6.19567 19.45 6 20 6C20.55 6 21.021 6.19567 21.413 6.587C21.8043 6.979 22 7.45 22 8V13C22 13.8333 21.7083 14.5417 21.125 15.125C20.5417 15.7083 19.8333 16 19 16V17C19 17.2833 18.904 17.5207 18.712 17.712C18.5207 17.904 18.2833 18 18 18C17.7167 18 17.4793 17.904 17.288 17.712C17.096 17.5207 17 17.2833 17 17V16H5V17C5 17.2833 4.90433 17.5207 4.713 17.712C4.521 17.904 4.28333 18 4 18ZM6 10V8C6 7.08333 5.72067 6.26233 5.162 5.537C4.604 4.81233 3.88333 4.3 3 4V3C3 2.16667 3.29167 1.45833 3.875 0.875C4.45833 0.291667 5.16667 0 6 0H16C16.8333 0 17.5417 0.291667 18.125 0.875C18.7083 1.45833 19 2.16667 19 3V4C18.1 4.23333 17.375 4.72067 16.825 5.462C16.275 6.204 16 7.05 16 8V10H6Z'
				fill='currentColor'
			/>
		</svg>
	);
}

function Chair2Icon() {
	return (
		<svg width='14' height='24' viewBox='0 0 14 24' fill='none' className='h-6 w-6'>
			<path
				d='M2 0V12.438C1.898 12.465 1.777 12.504 1.687 12.531C1.203 12.68 0.867 12.836 0.625 13C0.512507 13.0726 0.407641 13.1563 0.312 13.25C0.234 13.332 0.125 13.5 0.125 13.5L0 13.719V16H1V24H3V16H11V24H13V16H14V13.719L13.875 13.5C13.875 13.5 13.765 13.332 13.687 13.25C13.5917 13.1564 13.4871 13.0726 13.375 13C13.133 12.836 12.797 12.68 12.312 12.531C12.222 12.504 12.102 12.465 12 12.438V0H10V1H4V0H2ZM4 3H6V12.031C5.242 12.051 4.562 12.071 4 12.125V3ZM8 3H10V12.125C9.437 12.07 8.758 12.051 8 12.031V3Z'
				fill='currentColor'
			/>
		</svg>
	);
}

function BedIcon() {
	return (
		<svg width='20' height='14' viewBox='0 0 20 14' fill='none' className='h-6 w-6'>
			<path
				d='M0 14V8C0 7.55 0.0916668 7.14167 0.275 6.775C0.458333 6.40833 0.7 6.08333 1 5.8V3C1 2.16667 1.29167 1.45833 1.875 0.875C2.45833 0.291667 3.16667 0 4 0H8C8.38333 0 8.74167 0.0709998 9.075 0.213C9.40833 0.354333 9.71667 0.55 10 0.8C10.2833 0.55 10.5917 0.354333 10.925 0.213C11.2583 0.0709998 11.6167 0 12 0H16C16.8333 0 17.5417 0.291667 18.125 0.875C18.7083 1.45833 19 2.16667 19 3V5.8C19.3 6.08333 19.5417 6.40833 19.725 6.775C19.9083 7.14167 20 7.55 20 8V14H18V12H2V14H0ZM11 5H17V3C17 2.71667 16.904 2.479 16.712 2.287C16.5207 2.09567 16.2833 2 16 2H12C11.7167 2 11.4793 2.09567 11.288 2.287C11.096 2.479 11 2.71667 11 3V5ZM3 5H9V3C9 2.71667 8.90433 2.479 8.713 2.287C8.521 2.09567 8.28333 2 8 2H4C3.71667 2 3.479 2.09567 3.287 2.287C3.09567 2.479 3 2.71667 3 3V5Z'
				fill='currentColor'
			/>
		</svg>
	);
}

const LINKS = [
	{ icon: ChairIcon, label: 'Sala', href: `${Route.PRODUCTS}?categoria=sala` },
	{ icon: Chair2Icon, label: 'Comedor', href: `${Route.PRODUCTS}?categoria=comedor` },
	{ icon: DeskIcon, label: 'Estudio', href: `${Route.PRODUCTS}?categoria=estudio` },
	{ icon: BedIcon, label: 'Dormitorio', href: `${Route.PRODUCTS}?categoria=dormitorio` },
	{ icon: ShoppingCartIcon, label: ShoppingCartLabel, href: Route.SHOPPING_CART },
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
