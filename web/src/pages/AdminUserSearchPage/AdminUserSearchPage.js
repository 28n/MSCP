import { navigate, routes, NavLink } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import {
  Form,
  Label,
  Submit,
  NumberField,
  TextField,
} from '@redwoodjs/forms'
import AdminUserListCell from 'src/components/AdminUserListCell'
import AllUsersCell from 'src/components/AllUsersCell'
import { useAuth } from '@redwoodjs/auth'

const AdminUserSearchPage = () => {
  const { signUp } = useAuth()
  const createUser = async (data) => {
    await signUp({ ...data })
    window.location.reload()
  }
  const openProfile = (data) => {
    navigate(routes.adminUserProfile({
      id: data.id,
    }))
  }
  return (
    <>
      <MetaTags title="Admin-Benutzerverwaltung" description="AdminUserSearch page" />

      <h1>Benutzerverwaltung</h1>
      <h2>
        Hier kannst du alle Benutzer verwalten.
      </h2>
      <div className='infocard'>
        <div className='header'>
          <span>Ansicht auswählen</span>
        </div>
        <div className='content'>
          <div className='flex flex-row gap-1 w-full'>
            <NavLink className='bg-gray-800 p-1 border border-gray-800 w-full text-center' to={routes.adminUserSearch()}>Benutzerverwaltung</NavLink>
            <NavLink className='p-1 border border-gray-800 w-full text-center' to={routes.adminRecentComments()}>Letze Kommentare</NavLink>
          </div>
        </div>
      </div>
      <div className='infocard'>
        <div className='header'>
          <span>Benutzer anhand der ID öffnen</span>
        </div>
        <div className='content'>
          <div className='formwrap'>
            <Form onSubmit={openProfile}>
              <Label name="id">MSCP-Tag</Label>
              <NumberField name='id' placeholder='1 (die machst du aber natürlich nicht auf! :))' />
              <Submit>Profil öfnnen</Submit>
            </Form>
          </div>
        </div>
      </div>
      <div className="infocard">
        <div className="header">
          <span>Benutzer erstellen</span>
        </div>
        <div className="content"> <div className="formwrap"> <Form onSubmit={createUser}> <Label name="username">MSCP-Tag</Label>
          <TextField name="username" placeholder="ohne @" />
          <Label name="password">Passwort</Label>
          <TextField
            name="password"
            placeholder="sicheresPasswortWelchesNieIrgendjemandEntschlüsselnWird"
          />
          <Submit>Account erstellen</Submit>
        </Form>
        </div>
        </div>
      </div>

      <AdminUserListCell />

      <AllUsersCell />
    </>
  )
}

export default AdminUserSearchPage
