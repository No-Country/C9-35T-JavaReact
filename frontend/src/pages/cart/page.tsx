import { useState } from 'react';

import ProductList from '~/components/shopping-cart-drawer/product-list';
import Button from '~/components/ui/primitives/button';
import useShoppingCart from '~/hooks/use-shopping-cart';
import { cn } from '~/utils/cn';
import { currencyFormat } from '~/utils/currency-format';

import ShippingProviderForm from './components/multi-step-form/shipping-provider-form';

function CartPage() {
	const { subtotal, cartItemsCount, cart } = useShoppingCart();
	const [steps, setSteps] = useState([
		{ id: 1, name: 'Carrito', data: cart },
		{ id: 2, name: 'Envío', data: {} },
		{ id: 3, name: 'Pago', data: {} },
	]);
	const [currentStep, setCurrentStep] = useState(2);

	// const isFirstStep = currentStep === 1;
	// const isLastStep = currentStep === steps.length;

	// const { register } = useForm({});

	return (
		<main className='mx-auto h-full w-full max-w-3xl'>
			<section className='my-4 mb-5 flex items-center justify-between px-4'>
				{steps.map((step, index) => (
					<>
						<button
							key={step.id}
							className='relative flex shrink-0 flex-col items-center gap-1'
							onClick={() => setCurrentStep(step.id)}
						>
							<span
								className={cn(
									'flex h-8 w-8 items-center justify-center rounded-full border-2 border-transparent text-sm font-bold',
									index + 1 < currentStep ? 'bg-brand-accent text-neutral-50' : 'bg-neutral-200',
									index + 1 === currentStep &&
										'border-brand-accent bg-transparent text-brand-accent'
								)}
							>
								{index + 1}
							</span>
							<p className='absolute top-full text-sm font-semibold text-neutral-500'>
								{step.name}
							</p>
						</button>
						{index + 1 < steps.length && (
							<div
								className={cn(
									'h-1 w-full bg-neutral-200',
									index + 1 < currentStep && 'bg-brand-accent opacity-50'
								)}
							></div>
						)}
					</>
				))}
			</section>

			{currentStep === 1 && (
				<>
					<section className='p-4'>
						{cartItemsCount === 0 ? (
							<p className='text-center text-neutral-500'>No hay productos en el carrito</p>
						) : (
							<ProductList />
						)}
					</section>
					<footer className='flex flex-col gap-2 p-4'>
						{cartItemsCount > 0 && <span>Subtotal: {currencyFormat(subtotal)}</span>}
						<Button onClick={() => setCurrentStep(prev => prev + 1)}>Continuar</Button>
					</footer>
				</>
			)}

			{currentStep === 2 && (
				<section className='grid gap-6 p-4'>
					<header className='my-4'>
						<h2 className='text-xl font-semibold'>Datos de envío</h2>
					</header>
					<article className='rounded-xl border border-neutral-200 p-4'>
						<p>Jessica Smith</p>
						<section>
							<p>Avenida Siempre Viva 742, Springfield, Estados Unidos</p>
							<p>+54 9 11 1234 5678</p>
						</section>
					</article>
					<section className=''>
						<h3 className='mb-4 text-xl font-semibold'>Selecciona medio de envio</h3>
						<ShippingProviderForm />
					</section>
					<footer className='flex gap-4 py-6'>
						<Button
							variant='primary'
							className='w-full'
							onClick={() => setCurrentStep(prev => prev - 1)}
						>
							Volver
						</Button>
						<Button className='w-full' onClick={() => setCurrentStep(prev => prev + 1)}>
							Continuar
						</Button>
					</footer>
				</section>
			)}
		</main>
	);
}

export default CartPage;
