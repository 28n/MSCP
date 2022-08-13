export const QUERY = gql`
  query GlobalNotificationsQuery {
    globalNotifications {
      id
      createdBy
      createdAt
      title
      content
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <></>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

import GlobalNotifications from '../GlobalNotifications/GlobalNotifications'

export const Success = ({ globalNotifications }) => {
  return <GlobalNotifications globalNotifications={globalNotifications} />
}
