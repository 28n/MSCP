import * as FaIcons from 'react-icons/fa'

const SideMessages = ({ sideMessages }) => {
  return (
    <div className="dashboard-content">
      <div className="col">
        <div className="infocard">
          <div className="header">
            <span>Mitteilungen</span>
          </div>
          <div className="content">
            <div className="citation-list">
              {sideMessages.map((val) => {
                function setContent() {
                  return { __html: val.content }
                }
                let date = new Date(val.createdAt)
                let dateString =
                  date.toLocaleDateString() +
                  ' | ' +
                  date.toLocaleTimeString(navigator.language, {
                    hour: '2-digit',
                    minute: '2-digit',
                  })
                return (
                  <div className="citation" key={val.id}>
                    <div className="flex flex-col gap-2">
                      <h1>{val.title}</h1>
                      <div dangerouslySetInnerHTML={setContent()}></div>
                    </div>
                    <div className="text-sm text-gray-400 ml-auto flex flex-col items-end gap-1">
                      <div className="flex flex-row gap-1 items-center">
                        <FaIcons.FaUser />
                        {val.createdBy}
                        <span
                          className="role"
                          id={val.createdByRole.toLowerCase()}
                        >
                          {val.createdByRole}
                        </span>
                      </div>
                      {dateString}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SideMessages
