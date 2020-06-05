import React from 'react'

// @ts-ignore
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

import Layout from '../../components/Layout'
import MainSkills from '../../components/skills/MainSkills'
import MiscSkills from '../../components/skills/MiscSkills'
import Technologies from '../../components/skills/Technologies'
import Tools from '../../components/skills/Tools'

import { s, m } from '../../utils/breakpoints'

const Skills = ({
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
          Skills
          {` | ${siteTitle}`}
        </title>
      </Helmet>

      <h1>Skills</h1>
      <p>
        This list reflects <span className="middle">what I know</span> and{' '}
        <span className="high">what I am passionate about</span>.
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
          flex-wrap: wrap;
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

        .skills :global(.details) :global(li) {
          padding-left: 5px;
          margin-bottom: 3px;
        }

        @media only screen and (max-width: ${m}) {
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

        @media only screen and (max-width: ${s}) {
          .skills :global(.row) {
            display: block;
          }
        }
      `}</style>
    </div>
  </Layout>
)

export default Skills

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`
