/* global window */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

import { s } from '../utils/breakpoints'

class Nav extends React.Component {
  constructor(props) {
    super(props)

    this.navTitles = ['home', 'angebot', 'projekte', 'kenntnisse']
    this.navHtmlElems = new Map()

    const { pathname } = props
    const selectedNavItemId = this.getInitialSelectedNav(
      pathname,
      this.navTitles
    )
    const indicatorWrapperStyle = { display: 'none' }

    this.state = { selectedNavItemId, indicatorWrapperStyle }
  }

  componentDidMount() {
    const selectedId = this.state.selectedNavItemId

    window.setTimeout(() => {
      if (selectedId === null || this.navHtmlElems.has(selectedId) === false) {
        return
      }

      const selectedHtmlElem = this.navHtmlElems.get(selectedId)
      this.moveSelectionIndicatorTo(selectedHtmlElem)

      const mql = window.matchMedia(`(max-width: ${s})`)
      mql.addListener(
        function() {
          return () =>
            this.moveSelectionIndicatorTo(
              this.navHtmlElems.get(this.state.selectedNavItemId)
            )
        }.bind(this)()
      )
    }, 500)
  }

  componentWillReceiveProps(nextProps) {
    const home = 'home'
    const { pathname } = nextProps
    let matchedNavTitle = ''
    let curPageHasOneOfNavTitlesList = []

    this.navTitles.forEach(title => {
      let isHome = pathname === '/' && title === home
      let hasNavTitleMatchingPathname =
        pathname.search(new RegExp(`/${title}/?`)) !== -1
      if (hasNavTitleMatchingPathname && matchedNavTitle === '') {
        matchedNavTitle = title
      }
      curPageHasOneOfNavTitlesList.push(isHome || hasNavTitleMatchingPathname)
    })

    const setNavActiveState = entry => {
      if (entry !== null) {
        const selectedHtmlElem = this.navHtmlElems.get(entry)
        this.setState({ selectedNavItemId: entry })
        this.moveSelectionIndicatorTo(selectedHtmlElem)
      }

      // could be an 'else' but better be explicit
      if (entry === null) {
        this.setState({ selectedNavItemId: null })
        this.moveSelectionIndicatorTo(null)
      }
    }

    if (pathname === '/') {
      // set selectedNavItemId if root no matter
      // if other links than nav home link was used
      setNavActiveState(home)
    } else if (curPageHasOneOfNavTitlesList.includes(true) === false) {
      // unset selectedNavItemId cause current
      // page is not part of any navTitle
      setNavActiveState(null)
    } else {
      // set selectedNavItemId to matching nav entry
      setNavActiveState(matchedNavTitle)
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const selectedId = this.state.selectedNavItemId

    if (selectedId === null || this.navHtmlElems.has(selectedId) === false) {
      return
    }

    if (this.state.selectedNavItemId !== prevState.selectedNavItemId) {
      const selectedHtmlElem = this.navHtmlElems.get(selectedId)
      this.moveSelectionIndicatorTo(selectedHtmlElem)
    }
  }

  getInitialSelectedNav(path, navTitles) {
    let selectedNavItemId = ''

    navTitles.forEach(title => {
      let hasNavTitleMatchingPathname =
        path.search(new RegExp(`/${title}/?`)) !== -1
      if (hasNavTitleMatchingPathname) {
        selectedNavItemId = title
      }
    })

    if (path === '/') {
      selectedNavItemId = 'home'
    }

    return selectedNavItemId
  }

  handleClick = e => {
    const newNavItemId = e.currentTarget.id
    const { selectedNavItemId } = this.state

    if (newNavItemId !== selectedNavItemId) {
      this.setState({ selectedNavItemId: newNavItemId })
    }
  }

  moveSelectionIndicatorTo(newSelectedItem) {
    let indicatorWrapperStyle = { display: 'none' }
    if (newSelectedItem !== null && newSelectedItem !== undefined) {
      const {
        clientHeight,
        clientWidth,
        offsetLeft,
        offsetTop
      } = newSelectedItem
      indicatorWrapperStyle = {
        height: clientHeight,
        transform: `translateX(${Math.floor(
          offsetLeft
        )}px) translateY(${Math.floor(offsetTop)}px)`,
        width: clientWidth
      }
    }
    this.setState({ indicatorWrapperStyle })
  }

  render() {
    let navLinks = []

    this.navTitles.forEach(item => {
      let liElem = {}
      let linkTarget = {}
      let dynamicAttrs = {}

      if (item === this.state.selectedNavItemId) {
        dynamicAttrs['data-selected'] = true
      }

      linkTarget = item === 'home' ? '/' : `/${item}/`

      liElem = (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events
        <li
          key={item}
          id={item}
          onClick={this.handleClick}
          ref={navHtmlElem => {
            this.navHtmlElems.set(item, navHtmlElem)
          }}
          {...dynamicAttrs}>
          <Link to={linkTarget}>
            {item[0].toUpperCase().concat(item.substr(1))}
          </Link>
        </li>
      )
      navLinks.push(liElem)
    })

    return (
      <nav>
        <ul>
          <li
            className="nav-indicator-wrapper"
            style={this.state.indicatorWrapperStyle}>
            <div className="nav-indicator" />
          </li>
          {navLinks}
        </ul>

        <style jsx>{`
          nav :global(a) {
            text-decoration: none;
          }

          nav {
            flex: 8 1 0;
            font-family: 'Open Sans', Palatino, 'Palatino Linotype', serif;
            text-transform: uppercase;
            font-size: 90%;
          }

          nav :global(a) {
            padding: 3px;
            color: rgba(0, 0, 0, 0.8);
          }

          nav :global(a:hover),
          nav :global([data-selected='true']) :global(a),
          nav :global([data-selected='true']) :global(a:visited) {
            color: #479047;
          }

          ul {
            position: relative;
            display: flex;
            margin-top: 20px;
          }

          ul :global(li:not(:last-child)) {
            margin-right: 30px;
          }

          ul :global(li) {
            flex: 0 1 content;
            padding-left: 8px;
            padding-right: 8px;
            padding-bottom: 10px;
            cursor: pointer;
          }

          .nav-indicator-wrapper {
            position: absolute;
            top: 0;
            left: 0;
            transform: translateX(0);
            transition: height, transform, width;
            transition-duration: 400ms;
            transition-timing-function: cubic-bezier(0.4, 1, 0.75, 0.9);
            pointer-events: none;
          }

          .nav-indicator {
            position: absolute;
            right: 0;
            bottom: 0;
            left: 0;
            background-color: hsla(105, 70%, 38%, 1);
            height: 45px;
            opacity: 0.1;
            border-radius: 5px;
          }

          /* Media Queries */

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
}

Nav.propTypes = {
  pathname: PropTypes.string.isRequired
}

export default Nav
