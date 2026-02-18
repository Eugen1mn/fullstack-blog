import './blog-list-item.scss'
import Image from 'next/image'
import Link from 'next/link'

export interface BlogAuthor {
	name: string
	avatar: string
}

export interface BlogCard {
	id: number
	image: string
	imageAlt: string
	title: string
	description: string
	tags: string[]
	author: BlogAuthor
	date: string
	views: number
	href: string
}

const BlogList: React.FC<BlogCard> = card => {
	const {
		image,
		imageAlt,
		title,
		description,
		tags,
		author,
		date,
		views,
		href,
	} = card
	const { avatar, name } = author

	return (
		<li className={'blog-list-item'}>
			<article>
				<Image src={image} alt={imageAlt} width={350} height={120} priority />

				<h3>{title}</h3>
				<p>{description}</p>

				<ul>
					{tags.map(tag => (
						<li key={tag}>#{tag}</li>
					))}
				</ul>

				<section>
					<article>
						<Image src={avatar} alt={name} width={40} height={40} priority />
						<p>
							<span>{name}</span>
							<span>{date}</span>
						</p>
					</article>

					<article>
						<Image
							src={'/icons/eye.svg'}
							alt={'eye'}
							width={20}
							height={20}
							priority
						/>
						<span>{views}</span>
					</article>
				</section>

				<Link href={href}>
					<span>Докладніше</span>
					<Image
						src='/icons/move-right-white.svg'
						alt='arrow right'
						width={24}
						height={24}
						priority
					/>
				</Link>
			</article>
		</li>
	)
}

export default BlogList
