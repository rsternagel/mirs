import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

const Datenschutz = ({
  data: {
    site: {
      siteMetadata: { title: siteTitle }
    }
  }
}) => (
  <div>
    <Helmet>
      <title>{`Datenschutz | ${siteTitle}`}</title>
    </Helmet>

    <h1>Datenschutzerklärung</h1>
    <p>
      Die Nutzung dieser Webseite ist ohne Angabe personenbezogener Daten
      möglich. Soweit auf den Seiten personenbezogene Daten (beispielsweise
      Name, Anschrift oder Email-Adressen) erhoben werden, erfolgt dies, soweit
      möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre
      ausdrückliche Zustimmung nicht an Dritte weitergegeben.
    </p>

    <p>
      Ich weise darauf hin, dass die Datenübertragung im Internet (z.B. bei der
      Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein
      lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht
      möglich.
    </p>

    <p>
      Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten
      Kontaktdaten durch Dritte zur Übersendung von nicht ausdrücklich
      angeforderter Werbung und Informationsmaterialien wird hiermit
      ausdrücklich widersprochen. Der Betreiber der Seiten behält sich
      ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von
      Werbeinformationen, etwa durch Spam-Mails, vor.
    </p>

    <h2>Cookies</h2>
    <p>
      Cookies sind kleine Dateien, die es ermöglichen, auf dem Zugriffsgerät der
      Nutzer (PC, Smartphone o.ä.) spezifische, auf das Gerät bezogene
      Informationen zu speichern. Sie dienen zum einem der
      Benutzerfreundlichkeit von Webseiten und damit den Nutzern (z.B.
      Speicherung von Logindaten). Zum anderen dienen sie, um die statistische
      Daten der Webseitennutzung zu erfassen und sie zwecks Verbesserung des
      Angebotes analysieren zu können. Die Nutzer können auf den Einsatz der
      Cookies Einfluss nehmen. Die meisten Browser verfügen eine Option mit der
      das Speichern von Cookies eingeschränkt oder komplett verhindert wird.
      Allerdings wird darauf hingewiesen, dass die Nutzung und insbesondere der
      Nutzungskomfort ohne Cookies eingeschränkt werden.
    </p>
    <p>
      Sie können viele Online-Anzeigen-Cookies von Unternehmen über die{' '}
      <a href="http://www.aboutads.info/choices/">US-amerikanische Seite</a>{' '}
      oder die{' '}
      <a href="http://www.youronlinechoices.com/uk/your-ad-choices/">
        EU-Seite
      </a>{' '}
      verwalten.
    </p>

    <h2>Datenanalyse: Clicky Web Analytics</h2>
    <p>
      Diese Website benutzt Clicky, einen Webanalysedienst der Roxr Software,
      Ltd. Clicky verwendet sog. „Cookies“, Textdateien, die auf Ihrem Computer
      gespeichert werden und die eine Analyse der Benutzung der Website durch
      Sie ermöglichen. Die durch diese Cookies erzeugten Informationen über Ihre
      Benutzung dieser Website werden an einen Server der Roxr Software, Ltd. in
      den USA übertragen und dort gespeichert.
    </p>

    <p>
      Ich weise ausdrücklich darauf hin, dass Clicky auf dieser Seite mit der
      Option „Anonymize IP addresses“ verwendet wird, welche das letzte Oktett
      Ihrer IP-Adresse durch eine 0 ersetzt. Ihre IP-Adresse wird somit
      anonymisiert gespeichert und kann nicht von mir eingesehen werden.
    </p>

    <p>
      Clicky wird durch Cookies erzeugte Informationen benutzen, um Ihre Nutzung
      der Website auszuwerten, um Reports über die Websiteaktivitäten für die
      Websitebetreiber zusammenzustellen und um weitere mit der Website- und der
      Internetnutzung verbundene Dienstleistungen zu erbringen. Auch wird Clicky
      diese Informationen gegebenenfalls an Dritte übertragen, sofern dies
      gesetzlich vorgeschrieben oder soweit Dritte diese Daten im Auftrag von
      Clicky verarbeiten.
    </p>

    <p>
      Roxr Software, Ltd. wird in keinem Fall Ihre IP-Adresse mit anderen Daten
      von der Roxr Software, Ltd. in Verbindung bringen. Sie können die
      Installation von Cookies durch eine entsprechende Einstellung Ihrer
      Browser-Software verhindern. Ich weise Sie jedoch darauf hin, dass Sie in
      diesem Fall gegebenenfalls nicht sämtliche Funktionen dieser Website
      vollumfänglich nutzen können. Durch die Nutzung dieser Website erklären
      Sie sich mit der Bearbeitung der über Sie erhobenen Daten durch Clicky in
      der zuvor beschriebenen Art und Weise und zu dem zuvor benannten Zweck
      einverstanden.
    </p>

    <p>
      Hier finde Sie eine{' '}
      <a href="https://clicky.com/terms/privacy">
        genaue Erklärung der Funktionsweise von Clicky Web Analytics und allen
        verwendeten Cookies
      </a>.
    </p>
  </div>
)

Datenschutz.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired
      }).isRequired
    }).isRequired
  }).isRequired
}

export default Datenschutz

export const pageQuery = graphql`
  query PrivacyQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
