import './footer-nav-item.scss'

interface ServiceList {
	id: string
	title: string
	optionList: string[]
}

const FooterNavItem: React.FC<ServiceList> = ({ id, title, optionList }) => (
	<li className='footer-nav-item'>
		<h2>{title}</h2>
		<input type='checkbox' id={`footer-${id}`} />

		<label htmlFor={`footer-${id}`}>
			<h2>{title}</h2>
			<span>+</span>
			<span>-</span>
		</label>

		<ul>
			{optionList.map((option, index) => (
				<li key={index}>{option}</li>
			))}
		</ul>
	</li>
)

export default FooterNavItem
