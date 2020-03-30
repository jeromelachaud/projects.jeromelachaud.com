require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `projects.jeromelachaud.com`,
    description: `Jerome Lachaud's personal and open source projects`,
    author: `@jeromelachaud`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-github-api`,
      options: {
        // token: required by the GitHub API
        token: process.env.GITHUB_API_TOKEN,

        // GraphQLquery: defaults to a search query
        graphQLQuery: `
          query ($number_of_repos: Int!) {
            user(login: "jeromelachaud") {
              pinnedItems(first: $number_of_repos) {
                totalCount
                edges {
                  node {
                    ... on Repository {
                      name
                      databaseId
                      description
                      homepageUrl
                      readme: object(expression:"master:README.md"){
                        ... on Blob{
                          text
                        }
                      }
                      repositoryTopics(last: $number_of_repos) {
                        nodes {
                          topic {
                            name
                          }
                        }
                      }
                      url
                    }
                  }
                }
              }
            }
          }
        `,
        // variables: defaults to variables needed for a search query
        variables: {
          number_of_repos: 6,
        },
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svg/,
        },
      },
    },
  ],
}
