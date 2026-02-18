import './latest-post-item.scss'
import Link from 'next/link'

export interface CategoryItem {
	title: string
	slug: string
	author: string
	date: string
}

const PopularPostItem: React.FC<CategoryItem> = ({
	slug,
	title,
	author,
	date,
}) => {
	return (
		<li className='latest-post-item'>
			<article>
				<Link href={`/blog/${slug}`}>
					<h3>{title}</h3>
				</Link>

				<p>
					<span>{author}</span>
					<time dateTime={date}>{date}</time>
				</p>
			</article>
		</li>
	)
}

export default PopularPostItem
