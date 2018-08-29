import React from 'react'
import PropTypes from 'prop-types'

import Helmet from 'react-helmet'
import { translate } from 'react-i18next'

const Datenschutz = ({
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

    <h1>{t('privacy')}</h1>
    <p>{t('privacyDesc1')}</p>
    <p>{t('privacyDesc2')}</p>
    <p>{t('privacyDesc3')}</p>

    <h2>{t('cookies')}</h2>
    <p>{t('cookiesDesc')}</p>
    <p>
      {t('cookiesYouCan')}{' '}
      <a href="http://www.aboutads.info/choices/">{t('cookiesUS')}</a>{' '}
      {t('cookiesOr')}{' '}
      <a href="http://www.youronlinechoices.com/uk/your-ad-choices/">
        {t('cookiesEU')}
      </a>
      {t('cookiesAdministrate')}
    </p>

    <h2>{t('dataAnalysis')}</h2>
    <p>{t('dataAnalysis1')}</p>
    <p>{t('dataAnalysis2')}</p>
    <p>{t('dataAnalysis3')}</p>
    <p>
      {t('dataAnalysisHereYouFind1')}{' '}
      <a href="https://clicky.com/terms/privacy">
        {t('dataAnalysisHereYouFind2')}
      </a>
      .
    </p>
    <p>
      {t('dataAnalysisHereYouFind3')}{' '}
      <a href="https://clicky.com/optout">{t('dataAnalysisHereYouFind4')}</a>.
    </p>
  </div>
)

Datenschutz.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired
      }).isRequired
    }).isRequired
  }).isRequired,
  t: PropTypes.func.isRequired
}

export default translate('privacy')(Datenschutz)

export const pageQuery = graphql`
  query DatenschutzQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
