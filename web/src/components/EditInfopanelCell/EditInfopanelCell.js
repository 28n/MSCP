export const QUERY = gql`
  query FindRulesPanel($id: Int!) {
    rulesPanel(id: $id) {
      id
      title
      sortOrder
      createdAt
      createdBy
      side
      type
      content
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

  import EditInfopanel from "../EditInfopanel/EditInfopanel"

export const Success = ({ rulesPanel }) => {
  return <EditInfopanel rulesPanel={rulesPanel} />
}
