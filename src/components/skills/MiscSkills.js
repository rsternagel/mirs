import React from 'react'
import PropTypes from 'prop-types'

import { translate } from 'react-i18next'

const MiscSkills = ({ t }) => (
  <div>
    <dl className="skill-list">
      <dt className="category">{t('agileMethods')}</dt>
      <dd className="details">
        <ul className="row">
          <li className="high">eXtreme Programming,</li>
          <li className="high">Kanban,</li>
          <li className="middle">Scrum</li>
        </ul>
      </dd>
    </dl>

    <dl className="skill-list">
      <dt className="category">Misc</dt>
      <dd className="details">
        <ul className="row">
          <li className="high">Sketch,</li>
          <li className="high">Photoshop,</li>
          <li className="high">Illustrator,</li>
          <li className="high">LibreOffice</li>
        </ul>
      </dd>
    </dl>

    <dl className="skill-list">
      <dt className="category">OS</dt>
      <dd className="details">
        <ul className="row">
          <li className="high">macOS,</li>
          <li className="middle">Linux,</li>
          <li className="low">Windows</li>
        </ul>
      </dd>
    </dl>
  </div>
)

MiscSkills.propTypes = {
  t: PropTypes.func.isRequired
}

export default translate('skills')(MiscSkills)
