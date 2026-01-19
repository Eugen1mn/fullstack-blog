import { BlogListItem } from '@/components'
import './blog-list.scss'

export interface BlogAuthor {
	name: string
	avatar: string
}

export interface BlogCard {
	id: number
	image: string
	imageAlt: string
	title: string
	description: string
	tags: string[]
	author: BlogAuthor
	date: string
	views: number
	href: string
}

const blogCards: BlogCard[] = [
	{
		id: 1,
		image: '/images/seo-promotion.webp',
		imageAlt: 'Етапи просування сайту',
		title: 'ЕТАПИ ПРОСУВАННЯ САЙТУ',
		description:
			'У цій статті ми хочемо максимально описати весь процес пошукового просування. Ми...',
		tags: ['AI', 'Чеклісти', 'апдейти'],
		author: {
			name: 'Іванина Роман',
			avatar: '/images/avatar.png',
		},
		date: '21.11.2025',
		views: 9394,
		href: '/blog/etapy-prosuvannya-saitu',
	},

	{
		id: 2,
		image: '/images/seo-promotion.webp',
		imageAlt: 'Етапи просування сайту',
		title: 'ЕТАПИ ПРОСУВАННЯ САЙТУ',
		description:
			'У цій статті ми хочемо максимально описати весь процес пошукового просування. Ми...',
		tags: ['AI', 'Чеклісти', 'апдейти'],
		author: {
			name: 'Іванина Роман',
			avatar: '/images/avatar.png',
		},
		date: '21.11.2025',
		views: 9394,
		href: '/blog/etapy-prosuvannya-saitu',
	},
	{
		id: 3,
		image: '/images/seo-promotion.webp',
		imageAlt: 'Етапи просування сайту',
		title: 'ЕТАПИ ПРОСУВАННЯ САЙТУ',
		description:
			'У цій статті ми хочемо максимально описати весь процес пошукового просування. Ми...',
		tags: ['AI', 'Чеклісти', 'апдейти'],
		author: {
			name: 'Іванина Роман',
			avatar: '/images/avatar.png',
		},
		date: '21.11.2025',
		views: 9394,
		href: '/blog/etapy-prosuvannya-saitu',
	},
	{
		id: 4,
		image: '/images/seo-promotion.webp',
		imageAlt: 'Етапи просування сайту',
		title: 'ЕТАПИ ПРОСУВАННЯ САЙТУ',
		description:
			'У цій статті ми хочемо максимально описати весь процес пошукового просування. Ми...',
		tags: ['AI', 'Чеклісти', 'апдейти'],
		author: {
			name: 'Іванина Роман',
			avatar: '/images/avatar.png',
		},
		date: '21.11.2025',
		views: 9394,
		href: '/blog/etapy-prosuvannya-saitu',
	},
	{
		id: 5,
		image: '/images/seo-promotion.webp',
		imageAlt: 'Етапи просування сайту',
		title: 'ЕТАПИ ПРОСУВАННЯ САЙТУ',
		description:
			'У цій статті ми хочемо максимально описати весь процес пошукового просування. Ми...',
		tags: ['AI', 'Чеклісти', 'апдейти'],
		author: {
			name: 'Іванина Роман',
			avatar: '/images/avatar.png',
		},
		date: '21.11.2025',
		views: 9394,
		href: '/blog/etapy-prosuvannya-saitu',
	},
	{
		id: 6,
		image: '/images/seo-promotion.webp',
		imageAlt: 'Етапи просування сайту',
		title: 'ЕТАПИ ПРОСУВАННЯ САЙТУ',
		description:
			'У цій статті ми хочемо максимально описати весь процес пошукового просування. Ми...',
		tags: ['AI', 'Чеклісти', 'апдейти'],
		author: {
			name: 'Іванина Роман',
			avatar: '/images/avatar.png',
		},
		date: '21.11.2025',
		views: 9394,
		href: '/blog/etapy-prosuvannya-saitu',
	},
]

const BlogList = () => {
	return (
		<ul className={'blog-list'}>
			{blogCards.map(card => (
				<BlogListItem key={card.id} {...card} />
			))}
		</ul>
	)
}

export default BlogList
