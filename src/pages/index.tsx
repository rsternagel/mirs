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
              <span>Web/Mobile-Apps (RN / iOS)</span>
              <span>Full Stack · Cloud Native</span>
              <span>JS/TS · Node.js · Rust · Swift · Go</span>
              <span>React · React Native</span>
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
            I am an expert for the{' '}
            <Link to={'/offer/'}>
              development of Web/Mobile Apps with a cloud native attitude.
            </Link>{' '}
            My <Link to={'/skills/'}>field-tested knowledge</Link> is based on
            my studies (degree in Computer Science in Media) as well as my
            twelve years <Link to={'/projects/'}>work experience</Link>.
          </p>

          <p>
            My focus is on{' '}
            <a href="https://developer.mozilla.org/en/docs/Web/JavaScript">
              JavaScript
            </a>
            , <a href="https://www.typescriptlang.org/">TypeScript</a>{' '}
            <span className="amp">&</span>{' '}
            <a href="https://nodejs.org/">Node.js</a>. <br />
            Moreover I am passionate about{' '}
            <a href="https://rust-lang.org/">Rust</a>,{' '}
            <a href="https://swift.org/">Swift</a>{' '}
            <span className="amp">&</span> <a href="https://golang.org/">Go</a>.
          </p>

          {/* <p>
            Currently my emphasis is on development with Rust
            as well as transforming Web Apps into Cloud Native Apps
          </p> */}

          <p>
            My preferred location to work from is Frankfurt am Main, the
            Rhein-Main area or from home (remote).
          </p>

          <p>
            I am available as from <time>July 2020</time>. Working remotely part
            time is my favorite project setup.
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
          padding-left: 5px;
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
