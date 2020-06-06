import React from 'react'

// @ts-ignore
import { Link, navigate } from 'gatsby'

import { s } from '../utils/breakpoints'

const Nav: React.FC<{ pathname: string }> = ({ pathname }) => {
  const navTitles = ['home', 'offer', 'projects', 'skills']

  const getSelectedNavBy = (path: string): string => {
    let selectedNavItemId = ''

    navTitles.some((title) => {
      const hasNavTitleMatchingPathname =
        path.search(new RegExp(`/${title}/?`)) !== -1
      if (hasNavTitleMatchingPathname) {
        selectedNavItemId = title
        return true
      }
      return false
    })

    if (path === '/') {
      selectedNavItemId = 'home'
    }

    return selectedNavItemId
  }

  const navLinks: React.ReactElement[] = []
  const navHtmlElems = new Map()

  navTitles.forEach((item) => {
    const linkTarget = item === 'home' ? '/' : `/${item}/`
    const selNavId = getSelectedNavBy(pathname)
    const dataSelected = item === selNavId

    const liElem = (
      /* eslint-disable @typescript-eslint/no-explicit-any */
      <li
        key={item}
        id={item}
        onClick={(): any => navigate(linkTarget)}
        ref={(navHtmlElem): any => {
          navHtmlElems.set(item, navHtmlElem)
        }}
        data-selected={dataSelected}
      >
        <Link to={linkTarget}>
          {item[0].toUpperCase().concat(item.substr(1))}
        </Link>
      </li>
    )
    navLinks.push(liElem)
  })

  return (
    <nav>
      <ul>{navLinks}</ul>

      <style jsx>{`
        ul {
          position: relative;
          display: flex;
          margin-top: 10px;
        }

        ul :global(li) {
          flex: 0 1 content;
          padding: 10px 8px;
          cursor: pointer;
        }

        nav {
          font-family: 'Open Sans', Palatino, 'Palatino Linotype', serif;
          text-transform: uppercase;
          font-size: 90%;
        }

        nav :global(a) {
          padding: 3px;
          color: rgba(0, 0, 0, 0.8);
          text-decoration: none;
        }

        /* stylelint-disable no-descending-specificity */

        ul :global(li:not(:last-child)) {
          margin-right: 30px;
        }

        nav :global(li:hover),
        nav :global([data-selected='true']) {
          background-color: rgb(235, 246, 232);
          border-radius: 5px;
        }

        nav :global([data-selected='true']),
        nav :global([data-selected='true']) :global(a),
        nav :global([data-selected='true']) :global(a:visited) {
          cursor: default;
        }

        nav :global(a:hover),
        nav :global(li:hover) :global(a),
        nav :global([data-selected='true']) :global(a),
        nav :global([data-selected='true']) :global(a:visited) {
          color: #479047;
        }

        /* stylelint-enable */

        @media (max-width: ${s}) {
          ul {
            flex-direction: column;
            align-items: flex-start;
          }
        }

        @media print {
          nav {
            display: none;
          }
        }
      `}</style>
    </nav>
  )
}

export default Nav
