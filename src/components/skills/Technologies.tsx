import React from 'react'

const Technologies: React.FC = () => (
  <div>
    <dl className="skill-list">
      <dt className="category">Web Technologies</dt>
      <dd className="details">
        <ul className="row">
          <li className="high">HTML,</li>
          <li className="high">CSS (incl. SCSS),</li>
          <li className="high">SVG,</li>
          <li className="middle">XML</li>
        </ul>
      </dd>
    </dl>

    <dl className="skill-list">
      <dt className="category">Architecture (data)</dt>
      <dd className="details">
        <ul className="row">
          <li className="high">gRPC (incl. Protobuf),</li>
          <li className="high">GraphQL,</li>
          <li className="high">OAuth (incl. JWT),</li>
          <li className="high">REST</li>
        </ul>
      </dd>
    </dl>

    <dl className="skill-list">
      <dt className="category">Paradigms</dt>
      <dd className="details">
        <ul className="row">
          <li className="high">Responsive web design,</li>
          <li className="high">CSS Modules & CSS in JS</li>
        </ul>
      </dd>
    </dl>

    <dl className="skill-list">
      <dt className="category">Protocols</dt>
      <dd className="details">
        <ul className="row">
          <li className="high">HTTP,</li>
          <li className="high">MQTT,</li>
          <li className="middle">LDAP</li>
        </ul>
      </dd>
    </dl>

    <dl className="skill-list">
      <dt className="category">Schema Languages</dt>
      <dd className="details">
        <ul className="row">
          <li className="high">JSON Schema,</li>
          <li className="high">Relax NG</li>
        </ul>
      </dd>
    </dl>

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

export default Technologies
