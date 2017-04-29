import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import MdMailOutline from 'react-icons/lib/md/mail-outline'
import FaPhone from 'react-icons/lib/fa/phone'

class Angebote extends React.Component {
  render () {
    const site = this.props.data.site
    const siteTitle = site.siteMetadata.title

    return (
      <div>

        <Helmet title={`Angebot | ${siteTitle}`}/>

        <h1>Angebot</h1>

        <h2>Sie benötigen Unterstützung bei</h2>
        <ul className="noBullet">
          <li>… der (Weiter-)Entwicklung einer Web-Applikation?</li>
          <li>… der Erweiterung ihrer Infrastruktur oder ihres Toolings
            bspw. ihres Entwicklungs- oder Deploymentprozesses
            (<abbr title="Continuous Integration">CI</abbr>/
            <abbr title="Continuous Delivery">CD</abbr>-Systeme)?
          </li>
        </ul>

        <p>oder suchen Sie konkret einen</p>

        <header>
          <strong>Senior Web-Entwickler,</strong>
          der Full-Stack kann, aber sich klar auf das Frontend fokussiert.
        </header>

        <ul>
          <li>Der aktuelle Frameworks (<a href="(https://angular.io/">Angular</a>, <a href="https://vuejs.org/">Vue</a>)
            und Libraries (<a href="https://facebook.github.io/react/">React</a>) kennt.</li>
          <li>Dem agile Vorgehensmodelle (z.B. Kanban und <a href="https://www.scrum.org/">Scrum</a>) vertraut sind.</li>
          <li>Der viele Praktiken des „eXtreme Programming“ (z.B. Pair Programming) einsetzt.</li>
          <li>Für den Build-Tools und Versionsverwaltung selbstverständlich sind.</li>
          <li>Der sich mit Node.js und den Neuerungen von ECMAScript 6/20XX auskennt.</li>
        </ul>

        <h2>Welchen <strong>Nutzen</strong> ich Ihnen außerdem bieten kann:</h2>

        <ul>
          <li>Ich bringe mein praxiserprobtes 10-jähriges Expertenwissen
            und meine Berufserfahrung ein.</li>
          <li>Ich arbeite dediziert immer nur für ein Projekt, weil Multi-Tasking
            nicht funktioniert und Kontext-Switches teuer sind.</li>
          <li>Ich gliedere mich nahtlos in agile Teams ein und beteilige mich aktiv
            an der Einführung von agilen Vorgehensmodellen (z.b. Scrum/Kanban).</li>
          <li>Ich lege Wert auf sauberen, lesbaren und einfachen Code.
            Kommentare, Dokumentation im Code sowie Code Reviews sind für mich selbstverständlich.</li>
          <li>Ich bin mit sämtlichen Praktiken des „eXtreme Programming“ vertraut und setze
            viele von ihnen ein (z.B. Pair Programming, Coding Standards, Code Review,
            Continuous Integration, Continuous Delivery, Planning, Unit Tests, Integrationstests).
            Bei Bedarf bringe ich diese gerne in die Teamkultur mit ein.</li>
          <li>Ich bin ausgesprochen teamfähig, da ich lange als Angestellter auch mit IT-Freelancern
            zusammengearbeitet habe und um deren Reibungspunkte und Anforderungen weiß.</li>
          <li>Ich habe den Anspruch qualitativen, verständlichen und wartbaren Code zu hinterlassen.
            Deshalb trage ich aktiv mein Wissen ins Team für die Zeit nach meinem Einsatz.</li>
        </ul>

        <h2>Packen wir es zusammen an!</h2>

        <p className="contact">
          Nennen Sie mir Ihre Herausforderungen bei denen ich Sie unterstützen kann:
          <span><MdMailOutline />{' '} <a href="mailto:rsternagel@posteo.de">rsternagel@posteo.de</a></span>
          <span><FaPhone />{' '} <a href="tel:+4917621746640">+49 176 / 21746640</a></span>
        </p>

        <style jsx>{`
          header {
            margin-bottom: 1.5rem;
          }

          header strong {
            display: block;
          }

          ul {
            font-size: 90%;
          }

          ul.noBullet {
             list-style-type: none;
             margin-left: 1rem;
             font-size: 95%;
          }

          .contact {
            display: flex;
            flex-direction: column;
          }

          .contact a {
            padding-left: 5px;
          }

          .contact span:first-of-type {
            margin-top: 15px;
          }
        `}</style>
      </div>
    )
  }
}

Angebote.propTypes = {
  route: React.PropTypes.object,
}

export default Angebote

export const pageQuery = `
 {
   site {
     siteMetadata {
       title
     }
   }
 }
`

