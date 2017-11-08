import React from 'react'
import Link from 'gatsby-link'

// import FaGithub from 'react-icons/lib/fa/github'
// import FaStackOverflow from 'react-icons/lib/fa/stack-overflow'

import { s } from '../utils/breakpoints'

const Footer = () => (
  <footer>
    <div className="meta">
      <span className="copyright">
        © {new Date().getFullYear()}
        <em>Richard Sternagel</em>
      </span>
      {/*
      <Link to={'/prinzipien/'}>Prinzipien</Link>
      <span className="seperator apart"></span>
      */}
      <span className="metaLinks">
        <Link to={'/impressum/'}>Impressum</Link>
        <span className="seperator">•</span>
        <Link to={'/datenschutz/'}>Datenschutz</Link>
      </span>
      {/*
      <span className="seperator apart"></span>
      <span className="icons">
        <a href="#"><FaGithub /></a>
        <a href="#"><FaStackOverflow /></a>
      </span>
      */}
    </div>

    <style jsx>{`
      footer {
        width: 100%;
        font-family: 'Open Sans', sans-serif;
        border-top: 1px solid #b0dda4;
        border-bottom: 1px solid #b0dda4;
        background-color: #ebf6e8;
        font-size: 80%;
        text-align: center;
        padding: 8px 0;
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

      .icons {
        font-size: 110%;
      }

      .meta {
        margin: 0 auto;
        text-shadow: 0 1px 0 rgba(255, 255, 255, 1);
      }

      .copyright {
        padding-right: 30px;
      }

      .copyright em {
        font-style: normal;
        padding-left: 5px;
      }

      .seperator.apart {
        padding: 0 20px 0 10px;
        color: #999;
      }

      .seperator {
        padding: 0 5px;
        color: #999;
      }

      /* Media Queries */

      @media (max-width: ${s}) {
        .copyright {
          display: block;
        }

        .icons {
          display: block;
        }
      }

      @media print {
        .metaLinks {
          display: none;
        }
      }
    `}</style>
  </footer>
)

export default Footer
