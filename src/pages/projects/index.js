import { translate } from 'react-i18next'

import Projekte from '../projekte'

export default translate('projects')(Projekte)

export const pageQuery = graphql`
  query ProjectsQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
