import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../src/styles/theme'

const providerWrapper = ({ element }) => (
	<ThemeProvider theme={theme}>{element}</ThemeProvider>
)

export default providerWrapper
