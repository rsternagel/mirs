import { translate } from 'react-i18next'

import Angebot from '../angebot'

export default translate('offer')(Angebot)

export const pageQuery = graphql`
  query OfferQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
