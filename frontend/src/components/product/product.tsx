import { Link } from 'react-router-dom';

import { Route } from '~/constants';
import type { Product as ProductType } from '~/types';
import { currencyFormat } from '~/utils/currency-format';

function Product({ ...product }: ProductType) {
	return (
		<Link to={{ pathname: `${Route.PRODUCTS}/${product.id}` }} state={{ product }}>
			<article className='rounded-xl border border-black/5 bg-white p-2 shadow-sm'>
				<figure className='aspect-square rounded-lg bg-black/10'>
					<img
						src={`data:image/jpeg;base64,${product.image.dataBase64}`}
						alt={product.name}
						className='h-full w-full object-cover'
					/>
				</figure>
				<section className='py-2'>
					<header className='flex flex-col gap-1'>
						{product.stock > 0 ? (
							<span className='text-xs font-bold uppercase text-emerald-600'>
								{product.stock} en stock
							</span>
						) : (
							<span className='text-xs font-bold uppercase text-rose-600'>Agotado</span>
						)}
						<p className='truncate text-neutral-600 sm:text-sm'>{product.name}</p>
					</header>
					<section>
						<p className='text-lg font-medium'>{currencyFormat(product.price)}</p>
					</section>
				</section>
			</article>
		</Link>
	);
}

export default Product;
