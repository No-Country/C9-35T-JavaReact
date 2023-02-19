import * as ScrollArea from '@radix-ui/react-scroll-area';

import NavbarLink from './navbar-link';

interface Props {
	links: Array<any>;
	closeModal: () => void;
}

function NavbarList({ links, closeModal }: Props) {
	return (
		<ScrollArea.Root className='overflow-hidden'>
			<ScrollArea.Viewport className='h-full w-full'>
				<nav className='flex flex-col'>
					{links.map(link => (
						<NavbarLink key={link.href} {...link} closeModal={closeModal} />
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
