import React from 'react'
import PropTypes from 'prop-types'

import 'sanitize.css/sanitize.css';

import Nav from '../components/Nav'
import Logo from '../components/Logo'
import Footer from '../components/Footer'

import {s, m} from '../utils/breakpoints'

const Layout = ({
  location,
  children
}) => (
  <div>
    <div className="container">
      <header className="masthead">
        <Logo />
        <Nav location={location} />
      </header>
      <section className="maincontent" role="main">
        {children()}
      </section>
    </div>
    <Footer />

    <style jsx>{`
      :global(body) {
        border-top: 6px solid #6aae6a;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      .container {
        max-width: 54rem;
        margin: 0 auto;
        padding: 1.5rem 2rem;
      }

      .masthead {
        display: flex;
        flex-direction: row;
      }

      .maincontent :global(h1) {
        font-family: Palatino, 'Palatino Linotype', Georgia, serif;
        font-size: 130%;
        border-bottom: 2px solid #6aae6a;
        display: inline-block;
        margin-bottom: 30px;
        padding: 0 5px;
      }

      .maincontent :global(h2) {
        font-family: 'Open Sans', sans-serif;
        font-size: 100%;
        margin-bottom: .7rem;
      }

      .maincontent {
        font-family: 'Open Sans', sans-serif;
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

      .maincontent :global(ul) {
        font-size: 95%;
      }

      @media (max-width: ${m}) {
        .masthead { display: block; }
      }
    `}</style>
  </div>
);

Layout.propTypes = {
  children: PropTypes.any,
  location: PropTypes.object,
  route: PropTypes.object,
}

export default Layout