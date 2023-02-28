import * as RadioGroup from '@radix-ui/react-radio-group';

import { cn } from '~/utils/cn';

function ShippingProviderForm() {
	return (
		<RadioGroup.Root className='grid grid-cols-4 gap-4' defaultValue={OPTIONS[0].value}>
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
	{ value: 'oca', label: 'OCA' },
	{ value: 'correo-argentino', label: 'Correo Argentino' },
	{ value: 'mercado-envios', label: 'Mercado envios' },
	{ value: 'andreani', label: 'Andreani' },
];

export default ShippingProviderForm;
