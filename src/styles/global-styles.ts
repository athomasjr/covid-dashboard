import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

export const GlobalStyle = createGlobalStyle`
  ${reset}

*,
*::before,
*::after {
	box-sizing: inherit;
}


body,
html {
	overflow: hidden !important;
	overflow-y: auto !important;
}

html {
	box-sizing: border-box;
	font-size: 62.5%;
}

body {
	position: relative;
	background-color: ${props => props.theme.colors.background.light};
	line-height: 1.75;
	font-weight: 400;
	color: ${props => props.theme.colors.body.light};
  ${props => props.theme.fontFamily.body}
}

p {
	margin-bottom: 1.2rem;
	font-size: 1.8rem;
}

h1,
h2,
h3,
h4,
h5 {
	margin: 3rem 0 1.38rem;
	font-weight: 400;
	line-height: 1.3;
}

h1 {
	margin-top: 0;
	font-size: 3.2rem;
	${props => props.theme.fontFamily.headline}
	font-weight: 500;
}

h2 {
	font-size: 2.441rem;
		${props => props.theme.fontFamily.headline}

}

h3 {
	font-size: 1.953rem;
}

h4 {
	font-size: 1.563rem;
}

h5 {
	font-size: 1.25rem;
}

small,
.text_small {
	font-size: 0.8rem;
}

a {
	text-decoration: none;
	color: inherit;
}

/* body::-webkit-scrollbar {
	width: 12px;
	background: $color-highlight;
}

body::-webkit-scrollbar-thumb {
	background-color: $color-bg-1;
	border-radius: 20px;
	border: 3px solid $color-highlight;
}

* {
	scrollbar-width: thin;
	scrollbar-color: $color-bg-1 $color-highlight;
} */





`
