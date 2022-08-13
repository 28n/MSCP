import * as FaIcons from 'react-icons/fa'
import { useMutation } from '@redwoodjs/web'
import { useAuth } from '@redwoodjs/auth'

const DELETE_CITATION_MUTATION = gql`
  mutation DeleteCitation($id: Int!) {
    deleteCitation(id: $id) {
      id
    }
  }
`

const UserCitations = ({ userCitations }) => {
  const { currentUser } = useAuth()
  const [deleteCitation] = useMutation(DELETE_CITATION_MUTATION, {
    onCompleted: () => {
      window.location.reload()
    },
  })
  const delCit = (id) => {
    deleteCitation({ variables: { id } })
  }
  return (
    <div className="citation-list">
      {userCitations.map((val) => {
        let date = new Date(val.createdAt)
        let dateString =
          date.toLocaleDateString() + ' | ' + date.toLocaleTimeString()
        return (
          <div key={val.id} className="citation">
            <div>{val.content}</div>
            <div className="text-sm text-gray-400 ml-auto flex flex-col items-end gap-1">
              <div className="flex flex-row gap-1 items-center">
                <FaIcons.FaUser />
                {val.createdBy}
                <span className="role" id={val.createdByRole.toLowerCase()}>
                  {val.createdByRole}
                </span>
              </div>

              {dateString}
              {currentUser.roles === 'Entwickler' && (
                <button
                  onClick={() => {
                    delCit(val.id)
                  }}
                  className="text-red-500 flex flex-row gap-2 items-center"
                >
                  <FaIcons.FaTrash className="text-red-500" />
                  Löschen
                </button>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default UserCitations
