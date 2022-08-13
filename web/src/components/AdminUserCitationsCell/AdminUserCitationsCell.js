export const QUERY = gql`
  query AdminUserCitationsQuery($userName: String!) {
    userCitations(userName: $userName) {
      id
      content
      createdAt
      createdBy
      createdByRole
      userName
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

  import AdminUserCitations from "../AdminUserCitations/AdminUserCitations"

export const Success = ({ userCitations }) => {
  return (
    <AdminUserCitations userCitations={userCitations} />
  )
}
