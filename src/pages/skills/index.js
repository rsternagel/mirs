import { translate } from 'react-i18next'

import Kentnisse from '../kenntnisse'

export default translate('skills')(Kentnisse)

export const pageQuery = graphql`
  query SkillsQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
