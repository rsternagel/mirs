/* global window, history */

import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { translate } from 'react-i18next'

class LanguageSwitcher extends Component {
  constructor(props) {
    super(props)
    const { i18n } = this.props
    this.state = { language: i18n.language }
  }

  componentWillReceiveProps = (nextProps) => {
    this.setState({ language: nextProps.i18n.language })
  }

  handleChangeLanguage = (lng) => {
    const { i18n, pathname } = this.props
    const bilingualNavTitles = {
      offer: 'angebot',
      angebot: 'offer',
      projects: 'projekte',
      projekte: 'projects',
      skills: 'kenntnisse',
      kenntnisse: 'skills'
    }

    i18n.changeLanguage(lng)

    if (pathname !== '/') {
      Object.keys(bilingualNavTitles).some((title) => {
        let hasNavTitleMatchingPathname =
          window.location.pathname.search(new RegExp(`/${title}/?`)) !== -1
        if (hasNavTitleMatchingPathname) {
          let translatedNavItemId = bilingualNavTitles[title]
          history.replaceState(
            {},
            translatedNavItemId,
            `/${translatedNavItemId}/`
          )
          return true
        }
        return false
      })
    }

    return false
  }

  /* eslint-disable react/destructuring-assignment */
  renderLanguageChoice = ({ code, label }) => (
    <button
      type="button"
      key={code}
      className={this.state.language.includes(code) ? 'selected' : ''}
      onClick={() => this.handleChangeLanguage(code)}>
      {label}
    </button>
  )
  /* eslint-enable react/destructuring-assignment */

  render = () => {
    const languages = [{ code: 'en', label: 'EN' }, { code: 'de', label: 'DE' }]
    const { t } = this.props

    return (
      <span className="lang">
        <em>{t('language')}:</em>
        {languages.map((language) => this.renderLanguageChoice(language))}

        <style jsx>{`
          :global(button) {
            background-color: transparent;
          }

          :global(button.selected) {
            background-color: #ffb;
          }

          :global(button.selected):focus {
            outline: 0;
          }

          :global(button),
          :global(button.selected) {
            font-family: inherit;
            font-size: 100%;
            border: 0;
            padding: 0 5px;
            text-decoration: none;
            padding-bottom: 1px;
            border-radius: 5px;
            color: #1964ae;
          }

          .lang em {
            padding-right: 5px;
            font-style: normal;
          }
        `}</style>
      </span>
    )
  }
}

LanguageSwitcher.propTypes = {
  i18n: PropTypes.func.isRequired,
  pathname: PropTypes.string.isRequired,
  t: PropTypes.func.isRequired
}

export default translate()(LanguageSwitcher)
