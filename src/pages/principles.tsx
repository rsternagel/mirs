import React from 'react'

// @ts-ignore
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

import Layout from '../components/Layout'

const Principles = ({
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
        <title>{`Principles | ${siteTitle}`}</title>
      </Helmet>

      <h1>Principles</h1>
      <p>
        Leaning on{' '}
        <a href="http://www.python.org/dev/peps/pep-0020/">The Zen of Python</a>{' '}
        and the <a href="http://agilemanifesto.org/ ">Agile Manifesto</a>, some
        of my beliefs:
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
            <li>
              Plain banana over gorilla holding the banana and the entire jungle
              ;)
            </li>
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

export default Principles

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`
