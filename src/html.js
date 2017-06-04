/* eslint-disable react/no-danger */
/* eslint-disable react/prop-types */
/* eslint-disable react/forbid-prop-types */

import flush from 'styled-jsx/server'

import React from 'react'

import { TypographyStyle } from 'react-typography'
import Helmet from 'react-helmet'

import typography from './utils/typography'

let styles = ''
if (process.env.NODE_ENV === `production`) {
  try {
    styles = require(`!raw-loader!../public/styles.css`)
  } catch (e) {
    console.log(e)
  }
}

const Skeleton = ({
  body,
  headComponents,
  postBodyComponents,
}) => {
  const head = Helmet.renderStatic()

  let css
  let cssStyleJsx
  if (process.env.NODE_ENV === `production`) {
    cssStyleJsx = flush()
    css = <style id="gatsby-inlined-css" dangerouslySetInnerHTML={{ __html: styles }} />
  }

  return (
    <html lang="de">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        {headComponents}
        <TypographyStyle typography={typography} />
        {css}
        {cssStyleJsx}
        {head.title.toComponent()}
        {head.meta.toComponent()}
        {head.link.toComponent()}
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600" rel="stylesheet" />
      </head>
      <body>
        <div id="___gatsby" dangerouslySetInnerHTML={{ __html: body }} />
        {postBodyComponents}
      </body>
    </html>
  )
}

export default Skeleton
