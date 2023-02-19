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
	desc: string;
	image: string;
	price: number;
	stock: number;
	category: string;
}

export interface ShoppoingCartProduct extends Product {
	quantity: number;
}
