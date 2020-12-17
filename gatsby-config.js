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
        name: `That's Farfetch'd!`,
        short_name: `TF!`,
        start_url: `/`,
        background_color: `#dce1e3`,
        theme_color: `#39603d`,
        display: `minimal-ui`,
        icon: `src/images/tf_favicon.png`, // This path is relative to the root of the site.
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
