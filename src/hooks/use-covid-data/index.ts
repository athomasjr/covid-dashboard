import { fetcher } from 'lib/util'
import useSWR from 'swr'

export interface GlobalData {
	deaths: number | undefined
	active: number | undefined
	recovered: number | undefined
}

export const useCovidData = () => {
	const { data: global } = useSWR<{ [key: string]: number }>(
		'https://disease.sh/v3/covid-19/all',
		fetcher,
	)

	console.log(global)

	const { data: countryData } = useSWR<{ [key: string]: number }>(
		`https://disease.sh/v3/covid-19/countries`,
	)

	const globalData = {
		deaths: global?.deaths,
		active: global?.active,
		recovered: global?.recovered,
	}

	return {
		globalData,
		countryData,
	}
}
