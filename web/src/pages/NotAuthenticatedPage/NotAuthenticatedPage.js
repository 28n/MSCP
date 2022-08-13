import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { useEffect } from 'react'
import { useAuth } from '@redwoodjs/auth'

const NotAuthenticatedPage = () => {
  const { logOut } = useAuth()

  return (
    <>
      <MetaTags title="NotAuthenticated" description="NotAuthenticated page" />

      <main className="content-full">
        <h1>Fehler</h1>
        <span>
          Du hast nicht die richtige Rolle, um auf dieses Feature zuzugreifen.
          Bitte melde dich bei deiner Leitung.
        </span>
        <button onClick={logOut}>Klicke hier, um dich auszuloggen</button>
      </main>
    </>
  )
}

export default NotAuthenticatedPage
