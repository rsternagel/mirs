import React from 'react'
import { Link } from 'react-router'
// import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import { Container } from 'react-responsive-grid'
import { prefixLink } from 'gatsby-helpers'
import { rhythm, scale } from 'utils/typography'

class Template extends React.Component {
  render () {
    const { location, children } = this.props

    const navItems = ['angebot', 'projekte', 'kenntnisse']
    let navLinks = []

    navItems.forEach((item) => {
        navLinks.push(
          <li
            key={item}
            style={{marginBottom: rhythm(1/4)}}
          >
            <Link
              style={{
                boxShadow: 'none'
              }}
              to={`/${item}/`}
            >
              {item[0].toUpperCase().concat(item.substr(1))}
            </Link>
          </li>
        )
    })

    return (
      <div>
        <Container
          style={{
            maxWidth: rhythm(24),
            padding: `${rhythm(1.5)} ${rhythm(3/4)}`,
          }}
        >
          <header
            style={{
                display: 'flex',
                flexDirection: 'row',
            }}
          >
            <Link
              style={{
                boxShadow: 'none',
                textDecoration: 'none',
                color: 'inherit',
                flex: 1,
              }}
              to={prefixLink('/')}
            >
              Logo
            </Link>
            <nav
              style={{
                flex: 8,
                marginLeft: '100px',
              }}
            >
              <ul
                style={{
                  display: 'flex',
                  listStyleType: 'none',
                  justifyContent: 'space-between',
                }}
              >
                {navLinks}
              </ul>
            </nav>
          </header>
          {children}
        </Container>
      </div>
    )
  }
}

Template.propTypes = {
  children: React.PropTypes.any,
  location: React.PropTypes.object,
  route: React.PropTypes.object,
}

export default Template
