module.exports = {
  siteMetadata: {
    title: `That's Farfetch'd!`,
    description: `Website built for the Pokemon podcast That's Farfetch'd!, where we talk about everything Pokemon, from casual to competitive`,
    author: `@its-dgreen`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-anchor`,
      options: {
        rss: 'https://anchor.fm/s/429c87a8/podcast/rss',
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`raleway`],
        display: 'swap',
      },
    },
    `gatsby-plugin-styled-components`,
  ],
};
