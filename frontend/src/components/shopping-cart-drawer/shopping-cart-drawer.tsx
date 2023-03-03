import * as Dialog from '@radix-ui/react-dialog';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ShoppingCartIcon, XIcon } from '~/components/ui/icons/outline';
import { Route } from '~/constants';
import { useAuth } from '~/hooks/use-auth';
import useShoppingCart from '~/hooks/use-shopping-cart';
import { currencyFormat } from '~/utils/currency-format';

import Button from '../ui/primitives/button';
import ProductList from './product-list';

function ShoppingCartDrawer() {
	const [open, setOpen] = useState(false);
	const { subtotal, cartItemsCount } = useShoppingCart();
	const { isUserLoggedIn } = useAuth();
	const navigate = useNavigate();

	const handleClick = () => {
		const to = isUserLoggedIn ? Route.SHOPPING_CART : Route.LOGIN;
		setOpen(false);
		navigate(to);
	};

	return (
		<Dialog.Root open={open} onOpenChange={setOpen}>
			<Dialog.Trigger asChild>
				<button className='relative rounded-full p-2 text-neutral-300 transition-colors hover:bg-white/10'>
					<ShoppingCartIcon />
					{cartItemsCount > 0 && (
						<span className='absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-brown-800 text-[10px] font-bold text-white'>
							{cartItemsCount}
						</span>
					)}
				</button>
			</Dialog.Trigger>
			<Dialog.Portal>
				<Dialog.Overlay className='fixed inset-0 bg-black/50 backdrop-blur-sm' />
				<Dialog.Content
					forceMount
					className='fixed top-0 right-0 z-40 grid h-screen w-full max-w-md grid-rows-[auto_1fr_auto] overflow-y-auto bg-white transition-transform'
				>
					<header className='flex items-center gap-4 p-4'>
						<Dialog.Close className='flex items-center rounded-lg bg-transparent p-1.5 text-sm text-neutral-500 hover:bg-black/10'>
							<XIcon />
						</Dialog.Close>
						<p className='font-bold text-neutral-600'>Mi carrito</p>
					</header>
					<section className='p-4'>
						<ProductList />
					</section>
					<footer className='flex flex-col gap-2 p-4'>
						Subtotal: {currencyFormat(subtotal)}
						<Button onClick={handleClick}>Comprar</Button>
					</footer>
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	);
}

export default ShoppingCartDrawer;
