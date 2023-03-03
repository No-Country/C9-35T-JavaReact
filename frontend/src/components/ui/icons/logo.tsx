import type { ComponentPropsWithoutRef } from 'react';

type Props = ComponentPropsWithoutRef<'svg'>;

function LogoIcon(props: Props) {
	return (
		<svg {...props} width='31' height='48' viewBox='0 0 31 48' fill='none'>
			<g clipPath='url(#clip0_290_204)'>
				<path
					d='M28.8415 47.6502L22.9328 26.1764C22.7214 25.4082 21.9224 24.9552 21.1481 25.1653C20.3741 25.3748 19.9175 26.1675 20.129 26.9359C20.1423 26.9846 20.1586 27.0333 20.1766 27.0792L28.3132 47.8231C28.3689 47.9652 28.5304 48.0357 28.6736 47.9804C28.8075 47.9288 28.8781 47.7848 28.8415 47.6502Z'
					fill='url(#paint0_linear_290_204)'
				/>
				<path
					d='M1.04989 47.823L9.11997 27.0572C9.39472 26.3501 9.03952 25.5562 8.32707 25.2836C7.61434 25.011 6.8139 25.3632 6.53943 26.07C6.52317 26.1121 6.50865 26.1561 6.49703 26.1982L0.521585 47.6501C0.480925 47.7974 0.567765 47.9495 0.715888 47.9901C0.854717 48.0282 0.998483 47.9536 1.04989 47.823Z'
					fill='url(#paint1_linear_290_204)'
				/>
				<path
					d='M15.0884 47.7366L16.2008 26.0758C16.24 25.3137 15.649 24.6645 14.881 24.6259C14.1131 24.587 13.4585 25.1733 13.4196 25.9355C13.417 25.9822 13.4175 26.0303 13.4196 26.0761L14.5319 47.7369C14.5398 47.8893 14.6705 48.0066 14.8241 47.9988C14.9682 47.9914 15.0809 47.8761 15.0884 47.7366Z'
					fill='url(#paint2_linear_290_204)'
				/>
				<path
					d='M7.1713 -8.49697e-05C5.1548 -8.49697e-05 0.000127792 -0.118224 0.000127792 12.9786C0.000127792 26.0757 6.46641 30.1686 16.4098 30.1686C26.3526 30.1686 30.3159 26.5587 30.3159 24.7649C30.3159 21.6607 23.6408 24.4889 19.7472 20.35C17.0964 17.5325 15.8626 -8.49697e-05 7.1713 -8.49697e-05Z'
					fill='#2B2F5C'
				/>
				<path
					d='M16.355 28.844C23.1082 28.844 27.4093 27.5318 29.7627 26.0965C28.3695 27.9248 24.2485 30.1686 16.4093 30.1686C11.076 30.1686 6.74442 28.9892 3.87287 25.8761C7.02498 28.0055 11.2889 28.844 16.355 28.844Z'
					fill='#242547'
				/>
				<path
					d='M8.43062 3.31802C6.81985 3.31802 2.70233 3.2238 2.70233 13.6852C2.70233 24.1467 8.26042 26.7656 16.2027 26.7656C24.145 26.7656 27.9053 26.0565 27.9053 24.6239C27.9053 22.7186 24.4642 25.1915 18.9587 20.9252C16.7104 19.1825 15.3732 3.31802 8.43062 3.31802Z'
					fill='#294774'
				/>
			</g>
			<defs>
				<linearGradient
					id='paint0_linear_290_204'
					x1='22.4686'
					y1='29.2363'
					x2='28.8991'
					y2='47.9131'
					gradientUnits='userSpaceOnUse'
				>
					<stop stopColor='#342516' />
					<stop offset='0.1927' stopColor='#402E1D' />
					<stop offset='0.4815' stopColor='#503A25' />
					<stop offset='0.7563' stopColor='#5A402A' />
					<stop offset='1' stopColor='#5D432B' />
				</linearGradient>
				<linearGradient
					id='paint1_linear_290_204'
					x1='7.31542'
					y1='28.1014'
					x2='0.837654'
					y2='47.785'
					gradientUnits='userSpaceOnUse'
				>
					<stop stopColor='#342516' />
					<stop offset='0.1927' stopColor='#402E1D' />
					<stop offset='0.4815' stopColor='#503A25' />
					<stop offset='0.7563' stopColor='#5A402A' />
					<stop offset='1' stopColor='#5D432B' />
				</linearGradient>
				<linearGradient
					id='paint2_linear_290_204'
					x1='14.8103'
					y1='47.9994'
					x2='14.8103'
					y2='24.6244'
					gradientUnits='userSpaceOnUse'
				>
					<stop stopColor='#5D432B' />
					<stop offset='0.2437' stopColor='#5A402A' />
					<stop offset='0.5185' stopColor='#503A25' />
					<stop offset='0.8073' stopColor='#402E1D' />
					<stop offset='1' stopColor='#342516' />
				</linearGradient>
				<clipPath id='clip0_290_204'>
					<rect width='30.3158' height='48' fill='white' transform='matrix(-1 0 0 1 30.3159 0)' />
				</clipPath>
			</defs>
		</svg>
	);
}

export default LogoIcon;
