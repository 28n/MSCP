import AdminMeetingSignoff from "../AdminMeetingSignoff/AdminMeetingSignoff"

export const QUERY = gql`
  query FindAdminMeetingSignoffQuery {
    meetingSignOffs {
      id
      userName
      reason
      timestamp
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ meetingSignOffs }) => {
  return <AdminMeetingSignoff meetingSignOffs={meetingSignOffs} />
}
