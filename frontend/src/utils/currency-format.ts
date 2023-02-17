import { currencyExchange } from './currency-exchange';
import { getLocale } from './get-locale';

export function currencyFormat(price: number) {
	const { currency, locale } = getLocale();
	const exchangedPrice = currencyExchange(price);

	return new Intl.NumberFormat(locale, {
		style: 'currency',
		currency,
	}).format(exchangedPrice);
}
