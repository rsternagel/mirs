import React from 'react'

// @ts-ignore
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

import Layout from '../components/Layout'

const FourOFour = ({
  data: {
    site: {
      siteMetadata: { title: siteTitle }
    }
  },
  data: {
    site: {
      siteMetadata: { domain }
    }
  },
  location
}: {
  data: { site: { siteMetadata: { domain: string; title: string } } }
  location: string
}) => (
  <Layout location={location}>
    <div>
      <Helmet>
        <title>
          Error 404
          {` | ${siteTitle}`}
        </title>
      </Helmet>

      <h1>Sorry, this page doesn't exist!</h1>
      <p>
        This page or the given path (e.g.: {`www.${domain}/iDontExist`}) is
        either misspelled or not available anymore.
      </p>
      <p>:_(</p>
    </div>
  </Layout>
)

export default FourOFour

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
        domain
      }
    }
  }
`
