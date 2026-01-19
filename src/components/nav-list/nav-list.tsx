'use client'

import { useState } from 'react'
import './nav-list.scss'
import NavListItem from '../nav-list-item/nav-list-item'

const initialLinks = [
	{ title: 'Послуги', href: '/services', isActive: false },
	{ title: 'Портфоліо', href: '/portfolio', isActive: false },
	{ title: 'Про нас', href: '/about', isActive: false },
	{ title: 'Партнерство', href: '/partnership', isActive: false },
	{ title: 'Блог', href: '/', isActive: true },
	{ title: 'Контакти', href: '/contact', isActive: false },
]

const NavList = () => {
	const [navList, setNavList] = useState(initialLinks)

	const handleNavClick = (href: string) => {
		setNavList(prev =>
			prev.map(link => ({
				...link,
				isActive: link.href === href,
			}))
		)
	}
	return (
		<nav className='nav-list'>
			<ul>
				{navList.map(item => (
					<NavListItem
						key={item.href}
						navItem={item}
						handleNavClick={handleNavClick}
					/>
				))}
			</ul>
		</nav>
	)
}

export default NavList
