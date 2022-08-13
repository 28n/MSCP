export const QUERY = gql`
  query FindUserQuery($id: Int!) {
    user: user(id: $id) {
      id
      email
      roles
      isActive
      setUp
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

import AdminUser from 'src/components/AdminUser'

export const Success = ({ user }) => {
  return <>{JSON.stringify(user)}</>
}
