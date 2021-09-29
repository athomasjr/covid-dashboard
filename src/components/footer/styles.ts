import styled from 'styled-components'
import { mediaQueries } from 'styles'

export const Footer = styled.footer`
	height: 100px;
	background: ${({ theme }) => theme.colors.background.dark};
	justify-content: center;
	align-items: center;
	display: flex;

	/* display: flex; */
	/* flex-direction: column; */
	/* justify-content: center; */
	/* padding: 0 0 0 81px; */

	${mediaQueries.smallOnly} {
		p {
			font-size: 1.3rem;
		}
	}
`
