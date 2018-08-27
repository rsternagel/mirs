import { translate } from 'react-i18next'

import Datenschutz from './datenschutz'

export default translate('privacy')(Datenschutz)

export const pageQuery = graphql`
  query PrivacyQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
