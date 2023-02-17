import { FacebookIcon, InstagramIcon, WhatsAppIcon } from '~/components/ui/icons/social';

const data = {
	contact: {
		phone: '(011) 12341234',
		email: 'mueblerama@gmail.com',
	},
	social: {
		facebook: '/#facebook',
		instagram: '/#instagram',
		whatsapp: '/#whatsapp',
	},
};

function Footer() {
	return (
		<footer className='bg-neutral-500 p-6'>
			<div className='mx-auto grid w-full max-w-7xl grid-cols-[auto_1fr] grid-rows-1 gap-8'>
				<figure className='aspect-square h-full max-h-32 shrink-0 grow rounded-xl bg-white/20'></figure>
				<div className='flex flex-col justify-between gap-4 md:flex-row'>
					<section className='flex flex-col gap-1 text-neutral-50'>
						<p className='text-lg font-bold'>Contacto</p>
						<p className='text-sm'>{data.contact.phone}</p>
						<p className='text-sm'>{data.contact.email}</p>
					</section>

					<section className='flex items-center gap-4 text-neutral-50'>
						<a href={data.social.whatsapp} target='_blank' rel='noreferrer'>
							<WhatsAppIcon />
						</a>
						<a href={data.social.instagram} target='_blank' rel='noreferrer'>
							<InstagramIcon />
						</a>
						<a href={data.social.facebook} target='_blank' rel='noreferrer'>
							<FacebookIcon />
						</a>
					</section>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
