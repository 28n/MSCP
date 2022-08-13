import * as FaIcons from 'react-icons/fa'
import {useAuth} from '@redwoodjs/auth'
import {confirmAlert} from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'
import {useMutation} from '@redwoodjs/web'

const DELETE_CITATION_MUTATION = gql`
  mutation DeleteCitationMutation($id: Int!) {
    deleteCitation(id: $id) {
      id
    }
  }
`

const AdminUserCitations = ({ userCitations }) => {
  const {hasRole} = useAuth()
  const [deleteCitation] = useMutation(DELETE_CITATION_MUTATION, {
    onCompleted: () => {
      window.location.reload()
    }
  })
  const deleteCit = (id) => {
    confirmAlert({
      title: 'Confirm to delete',
      message: `Delete citation? #${id}`,
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            deleteCitation({ variables: { id } })
          }
        },
        {
          label: 'No',
          onClick: () => {
            return
          }
        }
      ]
    })
  }
  return (
    <div className="citation-list">
      {userCitations.map((val)=>{
        let date = new Date(val.createdAt)
        let dateString = 
          date.toLocaleDateString() + " | " + date.toLocaleTimeString()
        return (
          <div key={val.id} className="citation">
            <div>{val.content}</div>
            <div className="text-sm text-gray-400 ml-auto flex flex-col items-end gap-1">
            <div className="flex flex-row gap-1 items-center">
              <FaIcons.FaUser />
              {val.createdBy}
              <span className="role" id={val.createdByRole.toLowerCase()}>{val.createdByRole}</span>
            </div>
            {dateString}
              <span className='text-green-500 flex flex-row items-center gap-1'><FaIcons.FaCheck /><p className='flex flex-row'>verstanden</p>{hasRole("Entwickler") && (<button onClick={()=>{deleteCit(val.id)}} className='text-red-500'><FaIcons.FaTrash /></button>)}</span>
            </div>
            </div>
        )
      })}
    </div>
  )
}

export default AdminUserCitations
