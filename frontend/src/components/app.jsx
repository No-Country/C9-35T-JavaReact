import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Route } from '~/constants';
import { NavbarLayout } from '~/layouts';
import HelpPage from '~/pages/help/page';
import HomePage from '~/pages/home/page';
import ProfilePage from '~/pages/profile/page';

const router = createBrowserRouter([
	{
		path: Route.ROOT,
		element: <NavbarLayout />,
		children: [
			{
				path: Route.ROOT,
				element: <HomePage />,
			},
		],
	},
	{
		path: Route.HELP,
		element: <HelpPage />,
	},
	{
		path: Route.PROFILE,
		element: <ProfilePage />,
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
