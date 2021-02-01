/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    name: `Von`,
    title: `Von | Fitness & BJJ`,
    image: `https://res.cloudinary.com/dzu2mepwj/image/upload/v1612157823/6_von_3f54546cbe.png`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: "http://localhost:1337",
        contentTypes: [
          "post",
          "category",
          "cover-img",
        ],
        queryLimit: 1000,
      },
    },
  ],
}
