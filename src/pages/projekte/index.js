import React from 'react'

import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import { translate } from 'react-i18next'

import Layout from '../../components/Layout'
import logoBfh from '../../components/img/logo_bfh_app.png'
import logoChase from '../../components/img/logo_chase_app.png'
import logoEue from '../../components/img/logo_eue.png'
import logoQx from '../../components/img/logo_qooxdoo.png'

import { m } from '../../utils/breakpoints'

const Projekte = ({
  data: {
    site: {
      siteMetadata: { title: siteTitle }
    }
  },
  location,
  t
}) => (
  <Layout location={location}>
    <div>
      <Helmet>
        <title>
          {t('siteTitle')}
          {` | ${siteTitle}`}
        </title>
      </Helmet>

      <h1>{t('projects')}</h1>

      <p>{t('hereYouCanSee')}:</p>

      <section className="project-list">
        <div className="project">
          <a
            className="nohover"
            href="https://play.google.com/store/apps/details?id=com.blackforesthop.bfh">
            <img className="app" src={logoBfh} alt="BFH App" />
          </a>
          <a
            className="nohover"
            href="https://play.google.com/store/apps/details?id=com.chasefestival.companion">
            <img className="app" src={logoChase} alt="Chase App" />
          </a>

          <dl>
            <dt>{t('catProjects')}</dt>
            <dd>
              Black Forest Hop App <span className="amp">&</span>
              <br /> Chase Festival App
            </dd>

            <dt>{t('catCompany')}</dt>
            <dd>
              Black Forest Hop e.V. <span className="amp">&</span>
              <br /> SwingStep GmbH
            </dd>

            <dt>{t('catAssignment')}</dt>
            <dd>{t('catAssignmentProject4')}</dd>

            <dt>{t('catTechnologiesFrontend')}</dt>
            <dd>React, React Native, SVG, Flow, Jest</dd>

            <dt>{t('catTechnologiesBackend')}</dt>
            <dd>GraphQL, MongoDB, Docker</dd>

            <dt>{t('catTimeframe')}</dt>
            <dd>
              <time>{t('catTimeframeProject4')}</time>
            </dd>
          </dl>
        </div>

        <div className="responsibility">
          <p>{t('project4Desc-1')}</p>
          <p>{t('project4Desc-2')}</p>
          <p>{t('project4Tasks')}</p>
          <ul>
            <li>
              {t('project4Ul1')}
              <ul>
                <li>{t('project4Ul1-1')}</li>
                <li>{t('project4Ul1-2')}</li>
                <li>{t('project4Ul1-3')}</li>
              </ul>
            </li>
            <li>
              {t('project4Ul2')}
              <ul>
                <li>{t('project4Ul2-1')}</li>
                <li>{t('project4Ul2-2')}</li>
              </ul>
            </li>
            <li>
              {t('project4Ul3')}
              <ul>
                <li>{t('project4Ul3-1')}</li>
                <li>{t('project4Ul3-2')}</li>
                <li>{t('project4Ul3-3')}</li>
                <li>{t('project4Ul3-4')}</li>
              </ul>
            </li>
          </ul>
        </div>
      </section>

      <hr />

      <section className="project-list">
        <div className="project">
          <img
            src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOC4xLjEsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iRWJlbmVfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAxNzUuNiA2MiIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTc1LjYgNjIiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHBhdGggZD0iTTE0NC4yLDBjLTcsMC0xMy41LDIuMy0xOC44LDYuMkMxMjAuMSwyLjMsMTEzLjYsMCwxMDYuNiwwYy03LDAtMTMuNSwyLjMtMTguOCw2LjJDODIuNSwyLjMsNzYuMSwwLDY5LDANCgljLTcsMC0xMy41LDIuMy0xOC44LDYuMkM0NSwyLjMsMzguNSwwLDMxLjQsMEMxNC4xLDAsMCwxMy45LDAsMzFzMTQuMSwzMSwzMS40LDMxYzcsMCwxMy41LTIuMywxOC44LTYuMkM1NS41LDU5LjcsNjIsNjIsNjksNjINCgljNywwLDEzLjUtMi4zLDE4LjgtNi4yQzkzLDU5LjcsOTkuNSw2MiwxMDYuNiw2MmM3LDAsMTMuNS0yLjMsMTguOC02LjJjNS4yLDMuOSwxMS43LDYuMiwxOC44LDYuMmMxNy4zLDAsMzEuNC0xMy45LDMxLjQtMzENCglTMTYxLjUsMCwxNDQuMiwweiBNMTI1LjQsNDdjLTMuOC00LjMtNi4xLTkuOS02LjEtMTZjMC02LjEsMi4zLTExLjcsNi4xLTE2YzMuOCw0LjMsNi4xLDkuOSw2LjEsMTZDMTMxLjUsMzcuMSwxMjkuMiw0Mi43LDEyNS40LDQ3DQoJeiBNODcuOCw0N2MtMy44LTQuMy02LjEtOS45LTYuMS0xNmMwLTYuMSwyLjMtMTEuNyw2LjEtMTZjMy44LDQuMyw2LjEsOS45LDYuMSwxNkM5My45LDM3LjEsOTEuNiw0Mi43LDg3LjgsNDd6IE01MC4yLDQ3DQoJYy0zLjgtNC4zLTYuMS05LjktNi4xLTE2YzAtNi4xLDIuMy0xMS43LDYuMS0xNmMzLjgsNC4zLDYuMSw5LjksNi4xLDE2QzU2LjQsMzcuMSw1NCw0Mi43LDUwLjIsNDd6IE02LjUsMzENCgljMC0xMy41LDExLjItMjQuNSwyNC45LTI0LjVjNS4xLDAsOS45LDEuNSwxMy45LDQuMmMtNC44LDUuNC03LjcsMTIuNS03LjcsMjAuM2MwLDcuOCwyLjksMTQuOSw3LjcsMjAuM2MtNCwyLjYtOC43LDQuMi0xMy45LDQuMg0KCUMxNy43LDU1LjUsNi41LDQ0LjUsNi41LDMxeiBNNTUuMSw1MS4zYzQuOC01LjQsNy43LTEyLjUsNy43LTIwLjNjMC03LjgtMi45LTE0LjktNy43LTIwLjNjNC0yLjYsOC43LTQuMiwxMy45LTQuMg0KCXM5LjksMS41LDEzLjksNC4yYy00LjgsNS40LTcuOCwxMi41LTcuOCwyMC4zYzAsNy44LDIuOSwxNC45LDcuOCwyMC4zYy00LDIuNi04LjcsNC4yLTEzLjksNC4yQzYzLjksNTUuNSw1OS4xLDUzLjksNTUuMSw1MS4zeg0KCSBNOTIuNyw1MS4zYzQuOC01LjQsNy44LTEyLjUsNy44LTIwLjNjMC03LjgtMi45LTE0LjktNy44LTIwLjNjNC0yLjYsOC43LTQuMiwxMy45LTQuMnM5LjksMS41LDEzLjksNC4yDQoJYy00LjgsNS40LTcuOCwxMi41LTcuOCwyMC4zYzAsNy44LDIuOSwxNC45LDcuOCwyMC4zYy00LDIuNi04LjcsNC4yLTEzLjksNC4yUzk2LjcsNTMuOSw5Mi43LDUxLjN6IE0xNDQuMiw1NS41DQoJYy01LjEsMC05LjktMS41LTEzLjktNC4yYzQuOC01LjQsNy44LTEyLjUsNy44LTIwLjNjMC03LjgtMi45LTE0LjktNy44LTIwLjNjNC0yLjYsOC43LTQuMiwxMy45LTQuMmMxMy43LDAsMjQuOSwxMSwyNC45LDI0LjUNCglDMTY5LjEsNDQuNSwxNTcuOSw1NS41LDE0NC4yLDU1LjV6Ii8+DQo8L3N2Zz4NCg=="
            width="100"
            height="55"
            alt="Audi AG"
          />

          <dl>
            <dt>{t('catProjects')}</dt>
            <dd>
              <a href="https://www.audi-boerse.de">
                Audi Gebrauchtwagenbörse - Onlinekauf (Checkout)
              </a>
            </dd>

            <dt>{t('catCompany')}</dt>
            <dd>Audi AG</dd>

            <dt>{t('catAssignment')}</dt>
            <dd>Frontend (JS)</dd>

            <dt>{t('catTechnologiesFrontend')}</dt>
            <dd>
              React, React Router, Redux, Redux Form, Redux-Saga, styled
              components, webpack
            </dd>

            <dt>{t('catTimeframe')}</dt>
            <dd>
              <time>{t('catTimeframeProject3')}</time>
            </dd>
          </dl>
        </div>

        <div className="responsibility">
          <p>{t('project3Desc')}</p>
          <p>{t('project3Tasks')}</p>
          <ul>
            <li>
              {t('project3Ul1')}
              <ul>
                <li>
                  {t('project3Ul1-1a')}{' '}
                  <a href="http://atomicdesign.bradfrost.com/">Atomic Design</a>{' '}
                  {t('project3Ul1-1b')}{' '}
                  <a href="https://alistapart.com/article/responsive-web-design">
                    Responsive web design
                  </a>
                </li>
                <li>{t('project3Ul1-2')}</li>
                <li>{t('project3Ul1-3')}</li>
                <li>{t('project3Ul1-4')}</li>
                <li>{t('project3Ul1-5')}</li>
                <li>{t('project3Ul1-6')}</li>
              </ul>
            </li>
            <li>
              {t('project3Ul2')}
              <ul>
                <li>{t('project3Ul2-1')}</li>
                <li>{t('project3Ul2-2')}</li>
                <li>{t('project3Ul2-3')}</li>
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
            <dt>{t('catProjects')}</dt>
            <dd>
              <a href="http://control-center.1und1.de/">
                1&1 Control Center Access
              </a>
              <br /> ({t('catProjectsProject2')})
            </dd>

            <dt>{t('catCompany')}</dt>
            <dd>1&1 Internet SE</dd>

            <dt>{t('catAssignment')}</dt>
            <dd>Frontend & Tooling (JS)</dd>

            <dt>{t('catTechnologiesFrontend')}</dt>
            <dd>
              Node.js, qooxdoo,
              <br />
              React, Angular 1&2
            </dd>

            <dt>{t('catTimeframe')}</dt>
            <dd>
              <time>2015 - 2016</time>
            </dd>
          </dl>
        </div>

        <div className="responsibility">
          <p>
            {t('project2DescPrefix')}{' '}
            <strong>1&1 Control Center (Access)</strong>{' '}
            {t('project2DescPostfix')}
          </p>
          <p>{t('project2Tasks')}</p>
          <ul>
            <li>
              {t('project2Ul1')}
              <ul>
                <li>{t('project2Ul1-1')}</li>
                <li>{t('project2Ul1-2')}</li>
                <li>{t('project2Ul1-3')}</li>
              </ul>
            </li>
            <li>
              {t('project2Ul2')}
              <ul>
                <li>{t('project2Ul2-1')}</li>
                <li>{t('project2Ul2-2')}</li>
                <li>{t('project2Ul2-3')}</li>
              </ul>
            </li>
            <li>
              {t('project2Ul3')}
              <ul>
                <li>{t('project2Ul3-1')}</li>
                <li>{t('project2Ul3-2')}</li>
                <li>{t('project2Ul3-3')}</li>
              </ul>
            </li>
            <li>
              {t('project2Ul4')}
              <ul>
                <li>{t('project2Ul4-1')}</li>
                <li>{t('project2Ul4-2')}</li>
              </ul>
            </li>
            <li>
              {t('project2Ul5')}
              <ul>
                <li>{t('project2Ul5-1')}</li>
                <li>{t('project2Ul5-2')}</li>
                <li>{t('project2Ul5-3')}</li>
                <li>{t('project2Ul5-4')}</li>
                <li>{t('project2Ul5-5')}</li>
                <li>{t('project2Ul5-6')}</li>
                <li>{t('project2Ul5-7')}</li>
                <li>{t('project2Ul5-8')}</li>
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
            <dt>{t('catProjects')}</dt>
            <dd>
              <a href="http://www.qooxdoo.org/">qooxdoo</a>
              <br />
              {t('catProjectsProject1')}
            </dd>

            <dt>{t('catCompany')}</dt>
            <dd>1&1 Internet AG</dd>

            <dt>{t('catAssignment')}</dt>
            <dd>
              {t('catAssignmentProject1-1')},<br />
              {t('catAssignmentProject1-2')}
              <br /> (JS, Node.js, Python)
            </dd>

            <dt>{t('catTimeframe')}</dt>
            <dd>
              <time>2012 - 2015</time>
            </dd>
          </dl>
        </div>

        <div className="responsibility">
          <p>
            <strong>qooxdoo</strong> {t('project1Desc')}{' '}
            <a href="https://github.com/qooxdoo/qooxdoo">GitHub</a>.
          </p>
          <p>{t('project1Tasks')}:</p>
          <ul>
            <li>
              {t('project1Ul1')}:
              <ul>
                <li>{t('project1Ul1-1')}</li>
                <li>{t('project1Ul1-2')}</li>
              </ul>
            </li>
            <li>
              {t('project1Ul2')}:
              <ul>
                <li>{t('project1Ul2-1')}</li>
                <li>{t('project1Ul2-2')}</li>
                <li>{t('project1Ul2-3')}</li>
                <li>{t('project1Ul2-4')}</li>
                <li>{t('project1Ul2-5')}</li>
                <li>{t('project1Ul2-6')}</li>
                <li>{t('project1Ul2-7')}</li>
                <li>{t('project1Ul2-8')}</li>
                <li>{t('project1Ul2-9')}</li>
                <li>{t('project1Ul2-10')}</li>
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
  </Layout>
)

export default translate('projects')(Projekte)

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`
