import './nav-list-item.scss'
import Link from 'next/link'

export interface NavItem {
	title: string
	href: string
	isActive: boolean
}

interface NavListItemProps {
	navItem: NavItem
	handleNavClick: (href: string) => void
}

const NavListItem: React.FC<NavListItemProps> = ({
	navItem: { title, href, isActive },
	handleNavClick,
}) => {
	return (
		<li key={href} className='nav-list-item'>
			<Link
				href={href}
				className={isActive ? 'active' : ''}
				onClick={() => handleNavClick(href)}
			>
				{title}
			</Link>
		</li>
	)
}

export default NavListItem
