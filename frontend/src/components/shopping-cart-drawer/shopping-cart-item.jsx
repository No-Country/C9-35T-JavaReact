import useShoppingCart from '~/hooks/use-shopping-cart';
import { cn } from '~/utils/cn';

import QuantityControl from './quantity-control';

function ShoppingCartItem({ id, name, price, quantity }) {
	const { removeFromCart } = useShoppingCart();
	const preparedPrice = formatToCurrency(currencyExchange(price));

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

function HeartIcon(props) {
	return (
		<svg
			{...props}
			viewBox='0 0 16 16'
			width='16'
			height='16'
			className={cn('h-4 w-4', props.className)}
		>
			<path
				d='m8 14.25.345.666a.75.75 0 0 1-.69 0l-.008-.004-.018-.01a7.152 7.152 0 0 1-.31-.17 22.055 22.055 0 0 1-3.434-2.414C2.045 10.731 0 8.35 0 5.5 0 2.836 2.086 1 4.25 1 5.797 1 7.153 1.802 8 3.02 8.847 1.802 10.203 1 11.75 1 13.914 1 16 2.836 16 5.5c0 2.85-2.045 5.231-3.885 6.818a22.066 22.066 0 0 1-3.744 2.584l-.018.01-.006.003h-.002ZM4.25 2.5c-1.336 0-2.75 1.164-2.75 3 0 2.15 1.58 4.144 3.365 5.682A20.58 20.58 0 0 0 8 13.393a20.58 20.58 0 0 0 3.135-2.211C12.92 9.644 14.5 7.65 14.5 5.5c0-1.836-1.414-3-2.75-3-1.373 0-2.609.986-3.029 2.456a.749.749 0 0 1-1.442 0C6.859 3.486 5.623 2.5 4.25 2.5Z'
				fill='currentColor'
			></path>
		</svg>
	);
}

function TrashIcon(props) {
	return (
		<svg
			{...props}
			viewBox='0 0 16 16'
			width='16'
			height='16'
			className={('h-4 w-4', props.className)}
		>
			<path
				d='M11 1.75V3h2.25a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1 0-1.5H5V1.75C5 .784 5.784 0 6.75 0h2.5C10.216 0 11 .784 11 1.75ZM4.496 6.675l.66 6.6a.25.25 0 0 0 .249.225h5.19a.25.25 0 0 0 .249-.225l.66-6.6a.75.75 0 0 1 1.492.149l-.66 6.6A1.748 1.748 0 0 1 10.595 15h-5.19a1.75 1.75 0 0 1-1.741-1.575l-.66-6.6a.75.75 0 1 1 1.492-.15ZM6.5 1.75V3h3V1.75a.25.25 0 0 0-.25-.25h-2.5a.25.25 0 0 0-.25.25Z'
				fill='currentColor'
			></path>
		</svg>
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

export default ShoppingCartItem;
