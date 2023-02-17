import type { ComponentPropsWithoutRef } from 'react';

import { cn } from '~/utils/cn';

type Props = ComponentPropsWithoutRef<'svg'>;

function XIcon(props: Props) {
	return (
		<svg
			{...props}
			fill='none'
			viewBox='0 0 24 24'
			strokeWidth={1.5}
			stroke='currentColor'
			className={cn('h-6 w-6', props.className)}
		>
			<path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
		</svg>
	);
}

export default XIcon;
