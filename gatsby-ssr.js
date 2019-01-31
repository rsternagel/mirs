/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

import { renderToString } from 'react-dom/server'
import Backend from 'i18next-sync-fs-backend'

import i18n from './src/utils/i18n'

const replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => {
  i18n.use(Backend).init(
    {
      initImmediate: false,
      backend: {
        // when this site renders serverside we want to get the locales from the src folder
        loadPath: 'src/locales/{{lng}}/{{ns}}.json'
      }
    },
    () => {
      // load the common namespace
      i18n.loadNamespaces(['common'], () => {
        replaceBodyHTMLString(renderToString(bodyComponent))
      })
    }
  )
}

// eslint-disable-next-line import/prefer-default-export
export { replaceRenderer }
