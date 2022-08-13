export const QUERY = gql`
  query FindEditableRulesPanelQuery($side: String!, $type: String!) {
    typeRulesPanel(side: $side, type: $type) {
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

import EditableRulesPanel from "../EditableRulesPanel/EditableRulesPanel"

export const Success = ({ typeRulesPanel }) => {
  return <EditableRulesPanel typeRulesPanel={typeRulesPanel} />
}
