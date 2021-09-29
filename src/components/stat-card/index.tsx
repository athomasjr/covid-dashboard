import React from 'react'
import * as S from './styles'

interface IStatCardProps {
	title: string
	stat: string
	isDark: boolean
}

export default function StatCard({ title, stat, isDark }: IStatCardProps) {
	return (
		<S.StatCard isDark={isDark}>
			<h2>{title}</h2>
			<S.Stat isDark={isDark}>{stat}</S.Stat>
		</S.StatCard>
	)
}
