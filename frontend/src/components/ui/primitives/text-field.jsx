import { useId } from 'react';

import { cn } from '~/utils/cn';

function TextField({ label, placeholder, className }) {
	const id = useId();

	return (
		<fieldset className={cn('flex flex-col gap-1', className)}>
			<label htmlFor={id} className='truncate text-sm font-medium text-neutral-500'>
				{label}
			</label>
			<input
				id={id}
				type='text'
				placeholder={placeholder}
				className='w-full rounded-md border border-gray-300/80 py-2 px-3 shadow-sm sm:text-sm'
			/>
		</fieldset>
	);
}

export default TextField;
