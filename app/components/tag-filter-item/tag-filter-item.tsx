import './tag-filter-item.scss'

interface Tag {
	tag: string
	isActive: boolean
}

const BlogTagFilter: React.FC<Tag> = ({ tag, isActive }) => {
	return (
		<li className={`tag-filter-item ${isActive ? 'active' : ''}`}>
			<button>{`#${tag}`}</button>
		</li>
	)
}

export default BlogTagFilter
