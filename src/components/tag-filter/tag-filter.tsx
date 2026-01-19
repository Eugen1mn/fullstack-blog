import { TagFilterList } from '..'
import Image from 'next/image'
import './tag-filter.scss'

const TagFilter = () => {
	return (
		<article className={'tag-filter'}>
			<h2>Сортування за тегами:</h2>

			<TagFilterList />

			<button>
				<span>Розгорнути</span>
				<Image
					src='/icons/chevron-down.svg'
					alt='chevron-down'
					width={20}
					height={20}
					priority
				/>
			</button>
		</article>
	)
}

export default TagFilter
