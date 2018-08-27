/* eslint-disable  prettier/prettier */

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
          <span className="greeting">{t('hello')},</span>
          <br />
          {t('iam')} <span className="name">Richard Sternagel</span>,<br />
          {t('doingThisAndFrom')} {t('ffm')}.
        </p>

        <p>
          {t('expertFor')} <Link to={'/angebot/'}>{t('devOfWebMobApp')}</Link>.{' '}
          {t('my')} <Link to={'/kenntnisse/'}>{t('practicalExperience')}</Link>{' '}
          {t('basedOn')} <Link to={'/projekte/'}>{t('workExperience')}</Link>.
        </p>

        <p>
          {t('myFocus')}{' '}
          <a href="https://developer.mozilla.org/en/docs/Web/JavaScript">
            JavaScript
          </a>{' '}
          <span className="amp">&</span>{' '}
          <a href="https://nodejs.org/">Node.js</a>.
        </p>

        <p>
          {t('myEmphasisRightNow')}{' '}
          <a href="https://facebook.github.io/react-native/">React Native</a>{' '}
          {t('trainings')} <Link to={'/kenntnisse/'}>{t('burningDesire')}</Link>
          .
        </p>

        <p>{t('preferredLocation')}</p>

        <p>
          {t('availablePrefix')} <time>{t('availableDate')}</time>{' '}
          {t('availableAffix')}
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
  t: PropTypes.func.isRequired
}

export default translate('home')(Homepage)

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
