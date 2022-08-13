import * as FaIcons from 'react-icons/fa'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

const READ_NOTIFICATION_MUTATION = gql`
  mutation ReadNotificationMutation($id: Int!) {
    updateNotification(id: $id, input: { isRead: true }) {
      id
    }
  }
`

const Notification = ({ notifications }) => {
  const [readNotification] = useMutation(READ_NOTIFICATION_MUTATION, {
    onCompleted: () => {
      toast.success('Benachrichtigung wurde als gelesen markiert.')
    },
  })
  function read(id) {
    readNotification({ variables: { id } })
  }
  return (
    <div className="notif-row">
      {notifications.map((notification) => {
        let date = new Date(notification.createdAt)
        let dateString = date.toLocaleDateString()
        let timeString = date.toLocaleTimeString()
        return (
          <div className="notification" key={notification.id}>
            <header>
              <h1>{notification.title}</h1>
              <div className="ml-auto flex flex-col items-start">
                <h2 className="text-gray-400">
                  {dateString} | {timeString}
                </h2>
                <span className="text-sm flex flex-row items-center gap-2 text-gray-400">
                  <FaIcons.FaUser />
                  {notification.createdBy}
                </span>
              </div>
            </header>
            <section>
              <h2 className="createdby">von {notification.createdBy}</h2>
              <br />
              <span>{notification.content}</span>
            </section>

            {/* <button
              onClick={() => {
                read(notification.id)
              }}
            >
              <FaIcons.FaEye />
              Gesehen
            </button> */}
          </div>
        )
      })}
    </div>
  )
}

/* <div className="notif-row">
      {notifications.map((notification) => {
        return (
          <div className="notification" key={notification.id}>
            <div>
              <h1>{notification.title}</h1>
              <h2>von {notification.createdBy}</h2>
              <span>{notification.content}</span>
            </div>
            <div>
              <button
                onClick={() => {
                  read(notification.id)
                }}
              >
                <FaIcons.FaEye />
                Gesehen
              </button>
            </div>
          </div>
        )
      })}
    </div> */

export default Notification
