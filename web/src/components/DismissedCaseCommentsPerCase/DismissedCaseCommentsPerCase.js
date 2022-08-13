import * as FaIcons from 'react-icons/fa'

const DismissedCaseCommentsPerCase = ({ comments }) => {
  return (
    <>
      <div className="comments">
        {comments.map((val) => {
          let date = new Date(val.createdAt)
          let dateString =
            date.toLocaleDateString() +
            ' | ' +
            date.toLocaleTimeString(navigator.language, {
              hour: '2-digit',
              minute: '2-digit',
            })
          return (
            <>
              <div className="header">
                <span>
                  <span className="flex flex-row items-center gap-2">
                    <FaIcons.FaChevronRight />@{val.opName}{' '}
                    <span className="role mr-1" id={val.opRole.toLowerCase()}>
                      {val.opRole}
                    </span>
                    {dateString}
                  </span>
                </span>
              </div>
              <div className="content pl-2">{val.content}</div>
            </>
          )
        })}
      </div>
    </>
  )
}

export default DismissedCaseCommentsPerCase
