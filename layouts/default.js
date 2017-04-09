import React from 'react'
import { Container } from 'react-responsive-grid'
import { rhythm, scale } from 'utils/typography'

import 'sanitize.css/sanitize.css';

import Nav from 'components/Nav'
import Logo from 'components/Logo'

class Template extends React.Component {
  render () {
    const { location, children } = this.props

    return (
      <div>
        <Container
          style={{
            maxWidth: rhythm(34),
            padding: `${rhythm(1)} ${rhythm(3/4)}`,
          }}
        >
          <header>
            <Logo />
            <Nav location={this.props.location} />
          </header>
          <section className="maincontent" role="main">
            {children}
          </section>

         <style jsx>{`
           header {
             display: flex;
             flex-direction: row;
           }

           .maincontent :global(h1) {
             font-family: Palatino, 'Palatino Linotype', Georgia, serif;
             font-size: 130%;
             border-bottom: 2px solid #6aae6a;
             display: inline-block;
             margin-bottom: 30px;
             padding: 0 5px;
           }

           .maincontent :global(h2) {
             font-family: 'Open Sans', sans-serif;
             font-size: 100%;
             margin-bottom: .7rem;
           }

           .maincontent {
             font-family: 'Open Sans', sans-serif;
           }

           .maincontent :global(a) {
             text-decoration: none;
             padding-bottom: 1px;
             /* border-bottom: 1px solid #6aae6a; */
           }

           .maincontent :global(a),
           .maincontent :global(a:visited) {
             text-decoration: none;
             padding-bottom: 1px;
             color: #1964ae;
             /* border-bottom: 1px solid #6aae6a; */
           }

           .maincontent :global(a:hover) {
             background-color: #ffb;
           }

           .maincontent :global(ul) {
             font-size: 95%;
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
