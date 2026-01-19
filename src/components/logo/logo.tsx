import Link from 'next/link'
import './logo.scss'

const Logo = () => {
	return (
		<Link href='/' className='logo' aria-label='Go to homepage'>
			<img src='/images/logo.png' alt='Logo' />
		</Link>
	)
}

export default Logo
