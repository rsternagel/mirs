import React from 'react'

// @ts-ignore
import { Link } from 'gatsby'

// @ts-ignore
import logoMirs from './img/logo_mirs.svg'

const Logo = () => (
  <div className="logo">
    <Link to={'/'}>
      <img
        src={logoMirs}
        alt="Medieninformatik Richard Sternagel"
        width="200"
        height="48"
      />
    </Link>

    <style jsx>{`
      .logo :global(img) {
        min-width: 200px;
        min-height: 48px;
        margin-left: 5px;
        margin-top: 10px;
      }
    `}</style>
  </div>
)

export default Logo
