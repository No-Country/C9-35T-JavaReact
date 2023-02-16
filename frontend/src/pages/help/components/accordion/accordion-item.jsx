import { AccordionItem as RadixAccordionItem } from '@radix-ui/react-accordion';

import { cn } from '~/utils/cn';

function AccordionItem({ value, children, className, ...props }) {
	return (
		<RadixAccordionItem
			value={value}
			className={cn('rounded-lg border border-neutral-300/60', className)}
			{...props}
		>
			{children}
		</RadixAccordionItem>
	);
}

export default AccordionItem;
