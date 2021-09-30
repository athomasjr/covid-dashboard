import axios from 'axios'

export function isDomAvailable() {
	return (
		typeof window !== 'undefined' &&
		!!window.document &&
		!!window.document.createElement
	)
}

export const fetcher = (url: string) => axios.get(url).then(res => res.data)
