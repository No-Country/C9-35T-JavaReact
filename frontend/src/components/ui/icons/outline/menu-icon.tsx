import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '~/utils/cn';

interface Props extends ComponentPropsWithoutRef<'svg'> {}

function MenuIcon(props: Props) {
	return (
		<svg
			{...props}
			fill='none'
			viewBox='0 0 24 24'
			strokeWidth={1.5}
			stroke='currentColor'
			className={cn('h-6 w-6', props.className)}
		>
			<path
				strokeLinecap='round'
				strokeLinejoin='round'
				d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
			/>
		</svg>
	);
}

export default MenuIcon;