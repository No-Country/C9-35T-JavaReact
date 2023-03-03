import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import Product from '~/components/product/product';
import { ProductService } from '~/servicies/products.service';
import type { Product as ProductType } from '~/types';

function ProductsPage() {
	const [searchParams] = useSearchParams();
	const [products, setProducts] = useState<ProductType[]>([]);
	const category = searchParams.get('categoria');

	useEffect(() => {
		if (!category) return;
		ProductService.findByCategory(category).then(setProducts);
	}, [category]);

	return (
		<div className='mb-12'>
			<header className='mx-auto w-full max-w-7xl p-6 xl:px-0'>
				<h1 className='text-4xl font-black capitalize tracking-tight'>{category}</h1>
				<p className='text-sm font-medium text-neutral-500'>
					{products.length} {products.length > 1 ? 'resultados' : 'resultado'}
				</p>
			</header>
			<main className='mx-auto grid w-full max-w-7xl grid-cols-2 gap-6 p-6 lg:grid-cols-4 xl:grid-cols-4 xl:p-0'>
				{products.map(product => (
					<Product key={product.id} {...product} />
				))}
			</main>
		</div>
	);
}

export default ProductsPage;
