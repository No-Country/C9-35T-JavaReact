import { ShoppingCartDrawer } from '~/components/shopping-cart-drawer';
import { SearchIcon } from '~/components/ui/icons/outline';

import NavbarDrawer from './navbar-drawer';

function Navbar() {
	return (
		<header className='flex items-center justify-between gap-6 bg-neutral-200 px-6 py-3'>
			<div className='flex items-center gap-4'>
				<NavbarDrawer />
				<p className='text-lg font-bold'>Mueblerama</p>
			</div>

			<menu className='flex items-center gap-2'>
				<button className='rounded-full p-2 text-neutral-600 transition-colors hover:bg-black/5'>
					<SearchIcon />
				</button>
				<ShoppingCartDrawer />
			</menu>
		</header>
	);
}

export default Navbar;
