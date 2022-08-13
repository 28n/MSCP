import {
  Form,
  TextAreaField,
  TextField,
  Submit,
  useForm,
} from '@redwoodjs/forms'
import DismissedCaseCommentsPerCaseCell from 'src/components/DismissedCaseCommentsPerCaseCell'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { useAuth } from '@redwoodjs/auth'

const CREATE_DISMISSEDCASECOMMENT_MUTATION = gql`
  mutation CreateDismissedCaseCommentMutation(
    $input: CreateDismissedCaseCommentInput!
  ) {
    createDismissedCaseComment(input: $input) {
      id
    }
  }
`

const DismissedCases = ({ cases }) => {
  const { currentUser } = useAuth()
  const formMethods = useForm()
  const [createDismissedCaseComment] = useMutation(
    CREATE_DISMISSEDCASECOMMENT_MUTATION,
    {
      onCompleted: () => {
        toast.success('Kommentar erstellt.')
        window.location.reload()
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )
  const sendComment = (data) => {
    let obj = {
      caseId: parseInt(data.caseId),
      opName: currentUser.email,
      opRole: currentUser.roles,
      content: data.comment,
    }
    createDismissedCaseComment({ variables: { input: obj } })
  }

  return (
    <>
      <div className="dismissedcases">
        {cases.map((val) => {
          let date = new Date(val.createdAt)
          let dateString =
            date.toLocaleDateString() +
            ' | ' +
            date.toLocaleTimeString(navigator.language, {
              hour: '2-digit',
              minute: '2-digit',
            })
          return (
            <div key={val.id} className="case">
              <div className="header">
                <span>
                  @{val.opName}{' '}
                  <span className="role mr-1" id={val.opRole.toLowerCase()}>
                    {val.opRole}
                  </span>
                  hat ein Anliegen von {val.userName + '(' + val.userId + ')'}{' '}
                  abgelehnt.{' '}
                  <span className="text-blue-500">Case-ID: #{val.id}</span>{' '}
                  {dateString}
                </span>
              </div>
              <div className="content">
                <span>{val.reason}</span>
                <br />
                <br />
                <span className="evidence">{val.evidence}</span>
              </div>
              <DismissedCaseCommentsPerCaseCell caseId={val.id} />
              <div className="add-comment">
                <div className="formwrap">
                  <Form onSubmit={sendComment}>
                    <TextField
                      name="caseId"
                      className="hidden"
                      value={val.id}
                    />
                    <TextAreaField
                      name="comment"
                      label="Kommentar"
                      placeholder="Place a comment on me! :-)"
                    />
                    <Submit>Kommentar absenden</Submit>
                  </Form>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

/* <h2>Deine letzten 3 Bewertungen</h2>
      <table>
        <thead>
          <tr>
            <th>Fallnummer</th>
            <th>Spielername</th>
            <th>Spieler-ID</th>
            <th>Grund</th>
            <th>Beweise</th>
            <th>MSCP-Name</th>
            <th>MSCP-Rolle</th>
            <th>Datum</th>
          </tr>
        </thead>
        <tbody>
          {cases.map((val) => {
            let date = new Date(val.createdAt)
            let dateString =
              date.toLocaleDateString() + ' ' + date.toLocaleTimeString()
            return (
              <tr key={val.id}>
                <td>{val.id}</td>
                <td>{val.userName}</td>
                <td>{val.userId}</td>
                <td>{val.reason}</td>
                <td>{val.evidence}</td>
                <td>{val.opName}</td>
                <td>{val.opRole}</td>
                <td>{dateString}</td>
              </tr>
            )
          })}
        </tbody>
      </table> */

export default DismissedCases
