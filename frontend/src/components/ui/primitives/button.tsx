import { ComponentPropsWithoutRef } from 'react';
import { cn } from '~/utils/cn';

interface Props extends ComponentPropsWithoutRef<'button'> {}

function Button({ children, className, ...props }: Props) {
	return (
		<button
			{...props}
			className={cn(
				'rounded-lg bg-neutral-500 px-6 py-3 text-sm font-medium text-white',
				className
			)}
		>
			{children}
		</button>
	);
}

export default Button;
