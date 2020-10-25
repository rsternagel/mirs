import React from 'react'

// @ts-ignore
import { graphql, PageProps } from 'gatsby'
import { Helmet } from 'react-helmet'

// @ts-ignore
import logoBfh from '../../components/img/logo_bfh_app.png'
// @ts-ignore
import logoChase from '../../components/img/logo_chase_app.png'
// @ts-ignore
import logoEue from '../../components/img/logo_eue.png'
// @ts-ignore
import logoPorsche from '../../components/img/logo_porsche.svg'
// @ts-ignore
import logoBentley from '../../components/img/logo_bentley.png'
// @ts-ignore
import logoQx from '../../components/img/logo_qooxdoo.png'
import Layout from '../../components/Layout'

import { m } from '../../utils/breakpoints'

const Projects: React.FC<PageProps> = ({
  data: {
    site: {
      siteMetadata: { title: siteTitle }
    }
  },
  location
}: {
  data: { site: { siteMetadata: { title: string } } }
  location: Location
}) => (
  <Layout location={location}>
    <div>
      <Helmet>
        <title>
          Projects
          {` | ${siteTitle}`}
        </title>
      </Helmet>
      <h1>Projects</h1>
      <p>Here you see selected work references:</p>

      <section className="project-list-item">
        <div className="project">
          <img src={logoPorsche} width="208" height="106" alt="Porsche AG" />
          <dl>
            <dt>Project</dt>
            <dd>
              Porsche Taycan <br /> (Infotainment)
            </dd>
            <dt>Company</dt>
            <dd>Porsche AG</dd>
            <dt>Responsibilities</dt>
            <dd>
              Web apps <br /> Node services <br /> CLI-Tools
            </dd>
            <dt>Frontend Technologies</dt>
            <dd>TypeScript, Angular 6-10, RxJS, SVG, MapBox, Jest, webpack</dd>
            <dt>Backend Technologies</dt>
            <dd>
              Node.js, Koa, GraphQL, <br /> Docker, MQTT, Rust
            </dd>
            <dt>Period of Time</dt>
            <dd>
              <time>2019-2020 (ongoing)</time>
            </dd>
          </dl>
        </div>

        <div className="responsibility">
          <p>
            The in-vehicle infotainment of the{' '}
            <a href="https://www.porsche.com/international/models/taycan/taycan-models/">
              Porsche Taycan
            </a>{' '}
            is composed of core functionalities (e.g. navigation, voice
            assistant), which can be extended through optional services and apps
            (e.g. Apple Music, Weather). You can interact with the touchscreen
            in the center console or the co-driver display.
          </p>
          <p>My responsibilities were:</p>
          <ul>
            <li>
              App (front- & backend) development:
              <ul>
                <li>Serving content as Node services or Angular Apps</li>
                <li>
                  Integration of 3rd party content via REST & GraphQL APIs
                </li>
                <li>Exploration of PoC-Apps by use of MapBox and SVG</li>
                <li>
                  Realization of individual adaptions for all international
                  markets
                </li>
                <li>Increase of test coverage with unit tests</li>
              </ul>
            </li>
            <li>
              Miscellaneous:
              <ul>
                <li>
                  Development and maintenance of CLI tools (Rust & TypeScript)
                </li>
                <li>
                  App-Concept for the realization of distraction free driving
                </li>
                <li>Documentation of workflows and hardware-specifics</li>
              </ul>
            </li>
          </ul>
        </div>
      </section>
      <hr />
      <section className="project-list-item">
        <div className="project">
          <img src={logoBentley} width="116" height="58" alt="Bentley" />
          <dl>
            <dt>Project</dt>
            <dd>
              Bentley Portal <br /> (specific Website)
            </dd>
            <dt>Company</dt>
            <dd>Bentley Motors Ltd.</dd>
            <dt>Responsibilities</dt>
            <dd>Cloud native Web apps</dd>
            <dt>Frontend Technologies</dt>
            <dd>
              TypeScript, Angular 6-10,
              <br /> NgRx, Sass, Cypress (e2e)
            </dd>
            <dt>Backend Technologies</dt>
            <dd>
              AWS, Terraform, Kubernetes,
              <br />
              Helm, Docker, Jenkins
            </dd>
            <dt>Period of Time</dt>
            <dd>
              <time>2020 (4 months / remote)</time>
            </dd>
          </dl>
        </div>

        <div className="responsibility">
          <p>
            Dealers and customers are able to register new Bentley cars online
            in order to benefit from additional services Bentley is offering.
          </p>
          <p>My responsibilities were:</p>
          <ul>
            <li>
              App (frontend) development:
              <ul>
                <li>
                  Creating and consolidating Angular apps within a microservice
                  architecture of over 20 parts (apps and services)
                </li>
                <li>Development of new Angular components and services</li>
                <li>Bringing several projects back on track</li>
              </ul>
            </li>
            <li>
              Leadership role:
              <ul>
                <li>Guidance of two Junior Co-workers</li>
                <li>Giving a presentation about Jenkins and CI/CD</li>
                <li>Giving a presentation about Cypress and e2e-Testing</li>
              </ul>
            </li>
            <li>
              Miscellaneous:
              <ul>
                <li>Streamlining and Updating Jenkins Jobs</li>
                <li>Laying down basis of e2e testing via Cypress</li>
                <li>Establishing a CI/CD mindset within team</li>
              </ul>
            </li>
          </ul>
        </div>
      </section>
      <hr />
      <section className="project-list-item">
        <div className="project">
          <a
            className="nohover"
            href="https://play.google.com/store/apps/details?id=com.blackforesthop.bfh"
          >
            <img className="app" src={logoBfh} alt="BFH App" />
          </a>
          <a
            className="nohover"
            href="https://play.google.com/store/apps/details?id=com.chasefestival.companion"
          >
            <img className="app" src={logoChase} alt="Chase App" />
          </a>

          <dl>
            <dt>Project</dt>
            <dd>
              Black Forest Hop App <span className="amp">&</span>
              <br /> Chase Festival App
            </dd>

            <dt>Company</dt>
            <dd>
              Black Forest Hop e.V. <span className="amp">&</span>
              <br /> SwingStep GmbH
            </dd>

            <dt>Responsibilities</dt>
            <dd>Everything (Idea, Concept, Design and Development)</dd>

            <dt>Frontend Technologies</dt>
            <dd>
              TypeScript, React, React Native,
              <br />
              SVG, Jest
            </dd>

            <dt>Backend Technologies</dt>
            <dd>GraphQL, MongoDB, Docker, Google Firebase</dd>

            <dt>Period of Time</dt>
            <dd>
              <time>2018 (3 months all in all / remote)</time>
              <br />
              <time>2019 (weeks)</time>
            </dd>
          </dl>
        </div>

        <div className="responsibility">
          <p>
            Two Mobile Apps which work as digital companion (i.e. interactive
            digital booklet) to all participants of two different multi-day
            dance workshop events.
          </p>
          <p>
            The apps provide individual class schedules for every level and
            teacher. All tasters and party schedules are included, too. Supports
            participants in getting to the venues and eating out respectively
            getting official announcements.
          </p>
          <p>
            The idea, concept, design and development (front- and backend) was
            done by myself - client wishes were integrated, too. The apps had
            roughly 100 (Black Forest Hop) and 650 (Chase Festival) users and
            both are available in the App Store and Google Play.
          </p>
          <ul>
            <li>
              Custom-built schedule React components based on SVG
              <ul>
                <li>supports one, two and three column layouts</li>
                <li>supports a more complex teacher schedule</li>
                <li>supports individual schedules</li>
              </ul>
            </li>
            <li>
              Over 35 selector functions
              <ul>
                <li>... all based on functional programming (via Lodash)</li>
                <li>... all of them have 100% test coverage (via Jest)</li>
              </ul>
            </li>
            <li>
              Miscellaneous:
              <ul>
                <li>Over 35 custom-built React components in total</li>
                <li>Integrated over-the-air update functionality</li>
                <li>
                  Filtering of eating-out places by „currently open“ option
                </li>
                <li>Navigation support via Google Maps and Apple Maps</li>
              </ul>
            </li>
          </ul>
        </div>
      </section>
      <hr />
      <section className="project-list-item">
        <div className="project">
          <img
            src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOC4xLjEsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iRWJlbmVfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAxNzUuNiA2MiIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTc1LjYgNjIiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHBhdGggZD0iTTE0NC4yLDBjLTcsMC0xMy41LDIuMy0xOC44LDYuMkMxMjAuMSwyLjMsMTEzLjYsMCwxMDYuNiwwYy03LDAtMTMuNSwyLjMtMTguOCw2LjJDODIuNSwyLjMsNzYuMSwwLDY5LDANCgljLTcsMC0xMy41LDIuMy0xOC44LDYuMkM0NSwyLjMsMzguNSwwLDMxLjQsMEMxNC4xLDAsMCwxMy45LDAsMzFzMTQuMSwzMSwzMS40LDMxYzcsMCwxMy41LTIuMywxOC44LTYuMkM1NS41LDU5LjcsNjIsNjIsNjksNjINCgljNywwLDEzLjUtMi4zLDE4LjgtNi4yQzkzLDU5LjcsOTkuNSw2MiwxMDYuNiw2MmM3LDAsMTMuNS0yLjMsMTguOC02LjJjNS4yLDMuOSwxMS43LDYuMiwxOC44LDYuMmMxNy4zLDAsMzEuNC0xMy45LDMxLjQtMzENCglTMTYxLjUsMCwxNDQuMiwweiBNMTI1LjQsNDdjLTMuOC00LjMtNi4xLTkuOS02LjEtMTZjMC02LjEsMi4zLTExLjcsNi4xLTE2YzMuOCw0LjMsNi4xLDkuOSw2LjEsMTZDMTMxLjUsMzcuMSwxMjkuMiw0Mi43LDEyNS40LDQ3DQoJeiBNODcuOCw0N2MtMy44LTQuMy02LjEtOS45LTYuMS0xNmMwLTYuMSwyLjMtMTEuNyw2LjEtMTZjMy44LDQuMyw2LjEsOS45LDYuMSwxNkM5My45LDM3LjEsOTEuNiw0Mi43LDg3LjgsNDd6IE01MC4yLDQ3DQoJYy0zLjgtNC4zLTYuMS05LjktNi4xLTE2YzAtNi4xLDIuMy0xMS43LDYuMS0xNmMzLjgsNC4zLDYuMSw5LjksNi4xLDE2QzU2LjQsMzcuMSw1NCw0Mi43LDUwLjIsNDd6IE02LjUsMzENCgljMC0xMy41LDExLjItMjQuNSwyNC45LTI0LjVjNS4xLDAsOS45LDEuNSwxMy45LDQuMmMtNC44LDUuNC03LjcsMTIuNS03LjcsMjAuM2MwLDcuOCwyLjksMTQuOSw3LjcsMjAuM2MtNCwyLjYtOC43LDQuMi0xMy45LDQuMg0KCUMxNy43LDU1LjUsNi41LDQ0LjUsNi41LDMxeiBNNTUuMSw1MS4zYzQuOC01LjQsNy43LTEyLjUsNy43LTIwLjNjMC03LjgtMi45LTE0LjktNy43LTIwLjNjNC0yLjYsOC43LTQuMiwxMy45LTQuMg0KCXM5LjksMS41LDEzLjksNC4yYy00LjgsNS40LTcuOCwxMi41LTcuOCwyMC4zYzAsNy44LDIuOSwxNC45LDcuOCwyMC4zYy00LDIuNi04LjcsNC4yLTEzLjksNC4yQzYzLjksNTUuNSw1OS4xLDUzLjksNTUuMSw1MS4zeg0KCSBNOTIuNyw1MS4zYzQuOC01LjQsNy44LTEyLjUsNy44LTIwLjNjMC03LjgtMi45LTE0LjktNy44LTIwLjNjNC0yLjYsOC43LTQuMiwxMy45LTQuMnM5LjksMS41LDEzLjksNC4yDQoJYy00LjgsNS40LTcuOCwxMi41LTcuOCwyMC4zYzAsNy44LDIuOSwxNC45LDcuOCwyMC4zYy00LDIuNi04LjcsNC4yLTEzLjksNC4yUzk2LjcsNTMuOSw5Mi43LDUxLjN6IE0xNDQuMiw1NS41DQoJYy01LjEsMC05LjktMS41LTEzLjktNC4yYzQuOC01LjQsNy44LTEyLjUsNy44LTIwLjNjMC03LjgtMi45LTE0LjktNy44LTIwLjNjNC0yLjYsOC43LTQuMiwxMy45LTQuMmMxMy43LDAsMjQuOSwxMSwyNC45LDI0LjUNCglDMTY5LjEsNDQuNSwxNTcuOSw1NS41LDE0NC4yLDU1LjV6Ii8+DQo8L3N2Zz4NCg=="
            width="100"
            height="55"
            alt="Audi AG"
          />

          <dl>
            <dt>Project</dt>
            <dd>
              <a href="https://www.audi-boerse.de">
                Audi Gebrauchtwagenbörse - Onlinekauf (Checkout)
              </a>
            </dd>

            <dt>Company</dt>
            <dd>Audi AG</dd>

            <dt>Responsibilities</dt>
            <dd>Frontend (JS)</dd>

            <dt>Frontend Technologies</dt>
            <dd>
              React, React Router, Redux, Redux Form, Redux-Saga, styled
              components, webpack
            </dd>

            <dt>Period of Time</dt>
            <dd>
              <time>2017 (4 months / remote)</time>
            </dd>
          </dl>
        </div>

        <div className="responsibility">
          <p>
            Authorized Audi dealers can use the official used car website of
            Audi to offer their cars for purchase. Potential Customers can do
            the entire car purchase (decision for pickup or delivery, concession
            and payment/loan) in a multi level process online.
          </p>
          <p>
            As part of the frontend team, which developed the checkout process
            as web app, I did:
          </p>
          <ul>
            <li>
              Technical implementation of user stories, i.a.:
              <ul>
                <li>
                  Implementation of various views according to{' '}
                  <a href="http://atomicdesign.bradfrost.com/">Atomic Design</a>{' '}
                  and{' '}
                  <a href="https://alistapart.com/article/responsive-web-design">
                    Responsive web design
                  </a>
                </li>
                <li>
                  Implementation of several atoms, molecules and organisms
                </li>
                <li>Implementation of the complete FAQ section</li>
                <li>Building forms with Redux Form</li>
                <li>Building actions/reducer for Redux</li>
                <li>Validation of all forms</li>
              </ul>
            </li>
            <li>
              Improvement of the developer flow:
              <ul>
                <li>Introduction of ESLint (integrated as Git hook)</li>
                <li>Introduction of Prettier (integrated as Git hook)</li>
                <li>Documentation of several atoms, molecules and organisms</li>
              </ul>
            </li>
          </ul>
        </div>
      </section>
      <hr />
      <section className="project-list-item">
        <div className="project">
          <img src={logoEue} alt="1&1" />

          <dl>
            <dt>Project</dt>
            <dd>
              <a href="http://control-center.1und1.de/">
                1&1 Control Center Access
              </a>
              <br /> (customer portal)
            </dd>

            <dt>Company</dt>
            <dd>1&1 Internet SE</dd>

            <dt>Responsibilities</dt>
            <dd>Frontend & Tooling (JS)</dd>

            <dt>Frontend Technologies</dt>
            <dd>
              Node.js, qooxdoo,
              <br />
              React, Angular 1&2
            </dd>

            <dt>Period of Time</dt>
            <dd>
              <time>2015 - 2016</time>
            </dd>
          </dl>
        </div>

        <div className="responsibility">
          <p>
            More than 8,7 millions of existing 1&1 customers of DSL and mobile
            products are able to view and edit their contract and feature
            details within the <strong>1&1 Control Center (Access)</strong> .
          </p>
          <p>
            As part of the frontend team, which developed this web app, I did:
          </p>
          <ul>
            <li>
              Technical implementation of user stories, i.a.:
              <ul>
                <li>1&1 Multi-Card (order, activate, lock, unlock)</li>
                <li>
                  Arranging a technician appointment via a calendar widget
                </li>
                <li>
                  Miscellaneous DSL and Mobile accordions, in order to configure
                  „Settings & Services“
                </li>
              </ul>
            </li>
            <li>
              Maintenance and revamping the frontend toolchain:
              <ul>
                <li>Harnessing of Browserify and Babel</li>
                <li>Migration of the build process to Node.js/npm-packages</li>
                <li>Harnessing of ESLint as replacement for JSCS and JSHint</li>
              </ul>
            </li>
            <li>
              Responsible for the CI server jobs (Jenkins):
              <ul>
                <li>main build and release jobs (via Maven)</li>
                <li>
                  Frontend code quality job, which lints JS and SCSS-Code as
                  well as runs JS unit and integration tests
                </li>
                <li>
                  Frontend security job, which warns about security risks within
                  used npm packages
                </li>
              </ul>
            </li>
            <li>
              Improving the developer flow:
              <ul>
                <li>Migration from SVN to Git</li>
                <li>Development of customized Git hooks</li>
              </ul>
            </li>
            <li>
              Miscellaneous:
              <ul>
                <li>Reworking of the REST resources with the backend team</li>
                <li>extension of the frontend review/release process</li>
                <li>
                  documentation of the CD build/release/deployment pipelines
                </li>
                <li>
                  Analysis/Conceptioning of the frontend target architecture
                  with migration plan
                </li>
                <li>Writing of Unit/E2E-Tests (Karma, Jasmine, Protractor)</li>
                <li>Chairing of reviews and retrospectives</li>
                <li>
                  Being release manager and bug manager in several Scrum sprints
                </li>
                <li>
                  Team-Training for Kanban (as alt. for Scrum) as well as Kibana
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </section>
      <hr />
      <section className="project-list-item last-item">
        <div className="project">
          <img src={logoQx} alt="qooxdoo" />

          <dl>
            <dt>Project</dt>
            <dd>
              <a href="http://www.qooxdoo.org/">qooxdoo</a>
              <br />
              open source web framework
            </dd>

            <dt>Company</dt>
            <dd>1&1 Internet AG</dd>

            <dt>Responsibilities</dt>
            <dd>
              core developer,
              <br />
              responsible for toolchain
              <br /> (JS, Node.js, Python)
            </dd>

            <dt>Period of Time</dt>
            <dd>
              <time>2012 - 2015</time>
            </dd>
          </dl>
        </div>

        <div className="responsibility">
          <p>
            <strong>qooxdoo</strong> is an open source web framework for
            building RIAs, native-like mobile apps and lean web apps. The
            development takes places on{' '}
            <a href="https://github.com/qooxdoo/qooxdoo">GitHub</a>.
          </p>
          <p>
            As part of the core team, which is developing qooxdoo, my
            responsibilities were:
          </p>
          <ul>
            <li>
              Core developer and responsible for the (Python-)Toolchain:
              <ul>
                <li>
                  ongoing development of the build processes (parsing,
                  preprocessing, minifying etc)
                </li>
                <li>
                  ongoing development of the JS framework code on GitHub,
                  primarily the IO package (e.g XHR/JSONP and REST)
                </li>
              </ul>
            </li>
            <li>
              Development of a new JS based toolchain (via Grunt plugins):
              <ul>
                <li>Parsing of JS code incl. scope and dependency analysis</li>
                <li>Minifying and optimization of JS code</li>
                <li>Preprocessing of resources (e.g. images)</li>
                <li>Processing of qooxdoo inherent compiler hints</li>
                <li>Maintenance of the existing python toolchain</li>
                <li>Introduction of custom ESLint rules</li>
                <li>Development of the contrib catalog (for 3rd party libs)</li>
                <li>UnitTests via nodeunit/Mocha/Chai</li>
                <li>Documentation via Sphinx/JSDoc</li>
                <li>
                  Interacting with the open source community (e.g. accepting
                  pull requests, giving support on StackOverflow and the mailing
                  list)
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </section>
      <style jsx>{`
        .app {
          border-radius: 20px;
          border: 1px solid lightgrey;
          margin-right: 20px;
        }

        .project-list-item {
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

        @media only screen and (max-width: ${m}) {
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
  </Layout>
)

export default Projects

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`
