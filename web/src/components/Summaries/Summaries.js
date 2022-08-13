import { useMutation } from '@redwoodjs/web'
import { useAuth } from '@redwoodjs/auth'
import * as FaIcons from 'react-icons/fa'

const DELETE_SUMMARY_MUTATION = gql`
  mutation DeleteSummaryMutation($id: Int!) {
    deleteSummary(id: $id) {
      id 
    }
}
`

const Summaries = ({ summaries }) => {
  const { hasRole } = useAuth()
  const [deleteSummary] = useMutation(DELETE_SUMMARY_MUTATION, {
    onCompleted: () => {
      window.location.reload()
    }
  })
  const delSummary = (id) => {
    deleteSummary({ variables: { id: id } })
  }
  return (
    <>
      {summaries.map((val) => {
        function setNewsContent() {
          return { __html: val.content }
        }
        function processSide() {
          switch (val.side) {
            case 'Support':
              return 'supporter'
            case 'Moderation':
              return 'moderator'
            case 'Management':
              return 'operator'
            default:
              return ''
          }
        }
        let date = new Date(val.createdAt)
        let dateString =
          date.toLocaleDateString() +
          ', ' +
          date.toLocaleTimeString(navigator.language, {
            hour: '2-digit',
            minute: '2-digit',
          })
        return (
          <div key={val.id} className="news-card">
            <h1 className="ml-1">{val.title}</h1>
            <br />
            <span
              className="summary"
              dangerouslySetInnerHTML={setNewsContent()}
            ></span>

            <div className="info">
              <span className="role" id={processSide()}>
                {val.side}
              </span>
              <span className="date">{dateString}</span>
              {hasRole(["Entwickler", "Administrator", "Projektleitung"]) && (
                <button onClick={() => delSummary(val.id)} className="ml-2 text-red-500">
                  <FaIcons.FaTrash />
                </button>
              )}
            </div>
          </div>
        )
      })}
    </>
  )
}

export default Summaries
