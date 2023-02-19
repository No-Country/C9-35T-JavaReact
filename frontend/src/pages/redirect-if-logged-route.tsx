import { Navigate, Outlet } from 'react-router-dom';

import { Route } from '~/constants';
import { useAuth } from '~/hooks/use-auth';

function RedirectIfLoggedRoute() {
	const { isUserLoggedIn } = useAuth();

	if (isUserLoggedIn) {
		return <Navigate to={Route.ROOT} replace />;
	}

	return <Outlet />;
}

export default RedirectIfLoggedRoute;
