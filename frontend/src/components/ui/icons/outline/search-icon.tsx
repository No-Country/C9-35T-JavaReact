import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '~/utils/cn';

interface Props extends ComponentPropsWithoutRef<'svg'> {}

function SearchIcon(props: Props) {
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
				d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
			/>
		</svg>
	);
}

export default SearchIcon;