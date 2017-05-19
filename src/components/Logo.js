import React from 'react'
import Link from 'gatsby-link'
import logoMirs from './img/logo_mirs.png'

const Logo = () => (
  <div className="logo">
    <Link to={'/'}>
      <img src={logoMirs} alt="Medieninformatik Richard Sternagel" width="214" height="58" />
    </Link>

    <style jsx>{`
      .logo {
        width: 65%;
      }

      .logo :global(img) {
        min-width: 214px;
        min-height: 58px;
        margin-left: -10px;
        margin-top: 5px;
      }
    `}</style>
  </div>
)

export default Logo

