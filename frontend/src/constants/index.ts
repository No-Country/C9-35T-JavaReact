export const API_URL = import.meta.env.VITE_API_URL ?? 'API_URL';

export const enum Route {
	ROOT = '/',
	HELP = '/ayuda',
	PROFILE = '/perfil',
	PRODUCTS = '/productos',
	SHOPPING_CART = '/carrito',
	LOGIN = '/acceso',
	REGISTER = '/registro',
	SEARCH = '/busqueda',
	ORDERS = '/pedidos',
}

export const enum Category {
	LIVING = 1,
	DINING = 2,
	STUDY = 3,
	BEDROOM = 4,
}

export const CategoryDict = {
	sala: Category.LIVING,
	comedor: Category.DINING,
	estudio: Category.STUDY,
	dormitorio: Category.BEDROOM,
};
