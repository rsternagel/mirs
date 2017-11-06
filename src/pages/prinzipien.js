import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

const Prinzipien = ({
  data: { site: { siteMetadata: { title: siteTitle } } },
}) =>
  <div>
    <Helmet>
      <title>{`Impressum | ${siteTitle}`}</title>
    </Helmet>

    <h1>Prinzipien</h1>
    <p>
      Angelehnt an{' '}
      <a href="http://www.python.org/dev/peps/pep-0020/">
        The Zen of Python
      </a>{' '}
      und das <a href="http://agilemanifesto.org/ ">Agile Manifesto</a>, einige
      meiner Überzeugungen:
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
        Tools
        <ul>
          <li>
            An elegant, well-conceived editor (e.g Vim) over a (too big){' '}
            <abbr title="Integrated development environment">IDE</abbr>
          </li>
        </ul>
      </li>
      <li>
        Languages
        <ul>
          <li>
            dynamic languages (e.g. JavaScript, Python or Ruby) over non dynamic
            languages (e.g Java or C#)
          </li>
        </ul>
      </li>
      <li>
        Implementation
        <ul>
          <li>No code (if possible) over some code</li>
          <li>
            As few code as possible over too much code (<abbr title="You ain't gonna need it">YAGNI</abbr>{' '}
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
      That is, while there is value in the items on the right, I value the items
      on the left more.
    </p>

    <style jsx>{``}</style>
  </div>

Prinzipien.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
}

export default Prinzipien

export const pageQuery = graphql`
  query BeliefsQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
