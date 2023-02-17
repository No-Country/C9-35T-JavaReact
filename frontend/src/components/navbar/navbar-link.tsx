import { NavLink } from 'react-router-dom';

interface Props {
	href: string;
	icon?: React.FC;
	label: string | React.FC;
}

function NavbarLink({ href, icon: Icon, label: Label }: Props) {
	return (
		<NavLink
			to={href}
			className='flex w-full items-center gap-6 py-4 px-6 text-sm font-medium hover:bg-neutral-100'
		>
			{Icon && <Icon />}
			{typeof Label === 'string' ? Label : <Label />}
		</NavLink>
	);
}

export default NavbarLink;
