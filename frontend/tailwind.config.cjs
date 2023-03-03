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
				brown: {
					50: '#fdf8f6',
					100: '#f2e8e5',
					200: '#eaddd7',
					300: '#e0cec7',
					400: '#d2bab0',
					500: '#bfa094',
					600: '#a18072',
					700: '#977669',
					800: '#846358',
					900: '#43302b',
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
			backgroundImage: {
				'living-background': "url('/src/assets/images/living.webp')",
				'dining-background': "url('/src/assets/images/dining.webp')",
				'studio-background': "url('/src/assets/images/studio.webp')",
				'bedroom-background': "url('/src/assets/images/bedroom.webp')",
			},
		},
	},
	plugins: [],
};
