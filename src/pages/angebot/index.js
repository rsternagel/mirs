import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import MdMailOutline from 'react-icons/lib/md/mail-outline'

const Angebot = ({ data: { site: { siteMetadata: { title: siteTitle } } } }) =>
  <div>
    <Helmet>
      <title>{`Angebot | ${siteTitle}`}</title>
    </Helmet>

    <h1>Angebot</h1>

    <p>Sie benötigen Unterstützung bei</p>
    <ul className="noBullet">
      <li>… der Entwicklung einer komplexen Web-Applikation?</li>
      <li>
        … der Entwicklung eines kritischen Projektes, das in JavaScript (inkl.
        Node.js) geschrieben ist?
      </li>
      <li>
        … der Erweiterung Ihrer Infrastruktur oder Ihres Toolings, bspw. Ihres
        Entwicklungs- oder Deploymentprozesses (<abbr title="Continuous Integration">CI</abbr>/
        <abbr title="Continuous Delivery">CD</abbr>-Systeme)?
      </li>
    </ul>
    <p>Dann bin ich der passende Mann für Sie.</p>

    <header>
      <h2>Mein Profil:</h2>
      <em>Senior Web-Entwickler,</em>
      <br />
      der Full-Stack kann, aber sich klar auf das Frontend fokussiert.
    </header>

    <ul>
      <li>
        Ich kenne aktuelle Frameworks (<a href="(https://angular.io/">
          Angular
        </a>, <a href="https://vuejs.org/">Vue</a>) und Libraries (<a href="https://facebook.github.io/react/">React</a>)
        gut.
      </li>
      <li>
        Mein Schwerpunkt liegt auf{' '}
        <a href="https://facebook.github.io/react/">React</a> und seinem
        Ökosystem (z.B. <a href="http://redux.js.org/">Redux</a>,{' '}
        <a href="http://graphql.org/">GraphQL</a>, {' '}
        <a href="https://facebook.github.io/relay/">Relay</a>,{' '}
        <a href="https://webpack.js.org/">webpack</a>).
      </li>
      <li>
        Agile Vorgehensmodelle (z.B. Kanban und{' '}
        <a href="https://www.scrum.org/">Scrum</a>) sind mir mehr als vertraut.
      </li>
      <li>
        Ich kommuniziere mit allen Beteiligten (z.B. PM, Backend, UI/UX-Design,
        Ops, SysAdmin) auf Augenhöhe.
      </li>
      <li>
        Build-Tools und Versionsverwaltung sind für mich selbstverständlich.
      </li>
      <li>Mit ECMAScript 6/20XX und Node.js kenne ich mich sehr gut aus.</li>
    </ul>

    <h2>
      Welchen <strong>Nutzen</strong> kann ich Ihnen außerdem bieten:
    </h2>

    <ul>
      <li>
        Ich bringe mein praxiserprobtes 10-jähriges Expertenwissen und meine
        Berufserfahrung ein.
      </li>
      <li>
        Ich arbeite dediziert immer nur für ein Projekt, weil Multi-Tasking
        nicht funktioniert und Kontext-Switches teuer sind.
      </li>
      <li>
        Ich gliedere mich nahtlos in agile Teams ein und beteilige mich aktiv an
        der Einführung von agilen Vorgehensmodellen (z.B. Scrum/Kanban), wenn
        gewünscht.
      </li>
      <li>
        Ich lege Wert auf sauberen, lesbaren und einfachen Code. Kommentare,
        Dokumentation im Code sowie Code Reviews sind für mich
        selbstverständlich.
      </li>
      <li>
        Ich bin mit sämtlichen Praktiken des „eXtreme Programming“ vertraut und
        setze viele von diesen ein (z.B. Pair Programming, Coding Standards,
        Code Review, Continuous Integration, Continuous Delivery, Planning, Unit
        Tests, Integrationstests). Bei Bedarf bringe ich diese gerne in die
        Teamkultur mit ein.
      </li>
      <li>
        Ich bin ausgesprochen teamfähig, da ich lange als Angestellter auch mit
        IT-Freelancern zusammengearbeitet habe und um deren Reibungspunkte und
        Anforderungen weiß.
      </li>
      <li>
        Ich habe den Anspruch, qualitativen, verständlichen und wartbaren Code
        zu hinterlassen. Deshalb trage ich aktiv mein Wissen ins Team für die
        Zeit nach meinem Einsatz.
      </li>
    </ul>

    <h2>Packen wir es zusammen an!</h2>

    <p className="contact">
      Nennen Sie mir Ihre Herausforderungen, bei denen ich Sie unterstützen
      kann:
      <span>
        <MdMailOutline /> {' '}
        <a href="mailto:rsternagel@posteo.de">rsternagel@posteo.de</a>
      </span>
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
        font-size: 100%;
        list-style-type: none;
        margin-left: 1rem;
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

Angebot.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
}

export default Angebot

export const pageQuery = graphql`
  query OfferQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
