import React from 'react'

import { translate } from 'react-i18next'

const Tools = ({ t }) => (
  <div>
    <dl className="skill-list">
      <dt className="category">{t('virtualization')}</dt>
      <dd className="details">
        <ul className="row">
          <li className="high">Docker</li>
        </ul>
      </dd>
    </dl>

    <dl className="skill-list">
      <dt className="category">{t('orchestration')}</dt>
      <dd className="details">
        <ul className="row">
          <li className="high">Docker Swarm mode,</li>
          <li className="high">Kubernetes</li>
        </ul>
      </dd>
    </dl>

    <dl className="skill-list">
      <dt className="category">
        <abbr title="Infrastructure/Container/Platform/Backend/Function/Software as a Service">
          *aaS
        </abbr>
      </dt>
      <dd className="details">
        <ul className="row">
          <li className="high">Google Cloud Platform,</li>
          <li className="high">Google Firebase,</li>
          <li className="high">VS App Center,</li>
          <li className="high">Netlify</li>
        </ul>
      </dd>
    </dl>

    <dl className="skill-list">
      <dt className="category">Dev</dt>
      <dd className="details">
        <ul className="row">
          <li className="high">VS Code,</li>
          <li className="high">(M)Vim,</li>
          <li className="middle">Xcode,</li>
          <li className="middle">Android Studio</li>
        </ul>
      </dd>
    </dl>

    <dl className="skill-list">
      <dt className="category">Testing</dt>
      <dd className="details">
        <ul className="row">
          <li className="high">Jest,</li>
          <li className="high">Enzyme,</li>
          {/* <li className="high">Cypress,</li> */}
          <li className="middle">Jasmine,</li>
          <li className="middle">Mocha</li>
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
          <li className="high">Snyk</li>
        </ul>
      </dd>
    </dl>

    <dl className="skill-list">
      <dt className="category">{t('doc')}</dt>
      <dd className="details">
        <ul className="row">
          <li className="high">Docusaurus,</li>
          <li className="middle">Sphinx (Python)</li>
        </ul>
      </dd>
    </dl>

    <dl className="skill-list">
      <dt className="category">Static Site Generator</dt>
      <dd className="details">
        <ul className="row">
          <li className="high">Gatsby (JS),</li>
          <li className="middle">Hugo (Go)</li>
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
          <li className="high">CircleCI,</li>
          <li className="high">Travis CI,</li>
          <li className="high">Greenkeeper,</li>
          <li className="middle">Jenkins</li>
          {/* <li className="middle">Jenkins X</li> */}
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
          <li className="middle">Mercurial</li>
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
          <li className="high">Babel</li>
        </ul>
      </dd>
    </dl>
  </div>
)

export default translate('skills')(Tools)
