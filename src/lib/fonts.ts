import { Montserrat, Russo_One } from 'next/font/google'

export const montserrat = Montserrat({
	subsets: ['latin', 'cyrillic'],
	variable: '--font-montserrat',
	display: 'swap',
})

export const russoOne = Russo_One({
	subsets: ['latin', 'cyrillic'],
	weight: '400',
	variable: '--font-russo',
	display: 'swap',
})
