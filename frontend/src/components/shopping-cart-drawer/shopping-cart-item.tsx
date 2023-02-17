import { HeartIcon, TrashIcon } from '~/components/ui/icons/outline';
import useShoppingCart from '~/hooks/use-shopping-cart';
import { ShoppoingCartProduct } from '~/types';
import { currencyFormat } from '~/utils/currency-format';

import QuantityControl from './quantity-control';

function ShoppingCartItem({ id, name, price, quantity }: ShoppoingCartProduct) {
	const { removeFromCart } = useShoppingCart();
	const preparedPrice = currencyFormat(price);

	return (
		<article className='grid grid-cols-[auto_1fr] gap-4 rounded-xl border border-neutral-300/70 p-4'>
			<figure className='aspect-square w-16 rounded-lg bg-neutral-200'></figure>
			<section className='flex flex-col justify-between'>
				<header className='flex items-center justify-between gap-4'>
					<p className='text-sm font-medium'>{name}</p>
					<menu className='flex items-center gap-2'>
						<button>
							<HeartIcon className='text-neutral-500' />
						</button>
						<button onClick={() => removeFromCart(id)}>
							<TrashIcon className='text-neutral-500 hover:text-rose-600' />
						</button>
					</menu>
				</header>
				<footer className='flex items-center justify-between gap-4'>
					<p className='font-medium'>{preparedPrice}</p>
					<QuantityControl id={id} quantity={quantity} />
				</footer>
			</section>
		</article>
	);
}

export default ShoppingCartItem;
