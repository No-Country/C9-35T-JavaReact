import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import ProductList from '~/components/shopping-cart-drawer/product-list';
import Button from '~/components/ui/primitives/button';
import { Route } from '~/constants';
import { useAuth } from '~/hooks/use-auth';
import useShoppingCart from '~/hooks/use-shopping-cart';
import { OrdersService } from '~/servicies/orders.service';
import { cn } from '~/utils/cn';
import { currencyFormat } from '~/utils/currency-format';

import ShippingProviderForm from './components/multi-step-form/shipping-provider-form';
import SuccessCard from './components/success-card';

function CartPage() {
	const navigate = useNavigate();
	const { user, token } = useAuth();
	const { subtotal, cartItemsCount, cart, clearCart } = useShoppingCart();
	const [steps] = useState([
		{ id: 1, name: 'Carrito' },
		{ id: 2, name: 'Envío' },
		{ id: 3, name: 'Pago' },
	]);
	const [currentStep, setCurrentStep] = useState(1);
	const [shipmentProvider, setShipmentProvider] = useState('OCA');
	const withShippingData = user?.address || user?.phone;

	const handleCreateOrder = async () => {
		if (!user || !token) return;

		await OrdersService.createOrder(
			{
				paymentMethod: 'Efectivo',
				userId: user.id,
				shipmentProvider,
				products: cart,
			},
			token
		);

		clearCart();
		setCurrentStep(4);
		setTimeout(() => navigate(Route.ORDERS), 3000);
	};

	// const isFirstStep = currentStep === 1;
	// const isLastStep = currentStep === steps.length;

	// const { register } = useForm({});

	return (
		<main className='mx-auto h-full w-full max-w-3xl'>
			<section className='my-4 mb-5 flex items-center justify-between px-4'>
				{steps.map((step, index) => (
					<>
						<p key={step.id} className='relative flex shrink-0 flex-col items-center gap-1'>
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
						</p>
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
						<Button disabled={cartItemsCount < 1} onClick={() => setCurrentStep(prev => prev + 1)}>
							Continuar
						</Button>
					</footer>
				</>
			)}

			{currentStep === 2 && (
				<section className='grid gap-6 p-4'>
					<header className='my-4'>
						<h2 className='text-xl font-semibold'>Datos de envío</h2>
					</header>
					<article className='rounded-xl border border-neutral-200 p-4'>
						{withShippingData ? (
							<>
								<p>
									{user?.firstName} {user?.lastName}
								</p>
								<section>
									<p>{user.address}</p>
									<p>{user.phone}</p>
								</section>
							</>
						) : (
							<>
								<p className='text-sm font-medium text-neutral-600'>
									Parece que no tienes datos de envío
								</p>
								<p className='text-sm font-medium text-neutral-600'>
									Por favor,{' '}
									<Link
										to={Route.PROFILE}
										className='text-brand-accent underline underline-offset-2'
									>
										completa tus datos de envío
									</Link>
								</p>
							</>
						)}
					</article>
					<section className=''>
						<h3 className='mb-4 text-xl font-semibold'>Selecciona medio de envio</h3>
						<ShippingProviderForm value={shipmentProvider} onChange={setShipmentProvider} />
					</section>
					<footer className='flex gap-4 py-6'>
						<Button
							variant='primary'
							className='w-full'
							onClick={() => setCurrentStep(prev => prev - 1)}
						>
							Volver
						</Button>
						<Button
							disabled={!withShippingData}
							className='w-full'
							onClick={() => setCurrentStep(prev => prev + 1)}
						>
							Continuar
						</Button>
					</footer>
				</section>
			)}

			{currentStep === 3 && (
				<section className='grid gap-6 p-4'>
					<header className='my-4'>
						<h2 className='text-xl font-semibold'>Formas de pago</h2>
					</header>

					<section>
						<section className='my-16 text-center'>
							<p className='text-xl font-medium'>Por el momento solo aceptamos pagos en efectivo</p>
							<p className='text-neutral-500'>Agradecemos tu comprensión</p>
						</section>
						<p>
							El monto a pagar es de:{' '}
							<span className='font-semibold'>{currencyFormat(subtotal)}</span>
						</p>
					</section>

					<footer className='flex gap-4 py-6'>
						<Button
							variant='primary'
							className='w-full'
							onClick={() => setCurrentStep(prev => prev - 1)}
						>
							Volver
						</Button>
						<Button disabled={!withShippingData} className='w-full' onClick={handleCreateOrder}>
							Continuar
						</Button>
					</footer>
				</section>
			)}

			{currentStep === 4 && (
				<section className='flex h-1/2 w-full items-center justify-center'>
					<SuccessCard />
				</section>
			)}
		</main>
	);
}

export default CartPage;
