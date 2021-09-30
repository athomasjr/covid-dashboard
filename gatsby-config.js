const path = require('path')

module.exports = {
	plugins: [
		'gatsby-plugin-react-leaflet',
		{
			resolve: `gatsby-plugin-typescript`,
			options: {
				isTSX: true,
				allExtensions: true,
			},
		},
		'gatsby-plugin-eslint',

		{
			resolve: 'gatsby-plugin-root-import',
			options: {
				pages: path.join(__dirname, './src/pages'),
				components: path.join(__dirname, './src/components'),
				layouts: path.join(__dirname, './src/layouts'),
				types: path.join(__dirname, './src/types'),
				hooks: path.join(__dirname, './src/hooks'),
				styles: path.join(__dirname, './src/styles'),
				sections: path.join(__dirname, './src/sections'),
				lib: path.join(__dirname, './src/lib'),
			},
		},
	],
}
