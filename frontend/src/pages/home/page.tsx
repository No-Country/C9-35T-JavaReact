import { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

import Product from '~/components/product/product';
import { BedIcon, DiningIcon, LivingIcon, StudioIcon } from '~/components/ui/icons/outline';
import { Route } from '~/constants';
import { ProductService } from '~/servicies/products.service';
import type { Product as ProductType } from '~/types';

import CategoryItem from './components/category-item';

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
			<main className='flex h-full w-full flex-col items-center'>
				<header className='h-80 w-full overflow-hidden bg-neutral-200/70 lg:h-[512px]'></header>
				<section className='flex w-full max-w-7xl items-center gap-6 p-6'>
					<Link to={`${Route.PRODUCTS}?categoria=sala`}>
						<CategoryItem name='Sala' icon={LivingIcon} />
					</Link>
					<Link to={`${Route.PRODUCTS}?categoria=comedor`}>
						<CategoryItem name='Comedor' icon={DiningIcon} />
					</Link>
					<Link to={`${Route.PRODUCTS}?categoria=estudio`}>
						<CategoryItem name='Estudio' icon={StudioIcon} />
					</Link>
					<Link to={`${Route.PRODUCTS}?categoria=dormitorio`}>
						<CategoryItem name='Dormitorio' icon={BedIcon} />
					</Link>
				</section>
				<section className='mx-auto grid w-full max-w-7xl grid-cols-2 gap-6 p-6 lg:grid-cols-4 xl:grid-cols-4'>
					{products.length > 0 ? (
						products.map(product => <Product key={product.id} {...product} />)
					) : (
						<p className='text-neutral-500'>No hay productos</p>
					)}
				</section>
			</main>
			<Outlet />
		</>
	);
}

export default HomePage;
