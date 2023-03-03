import type { ReactNode } from 'react';

type Props = {
	children: ReactNode;
};

function TableRow({ children }: Props) {
	return (
		<tr className='overflow-hidden truncate border-b bg-neutral-100 even:bg-white last-of-type:rounded-b-xl last-of-type:border-b-0'>
			{children}
		</tr>
	);
}

export default TableRow;
