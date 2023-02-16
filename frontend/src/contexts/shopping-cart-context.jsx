import { createContext, useEffect, useReducer } from 'react';

export const ShoppingCartContext = createContext();

const CartAction = {
	ADD_TO_CART: 'ADD_TO_CART',
	REMOVE_FROM_CART: 'REMOVE_FROM_CART',
	CLEAR_CART: 'CLEAR_CART',
	INCREMENT_QUANTITY: 'INCREMENT_QUANTITY',
	DECREMENT_QUANTITY: 'DECREMENT_QUANTITY',
	CHANGE_QUANTITY: 'CHANGE_QUANTITY',
};

const initialCart = [];

const reducer = (state, action) => {
	if (action.type === CartAction.ADD_TO_CART) {
		const { id } = action.payload;
		const cartProductIndex = state.findIndex(p => p.id === id);

		const inCart = cartProductIndex !== -1;

		if (inCart) {
			const newCart = state.map(product => {
				if (product.id === id) {
					product.quantity += 1;
				}

				product.quantity = 1;
				return product;
			});

			return newCart;
		}

		const product = { ...action.payload, quantity: 1 };

		return [...state, product];
	}

	if (action.type === CartAction.REMOVE_FROM_CART) {
		return state.filter(p => p.id !== action.payload);
	}

	if (action.type === CartAction.CLEAR_CART) {
		return [];
	}

	if (action.type === CartAction.INCREMENT_QUANTITY) {
		const { id } = action.payload;
		const productIndex = state.findIndex(p => p.id === id);
		const inCart = productIndex !== -1;

		if (inCart) {
			const product = state[productIndex];
			if (product.quantity < product.stock) {
				console.log('product.quantity', product.quantity);
				product.quantity += 1;
			}

			return [...state];
		}
	}

	if (action.type === CartAction.DECREMENT_QUANTITY) {
		const { id } = action.payload;
		const productIndex = state.findIndex(p => p.id === id);
		const inCart = productIndex !== -1;

		if (inCart) {
			const product = state[productIndex];
			if (product.quantity > 1) {
				product.quantity--;
			}

			return [...state];
		}
	}

	if (action.type === CartAction.CHANGE_QUANTITY) {
		const { id, quantity } = action.payload;
		const productIndex = state.findIndex(p => p.id === id);
		const inCart = productIndex !== -1;

		if (inCart) {
			const product = state[productIndex];
			if (quantity > 0 && quantity <= product.stock) {
				product.quantity = quantity;
			}

			return [...state];
		}
	}

	return state;
};

export function ShoppingCartContextProvider({ children }) {
	const [cart, dispatch] = useReducer(reducer, initialCart);

	const cartItemsCount = cart.length;
	const subtotal = cart.reduce((acc, product) => acc + product.price * product.quantity, 0);
	const total = subtotal;

	useEffect(() => {
		window.localStorage.setItem('cart', JSON.stringify(cart));
	}, [cart]);

	const addToCart = product => dispatch({ type: CartAction.ADD_TO_CART, payload: product });

	const removeFromCart = productId =>
		dispatch({ type: CartAction.REMOVE_FROM_CART, payload: productId });

	const clearCart = () => dispatch({ type: CartAction.CLEAR_CART });

	const incrementQuantity = productId =>
		dispatch({ type: CartAction.INCREMENT_QUANTITY, payload: { id: productId } });

	const decrementQuantity = productId =>
		dispatch({ type: CartAction.DECREMENT_QUANTITY, payload: { id: productId } });

	const changeQuantity = (productId, quantity) =>
		dispatch({ type: CartAction.CHANGE_QUANTITY, payload: { id: productId, quantity } });

	return (
		<ShoppingCartContext.Provider
			value={{
				addToCart,
				cart,
				cartItemsCount,
				clearCart,
				changeQuantity,
				decrementQuantity,
				incrementQuantity,
				removeFromCart,
				subtotal,
				total,
			}}
		>
			{children}
		</ShoppingCartContext.Provider>
	);
}
