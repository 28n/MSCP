import { MetaTags } from '@redwoodjs/web'
import TypeRulesPanelCell from 'src/components/TypeRulesPanelCell'
import { useParams } from '@redwoodjs/router'

const AcprulesPage = () => {
  const { side } = useParams()
  return (
    <>
      <MetaTags title="ACP-Regeln" description="Acprules page" />
      <h1>ACP-Regeln</h1>
      <h2>
        Hier findest du alle Regelungen zur Verwendung des Admin Control Panel
      </h2>

      <TypeRulesPanelCell side={side} type={'acprules'} />
    </>
  )
}

export default AcprulesPage
