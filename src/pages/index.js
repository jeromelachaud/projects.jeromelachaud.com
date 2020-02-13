import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import Main from "../components/main"
import SEO from "../components/seo"
import "./index.css"
import "./normalize.css"
// our only page is the main component provided with data
// from the graphQl query's result
export default function({ data }) {
  return (
    <Layout>
      <SEO title="projects.jeromelachaud.com" />
      <Main
        data={data.githubData.data.user.pinnedItems.edges.map(
          edge => edge.node
        )}
      />
    </Layout>
  )
}

// GraphQl query
export const query = graphql`
  query onGithub {
    githubData {
      data {
        user {
          pinnedItems {
            totalCount
            edges {
              node {
                name
                databaseId
                description
                homepageUrl
                url
                readme {
                  text
                }
                repositoryTopics {
                  nodes {
                    topic {
                      name
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
