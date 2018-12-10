import React from 'react'

import 'sanitize.css/sanitize.css'

import { I18nextProvider, translate } from 'react-i18next'

import Nav from './Nav'
import Logo from './Logo'
import Footer from './Footer'

// eslint-disable-next-line  no-unused-vars
import i18n from '../utils/i18n'
import { m } from '../utils/breakpoints'

const Layout = ({ children, location, t }) => (
  <I18nextProvider i18n={i18n}>
    <div lang={t('_lang')}>
      <div className="container">
        <header className="masthead">
          <Logo />
          <Nav pathname={location.pathname} />
        </header>
        <main className="maincontent">{children}</main>
      </div>
      <Footer pathname={location.pathname} />

      <style jsx>{`
        :global(body) {
          border-top: 6px solid #6aae6a;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          line-height: 1.6rem;
        }

        .container {
          max-width: 54rem;
          margin: 0 auto;
          padding: 1.5rem 2rem;
        }

        .masthead {
          display: flex;
          justify-content: space-between;
          flex-direction: row;
        }

        .maincontent :global(h1) {
          font-family: Palatino, 'Palatino Linotype', Georgia, serif;
          font-size: 130%;
          border-bottom: 2px solid #6aae6a;
          display: inline-block;
          margin: 0.67em 0 30px;
          padding: 0 5px;
        }

        .maincontent :global(h2) {
          font-family: 'Open Sans', sans-serif;
          font-size: 100%;
          margin-bottom: 0.7rem;
        }

        .maincontent {
          font-family: 'Open Sans', sans-serif;
        }

        .maincontent :global(ul) {
          font-size: 95%;
        }

        .maincontent :global(hr) {
          margin-bottom: 6rem;
        }

        .maincontent :global(a),
        .maincontent :global(a:visited) {
          text-decoration: none;
          padding-bottom: 1px;
          color: #1964ae;
        }

        .maincontent :global(a:hover) {
          background-color: #ffb;
        }

        .maincontent :global(a.nohover:hover) {
          background-color: transparent;
        }

        @media (max-width: ${m}) {
          .masthead {
            display: block;
          }
        }
      `}</style>
    </div>
  </I18nextProvider>
)

export default translate()(Layout)
