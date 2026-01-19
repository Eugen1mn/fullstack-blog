import Image from 'next/image'
import Link from 'next/link'
import './social-list.scss'

const SocialList = () => {
	return (
		<ul className={'social-list'} aria-label='Соціальні мережі'>
			<li>
				<Link href='#' aria-label='Behance'>
					<Image
						src='/icons/behance.svg'
						alt='Behance'
						width={18.76}
						height={11.73}
						priority
						className='social-icon--behance'
					/>
				</Link>
			</li>
			<li>
				<Link href='#' aria-label='Linkedin'>
					<Image
						src='/icons/linkedin.svg'
						alt='Linkedin'
						width={13}
						height={13}
						priority
						className='social-icon--linkedin'
					/>
				</Link>
			</li>
			<li>
				<Link href='#' aria-label='Twitter '>
					<Image
						src='/icons/twitter.svg'
						alt='Twitter '
						width={14}
						height={14}
						priority
						className='social-icon--twitter'
					/>
				</Link>
			</li>
			<li>
				<Link href='#' aria-label='Upwork'>
					<Image
						src='/icons/upwork.svg'
						alt='Upwork'
						width={18}
						height={13}
						priority
						className='social-icon--upwork'
					/>
				</Link>
			</li>
			<li>
				<Link href='#' aria-label='Dribble'>
					<Image
						src='/icons/dribble.svg'
						alt='Dribble'
						width={13}
						height={13}
						priority
						className='social-icon--dribble'
					/>
				</Link>
			</li>
			<li>
				<Link href='#' aria-label='git-hub'>
					<Image
						src='/icons/git-hub.svg'
						alt='git hub'
						width={12}
						height={13}
						priority
						className='social-icon--git-hub'
					/>
				</Link>
			</li>
		</ul>
	)
}

export default SocialList
