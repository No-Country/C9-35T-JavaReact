import type { FC, SVGProps } from 'react';

type Props = {
	name: string;
	icon: FC<SVGProps<SVGSVGElement>>;
};

const BACKGROUNDS: Record<string, string> = {
	sala: 'bg-living-background',
	comedor: 'bg-dining-background',
	estudio: 'bg-studio-background',
	dormitorio: 'bg-bedroom-background',
};

function CategoryItem({ name, icon: Icon }: Props) {
	const background = BACKGROUNDS[name.toLowerCase()] ?? '';

	return (
		<div className='flex flex-col items-center gap-1'>
			<figure
				className={`flex h-16 w-16 items-center justify-center rounded-full bg-black/40 ${background} bg-cover bg-center bg-blend-soft-light`}
			>
				<Icon className='text-white' />
			</figure>
			<p className='text-center text-xs font-extrabold uppercase text-neutral-500'>{name}</p>
		</div>
	);
}

export default CategoryItem;
