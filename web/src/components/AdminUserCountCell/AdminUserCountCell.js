export const QUERY = gql`
  query FindAdminUserCountQuery {
    activeUsers {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ activeUsers }) => {
  return <>{JSON.stringify(activeUsers)}</>
}
