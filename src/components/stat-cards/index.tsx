import React from 'react'
import { GlobalData } from '../../hooks/use-covid-data/index'
import * as S from './styles'

interface IStatCardProps {
	covidData: GlobalData
	isDark?: boolean
}

export default function StatCards({
	covidData,
	isDark = false,
}: IStatCardProps) {
	return (
		<S.StatCards isDark={isDark}>
			{Object.keys(covidData).map(([key, value]) => console.log(key, value))}
		</S.StatCards>
	)
}
