import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

const Impressum = ({
  data: { site: { siteMetadata: { title: siteTitle } } },
}) =>
  <div>
    <Helmet>
      <title>{`Impressum | ${siteTitle}`}</title>
    </Helmet>

    <h1>Impressum</h1>
    <p>Verantwortlich gemäß § 5 TMG:</p>

    <h2>Anschrift</h2>
    <p>
      Medieninformatik<br />
      Richard Sternagel<br />
      Diplom Medien-Informatiker (DH)<br />
      Geleitsstraße 17<br />
      60599 Frankfurt
    </p>
    <h2>Kontakt</h2>
    <p>
      <span>Telefon:</span> +49 176 / 217 466 40<br />
      <span>E-Mail:</span> rsternagel@posteo.de<br />
    </p>
    <h2>Umsatzsteuer-ID</h2>
    <p>DE310204622</p>

    <style jsx>{`
      span {
        color: #555;
        padding: 0 3px 0 0;
      }
    `}</style>
  </div>

Impressum.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
}

export default Impressum

export const pageQuery = graphql`
  query ImprintQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
