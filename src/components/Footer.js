import React from 'react'

import { translate } from 'react-i18next'
import { Link } from 'gatsby'

import LanguageSwitcher from './LanguageSwitcher'

import { s } from '../utils/breakpoints'

const Footer = ({ t, pathname }) => (
  <footer>
    <div className="wrapper">
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
          <Link to={t('imprintPath')}>{t('imprint')}</Link>
          <span className="separator">•</span>
          <Link to={t('privacyPath')}>{t('privacy')}</Link>
        </span>
        <LanguageSwitcher pathname={pathname} />
      </div>
    </div>

    <style jsx>{`
      footer {
        width: 100%;
        font-family: 'Open Sans', sans-serif;
        border-top: 1px solid #b0dda4;
        border-bottom: 1px solid #b0dda4;
        background-color: #ebf6e8;
        font-size: 80%;
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

      .wrapper {
        margin: 0 auto;
        max-width: 54rem;
        padding: 0.5rem 2.7rem;
      }

      .meta {
        display: flex;
        justify-content: space-evenly;
        text-shadow: 0 1px 0 rgba(255, 255, 255, 1);
      }

      .copyright em {
        font-style: normal;
        padding-left: 5px;
      }

      .separator {
        padding: 0 5px;
        color: #999;
      }

      /* Media Queries */

      @media (max-width: ${s}) {
        .meta {
          flex-direction: column;
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

export default translate()(Footer)
