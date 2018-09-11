import React from 'react'

import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import { translate } from 'react-i18next'

import Layout from '../components/Layout'

const Impressum = ({
  data: {
    site: {
      siteMetadata: { title: siteTitle }
    }
  },
  location,
  t
}) => (
  <Layout location={location}>
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
  </Layout>
)

export default translate('imprint')(Impressum)

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`
