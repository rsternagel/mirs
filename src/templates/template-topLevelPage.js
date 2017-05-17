import React from 'react'
import Helmet from 'react-helmet'

const TopLevelPageRoute = ({
  data
}) => (
    <div>
      <Helmet title={`${data.site.siteMetadata.title}`}/>
      <div dangerouslySetInnerHTML={{ __html: page.html }} />
    </div>
)

export default TopLevelPageRoute

export const pageQuery = graphql`
  query TopLevelPageRoutePath($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
  }
`
