import { graphql } from 'gatsby'
import { translate } from 'react-i18next'

import Kentnisse from '../kenntnisse'

export default translate('skills')(Kentnisse)

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`
