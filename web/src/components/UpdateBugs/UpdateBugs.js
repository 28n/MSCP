import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { useAuth } from '@redwoodjs/auth'

const UPDATE_BUGREPORT = gql`
  mutation UpdateBugReport($id: Int!, $input: UpdateBugInput!) {
    updateBug(id: $id, input: $input) {
      id
    }
  }
`

const DELETE_BUGREPORT = gql`
  mutation DeleteBugReport($id: Int!) {
    deleteBug(id: $id) {
      id
    }
  }
`

const UpdateBugs = ({ bugs, userByName }) => {
  const { currentUser } = useAuth()

  const [update, { loadingupd, errorupd }] = useMutation(UPDATE_BUGREPORT, {
    onCompleted: () => {
      toast.success('Bugreport aktualisiert.')
    },
    onerror: () => {
      toast.error('Fehler beim Aktualisieren.')
    },
  })
  const [deleteBug, { loadingdel, errordel }] = useMutation(DELETE_BUGREPORT, {
    onCompleted: () => {
      toast.success('Bugreport gelöscht.')
    },
    onerror: () => {
      toast.error('Fehler beim Löschen.')
    },
  })

  function bugAnerkennen(id) {
    let obj = {
      isValid: true,
    }
    update({ variables: { id: id, input: obj } })
  }
  function bugNichtAnerkennen(id) {
    let obj = {
      isValid: false,
    }
    update({ variables: { id: id, input: obj } })
  }
  function bugBeheben(id) {
    let obj = {
      isFixed: true,
    }
    update({ variables: { id: id, input: obj } })
  }
  function bugNichtBeheben(id) {
    let obj = {
      isFixed: false,
    }
    update({ variables: { id: id, input: obj } })
  }
  function bugBekannt(id) {
    let obj = {
      isKnown: true,
    }
    update({ variables: { id: id, input: obj } })
  }
  function bugNichtBekannt(id) {
    let obj = {
      isKnown: false,
    }
    update({ variables: { id: id, input: obj } })
  }
  function bugLoeschen(id) {
    deleteBug({ variables: { id: id } })
  }
  return (
    <div className="c">
      <h2>Bugmeldungen verwalten</h2>
      <div className="flex flex-col gap-1">
        {bugs.map((bug) => {
          return (
            <div className="bugc" key={bug.id}>
              <div className="buginfo">
                <h3>{bug.title}</h3>
                <hr />
                <span>{bug.description}</span>

                <span>{bug.createdBy}</span>
                <span>{bug.createdAt}</span>
                <span
                  className={bug.isValid ? 'text-green-500' : 'text-red-500'}
                >
                  {bug.isValid
                    ? 'Bug ist anerkannt'
                    : 'Bug ist nicht anerkannt'}
                </span>
                <span
                  className={bug.isKnown ? 'text-green-500' : 'text-red-500'}
                >
                  {bug.isKnown ? 'Bug ist bekannt' : 'Bug ist nicht bekannt'}
                </span>
                <span
                  className={bug.isFixed ? 'text-green-500' : 'text-red-500'}
                >
                  {bug.isFixed ? 'Bug ist behoben' : 'Bug ist nicht behoben'}
                </span>
              </div>
              <div className="bugactions flex flex-col gap-4 ml-auto">
                <div className="flex flex-row gap-4">
                  <div className="flex flex-col">
                    <button
                      onClick={() => {
                        bugAnerkennen(bug.id)
                      }}
                    >
                      Bug anerkennen
                    </button>
                    <button
                      onClick={() => {
                        bugNichtAnerkennen(bug.id)
                      }}
                    >
                      Bug nicht anerkennen
                    </button>
                  </div>
                  <div className="flex flex-col">
                    <button
                      onClick={() => {
                        bugBekannt(bug.id)
                      }}
                    >
                      Bug bekannt
                    </button>
                    <button
                      onClick={() => {
                        bugNichtBekannt(bug.id)
                      }}
                    >
                      Bug nicht bekannt
                    </button>
                  </div>
                  <div className="flex flex-col">
                    <button
                      onClick={() => {
                        bugBeheben(bug.id)
                      }}
                    >
                      Bug behoben
                    </button>
                    <button
                      onClick={() => {
                        bugNichtBeheben(bug.id)
                      }}
                    >
                      Bug nicht behoben
                    </button>
                  </div>
                </div>
                <div className="flex flex-row gap-4">
                  {currentUser.roles === 'Entwickler' ? (
                    <div>
                      <button
                        id="delete"
                        onClick={() => {
                          bugLoeschen(bug.id)
                        }}
                      >
                        Bug löschen
                      </button>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default UpdateBugs
