import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { useParams } from '@redwoodjs/router'
import TypeRulesPanelCell from 'src/components/TypeRulesPanelCell'

const HelprulesPage = () => {
  const { side } = useParams()
  return (
    <>
      <MetaTags title="Helprules" description="Helprules page" />

      <h1>HelprulesPage</h1>
      <h2>Hier findest du Hilfestellungen für die gewöhnlichsten Fragen</h2>
      <TypeRulesPanelCell side={side} type={'helprules'} />
    </>
  )
}

export default HelprulesPage
