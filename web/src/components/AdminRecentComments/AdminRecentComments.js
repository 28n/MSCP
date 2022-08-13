import { NavLink, routes } from "@redwoodjs/router"

const AdminRecentComments = ({ comments }) => {
  return (
    <div className="infocard">
      <div className="header">
        <span>Letze Kommentare</span>
      </div>
      <div className="content">
            <table className="table table-auto">
              <thead>
                <tr>
                  <th>Erstellt von</th>
                  <th>User</th>
                  <th>Comment</th>
                  <th>Datum</th>
                </tr>
              </thead>
            <tbody>
            {comments.map((val)=>{
              return (
                <tr>
                  <td>{val.createdBy} <span className="role ml-2" id={val.createdByRole.toLowerCase()}>{val.createdByRole}</span></td>
                  <td><span className={"text-sm"}><NavLink className={val.userId === 0 && "text-red-500"} to={routes.adminUserProfile({id: val.userId})}>@{val.userName + ' - ' + val.userId}</NavLink></span></td>
                  <td>{val.content}</td>
                  <td>{val.createdAt}</td>
                </tr>
              )
            }
              )}
          </tbody>
            </table>
          </div>
    </div>
  )
}

export default AdminRecentComments
