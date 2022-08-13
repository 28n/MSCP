export const QUERY = gql`
  query AdminRecentCommentsQuery {
    comments {
      id
content
createdAt
createdBy
createdByRole
userName
userId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

  import AdminRecentComments from 'src/components/AdminRecentComments'

export const Success = ({ comments }) => {
  return (
    <AdminRecentComments comments={comments} />
  )
}
