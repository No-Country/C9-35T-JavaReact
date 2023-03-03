import { API_URL, CategoryDict } from '~/constants';
import type { Product } from '~/types';

// const products: Product[] = [
// 	{
// 		id: '1',
// 		name: 'Sofá de cuero',
// 		desc: 'Un sofá elegante y cómodo con tapizado de cuero que es perfecto para la sala de estar. Con un precio de $899.99, es una pieza de mobiliario que añade un toque de lujo a cualquier hogar.',
// 		image: 'https://images.unsplash.com/photo-1542039684-2ebe2b6dc543',
// 		price: 899.99,
// 		stock: 10,
// 		category: 'sala',
// 	},
// 	{
// 		id: '2',
// 		name: 'Mesa de comedor',
// 		desc: 'Una mesa de comedor moderna con una superficie de madera y patas de metal. Con un precio de $599.99, es el lugar perfecto para reunir a la familia y amigos para disfrutar de una cena juntos.',
// 		image: 'https://images.unsplash.com/photo-1591695857055-7c611785c1b7',
// 		price: 599.99,
// 		stock: 8,
// 		category: 'comedor',
// 	},
// 	{
// 		id: '3',
// 		name: 'Silla de estudio',
// 		desc: 'Una silla cómoda y elegante que es perfecta para el estudio. Con un precio de $139.99, es una pieza de mobiliario esencial para cualquier estudiante o profesional que trabaje desde casa.',
// 		image: 'https://images.unsplash.com/photo-1579546927268-221a9ebf3275',
// 		price: 139.99,
// 		stock: 20,
// 		category: 'estudio',
// 	},
// 	{
// 		id: '4',
// 		name: 'Cama de madera maciza',
// 		desc: 'Una cama grande y sólida con un diseño elegante y minimalista. Con un precio de $999.99, es una pieza de mobiliario que transforma cualquier dormitorio en un espacio tranquilo y acogedor.',
// 		image: 'https://images.unsplash.com/photo-1576082626877-cb88f393c29f',
// 		price: 999.99,
// 		stock: 5,
// 		category: 'dormitorio',
// 	},
// 	{
// 		id: '5',
// 		name: 'Lámpara de mesa',
// 		desc: 'Una lámpara moderna y elegante que es perfecta para el estudio o la sala de estar. Con un precio de $89.99, es una pieza de iluminación funcional que también añade un toque de estilo a cualquier habitación.',
// 		image: 'https://images.unsplash.com/photo-1547003386-d56bc6f1b6e3',
// 		price: 89.99,
// 		stock: 15,
// 		category: 'estudio',
// 	},
// 	{
// 		id: '6',
// 		name: 'Mecedora',
// 		desc: 'Una mecedora clásica con un diseño cómodo y elegante. Con un precio de $299.99, es una pieza de mobiliario que añade un toque de nostalgia y confort a cualquier sala de estar.',
// 		image: 'https://images.unsplash.com/photo-1516684668741-a86d69dc4839',
// 		price: 299.99,
// 		stock: 12,
// 		category: 'sala',
// 	},
// 	{
// 		id: '7',
// 		name: 'Mesa de centro',
// 		desc: 'Una mesa de centro moderna con una superficie de vidrio y patas de metal. Con un precio de $399.99, es una pieza de mobiliario esencial para cualquier sala de estar.',
// 		image: 'https://images.unsplash.com/photo-1603544760865-5c5b7bb92044',
// 		price: 399.99,
// 		stock: 7,
// 		category: 'sala',
// 	},
// 	{
// 		id: '8',
// 		name: 'Silla de comedor',
// 		desc: ' Una silla cómoda y elegante que es perfecta para la mesa del comedor. Con un precio de $119.99, es una pieza de mobiliario que añade un toque de estilo y comodidad a cualquier comida.',
// 		image: 'https://images.unsplash.com/photo-1541702821762-2f58214eae79',
// 		price: 119.99,
// 		stock: 18,
// 		category: 'comedor',
// 	},
// 	{
// 		id: '9',
// 		name: 'Mesa de noche',
// 		desc: 'Una mesa de noche con un diseño elegante y práctico que es perfecta para el dormitorio. Con un precio de $199.99, es una pieza de mobiliario esencial que ofrece espacio de almacenamiento y estilo en igual medida.',
// 		image: 'https://images.unsplash.com/photo-1591695857055-7c611785c1b7',
// 		price: 199.99,
// 		stock: 10,
// 		category: 'dormitorio',
// 	},
// 	{
// 		id: '10',
// 		name: 'Escritorio estilo oficina',
// 		desc: 'Un escritorio elegante y práctico que es perfecto para el estudio o la oficina en casa. Con un precio de $499.99, es una pieza de mobiliario esencial para cualquier profesional que trabaje desde casa.',
// 		image: 'https://images.unsplash.com/photo-1579546927268-221a9ebf3275',
// 		price: 499.99,
// 		stock: 5,
// 		category: 'estudio',
// 	},
// ];

async function getAll(): Promise<Product[]> {
	let data: Product[] = [];
	try {
		const response = await fetch(`${API_URL}/products/`);
		data = await response.json();

		const promises = data.map(async product => {
			const response = await fetch(`${API_URL}/images/product/${product.id}`);
			const [image]: { name: string; dataBase64: string }[] = await response.json();
			product.image = image;
			return product;
		});

		const products = await Promise.all(promises);

		return Promise.resolve(products);
	} catch {}
	return Promise.resolve(data);
}

async function findByCategory(category: string): Promise<Product[]> {
	try {
		const categoryId = CategoryDict[category as keyof typeof CategoryDict];
		const response = await fetch(`${API_URL}/products/category/${categoryId}`);
		const data: Product[] = await response.json();
		const promises = data.map(async product => {
			const response = await fetch(`${API_URL}/images/product/${product.id}`);
			const [image]: { name: string; dataBase64: string }[] = await response.json();
			product.image = image;
			return product;
		});

		const products = await Promise.all(promises);
		return products;
	} catch {
		return [];
	}
	// return Promise.resolve(products.filter(product => product.category === category));
}

async function findById(id: string): Promise<Product> {
	const response = await fetch(`${API_URL}/products/${id}`);
	const product: Product = await response.json();

	const responseImage = await fetch(`${API_URL}/images/product/${product.id}`);
	const [image]: { name: string; dataBase64: string }[] = await responseImage.json();
	product.image = image;

	return product;
}

async function search(query: string): Promise<Product[]> {
	const response = await fetch(`${API_URL}/products/search?search=` + query);
	const data: Product[] = await response.json();
	const promises = data.map(async product => {
		const response = await fetch(`${API_URL}/images/product/${product.id}`);
		const [image]: { name: string; dataBase64: string }[] = await response.json();
		product.image = image;
		return product;
	});

	const products = await Promise.all(promises);
	return products;
	// return Promise.resolve(
	// 	products.filter(product => {
	// 		const { name, desc } = product;
	// 		return name.toLowerCase().includes(query) || desc.toLowerCase().includes(query);
	// 	})
	// );
}

export const ProductService = {
	getAll,
	findByCategory,
	findById,
	search,
};
