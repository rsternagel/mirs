import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import logoEue from '../../components/img/logo_eue.png'
import logoQx from '../../components/img/logo_qooxdoo.png'

import { m } from '../../utils/breakpoints'

const Projekte = ({
  data: { site: { siteMetadata: { title: siteTitle } } }
}) => (
  <div>
    <Helmet>
      <title>{`Projekte | ${siteTitle}`}</title>
    </Helmet>

    <h1>Projekte</h1>

    <p>Hier sehen Sie meine Projektreferenzen:</p>

    <section className="project-list">
      <div className="project">
        <img
          src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOC4xLjEsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iRWJlbmVfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAxNzUuNiA2MiIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTc1LjYgNjIiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHBhdGggZD0iTTE0NC4yLDBjLTcsMC0xMy41LDIuMy0xOC44LDYuMkMxMjAuMSwyLjMsMTEzLjYsMCwxMDYuNiwwYy03LDAtMTMuNSwyLjMtMTguOCw2LjJDODIuNSwyLjMsNzYuMSwwLDY5LDANCgljLTcsMC0xMy41LDIuMy0xOC44LDYuMkM0NSwyLjMsMzguNSwwLDMxLjQsMEMxNC4xLDAsMCwxMy45LDAsMzFzMTQuMSwzMSwzMS40LDMxYzcsMCwxMy41LTIuMywxOC44LTYuMkM1NS41LDU5LjcsNjIsNjIsNjksNjINCgljNywwLDEzLjUtMi4zLDE4LjgtNi4yQzkzLDU5LjcsOTkuNSw2MiwxMDYuNiw2MmM3LDAsMTMuNS0yLjMsMTguOC02LjJjNS4yLDMuOSwxMS43LDYuMiwxOC44LDYuMmMxNy4zLDAsMzEuNC0xMy45LDMxLjQtMzENCglTMTYxLjUsMCwxNDQuMiwweiBNMTI1LjQsNDdjLTMuOC00LjMtNi4xLTkuOS02LjEtMTZjMC02LjEsMi4zLTExLjcsNi4xLTE2YzMuOCw0LjMsNi4xLDkuOSw2LjEsMTZDMTMxLjUsMzcuMSwxMjkuMiw0Mi43LDEyNS40LDQ3DQoJeiBNODcuOCw0N2MtMy44LTQuMy02LjEtOS45LTYuMS0xNmMwLTYuMSwyLjMtMTEuNyw2LjEtMTZjMy44LDQuMyw2LjEsOS45LDYuMSwxNkM5My45LDM3LjEsOTEuNiw0Mi43LDg3LjgsNDd6IE01MC4yLDQ3DQoJYy0zLjgtNC4zLTYuMS05LjktNi4xLTE2YzAtNi4xLDIuMy0xMS43LDYuMS0xNmMzLjgsNC4zLDYuMSw5LjksNi4xLDE2QzU2LjQsMzcuMSw1NCw0Mi43LDUwLjIsNDd6IE02LjUsMzENCgljMC0xMy41LDExLjItMjQuNSwyNC45LTI0LjVjNS4xLDAsOS45LDEuNSwxMy45LDQuMmMtNC44LDUuNC03LjcsMTIuNS03LjcsMjAuM2MwLDcuOCwyLjksMTQuOSw3LjcsMjAuM2MtNCwyLjYtOC43LDQuMi0xMy45LDQuMg0KCUMxNy43LDU1LjUsNi41LDQ0LjUsNi41LDMxeiBNNTUuMSw1MS4zYzQuOC01LjQsNy43LTEyLjUsNy43LTIwLjNjMC03LjgtMi45LTE0LjktNy43LTIwLjNjNC0yLjYsOC43LTQuMiwxMy45LTQuMg0KCXM5LjksMS41LDEzLjksNC4yYy00LjgsNS40LTcuOCwxMi41LTcuOCwyMC4zYzAsNy44LDIuOSwxNC45LDcuOCwyMC4zYy00LDIuNi04LjcsNC4yLTEzLjksNC4yQzYzLjksNTUuNSw1OS4xLDUzLjksNTUuMSw1MS4zeg0KCSBNOTIuNyw1MS4zYzQuOC01LjQsNy44LTEyLjUsNy44LTIwLjNjMC03LjgtMi45LTE0LjktNy44LTIwLjNjNC0yLjYsOC43LTQuMiwxMy45LTQuMnM5LjksMS41LDEzLjksNC4yDQoJYy00LjgsNS40LTcuOCwxMi41LTcuOCwyMC4zYzAsNy44LDIuOSwxNC45LDcuOCwyMC4zYy00LDIuNi04LjcsNC4yLTEzLjksNC4yUzk2LjcsNTMuOSw5Mi43LDUxLjN6IE0xNDQuMiw1NS41DQoJYy01LjEsMC05LjktMS41LTEzLjktNC4yYzQuOC01LjQsNy44LTEyLjUsNy44LTIwLjNjMC03LjgtMi45LTE0LjktNy44LTIwLjNjNC0yLjYsOC43LTQuMiwxMy45LTQuMmMxMy43LDAsMjQuOSwxMSwyNC45LDI0LjUNCglDMTY5LjEsNDQuNSwxNTcuOSw1NS41LDE0NC4yLDU1LjV6Ii8+DQo8L3N2Zz4NCg=="
          width="100"
          height="55"
          alt="Audi AG"
        />

        <dl>
          <dt>Projekt</dt>
          <dd>
            <a href="https://www.audi-boerse.de">
              Audi Gebrauchtwagenbörse - Onlinekauf (Checkout)
            </a>
          </dd>

          <dt>Firma</dt>
          <dd>Audi AG</dd>

          <dt>Aufgabengebiete</dt>
          <dd>Frontend (JS)</dd>

          <dt>Technologien im Frontend</dt>
          <dd>
            React, React Router, Redux, Redux Form, Redux-Saga, styled
            components, webpack
          </dd>

          <dt>Zeitraum</dt>
          <dd>
            <time>2017 (4 Monate / remote)</time>
          </dd>
        </dl>
      </div>

      <div className="responsibility">
        <p>
          Autorisierte Audi-Händler können über die offizielle
          Gebrauchtwagenbörse von Audi ihre Fahrzeuge einstellen und zum
          Onlinekauf freigeben. Potentielle Interessenten können den kompletten
          Autokauf (Entscheidung für Abholung oder Lieferung, Zulassung und
          Bezahlung/Finanzierung) in einem mehrstufigen Prozess online
          abwickeln.
        </p>
        <p>
          Als Teil des Frontend-Teams, welches den Checkout-Prozess als
          Web-Applikation entwickelt hat, waren meine Aufgaben:
        </p>
        <ul>
          <li>
            Fachliche Umsetzung von User-Stories, u.a.:
            <ul>
              <li>
                Implementierung diverser Views gemäß{' '}
                <a href="http://atomicdesign.bradfrost.com/">Atomic Design</a>{' '}
                und Responsive web design
              </li>
              <li>Implementierung diverser Atoms, Molecules und Organisms</li>
              <li>Implementierung des kompletten Fragecenters</li>
              <li>Erstellung von Formularen mit Redux Form</li>
              <li>Erstellung von Actions/Reducern mit Redux</li>
              <li>Validierung sämtlicher Formulare</li>
            </ul>
          </li>
          <li>
            Verbesserung des Entwicklerflows:
            <ul>
              <li>Einsatz von ESLint (integriert als Git Hook)</li>
              <li>Einsatz von Prettier (integriert als Git Hook)</li>
              <li>Dokumentation diverser Atoms, Molecules und Organisms</li>
            </ul>
          </li>
        </ul>
      </div>
    </section>

    <hr />

    <section className="project-list">
      <div className="project">
        <img src={logoEue} alt="1&1" />

        <dl>
          <dt>Projekt</dt>
          <dd>
            <a href="http://control-center.1und1.de/">
              1&1 Control Center Access
            </a>
            <br /> (Bestandskundenportal)
          </dd>

          <dt>Firma</dt>
          <dd>1&1 Internet SE</dd>

          <dt>Aufgabengebiete</dt>
          <dd>Frontend & Tooling (JS)</dd>

          <dt>Technologien im Frontend</dt>
          <dd>qooxdoo, React, Angular 1&2</dd>

          <dt>Zeitraum</dt>
          <dd>
            <time>2015 - 2016</time>
          </dd>
        </dl>
      </div>

      <div className="responsibility">
        <p>
          Über 8,7 Millionen 1&1-Bestandskunden von DSL und Mobile-Produkten
          können Ihre Vertrags- und Leistungsdetails über das{' '}
          <strong>1&1 Control Center (Access)</strong> einsehen sowie diverse
          Einstellungen vornehmen (z.B. SIM-Karte bestellen).
        </p>
        <p>
          Als Teil des Frontend-Teams, welches diese Web-Applikation entwickelt
          hat, waren meine Aufgaben:
        </p>
        <ul>
          <li>
            Fachliche Umsetzung von User-Stories, u.a.:
            <ul>
              <li>
                1&1 Multi-Card (Anfordern, Aktivieren, Sperren, Entsperren)
              </li>
              <li>DSL-Störungsformular</li>
              <li>
                Einbindung der Kontaktstrategie in Hilfe-Lasche mit
                Kontaktkanal- und Anliegenauswahl
              </li>
              <li>Technikerterminvereinbarung mit Calendar-Widget</li>
              <li>
                Verschiedene DSL und Mobile Accordions, um „Einstellungen &
                Services“ zu konfigurieren
              </li>
            </ul>
          </li>
          <li>
            Wartung/Modernisierung der Frontend-Toolchain:
            <ul>
              <li>Einbindung von Browserify und Babel</li>
              <li>Umstellung des Buildprozesses auf Node.js/npm-packages</li>
              <li>Einbau von ESLint als Ersatz für JSCS und JSHint</li>
            </ul>
          </li>
          <li>
            Verantwortung der Jobs auf dem CI-Server (Jenkins):
            <ul>
              <li>Job, der die App baut und Releases mittels Maven erstellt</li>
              <li>
                Frontend Code Quality-Job, der Checks durchführt (Linting von JS
                und SCSS-Code sowie JS Unit- und Integrationstests)
              </li>
              <li>
                Frontend Security Job, der auf bekannte Schwachstellen in
                npm-Packages, die verwendet werden, hinweist
              </li>
            </ul>
          </li>
          <li>
            Verbesserung des Entwicklerflows:
            <ul>
              <li>Migration von SVN zu Git</li>
              <li>Einsatz von selbstgeschriebenen Git Hooks</li>
            </ul>
          </li>
          <li>
            Sonstiges:
            <ul>
              <li>Überarbeitung der REST-Ressourcen mit dem Backend-Team</li>
              <li>Erweiterung des Frontend-Review/Release-Prozesses</li>
              <li>Dokumentation des CD-Build/Relase/Deployment-Prozesses</li>
              <li>Analyse/Konzeption FE- Zielarchitektur mit Migrationsplan</li>
              <li>Schreiben von Unit/E2E-Tests (Karma, Jasmine, Protractor)</li>
              <li>Leiten von Reviews und Retrospektiven</li>
              <li>Releasemanager und Bugmanager in diversen Scrum-Sprints</li>
              <li>
                Team-Einführung in Kanban (als Alt. für Scrum) sowie Kibana
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </section>

    <hr />

    <section className="project-list">
      <div className="project">
        <img src={logoQx} alt="qooxdoo" />
        <dl>
          <dt>Projekt</dt>
          <dd>
            <a href="http://www.qooxdoo.org/">qooxdoo</a>
            <br />
            Open-Source Web-Framework
          </dd>

          <dt>Firma</dt>
          <dd>1&1 Internet AG</dd>

          <dt>Aufgabengebiete</dt>
          <dd>
            Core-Entwickler,<br />
            Toolchainverantwortlicher (JS/Python)
          </dd>

          <dt>Zeitraum</dt>
          <dd>
            <time>2012 - 2015</time>
          </dd>
        </dl>
      </div>

      <div className="responsibility">
        <p>
          <strong>qooxdoo</strong> ist ein Open Source Web Framework zur
          Erstellung von RIAs, nativ-ähnlicher Mobile Apps und leichtgewichtiger
          Web-Anwendungen. Die komplette Entwicklung passiert auf{' '}
          <a href="https://github.com/qooxdoo/qooxdoo">GitHub</a>.
        </p>
        <p>
          Als Teil des Core-Teams, welches qooxdoo weiterentwickelt, waren meine
          Aufgaben:
        </p>
        <ul>
          <li>
            Core-Entwickler und verantwortlich für die (Python-)Toolchain:
            <ul>
              <li>
                Weiterentwicklung der Buildprozesse (Parsing, Preprocessing,
                Minifying etc)
              </li>
              <li>
                Weiterentwicklung des JS-Framework-Codes auf GitHub, v.a. des
                IO-Bereiches (z.B. XHR/JSONP und REST)
              </li>
            </ul>
          </li>
          <li>
            Konzeption und Entwicklung einer neuen JS-Toolchain (via
            Grunt-Plugins):
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
              <li>
                Interaktion mit Open-Source Community (Pull Requests / Support
                via Stack Overflow und Mailingliste)
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </section>

    <style jsx>{`
      .project-list {
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

      /* Media Queries */

      @media (max-width: ${m}) {
        .project-list {
          display: block;
        }

        .project {
          width: 100%;
        }

        .responsibility {
          width: 100%;
        }
      }
    `}</style>
  </div>
)

Projekte.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired
      }).isRequired
    }).isRequired
  }).isRequired
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
