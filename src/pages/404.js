import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

const FourOFour = ({
  data: { site: { siteMetadata: { title: siteTitle } } },
  data: { site: { siteMetadata: { domain } } },
}) => (
  <div>
    <Helmet title={`Fehler 404 | ${siteTitle}`}/>

    <h1>Sorry, diese Seite existiert nicht!</h1>
    <p>
      Die Seite oder der eingegebene Pfad (z.B.: {`www.${domain}/michGibtEsNicht`}),
      ist entweder falsch geschrieben oder nicht mehr verfügbar.
    </p>
    <p>
      :_(
    </p>
  </div>
)

FourOFour.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
        domain: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
}

export default FourOFour

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

