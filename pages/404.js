import React from 'react'
import Helmet from 'react-helmet'

class FourOFour extends React.Component {
  render() {
    const site = this.props.data.site
    const siteTitle = site.siteMetadata.title
    const domain = site.siteMetadata.domain

    return (
      <div>
        <Helmet title={`Fehler 404 | ${siteTitle}`}/>

        <h1>Sorry, diese Seite existiert nicht!</h1>
        <p>
          Die Seite oder der eingegebene Pfad (z.B.: {`www.${domain}/michGibtEsNicht`}),
          ist entweder falsch geschrieben oder nicht mehr verfügbar.
        </p>
        <p>
          :_(
        </p>
      </div>
    );
  }
}

export default FourOFour

export const pageQuery = `
 {
   site {
     siteMetadata {
       title
       domain
     }
   }
 }
`
