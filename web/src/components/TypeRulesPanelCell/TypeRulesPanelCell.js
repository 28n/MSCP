export const QUERY = gql`
  query FindTypeRulesPanelQuery($side: String!, $type: String!) {
    typeRulesPanel: typeRulesPanel(side: $side, type: $type) {
      id
      title
      sortOrder
      content
      createdAt
      createdBy
      side
      type
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

import TypeRulesPanel from 'src/components/TypeRulesPanel'

export const Success = ({ typeRulesPanel }) => {
  return <TypeRulesPanel typeRulesPanel={typeRulesPanel} />
}
