import './pagination-menu.scss'

const arrNum = Array(5).fill('')

const PaginationMenu = () => {
	return (
		<article className={'pagination-menu'}>
			<button>
				&larr; <span>Попередня стаття</span>
			</button>
			<ul>
				{arrNum.map((i, index) => (
					<li key={index}>
						<button>{index + 1}</button>
					</li>
				))}
			</ul>
			<button>
				<span>Наступна стаття</span>
				&rarr;
			</button>
		</article>
	)
}

export default PaginationMenu
