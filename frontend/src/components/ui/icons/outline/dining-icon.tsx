import type { ComponentPropsWithoutRef } from 'react';

import { cn } from '~/utils/cn';

type Props = ComponentPropsWithoutRef<'svg'>;

function DiningIcon(props: Props) {
	return (
		<svg {...props} width='24' height='30' fill='none' className={cn(props.className)}>
			<path
				fill='currentColor'
				d='M3.333 25v3.333c0 .473-.16.868-.478 1.187-.32.32-.716.48-1.188.48-.473 0-.869-.16-1.189-.48A1.611 1.611 0 0 1 0 28.333v-10c0-.916.327-1.701.98-2.355A3.208 3.208 0 0 1 3.333 15H5v-3.333H3.333a3.206 3.206 0 0 1-2.353-.98A3.206 3.206 0 0 1 0 8.333v-5C0 2.417.327 1.632.98.978A3.208 3.208 0 0 1 3.333 0H20c.917 0 1.702.326 2.355.978.652.654.978 1.439.978 2.355v5c0 .917-.326 1.701-.978 2.354a3.211 3.211 0 0 1-2.355.98h-1.667V15H20c.917 0 1.702.326 2.355.978.652.654.978 1.439.978 2.355v10c0 .473-.16.868-.48 1.187-.319.32-.714.48-1.186.48-.473 0-.868-.16-1.187-.48a1.608 1.608 0 0 1-.48-1.187V25H3.333Zm0-16.667H20v-5H3.333v5Zm5 6.667H15v-3.333H8.333V15Zm-5 6.667H20v-3.334H3.333v3.334Z'
			/>
		</svg>
	);
}

export default DiningIcon;
