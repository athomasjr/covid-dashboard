import { StatCard } from 'components'
import React from 'react'
import { Maybe } from 'types'
import * as S from './styles'

interface IStatCardProps {
	covidData: { [k: string]: Maybe<number> | 'CovidData' }
	isDark?: boolean
}

export default function StatCards({
	covidData,
	isDark = false,
}: IStatCardProps) {
	return (
		<S.StatCards isDark={isDark}>
			{Object.keys(covidData).map(key => (
				<StatCard
					isDark={isDark}
					key={key}
					title={key}
					stat={covidData[key]!.toLocaleString()}
				/>
			))}
		</S.StatCards>
	)
}
