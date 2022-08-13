import * as FaIcons from 'react-icons/fa'
import { MetaTags } from '@redwoodjs/web'

const AdminDeveloperActionsPage = () => {
  return (
    <>
      <MetaTags
        title="AdminDeveloperActions"
        description="AdminDeveloperActions page"
      />

      <h1>Entwickleroptionen</h1>
      <h2>Hier musst du wissen, was du tust.</h2>

      <div className="dev-grid">
        <button>
          <FaIcons.FaTimes />
          Alle Benutzer deaktivieren
        </button>
        <button>
          <FaIcons.FaCheck />
          Alle Benutzer aktivieren
        </button>
        <button>btn</button>
        <button>btn</button>
        <button>btn</button>
        <button>btn</button>
        <button>btn</button>
        <button>btn</button>
        <button>btn</button>
        <button>btn</button>
        <button>btn</button>
        <button>btn</button>
        <button>btn</button>
        <button>btn</button>
        <button>btn</button>
        <button>btn</button>
        <button>btn</button>
        <button>btn</button>
        <button>btn</button>
        <button>btn</button>
        <button>btn</button>
        <button>btn</button>
        <button>btn</button>
        <button>btn</button>
      </div>
    </>
  )
}

export default AdminDeveloperActionsPage
