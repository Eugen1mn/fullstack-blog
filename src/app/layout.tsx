import '@/styles/index.scss'
import { montserrat, russoOne } from '@/lib/fonts'

import { ContentWrapper, Header, Content, Footer } from '@/components'

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html
			lang='ru'
			data-theme='dark'
			className={`${montserrat.variable} ${russoOne.variable}`}
		>
			<body>
				<ContentWrapper>
					<Header />
					<Content>{children}</Content>
					<Footer />
				</ContentWrapper>
			</body>
		</html>
	)
}
