import React from 'react'
import { Link } from 'react-router'
import Helmet from 'react-helmet'
import { prefixLink } from 'gatsby-helpers'
import profilePic from '../components/img/profile_pic.jpg'

import MdMailOutline from 'react-icons/lib/md/mail-outline'
import FaPhone from 'react-icons/lib/fa/phone'

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
              <span><MdMailOutline />{' '} <a href="mailto:rsternagel@posteo.de">rsternagel@posteo.de</a></span>
              <span><FaPhone />{' '} <a href="tel:+4917621746640">+49176 / 21746640</a></span>
            </p>
          </aside>
          <section className="intro">
            <p>
              Hallo,<br/>
              ich bin <span className="name">Richard Sternagel</span>,<br />
              Web-Entwickler (Freelancer) aus Frankfurt am Main.
            </p>

            <p>
              Ich bin Spezialist für die <Link to={prefixLink('/angebot/')} >Entwicklung von
              Web Applikationen, Infrastruktur und Tooling</Link>. Mein
              {' '}<Link to={prefixLink('/kenntnisse/')} >praxiserprobtes
              Expertenwissen</Link> ist das Ergebnis meines
              Studiums (Medieninformatik) sowie meiner 10-jährigen <Link
              to={prefixLink('/projekte/')} >Berufserfahrung</Link>.
            </p>

            <p>
              Mein Fokus liegt auf <a href="https://developer.mozilla.org/en/docs/Web/JavaScript">JavaScript</a>
              {' '}<span className="amp">&</span> <a href="https://nodejs.org/en/">Node.js</a>.
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

            padding: 10px 10px;
          }

          .contact a {
            padding-left: 5px;
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
            padding: 0 3px;
          }

          :global(.amp) {
            font-family: Palatino, 'Palatino Linotype', serif;
            font-style: italic;
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
