const SideSummaries = ({ summaries }) => {
  return (
    <>
      {summaries.map((val) => {
        function setNewsContent() {
          return { __html: val.content }
        }
        function processSide() {
          switch (val.side) {
            case 'Support':
              return 'supporter'
            case 'Moderation':
              return 'moderator'
            case 'Management':
              return 'operator'
            default:
              return ''
          }
        }
        let date = new Date(val.createdAt)
        let dateString =
          date.toLocaleDateString() +
          ', ' +
          date.toLocaleTimeString(navigator.language, {
            hour: '2-digit',
            minute: '2-digit',
          })
        return (
          <div key={val.id} className="news">
            <h1 className="ml-1">{val.title}</h1>
            <section>
              <div
                className="summary"
                dangerouslySetInnerHTML={setNewsContent()}
              ></div>
            </section>
            <div className="info">
              <span className="role" id={processSide()}>
                {val.side}
              </span>
              <span className="date">{dateString}</span>
            </div>
          </div>
          // <div key={val.id} className="news">
          //   <section>
          //     <h1>{val.title}</h1>
          //     <div dangerouslySetInnerHTML={setNewsContent()}></div>
          //   </section>
          //   <div className="info">
          //     <span className="role" id={processSide()}>
          //       {val.side}
          //     </span>
          //     <span className="date">{dateString}</span>
          //     <span className="text-red-500 text-xs font-bold uppercase">
          //       {val.side}
          //     </span>
          //   </div>
          // </div>
        )
      })}
    </>
  )
}

export default SideSummaries
