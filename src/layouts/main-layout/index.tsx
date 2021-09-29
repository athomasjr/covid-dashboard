import { Footer, Header } from 'components'
import React from 'react'
import * as S from './styles'

export default function MainLayout({
	children,
}: React.PropsWithChildren<{ children: React.ReactNode }>) {
	return (
		<S.MainLayout>
			<Header />
			<main>{children}</main>
			<Footer />
		</S.MainLayout>
	)
}
