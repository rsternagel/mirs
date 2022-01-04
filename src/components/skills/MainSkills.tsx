import React from 'react'

const MainSkills: React.FC = () => (
  <div>
    <dl className="skill-list">
      <dt className="category">Programming Languages</dt>
      <dd className="details">
        <ul>
          <li className="high">JavaScript (incl. ES 20XX) 13 years</li>
          <li className="high">TypeScript (4 years)</li>
          <li className="high">Node.js (7 years)</li>
          <li className="high">Rust (1 year)</li>
          <li className="high">Swift (6 months)</li>
          <li className="middle">Go (3 months)</li>
          <li className="middle">Python (4 years)</li>
          <li className="middle">Java SE (5 5years)</li>
          <li className="middle">UNIX shell scripting (6 years)</li>
        </ul>
      </dd>
    </dl>

    <dl className="skill-list">
      <dt className="category">Frameworks</dt>
      <dd className="details">
        <ul>
          <li className="high">React Native</li>
          <li className="high">SwiftUI (iOS/macOS)</li>
          <li className="high">UIKit (iOS)</li>
          <li className="high">Koa & Express</li>
          <li className="middle">Angular</li>
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

export default MainSkills
