import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { rhythm, scale } from 'utils/typography'

class Logo extends React.Component {
  render () {

    return (
      <div className="root">
        <Link to={prefixLink('/')}>Logo</Link>

         <style jsx>{`
           .root :global(a) {
            box-shadow: none;
            color: inherit;
            flex: 1;
           }
         `}</style>
      </div>
    )
  }
}

export default Logo


