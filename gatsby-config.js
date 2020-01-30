require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "Nick Baughman, Software Developer",
    author: "Nick Baughman",
    description: "Personal website for Nick Baughman",
    social: [
      {
        name: `Twitter`,
        url: `https://twitter.com/nbaugh1`,
      },
      {
        name: `GitHub`,
        url: `https://github.com/nbaugh1`,
      },
    ],
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: '/Users/Nick/Development/nbdevsite2/src/images',
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-theme-blog`,
      options: {
        // basePath defaults to `/`
        basePath: `/blog`,
        contentPath: '/Users/Nick/Development/nbdevsite2/content/posts',
        mdx: true
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
