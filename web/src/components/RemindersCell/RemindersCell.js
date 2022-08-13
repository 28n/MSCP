export const QUERY = gql`
  query RemindersQuery($role: String!) {
    reminders: roleReminders(role: $role) {
      id
      createdBy
      createdAt
      content
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <></>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

import Reminder from 'src/components/Reminder'

export const Success = ({ reminders }) => {
  return <Reminder reminders={reminders} />
}
