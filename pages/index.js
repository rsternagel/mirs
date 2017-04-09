import React from 'react'
import { Link } from 'react-router'
import Helmet from 'react-helmet'
import { prefixLink } from 'gatsby-helpers'
import profilePic from '../components/img/profile_pic.jpg'

import MdMailOutline from 'react-icons/lib/md/mail-outline'
import FaPhone from 'react-icons/lib/fa/phone'
import AtSign from 'react-icons/lib/fa/at'
import PlusSign from 'react-icons/lib/go/plus'

class Homepage extends React.Component {
  render () {
    const site = this.props.data.site
    const siteTitle = site.siteMetadata.title

    return (
      <div>

        <Helmet title={`${siteTitle}`}/>

        <section className="content">
          <aside className="image">
            <img src={prefixLink(profilePic)} width="200" height="248" alt="Richard Sternagel" />

            <div className="labels">
              <p>
                Entwicklung von Web-Applikationen<br/>
                Infrastruktur · Tooling · Workflows<br/>
                <span className="jsNode">JavaScript · Node.js</span>
              </p>
            </div>

            <p className="contact">
              So erreichen Sie mich:
              <span><FaPhone />{' '} <PlusSign />49176 / 21746640</span>
              <span><MdMailOutline />{' '} rsternagel<AtSign />posteo.de</span>
            </p>
          </aside>
          <section className="intro">
            <p>
              Hallo,<br /> ich bin <span className="name">Richard Sternagel</span>,<br /> Web-Entwickler aus Frankfurt am Main (FFM).
            </p>

            <p>
              Ich bin Spezialist für die <Link to={'/angebot/'} >Entwicklung von
              Web Applikationen, Infrastruktur und Tooling</Link>. Mein
              umfangreiches und <Link to={'/kenntnisse/'} >praxiserprobtes
              Expertenwissen</Link> ist das Ergebnis meines
              Medieninformatikstudiums sowie meiner 10-jährigen <Link
              to={'/projekte/'} >Berufserfahrung</Link>.
            </p>

            <p>
              Mein Fokus liegt auf <a href="https://developer.mozilla.org/en/docs/Web/JavaScript">JavaScript</a>
              {' '}und <a href="https://nodejs.org/en/">Node.js</a>.
            </p>

            <p>
              Aktuell liegt mein Projektschwerpunkt auf
              {' '}<a href="https://facebook.github.io/react/">React</a> und dessen Ökosystem (d.h.
              {' '}<a href="http://redux.js.org/">Redux</a>, <a href="http://graphql.org/">GraphQL</a>,
              {' '}<a href="https://facebook.github.io/relay/">Relay</a>, <a href="https://webpack.js.org/">Webpack</a>, etc.).
            </p>

            <p>Ich bin ab <time>Mai 2017</time> verfügbar.</p>
          </section>
        </section>
        <style jsx>{`
          .name {
             font-family: Palatino, Georgia, serif;
             font-size: 110%;
             font-style: italic;
          }

          .labels p {
            font-size: 70%;
          }

          .labels p .jsNode {
            padding-left: 30px;
          }

          .contact {
            display: flex;
            flex-direction: column;
            font-size: 95%;

            border: 1px solid #ddd;
            padding: 10px 20px;
            border-radius: 7px;
            margin-right: 40px;
            margin-left: -10px;
          }

          .content {
            display: flex;
          }

          .intro,
          .image {
            padding: 10px;
          }

          .intro {
            width: 65%;
          }

          .image {
            width: 35%;
            margin-right: 10px;
          }

          .image img {
            padding: 1px;
            border: 1px solid #ddd;
            border-radius: 5px;
          }

          time {
            font-family: Georgia, serif;
            font-size: 100%;
            padding: 0 5px;
          }
        `}</style>

      </div>
    )
  }
}

Homepage.propTypes = {
  route: React.PropTypes.object,
}

export default Homepage

export const pageQuery = `
 {
   site {
     siteMetadata {
       title
       author
     }
   }
 }
`
