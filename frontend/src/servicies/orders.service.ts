import { API_URL } from '~/constants';
import type { ShoppoingCartProduct } from '~/types';

export const OrdersService = { createOrder, getOrders };

type CreateOrder = {
	paymentMethod: string;
	userId: string;
	shipmentProvider: string;
	products: Array<ShoppoingCartProduct>;
};

async function createOrder(
	{ paymentMethod, shipmentProvider, userId, products }: CreateOrder,
	token: string
) {
	const order = {
		orderDate: new Date().toISOString(),
		paymentMethod,
		shipmentProvider,
		user: {
			id: userId,
		},
		state: {
			id: 1,
		},
		items: products.map(product => ({
			amount: product.quantity,
			product: {
				id: product.id,
			},
		})),
	};
	const response = await fetch(`${API_URL}/orders/`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify(order),
	});

	const data = await response.json();

	return data;
}

async function getOrders(userId: string, token: string) {
	const response = await fetch(`${API_URL}/orders/user/${userId}`, {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});

	const data = await response.json();

	const orders = await Promise.all(
		data.map(async (order: any) => {
			const items = await getItemsOfOrder(order.id, token);
			return { ...order, items };
		})
	);

	return orders;
}

async function getItemsOfOrder(orderId: string, token: string) {
	const response = await fetch(`${API_URL}/orders/items/${orderId}`, {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});

	const data = await response.json();

	return data;
}
