const AcpTags = ({ acpTags }) => {
  return (
    <div className="dashboard-content">
      <div className="col">
        <div className="infocard">
          <div className="header">
            <span>Tags</span>
          </div>
          <div className="content">
            <table>
              <thead>
                <tr>
                  <th>ACP-Tag</th>
                  <th>Rolle</th>
                </tr>
              </thead>
              <tbody>
                {acpTags.map((val) => {
                  return (
                    <tr key={val.id}>
                      <td>{'@' + val.email}</td>
                      <td>
                        <span className={'role '} id={val.roles.toLowerCase()}>
                          {val.roles}
                        </span>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AcpTags
