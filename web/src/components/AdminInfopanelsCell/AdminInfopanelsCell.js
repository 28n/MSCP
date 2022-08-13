import AdminInfopanels from '../AdminInfopanels/AdminInfopanels'

export const QUERY = gql`
  query AdminInfopanelsQuery {
    infoPanels {
      id
      name
      createdAt
      createdBy
      changedBy
      side
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ infoPanels }) => {
  return <AdminInfopanels infoPanels={infoPanels} />
}
