import { useContext } from 'react';

import { ShoppingCartContext } from '~/contexts/shopping-cart-context';

function useShoppingCart() {
	const context = useContext(ShoppingCartContext);

	return context;
}

export default useShoppingCart;
