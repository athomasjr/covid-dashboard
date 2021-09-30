import { Map, StatCards } from 'components'
import { useCovidData } from 'hooks'
import React from 'react'

export default function IndexPage() {
	const { globalData } = useCovidData()

	const headerCardsData = Object.keys(globalData).filter(
		key => key === 'deaths' || key === 'recovered' || key === 'cases',
	)

	return (
		<>
			<StatCards covidData={headerCardsData} />
			{/* <StatCards isDark covidData={sectionStats} /> */}
			<Map />
		</>
	)
}
