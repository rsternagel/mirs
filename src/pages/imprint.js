import { graphql } from 'gatsby'
import { translate } from 'react-i18next'

import Impressum from './impressum'

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
