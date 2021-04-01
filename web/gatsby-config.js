module.exports = {
    siteMetadata: {
        title: `Von | Fitness & BJJ`,
        author:`Von`,
      },
    plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
        resolve: `gatsby-source-strapi`,
        options: {
            apiURL: process.env.STRAPI_URL,
            queryLimit: 1000, 
            contentTypes: [ 
                "services",
                "social-media",
                "categories"
            ],
            singleTypes: [
                "about",
                "cover-img",
                "pitch",
            ],
            /*
            loginData: {
                identifier: process.env.STRAPI_USER,
                password: process.env.STRAPI_PASS,
              },
            */
        },
      },
    {
        resolve: 'gatsby-plugin-zendesk-chat',
        options: {
        zendeskKey: process.env.ZEN_API_KEY,
        enableDuringDevelop: false, // Optional. Disables Zendesk chat widget when running Gatsby dev server. Defaults to true.
        },
    },
    ],
}