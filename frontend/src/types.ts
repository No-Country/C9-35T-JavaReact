export interface User {
	id: string;
	name: string;
	lastName: string;
	email: string;
}

export interface AuthCredentials {
	email: string;
	password: string;
}

export interface Product {
	id: string;
	name: string;
	image: string;
	price: number;
	stock: number;
}

export interface ShoppoingCartProduct extends Product {
	quantity: number;
}
