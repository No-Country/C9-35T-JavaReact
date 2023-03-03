import debounce from 'just-debounce-it';
import { useCallback, useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

import Product from '~/components/product/product';
import { ProductService } from '~/servicies/products.service';
import type { Product as ProductType } from '~/types';

function SearchPage() {
	const [searchParams, setSearchParams] = useSearchParams();
	const [products, setProducts] = useState<ProductType[]>([]);
	const query = searchParams.get('query');
	const noTermSearch = !query || query.trim().length === 0;

	useEffect(() => {
		noTermSearch
			? ProductService.getAll().then(setProducts)
			: ProductService.search(query).then(setProducts);
	}, [query]);

	const handleSearch = (value: string) => {
		if (value.trim().length === 0) {
			searchParams.delete('query');
			return setSearchParams(searchParams);
		}

		setSearchParams({ query: value });
	};

	const debouncedSearch = useCallback(debounce(handleSearch, 500, true), []);

	return (
		<div className='mb-12'>
			<header className='mx-auto w-full max-w-7xl p-6 xl:px-0'>
				<input
					onInput={e => debouncedSearch(e.currentTarget.value)}
					type='text'
					className='w-full rounded-md border border-neutral-300/80 px-6 py-3 text-lg shadow-sm outline-none'
					placeholder='Buscar'
				/>
			</header>
			{noTermSearch ? null : (
				<header className='mx-auto w-full max-w-7xl p-6 xl:px-0'>
					<h1 className='text-xl font-medium'>Búsqueda de: &quot;{query}&quot;</h1>
					<p className='text-sm font-medium text-neutral-500'>
						{products.length} {products.length > 1 ? 'resultados' : 'resultado'}
					</p>
				</header>
			)}
			<main className='mx-auto grid w-full max-w-7xl grid-cols-2 gap-6 p-6 lg:grid-cols-4 xl:grid-cols-4 xl:p-0'>
				{products.length ? (
					products.map(product => <Product key={product.id} {...product} />)
				) : (
					<>
						<p className='col-span-full text-center text-xl font-medium text-neutral-500'>
							No se encontraron resultados
						</p>
						<Link className='col-span-full text-center text-sm font-medium' to='/'>
							Regresar al inicio
						</Link>
					</>
				)}
			</main>
		</div>
	);
}

export default SearchPage;
