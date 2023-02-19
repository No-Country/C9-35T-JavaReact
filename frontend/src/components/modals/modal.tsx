import { Cancel, Content, Overlay, Portal, Root } from '@radix-ui/react-alert-dialog';
import * as ScrollArea from '@radix-ui/react-scroll-area';
import { ReactNode, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { XIcon } from '~/components/ui/icons/outline';
import { Route } from '~/constants';
import { cn } from '~/utils/cn';

function Modal({
	headerLabel,
	inititalOpen,
	children,
}: {
	headerLabel: string;
	inititalOpen: boolean;
	children: ReactNode;
}) {
	const [open, setOpen] = useState(inititalOpen);
	const navigate = useNavigate();

	const handleOpenChange = (open: boolean) => {
		navigate(Route.ROOT, { replace: true });
		setOpen(open);
	};

	return (
		<Root open={open} onOpenChange={handleOpenChange}>
			<Portal>
				<Overlay className='fixed inset-0 bg-black/50 backdrop-blur-sm' />
				<Content
					className={cn(
						'fixed inset-x-0 bottom-0 grid max-h-full grid-rows-[auto_1fr] rounded-t-xl bg-white p-6',
						'md:inset-auto md:top-1/2 md:left-1/2 md:w-full md:max-w-md md:-translate-x-1/2 md:-translate-y-1/2 md:rounded-xl'
					)}
				>
					<header className='flex items-center gap-6'>
						<Cancel>
							<XIcon />
						</Cancel>
						<p className='text-lg font-semibold'>{headerLabel}</p>
					</header>

					<ScrollArea.Root className='overflow-hidden'>
						<ScrollArea.Viewport className='h-full w-full'>{children}</ScrollArea.Viewport>
						<ScrollArea.Scrollbar className='' orientation='vertical'>
							<ScrollArea.Thumb className='' />
						</ScrollArea.Scrollbar>
						<ScrollArea.Corner className='' />
					</ScrollArea.Root>
				</Content>
			</Portal>
		</Root>
	);
}

export default Modal;
