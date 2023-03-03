import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import Button from '~/components/ui/primitives/button';
import useShoppingCart from '~/hooks/use-shopping-cart';
import { ProductService } from '~/servicies/products.service';
import type { Product } from '~/types';
import { currencyFormat } from '~/utils/currency-format';

function ProductDetailPage() {
	const { id } = useParams<{ id: string }>();
	const [product, setProduct] = useState<Product>({} as Product);
	const [loading, setLoading] = useState(true);
	const navigate = useNavigate();
	const location = useLocation();
	const { addToCart } = useShoppingCart();

	useEffect(() => {
		if (!id) return;
		if (location.state != null && 'product' in location.state) {
			setProduct(location.state.product as Product);
			setLoading(false);
			return;
		}

		ProductService.findById(id)
			.then(setProduct)
			.catch(() => navigate('/'))
			.finally(() => setLoading(false));

		return () => {
			location.state = {};
		};
	}, []);

	if (loading) {
		return <p>Loading...</p>;
	}

	return (
		<div className='mx-auto w-full max-w-7xl grid-cols-6 gap-6 p-6 lg:grid'>
			<section className='col-span-3'>
				<figure className='aspect-square w-full rounded-lg bg-neutral-200'>
					<img
						src={`data:image/jpeg;base64,${product?.image?.dataBase64}`}
						alt={product.name}
						className='h-full w-full object-cover'
					/>
				</figure>
			</section>

			<section className='col-span-3 mt-6 flex flex-col gap-4'>
				<h1 className='text-3xl font-bold tracking-tight'>{product.name}</h1>
				<p className='text-3xl'>{currencyFormat(product.price)}</p>
				<Button className='w-full lg:w-auto lg:self-start' onClick={() => addToCart(product)}>
					Añadir al carrito
				</Button>
				<p className='text-sm font-medium text-neutral-500'>{product.description}</p>
			</section>
		</div>
	);
}

export default ProductDetailPage;
