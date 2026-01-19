import './popular-post-list.scss'
import { PopularPostItem } from '@/components'

export const popularPosts = [
	{
		id: 1,
		title: 'Просування і розкрутка бізнесу в інтернеті — ефект синергії',
		image: '/images/seo-promotion.webp',
		imageAlt: 'Просування і розкрутка бізнесу в інтернеті',
		slug: 'business-promotion',
	},
	{
		id: 2,
		title: 'Що таке ремаркетинг і як його налаштувати',
		image: '/images/seo-promotion.webp',
		imageAlt: 'Ремаркетинг та його налаштування',
		slug: 'remarketing',
	},
	{
		id: 3,
		title:
			'Як оцінити рейтинг SEO компаній за залишками в ТОПі ексклюзивних досягнень',
		image: '/images/seo-promotion.webp',
		imageAlt: 'Рейтинг SEO компаній',
		slug: 'seo-rating',
	},
]

const PopularPostList = () => {
	return (
		<ul className='popular-post-list'>
			{popularPosts.map(({ id, title, image, imageAlt, slug }) => (
				<PopularPostItem
					key={id}
					title={title}
					image={image}
					imageAlt={imageAlt}
					slug={slug}
				/>
			))}
		</ul>
	)
}

export default PopularPostList
