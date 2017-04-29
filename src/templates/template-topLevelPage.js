import React from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'

class TopLevelPageRoute extends React.Component {
  render () {
    const page = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const pageTitle = page.frontmatter.title

    console.log(this.props)

    return (
      <div>
        <Helmet title={`${pageTitle} | ${siteTitle}`}/>
        <div dangerouslySetInnerHTML={{ __html: page.html }} />
      </div>
    )
  }
}

export default TopLevelPageRoute

export const pageQuery = `
  query TopLevelPageRoutePath($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(slug: { eq: $slug }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
