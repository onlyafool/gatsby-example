import React from "react"
import { StaticQuery, graphql } from "gatsby"

const ComponentName = () => (
  <StaticQuery
    query={graphql`
      {
        site {
          info: siteMetadata {
            title
            description
            author
            data
            person {
              name
              age
            }
          }
        }
      }
    `}
    render={data => <small>{data.site.info.description}</small>}
  ></StaticQuery>
)

export default ComponentName
