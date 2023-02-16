import useShoppingCart from '~/hooks/use-shopping-cart';
import { cn } from '~/utils/cn';

function QuantityControl({ id, quantity }) {
	const { decrementQuantity, incrementQuantity, changeQuantity } = useShoppingCart();
	return (
		<section className='flex items-center justify-center text-xs font-bold'>
			<ControlButton onClick={() => decrementQuantity(id)} className='rounded-r-none'>
				-
			</ControlButton>
			<input
				type='number'
				min='1'
				max='20'
				value={quantity}
				onChange={e => changeQuantity(id, e.target.value)}
				className='flex h-6 w-[32px] appearance-none items-center justify-center border-y bg-neutral-100 px-1 text-center'
			/>
			<ControlButton className='rounded-l-none' onClick={() => incrementQuantity(id)}>
				+
			</ControlButton>
		</section>
	);
}

function ControlButton({ children, ...props }) {
	return (
		<button
			{...props}
			className={cn('h-6 w-6 rounded-md bg-neutral-500 text-white', props.className)}
		>
			{children}
		</button>
	);
}

export default QuantityControl;
