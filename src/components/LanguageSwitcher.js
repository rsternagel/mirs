/* global window */

import React from 'react'

import { translate } from 'react-i18next'

const LanguageSwitcher = ({ t, pathname, i18n }) => {
  const handleChangeLanguage = (lng) => {
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
        const hasNavTitleMatchingPathname =
          window.location.pathname.search(new RegExp(`/${title}/?`)) !== -1
        if (hasNavTitleMatchingPathname) {
          const translatedNavItemId = bilingualNavTitles[title]
          window.history.replaceState(
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
  const renderLanguageChoice = (curLang, { code, label }) => (
    <button
      type="button"
      key={code}
      className={curLang.includes(code) ? 'selected' : ''}
      onClick={() => handleChangeLanguage(code)}>
      {label}
    </button>
  )
  /* eslint-enable react/destructuring-assignment */

  const languages = [
    { code: 'en', label: 'EN' },
    { code: 'de', label: 'DE' }
  ]
  const curLang = i18n.language

  return (
    <span className="lang">
      <em>{t('language')}:</em>
      {languages.map((language) => renderLanguageChoice(curLang, language))}

      <style jsx>{`
        :global(button),
        :global(button.selected) {
          font-family: inherit;
          font-size: 100%;
          border: 0;
          background-color: transparent;
          padding: 0 5px;
          text-decoration: none;
          padding-bottom: 1px;
          border-radius: 5px;
          color: #1964ae;
          cursor: pointer;
        }

        :global(button.selected) {
          background-color: #ffb;
        }

        :global(button.selected):focus {
          outline: 0;
        }

        .lang em {
          padding-right: 5px;
          font-style: normal;
        }
      `}</style>
    </span>
  )
}

export default translate()(LanguageSwitcher)
