import * as FaIcons from 'react-icons/fa'
import { navigate, routes } from '@redwoodjs/router'

const AllUsers = ({ users }) => {
  return (
    <div className="infocard">
      <div className="header">
        <span>Alle Benutzer (egal ob aktiviert oder nicht)</span>
      </div>
      <div className="content">
        {users.map((val) => {
          return (
            <div
              className="flex flex-row items-center w-full gap-2 py-1"
              key={val.id}
            >
              {val.isActive ? (
                <FaIcons.FaCheck className="text-green-500" />
              ) : (
                <FaIcons.FaTimes className="text-red-500" />
              )}
              #
              <div className="user-email">
                {val.id} {val.email}
              </div>
              <span className="role" id={val.roles.toLowerCase()}>
                {val.roles}
              </span>
              {val.id === 1 ? (
                <span className="text-xs">
                  Profil kann nicht geöffnet werden!
                </span>
              ) : (
                <button
                  onClick={() => {
                    navigate(routes.adminUserProfile({ id: val.id }))
                  }}
                  className="button"
                  id="black"
                >
                  Open Profile
                </button>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default AllUsers
