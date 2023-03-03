import { NavLink } from 'react-router-dom';

import { ArrowLeftIcon } from '~/components/ui/icons/outline';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '~/pages/help/components/accordion';

function HelpPage() {
	return (
		<section className='grid h-full w-full grid-rows-[auto_1fr]'>
			<header className='w-full py-4 px-6'>
				<NavLink
					to='/'
					className='flex items-center gap-1 text-sm font-medium text-neutral-500 hover:text-neutral-700'
				>
					<ArrowLeftIcon className='h-4 w-4' /> Ir al inicio
				</NavLink>
			</header>
			<main className='mx-auto w-full max-w-6xl p-6'>
				<section className='mb-6'>
					<h1 className='text-xl font-bold'>Ayuda</h1>
					<p className='text-sm font-medium text-neutral-500'>
						Aquí encontrarás las preguntas frecuentes.
					</p>
				</section>
				<Accordion
					type='single'
					defaultValue='preguntas-frecuentes'
					className='flex flex-col gap-4'
				>
					<AccordionItem value='preguntas-frecuentes'>
						<AccordionTrigger>Cómo comprar</AccordionTrigger>
						<AccordionContent>
							Elegí, paga y recibí tu pedido sin moverte de tu casa. Comprar nuestros productos es
							muy fácil y rápido: Elige el producto que deseas comprar. Haz clic en el botón de
							"Agregar al carrito". Esto agregará el producto a tu carrito y te llevará al mismo.
							Puedes seguir agregando otros productos al carrito o sino haz clic en "Continuar".
							Completa tus datos. Ingresa la dirección a donde deseas recibir el producto. Luego haz
							clic en "Continuar". Elige el medio de pago. Una vez que hayas elegido el medio de
							pago, haz clic en "Finalizar compra". Una vez acreditado el pago, haremos el envío
							correspondiente de los productos que hayas comprado de la forma que hayas elegido.
							Ante cualquier duda no dejes de contactarnos.
						</AccordionContent>
					</AccordionItem>

					<AccordionItem value='reclamos'>
						<AccordionTrigger>Reclamos</AccordionTrigger>
						<AccordionContent>
							En Mueblerama priorizamos la satisfacción del cliente, por eso si el producto no
							cumple con tus expectativas, te devolvemos el dinero por el medio de pago utilizado.
							Los productos no poseen garantía. Si decidís cancelar tu compra, te reintegramos el
							total del valor del(los) producto(s) adquirido(s). No contemplamos el reintegro del
							valor del envío debido a que el servicio de transporte es tercerizado. Las
							cancelaciones y devoluciones, solo pueden ser realizadas durante los 5 días hábiles
							posteriores a recibir el(los) producto(s). Ante cualquier inconveniente contáctenos a
							la brevedad.
						</AccordionContent>
					</AccordionItem>

					<AccordionItem value='envios'>
						<AccordionTrigger>Envíos</AccordionTrigger>
						<AccordionContent>
							Se realizan en un plazo de 7 a 10 días hábiles aprox. Usted podrá seleccionar el medio
							de envío que desee. Además contamos con un servicio de embalaje para que tus muebles
							viajen protegidos. El embalaje cubre al mueble en su totalidad, sin perjuicio de que
							si se maltrata el producto con golpes, este pueda romperse dentro del paquete. El
							producto debe ser manipulado por manos expertas que le dispensen el cuidado de rigor
							que requiere. Si no recibe el(los) producto(s) en el tiempo estimado por favor
							contáctenos y resolveremos su problema.
						</AccordionContent>
					</AccordionItem>

					{/* <AccordionItem value='contactanos'>
						<AccordionTrigger>Contáctanos</AccordionTrigger>
						<AccordionContent>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos odit vitae voluptas
							necessitatibus sunt officia velit nemo sed nisi expedita accusantium impedit pariatur
							perferendis reprehenderit ad asperiores, optio, hic earum?
						</AccordionContent>
					</AccordionItem> */}
				</Accordion>
			</main>
		</section>
	);
}

export default HelpPage;
