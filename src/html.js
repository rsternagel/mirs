import React from 'react'
import { TypographyStyle } from 'react-typography'
import Helmet from 'react-helmet'

import typography from './utils/typography'

import flush from 'styled-jsx/server'

let styles = ''
if (process.env.NODE_ENV === `production`) {
  try {
    styles = require(`!raw-loader!../public/styles.css`)
  } catch (e) {
    console.log(e)
  }
}

export default class Skeleton extends React.Component {
  render () {
    const head = Helmet.rewind()

    let css
    let cssStyleJsx
    if (process.env.NODE_ENV === `production`) {
      cssStyleJsx = flush()
      css = <style id="gatsby-inlined-css" dangerouslySetInnerHTML={{ __html: styles }} />
    }

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          {this.props.headComponents}
          <TypographyStyle typography={typography} />
          {css}
          {cssStyleJsx}
          {head.title.toComponent()}
          {head.meta.toComponent()}
          {head.link.toComponent()}
          <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600" rel="stylesheet" />
        </head>
        <body>
          <div id="react-mount" dangerouslySetInnerHTML={{ __html: this.props.body }} />
          {this.props.postBodyComponents}
        </body>
      </html>
    )
  }
}
