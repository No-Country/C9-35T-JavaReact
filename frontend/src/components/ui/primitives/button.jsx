import { cn } from '~/utils/cn';

function Button({ children, className, ...props }) {
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
