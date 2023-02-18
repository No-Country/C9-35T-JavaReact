import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import Product from '~/components/product/product';
import { ProductService } from '~/servicies/products.service';
import { Product as ProductType } from '~/types';

function HomePage() {
	const [products, setProducts] = useState<ProductType[]>([]);
	const [loadingProducts, setLoadingProducts] = useState(true);

	useEffect(() => {
		ProductService.getAll()
			.then(setProducts)
			.finally(() => setLoadingProducts(false));
	}, []);

	if (loadingProducts) {
		return <p>Loading...</p>;
	}

	return (
		<>
			<main className='flex h-full w-full flex-col items-center justify-center'>
				<header className='h-80 w-full overflow-hidden bg-neutral-200/70 lg:h-[512px]'></header>
				<h1 className='text-2xl font-bold'>Ecommerce store</h1>
				<p className='mb-8 font-medium text-neutral-500'>Home page</p>
				<section className='mx-auto grid w-full max-w-7xl grid-cols-2 gap-6 p-6 lg:grid-cols-4 xl:grid-cols-4 xl:p-0'>
					{products.map(product => (
						<Product key={product.id} {...product} />
					))}
				</section>
			</main>
			<Outlet />
		</>
	);
}

export default HomePage;
