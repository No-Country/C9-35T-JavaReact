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
			<main className='p-6'>
				<section className='mb-6'>
					<h1 className='text-xl font-bold'>Ayuda</h1>
					<p className='text-sm font-medium text-neutral-500'>
						Aquí encontrarás las preguntas frecuentes y los reclamos más comunes.
					</p>
				</section>
				<Accordion
					defaultValue='preguntas-frecuentes'
					className='flex w-full max-w-lg flex-col gap-4'
				>
					<AccordionItem value='preguntas-frecuentes'>
						<AccordionTrigger>Preguntas frecuentes</AccordionTrigger>
						<AccordionContent>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae esse quo magnam ab,
							assumenda dolores aut rerum sequi. Ipsam aliquam nostrum qui ut suscipit, impedit
							molestiae consectetur eaque dolorem magnam voluptate enim tempora repellat cumque aut
							consequatur tenetur quasi reiciendis fugit, totam nam quae inventore. Neque optio
							incidunt eos vitae natus sequi id sapiente nostrum aspernatur fuga, inventore beatae
							mollitia!
						</AccordionContent>
					</AccordionItem>

					<AccordionItem value='reclamos'>
						<AccordionTrigger>Reclamos</AccordionTrigger>
						<AccordionContent>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi debitis quo a dolor ab
							quas iste officia voluptate assumenda. Ex iure neque nobis eligendi in possimus
							laboriosam, velit soluta repellat cumque rem, dolore corporis optio dolores fugiat
							harum atque! Voluptatem sunt ducimus vel esse numquam, aliquam cumque pariatur nihil
							modi quod ipsum odio maiores beatae unde sapiente! Assumenda facere sint voluptas
							dolor harum! Doloremque velit doloribus vitae hic, similique ipsa!
						</AccordionContent>
					</AccordionItem>

					<AccordionItem value='envios'>
						<AccordionTrigger>Envíos</AccordionTrigger>
						<AccordionContent>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor ipsam deserunt
							inventore mollitia vero doloremque animi, ea voluptas labore cumque explicabo,
							accusantium dicta eos nulla? Blanditiis asperiores, eligendi quaerat sit obcaecati,
							qui, culpa laudantium quasi eum consequatur dolorem porro laboriosam adipisci et nisi.
							Doloribus quibusdam officia placeat voluptates qui voluptatibus architecto sint
							nostrum debitis corrupti quae, modi, aspernatur laudantium necessitatibus aperiam
							optio nobis aliquam deserunt sapiente explicabo aliquid est consequuntur!
							Perspiciatis, adipisci perferendis. Veritatis obcaecati esse incidunt. Aspernatur
							veritatis et rerum numquam facere, deserunt quia, reprehenderit ut beatae asperiores
							perferendis ducimus architecto explicabo adipisci necessitatibus culpa, placeat fuga
							assumenda vitae.
						</AccordionContent>
					</AccordionItem>

					<AccordionItem value='contactanos'>
						<AccordionTrigger>Contáctanos</AccordionTrigger>
						<AccordionContent>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos odit vitae voluptas
							necessitatibus sunt officia velit nemo sed nisi expedita accusantium impedit pariatur
							perferendis reprehenderit ad asperiores, optio, hic earum?
						</AccordionContent>
					</AccordionItem>
				</Accordion>
			</main>
		</section>
	);
}

export default HelpPage;
