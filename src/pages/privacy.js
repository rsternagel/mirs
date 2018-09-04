import { graphql } from 'gatsby'
import { translate } from 'react-i18next'

import Datenschutz from './datenschutz'

export default translate('privacy')(Datenschutz)

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`
