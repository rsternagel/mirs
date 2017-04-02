import React from 'react'
import { Link } from 'react-router'
import { rhythm, scale } from 'utils/typography'

class Nav extends React.Component {
  render () {

    const navItems = ['angebot', 'projekte', 'kenntnisse']
    let navLinks = []

    navItems.forEach((item) => {
        navLinks.push(
          <li key={item}>
            <Link to={`/${item}/`}>
              {item[0].toUpperCase().concat(item.substr(1))}
            </Link>
          </li>
        )
    })

    return (
       <nav>
         <ul>
           {navLinks}
         </ul>

         <style jsx>{`
           nav {
             flex: 8;
             margin-left: 100px;
           }

           ul {
             display: flex;
             list-style-type: none;
             justify-content: space-between;
           }
         `}</style>
       </nav>
    )
  }
}

export default Nav

