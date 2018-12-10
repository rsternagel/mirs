/* eslint-disable react/no-danger */
/* eslint-disable react/prop-types */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable jsx-a11y/html-has-lang */

import React from 'react'

import { TypographyStyle } from 'react-typography'
import Helmet from 'react-helmet'

// https://github.com/gatsbyjs/gatsby/issues/4750
// XMLHttpRequest polyfill
import { XMLHttpRequest } from 'xmlhttprequest'

import typography from './utils/typography'
import favicon from './favicon.ico'

global.XMLHttpRequest = XMLHttpRequest

const Skeleton = ({ body, headComponents, postBodyComponents }) => {
  const head = Helmet.renderStatic()

  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {headComponents}
        <TypographyStyle typography={typography} />
        {head.title.toComponent()}
        {head.meta.toComponent()}
        {head.link.toComponent()}
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:400,600"
          rel="stylesheet"
        />
        <link rel="shortcut icon" type="image/x-icon" href={favicon} />
        <script>
          var clicky_site_ids = clicky_site_ids || [];
          clicky_site_ids.push(101043267);
        </script>
        <script async src="//static.getclicky.com/js" />
      </head>
      <body>
        <div id="___gatsby" dangerouslySetInnerHTML={{ __html: body }} />
        {postBodyComponents}
      </body>
    </html>
  )
}

export default Skeleton
