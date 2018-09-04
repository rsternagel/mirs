import { graphql } from 'gatsby'
import { translate } from 'react-i18next'

import Angebot from '../angebot'

export default translate('offer')(Angebot)

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`
