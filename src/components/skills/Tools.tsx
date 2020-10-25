import React from 'react'

const Tools: React.FC = () => (
  <div>
    <dl className="skill-list">
      <dt className="category">Containerization</dt>
      <dd className="details">
        <ul className="row">
          <li className="high">Docker</li>
        </ul>
      </dd>
    </dl>

    <dl className="skill-list">
      <dt className="category">Orchestration</dt>
      <dd className="details">
        <ul className="row">
          <li className="high">Docker Swarm mode,</li>
          <li className="high">Kubernetes (incl. Helm)</li>
        </ul>
      </dd>
    </dl>

    <dl className="skill-list">
      <dt className="category">
        <abbr title="Infrastructure as Code">IaC</abbr>
      </dt>
      <dd className="details">
        <ul className="row">
          <li className="high">Terraform</li>
        </ul>
      </dd>
    </dl>

    <dl className="skill-list">
      <dt className="category">
        <abbr title="Infrastructure / Container / Platform / Backend / Function / Software as a Service">
          *aaS
        </abbr>
      </dt>
      <dd className="details">
        <ul className="row">
          <li className="high">AWS,</li>
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
          <li className="high">Xcode,</li>
          <li className="middle">Android Studio</li>
        </ul>
      </dd>
    </dl>

    <dl className="skill-list">
      <dt className="category">Testing</dt>
      <dd className="details">
        <ul className="row">
          <li className="high">Jest,</li>
          <li className="high">Cypress,</li>
          <li className="high">Enzyme,</li>
          <li className="high">Quick (iOS),</li>
          <li className="high">Nimble (iOS),</li>
          <li className="middle">Jasmine,</li>
          <li className="middle">Mocha</li>
        </ul>
      </dd>
    </dl>

    <dl className="skill-list">
      <dt className="category">Quality Assurance</dt>
      <dd className="details">
        <ul className="row">
          <li className="high">Prettier,</li>
          <li className="high">Flow,</li>
          <li className="high">TSLint,</li>
          <li className="high">ESLint,</li>
          <li className="high">stylelint</li>
        </ul>
      </dd>
    </dl>

    <dl className="skill-list">
      <dt className="category">Documentation</dt>
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
          <li className="middle">Jenkins X</li>
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
      <dt className="category">Build (web)</dt>
      <dd className="details">
        <ul className="row">
          <li className="high">yarn,</li>
          <li className="high">npm,</li>
          <li className="high">webpack,</li>
          <li className="high">Babel</li>
        </ul>
      </dd>
    </dl>

    <dl className="skill-list">
      <dt className="category">Build (iOS)</dt>
      <dd className="details">
        <ul className="row">
          <li className="high">Swift Package Manager,</li>
          <li className="high">Carthage,</li>
          <li className="middle">CocoaPods</li>
        </ul>
      </dd>
    </dl>

    <dl className="skill-list">
      <dt className="category">Releases</dt>
      <dd className="details">
        <ul className="row">
          <li className="high">fastlane</li>
        </ul>
      </dd>
    </dl>
  </div>
)

export default Tools
