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

export interface Address {
	id: string;
	street: string;
	country: string;
	state: string;
	city: string;
	zipCode: string;
}

export interface Profile extends Omit<User, 'id'>, Omit<Address, 'id'> {
	id: string;
}

export interface ShoppoingCartProduct extends Product {
	quantity: number;
}
