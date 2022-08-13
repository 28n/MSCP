import { Link, routes, NavLink } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import AdminRecentCommentsCell from 'src/components/AdminRecentCommentsCell'

const AdminRecentCommentsPage = () => {
  return (
    <>
      <MetaTags
        title="AdminRecentComments"
        description="AdminRecentComments page"
      />

      <h1>Letze Kommentare</h1>
      <h2>Hier findest du alle letzen Kommentare</h2>
      <div className='infocard'>
        <div className='header'>
          <span>Ansicht auswählen</span>
        </div>
          <div className='content'>
          <div className='flex flex-row gap-1 w-full'>
          
            <NavLink className='p-1 border border-gray-800 w-full text-center' to={routes.adminUserSearch()}>Benutzerverwaltung</NavLink>
            <NavLink className='bg-gray-800 p-1 border border-gray-800 w-full text-center' to={routes.adminRecentComments()}>Letze Kommentare</NavLink>
          </div>
        </div>
      </div>
       <AdminRecentCommentsCell /> 
    </>
  )
}

export default AdminRecentCommentsPage
