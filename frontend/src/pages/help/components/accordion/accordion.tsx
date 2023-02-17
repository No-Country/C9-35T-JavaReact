import type { AccordionSingleProps } from '@radix-ui/react-accordion';
import { Root as AccordionRoot } from '@radix-ui/react-accordion';

function Accordion({ type = 'single', defaultValue, className, children }: AccordionSingleProps) {
	return (
		<AccordionRoot className={className} type={type} defaultValue={defaultValue}>
			{children}
		</AccordionRoot>
	);
}

export default Accordion;
