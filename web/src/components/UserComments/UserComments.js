import { Form, TextAreaField, Label, Submit, useForm } from '@redwoodjs/forms'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { useEffect } from 'react'

const UserComments = ({ userComments }) => {
  // useEffect(() => {
  //   refetch()
  // })
  return (
    <>
      <div className="infocard">
        <div className="header">
          <span>Letzte Kommentare</span>
        </div>
        <div className="content">
          <table>
            <thead>
              <tr>
                <th>Kommentar</th>
                <th>Erstellt von</th>
                <th>Datum</th>
              </tr>
            </thead>
            <tbody>
              {userComments.map((val) => {
                let date = new Date(val.createdAt)
                let dateString =
                  date.toLocaleDateString() +
                  ' ' +
                  date.toLocaleTimeString(navigator.language, {
                    hour: '2-digit',
                    minute: '2-digit',
                  })
                return (
                  <tr key={val.id}>
                    <td>{val.content}</td>
                    <td className="flex flex-row gap-2 items-center">
                      {val.createdBy}{' '}
                      <span
                        className="role"
                        id={val.createdByRole.toLowerCase()}
                      >
                        {val.createdByRole}
                      </span>
                    </td>
                    <td>{dateString}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default UserComments
