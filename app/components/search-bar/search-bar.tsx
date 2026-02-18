import './search-bar.scss'
import Image from 'next/image'

const SearchBar = () => {
	return (
		<form className='search-bar'>
			<input
				type='search'
				placeholder='Пошук по блогу'
				aria-label='Search blog'
				name='search'
			/>

			<button type='submit' aria-label='Search'>
				<Image
					src='/icons/move-right-white.svg'
					alt='arrow right'
					width={24}
					height={24}
					priority
				/>
			</button>
		</form>
	)
}

export default SearchBar
