import type { ReactNode } from 'react';

type Props = {
	children: ReactNode;
};

function TableHead({ children }: Props) {
	return (
		<thead className='bg-neutral-200 text-xs uppercase text-neutral-700'>
			<tr>{children}</tr>
		</thead>
	);
}

export default TableHead;
