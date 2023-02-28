import { Link, NavLink, useLocation } from 'react-router-dom';

import { ShoppingCartDrawer } from '~/components/shopping-cart-drawer';
import { SearchIcon, ShoppingCartIcon } from '~/components/ui/icons/outline';
import { Route } from '~/constants';
import useShoppingCart from '~/hooks/use-shopping-cart';

import LogoIcon from '../ui/icons/logo';
import NavbarDrawer from './navbar-drawer';

function Navbar() {
	const location = useLocation();
	const isCartPage = location.pathname === Route.SHOPPING_CART;
	const { cartItemsCount } = useShoppingCart();

	return (
		<header className='flex items-center justify-between gap-6 bg-brown-900 px-6 py-3'>
			<div className='flex items-center gap-4'>
				<NavbarDrawer />
				<Link to='/' className='flex items-center gap-2 text-lg font-bold text-white'>
					<LogoIcon className='h-6 w-6' />
					Mueblerama
				</Link>
			</div>

			<menu className='flex items-center gap-2'>
				<button className='rounded-full p-2 text-neutral-300 transition-colors hover:bg-white/10'>
					<SearchIcon />
				</button>
				{isCartPage ? (
					<NavLink
						to={Route.SHOPPING_CART}
						className='relative rounded-full p-2 text-neutral-300 transition-colors hover:bg-white/10'
					>
						<ShoppingCartIcon className='text-neutral-300' />
						{cartItemsCount > 0 && (
							<span className='absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-neutral-400 text-[10px] font-bold text-white'>
								{cartItemsCount}
							</span>
						)}
					</NavLink>
				) : (
					<ShoppingCartDrawer />
				)}
			</menu>
		</header>
	);
}

export default Navbar;
