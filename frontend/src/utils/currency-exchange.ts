import { getLocale } from './get-locale';

export function currencyExchange(price: number) {
	const { currency } = getLocale();
	switch (currency) {
		case 'ARS':
			return price * 190;
		case 'MXN':
			return price * 20;
		default:
			return price;
	}
}
