import styled from 'styled-components'
import { mediaQueries } from 'styles'

export const Header = styled.header`
	color: ${props => props.theme.colors.background.light};
	background: ${props => props.theme.colors.background.dark};
	padding: 12px;
	text-align: center;
	margin-bottom: 16px;

	${mediaQueries.laptopUp} {
		padding: 81px 96px;
		height: 200px;
		text-align: left;
	}
`
export const Title = styled.h1`
	font-family: ${props => props.theme.fontFamily.headline};

	${mediaQueries.smallOnly} {
		font-size: 2.4rem;
	} ;
`
