import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import ChangelogsCell from 'src/components/ChangeLogsCell'
import CreateChangelog from 'src/components/CreateChangelog/CreateChangelog'
import { useAuth } from '@redwoodjs/auth'
import { useState } from 'react'

const ChangelogsPage = () => {
  const [changelogshidden, setchangelogshidden] = useState(false)
  const { currentUser } = useAuth()
  return (
    <>
      <MetaTags title="Changelogs" description="Changelogs page" />

      <h1>Changelogs</h1>
      <h2>Änderungen am MGCP werden hier aufgelistet</h2>

      <div className="infocard">
        <div className="header">
          <span>Aktuelle Changelogs</span>
          {currentUser.roles === 'Entwickler' &&
            (changelogshidden === true ? (
              <button
                onClick={() => {
                  setchangelogshidden(false)
                }}
                className="ml-2"
              >
                <span>Changelogs einblenden</span>
              </button>
            ) : (
              <button
                onClick={() => {
                  setchangelogshidden(true)
                }}
                className="ml-2"
              >
                <span>Changelogs ausblenden</span>
              </button>
            ))}
        </div>
        <div className={'content'}>
          <div
            className={
              changelogshidden === true
                ? 'w-full h-0 scale-0'
                : 'w-full h-auto scale-100'
            }
          >
            <ChangelogsCell />
          </div>
        </div>
      </div>
      {currentUser.roles === 'Entwickler' ? <CreateChangelog /> : null}
    </>
  )
}

export default ChangelogsPage
