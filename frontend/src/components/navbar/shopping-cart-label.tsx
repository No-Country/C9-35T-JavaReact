import useShoppingCart from '~/hooks/use-shopping-cart';

function ShoppingCartLabel() {
	const { cartItemsCount } = useShoppingCart();
	return (
		<span className='flex w-full items-center justify-between'>
			Shopping Cart
			{cartItemsCount > 0 && (
				<span className='flex h-5 w-5 items-center justify-center rounded-full bg-neutral-200 text-xs font-bold text-neutral-400'>
					{cartItemsCount}
				</span>
			)}
		</span>
	);
}

export default ShoppingCartLabel;
