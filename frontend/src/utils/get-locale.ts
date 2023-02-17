type Locale = {
	currency: string;
	locale: string;
};

const FORMATS: Record<string, Locale> = {
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

export function getLocale() {
	const { language } = window.navigator;

	return FORMATS[language] ?? FORMATS['en-US'];
}
