import { Outlet } from 'react-router-dom';

import Footer from '~/components/footer/footer';
import { Navbar } from '~/components/navbar';
import { ShoppingCartContextProvider } from '~/contexts/shopping-cart-context';

function NavbarLayout() {
	return (
		<ShoppingCartContextProvider>
			<div className='grid h-full min-h-screen w-full grid-rows-[auto_1fr_auto]'>
				<Navbar />
				<Outlet />
				<Footer />
			</div>
		</ShoppingCartContextProvider>
	);
}

export default NavbarLayout;
