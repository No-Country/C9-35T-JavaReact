import type { ComponentPropsWithoutRef } from 'react';

import { cn } from '~/utils/cn';

const VARIANTS = {
	primary: [
		'border-brand-primary bg-transparent text-brand-primary',
		'hover:bg-brand-primary hover:text-white',
	],
	secondary: [
		'border-brand-accent bg-transparent text-brand-accent',
		'hover:bg-brand-accent hover:text-white',
	],
};

interface Props extends ComponentPropsWithoutRef<'button'> {
	variant?: keyof typeof VARIANTS;
}

function Button({ children, variant = 'secondary', className, ...props }: Props) {
	return (
		<button
			{...props}
			className={cn(
				'rounded-full border-2 px-6 py-3 text-sm font-medium transition-colors',
				VARIANTS[variant],
				className
			)}
		>
			{children}
		</button>
	);
}

export default Button;
