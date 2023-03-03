import * as RadioGroup from '@radix-ui/react-radio-group';

import { cn } from '~/utils/cn';

type Props = {
	value: string;
	onChange: (value: string) => void;
};

function ShippingProviderForm({ value, onChange }: Props) {
	return (
		<RadioGroup.Root
			className='grid gap-4 md:grid-cols-4'
			defaultValue={OPTIONS[0].value}
			value={value}
			onValueChange={onChange}
		>
			{OPTIONS.map(option => (
				<RadioGroup.Item
					key={option.value}
					value={option.value}
					className={cn(
						'flex cursor-pointer items-center justify-center gap-2 rounded-lg border-2 border-neutral-200 p-4 text-center text-sm font-semibold',
						'data-[state=checked]:border-brand-accent data-[state=checked]:bg-brand-accent/10 data-[state=checked]:text-brand-accent'
					)}
				>
					{option.label}
				</RadioGroup.Item>
			))}
		</RadioGroup.Root>
	);
}

const OPTIONS = [
	{ value: 'OCA', label: 'OCA' },
	{ value: 'Correo Argentino', label: 'Correo Argentino' },
	{ value: 'Mercado envíos', label: 'Mercado envíos' },
	{ value: 'Andreani', label: 'Andreani' },
];

export default ShippingProviderForm;