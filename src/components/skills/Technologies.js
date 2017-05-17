import React from 'react'

const Technologies = () => (
  <div>

    <dl className="skill-list">
      <dt className="category">Webtechnologien</dt>
      <dd className="details">
        <ul className="row">
          <li className="high">HTML,</li>
          <li className="high">CSS & Sass/SCSS/PostCSS,</li>
          <li className="middle">XML,</li>
          <li className="middle">XUL,</li>
          <li className="low">XPath</li>
        </ul>
      </dd>
    </dl>

    <dl className="skill-list">
      <dt className="category">Architektur</dt>
      <dd className="details">
        <ul className="row">
          <li className="high">Rest,</li>
          <li className="low">SOA / Web Services</li>
        </ul>
      </dd>
    </dl>

    <dl className="skill-list">
      <dt className="category">Protokolle</dt>
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
      <dt className="category">Schemasprachen</dt>
      <dd className="details">
        <ul className="row">
          <li className="high">JSON Schema,</li>
          <li className="high">Relax NG,</li>
          <li className="low">XML Schema</li>
        </ul>
      </dd>
    </dl>

    <dl className="skill-list">
      <dt className="category">Query-Languages</dt>
      <dd className="details">
        <ul className="row">
          <li className="high">GraphQL,</li>
          <li className="low">SQL</li>
        </ul>
      </dd>
    </dl>

    <style jsx>{`
    `}</style>
  </div>
)

export default Technologies




