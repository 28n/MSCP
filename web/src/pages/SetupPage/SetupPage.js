import { Link, routes } from '@redwoodjs/router'
import { MetaTags, useMutation } from '@redwoodjs/web'
import { useAuth } from '@redwoodjs/auth'

const ACTIVATE_USERMUTATION = gql`
  mutation UpdateUserInput($id: Int!, $input: UpdateUserInput!) {
    updateUser(id: $id, input: $input) {
      id
    }
  }
`

const CREATE_COMMENT_MUTATION = gql`
  mutation CreateCommentInput($input: CreateCommentInput!) {
    createComment(input: $input) {
      id
    }
  }
`

const SetupPage = () => {
  const { currentUser, logOut } = useAuth()
  const [create] = useMutation(ACTIVATE_USERMUTATION)
  const [createComment] = useMutation(CREATE_COMMENT_MUTATION)
  const activate = () => {
    console.log(currentUser.id)
    create({ variables: { id: currentUser.id, input: { setUp: true } } })
    let obj = {
      content: "Account vom Benutzer eingerichtet, erster Besuch abgeschlossen!",
      createdBy: "System",
      createdByRole: "System",
      userName: currentUser.email,
      userId: currentUser.id
    }
    createComment({ variables: { input: obj } })
  }
  return (
    <>
      <MetaTags title="Setup" description="Setup page" />

      <h1>Erster Besuch des MSCP</h1>
      <p>
        Dein MSCP ist noch nicht eingerichtet. Bitte befolge die Schritte auf
        dieser Seite um dein MSCP zu aktivieren.
      </p>
      <div className='c'>
        Hallo. Willkommen. Das MSCP ist das Mod-Sup Control Panel vom ArmA 3 Server Team ELAN. Mit der Benutzung stimmst du zu, dass deine Daten (nur IP) gespeichert werden. Auf Anfrage kannst du diese Daten löschen lassen, solltest du mehr als 3 Monate kein Mitglied der Operative mehr sein. Während deiner Zeit als Supporter / Moderator werden im MSCP außer deiner IP keine Daten längerfristig gespeichert.
      </div>
      <div className="form-wrapper">
        <span className="font-bold text-red-500">
          Betätige zuerst den oberen, dann den unteren Button. Mit Einrichtung
          des MSCPs stimmst du den Regelungen deiner Operative zu.
        </span>
        <hr />
        <button onClick={activate}>MSCP aktivieren</button>
        <button
          className="mt-1"
          onClick={() => {
            logOut()
          }}
        >
          Benutzerkonto neu laden
        </button>
      </div>
    </>
  )
}

export default SetupPage
