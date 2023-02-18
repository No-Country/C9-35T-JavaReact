import { Cancel, Content, Overlay, Portal, Root } from '@radix-ui/react-alert-dialog';
import { ReactNode, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { XIcon } from '~/components/ui/icons/outline';
import { cn } from '~/utils/cn';

function Modal({ headerLabel, children }: { headerLabel: string; children: ReactNode }) {
	const location = useLocation();
	const [open, setOpen] = useState(location.pathname === '/acceso');
	const navigate = useNavigate();

	console.log({ open, location });

	const handleOpenChange = (open: boolean) => {
		navigate(-1);
		setOpen(open);
	};

	return (
		<Root open={open} onOpenChange={handleOpenChange}>
			{/* <Trigger>Login</Trigger> */}
			<Portal>
				<Overlay className='fixed inset-0 bg-black/50 backdrop-blur-sm' />
				<Content
					className={cn(
						'fixed inset-x-0 bottom-0 rounded-t-xl bg-white p-6',
						'md:inset-auto md:top-1/2 md:left-1/2 md:w-full md:max-w-sm md:-translate-x-1/2 md:-translate-y-1/2 md:rounded-xl'
					)}
				>
					<header className='flex items-center gap-6'>
						<Cancel>
							<XIcon />
						</Cancel>
						<p className='text-lg font-semibold'>{headerLabel}</p>
					</header>

					{children}
				</Content>
			</Portal>
		</Root>
	);
}

export default Modal;
