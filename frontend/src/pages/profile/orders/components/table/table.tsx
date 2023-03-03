import type { ReactNode } from 'react';

import TableBody from './table-body';
import TableCell from './table-cell';
import TableHead from './table-head';
import TableHeadRow from './table-head-row';
import TableRow from './table-row';

type Props = {
	children: ReactNode;
};

function Table({ children }: Props) {
	return <table className='w-full text-left text-sm text-neutral-500'>{children}</table>;
}

Table.Head = TableHead;
Table.HeadRow = TableHeadRow;
Table.Body = TableBody;
Table.Row = TableRow;
Table.Cell = TableCell;

export default Table;
