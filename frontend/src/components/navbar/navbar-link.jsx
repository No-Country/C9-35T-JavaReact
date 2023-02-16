import { NavLink } from 'react-router-dom';

function NavbarLink({ href, icon: Icon, label }) {
	return (
		<NavLink
			to={href}
			className='flex w-full items-center gap-6 py-4 px-6 text-sm font-medium hover:bg-neutral-100'
		>
			{Icon && <Icon />}
			{label}
		</NavLink>
	);
}

export default NavbarLink;
