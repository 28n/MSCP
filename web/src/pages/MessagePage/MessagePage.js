import { Link, routes, useParams } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import SideMessagesCell from 'src/components/SideMessagesCell'

const MessagePage = () => {
  const { side } = useParams()
  return (
    <>
      <MetaTags title="Mitteilungen" description="Message page" />

      <h1>Mitteilungen</h1>
      <h2>
        an{' '}
        {side === 'support'
          ? 'den Support'
          : side === 'moderation' && 'die Moderation'}
      </h2>
      <SideMessagesCell side={side} />
    </>
  )
}

export default MessagePage
