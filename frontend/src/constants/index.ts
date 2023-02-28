export const API_URL = import.meta.env.VITE_API_URL ?? 'API_URL';

export const enum Route {
	ROOT = '/',
	HELP = '/ayuda',
	PROFILE = '/perfil',
	PRODUCTS = '/productos',
	SHOPPING_CART = '/carrito',
	LOGIN = '/acceso',
	REGISTER = '/registro',
}
