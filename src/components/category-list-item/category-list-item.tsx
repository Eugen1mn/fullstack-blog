import './category-list-item.scss'
import Link from 'next/link'

export interface CategoryItem {
	title: string
	slug: string
}

const CategoryListItem: React.FC<CategoryItem> = ({ slug, title }) => {
	return (
		<li className='category-list-item'>
			<Link
				href={{
					pathname: '/blog',
					query: { category: slug },
				}}
			>
				{title}
			</Link>
		</li>
	)
}

export default CategoryListItem
