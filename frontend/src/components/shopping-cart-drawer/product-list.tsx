import * as ScrollArea from '@radix-ui/react-scroll-area';

import useShoppingCart from '~/hooks/use-shopping-cart';

import ShoppingCartItem from './shopping-cart-item';

function ProductList() {
	const { cart } = useShoppingCart();

	return (
		<ScrollArea.Root className='overflow-hidden'>
			<ScrollArea.Viewport className='h-full w-full'>
				<nav className='flex flex-col gap-4'>
					{cart.map(product => (
						<ShoppingCartItem key={product.id} {...product} />
					))}
				</nav>
			</ScrollArea.Viewport>
			<ScrollArea.Scrollbar className='' orientation='vertical'>
				<ScrollArea.Thumb className='' />
			</ScrollArea.Scrollbar>
			<ScrollArea.Corner className='' />
		</ScrollArea.Root>
	);
}

export default ProductList;
