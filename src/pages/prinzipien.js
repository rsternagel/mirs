import React from 'react'

import { graphql } from 'gatsby'
import Helmet from 'react-helmet'

import Layout from '../components/Layout'

const Prinzipien = ({
  data: {
    site: {
      siteMetadata: { title: siteTitle }
    }
  },
  location
}) => (
  <Layout location={location}>
    <div>
      <Helmet>
        <title>{`Impressum | ${siteTitle}`}</title>
      </Helmet>

      <h1>Prinzipien</h1>
      <p>
        Angelehnt an{' '}
        <a href="http://www.python.org/dev/peps/pep-0020/">The Zen of Python</a>{' '}
        und das <a href="http://agilemanifesto.org/ ">Agile Manifesto</a>,
        einige meiner Überzeugungen:
      </p>
      <ul>
        <li>
          General
          <ul>
            <li>Open Source over Closed Source</li>
            <li>Open Web (Platform) over Closed Web Technologies</li>
            <li>Evolutionary Design over Speculative Design</li>
            <li>Interdisciplinary teams over workplace silos</li>
            <li>Agile software development over Waterfall (model)</li>
          </ul>
        </li>
        <li>
          Implementation
          <ul>
            <li>No code (if possible) over some code</li>
            <li>
              As few code as possible over too much code (
              <abbr title="You ain't gonna need it">YAGNI</abbr>{' '}
              <span className="amp">&</span>{' '}
              <abbr title="Keep It Simple, Stupid">KISS</abbr>)
            </li>
            <li>
              Reusing stuff over <abbr title="Not Invented Here">NIH</abbr>
            </li>
          </ul>
        </li>
      </ul>

      <p>
        That is, while there is value in the items on the right, I value the
        items on the left more.
      </p>
    </div>
  </Layout>
)

export default Prinzipien

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`
