import React from 'react'
import PropTypes from 'prop-types'

import { translate } from 'react-i18next'

const Tools = ({ t }) => (
  <div>
    <dl className="skill-list">
      <dt className="category">Dev</dt>
      <dd className="details">
        <ul className="row">
          <li className="high">VS Code,</li>
          <li className="high">Atom/Nuclide,</li>
          <li className="high">(M)Vim,</li>
          <li className="middle">Xcode,</li>
          <li className="middle">Android Studio,</li>
          <li className="low">Eclipse</li>
        </ul>
      </dd>
    </dl>

    <dl className="skill-list">
      <dt className="category">Testing</dt>
      <dd className="details">
        <ul className="row">
          <li className="high">Jest,</li>
          <li className="high">Enzyme,</li>
          <li className="middle">Jasmine,</li>
          <li className="middle">Mocha,</li>
          <li className="low">Protractor,</li>
          <li className="low">Selenium</li>
        </ul>
      </dd>
    </dl>

    <dl className="skill-list">
      <dt className="category">{t('quality')}</dt>
      <dd className="details">
        <ul className="row">
          <li className="high">Prettier,</li>
          <li className="high">Flow,</li>
          <li className="high">ESLint,</li>
          <li className="high">stylelint</li>
        </ul>
      </dd>
    </dl>

    <dl className="skill-list">
      <dt className="category">Security</dt>
      <dd className="details">
        <ul className="row">
          <li className="high">nsp,</li>
          <li className="high">Snyk</li>
        </ul>
      </dd>
    </dl>

    <dl className="skill-list">
      <dt className="category">{t('doc')}</dt>
      <dd className="details">
        <ul className="row">
          <li className="high">documentation.js,</li>
          <li className="high">Gatsby (JS),</li>
          <li className="high">Sphinx (Python),</li>
          <li className="low">JSDoc</li>
        </ul>
      </dd>
    </dl>

    <dl className="skill-list">
      <dt className="category">Static Site Generator</dt>
      <dd className="details">
        <ul className="row">
          <li className="high">Gatsby (JS),</li>
          <li className="middle">Pelican (Python)</li>
        </ul>
      </dd>
    </dl>

    <dl className="skill-list">
      <dt className="category">
        <abbr title="Continuous Integration">CI</abbr>/
        <abbr title="Continuous Delivery">CD</abbr>
      </dt>
      <dd className="details">
        <ul className="row">
          <li className="high">Travis CI,</li>
          <li className="high">Greenkeeper,</li>
          <li className="middle">Jenkins</li>
        </ul>
      </dd>
    </dl>

    <dl className="skill-list">
      <dt className="category">
        <abbr title="Distributed Version Control System">(D)VCS</abbr>
      </dt>
      <dd className="details">
        <ul className="row">
          <li className="high">Git,</li>
          <li className="middle">Mercurial,</li>
          <li className="low">Subversion</li>
        </ul>
      </dd>
    </dl>

    <dl className="skill-list">
      <dt className="category">Build</dt>
      <dd className="details">
        <ul className="row">
          <li className="high">npm,</li>
          <li className="high">yarn,</li>
          <li className="high">webpack,</li>
          <li className="high">Babel,</li>
          <li className="middle">Gulp,</li>
          <li className="low">Grunt,</li>
          <li className="low">Maven</li>
        </ul>
      </dd>
    </dl>
  </div>
)

Tools.propTypes = {
  t: PropTypes.func.isRequired
}

export default translate('skills')(Tools)
