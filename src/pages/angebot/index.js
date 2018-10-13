/* eslint-disable  prettier/prettier */

import React from 'react'

import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import { translate } from 'react-i18next'
import { MdMailOutline } from 'react-icons/md/'

import Layout from '../../components/Layout'

const Angebot = ({
  data: {
    site: {
      siteMetadata: { title: siteTitle }
    }
  },
  location,
  t
}) => (
  <Layout location={location}>
    <div>
      <Helmet>
        <title>
          {t('siteTitle')}
          {` | ${siteTitle}`}
        </title>
      </Helmet>
      <h1>{t('offer')}</h1>
      <p>{t('youNeedSupport')}</p>
      <ul className="noBullet">
        <li>… {t('support1')}</li>
        <li>… {t('support2')}</li>
        <li>… {t('support3')}</li>
        <li>
          … {t('support5')}{' '}
          <Link to={'/kenntnisse/'}>{t('burningDesire')}</Link>?
        </li>
        <li>
          … {t('support4')} (<abbr title="Continuous Integration">CI</abbr>/
          <abbr title="Continuous Delivery">CD</abbr>
          )?
        </li>
      </ul>
      <p>{t('rightMan')}</p>
      <header>
        <h2>{t('myProfile')}</h2>
        <em>{t('webDev')}</em>
        <br />
        {t('fullStackYesButNo')}
      </header>
      <ul>
        <li>
          {t('profile1a')} (
          <a href="https://facebook.github.io/react-native/">React Native</a>,
          <a href="(https://angular.io/">Angular</a>,{' '}
          <a href="https://vuejs.org/">Vue</a>) {t('profile1b')} (
          <a href="https://facebook.github.io/react/">React</a>){' '}
          {t('profile1c')}
        </li>
        <li>
          {t('profile2a')} <a href="https://facebook.github.io/react/">React</a>{' '}
          / <a href="https://facebook.github.io/react-native/">React Native</a>{' '}
          {t('profile2b')}
          <a href="http://redux.js.org/">Redux</a>,{' '}
          <a href="http://graphql.org/">GraphQL</a>,{' '}
          <a href="https://webpack.js.org/">webpack</a>
          ).
        </li>
        <li>
          {t('profile3a')} <a href="https://www.scrum.org/">Scrum</a>){' '}
          {t('profile3b')}
        </li>
        <li>{t('profile4')}</li>
        <li>{t('profile5')}</li>
        <li>{t('profile6')}</li>
      </ul>
      <h2>
        {t('valueH1a')} <strong>{t('valueH1b')}</strong> {t('valueH1c')}
      </h2>
      <ul>
        <li>{t('value1')}</li>
        <li>{t('value2')}</li>
        <li>{t('value3')}</li>
        <li>{t('value4')}</li>
        <li>{t('value5')}</li>
        <li>{t('value6')}</li>
        <li>{t('value7')}</li>
      </ul>
      <h2>{t('letsDo')}</h2>
      <p className="contact">
        {t('giveMeYourChallenges')}
        <span>
          <MdMailOutline />{' '}
          <a href="mailto:rsternagel@posteo.de">rsternagel@posteo.de</a>
        </span>
      </p>
      <style jsx>{`
        header {
          margin-bottom: 1.5rem;
        }

        header strong {
          display: block;
        }

        ul {
          font-size: 90%;
        }

        ul.noBullet {
          font-size: 100%;
          list-style-type: none;
          margin-left: 1rem;
        }

        .contact {
          display: flex;
          flex-direction: column;
        }

        .contact a {
          padding-left: 5px;
        }

        .contact span:first-of-type {
          margin-top: 15px;
        }
      `}</style>
    </div>
  </Layout>
)

export default translate('offer')(Angebot)

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`
