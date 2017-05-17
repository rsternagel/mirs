import React from 'react'
import Link from 'gatsby-link'
import logoMirs from './img/logo_mirs.png'

const Logo = () => (
  <div className="logo">
    <Link to={'/'}>
      <img src={logoMirs} alt="Medieninformatik Richard Sternagel" />
    </Link>

    <style jsx>{`
      /* TODO: replace with smaller img */
      .logo :global(img) {
        margin-left: -10px;
        margin-top: 5px;
        width: 65%;
      }
    `}</style>
  </div>
)

export default Logo

