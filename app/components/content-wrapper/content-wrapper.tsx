import React, { ReactNode } from 'react'

import './content-wrapper.scss'

interface ContainerProps {
	children: ReactNode
}

const Container: React.FC<ContainerProps> = ({ children }) => {
	return <div className='content-wrapper'>{children}</div>
}

export default Container
