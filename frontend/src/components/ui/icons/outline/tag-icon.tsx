import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '~/utils/cn';

interface Props extends ComponentPropsWithoutRef<'svg'> {}

function TagIcon(props: Props) {
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
				d='M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z'
			/>
			<path strokeLinecap='round' strokeLinejoin='round' d='M6 6h.008v.008H6V6z' />
		</svg>
	);
}

export default TagIcon;