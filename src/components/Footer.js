import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

class Footer extends React.Component {
  render () {
    return (
      <footer role="contentinfo">
        <p className="meta">
          <span className="copyright">Copyright © { new Date().getFullYear() } <em>Richard Sternagel</em></span>
          {/*
          <Link to={'/prinzipien/'}>Prinzipien</Link>
          <span className="seperator apart"></span>
          */}
          <div className="metaLinks">
            <Link to={'/impressum/'}>Impressum</Link>
            <span className="seperator">•</span>
            <Link to={'/datenschutz/'}>Datenschutz</Link>
          </div>
        </p>

        <style jsx>{`
          footer {
            width: 100%;
            font-family: 'Open Sans', sans-serif;

            /*
            border-top: 1px solid rgba(25, 100, 174, .2);
            background-color: rgba(25, 100, 174, .1);
            border-top: 1px solid hsla(105, 70%, 38%, .3);
            background-color: hsla(105, 80%, 38%, .1);
            */

            border-top: 1px solid #b0dda4;
            border-bottom: 1px solid #b0dda4;
            background-color: #ebf6e8;

            height: 45px;
            font-size: 80%;
          }

          footer :global(a),
          footer :global(a:visited) {
            padding: 0 5px;
            text-decoration: none;
            padding-bottom: 1px;
            border-radius: 5px;
            color: #1964ae;
          }

          footer :global(a:hover) {
            background-color: #ffb;
          }

          .meta {
            margin: 0 auto;
            padding-top: 9px;
            text-shadow: 0 1px 0 rgba(255,255,255, 1);
            text-align: center;
          }

          .copyright {
            padding-right: 30px;
          }

          .copyright em {
            font-style: normal;
            padding-left: 10px;
          }

          .metaLinks {
            display: inline;
          }

          .seperator.apart {
            padding: 0 20px 0 10px;
            color: #999;
          }

          .seperator {
            padding: 0 5px 0 5px;
            color: #999;
          }

        `}</style>
      </footer>
    )
  }
}

export default Footer
