import React from 'react'
import { Container } from 'react-responsive-grid'
import { rhythm, scale } from 'utils/typography'

import Nav from 'components/Nav'
import Logo from 'components/Logo'

class Template extends React.Component {
  render () {
    const { location, children } = this.props

    return (
      <div>
        <Container
          style={{
            maxWidth: rhythm(24),
            padding: `${rhythm(1.5)} ${rhythm(3/4)}`,
          }}
        >
          <header>
            <Logo />
            <Nav />
          </header>
          {children}

         <style jsx>{`
           header {
             display: flex;
             flex-direction: row;
           }
         `}</style>
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
