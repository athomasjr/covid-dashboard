import styled from 'styled-components'
import { mediaQueries } from 'styles'

export const MainLayout = styled.div`
	height: 100vh;

	main {
		padding: 8px;
	}

	${mediaQueries.tabletUp} {
		main {
			padding: 20px;
			min-height: calc(100vh - 78.8px);
		}
	}
	${mediaQueries.laptopUp} {
		main {
			padding: 20px;
			min-height: calc(100vh - 300px);
		}
	}
`
