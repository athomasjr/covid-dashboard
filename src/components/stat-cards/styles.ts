import styled, { css, StyledProps } from 'styled-components'
import { mediaQueries } from 'styles'

interface IStatCardsProps {
	isDark?: boolean
}

const darkCards = ({ isDark, theme }: StyledProps<IStatCardsProps>) => {
	if (isDark) {
		return css`
			background: ${theme.colors.background.dark};
			border-radius: 4px;
			margin: 0 auto;

			${mediaQueries.laptopUp} {
				height: 200px;
			}
		`
	}
	return null
}
const lightCards = ({ isDark }: StyledProps<IStatCardsProps>) => {
	if (!isDark) {
		return css`
			${mediaQueries.tabletUp} {
				margin-bottom: 84px;
			}

			${mediaQueries.laptopUp} {
				margin-bottom: 160px;
			}

			${mediaQueries.laptopUp} {
				width: 80%;
				margin: -80px auto 84px;
			}
		`
	}
	return null
}

export const StatCards = styled.div<IStatCardsProps>`
	display: flex;
	flex-direction: column;
	gap: 16px;
	margin-bottom: 16px;
	${darkCards}
	${lightCards}

	${mediaQueries.tabletUp} {
		flex-direction: row;
	}

	${mediaQueries.laptopXlUp} {
		width: 65%;
	}
`
