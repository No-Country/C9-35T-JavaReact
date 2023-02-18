import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Route as RouteName } from '~/constants';
import { NavbarLayout } from '~/layouts';
import HelpPage from '~/pages/help/page';
import HomePage from '~/pages/home/page';
import ProfilePage from '~/pages/profile/page';
import ProtectedRoute from '~/pages/protected-route';

import LoginModal from './modals/login-modal';

// const router = createBrowserRouter([
// 	{
// 		path: Route.ROOT,
// 		element: <NavbarLayout />,
// 		children: [
// 			{
// 				path: Route.ROOT,
// 				element: <HomePage />,
// 			},
// 		],
// 	},
// 	{
// 		path: Route.HELP,
// 		element: <HelpPage />,
// 	},
// 	{
// 		path: Route.ROOT,
// 		element: <ProtectedRoute />,
// 		children: [
// 			{
// 				path: Route.PROFILE,
// 				element: <ProfilePage />,
// 			},
// 		],
// 	},
// ]);

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path={RouteName.HELP} element={<HelpPage />} />
				<Route element={<NavbarLayout />}>
					<Route path={RouteName.ROOT} element={<HomePage />}>
						<Route path={'/acceso'} element={<LoginModal />} />
					</Route>
				</Route>
				<Route element={<ProtectedRoute />}>
					<Route path={RouteName.PROFILE} element={<ProfilePage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
