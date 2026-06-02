import React from 'react'

const MainSkills: React.FC = () => (
  <div>
    <dl className="skill-list">
      <dt className="category">Programming Languages</dt>
      <dd className="details">
        <ul>
          <li className="high">Rust (2 years)</li>
          <li className="high">JavaScript (incl. ES 20XX) 15 years</li>
          <li className="high">TypeScript (6 years)</li>
          <li className="high">Node.js (9 years)</li>
          <li className="high">UNIX shell scripting (7 years)</li>
          <li className="middle">Swift (6 months)</li>
          <li className="middle">Go (3 months)</li>
          <li className="middle">Python (4 years)</li>
          <li className="middle">Java SE (5 years)</li>
        </ul>
      </dd>
    </dl>

    <dl className="skill-list">
      <dt className="category">Libraries Rust</dt>
      <dd className="details">
        <ul className="row">
          <li className="high">Axum,</li>
          <li className="high">Tokio,</li>
          <li className="high">hyper,</li>
          <li className="high">SQLx</li>
          <li className="high">tonic,</li>
          <li className="high">eyre,</li>
          <li className="high">Clap,</li>
          <li className="high">tracing</li>
        </ul>
      </dd>
    </dl>

    <dl className="skill-list">
      <dt className="category">Libraries React</dt>
      <dd className="details">
        <ul className="row">
          <li className="high">React,</li>
          <li className="high">Redux,</li>
          <li className="high">MobX,</li>
          <li className="high">React Navigation,</li>
          <li className="high">React Native SVG</li>
        </ul>
      </dd>
    </dl>

    <dl className="skill-list">
      <dt className="category">Frameworks</dt>
      <dd className="details">
        <ul>
          <li className="high">React Native</li>
          <li className="high">Koa & Express</li>
          <li className="middle">Angular</li>
          <li className="middle">Django (Python)</li>
          <li className="middle">Flask (Python)</li>
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
          <li className="high">Combine (iOS/macOS),</li>
          <li className="high">Ramda,</li>
          <li className="high">Lodash</li>
        </ul>
      </dd>
    </dl>

    <dl className="skill-list">
      <dt className="category">Databases</dt>
      <dd className="details">
        <ul className="row">
          <li className="high">PostegreSQL,</li>
          <li className="high">Turso,</li>
          <li className="high">SQLite,</li>
          <li className="middle">Redis,</li>
          <li className="middle">MongoDB,</li>
          <li className="middle">MySQL</li>
        </ul>
      </dd>
    </dl>

    <dl className="skill-list">
      <dt className="category">HTTP Server</dt>
      <dd className="details">
        <ul className="row">
          <li className="middle">nginx,</li>
          <li className="middle">Apache HTTP Server</li>
        </ul>
      </dd>
    </dl>

    <dl className="skill-list">
      <dt className="category">
        <abbr title="Message-oriented middleware">MOMs</abbr>
      </dt>
      <dd className="details">
        <ul className="row">
          <li className="high">NATS,</li>
          <li className="high">RMQTT,</li>
          <li className="middle">Mosquitto</li>
        </ul>
      </dd>
    </dl>
  </div>
)

export default MainSkills
