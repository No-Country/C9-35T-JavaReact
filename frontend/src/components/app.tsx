import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Route as RouteName } from '~/constants';
import { NavbarLayout } from '~/layouts';
import CartPage from '~/pages/cart/page';
import HelpPage from '~/pages/help/page';
import HomePage from '~/pages/home/page';
import ProductDetailPage from '~/pages/products/detail/page';
import ProductsPage from '~/pages/products/page';
import ProfilePage from '~/pages/profile/page';
import ProtectedRoute from '~/pages/protected-route';
import RedirectIfLoggedRoute from '~/pages/redirect-if-logged-route';

import LoginModal from './modals/login-modal';
import RegisterModal from './modals/register-modal';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path={RouteName.HELP} element={<HelpPage />} />
				<Route element={<NavbarLayout />}>
					<Route path={RouteName.ROOT} element={<HomePage />}>
						<Route element={<RedirectIfLoggedRoute />}>
							<Route path={RouteName.LOGIN} element={<LoginModal />} />
							<Route path={RouteName.REGISTER} element={<RegisterModal />} />
						</Route>
					</Route>
					<Route element={<ProtectedRoute />}>
						<Route path={RouteName.SHOPPING_CART} element={<CartPage />} />
					</Route>
					<Route path='/productos' element={<ProductsPage />} />
					<Route path='/productos/:id' element={<ProductDetailPage />} />
				</Route>
				<Route element={<ProtectedRoute />}>
					<Route path={RouteName.PROFILE} element={<ProfilePage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
