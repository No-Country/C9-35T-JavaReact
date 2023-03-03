export interface User {
	id: string;
	firstName: string;
	lastName: string;
	email: string;
	avatar: string;
	phone: string | null;
	address: string | null;
	province: string | null;
	country: string | null;
	state: string | null;
	city: string | null;
	zipCode: string | null;
}

export interface AuthCredentials {
	email: string;
	password: string;
}

export interface Product {
	id: string;
	name: string;
	description: string;
	image: {
		name: string;
		dataBase64: string;
	};
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

// export interface Profile extends Omit<User, 'id'>, Omit<Address, 'id'> {
// 	id: string;
// }

export interface ShoppoingCartProduct extends Product {
	quantity: number;
}

type OrderProduct = {
	id: string;
	category: {
		id: string;
		name: string;
		description: string;
	};
	color: string;
	creationDate: string;
	description: string;
	name: string;
	price: number;
	stock: number;
	updateDate: string;
};

type OrderState = {
	id: string;
	creationDate: string;
	description: string;
	name: string;
	updateDate: string;
};

export type Order = {
	id: string;
	orderDate: string;
	paymentMethod: string;
	shipmentProvider: string;
	products: Array<OrderProduct>;
	state: OrderState;
	total: number;
	items: Array<{
		id: {
			orderId: string;
			productId: string;
		};
		amount: number;
	}>;
};
