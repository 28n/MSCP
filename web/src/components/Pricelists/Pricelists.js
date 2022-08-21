const Pricelists = ({ pricelists }) => {
  return (
    <div className="dashboard-content">
      <div className="grid grid-cols-2 gap-4 h-fit w-full">
        {pricelists.map((val)=>{
          const setContent = (content) => {
            return {__html: content}
          }
          return (
            <div className="infocard">
              <div className="header">
                <span>{val.title}</span>
              </div>
                <div className="content" dangerouslySetInnerHTML={setContent(val.content)}></div>
            </div>
          
        )})}
        <div className="infocard">
          <div className="header">
            <span>Test</span>
          </div>
          <div className="content">content</div>
        </div>
      </div>
    </div>
  )
}

export default Pricelists
