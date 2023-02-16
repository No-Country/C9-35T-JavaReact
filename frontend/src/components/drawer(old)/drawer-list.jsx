import * as ScrollArea from '@radix-ui/react-scroll-area';

import DrawerLink from './drawer-link';

function DrawerList({ links }) {
	return (
		<ScrollArea.Root className='overflow-hidden'>
			<ScrollArea.Viewport className='h-full w-full'>
				<nav className='flex flex-col gap-4'>
					{links.map(link => (
						<DrawerLink key={link.href} {...link} />
					))}
				</nav>
			</ScrollArea.Viewport>
			<ScrollArea.Scrollbar className='' orientation='vertical'>
				<ScrollArea.Thumb className='' />
			</ScrollArea.Scrollbar>
			<ScrollArea.Corner className='' />
		</ScrollArea.Root>
	);
}

export default DrawerList;
