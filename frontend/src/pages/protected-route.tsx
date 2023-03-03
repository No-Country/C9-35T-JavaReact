import { Navigate, Outlet } from 'react-router-dom';

import { Route } from '~/constants';
import { useAuth } from '~/hooks/use-auth';

function ProtectedRoute() {
	const { isUserLoggedIn } = useAuth();

	if (!isUserLoggedIn) {
		return <Navigate to={Route.LOGIN} replace />;
	}

	return <Outlet />;
}

export default ProtectedRoute;
