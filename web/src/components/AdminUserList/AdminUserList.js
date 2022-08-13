import { routes, navigate } from '@redwoodjs/router'

const AdminUserList = ({ activeUsers }) => {
  return (
    <div className="infocard">
      <div className="header">
        <span>Aktive Benutzer</span>
      </div>
      <div className="content">
        {activeUsers.map((val) => {
          const openProfile = (id) => {
            navigate(routes.adminUserProfile({ id }))
          }
          return (
            <div
              className="flex flex-row items-center w-full gap-2 py-1"
              key={val.id}
            >
              <div className="user-email">
                #{val.id} {val.email}
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
                    openProfile(val.id)
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

export default AdminUserList
