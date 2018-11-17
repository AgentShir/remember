module.exports = {
    plugins: [
      {
        resolve: `gatsby-plugin-styled-components`,
        options: {}
      },
      {
        resolve: `gatsby-plugin-typography`,
        options: {
          pathToConfigModule: `src/utils/typography.js`
        }
      },
      {
        resolve: "gatsby-plugin-page-transitions",
        options: {
          transitionTime: 625
        }
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `images`,
          path: `src/assets`
        }
      },
      `gatsby-plugin-sharp`,
      `gatsby-transformer-sharp`
    ]
  };