import { createContext, ReactNode, useEffect, useState } from 'react';

import { useLocalStorage } from '~/hooks/use-local-storage';
import { authService } from '~/servicies/auth.service';
import { AuthCredentials, User } from '~/types';

type AuthContextType = {
	isUserLoggedIn: boolean;
	user: User | null;
	showLoginModal: boolean;
	login: (credentials: AuthCredentials) => Promise<void>;
	logout: () => Promise<void>;
	register: (credentials: AuthCredentials) => Promise<void>;
	requestLogin: () => void;
	changeLoginModalState: (state: boolean) => void;
};

export const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export function AuthContextProvider({ children }: { children: ReactNode }) {
	const [user, setUser] = useLocalStorage<User | null>('user', null);
	const [token, setToken] = useLocalStorage('token', '');
	const [showLoginModal, setShowLoginModal] = useState(false);

	useEffect(() => {
		if (user || !token) return;

		authService.getUser({ token }).then(user => setUser(user));
	}, [token, user]);

	const requestLogin = () => {
		setShowLoginModal(true);
	};

	const login = async (credentials: AuthCredentials) => {
		const { token, user } = await authService.login(credentials);
		window.localStorage.setItem('token', token);
		setToken(token);
		setUser(user);
	};

	const logout = async () => {
		// TODO: Implement logout
	};

	const register = async (credentials: AuthCredentials) => {
		// TODO: Implement register
	};

	return (
		<AuthContext.Provider
			value={{
				isUserLoggedIn: Boolean(user),
				user,
				showLoginModal,
				login,
				logout,
				register,
				requestLogin,
				changeLoginModalState: setShowLoginModal,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
}
