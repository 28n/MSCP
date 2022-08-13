import { routes, navigate } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { useAuth } from '@redwoodjs/auth'
import { Form, TextField, Submit } from '@redwoodjs/forms'

const AdminDashboardPage = () => {
  const { currentUser } = useAuth()
  const openProfile = (data) => {
    navigate(routes.adminUserProfile({ id: data.user }))
  }
  return (
    <>
      <MetaTags title="Admin-Dashboard" description="AdminDashboard page" />

      <h1>Admin-Dashboard</h1>
      <h2>
        aktuelle Adminrole:{' '}
        <span className="font-bold">{currentUser.roles}</span>
      </h2>

      <div className="dashboard-content">
        <div className="col">
          <div className="infocard">
            <div className="header">
              <span>Informationen</span>
            </div>
            <div className="content">
              <div className="grid-3">
                <div>
                  <h3>Anzahl der Supporter: </h3>
                  <p>7</p>
                </div>
                <div>
                  <h3>Anzahl der Moderatoren: </h3>
                  <p>3</p>
                </div>
                <div>
                  <h3>Anzahl der Probe-Supporter: </h3>
                  <p>1</p>
                </div>
                <div>
                  <h3>Anzahl der Probe-Moderatoren: </h3>
                  <p>1</p>
                </div>
                <div>
                  <h3>Abgelehnte Fälle diese Woche: </h3>
                  <p>0</p>
                </div>
                <div>...</div>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="infocard">
            <div className="header">
              <span>Schnelle Aktionen</span>
            </div>
            <div className="content">
              <div className="grid-5">
                <div>
                  <h3>Benutzer suchen</h3>
                  <div className="formwrap">
                    <Form onSubmit={openProfile}>
                      <TextField
                        name="user"
                        placeholder="MSCP-Tag, E-Mail oder ID"
                      />
                      <Submit>Suchen</Submit>
                    </Form>
                  </div>
                </div>
                <div>
                  <h3>Account erstellen</h3>
                  <div className="formwrap">
                    <button>zur Accounterstellung</button>
                  </div>
                </div>
                <div>
                  <h3>Infopanel editieren</h3>
                  <div className="formwrap">
                    <button>zur Infopanel-Editierung</button>
                  </div>
                </div>
                <div>
                  <h3>Aktivitäten einsehen</h3>
                  <div className="formwrap">
                    <button>zur Aktivitäten-Übersicht</button>
                  </div>
                </div>
                <div>...</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AdminDashboardPage
