import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const AssistancePage = () => {
  return (
    <>
      <MetaTags title="Assistance" description="Assistance page" />

      <h1>AssistancePage</h1>
      <p>
        Find me in <code>./web/src/pages/AssistancePage/AssistancePage.js</code>
      </p>
      <p>
        My default route is named <code>assistance</code>, link to me with `
        <Link to={routes.assistance()}>Assistance</Link>`
      </p>
    </>
  )
}

export default AssistancePage
