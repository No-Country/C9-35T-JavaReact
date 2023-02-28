import type { ComponentPropsWithoutRef } from 'react';

import { cn } from '~/utils/cn';

type Props = ComponentPropsWithoutRef<'svg'>;

function StudioIcon(props: Props) {
	return (
		<svg {...props} width='40' height='24' fill='none' className={cn(props.className)}>
			<path
				fill='currentColor'
				d='M0 2v20c0 1.1.9 2 2 2s2-.9 2-2V4h20v18c0 1.1.9 2 2 2s2-.9 2-2v-2h8v2c0 1.1.9 2 2 2s2-.9 2-2V2c0-1.1-.9-2-2-2H2C.9 0 0 .9 0 2Zm36 2v4h-8V4h8Zm-8 12v-4h8v4h-8Z'
			/>
		</svg>
	);
}

export default StudioIcon;
