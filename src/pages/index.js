import MdMailOutline from 'react-icons/lib/md/mail-outline'

import React from 'react'
import PropTypes from 'prop-types'

import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import { translate } from 'react-i18next'

import profilePic from '../components/img/profile_pic.jpg'
import { s, m } from '../utils/breakpoints'

const Homepage = ({
  data: {
    site: {
      siteMetadata: { title: siteTitle }
    }
  },
  t
}) => (
  <div>
    <Helmet>
      <title>{`${siteTitle}`}</title>
    </Helmet>

    <section className="content">
      <aside className="sidebar">
        <div className="container-img">
          <img
            src={profilePic}
            width="200"
            height="248"
            alt="Richard Sternagel"
          />
        </div>

        <div className="container-labels-contact">
          <div className="labels">
            <p>
              {t('labelsLine1')}
              <br />
              {t('labelsLine2')}
              <br />
              JS · React · React Native · Node.js
            </p>
          </div>

          <p className="contact">
            {t('reachMe')}
            <span>
              <MdMailOutline />{' '}
              <a href="mailto:rsternagel@posteo.de">rsternagel@posteo.de</a>
            </span>
          </p>
        </div>
      </aside>
      <section className="intro">
        <p>
          <span className="greeting">Hallo,</span>
          <br />
          ich bin <span className="name">Richard Sternagel</span>,<br />
          Web/App-Entwickler (IT-Freelancer) aus Frankfurt am Main.
        </p>

        <p>
          Ich bin Spezialist für die{' '}
          <Link to={'/angebot/'}>
            Entwicklung von Web/Mobile Apps, Infrastruktur und Tooling
          </Link>. Mein{' '}
          <Link to={'/kenntnisse/'}>praxiserprobtes Expertenwissen</Link> ist
          das Ergebnis meines Studiums (Medieninformatik auf Diplom) sowie
          meiner 11-jährigen <Link to={'/projekte/'}>Berufserfahrung</Link>.
        </p>

        <p>
          Mein Fokus liegt auf{' '}
          <a href="https://developer.mozilla.org/en/docs/Web/JavaScript">
            JavaScript
          </a>{' '}
          <span className="amp">&</span>{' '}
          <a href="https://nodejs.org/">Node.js</a>.
        </p>

        <p>
          Aktuell liegt mein Projektschwerpunkt auf{' '}
          <a href="https://facebook.github.io/react/">React</a> /{' '}
          <a href="https://facebook.github.io/react-native/">React Native</a>{' '}
          und dessen Ökosystem (d.h. <a href="http://redux.js.org/">Redux</a>,{' '}
          <a href="http://graphql.org/">GraphQL</a>,{' '}
          <a href="https://webpack.js.org/">webpack</a> etc.).
        </p>

        <p>
          Mein bevorzugtes Einsatzgebiet ist Frankfurt am Main und das
          umliegende Rhein-Main Gebiet.
        </p>

        <p>
          Ich bin ab <time>Anfang Juli 2018</time> verfügbar. Mein Wunschsetup
          wären 3 Tage die Woche - am besten remote.
        </p>
      </section>
    </section>
    <style jsx>{`
      .content {
        display: flex;
      }

      .sidebar {
        width: 35%;
        margin-right: 10px;
      }

      .container-img {
        max-width: 200px;
        min-width: 150px;
      }

      .container-img img {
        padding: 1px;
        border: 1px solid #ddd;
        border-radius: 5px;
        max-width: 100%;
        height: auto;
      }

      .labels p {
        font-size: 70%;
        margin-right: 3rem;
        text-align: center;
      }

      .contact {
        display: flex;
        flex-direction: column;
        font-size: 95%;
        padding: 10px;
      }

      .contact a {
        padding-left: 5px;
      }

      .greeting {
        display: block;
      }

      .intro,
      .sidebar {
        padding: 10px;
      }

      .intro {
        width: 65%;
      }

      :global(.amp) {
        font-family: Palatino, 'Palatino Linotype', serif;
        font-style: italic;
      }

      /* Media Queries */

      @media (max-width: ${m}) {
        .content {
          display: block;
        }

        .sidebar {
          display: flex;
          width: 100%;
        }

        .container-labels-contact {
          margin: 30px 0 0 50px;
        }

        .container-labels-contact .labels p {
          font-size: 80%;
        }

        .intro {
          width: 100%;
        }
      }

      @media (max-width: ${s}) {
        .content {
          display: block;
        }

        .sidebar {
          display: block;
          width: 100%;
        }

        .container-labels-contact {
          margin: 0;
        }

        .labels p {
          text-align: left;
        }

        .intro {
          width: 100%;
        }
      }
    `}</style>
  </div>
)

Homepage.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired
      }).isRequired
    }).isRequired
  }).isRequired,
  t: PropTypes.any
}

export default translate('root')(Homepage)

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
