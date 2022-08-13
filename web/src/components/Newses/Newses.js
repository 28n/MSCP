const Newses = ({ newses }) => {
  return (
    <>
      {newses.map((val) => {
        let date = new Date(val.createdAt)
        let dateString =
          date.toLocaleDateString() +
          ', ' +
          date.toLocaleTimeString(navigator.language, {
            hour: '2-digit',
            minute: '2-digit',
          })
        function setNewsContent() {
          return { __html: val.content }
        }
        return (
          <div key={val.id} className="news">
            <section>
              <h1>{val.title}</h1>
              <div dangerouslySetInnerHTML={setNewsContent()}></div>
            </section>
            <div className="info">
              <img
                src="https://team-elan.de/images/avatars/23/1239-232a929b79e852a14dc512cadad947a666e03968.png"
                alt="avatar"
              ></img>
              <p>{val.createdBy}</p>
              <span className="role" id={val.createdByRole.toLowerCase()}>
                {val.createdByRole}
              </span>
              <span className="date">{dateString}</span>
              <span className="text-red-500 text-xs font-bold uppercase">
                {val.side}
              </span>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default Newses
