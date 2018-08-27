import React from 'react'
import PropTypes from 'prop-types'

import Helmet from 'react-helmet'
import { translate } from 'react-i18next'

const Impressum = ({
  data: {
    site: {
      siteMetadata: { title: siteTitle }
    }
  },
  t
}) => (
  <div>
    <Helmet>
      <title>
        {t('siteTitle')}
        {` | ${siteTitle}`}
      </title>
    </Helmet>

    <h1>{t('imprint')}</h1>
    <p>{t('responsible')}</p>

    <h2>{t('address')}</h2>
    <p>
      Medieninformatik
      <br />
      Richard Sternagel
      <br />
      Diplom Medien-Informatiker (DH)
      <br />
      Geleitsstraße 17
      <br />
      60599 Frankfurt
    </p>
    <h2>{t('contact')}</h2>
    <p>
      <span>{t('phone')}:</span> +49 176 / 217 466 40
      <br />
      <span>{t('mail')}:</span> rsternagel@posteo.de
      <br />
    </p>
    <h2>{t('vatId')}</h2>
    <p>DE310204622</p>

    <style jsx>{`
      span {
        color: #555;
        padding: 0 3px 0 0;
      }
    `}</style>
  </div>
)

Impressum.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired
      }).isRequired
    }).isRequired
  }).isRequired,
  t: PropTypes.func.isRequired
}

export default translate('imprint')(Impressum)

export const pageQuery = graphql`
  query ImpressumQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
