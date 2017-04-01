import React from 'react'
import { Link } from 'react-router'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import { rhythm, scale } from 'utils/typography'

// import MdMail from 'react-icons/lib/md/mail'
import MdMailOutline from 'react-icons/lib/md/mail-outline'
import FaPhone from 'react-icons/lib/fa/phone'

class Homepage extends React.Component {
  render () {
    const site = this.props.data.site
    const siteTitle = site.siteMetadata.title

    return (
      <div>

        <Helmet title={`${siteTitle}`}/>

        <p>
          Hallo, ich bin Richard Sternagel, Web-Entwickler aus Frankfurt.
        </p>

        <p>
          Ich bin Spezialist für die <Link to={'/angebot/'} >Entwicklung von
          Web Applikationen, Infrastruktur und Tooling</Link>. Mein
          umfangreiches und <Link to={'/kenntnisse/'} >praxiserprobtes
          Expertenwissen</Link> ist das Ergebnis meines
          Medieninformatikstudiums sowie meiner 10 jährigen <Link
          to={'/projekte/'} >Berufserfahrung</Link>.
        </p>

        <p
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}>
          So erreichen Sie mich:
          <span><FaPhone /> +49/23872389</span>
          <span><MdMailOutline /> rhdjsahjk@sjdha</span>
        </p>

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
