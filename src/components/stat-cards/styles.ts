import styled, { css, StyledProps } from 'styled-components'
import { mediaQueries } from 'styles'

interface IStatCardsProps {
	isDark?: boolean
}

const darkCards = ({ isDark, theme }: StyledProps<IStatCardsProps>) => {
	if (isDark) {
		return css`
			background: ${theme.colors.background.dark};
		`
	}
	return ''
}

export const StatCards = styled.div<IStatCardsProps>`
	display: flex;
	flex-direction: column;
	gap: 16px;
	margin-bottom: 16px;
	${darkCards}

	${mediaQueries.tabletUp} {
		flex-direction: row;
	}

	${mediaQueries.laptopUp} {
		width: 80%;
		margin: 0 auto;
		margin-top: -80px;
	}
	${mediaQueries.laptopXlUp} {
		width: 65%;
	}
`
