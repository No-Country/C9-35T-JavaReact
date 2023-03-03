import type { ReactNode } from 'react';

import { cn } from '~/utils/cn';

const VARIANT: Record<number, string> = {
	1: 'bg-neutral-200 text-neutral-600',
	2: 'bg-sky-200/50 text-sky-600',
	3: 'bg-red-200/50 text-red-600',
	4: 'bg-violet-200/50 text-violet-600',
};

type Props = {
	children: ReactNode;
	status: number;
};

function OrderStatus({ status, children }: Props) {
	const variant = VARIANT[status] ?? VARIANT[1];

	return (
		<span className={cn('truncate rounded-full px-2 py-1.5 text-xs font-bold uppercase', variant)}>
			{children}
		</span>
	);
}

export default OrderStatus;
