const axios = require('axios')

const COVID_DATA_NODE_TYPE = 'CovidData'

exports.onPreInit = () => console.log('Loaded gatsby-source-covid-data-plugin')

exports.sourceNodes = async ({
	actions,
	createContentDigest,
	createNodeId,
	getNodesByType,
}) => {
	const { createNode, touchNode, deleteNode } = actions
	const res = await axios.get(`https://disease.sh/v3/covid-19/all`)

	createNode({
		...res.data,
		id: createNodeId(`${COVID_DATA_NODE_TYPE}-1`),
		parent: null,
		children: [],
		internal: {
			type: COVID_DATA_NODE_TYPE,
			content: JSON.stringify(res.data),
			contentDigest: createContentDigest(res.data),
		},
	})

	console.log(res.data)
	return
}
