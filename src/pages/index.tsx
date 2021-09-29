import { StatCards } from 'components'
import { graphql } from 'gatsby'
import React from 'react'
import { CovidDataQuery } from 'types'

interface IIndexPageProps {
	data: CovidDataQuery
}

export default function IndexPage({ data }: IIndexPageProps) {
	const headerStats = Object.fromEntries(
		Object.entries(data.covidData!).filter(
			([key]) => key === 'deaths' || key === 'cases' || key === 'recovered',
		),
	)

	const sectionStats = Object.fromEntries(
		Object.entries(data.covidData!).filter(
			([key]) => key === 'active' || key === 'tests' || key === 'critical',
		),
	)

	return (
		<>
			<StatCards covidData={headerStats} />
			<StatCards isDark covidData={sectionStats} />
		</>
	)
}

export const query = graphql`
	query CovidData {
		covidData {
			deaths
			cases
			recovered
			active
			tests
			critical
		}
	}
`
