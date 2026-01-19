import './footer.scss'

import { FooterNav, LangList, Logo, SocialList } from '@/components'

export default function Footer() {
	return (
		<footer className='footer'>
			<article>
				<section>
					<Logo />

					<SocialList />
				</section>

				<FooterNav />
			</article>

			<article>
				<LangList />
				<p className='footer-copy'>
					&copy; 2021-2025 «FULLSTACK-INNOVATIONS» Створення сайтів
				</p>
			</article>
		</footer>
	)
}
