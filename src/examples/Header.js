import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  {
    site {
      siteMetadata {
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
`

const Header = () => {
  const {
    site: {
      siteMetadata: {
        title,
        person: { name },
      },
    },
  } = useStaticQuery(getData)

  return (
    <div>
      {/* <p>title: {data.site.siteMetadata.title}</p>
      <p>name: {data.site.siteMetadata.person.name}</p> */}
      <h1>title: {title}</h1>
      <p>name: {name}</p>
    </div>
  )
}

export default Header
