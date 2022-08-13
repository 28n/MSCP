const TypeRulesPanel = ({ typeRulesPanel }) => {
  return (
    <div className="dashboard-content">
      <div className="col">
        {typeRulesPanel.map((val) => {
          function setContent() {
            return { __html: val.content }
          }
          return (
            <div className="infocard" key={val.id}>
              <div className="header">
                <span>{val.title}</span>
              </div>
              <div className="content">
                <div
                  className="rulescontent"
                  dangerouslySetInnerHTML={setContent()}
                ></div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default TypeRulesPanel
