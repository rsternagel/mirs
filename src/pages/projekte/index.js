import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import logoEue from '../../components/img/logo_eue.png'
import logoQx from '../../components/img/logo_qooxdoo.png'

class Projekte extends React.Component {
  render () {
    const site = this.props.data.site
    const siteTitle = site.siteMetadata.title

    return (
      <div>

        <Helmet title={`Projekte | ${siteTitle}`}/>

        <h1>Projekte</h1>

        <div className="project-list">
          <div className="project">
            <img src={logoEue} alt="1&1" />

            <dl>
              <dt>Projekt</dt>
              <dd><a href="http://control-center.1und1.de/">1&1 Control Center Access</a>
                {' '}(Bestandskundenportal)</dd>

              <dt>Firma</dt>
              <dd>1&1 Internet SE</dd>

              <dt>Aufgabengebiete</dt>
              <dd>Frontend & Tooling (JS)</dd>

              <dt>Zeitraum</dt>
              <dd><time>2015 - 2016</time></dd>
            </dl>
          </div>

          <div className="responsibility">
            <p>Über 8,7 Millionen 1&1-Bestandskunden von DSL und Mobile-Produkten
              können ihre Vertrags- und Leistungsdetails über das{' '}
              <strong>1&1 Control Center (Access)</strong>{' '}einsehen sowie
              diverse Einstellungen vornehmen (z.B. SIM-Karte bestellen).
            </p>
            <p>Als Teil des Frontend-Teams, welches diese Web-Applikation entwickelt hat, waren meine Aufgaben:</p>
            <ul>
              <li>Fachliche Umsetzung von User-Stories, u.a.:
                <ul>
                  <li>1&1 Multi-Card (Anfordern, Aktivieren, Sperren, Entsperren)</li>
                  <li>DSL-Störungsformular</li>
                  <li>Einbindung der Kontaktstrategie in Hilfe-Lasche mit Kontaktkanal- und Anliegenauswahl</li>
                  <li>Technikerterminvereinbarung mit Calendar-Widget</li>
                  <li>Verschiedene DSL und Mobile Accordions, um „Einstellungen & Services“ zu konfigurieren</li>
                </ul>
              </li>
              <li>Wartung/Modernisierung der Frontend-Toolchain:
                <ul>
                  <li>Einbindung von Browserify und Babel</li>
                  <li>Umstellung des Buildprozesses auf Node.js/npm-packages</li>
                  <li>Einbau von ESLint als Ersatz für JSCS und JSHint</li>
                </ul>
              </li>
              <li>Verantwortung der Jobs auf dem CI-Server (Jenkins):
                <ul>
                  <li>Job, der die App baut und Releases mittels Maven erstellt</li>
                  <li>Frontend Code Quality-Job, der Checks durchführt (Linting von JS und Sass-Code sowie JS Unit- und Integrationstests)</li>
                  <li>Frontend Security Job, der auf bekannte Schwachstellen in npm-Packages, die verwendet werden, hinweist</li>
                </ul>
              </li>
              <li>Verbesserung des Entwicklerflows:
                <ul>
                  <li>Migration von SVN zu Git</li>
                  <li>Einsatz von selbstgeschriebenen Git Hooks</li>
                </ul>
              </li>
              <li>Sonstiges:
                <ul>
                  <li>Überarbeitung der REST-Ressourcen mit dem Backend-Team</li>
                  <li>Erweiterung des Frontend-Review/Release-Prozesses</li>
                  <li>Dokumentation des CD-Build/Relase/Deployment-Prozesses</li>
                  <li>Analyse/Konzeption FE- Zielarchitektur mit  Migrationsplan</li>
                  <li>Schreiben von Unit/E2E-Tests (Karma, Jasmine, Protractor)</li>
                  <li>Leiten von Reviews und Retrospektiven</li>
                  <li>Releasemanager und Bugmanager in diversen Scrum-Sprints</li>
                  <li>Team-Einführung in Kanban (als Alt. für Scrum) sowie Kibana</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <hr />

        <div className="project-list">
          <div className="project">
            <img src={logoQx} alt="qooxdoo" />
            <dl>
              <dt>Projekt</dt>
              <dd><a href="http://www.qooxdoo.org/">qooxdoo</a><br />
                Open-Source Web-Framework</dd>

              <dt>Firma</dt>
              <dd>1&1 Internet AG</dd>

              <dt>Aufgabengebiete</dt>
              <dd>Core-Entwickler,<br />
                Toolchainverantwortlicher (JS/Python)</dd>

              <dt>Zeitraum</dt>
              <dd><time>2012 - 2015</time></dd>
            </dl>
          </div>

          <div className="responsibility">
            <p><strong>qooxdoo</strong> ist ein Open Source Web Framework zur Erstellung von RIAs,
              nativ-ähnlicher Mobile Apps und leichtgewichtiger Web-Anwendungen.
              Die komplette Entwicklung passiert auf <a href="https://github.com/qooxdoo/qooxdoo">GitHub</a>.</p>
            <p>Als Teil des Core-Teams, welches qooxdoo weiterentwickelt hat, waren meine Aufgaben:</p>
            <ul>
              <li>Core/Tooling-Entwickler:
                <ul>
                  <li>Hauptverantwortlich für das Tooling</li>
                  <li>Mitarbeit und Weiterentwicklung des JS-Framework-Codes auf GitHub, v.a. des IO-Bereiches (z.B. XHR/JSONP und REST)</li>
                </ul>
              </li>
              <li>Entwicklung einer JS-Toolchain (Grunt-Plugins/npm-Packages):
                <ul>
                  <li>Parsing von JS-Code inkl. Scope- und Dependency-Analyse</li>
                  <li>Minifizierung und Optimierung von JS Code</li>
                  <li>Preprocessing von Ressourcen (z.B. Bildern)</li>
                  <li>Verarbeitung qooxdoo-spezifischer Compiler-Hints</li>
                  <li>Pflege/Wartung der bestehenden Python Toolchain</li>
                  <li>Einführung von ESLint und custom-Lint-Regeln</li>
                  <li>Erstellung des Contribution-Catalog (für 3rd Party Libs)</li>
                  <li>UnitTests mittels nodeunit/Mocha/Chai</li>
                  <li>Dokumentation mittels Sphinx/JSDoc</li>
                  <li>Interaktion mit Open-Source Community (Pull Requests / Support via Stack Overflow und Mailingliste)</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <style jsx>{`
          .project-list  {
            display: flex;
          }

          .project,
          .responsibility {
            padding: 10px;
          }

          .project {
            width: 32%;
            margin-right: 20px;
            font-size: 85%;
          }

          .responsibility {
            width: 68%;
          }
        `}</style>
      </div>
    )
  }
}

Projekte.propTypes = {
  route: React.PropTypes.object,
}

export default Projekte

export const pageQuery = graphql`
query ProjectsQuery {
  site {
    siteMetadata {
      title
    }
  }
 }
`

