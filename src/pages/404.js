import React from 'react'

import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import { translate } from 'react-i18next'

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
  location,
  t
}) => (
  <Layout location={location}>
    <div>
      <Helmet>
        <title>
          {t('404-siteTitle')}
          {` | ${siteTitle}`}
        </title>
      </Helmet>

      <h1>{t('404-headline')}</h1>
      <p>
        {t('404-desc1')} {`www.${domain}/iDontExist`}
        {t('404-desc2')}
      </p>
      <p>:_(</p>
    </div>
  </Layout>
)

export default translate()(FourOFour)

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
