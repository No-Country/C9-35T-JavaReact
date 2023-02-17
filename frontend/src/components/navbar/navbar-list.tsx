import * as ScrollArea from '@radix-ui/react-scroll-area';

import NavbarLink from './navbar-link';

interface Props {
	links: Array<any>;
}

function NavbarList({ links }: Props) {
	return (
		<ScrollArea.Root className='overflow-hidden'>
			<ScrollArea.Viewport className='h-full w-full'>
				<nav className='flex flex-col gap-4'>
					{links.map(link => (
						<NavbarLink key={link.href} {...link} />
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

export default NavbarList;
