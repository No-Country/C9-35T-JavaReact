import { Outlet } from 'react-router-dom';

import Footer from '~/components/footer/footer';
import { Navbar } from '~/components/navbar';
import { ShoppingCartContextProvider } from '~/contexts/shopping-cart-context';

function NavbarLayout() {
	return (
		<ShoppingCartContextProvider>
			<div className='grid h-full w-full grid-rows-[auto_1fr]'>
				<Navbar />
				<Outlet />
			</div>
			<Footer />
		</ShoppingCartContextProvider>
	);
}

export default NavbarLayout;
