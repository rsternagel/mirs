import React from 'react'

// @ts-ignore
import { graphql, Link, PageProps } from 'gatsby'
import { Helmet } from 'react-helmet'
// @ts-ignore
import { MdMailOutline } from 'react-icons/md'

// @ts-ignore
import profilePic from '../components/img/profile_pic.jpg'
import Layout from '../components/Layout'

import { m, s } from '../utils/breakpoints'

const Homepage: React.FC<PageProps> = ({
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
        <title>{`${siteTitle}`}</title>
      </Helmet>

      <section className="content">
        <aside className="sidebar">
          <div className="container-img">
            <img
              src={profilePic}
              width="200"
              height="248"
              alt="Richard Sternagel"
            />
          </div>

          <div className="container-labels-contact">
            <div className="labels">
              <span>Rust · JS/TS · Node.js</span>
              <span>Web-Apps · Full Stack · CLI</span>
            </div>

            <p className="contact">
              Mail me:
              <span>
                <MdMailOutline />{' '}
                <a href="mailto:rsternagel@posteo.de">rsternagel@posteo.de</a>
              </span>
            </p>
          </div>
        </aside>
        <section className="intro">
          <p>
            <span className="greeting">Hello,</span>
            <br />I am <span className="name">Richard Sternagel</span>,<br />
            software developer from Frankfurt am Main, Germany.
          </p>
          <p>
            I'm experienced with Rust projects
            <br /> (e.g. in the fields of Networking, CLI and WASM).
          </p>{' '}
          <p>
            Moreover I am an expert for the{' '}
            <Link to={'/offer/'}>
              development of Web Apps with a cloud native attitude.
            </Link>{' '}
            My <Link to={'/skills/'}>field-tested knowledge</Link> is based on
            my studies (degree in Computer Science in Media) as well as my
            fifteen years <Link to={'/projects/'}>work experience</Link>.
          </p>
          <p>
            My focus is on <a href="https://rust-lang.org/">Rust</a>,{' '}
            <a href="https://developer.mozilla.org/en/docs/Web/JavaScript">
              JavaScript
            </a>
            , <a href="https://www.typescriptlang.org/">TypeScript</a>{' '}
            <span className="amp">&</span>{' '}
            <a href="https://nodejs.org/">Node.js</a>.
          </p>
          <p>
            My preferred location to work from is Frankfurt am Main, the
            Rhein-Main area or from home (remote).
          </p>
          <p>I speak German (native speaker) and English fluently.</p>
          <p>
            I am available as from <time>March 2025</time>.
          </p>
        </section>
      </section>
      <style jsx>{`
        .content {
          display: flex;
        }

        .sidebar {
          width: 35%;
          margin-right: 10px;
        }

        .container-img {
          max-width: 200px;
          min-width: 150px;
        }

        .container-img img {
          padding: 1px;
          border: 1px solid #ddd;
          border-radius: 5px;
          max-width: 100%;
          height: auto;
        }

        .labels {
          display: flex;
          flex-direction: column;
          align-items: center;
          max-width: 200px;
          min-width: 150px;
          font-size: 75%;
        }

        .contact {
          display: flex;
          flex-direction: column;
          font-size: 95%;
          margin: 40px 10px;
        }

        .contact a {
          padding-left: 10px;
        }

        .contact span:first-of-type {
          display: flex;
          align-items: center;
        }

        .greeting {
          display: block;
        }

        .intro,
        .sidebar {
          padding: 10px;
        }

        .intro {
          width: 65%;
        }

        :global(.amp) {
          font-family: Palatino, 'Palatino Linotype', serif;
          font-style: italic;
        }

        @media only screen and (max-width: ${m}) {
          .content {
            display: block;
          }

          .sidebar {
            display: flex;
            width: 100%;
          }

          .container-img img {
            max-width: 85%;
          }

          .container-labels-contact {
            margin: 20px 0 0 20px;
          }

          .container-labels-contact .labels p {
            font-size: 80%;
          }

          .intro {
            width: 100%;
          }
        }

        @media only screen and (max-width: ${s}) {
          .content {
            display: block;
          }

          .sidebar {
            display: block;
            width: 100%;
          }

          .container-img img {
            max-width: 80%;
          }

          .container-labels-contact {
            margin: 0;
          }

          .labels {
            align-items: flex-start;
          }

          .intro {
            width: 100%;
          }
        }

        @media print {
          #___gatsby {
            font-size: 75% !important;
          }
        }
      `}</style>
    </div>
  </Layout>
)

export default Homepage

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`
