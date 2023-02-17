import useShoppingCart from '~/hooks/use-shopping-cart';
import { Product } from '~/types';
import { currencyFormat } from '~/utils/currency-format';
import { getLocale } from '~/utils/get-locale';

function Product({ id, name, image, price, stock }: Product) {
	const product = { id, name, image, price, stock };
	const { addToCart } = useShoppingCart();
	return (
		<article
			className='rounded-xl border border-black/5 bg-white p-2 shadow-sm'
			onClick={() => addToCart(product)}
		>
			<figure className='aspect-square rounded-lg bg-black/10'></figure>
			<section className='py-2'>
				<header className='flex flex-col gap-1'>
					{stock > 0 ? (
						<span className='text-xs font-bold uppercase text-emerald-600'>{stock} en stock</span>
					) : (
						<span className='text-xs font-bold uppercase text-rose-600'>Agotado</span>
					)}
					<p className='truncate text-neutral-600 sm:text-sm'>
						Nombre del producto muy, pero muy largo, enserio muy largo
					</p>
				</header>
				<section>
					<p className='text-lg font-medium'>{currencyFormat(price)}</p>
				</section>
			</section>
		</article>
	);
}

export default Product;
