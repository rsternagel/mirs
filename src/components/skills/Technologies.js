import React from 'react'

import { translate } from 'react-i18next'

const Technologies = ({ t }) => (
  <div>
    <dl className="skill-list">
      <dt className="category">{t('webTechnologies')}</dt>
      <dd className="details">
        <ul className="row">
          <li className="high">HTML,</li>
          <li className="high">CSS ({t('incl')} SCSS & PostCSS),</li>
          <li className="high">SVG,</li>
          <li className="middle">XML,</li>
          <li className="low">XPath</li>
        </ul>
      </dd>
    </dl>

    <dl className="skill-list">
      <dt className="category">{t('architecture')}</dt>
      <dd className="details">
        <ul className="row">
          <li className="high">GraphQL,</li>
          <li className="high">REST,</li>
          <li className="low">SOA / Web Services</li>
        </ul>
      </dd>
    </dl>

    <dl className="skill-list">
      <dt className="category">{t('paradigms')}</dt>
      <dd className="details">
        <ul className="row">
          <li className="high">Responsive web design,</li>
          <li className="high">CSS Modules & CSS in JS</li>
        </ul>
      </dd>
    </dl>

    <dl className="skill-list">
      <dt className="category">{t('protocols')}</dt>
      <dd className="details">
        <ul className="row">
          <li className="high">HTTP,</li>
          <li className="low">LDAP,</li>
          <li className="low">SOAP,</li>
          <li className="low">XML-RPC,</li>
          <li className="low">JSON-RPC</li>
        </ul>
      </dd>
    </dl>

    <dl className="skill-list">
      <dt className="category">{t('schemaLanguages')}</dt>
      <dd className="details">
        <ul className="row">
          <li className="high">JSON Schema,</li>
          <li className="high">Relax NG,</li>
          <li className="low">XML Schema</li>
        </ul>
      </dd>
    </dl>

    {/*
    <dl className="skill-list">
      <dt className="category">{t('queryLanguages')}</dt>
      <dd className="details">
        <ul className="row">
          <li className="high">GraphQL,</li>
          <li className="low">SQL</li>
        </ul>
      </dd>
    </dl>
    */}

    <dl className="skill-list">
      <dt className="category">
        <abbr title="Domain Specific Language">DSL</abbr>
      </dt>
      <dd className="details">
        <ul className="row">
          <li className="high">Regular Expressions</li>
        </ul>
      </dd>
    </dl>
  </div>
)

export default translate('skills')(Technologies)
