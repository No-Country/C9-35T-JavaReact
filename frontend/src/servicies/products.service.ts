import { Product } from '~/types';

function getAll(): Promise<Product[]> {
	return Promise.resolve([
		{ id: '1', name: 'Nombre del producto muy largo', image: '', price: 30, stock: 24 },
		{ id: '2', name: 'Nombre del producto muy largo', image: '', price: 60, stock: 42 },
		{ id: '3', name: 'Nombre del producto muy largo', image: '', price: 100, stock: 0 },
		{ id: '4', name: 'Nombre del producto muy largo', image: '', price: 35, stock: 88 },
		{ id: '5', name: 'Nombre del producto muy largo', image: '', price: 43, stock: 4 },
		{ id: '6', name: 'Nombre del producto muy largo', image: '', price: 22, stock: 0 },
		{ id: '7', name: 'Nombre del producto muy largo', image: '', price: 18, stock: 63 },
		{ id: '8', name: 'Nombre del producto muy largo', image: '', price: 80, stock: 23 },
	]);
}

export const ProductService = {
	getAll,
};
