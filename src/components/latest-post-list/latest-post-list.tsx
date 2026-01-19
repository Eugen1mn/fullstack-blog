import './latest-post-list.scss'
import { LatestPostItem } from '@/components'

export const latestPosts = [
	{
		id: 1,
		title: 'Вартість просування сайту у 2025 році',
		author: 'Іванина Роман',
		date: '2025-11-21',
		dateLabel: '21.11.2025',
		slug: 'seo-pricing-2025',
	},
	{
		id: 2,
		title: 'Просування медичних послуг',
		author: 'Іванина Роман',
		date: '2025-11-21',
		dateLabel: '21.11.2025',
		slug: 'medical-seo',
	},
	{
		id: 3,
		title: 'Просування сайтів у Німеччині',
		author: 'Іванина Роман',
		date: '2025-11-21',
		dateLabel: '21.11.2025',
		slug: 'seo-germany',
	},
	{
		id: 4,
		title: 'Стратегія просування інтернет-магазину',
		author: 'Іванина Роман',
		date: '2025-11-21',
		dateLabel: '21.11.2025',
		slug: 'ecommerce-strategy',
	},
]

const LatestPostList = () => {
	return (
		<ul className='latest-post-list'>
			{latestPosts.map(({ id, title, author, date, slug }) => (
				<LatestPostItem
					key={id}
					title={title}
					author={author}
					date={date}
					slug={slug}
				/>
			))}
		</ul>
	)
}

export default LatestPostList
