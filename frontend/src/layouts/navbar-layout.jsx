import { Outlet } from 'react-router-dom';

import { Navbar } from '~/components/navbar';
import { ShoppingCartContextProvider } from '~/contexts/shopping-cart-context';

function NavbarLayout() {
	return (
		<ShoppingCartContextProvider>
			<div className='grid h-full w-full grid-rows-[auto_1fr]'>
				<Navbar />
				<Outlet />
			</div>
		</ShoppingCartContextProvider>
	);
}

export default NavbarLayout;
