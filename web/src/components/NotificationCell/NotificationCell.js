export const QUERY = gql`
  query FindNotificationQuery($userName: String!) {
    userNotifications(userName: $userName) {
      id
      userName
      createdBy
      createdAt
      title
      content
      isRead
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <>Keine Benachrichtungen vorhanden.</>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

import Notification from '../Notification/Notification'

export const Success = ({ userNotifications }) => {
  return <Notification notifications={userNotifications} />
}
