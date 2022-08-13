export const QUERY = gql`
  query AllUsersQuery {
    users {
      id
      email
      roles
      isActive
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

import AllUsers from '../AllUsers/AllUsers'

export const Success = ({ users }) => {
  return <AllUsers users={users} />
}
