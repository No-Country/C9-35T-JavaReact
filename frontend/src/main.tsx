import './styles/globals.css';

import ReactDOM from 'react-dom/client';

import App from '~/components/app';
import { AuthContextProvider } from '~/contexts/auth-context';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<AuthContextProvider>
		<App />
	</AuthContextProvider>
);
