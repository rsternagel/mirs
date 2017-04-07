import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import logoMirs from './img/logo_mirs.png'

class Logo extends React.Component {
  render () {

    return (
      <div className="logo">
        <Link to={prefixLink('/')}>
          <img src={prefixLink(logoMirs)} alt="Medieninformatik Richard Sternagel" />
        </Link>

         <style jsx>{`
           /* TODO: replace with smaller img */
           .logo :global(img) {
             margin-left: -10px;
             margin-top: 5px;
             width: 70%;
           }
         `}</style>
      </div>
    )
  }
}

export default Logo


