import type { ReactNode } from 'react';

type Props = {
	children: ReactNode;
};

function TableCell({ children }: Props) {
	return <td className='px-6 py-3'>{children}</td>;
}

export default TableCell;
