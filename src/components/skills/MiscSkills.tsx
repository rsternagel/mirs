import React from 'react'

const MiscSkills: React.FC = () => (
  <div>
    <dl className="skill-list">
      <dt className="category">Agile Software Dev</dt>
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
          <li className="middle">Linux</li>
        </ul>
      </dd>
    </dl>
  </div>
)

export default MiscSkills
