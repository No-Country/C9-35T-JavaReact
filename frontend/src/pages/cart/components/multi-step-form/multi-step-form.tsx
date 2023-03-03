import { useState } from 'react';

import useShoppingCart from '~/hooks/use-shopping-cart';

function MultiStepForm() {
	const { cart } = useShoppingCart();
	const [steps, setSteps] = useState([
		{
			products: cart,
		},
	]);
	const [currentStep, setCurrentStep] = useState(1);

	return (
		<section className='my-4 mb-5 flex items-center justify-between px-4'>
			<div className='relative flex shrink-0 flex-col items-center gap-1'>
				<span className='flex h-8 w-8 items-center justify-center rounded-full bg-neutral-200 text-sm font-bold'>
					1
				</span>
				<p className='absolute top-full text-sm font-semibold text-neutral-500'>Carrito</p>
			</div>
			<div className='h-1 w-full bg-neutral-200'></div>
			<div className='relative flex shrink-0 flex-col items-center gap-1'>
				<span className='flex h-8 w-8 items-center justify-center rounded-full bg-neutral-200 text-sm font-bold'>
					2
				</span>
				<p className='absolute top-full text-sm font-semibold text-neutral-500'>Envío</p>
			</div>
			<div className='h-1 w-full bg-neutral-200'></div>
			<div className='relative flex shrink-0 flex-col items-center gap-1'>
				<span className='flex h-8 w-8 items-center justify-center rounded-full bg-neutral-200 text-sm font-bold'>
					3
				</span>
				<p className='absolute top-full text-sm font-semibold text-neutral-500'>Pago</p>
			</div>
		</section>
	);
}

export default MultiStepForm;
