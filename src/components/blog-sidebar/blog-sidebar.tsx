import {
	CategoryList,
	LatestPostList,
	PopularPostList,
	SearchBar,
} from '@/components'
import './blog-sidebar.scss'

const BlogSidebar = () => {
	return (
		<aside className='blog-sidebar'>
			<SearchBar />
			<article>
				<h2>Категорії блогу</h2>

				<CategoryList />
			</article>
			<article>
				<h2>Популярні статті</h2>

				<PopularPostList />
			</article>
			<article>
				<h2>НАЙНОВІШІ СТАТТІ</h2>

				<LatestPostList />
			</article>
		</aside>
	)
}

export default BlogSidebar
