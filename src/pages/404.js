import React from 'react'
import PropTypes from 'prop-types'

import Helmet from 'react-helmet'
import { translate } from 'react-i18next'

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
  t
}) => (
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
)

FourOFour.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
        domain: PropTypes.string.isRequired
      }).isRequired
    }).isRequired
  }).isRequired,
  t: PropTypes.func.isRequired
}

export default translate()(FourOFour)

export const pageQuery = graphql`
  query FOFQuery {
    site {
      siteMetadata {
        title
        domain
      }
    }
  }
`
