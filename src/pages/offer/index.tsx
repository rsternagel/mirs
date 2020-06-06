import React from 'react'

// @ts-ignore
import { graphql, PageProps } from 'gatsby'
import { Helmet } from 'react-helmet'
// @ts-ignore
import { MdMailOutline } from 'react-icons/md/'

import Layout from '../../components/Layout'

const Offer: React.FC<PageProps> = ({
  data: {
    site: {
      siteMetadata: { title: siteTitle }
    }
  },
  location
}: {
  data: { site: { siteMetadata: { title: string } } }
  location: Location
}) => (
  <Layout location={location}>
    <div>
      <Helmet>
        <title>
          Offer
          {` | ${siteTitle}`}
        </title>
      </Helmet>
      <h1>Offer</h1>
      <p>You need help with</p>
      <ul className="noBullet">
        <li>
          … the development of a complex web app (at best done with React)?
        </li>
        <li>
          … the development of a complex (mobile) app written in React Native or
          Swift (iOS)?
        </li>
        <li>
          … the development of a critical project, written in
          JavaScript/TypeScript or Node.js?
        </li>
        <li>… the development of a critical project, written in Rust or Go?</li>
        <li>
          … the alignment of your infrastructure, tooling, and deployment
          process?
        </li>
        <li>… the transformation of your web app into a cloud native app?</li>
      </ul>
      <p>Then I'm the right man for you</p>
      <header>
        <h2>My profile:</h2>
        <em>Senior web/app developer,</em>
        <br />
        who does full stack and is also well-versed in the frontend field.
      </header>
      <ul>
        <li>
          I know current frameworks (
          <a href="https://facebook.github.io/react-native/">React Native</a>,{' '}
          <a href="https://angular.io/">Angular</a>,{' '}
          <a href="https://vuejs.org/">Vue</a>) and libraries (
          <a href="https://facebook.github.io/react/">React</a>) well.
        </li>
        <li>
          My focus is on <a href="https://facebook.github.io/react/">React</a> /{' '}
          <a href="https://facebook.github.io/react-native/">React Native</a>{' '}
          and its ecosystem (e.g. <a href="http://redux.js.org/">Redux</a>,{' '}
          <a href="http://graphql.org/">GraphQL</a>,{' '}
          <a href="https://webpack.js.org/">webpack</a>
          ).
        </li>
        <li>
          Agile software development (z.B. Kanban and{' '}
          <a href="https://www.scrum.org/">Scrum</a>) is more than familiar to
          me.
        </li>
        <li>
          I communicate with all participants (e.g. PM, backend, UI/UX-design,
          ops, sysadmin) at eye level.
        </li>
        <li>build tools and versioning system go without saying.</li>
        <li>ECMAScript 20XX/TypeScript and Node.js I know well.</li>
      </ul>
      <h2>
        Which <strong>value</strong> can I offer you moreover:
      </h2>
      <ul>
        <li>
          I bring my 12 years of expert knowledge and practical work experience
          to the table.
        </li>
        <li>
          I always work for one project at a time only, cause multi-tasking
          doesn't work and context switches are expensive.
        </li>
        <li>
          I integrate myself seamlessly within agile teams and participate
          actively within the introduction of agile software development (e.g.
          Scrum/Kanban), if desired.
        </li>
        <li>
          I value clean, legible and simple code. Tests and documentation as
          well as code reviews are for sure.
        </li>
        <li>
          I know all practices of „eXtreme Programming“ and use many of them
          (e.g. pair programming, coding standards, code review, continuous
          integration, continuous delivery, planning, unit tests, integration
          testing). On demand I'm happy to implant them within the team culture.
        </li>
        <li>
          I am decidedly a team player, because I'm a former long-term employee
          who also worked with IT freelancers. I know the possible friction and
          requirements for them.
        </li>
        <li>
          I have a professional standard for leaving qualitative, comprehensible
          and maintainable code behind. Therefore I actively pass my knowledge
          to your team for the time after my assignment.
        </li>
      </ul>
      <h2>Let's get ready to do some work!</h2>
      <p className="contact">
        State your challenges where you could need my assistance:
        <span>
          <MdMailOutline />{' '}
          <a href="mailto:rsternagel@posteo.de">rsternagel@posteo.de</a>
        </span>
      </p>
      <style jsx>{`
        header {
          margin-bottom: 1.5rem;
        }

        header strong {
          display: block;
        }

        ul.noBullet {
          font-size: 95%;
          list-style-type: none;
          margin-left: 1rem;
        }

        .contact {
          display: flex;
          flex-direction: column;
        }

        .contact a {
          padding-left: 10px;
        }

        .contact span:first-of-type {
          display: flex;
          align-items: center;
          margin-top: 15px;
        }
      `}</style>
    </div>
  </Layout>
)

export default Offer

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`
