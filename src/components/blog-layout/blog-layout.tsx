import { BlogMain, BlogSidebar } from '@/components'

import './blog-layout.scss'

export default function BlogPage() {
	return (
		<article className={'blog-layout'}>
			<BlogMain />

			<BlogSidebar />
		</article>
	)
}
