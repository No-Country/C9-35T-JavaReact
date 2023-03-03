import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { ArrowLeftIcon } from '~/components/ui/icons/outline';
import { Route } from '~/constants';
import { useAuth } from '~/hooks/use-auth';
import { OrdersService } from '~/servicies/orders.service';
import type { Order } from '~/types';
import { currencyFormat } from '~/utils/currency-format';
import { getLocale } from '~/utils/get-locale';

import OrderStatus from './components/order-status';
import Table from './components/table';

const { locale } = getLocale();
const intlFormatDate = new Intl.DateTimeFormat(locale, {
	year: 'numeric',
	month: '2-digit',
	day: '2-digit',
});

function OrderPage() {
	const { user, token } = useAuth();
	const [orders, setOrders] = useState<Order[]>([]);

	useEffect(() => {
		if (!user || !token) return;

		OrdersService.getOrders(user.id, token)
			.then(orders =>
				orders.map((order: Order) => ({
					...order,
					total: order.products.reduce(
						(acc, product) =>
							acc +
							product.price *
								(order.items.find(item => item.id.productId === product.id)?.amount ?? 0),
						0
					),
				}))
			)
			.then(setOrders);
	}, [user, token]);

	return (
		<section className='mx-auto w-full max-w-7xl p-6 lg:p-0'>
			<header className='py-6'>
				<Link
					to={Route.PROFILE}
					className='flex items-center gap-1 text-sm font-medium text-neutral-500 hover:text-neutral-700'
				>
					<ArrowLeftIcon className='h-4 w-4' /> Regresar a mi perfil
				</Link>
			</header>
			<main className='my-6 w-full overflow-hidden'>
				<header>
					<h1 className='mb-6 text-2xl font-medium'>Mis pedidos</h1>
				</header>
				<section className='relative min-h-[512px] w-full overflow-x-auto'>
					<div className='absolute inset-0'>
						<Table>
							<Table.Head>
								<Table.HeadRow>No. de pedido</Table.HeadRow>
								<Table.HeadRow>Fecha</Table.HeadRow>
								<Table.HeadRow>Proveedor de envío</Table.HeadRow>
								<Table.HeadRow>Estatus</Table.HeadRow>
								<Table.HeadRow>Método de pago</Table.HeadRow>
								<Table.HeadRow>Total</Table.HeadRow>
							</Table.Head>
							<Table.Body>
								{orders.map(order => (
									<Table.Row key={order.id}>
										<Table.Cell>{order.id}</Table.Cell>
										<Table.Cell>{intlFormatDate.format(new Date(order.orderDate))}</Table.Cell>
										<Table.Cell>{order.shipmentProvider}</Table.Cell>
										<Table.Cell>
											<OrderStatus status={Number(order.state.id)}>
												{order.state.description}
											</OrderStatus>
										</Table.Cell>
										<Table.Cell>{order.paymentMethod}</Table.Cell>
										<Table.Cell>{currencyFormat(order.total)}</Table.Cell>
									</Table.Row>
								))}
							</Table.Body>
						</Table>
					</div>
				</section>
			</main>
		</section>
	);
}

export default OrderPage;
