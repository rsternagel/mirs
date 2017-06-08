import React from 'react'

const MainSkills = () => (
  <div>
    <dl className="skill-list">
      <dt className="category">Programmiersprachen /<br />Plattformen</dt>
      <dd className="details">
        <ul>
          <li className="high">JavaScript (inkl. ES6) (8 Jahre)</li>
          <li className="high">Node.js (3 Jahre)</li>
          <li className="middle">Python (3 Jahre)</li>
          <li className="middle">UNIX shell scripting (4 Jahre)</li>
          <li className="low">Java (5 Jahre)</li>
          <li className="low">PHP5 (3 Jahre)</li>
          <li className="low">XSLT (5 Jahre)</li>
        </ul>
      </dd>
    </dl>

    <dl className="skill-list">
      <dt className="category">Frameworks</dt>
      <dd className="details">
        <ul>
          <li className="middle">qooxdoo (JavaScript - Core-Team Mitglied)</li>
          <li className="middle">CherryPy (Python)</li>
          <li className="middle">Flask (Python)</li>
          <li className="middle">Django (Python)</li>
          <li className="low">AngularJS 1 (JS)</li>
          <li className="low">AngularJS 2 (JS)</li>
          <li className="low">Pustefix (Java)</li>
          <li className="low">Spring (Java)</li>
        </ul>
      </dd>
    </dl>

    <dl className="skill-list">
      <dt className="category">Libraries</dt>
      <dd className="details">
        <ul className="row">
          <li className="high">React,</li>
          <li className="high">Redux,</li>
          <li className="high">React Router,</li>
          <li className="high">Relay</li>
        </ul>
      </dd>
    </dl>

    <dl className="skill-list">
      <dt className="category">Datenbanken</dt>
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
          <li className="low">Apache,</li>
          <li className="low">Tomcat</li>
        </ul>
      </dd>
    </dl>


    <style jsx>{`
    `}</style>
  </div>
)

export default MainSkills


