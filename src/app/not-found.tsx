import Link from 'next/link'

export default function NotFound() {
	return (
		<div style={{ padding: 40 }}>
			<h1>Сторінка у розробці</h1>

			<Link href='/'>Повернутися на сторінку блогу</Link>
		</div>
	)
}
