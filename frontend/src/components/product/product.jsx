import useShoppingCart from '~/hooks/use-shopping-cart';

function Product({ id, name, image, price, stock }) {
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
					<p className='text-lg font-medium'>{formatToCurrency(currencyExchange(price))}</p>
				</section>
			</section>
		</article>
	);
}

const FORMATS = {
	'es-AR': {
		currency: 'ARS',
		locale: 'es-AR',
	},
	'es-MX': {
		currency: 'MXN',
		locale: 'es-MX',
	},
	'en-US': {
		currency: 'USD',
		locale: 'en-US',
	},
};

function formatToCurrency(price) {
	const { currency, locale } = FORMATS[window.navigator.language];
	return new Intl.NumberFormat(locale, {
		style: 'currency',
		currency,
	}).format(price);
}

function currencyExchange(price) {
	const { currency } = FORMATS[window.navigator.language];
	switch (currency) {
		case 'ARS':
			return price * 190;
		case 'MXN':
			return price * 20;
		default:
			return price;
	}
}

export default Product;
