import type { ReactNode } from 'react';
import { createContext, useState } from 'react';

import type { RegisterSchemaType } from '~/components/modals/register/use-register-modal';
import { useLocalStorage } from '~/hooks/use-local-storage';
import type { ProfileForm } from '~/pages/profile/hooks/use-profile';
import { authService } from '~/servicies/auth.service';
import type { AuthCredentials, User } from '~/types';

type AuthContextType = {
	isUserLoggedIn: boolean;
	user: User | null;
	token: string | null;
	showLoginModal: boolean;
	login: (credentials: AuthCredentials) => Promise<void>;
	logout: () => Promise<void>;
	register: (data: RegisterSchemaType) => Promise<void>;
	requestLogin: () => void;
	changeLoginModalState: (state: boolean) => void;
	updateUser: (data: ProfileForm) => void;
};

export const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export function AuthContextProvider({ children }: { children: ReactNode }) {
	const [user, setUser] = useLocalStorage<User | null>('user', null);
	const [token, setToken] = useLocalStorage<string | null>('token', null);
	const [showLoginModal, setShowLoginModal] = useState(false);

	// useEffect(() => {
	// 	if (user || !token) return;

	// 	console.log('Getting user from token...');
	// 	authService.getUser({ token, userId: user?.id }).then(user => setUser(user));
	// }, [token, user]);

	const requestLogin = () => {
		setShowLoginModal(true);
	};

	const login = async (credentials: AuthCredentials) => {
		const { token, user } = await authService.login(credentials);
		setToken(token);
		setUser(user);
	};

	const logout = async () => {
		await authService.logout();
		setToken(null);
		setUser(null);
	};

	const register = async (data: RegisterSchemaType) => {
		const { user, token } = await authService.register(data);
		setToken(token);
		setUser(user);
	};

	const updateUser = async (data: ProfileForm) => {
		setUser({ ...user, ...(data as User) });
	};

	return (
		<AuthContext.Provider
			value={{
				isUserLoggedIn: Boolean(user),
				user,
				token,
				showLoginModal,
				login,
				logout,
				register,
				requestLogin,
				changeLoginModalState: setShowLoginModal,
				updateUser,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
}
