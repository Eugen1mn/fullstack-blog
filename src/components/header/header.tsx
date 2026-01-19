import { Logo, NavList, PhoneNumber } from '@/components'
import Image from 'next/image'
import './header.scss'

const Header = () => {
	return (
		<header>
			<Logo />

			<NavList />

			<article>
				<PhoneNumber />

				<section>
					<span>EN</span>
					<Image
						src='/icons/chevron-down.svg'
						alt='chevron-down'
						width={20}
						height={20}
						priority
					/>
				</section>

				<section>
					<Image
						src='/icons/burger-menu.svg'
						alt='burger-menu'
						width={24}
						height={24}
						priority
					/>
				</section>
			</article>
		</header>
	)
}

export default Header
