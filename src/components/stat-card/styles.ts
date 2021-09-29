import styled from 'styled-components'
import { mediaQueries } from 'styles'

interface IStatCardProps {
	isDark: boolean
}

export const StatCard = styled.div<IStatCardProps>`
	border-radius: 4px;
	margin: 0 auto;
	text-align: center;
	background: ${props =>
		props.isDark
			? props.theme.colors.background.dark
			: props.theme.colors.background.light};
	box-shadow: ${props => props.theme.colors.shadow};
	padding: 4px 8px;
	font-family: ${props => props.theme.fontFamily.headline};
	text-transform: capitalize;
	width: 80%;

	h2 {
		font-family: ${props => props.theme.fontFamily.headline};
		font-weight: 700;
	}

	h2 {
		color: ${props =>
			props.isDark
				? props.theme.colors.background.light
				: props.theme.colors.background.dark};
	}

	${mediaQueries.laptopUp} {
		width: 280px;
	}
`

export const Stat = styled.p<IStatCardProps>`
	font-family: ${props => props.theme.fontFamily.headline};
	font-weight: 700;
	color: ${props => props.theme.colors.highlight};
	font-size: 3rem;
`
