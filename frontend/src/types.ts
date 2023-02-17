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
