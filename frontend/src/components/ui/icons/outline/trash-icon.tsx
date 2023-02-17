import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '~/utils/cn';

interface Props extends ComponentPropsWithoutRef<'svg'> {}

function TrashIcon(props: Props) {
	return (
		<svg
			{...props}
			viewBox='0 0 16 16'
			width='16'
			height='16'
			className={cn('h-4 w-4', props.className)}
		>
			<path
				d='M11 1.75V3h2.25a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1 0-1.5H5V1.75C5 .784 5.784 0 6.75 0h2.5C10.216 0 11 .784 11 1.75ZM4.496 6.675l.66 6.6a.25.25 0 0 0 .249.225h5.19a.25.25 0 0 0 .249-.225l.66-6.6a.75.75 0 0 1 1.492.149l-.66 6.6A1.748 1.748 0 0 1 10.595 15h-5.19a1.75 1.75 0 0 1-1.741-1.575l-.66-6.6a.75.75 0 1 1 1.492-.15ZM6.5 1.75V3h3V1.75a.25.25 0 0 0-.25-.25h-2.5a.25.25 0 0 0-.25.25Z'
				fill='currentColor'
			></path>
		</svg>
	);
}

export default TrashIcon;
