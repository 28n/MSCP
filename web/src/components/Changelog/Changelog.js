import * as FaIcons from 'react-icons/fa'
import { useAuth } from '@redwoodjs/auth'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { useRef } from 'react'

const DELETE_CHANGELOG = gql`
  mutation DeleteChangelog($id: Int!) {
    deleteChangelog(id: $id) {
      id
    }
  }
`

const Changelog = ({ changelogs }) => {
  const { currentUser } = useAuth()
  const [deleteChangelog] = useMutation(DELETE_CHANGELOG, {
    onCompleted: () => {
      toast.success('Changelog gelöscht.')
    },
    onError: () => {
      toast.error('Fehler beim Löschen.')
    },
  })
  function deleteCL(id) {
    deleteChangelog({ variables: { id } })
  }
  function renderChangelog(changelog) {
    function processType(type) {
      switch (type) {
        case 'Add':
          return 'Neues Feature'

        case 'Rem':
          return 'Feature entfernt'

        case 'Change':
          return 'Feature geändert'

        case 'Fix':
          return 'Bugfix'

        default:
          return 'Unbekannt'
      }
    }
    if (changelog.type !== 'Section') {
      let date = new Date(changelog.createdAt)
      let dateString =
        date.toLocaleDateString() + ' ' + date.toLocaleTimeString()
      return (
        <li key={changelog.id} className={changelog.type}>
          <span>{processType(changelog.type)}</span>
          <p>
            {changelog.content} - {dateString}{' '}
            {currentUser.roles === 'Entwickler'
              ? ' - ' + changelog.createdBy
              : null}
          </p>
          {currentUser.roles === 'Entwickler' ? (
            <button
              onClick={() => {
                deleteCL(changelog.id)
              }}
              className="bg-red-500 p-[0.3rem] rounded flex items-center justify-center"
            >
              <FaIcons.FaTrashAlt />
            </button>
          ) : null}
        </li>
      )
    }
    if (changelog.type === 'Section') {
      let date = new Date(changelog.createdAt)
      let dateString = date.toLocaleDateString()
      return (
        <li key={changelog.id} className={changelog.type}>
          <h3>{dateString}</h3>
          {currentUser.roles === 'Entwickler' ? (
            <button
              onClick={() => {
                deleteCL(changelog.id)
              }}
              className=" bg-red-500 p-[0.3rem] rounded flex items-center justify-center"
            >
              <FaIcons.FaTrashAlt />
            </button>
          ) : null}
        </li>
      )
    }
  }

  return <ul className="changelogs">{changelogs.map(renderChangelog)}</ul>
}

export default Changelog
