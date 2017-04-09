import React from 'react'

class Tools extends React.Component {
  render () {

    return (
      <div>
        <dl className="skill-list">
          <dt className="category">Dev</dt>
          <dd className="details">
            <ul className="row">
              <li className="high">(M)Vim,</li>
              <li className="middle">Atom,</li>
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
              <li className="middle">Karma,</li>
              <li className="middle">Jasmine,</li>
              <li className="middle">Mocha,</li>
              <li className="low">Protractor,</li>
              <li className="low">JUnit,</li>
              <li className="low">Mockito,</li>
              <li className="low">Selenium</li>
            </ul>
          </dd>
        </dl>

        <dl className="skill-list">
          <dt className="category">Dokumentation</dt>
          <dd className="details">
            <ul className="row">
              <li className="high">Sphinx,</li>
              <li className="middle">JSDoc,</li>
              <li className="low">Maven Site</li>
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
              <li className="middle">Jenkins</li>
            </ul>
          </dd>
        </dl>

        <dl className="skill-list">
          <dt className="category"><abbr title="Distributed Version Control System">(D)VCS</abbr></dt>
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
              <li className="middle">Browserify,</li>
              <li className="middle">Gulp,</li>
              <li className="low">Grunt,</li>
              <li className="low">Maven</li>
            </ul>
          </dd>
        </dl>

        <dl className="skill-list">
          <dt className="category">Project Management</dt>
          <dd className="details">
            <ul className="row">
              <li className="high">GitHub,</li>
              <li className="middle">JIRA,</li>
              <li className="middle">Trello</li>
            </ul>
          </dd>
        </dl>

        <style jsx>{`
        `}</style>
      </div>
    )
  }
}

export default Tools



