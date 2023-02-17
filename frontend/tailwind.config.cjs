/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{ts,tsx}'],
	theme: {
		fontFamily: {
			sans: ['Inter var', 'Inter', 'sans-serif'],
		},
		extend: {
			colors: {
				brand: {
					primary: 'hsl(31, 29%, 67%)',
					secondary: 'hsl(26, 28%, 25%)',
					accent: 'hsl(207, 100%, 25%)',
				},
			},
			keyframes: {
				'slide-down': {
					from: { height: 0 },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'slide-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: 0 },
				},
			},
			animation: {
				'slide-down': 'slide-down 300ms cubic-bezier(0.87, 0, 0.13, 1)',
				'slide-up': 'slide-up 300ms cubic-bezier(0.87, 0, 0.13, 1)',
			},
		},
	},
	plugins: [],
};
