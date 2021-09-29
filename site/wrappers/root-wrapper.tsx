import { WrapPageElementBrowserArgs } from 'gatsby'
import React from 'react'
import MainLayout from '../../src/layouts/main-layout'
import { GlobalStyle } from '../../src/styles/global-styles'

const rootWrapper = ({ element }: WrapPageElementBrowserArgs) => (
	<MainLayout>
		<GlobalStyle />
		{element}
	</MainLayout>
)

export default rootWrapper
