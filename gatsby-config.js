require("dotenv").config({
	path: `.env.${process.env.NODE_ENV}`,
})
/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
	siteMetadata: {
		title: `telltale`,
		siteUrl: `https://www.yourdomain.tld`,
	},
	plugins: [
		"gatsby-plugin-emotion",
		"gatsby-plugin-netlify-cms",
		"gatsby-plugin-image",
		"gatsby-plugin-sharp",
		"gatsby-transformer-sharp",
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "images",
				path: `${__dirname}/src/images`,
			},
			__key: "images",
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "hero",
				path: `${__dirname}/hero-story`,
			},
			__key: "hero-story",
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "steps",
				path: `${__dirname}/steps`,
			},
			__key: "steps",
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "assets",
				path: `${__dirname}/static/assets`,
			},
		},
		{
			resolve: `gatsby-omni-font-loader`,
			options: {
				enableListener: true,
				preconnect: [
					`https://fonts.googleapis.com`,
					`https://fonts.gstatic.com`,
				],
				web: [
					{
						name: `Poppins`,
						file: `https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;800&display=swap`,
					},
					{
						name: `Abril Fatface`,
						file: `https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap`,
					},
					{
						name: `Philosopher`,
						file: `https://fonts.googleapis.com/css2?family=Philosopher:wght@700&display=swap`,
					},
				],
			},
		},
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					{
						resolve: `gatsby-remark-images`,
						options: {
							// It's important to specify the maxWidth (in pixels) of
							// the content container as this plugin uses this as the
							// base for generating different widths of each image.
							maxWidth: 590,
						},
					},
				],
			},
		},
	],
}
