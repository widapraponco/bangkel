const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: `bangkel`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
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
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/ // See below to configure properly
        }
      }
    },
    {
      resolve: `gatsby-source-mysql`,
      options: {
        connectionDetails: {
          host: '156.67.222.169',
          user: 'u735046609_bangkel',
          password: 'Bangkel1234567890',
          database: 'u735046609_bangkel'
        },
        queries: [
          {
            statement: 'SELECT * FROM services',
            idFieldName: 'service_id',
            name: 'name'
          },
          {
            statement: 'SELECT * FROM prices',
            idFieldName: 'price_id',
            name: 'amount'
          }
        ]
      }
    },
    {
      resolve: `gatsby-source-faunadb`,
      options: {
        // The secret for the key you're using to connect to your Fauna database.
        // You can generate on of these in the "Security" tab of your Fauna Console.
        secret: "fnAD8WwroXACBV_yERKtjPo8eXEemhXZ3Opgs8k9",
        // The name of the index you want to query
        // You can create an index in the "Indexes" tab of your Fauna Console.
        index: `animalsByType`,
        // If your index requires arguments, you can specify them like this.
        // You can omit this property if your index doesn't need any.
        arguments: ["bird"],
        // This is the name under which your data will appear in Gatsby GraphQL queries
        // The following will create queries called `allBird` and `bird`.
        type: "bird",
        // If you need to limit the number of documents returned, you can specify a 
        // maximum number to read.
        size: 100
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
