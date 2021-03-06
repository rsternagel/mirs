module.exports = {
  siteMetadata: {
    title: 'Medienformatik Richard Sternagel',
    domain: 'rsternagel.de'
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages'
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-jsx`,
    `gatsby-transformer-sharp`
  ]
}
