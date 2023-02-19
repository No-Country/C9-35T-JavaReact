import type { ComponentPropsWithoutRef, FC } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { cn } from '~/utils/cn';

interface Props {
	href: string;
	icon?: FC<ComponentPropsWithoutRef<'svg'>>;
	label: string | FC;
	closeModal: () => void;
}

function NavbarLink({ href, icon: Icon, label: Label, closeModal }: Props) {
	const location = useLocation();
	const currentPath = location.pathname + location.search;

	return (
		<NavLink
			to={href}
			onClick={closeModal}
			className={({ isActive }) =>
				cn(
					'flex w-full items-center gap-6 py-4 px-6 text-sm font-medium text-neutral-500 hover:bg-brown-50',
					isActive && currentPath === href && 'bg-brown-50 text-neutral-700'
				)
			}
		>
			{({ isActive }) => (
				<>
					{Icon && (
						<Icon
							className={cn(
								isActive && currentPath === href ? 'text-brown-700' : 'text-neutral-400/60'
							)}
						/>
					)}
					{typeof Label === 'string' ? Label : <Label />}
				</>
			)}
		</NavLink>
	);
}

export default NavbarLink;
