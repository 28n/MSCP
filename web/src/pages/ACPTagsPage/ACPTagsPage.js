import { MetaTags } from '@redwoodjs/web'
import ACPTagsCell from 'src/components/ACPTagsCell/ACPTagsCell'

const AcpTagsPage = () => {
  return (
    <>
      <MetaTags title="AcpTags" description="AcpTags page" />

      <h1>ACP-Tags</h1>
      <h2>Hier findest du alle ACP-Nutzer, deren Tags und Namen</h2>

      <ACPTagsCell />
    </>
  )
}

export default AcpTagsPage
