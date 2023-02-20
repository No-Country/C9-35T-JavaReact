import type { ComponentPropsWithoutRef } from 'react';
import { forwardRef, useId } from 'react';

import { cn } from '~/utils/cn';

interface Props extends ComponentPropsWithoutRef<'input'> {
	label?: string;
	error?: string;
}

const DateField = forwardRef<HTMLInputElement, Props>(function (
	{ label, error, ...props }: Props,
	ref
) {
	const id = useId();

	return (
		<fieldset className={cn('flex flex-col gap-1', props.className)}>
			{label && (
				<label htmlFor={id} className='truncate text-sm font-medium text-neutral-500'>
					{label}
				</label>
			)}
			<input
				ref={ref}
				{...props}
				id={id}
				type='date'
				className={cn(
					'w-full rounded-md border border-gray-300/80 py-2 px-3 shadow-sm placeholder:text-neutral-300 sm:text-sm',
					error && 'border-red-600 bg-red-50'
				)}
			/>
			{error && <p className='text-xs font-medium text-red-600'>{error}</p>}
		</fieldset>
	);
});

DateField.displayName = 'TextField';

export default DateField;
