import { Navigate, Outlet } from 'react-router-dom';

import { useAuth } from '~/hooks/use-auth';

function ProtectedRoute() {
	const { isUserLoggedIn } = useAuth();

	if (!isUserLoggedIn) {
		return <Navigate to='/acceso' replace />;
	}

	return <Outlet />;
}

export default ProtectedRoute;
