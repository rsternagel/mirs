import React from 'react'

// @ts-ignore
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

import Layout from '../components/Layout'

const Imprint = ({
  data: {
    site: {
      siteMetadata: { title: siteTitle }
    }
  },
  location
}: {
  data: { site: { siteMetadata: { title: string } } }
  location: string
}) => (
  <Layout location={location}>
    <div>
      <Helmet>
        <title>
          Imprint
          {` | ${siteTitle}`}
        </title>
      </Helmet>

      <h1>Imprint</h1>
      <p>responsible in accordance with § 5 TMG:</p>

      <h2>Address</h2>
      <p>
        Medieninformatik
        <br />
        Richard Sternagel
        <br />
        Diplom Medien-Informatiker (DH)
        <br />
        Geleitsstraße 17
        <br />
        60599 Frankfurt
      </p>
      <h2>Contact</h2>
      <p>
        <span>Phone:</span> +49 176 / 217 466 40
        <br />
        <span>Mail:</span> rsternagel@posteo.de
        <br />
      </p>
      <h2>VAT identification number</h2>
      <p>DE310204622</p>

      <style jsx>{`
        span {
          color: #555;
          padding: 0 3px 0 0;
        }
      `}</style>
    </div>
  </Layout>
)

export default Imprint

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`
