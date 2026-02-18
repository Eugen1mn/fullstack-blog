import Image from 'next/image'
import './phone-number.scss'

const PhoneNumber = () => {
	return (
		<section className='phone-number'>
			<a href='tel:+1 (647) 283-2846'>+1 (647) 283-2846</a>
			<Image
				src='/icons/chevron-down.svg'
				alt='chevron-down'
				width={20}
				height={20}
				priority
			/>
		</section>
	)
}

export default PhoneNumber
