import React from 'react'

import { translate } from 'react-i18next'

const MainSkills = ({ t }) => (
  <div>
    <dl className="skill-list">
      <dt className="category">{t('progLang')}</dt>
      <dd className="details">
        <ul>
          <li className="high">
            JavaScript ({t('incl')} ES 20XX) ({t('11years')})
          </li>
          <li className="high">TypeScript ({t('1year')})</li>
          <li className="high">Node.js ({t('5years')})</li>
          <li className="high">Swift (6 {t('xmonths')})</li>
          <li className="high">Rust (3 {t('xmonths')})</li>
          <li className="high">Go (3 {t('xmonths')})</li>
          <li className="middle">Python ({t('4years')})</li>
          <li className="middle">Java SE ({t('5years')})</li>
          <li className="middle">UNIX shell scripting ({t('4years')})</li>
        </ul>
      </dd>
    </dl>

    <dl className="skill-list">
      <dt className="category">Frameworks</dt>
      <dd className="details">
        <ul>
          <li className="high">React Native</li>
          <li className="high">UIKit (iOS)</li>
          <li className="high">Koa & Express</li>
          <li className="middle">Angular</li>
          {/* <li className="middle">qooxdoo (JS - {t('formerCoreTeam')})</li> */}
          <li className="middle">Django (Python)</li>
          <li className="middle">Flask (Python)</li>
        </ul>
      </dd>
    </dl>

    <dl className="skill-list">
      <dt className="category">Libraries</dt>
      <dd className="details">
        <ul className="row">
          <li className="high">React,</li>
          <li className="high">Redux,</li>
          <li className="high">MobX,</li>
          <li className="high">React Navigation,</li>
          <li className="high">React Native SVG,</li>
          <li className="high">Redux-Saga</li>
        </ul>
      </dd>
    </dl>

    <dl className="skill-list">
      <dt className="category">
        <abbr title="Functional Programming">FP</abbr> &{' '}
        <abbr title="Reactive Programming">RP</abbr>
      </dt>
      <dd className="details">
        <ul className="row">
          <li className="high">RxJS,</li>
          <li className="high">RxSwift,</li>
          <li className="high">Ramda,</li>
          <li className="high">Lodash</li>
        </ul>
      </dd>
    </dl>

    <dl className="skill-list">
      <dt className="category">{t('databases')}</dt>
      <dd className="details">
        <ul className="row">
          <li className="middle">Redis,</li>
          <li className="middle">MongoDB,</li>
          <li className="middle">MySQL,</li>
          <li className="middle">SQLite</li>
        </ul>
      </dd>
    </dl>

    <dl className="skill-list">
      <dt className="category">Server</dt>
      <dd className="details">
        <ul className="row">
          <li className="middle">nginx,</li>
          <li className="middle">Apache HTTP Server</li>
        </ul>
      </dd>
    </dl>
  </div>
)

export default translate('skills')(MainSkills)
