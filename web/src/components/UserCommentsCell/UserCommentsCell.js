export const QUERY = gql`
  query UserCommentsQuery($userName: String!) {
    userComments(userName: $userName) {
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

export const Empty = () => (
  <div className="infocard">
    <div className="header">Letzte Kommentare</div>
    <div className="content">
      <table>
        <thead>
          <tr>
            <th>Kommentar</th>
            <th>Erstellt von</th>
            <th>Datum</th>
          </tr>
        </thead>
      </table>
    </div>
  </div>
)

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

import UserComments from 'src/components/UserComments'

export const Success = ({ userComments, refetch }) => {
  return <UserComments userComments={userComments} refetch={refetch} />
}
