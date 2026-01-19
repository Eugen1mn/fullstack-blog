import { TagFilterItem } from '@/components'
import './tag-filter-list.scss'

interface Tag {
	tag: string
	isActive: boolean
}

const tags: Tag[] = [
	{ tag: 'AI', isActive: false },
	{ tag: 'Чеклісти', isActive: false },
	{ tag: 'апдейти', isActive: false },
	{ tag: 'Закордонне SEO', isActive: true },
]

const BlogTagFilter = () => {
	return (
		<ul className={'tag-filter-list'}>
			{tags.map(({ tag, isActive }) => (
				<TagFilterItem key={tag} tag={tag} isActive={isActive} />
			))}
		</ul>
	)
}

export default BlogTagFilter
