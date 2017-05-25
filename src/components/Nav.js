import React from 'react'
import Link from 'gatsby-link'

import {s, m} from '../utils/breakpoints'

class Nav extends React.Component {
  constructor(props) {
    super(props)

    const pathname = props.location.pathname
    const selectedNavItemId = this.getInitialSelectedNav(pathname, this.navTitles)
    this.state = { selectedNavItemId }
  }

  navTitles = ['home', 'angebot', 'projekte', 'kenntnisse']
  navHtmlElems = new Map()

  getInitialSelectedNav(path, navTitles) {
    let selectedNavItemId = ''

    navTitles.forEach((title, index, arr) => {
      if (path.includes(title)) {
        selectedNavItemId = title
      }
    })

    if (path === '/') {
      selectedNavItemId = 'home'
    }

    return selectedNavItemId
  }

  componentDidMount() {
    const selectedId = this.state.selectedNavItemId

    window.setTimeout(() => {
      if (selectedId === null || this.navHtmlElems.has(selectedId) === false) { return; }

      const selectedHtmlElem = this.navHtmlElems.get(selectedId)
      this.moveSelectionIndicatorTo(selectedHtmlElem)

      // TODO:
      //   make prettier and without hard coded 580px
      const mql = window.matchMedia('(max-width: 580px)');
      mql.addListener(function () {
        return function () {
          return this.moveSelectionIndicatorTo(this.navHtmlElems.get(this.state.selectedNavItemId));
        }.bind(this)
      }.bind(this)());

    }, 500)
  }

  handleClick = (e) => {
    const newNavItemId = e.currentTarget.id
    const { selectedNavItemId } = this.state

    if (newNavItemId !== selectedNavItemId) {
      this.setState({ selectedNavItemId: newNavItemId })
    }
  }

  componentWillReceiveProps(nextProps) {
    const home = 'home'
    const { pathname } = nextProps.location
    let curPageHasOneOfNavTitlesList = []

    this.navTitles.forEach((title, index, arr) => {
      let isHome = (pathname === '/' && title === home)
      curPageHasOneOfNavTitlesList.push(isHome || pathname.includes(title))
    })

    if (pathname === '/') {
      // set selectedNavItemId if root no matter
      // if other links than nav home link was used
      const selectedHtmlElem = this.navHtmlElems.get(home)
      this.setState({ selectedNavItemId: home })
      this.moveSelectionIndicatorTo(selectedHtmlElem)
    } else if (curPageHasOneOfNavTitlesList.includes(true) === false) {
      // unset selectedNavItemId cause current
      // page is not part of any navTitle
      this.setState({ selectedNavItemId: null })
      this.moveSelectionIndicatorTo(null)
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const selectedId = this.state.selectedNavItemId

    if (selectedId === null || this.navHtmlElems.has(selectedId) === false) { return; }

    if (this.state.selectedNavItemId !== prevState.selectedNavItemId) {
      const selectedHtmlElem = this.navHtmlElems.get(selectedId)
      this.moveSelectionIndicatorTo(selectedHtmlElem)
    }
  }

  moveSelectionIndicatorTo(newSelectedItem) {
    let indicatorWrapperStyle = { display: "none" }
    if (newSelectedItem !== null) {
      const { clientHeight, clientWidth, offsetLeft, offsetTop } = newSelectedItem
      indicatorWrapperStyle = {
        height: clientHeight,
        transform: `translateX(${Math.floor(offsetLeft)}px) translateY(${Math.floor(offsetTop)}px)`,
        width: clientWidth,
      }
    }
    this.setState({ indicatorWrapperStyle })
  }

  render () {
    let navLinks = []

    this.navTitles.forEach((item) => {
      let liElem = {}
      let linkTarget = {}
      let dynamicAttrs = {}

      if (item === this.state.selectedNavItemId) {
        dynamicAttrs['data-selected'] = true
      }

      linkTarget = (item === 'home')
        ? '/'
        : `/${item}/`

      liElem = <li key={item}
                   id={item}
                   onClick={this.handleClick}
                   ref={(navHtmlElem) => { this.navHtmlElems.set(item, navHtmlElem) }}
                   {...dynamicAttrs}>
        <Link to={linkTarget}>
          {item[0].toUpperCase().concat(item.substr(1))}
        </Link>
      </li>

      navLinks.push(liElem)
    })

    return (
      <nav role="navigation">
        <ul>
          <div className="nav-indicator-wrapper" style={this.state.indicatorWrapperStyle}>
            <div className="nav-indicator"></div>
          </div>
          {navLinks}
        </ul>

        <style jsx>{`
          nav :global(a) {
            text-decoration: none;
          }

          nav {
            flex: 8 1 0;
            font-family: Palatino, 'Palatino Linotype', Georgia, serif;
          }

          nav :global(a) {
            padding: 3px;
            color: rgba(0, 0, 0, .8);
          }

          nav :global([data-selected='true']) :global(a),
          nav :global([data-selected='true']) :global(a:visited) {
            color: #479047;
          }

          ul {
            position:relative;
            display: flex;
            margin-top: 20px;
          }

          ul :global(li:not(:last-child)) {
            margin-right: 30px;
            padding-bottom: 10px;
          }

          ul :global(li) {
            flex: 0 1 content;
            padding-left: 8px;
            padding-right: 8px;
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
            ul { flex-direction: column; align-items: flex-start; }
          }

          @media print {
            nav { display: none; }
          }
        `}</style>
      </nav>
    )
  }
}

export default Nav

