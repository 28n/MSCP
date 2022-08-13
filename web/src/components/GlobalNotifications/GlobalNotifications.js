import { useAuth } from '@redwoodjs/auth'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/dist/toast'

const READ_NOTIFICATION = gql`
  mutation updateNotification($id: Int!) {
    updateNotification(id: $id, input: { isRead: true }) {
      id
    }
  }
`

const GlobalNotifications = ({ globalNotifications }) => {
  const { currentUser } = useAuth()
  const [update, { loading, error }] = useMutation(READ_NOTIFICATION, {
    onCompleted: () => {
      toast.success('Notification gelesen.')
    },
    onError: () => {
      toast.error('Fehler beim Lesen.')
    },
  })
  const read = (id) => {
    update({ variables: { id } })
  }
  return (
    <div className="c">
      <h2>Öffentliche Benachrichtigung</h2>
      <br />
      <div className="notif-row">
        {globalNotifications.map((val) => {
          const date = new Date(val.createdAt)
          const dateString =
            date.toLocaleDateString() + ' um ' + date.toLocaleTimeString()
          return (
            <div key={val.id} className="notification-global">
              <div>
                <h1>{val.title}</h1>
                <h2>{val.createdBy}</h2>
                <span>{val.content}</span>
              </div>
              {currentUser.roles === 'Entwickler' ? (
                <div>
                  <p>
                    Diese Global-Notification ist seit dem {dateString} aktiv.
                  </p>
                  <button
                    onClick={() => {
                      read(val.id)
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

export default GlobalNotifications
