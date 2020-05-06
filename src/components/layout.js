/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { graphql, useStaticQuery } from "gatsby"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import PropTypes from "prop-types"
import React from "react"
import Header from "./header"

// import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.description} />
      <div>
        <main>{children}</main>
        <footer>
          Built with
          {` `}
          <OutboundLink
            href="https://www.gatsbyjs.org"
            style={{
              color: "#333",
            }}
          >
            Gatsby
          </OutboundLink>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
