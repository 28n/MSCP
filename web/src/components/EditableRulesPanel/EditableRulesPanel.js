import { routes, navigate } from '@redwoodjs/router'
import * as FaIcons from 'react-icons/fa'
import { useMutation } from '@redwoodjs/web'
import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'

const UPDATE_RULESPANEL_MUTATION = gql`
  mutation UpdateRulesPanel($id: Int!, $input: UpdateRulesPanelInput!) {
    updateRulesPanel(id: $id, input: $input) {
      id
    }
  }
`

const DELETE_RULESPANEL_MUTATION = gql`
  mutation DeleteRulesPanel($id: Int!) {
    deleteRulesPanel(id: $id) {
      id
    }
  } 
`

const EditableRulesPanel = ({ typeRulesPanel }) => {
  const [update] = useMutation(UPDATE_RULESPANEL_MUTATION, {
    onCompleted: () => {
      window.location.reload()
    }
  })
  const [deleteRulesPanel] = useMutation(DELETE_RULESPANEL_MUTATION, {
    onCompleted: () => {
      window.location.reload()
    }
  })
  const up = (val) => {
    let obj = {
      sortOrder: val.sortOrder - 1
    }
    update({ variables: { id: val.id, input: obj } })
  }
  const down = (val) => {
    let obj = {
      sortOrder: val.sortOrder + 1
    }
    update({ variables: { id: val.id, input: obj } })
  }
  const edit = (id) => {
    navigate(routes.editInfopanel({ id: id }))
  }
  const deleteInfo = (val) => {
    confirmAlert({
      title: 'Bist du dir sicher?',
      message: `Du bist dabei, das Panel "${val.title}" zu löschen. Diese Aktion ist irreversibel, selbst ein Entwickler kann das Panel nicht wiederherstellen.`,
      buttons: [
        {
          label: 'Ja, löschen',
          onClick: () => {
            deleteRulesPanel({ variables: { id: val.id } })
          }
        },
        {
          label: 'Nein',
        }
      ]
    })
  }
  return (
    <>
      <div className='border p-2 border-gray-80 border-gray-800 mb-2'>
        {typeRulesPanel.map((val) => {
          let date = new Date(val.createdAt)
          let dateString = date.toLocaleDateString()
          return (
            <div key={val.id} className="citation border-0">

              <div><div className='flex flex-row items-start'>
                <div className='flex flex-col gap-2 items-start'>{val.title}
                  <button onClick={() => { edit(val.id) }} className='button' id='green'>Edit Panel {val.id}</button>

                </div>
                <div className='ml-4 flex flex-col items-center'>
                  <div>{val.sortOrder}</div>
                  <button onClick={() => { up(val) }}>
                    <FaIcons.FaArrowUp />
                  </button>
                  <button onClick={() => { down(val) }} >
                    <FaIcons.FaArrowDown />
                  </button>
                </div>
              </div></div>
              <div className="text-sm text-gray-400 ml-auto flex flex-col items-end gap-1">
                <div className="flex flex-row gap-1 items-center">
                  <FaIcons.FaUser />
                  {val.createdBy}
                </div>
                {dateString}
                <button onClick={() => { deleteInfo(val) }}><FaIcons.FaTrash className='text-red-500' /></button>
              </div>
            </div>
          )

        })}
      </div>

    </>
  )
}

export default EditableRulesPanel
