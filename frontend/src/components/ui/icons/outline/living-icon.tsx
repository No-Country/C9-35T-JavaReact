import type { ComponentPropsWithoutRef } from 'react';

import { cn } from '~/utils/cn';

type Props = ComponentPropsWithoutRef<'svg'>;

function LivingIcon(props: Props) {
	return (
		<svg {...props} width='41' height='30' fill='none' className={cn(props.className)}>
			<path
				fill='currentColor'
				d='M34.386 7.89V6.876A6.875 6.875 0 0 0 27.511 0h-15a6.875 6.875 0 0 0-6.875 6.875v1.016a8.125 8.125 0 0 0 0 15.468v3.516A3.14 3.14 0 0 0 8.761 30h22.5a3.141 3.141 0 0 0 3.125-3.125v-3.516a8.125 8.125 0 0 0 0-15.468ZM12.511 3.75h15a3.14 3.14 0 0 1 3.125 3.125v.719A8.14 8.14 0 0 0 23.792 15H16.23a8.14 8.14 0 0 0-6.844-7.406v-.719a3.14 3.14 0 0 1 3.125-3.125Zm19.813 16.234a1.859 1.859 0 0 0-1.688 1.86v4.406H9.386v-4.406a1.86 1.86 0 0 0-1.687-1.86 4.376 4.376 0 1 1 4.812-4.359v5.625a1.875 1.875 0 0 0 3.75 0v-2.5h7.5v2.5a1.875 1.875 0 0 0 3.75 0v-5.625a4.375 4.375 0 1 1 4.813 4.36Z'
			/>
		</svg>
	);
}

export default LivingIcon;
