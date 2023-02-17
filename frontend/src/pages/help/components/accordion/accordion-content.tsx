/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable tailwindcss/classnames-order */
import type { AccordionContentProps } from '@radix-ui/react-accordion';
import { AccordionContent as RadixAccordionContent } from '@radix-ui/react-accordion';

import { cn } from '~/utils/cn';

function AccordionContent({ children, className, ...props }: AccordionContentProps) {
	return (
		<RadixAccordionContent
			className={cn(
				'overflow-hidden border-t bg-neutral-100 data-[state=open]:animate-slide-down data-[state=closed]:animate-slide-up',
				className
			)}
			{...props}
		>
			<div className='p-4'>{children}</div>
		</RadixAccordionContent>
	);
}

export default AccordionContent;
