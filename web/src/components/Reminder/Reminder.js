import { useAuth } from '@redwoodjs/auth'
import { toast } from '@redwoodjs/web/toast'
import { useMutation } from '@redwoodjs/web'

const UPDATE_REMINDER_MUTATION = gql`
  mutation UpdateReminderMutation($id: Int!, $input: UpdateReminderInput!) {
    updateReminder(id: $id, input: $input) {
      id
    }
  }
`

const Reminder = ({ reminders }) => {
  const { currentUser } = useAuth()
  const [updateReminder] = useMutation(UPDATE_REMINDER_MUTATION, {
    onCompleted: () => {
      toast.success('Notification gelesen.')
    },
    onerror: () => {
      toast.error('Fehler beim Lesen.')
    },
  })
  const read = (id) => {
    let obj = {
      isRead: true,
    }
    updateReminder({ variables: { id, input: obj } })
  }
  return (
    <div className="c">
      <h2>Erinnerungen</h2>
      <br />
      <div className="notif-row">
        {reminders.map((reminder) => {
          return (
            <div key={reminder.id} className="notification-reminder">
              <div>
                <span>{reminder.content}</span>
                <h2>{reminder.createdBy}</h2>
              </div>
              {reminder.createdBy === currentUser.email ||
              currentUser.roles === 'Operator' ||
              currentUser.roles === 'Administrator' ||
              currentUser.roles === 'Entwickler' ? (
                <div>
                  <span>
                    Diese Erinnerung ist seit dem {reminder.createdAt} aktiv.
                  </span>
                  <button
                    onClick={() => {
                      read(reminder.id)
                    }}
                  >
                    Lesen
                  </button>
                </div>
              ) : null}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Reminder
