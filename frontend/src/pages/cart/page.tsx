import ProductList from '~/components/shopping-cart-drawer/product-list';
import Button from '~/components/ui/primitives/button';
import useShoppingCart from '~/hooks/use-shopping-cart';
import { currencyFormat } from '~/utils/currency-format';

function CartPage() {
	const { subtotal, cartItemsCount } = useShoppingCart();

	return (
		<main className='mx-auto h-full w-full max-w-3xl'>
			<section className='p-4'>
				{cartItemsCount === 0 ? (
					<p className='text-center text-neutral-500'>No hay productos en el carrito</p>
				) : (
					<ProductList />
				)}
			</section>
			<footer className='flex flex-col gap-2 p-4'>
				{cartItemsCount > 0 && <span>Subtotal: {currencyFormat(subtotal)}</span>}
				<Button>Comprar</Button>
			</footer>
		</main>
	);
}

export default CartPage;
