import React from 'react'

import { translate } from 'react-i18next'

const MainSkills = ({ t }) => (
  <div>
    <dl className="skill-list">
      <dt className="category">
        {t('progLang')} /<br />
        {t('platforms')}
      </dt>
      <dd className="details">
        <ul>
          <li className="high">
            JavaScript ({t('incl')} ES6) ({t('9years')})
          </li>
          <li className="high">Node.js ({t('3years')})</li>
          <li className="middle">Python ({t('3years')})</li>
          <li className="middle">UNIX shell scripting ({t('4years')})</li>
          <li className="low">Java ({t('5years')})</li>
          <li className="low">PHP5 ({t('3years')})</li>
          <li className="low">XSLT ({t('5years')})</li>
        </ul>
      </dd>
    </dl>

    <dl className="skill-list">
      <dt className="category">Frameworks</dt>
      <dd className="details">
        <ul>
          <li className="middle">qooxdoo (JS - {t('formerCoreTeam')})</li>
          <li className="middle">Django (Python)</li>
          <li className="middle">Flask (Python)</li>
          <li className="low">Angular 1 & 2 (JS)</li>
          <li className="low">Spring (Java)</li>
          {/* <li className="low">Pustefix (Java)</li> */}
        </ul>
      </dd>
    </dl>

    <dl className="skill-list">
      <dt className="category">Libraries</dt>
      <dd className="details">
        <ul className="row">
          <li className="high">React,</li>
          <li className="high">React Native,</li>
          <li className="high">React Router,</li>
          <li className="high">Redux,</li>
          <li className="high">Redux Form,</li>
          <li className="high">Redux-Saga</li>
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
          <li className="low">SQLite</li>
        </ul>
      </dd>
    </dl>

    <dl className="skill-list">
      <dt className="category">Server</dt>
      <dd className="details">
        <ul className="row">
          <li className="middle">nginx,</li>
          <li className="low">Apache HTTP Server,</li>
          <li className="low">Apache Tomcat</li>
        </ul>
      </dd>
    </dl>
  </div>
)

export default translate('skills')(MainSkills)
