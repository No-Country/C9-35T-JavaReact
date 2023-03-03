import type { ReactNode } from 'react';

type Props = {
	children: ReactNode;
};

function TableHeadRow({ children }: Props) {
	return (
		<th className='truncate px-6 py-3 first-of-type:rounded-tl-xl last-of-type:rounded-tr-xl'>
			{children}
		</th>
	);
}

export default TableHeadRow;
