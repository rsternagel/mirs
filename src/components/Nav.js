/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

import React from 'react'

import { Link, navigate } from 'gatsby'
import { translate } from 'react-i18next'

import { s } from '../utils/breakpoints'

const Nav = ({ t, pathname }) => {
  const getNavTitles = () => ['home', t('offer'), t('projects'), t('skills')]

  const getBilingualNavTitles = () => {
    return {
      offer: 'angebot',
      angebot: 'offer',
      projects: 'projekte',
      projekte: 'projects',
      skills: 'kenntnisse',
      kenntnisse: 'skills'
    }
  }

  const getSelectedNavBy = (path) => {
    let selectedNavItemId = ''

    Object.keys(getBilingualNavTitles()).some((title) => {
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

  const navLinks = []
  const navHtmlElems = new Map()

  getNavTitles().forEach((item) => {
    let liElem = {}
    const linkTarget = item === 'home' ? '/' : `/${item}/`
    const selNavId = getSelectedNavBy(pathname)
    const bilingualNavs = getBilingualNavTitles()
    const dataSelected = item === selNavId || bilingualNavs[item] === selNavId

    liElem = (
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events
      <li
        key={item}
        id={item}
        onClick={() => navigate(linkTarget)}
        ref={(navHtmlElem) => {
          navHtmlElems.set(item, navHtmlElem)
        }}
        data-selected={dataSelected}>
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

export default translate()(Nav)
