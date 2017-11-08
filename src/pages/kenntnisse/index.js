import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import MainSkills from '../../components/skills/MainSkills'
import Technologies from '../../components/skills/Technologies'
import Tools from '../../components/skills/Tools'
import MiscSkills from '../../components/skills/MiscSkills'

import { s, m } from '../../utils/breakpoints'

const Skills = ({ data: { site: { siteMetadata: { title: siteTitle } } } }) => (
  <div>
    <Helmet>
      <title>{`Kenntnisse | ${siteTitle}`}</title>
    </Helmet>

    <h1>Kenntnisse</h1>
    <p>
      Diese Liste spiegelt wider <span className="low">woher ich komme</span>,{' '}
      <span className="middle">was ich bevorzuge</span> und{' '}
      <span className="high">wofür ich brenne</span>.
    </p>

    <div className="skills">
      <MainSkills />
      <Technologies />
      <Tools />
      <MiscSkills />
    </div>

    <style jsx>{`
      .skills {
        margin-bottom: 30px;
      }

      .skills :global(ul) {
        list-style-type: none;
      }

      .skills :global(ul) {
        list-style-type: none;
      }

      .skills :global(ul),
      .skills :global(dl),
      .skills :global(dd) {
        margin-bottom: 0;
      }

      .skills :global(.skill-list) {
        display: flex;
      }

      .skills :global(.category),
      .skills :global(.details) {
        padding: 5px 0;
      }

      .skills :global(.category) {
        width: 30%;
        margin-right: 20px;
      }

      .skills :global(.details) {
        width: 70%;
      }

      .skills :global(.row) {
        display: flex;
      }

      .skills :global(.details) :global(li) {
        padding-left: 5px;
        margin-bottom: 3px;
      }

      .low,
      .skills :global(.low) {
        color: hsla(220, 0%, 60%, 0.9);
      }

      .middle,
      .skills :global(.middle) {
        color: hsla(33, 40%, 35%, 0.9);
      }

      .high,
      .skills :global(.high) {
        color: hsla(130, 45%, 30%, 1);
      }

      /* Media Queries */

      @media (max-width: ${m}) {
        .skills :global(.skill-list) {
          display: block;
        }

        .skills :global(.category) {
          width: 100%;
        }

        .skills :global(.details) {
          width: 100%;
        }
      }

      @media (max-width: ${s}) {
        .skills :global(.row) {
          display: block;
        }
      }
    `}</style>
  </div>
)

Skills.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired
      }).isRequired
    }).isRequired
  }).isRequired
}

export default Skills

export const pageQuery = graphql`
  query SkillsQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
