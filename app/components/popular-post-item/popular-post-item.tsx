import './popular-post-item.scss'
import Link from 'next/link'
import Image from 'next/image'

export interface CategoryItem {
	title: string
	slug: string
	image: string
	imageAlt: string
}

const PopularPostItem: React.FC<CategoryItem> = ({
	slug,
	title,
	image,
	imageAlt,
}) => {
	return (
		<li className='popular-post-item'>
			<article>
				<Link href={`/blog/${slug}`}>
					<Image src={image} alt={imageAlt} width={223} height={100} priority />

					<h3>{title}</h3>
				</Link>
			</article>
		</li>
	)
}

export default PopularPostItem
