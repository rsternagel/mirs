import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import MainSkills from '../../components/skills/MainSkills'
import Technologies from '../../components/skills/Technologies'
import Tools from '../../components/skills/Tools'
import MiscSkills from '../../components/skills/MiscSkills'

class Skills extends React.Component {
  render () {
    const site = this.props.data.site
    const siteTitle = site.siteMetadata.title

    return (
      <div>

        <Helmet title={`Kenntnisse | ${siteTitle}`}/>

        <h1>Kenntnisse</h1>
        <p>Diese Liste spiegelt wider <span
           className="low">woher ich komme</span>, <span
           className="middle">was ich bevorzuge</span> und <span
           className="high">wofür ich brenne</span>.
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
            padding: 5px 0 5px 0;
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
            flow-direction: row;
          }

          .skills :global(.details) :global(li) {
            padding-left: 5px;
            margin-bottom: 3px;
          }

          .skills :global(.low), .low {
            color: hsla(220, 0%, 60%, .9);
          }
          .skills :global(.middle), .middle {
            color: hsla(33, 40%, 35%, .9);
          }
          .skills :global(.high), .high {
            color: hsla(130, 45%, 30%, 1);
          }
        `}</style>
      </div>
    )
  }
}

Skills.propTypes = {
  route: React.PropTypes.object,
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

