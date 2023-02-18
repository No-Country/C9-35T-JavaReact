import { ComponentPropsWithoutRef, forwardRef, useId } from 'react';

import { cn } from '~/utils/cn';

interface Props extends ComponentPropsWithoutRef<'input'> {
	label: string;
}

const TextField = forwardRef<HTMLInputElement, Props>(function ({ label, ...props }: Props, ref) {
	const id = useId();

	return (
		<fieldset className={cn('flex flex-col gap-1', props.className)}>
			<label htmlFor={id} className='truncate text-sm font-medium text-neutral-500'>
				{label}
			</label>
			<input
				ref={ref}
				{...props}
				id={id}
				type='text'
				className='w-full rounded-md border border-gray-300/80 py-2 px-3 shadow-sm sm:text-sm'
			/>
		</fieldset>
	);
});

TextField.displayName = 'TextField';

export default TextField;
